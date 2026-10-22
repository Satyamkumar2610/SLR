"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { corridors, corridorsIntro, geographies } from "@/lib/content";
import { GEO_MAP_POSITIONS } from "@/lib/worldMap";
import { PROJECTION_HEIGHT, PROJECTION_WIDTH } from "@/lib/mapGeometry";
import { GLOBE_LAND_DOTS } from "@/lib/globeDots";

/**
 * The Centre's signature visual: a dot-matrix globe that turns to each
 * strategic corridor in turn and traces its route with moving light.
 * Routes join the same geography nodes as the flat corridor map
 * (GEO_MAP_POSITIONS), drawn as great-circle arcs. Nothing quantitative is
 * implied: the pulses show direction of travel along a corridor, not volume.
 *
 * Drawn on a canvas for performance; the corridor list beside it carries
 * all the content for keyboard and screen-reader users. Rendering stops
 * while the globe is off screen, and with reduced motion the globe only
 * moves when asked to.
 */

type Vec = [number, number, number];

const RAD = Math.PI / 180;
const AUTOPLAY_MS = 6500;

function lonLatOf(slug: string): [number, number] {
  const p = GEO_MAP_POSITIONS[slug];
  return [(p.x / PROJECTION_WIDTH) * 360 - 180, 90 - (p.y / PROJECTION_HEIGHT) * 180];
}

function toVec(lon: number, lat: number): Vec {
  const c = Math.cos(lat * RAD);
  return [c * Math.sin(lon * RAD), Math.sin(lat * RAD), c * Math.cos(lon * RAD)];
}

function slerp(a: Vec, b: Vec, t: number): Vec {
  const dot = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const omega = Math.acos(dot);
  if (omega < 1e-6) return a;
  const s = Math.sin(omega);
  const ka = Math.sin((1 - t) * omega) / s;
  const kb = Math.sin(t * omega) / s;
  return [a[0] * ka + b[0] * kb, a[1] * ka + b[1] * kb, a[2] * ka + b[2] * kb];
}

// Great-circle arcs lifted off the surface so long routes read as flight paths.
function buildArc(a: Vec, b: Vec, steps = 64): Vec[] {
  const omega = Math.acos(Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2])));
  const lift = Math.min(0.22, omega * 0.16);
  const pts: Vec[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const v = slerp(a, b, t);
    const h = 1 + lift * Math.sin(Math.PI * t);
    pts.push([v[0] * h, v[1] * h, v[2] * h]);
  }
  return pts;
}

const landVecs: Vec[] = [];
for (let i = 0; i < GLOBE_LAND_DOTS.length; i += 2) landVecs.push(toVec(GLOBE_LAND_DOTS[i], GLOBE_LAND_DOTS[i + 1]));

const nodeSlugs = Array.from(new Set(corridors.flatMap((c) => c.geographies))).filter((s) => GEO_MAP_POSITIONS[s]);
const nodes = nodeSlugs.map((slug) => {
  const [lon, lat] = lonLatOf(slug);
  const geo = geographies.find((g) => g.slug === slug);
  return { slug, name: geo?.name ?? slug, isAnchor: !!geo?.isAnchor, vec: toVec(lon, lat) };
});

const routes = corridors.map((c) => {
  const vecs = c.geographies.filter((s) => GEO_MAP_POSITIONS[s]).map((s) => toVec(...lonLatOf(s)));
  const arcs: Vec[][] = [];
  for (let i = 1; i < vecs.length; i++) arcs.push(buildArc(vecs[i - 1], vecs[i]));
  // The view centres on the mean of the corridor's geographies.
  const sum = vecs.reduce<Vec>((acc, v) => [acc[0] + v[0], acc[1] + v[1], acc[2] + v[2]], [0, 0, 0]);
  const len = Math.hypot(...sum) || 1;
  const lat = Math.asin(sum[1] / len) / RAD;
  const lon = Math.atan2(sum[0], sum[2]) / RAD;
  return { slug: c.slug, arcs, view: { lon, lat: Math.max(-30, Math.min(40, lat)) } };
});

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

const wrap = (deg: number) => ((((deg + 180) % 360) + 360) % 360) - 180;

