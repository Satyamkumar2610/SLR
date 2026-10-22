"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const SECTION_SELECTORS = [
  "[data-reveal]",
  ".page-section",
  ".page-section-dark",
  ".section-wwd",
  ".section-statement",
  ".section-areas",
  ".section-sectors-stage",
  ".section-featured-feature",
  ".section-newsroom",
  ".section-geographies-stage",
  ".section-chapter-reset",
  ".section-globe",
  ".section-stakeholders-list",
  ".section-events-stage",
  ".section-about-stage",
  ".section-cta-stage",
  ".article-layout",
  ".legal-content",
].join(", ");

// Repeating rows cascade in one after another as they scroll into view.
const ITEM_SELECTORS = [
  ".wwd-pillar",
  ".area-index-row",
  ".sector-editorial-item",
  ".story-lead",
  ".story-secondary",
  ".roster-row",
  ".event-chronology-row",
  ".corridor-row",
  ".pub-row",
  ".directory-row",
  ".capability-row",
  ".geo-directory-item",
  ".contact-format-row",
  ".pillar-strip-item",
  ".state-link",
  ".forthcoming-domain",
  ".convening-format",
].join(", ");

const MEDIA_SELECTORS = ".reveal-media";

export default function MotionRoot({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    document.documentElement.classList.add("js-ready");
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const marker = new Map<HTMLElement, string>();
    const collect = (selector: string, cls: string) =>
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => marker.has(el) || marker.set(el, cls));
    collect(SECTION_SELECTORS, "reveal-target");
    collect(ITEM_SELECTORS, "reveal-item");
    collect(MEDIA_SELECTORS, "is-armed");

    const observer = new IntersectionObserver(
      (entries) => {
        // Entries arriving in the same callback are staggered in reading order.
        const entering = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
        let step = 0;
        entering.forEach(({ target }) => {
          const el = target as HTMLElement;
          if (el.classList.contains("reveal-item")) {
            // A short stagger (50ms, capped at 250ms) so rows arrive in reading order without making anyone wait.
            const delay = Math.min(step++, 5) * 50;
            el.style.setProperty("--reveal-delay", `${delay}ms`);
            // Hand transitions back to the row's own hover styles once it has settled.
            window.setTimeout(() => el.classList.add("reveal-done"), delay + 600);
          }
          el.classList.add("is-revealed");
          observer.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    // Content inside Suspense boundaries hydrates after this effect runs.
    // Touching an element's classes before React has hydrated it causes a
    // hydration mismatch, so each element is armed only once React owns it.
    const isHydrated = (el: HTMLElement) => Object.keys(el).some((k) => k.startsWith("__reactFiber$"));
    let pending = Array.from(marker.keys());
    const started = performance.now();
    let timer = 0;
    const arm = () => {
      pending = pending.filter((el) => {
        if (!el.isConnected) return false;
        if (!isHydrated(el)) return true;
        el.classList.add(marker.get(el)!);
        observer.observe(el);
        return false;
      });
      if (pending.length && performance.now() - started < 5000) timer = window.setTimeout(arm, 50);
    };
    arm();

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}
