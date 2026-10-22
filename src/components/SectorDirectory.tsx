"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { sectors } from "@/lib/content";
import { sectorPhotos } from "@/lib/images";

// Sector list with a search box. On wide screens a photo panel beside the
// list follows the row under the pointer or keyboard focus.
export default function SectorDirectory() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(sectors[0].slug);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sectors;
    return sectors.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.keyIssues.some((k) => k.toLowerCase().includes(q))
    );
  }, [query]);

  const shown = filtered.some((s) => s.slug === active) ? active : filtered[0]?.slug;

  return (
    <div>
      <div className="directory-toolbar">
        <div className="directory-search">
          <svg className="directory-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            className="directory-search-input"
            type="search"
            placeholder="Search sectors by name or issue tracked…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search sectors"
          />
        </div>
        <span className="directory-count" role="status">
          {filtered.length} of {sectors.length} sectors
        </span>
      </div>

      <div className="sector-browser">
        <div className="directory-list">
          {filtered.length === 0 && <div className="directory-empty">No sectors match your search.</div>}
          {filtered.map((sector) => (
            <Link
              href={`/sectors/${sector.slug}`}
              className={`directory-row sector-row ${shown === sector.slug ? "is-current" : ""}`}
              key={sector.slug}
              onMouseEnter={() => setActive(sector.slug)}
              onFocus={() => setActive(sector.slug)}
            >
              <span className="directory-num">{sector.num}</span>
              <span className="sector-row-body">
                <span className="directory-title-link">{sector.title}</span>
                <span className="directory-summary">{sector.summary}</span>
                <span className="sector-row-issues">{sector.keyIssues.slice(0, 4).join(" · ")}</span>
              </span>
              <span className="directory-row-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>

        <div className="sector-preview" aria-hidden="true">
          {sectors.map((s) => {
            const photo = sectorPhotos[s.slug];
            if (!photo) return null;
            return (
              <figure className={`sector-preview-frame ${shown === s.slug ? "is-shown" : ""}`} key={s.slug}>
                <Image src={photo.src} alt="" fill sizes="380px" />
                <figcaption>{photo.subject}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}
