"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MotionRoot({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    document.documentElement.classList.add("js-ready");
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? doc.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    // Every recurring "stage" and "chapter" wrapper in the design system,
    // plus the opt-in [data-reveal] escape hatch, gets a single shared
    // `.reveal-target` marker so one small CSS rule can animate all of
    // them in as they enter the viewport — kept in sync with scrolling via
    // IntersectionObserver rather than a fixed delay.
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          "[data-reveal]",
          ".page-section",
          ".page-section-dark",
          ".section-wwd",
          ".section-interruption",
          ".section-areas",
          ".section-sectors-stage",
          ".section-featured-feature",
          ".section-newsroom",
          ".section-geographies-stage",
          ".section-chapter-reset",
          ".section-stakeholders-list",
          ".section-events-stage",
          ".section-about-stage",
          ".section-cta-stage",
          ".article-layout",
          ".legal-content",
        ].join(", ")
      )
    );
    if (!nodes.length) return;

    nodes.forEach((el) => el.classList.add("reveal-target"));

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      nodes.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress-bar" style={{ transform: `scaleX(${progress})` }} />
      </div>
      {children}
    </>
  );
}
