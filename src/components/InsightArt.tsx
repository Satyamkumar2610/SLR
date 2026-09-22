import type { ReactNode } from "react";
import type { Insight } from "@/lib/content";

const W = 400;
const H = 300;

// Deterministic PRNG so every insight gets a stable, unique composition
// that renders identically on the server and the client.
function rng(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

const r1 = (n: number) => Math.round(n * 10) / 10;

function globe(rand: () => number): ReactNode {
  const cx = 210 + rand() * 40;
  const cy = 160 + rand() * 20;
  const R = 118;
  const meridians = [0.18, 0.42, 0.66, 0.9].map((k) => (
    <ellipse key={k} cx={cx} cy={cy} rx={r1(R * k)} ry={R} className="art-line" />
  ));
  const parallels = [-0.66, -0.33, 0, 0.33, 0.66].map((k) => {
    const y = cy + R * k;
    const half = R * Math.sqrt(1 - k * k);
    return <line key={k} x1={r1(cx - half)} x2={r1(cx + half)} y1={r1(y)} y2={r1(y)} className="art-line" />;
  });
  const arcs = Array.from({ length: 3 }, (_, i) => {
    // Endpoints sit on opposite sides of the globe so every arc reads as a
    // route across it rather than a spike.
    const x1 = cx - R * (0.35 + rand() * 0.45);
    const x2 = cx + R * (0.25 + rand() * 0.5);
    const y1 = cy + R * (rand() - 0.3) * 0.8;
    const y2 = cy + R * (rand() - 0.3) * 0.8;
    const p1 = [x1, y1];
    const p2 = [x2, y2];
    const c = [(x1 + x2) / 2, Math.min(y1, y2) - 36 - rand() * 34];
    return (
      <g key={i}>
        <path d={`M${r1(p1[0])} ${r1(p1[1])} Q${r1(c[0])} ${r1(c[1])} ${r1(p2[0])} ${r1(p2[1])}`} className="art-accent art-draw" style={{ animationDelay: `${i * 220}ms` }} />
        <circle cx={r1(p1[0])} cy={r1(p1[1])} r="3" className="art-node" />
        <circle cx={r1(p2[0])} cy={r1(p2[1])} r="3" className="art-node art-pulse" />
      </g>
    );
  });
  return (
    <>
      <circle cx={cx} cy={cy} r={R} className="art-line art-line-strong" />
      {meridians}
      {parallels}
      {arcs}
    </>
  );
}

function lattice(rand: () => number): ReactNode {
  const cols = 8;
  const rows = 6;
  const pts: [number, number][] = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      pts.push([30 + x * 49 + (rand() - 0.5) * 22, 30 + y * 48 + (rand() - 0.5) * 22]);
    }
  }
  const edges: ReactNode[] = [];
  pts.forEach(([x, y], i) => {
    const right = i % cols < cols - 1 ? pts[i + 1] : null;
    const down = i + cols < pts.length ? pts[i + cols] : null;
    if (right && rand() > 0.25) edges.push(<line key={`r${i}`} x1={r1(x)} y1={r1(y)} x2={r1(right[0])} y2={r1(right[1])} className="art-line" />);
    if (down && rand() > 0.4) edges.push(<line key={`d${i}`} x1={r1(x)} y1={r1(y)} x2={r1(down[0])} y2={r1(down[1])} className="art-line" />);
  });
  let idx = Math.floor(rand() * rows) * cols;
  const path: [number, number][] = [pts[idx]];
  for (let s = 0; s < cols - 1; s++) {
    const up = idx - cols >= 0 && rand() > 0.6;
    const dn = idx + cols < pts.length && rand() > 0.6;
    idx = up ? idx - cols : dn ? idx + cols : idx;
    idx = idx % cols < cols - 1 ? idx + 1 : idx;
    path.push(pts[idx]);
  }
  const d = path.map(([x, y], i) => `${i ? "L" : "M"}${r1(x)} ${r1(y)}`).join(" ");
  return (
    <>
      {edges}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={r1(x)} cy={r1(y)} r="1.8" className="art-dot" />
      ))}
      <path d={d} className="art-accent art-draw" />
      {path.map(([x, y], i) => (
        <circle key={`p${i}`} cx={r1(x)} cy={r1(y)} r="3.2" className={`art-node ${i === path.length - 1 ? "art-pulse" : ""}`} />
      ))}
    </>
  );
}

