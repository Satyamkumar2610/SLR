"use client";

import { useEffect, useState } from "react";

export interface SectionLink {
  id: string;
  label: string;
}

export default function SectionIndex({ sections, hideWhileVisible }: { sections: SectionLink[]; hideWhileVisible: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(hideWhileVisible);
    const heroObserver = hero
      ? new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { rootMargin: "-40% 0px 0px 0px" })
      : null;
    if (hero) heroObserver!.observe(hero);

    // A section is "current" once it crosses the middle band of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      heroObserver?.disconnect();
      observer.disconnect();
    };
  }, [sections, hideWhileVisible]);

  return (
    <nav className={`section-index ${visible ? "is-visible" : ""}`} aria-label="On this page">
      <ol>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} className={`section-index-link ${active === id ? "is-active" : ""}`} aria-current={active === id ? "true" : undefined}>
              <span className="section-index-label">{label}</span>
              <span className="section-index-dot" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
