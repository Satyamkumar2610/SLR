"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import CorridorDiagram from "@/components/CorridorDiagram";
import { corridors, geographies } from "@/lib/content";

/**
 * Strategic Corridors as one connected system: a single large map that
 * redraws as the reader moves down the corridor list, rather than a separate
 * thumbnail map repeated on every row.
 *
 * Selecting a corridor brings its route and geographies forward and leaves
 * the rest of the network as context. Arrow keys move between corridors and
 * `/corridors#imec`-style deep links select the named corridor, so the links
 * from the geography profiles and the search index still resolve.
 */
export default function CorridorExplorer({
  showAllLink = true,
  limit,
}: {
  showAllLink?: boolean;
  limit?: number;
}) {
  // Memoised so the hash listener below isn't re-subscribed every render.
  const list = useMemo(() => (limit ? corridors.slice(0, limit) : corridors), [limit]);
  const [active, setActive] = useState(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = list[active];

  useEffect(() => {
    const fromHash = () => {
      const slug = window.location.hash.replace("#", "");
      if (!slug) return;
      const index = list.findIndex((c) => c.slug === slug);
      if (index >= 0) setActive(index);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [list]);

  const move = (index: number) => {
    const next = (index + list.length) % list.length;
    setActive(next);
    buttonRefs.current[next]?.focus();
  };

  const geoName = (slug: string) => geographies.find((g) => g.slug === slug)?.name ?? slug;

  return (
    <div className="corridor-explorer">
      <div className="corridor-explorer-map" id="corridor-map-panel" aria-live="polite">
        <CorridorDiagram highlightSlug={current.slug} variant="compact" />
      </div>

      <div className="corridor-explorer-list" role="group" aria-label="Strategic corridors">
        {list.map((corridor, index) => {
          const isActive = index === active;
          return (
            <div className={`corridor-pick ${isActive ? "is-active" : ""}`} id={corridor.slug} key={corridor.slug}>
              <button
                ref={(node) => { buttonRefs.current[index] = node; }}
                type="button"
                className="corridor-pick-head"
                aria-pressed={isActive}
                aria-controls="corridor-map-panel"
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                    event.preventDefault();
                    move(index + 1);
                  } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                    event.preventDefault();
                    move(index - 1);
                  }
                }}
              >
                <span className="corridor-pick-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="corridor-name">{corridor.name}</span>
              </button>

              {isActive && (
                <div className="corridor-pick-body">
                  <p className="corridor-desc">{corridor.description}</p>
                  <ul className="corridor-pick-geos">
                    {corridor.geographies.map((slug) => (
                      <li key={slug}>{geoName(slug)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}

        {showAllLink && (
          <Link href="/corridors" className="btn-ghost-gold corridor-explorer-link">
            Explore Strategic Corridors →
          </Link>
        )}
      </div>
    </div>
  );
}