function ledger(rand: () => number): ReactNode {
  const cols = Array.from({ length: 7 }, (_, i) => 70 + i * 44);
  const top = 92 + rand() * 12;
  return (
    <>
      <path d={`M50 ${r1(top)} L200 ${r1(top - 58)} L350 ${r1(top)} Z`} className="art-line art-line-strong" />
      <line x1="44" x2="356" y1={r1(top + 12)} y2={r1(top + 12)} className="art-line art-line-strong" />
      {cols.map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={r1(top + 22)} y2="246" className="art-line" />
          <line x1={x + 12} x2={x + 12} y1={r1(top + 22)} y2="246" className="art-line" />
        </g>
      ))}
      <line x1="36" x2="364" y1="254" y2="254" className="art-line art-line-strong" />
      <line x1="28" x2="372" y1="266" y2="266" className="art-line" />
      <line x1="120" x2="280" y1={r1(top + 12)} y2={r1(top + 12)} className="art-accent art-draw" />
      <circle cx="200" cy={r1(top - 22)} r="4" className="art-node art-pulse" />
    </>
  );
}

function market(rand: () => number): ReactNode {
  const n = 14;
  const bars = Array.from({ length: n }, (_, i) => {
    const h = 30 + rand() * 120;
    return <rect key={i} x={30 + i * 25} y={r1(250 - h)} width="12" height={r1(h)} className="art-bar" />;
  });
  let y = 180 + rand() * 30;
  const pts = Array.from({ length: n }, (_, i) => {
    y = Math.max(60, Math.min(230, y + (rand() - 0.55) * 42));
    return [36 + i * 25, y] as [number, number];
  });
  const d = pts.map(([x, py], i) => `${i ? "L" : "M"}${r1(x)} ${r1(py)}`).join(" ");
  const last = pts[pts.length - 1];
  return (
    <>
      {[70, 130, 190, 250].map((gy) => (
        <line key={gy} x1="20" x2="380" y1={gy} y2={gy} className="art-line" />
      ))}
      {bars}
      <path d={d} className="art-accent art-draw" />
      <circle cx={r1(last[0])} cy={r1(last[1])} r="4" className="art-node art-pulse" />
    </>
  );
}

function waves(rand: () => number): ReactNode {
  const cx = 60 + rand() * 60;
  const cy = 250 + rand() * 30;
  const rings = Array.from({ length: 9 }, (_, i) => (
    <circle key={i} cx={r1(cx)} cy={r1(cy)} r={40 + i * 34} className={`art-line ${i % 3 === 0 ? "art-line-strong" : ""}`} />
  ));
  const sunX = 290 + rand() * 50;
  return (
    <>
      {rings}
      <path d={`M${r1(sunX - 46)} 120 A46 46 0 0 1 ${r1(sunX + 46)} 120`} className="art-accent art-draw" />
      <line x1={r1(sunX - 70)} x2={r1(sunX + 70)} y1="120" y2="120" className="art-line art-line-strong" />
      <circle cx={r1(sunX)} cy="120" r="4" className="art-node art-pulse" />
    </>
  );
}

const motifs: Record<string, (rand: () => number) => ReactNode> = {
  geoeconomics: globe,
  "emerging-technologies": lattice,
  "global-law": ledger,
  "global-finance": market,
  energy: waves,
};

export default function InsightArt({ insight }: { insight: Insight }) {
  const rand = rng(insight.slug);
  const motif = motifs[insight.area] ?? globe;
  const bg = `art-bg-${insight.slug}`;
  const glow = `art-glow-${insight.slug}`;

  return (
    <svg
      className="insight-art"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`Abstract illustration for “${insight.title}”`}
    >
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06132B" />
          <stop offset="55%" stopColor="#0A1F44" />
          <stop offset="100%" stopColor="#3B506E" />
        </linearGradient>
        <radialGradient id={glow} cx={0.3 + rand() * 0.4} cy={0.3 + rand() * 0.3} r="0.6">
          <stop offset="0%" stopColor="#B08D57" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#B08D57" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#${bg})`} />
      <rect width={W} height={H} fill={`url(#${glow})`} />
      <g className="art-drift">{motif(rand)}</g>
    </svg>
  );
}
