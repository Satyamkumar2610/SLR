"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Photo } from "@/lib/images";

/**
 * A statement whose words light up in reading order as it scrolls through
 * the viewport. Progress is written to one CSS variable; each word derives
 * its own opacity from it in CSS, so no per-word work happens on scroll.
 * With a photo, the same variable drifts the image for a slow parallax.
 */
export default function ScrollStatement({ text, eyebrow, photo }: { text: string; eyebrow?: string; photo?: Photo }) {
  const sectionRef = useRef<HTMLElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    const section = sectionRef.current;
    if (!el || !section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section?.style.setProperty("--p", "1");
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
      section.style.setProperty("--p", p.toFixed(3));
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
    <section ref={sectionRef} className={`section-statement ${photo ? "section-statement-photo" : ""}`} aria-label={eyebrow}>
      {photo && (
        <div className="statement-photo" aria-hidden="true">
          <Image src={photo.src} alt="" fill sizes="100vw" />
        </div>
      )}
      <div className="stage-container">
        <div className="statement-inner" ref={ref} style={{ "--n": words.length } as React.CSSProperties}>
          {eyebrow && <span className={`eyebrow ${photo ? "eyebrow-light" : ""}`}>{eyebrow}</span>}
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
