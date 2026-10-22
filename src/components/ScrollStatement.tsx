"use client";

import { useEffect, useRef } from "react";

/**
 * A statement whose words light up in reading order as it scrolls through
 * the viewport. Progress is written to one CSS variable; each word derives
 * its own opacity from it in CSS, so no per-word work happens on scroll.
 */
export default function ScrollStatement({ text, eyebrow }: { text: string; eyebrow?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el?.style.setProperty("--p", "1");
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the block's top reaches 85% of the viewport, 1 once its centre passes 40%.
      const start = vh * 0.85;
      const end = vh * 0.4 - rect.height / 2;
      const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="section-statement" aria-label={eyebrow}>
      <div className="stage-container">
        <div className="statement-inner" ref={ref} style={{ "--n": words.length } as React.CSSProperties}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <p className="statement-text">
            {words.map((w, i) => (
              <span className="statement-word" key={i} style={{ "--i": i } as React.CSSProperties}>
                {w}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
