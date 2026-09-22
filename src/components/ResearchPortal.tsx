"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { areasOfFocus, sectorsForArea } from "@/lib/content";

export default function ResearchPortal() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("area");

  const [activeSlug, setActiveSlug] = useState(
    areasOfFocus.find((a) => a.slug === requested)?.slug ?? areasOfFocus[0].slug
  );
  const [lastRequested, setLastRequested] = useState(requested);

  // Adjust state during render when the ?area= query param changes
  // (e.g. a mega-menu link is clicked while already on this page),
  // per React's recommended pattern for deriving state from props.
  if (requested !== lastRequested) {
    setLastRequested(requested);
    const match = areasOfFocus.find((a) => a.slug === requested);
    if (match) setActiveSlug(match.slug);
  }

  const active = areasOfFocus.find((a) => a.slug === activeSlug) ?? areasOfFocus[0];
  const relatedSectors = sectorsForArea(active.slug);

  return (
    <div className="research-portal-grid">
      <nav className="research-nav-list" aria-label="Research wings">
        {areasOfFocus.map((area) => (
          <button
            key={area.slug}
            className={`research-nav-item ${activeSlug === area.slug ? "active" : ""}`}
            onClick={() => setActiveSlug(area.slug)}
            aria-current={activeSlug === area.slug}
          >
            <span className="research-nav-num">{area.num}</span>
            <span className="research-nav-title">{area.title}</span>
          </button>
        ))}
      </nav>

      <div className="research-detail-panel panel-fade-in" key={active.slug}>
        <span className="research-detail-eyebrow">Research Wing {active.num}</span>
        <h1 className="research-detail-title">{active.title}</h1>
        <p className="research-detail-summary">{active.summary}</p>
        <div className="research-detail-body">
          <p>{active.description}</p>
        </div>

        <div className="research-detail-block">
          <span className="rail-label">Key Issues Tracked</span>
          <div className="directory-issues" style={{ marginTop: "4px" }}>
            {active.keyIssues.map((issue) => (
              <span className="issue-tag" key={issue}>{issue}</span>
            ))}
          </div>
        </div>

        {relatedSectors.length > 0 && (
          <div className="research-detail-block">
            <span className="rail-label">Related Sectors</span>
            <div className="rail-link-list">
              {relatedSectors.map((s) => (
                <Link key={s.slug} href={`/sectors/${s.slug}`} className="rail-link">{s.title}</Link>
              ))}
            </div>
          </div>
        )}

        <div className="research-detail-block">
          <Link href="/insights" className="btn-ghost-gold">Related Intelligence &amp; Publications →</Link>
        </div>
      </div>
    </div>
  );
}
