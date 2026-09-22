"use client";

import { useEffect, useRef } from "react";

// Renders the final value on the server (no layout shift, correct for
// no-JS and reduced-motion users), then counts up from zero on the client.
export default function CountUp({ value, delay = 0, duration = 900 }: { value: number; delay?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const final = String(value).padStart(2, "0");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(eased * value)).padStart(2, "0");
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    el.textContent = "00";
    const timer = window.setTimeout(() => (frame = requestAnimationFrame(tick)), delay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
      el.textContent = final;
    };
  }, [value, delay, duration, final]);

  return (
    <span ref={ref} className="hero-fact-num">
      {final}
    </span>
  );
}
