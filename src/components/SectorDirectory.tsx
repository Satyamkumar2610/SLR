"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { sectors } from "@/lib/content";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function SectorDirectory() {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState<string | null>(null);

  const activeLetters = useMemo(
    () => new Set(sectors.map((s) => s.title[0].toUpperCase())),
    []
  );

  const filtered = useMemo(() => {
    return sectors.filter((s) => {
      const matchesQuery =
        query.trim().length === 0 ||
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.summary.toLowerCase().includes(query.toLowerCase()) ||
        s.keyIssues.some((k) => k.toLowerCase().includes(query.toLowerCase()));
      const matchesLetter = !letter || s.title[0].toUpperCase() === letter;
      return matchesQuery && matchesLetter;
    });
  }, [query, letter]);

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
            type="text"
            placeholder="Search sectors by name or issue tracked…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search sectors"
          />
        </div>

        <div className="az-rail" role="listbox" aria-label="Filter sectors by letter">
          {ALPHABET.map((l) => {
            const active = activeLetters.has(l);
            return (
              <button
                key={l}
                className={`az-letter ${!active ? "disabled" : ""} ${letter === l ? "active" : ""}`}
                disabled={!active}
                onClick={() => setLetter(letter === l ? null : l)}
                aria-pressed={letter === l}
              >
                {l}
              </button>
            );
          })}
        </div>

        <span className="directory-count">
          {filtered.length} of {sectors.length} sectors
        </span>
      </div>

      <div className="directory-list">
        {filtered.length === 0 && (
          <div className="directory-empty">No sectors match your search.</div>
        )}
        {filtered.map((sector) => (
          <div className="directory-row" key={sector.slug}>
            <span className="directory-num">{sector.num}</span>
            <div>
              <Link href={`/sectors/${sector.slug}`} className="directory-title-link">
                {sector.title}
              </Link>
              <p className="directory-summary">{sector.summary}</p>
              <div className="directory-issues">
                {sector.keyIssues.slice(0, 4).map((issue) => (
                  <span className="issue-tag" key={issue}>{issue}</span>
                ))}
              </div>
            </div>
            <Link href={`/sectors/${sector.slug}`} className="directory-row-arrow" aria-label={`Open ${sector.title} profile`}>
              →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