export default function CorridorGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(0);
  // null until the visitor chooses; until then the tour follows their motion preference.
  const [tourChoice, setPlaying] = useState<boolean | null>(null);
  const reducedMotion = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED_QUERY).matches, () => false);
  const playing = tourChoice ?? !reducedMotion;
  const activeRef = useRef(0);
  const viewRef = useRef({ lon: routes[0].view.lon, lat: routes[0].view.lat, free: false });

  useEffect(() => {
    activeRef.current = active;
    viewRef.current.free = false;
  }, [active]);

  // Turn to the next corridor on a timer while playing.
  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % corridors.length), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [playing]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let size = 0;
    let dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = canvas.clientWidth;
      canvas.width = Math.round(size * dpr);
      canvas.height = Math.round(size * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Drag to turn the globe.
    let drag: { x: number; y: number } | null = null;
    const onDown = (e: PointerEvent) => {
      drag = { x: e.clientX, y: e.clientY };
      canvas.setPointerCapture(e.pointerId);
      viewRef.current.free = true;
      setPlaying(false);
    };
    const onMove = (e: PointerEvent) => {
      if (!drag) return;
      const k = 180 / Math.max(size, 1);
      viewRef.current.lon = wrap(viewRef.current.lon - (e.clientX - drag.x) * k);
      viewRef.current.lat = Math.max(-60, Math.min(60, viewRef.current.lat + (e.clientY - drag.y) * k));
      drag = { x: e.clientX, y: e.clientY };
    };
    const onUp = () => (drag = null);
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);

    let frame = 0;
    let visible = true;
    let last = performance.now();

    const draw = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;
      const view = viewRef.current;
      const target = routes[activeRef.current].view;

      if (!view.free) {
        const ease = reduced ? 1 : 1 - Math.pow(0.0025, dt / 1000);
        view.lon = wrap(view.lon + wrap(target.lon - view.lon) * ease);
        view.lat += (target.lat - view.lat) * ease;
      }

      const sl = Math.sin(view.lon * RAD);
      const cl = Math.cos(view.lon * RAD);
      const st = Math.sin(view.lat * RAD);
      const ct = Math.cos(view.lat * RAD);
      const W = size * dpr;
      const R = W * 0.4;
      const cx = W / 2;
      const cy = W / 2;

      // Rotate into view space: x right, y up, z towards the viewer.
      const rot = (v: Vec): Vec => {
        const x1 = v[0] * cl - v[2] * sl;
        const z1 = v[0] * sl + v[2] * cl;
        return [x1, v[1] * ct - z1 * st, v[1] * st + z1 * ct];
      };
      const shown = (p: Vec) => p[2] > 0 || p[0] * p[0] + p[1] * p[1] > 1;

      ctx.clearRect(0, 0, W, W);

      // Atmosphere and sphere
      const halo = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.25);
      halo.addColorStop(0, "rgba(212, 188, 142, 0.16)");
      halo.addColorStop(1, "rgba(212, 188, 142, 0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, W, W);

      const body = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
      body.addColorStop(0, "#1b3a6b");
      body.addColorStop(1, "#071530");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = body;
      ctx.fill();
      ctx.strokeStyle = "rgba(212, 188, 142, 0.35)";
      ctx.lineWidth = 1 * dpr;
      ctx.stroke();

      // Land
      const dot = 1.15 * dpr * (R / (300 * dpr)) + 0.6 * dpr;
      for (const v of landVecs) {
        const p = rot(v);
        if (p[2] <= 0) continue;
        ctx.globalAlpha = 0.18 + 0.62 * p[2];
        ctx.fillStyle = "#e9edf3";
        ctx.fillRect(cx + p[0] * R - dot / 2, cy - p[1] * R - dot / 2, dot, dot);
      }
      ctx.globalAlpha = 1;

      // Routes: every corridor faintly, the active one in gold with pulses.
      routes.forEach((route, ri) => {
        const isActive = ri === activeRef.current;
        ctx.strokeStyle = isActive ? "rgba(212, 188, 142, 0.95)" : "rgba(233, 237, 243, 0.16)";
        ctx.lineWidth = (isActive ? 2 : 1) * dpr;
        for (const arc of route.arcs) {
          ctx.beginPath();
          let pen = false;
          for (const v of arc) {
            const p = rot(v);
            if (!shown(p)) {
              pen = false;
              continue;
            }
            const x = cx + p[0] * R;
            const y = cy - p[1] * R;
            if (pen) ctx.lineTo(x, y);
            else ctx.moveTo(x, y);
            pen = true;
          }
          ctx.stroke();

          if (isActive && !reduced) {
            for (let k = 0; k < 3; k++) {
              const t = ((now / 2600 + k / 3) % 1) * (arc.length - 1);
              const p = rot(arc[Math.floor(t)]);
              if (!shown(p)) continue;
              const x = cx + p[0] * R;
              const y = cy - p[1] * R;
              const glow = ctx.createRadialGradient(x, y, 0, x, y, 9 * dpr);
              glow.addColorStop(0, "rgba(236, 222, 190, 0.95)");
              glow.addColorStop(1, "rgba(236, 222, 190, 0)");
              ctx.fillStyle = glow;
              ctx.fillRect(x - 9 * dpr, y - 9 * dpr, 18 * dpr, 18 * dpr);
            }
          }
        }
      });

      // Geography nodes; the active corridor's are labelled.
      const activeGeos = new Set(corridors[activeRef.current].geographies);
      ctx.font = `600 ${11 * dpr}px system-ui, sans-serif`;
      ctx.textBaseline = "middle";
      for (const n of nodes) {
        const p = rot(n.vec);
        if (p[2] <= 0.05) continue;
        const x = cx + p[0] * R;
        const y = cy - p[1] * R;
        const on = activeGeos.has(n.slug);
        if (n.isAnchor && !reduced) {
          const ring = (now / 1800) % 1;
          ctx.beginPath();
          ctx.arc(x, y, (4 + ring * 14) * dpr, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(212, 188, 142, ${0.6 * (1 - ring)})`;
          ctx.lineWidth = 1 * dpr;
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(x, y, (on ? 4 : 2.5) * dpr, 0, Math.PI * 2);
        ctx.fillStyle = on ? "#D4BC8E" : "rgba(233, 237, 243, 0.6)";
        ctx.fill();
        if (on && p[2] > 0.25) {
          const label = n.name;
          const tw = ctx.measureText(label).width;
          // Labels point away from the globe's centre line and stay inside the canvas.
          const pad = 4 * dpr;
          const lx = Math.max(pad, Math.min(W - tw - pad * 2, x < cx ? x - 9 * dpr - tw : x + 9 * dpr));
          ctx.fillStyle = "rgba(6, 19, 43, 0.78)";
          ctx.fillRect(lx - 4 * dpr, y - 9 * dpr, tw + 8 * dpr, 18 * dpr);
          ctx.fillStyle = "#f4efe4";
          ctx.fillText(label, lx, y);
        }
      }

      if (visible) frame = requestAnimationFrame(draw);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(frame);
      if (visible) {
        last = performance.now();
        frame = requestAnimationFrame(draw);
      }
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
    };
  }, []);

  const current = corridors[active];

  return (
    <section className="section-globe" id="corridors" aria-labelledby="globe-title">
      <div className="globe-grid">
        <div className="globe-stage">
          <canvas
            ref={canvasRef}
            className="globe-canvas"
            role="img"
            aria-label={`Globe showing the ${current.name} corridor`}
          />
          <div className="globe-controls">
            <button type="button" className="globe-toggle" onClick={() => setPlaying(!playing)} aria-pressed={!playing}>
              {playing ? "Pause tour" : "Play tour"}
            </button>
            <span className="globe-hint" aria-hidden="true">Drag to turn the globe</span>
          </div>
        </div>

        <div className="globe-copy">
          <span className="eyebrow eyebrow-light">Geographies &amp; Strategic Corridors</span>
          <h2 className="globe-title" id="globe-title">Strategic Corridors We Track</h2>
          <p className="globe-lead">{corridorsIntro}</p>

          <ol className="globe-list">
            {corridors.map((c, i) => (
              <li key={c.slug}>
                <button
                  type="button"
                  className={`globe-item ${i === active ? "is-active" : ""}`}
                  aria-expanded={i === active}
                  onClick={() => {
                    setActive(i);
                    setPlaying(false);
                  }}
                >
                  <span className="globe-item-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="globe-item-name">{c.name}</span>
                  {i === active && playing && (
                    <span className="globe-item-timer" style={{ animationDuration: `${AUTOPLAY_MS}ms` }} aria-hidden="true" />
                  )}
                </button>
                {i === active && (
                  <div className="globe-item-detail">
                    <p>{c.description}</p>
                    <Link href={`/corridors#${c.slug}`} className="globe-item-link">
                      Explore this corridor <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
