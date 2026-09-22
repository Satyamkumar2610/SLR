"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { insights, insightCategories, type InsightCategory } from "@/lib/content";
import InsightList from "@/components/InsightList";

export default function InsightsExplorer() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("category") as InsightCategory | null;

  const [active, setActive] = useState<InsightCategory | "All">(
    requested && insightCategories.includes(requested) ? requested : "All"
  );
  const [lastRequested, setLastRequested] = useState(requested);

  // Adjust state during render when the ?category= query param changes,
  // per React's recommended pattern for deriving state from props.
  if (requested !== lastRequested) {
    setLastRequested(requested);
    if (requested && insightCategories.includes(requested)) {
      setActive(requested);
    }
  }

  const featured = insights.find((i) => i.featured);
  const rest = insights.filter((i) => !i.featured);
  const filteredRest = active === "All" ? rest : rest.filter((i) => i.category === active);
  const showFeatured = active === "All" || featured?.category === active;

  return (
    <div>
      <div className="filter-pill-row" role="tablist" aria-label="Filter insights by content type">
        <button
          className={`filter-pill ${active === "All" ? "active" : ""}`}
          onClick={() => setActive("All")}
          aria-pressed={active === "All"}
        >
          All
        </button>
        {insightCategories.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${active === cat ? "active" : ""}`}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="panel-fade-in" key={active}>
        {showFeatured && featured && (
          <div className="pub-featured">
            <div className="pub-featured-media" aria-hidden="true" />
            <div>
              <span className="pub-category">{featured.category} · {featured.date}</span>
              <h2 className="pub-featured-title">
                <Link href={`/insights/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p className="pub-excerpt">{featured.excerpt}</p>
              <Link href={`/insights/${featured.slug}`} className="btn-ghost-gold">Read {featured.category} →</Link>
            </div>
          </div>
        )}

        <InsightList items={filteredRest} />
      </div>
    </div>
  );
}
