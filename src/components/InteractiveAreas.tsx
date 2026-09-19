"use client";

import Link from "next/link";
import { useState } from "react";
import { areasOfFocus, centre } from "@/lib/content";

export default function InteractiveAreas() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-areas" id="areas-of-focus">
      <div className="stage-container">
        <div className="areas-header-row">
          <div>
            <span className="eyebrow">Strategic Research Agenda</span>
            <h2 className="text-section-title" style={{ marginTop: "8px" }}>Five domains. One mandate.</h2>
          </div>
          <p className="text-lead" style={{ marginBottom: 0 }}>{centre.positioning.split(". By integrating")[0]}.</p>
        </div>

        <div className="areas-index-list" onMouseLeave={() => setActiveIndex(0)}>
          {areasOfFocus.map((area, idx) => (
            <Link
              key={area.slug}
              href={`/research?area=${area.slug}`}
              className={`area-index-row ${activeIndex === idx ? "active" : "dimmed"}`}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <span className="area-row-num">{area.num}</span>
              <h3 className="area-row-title">{area.title}</h3>
              <p className="area-row-desc">{area.summary}</p>
              <span className="area-row-arrow">→</span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "36px", textAlign: "right" }}>
          <Link href="/research" className="btn-ghost-gold">All Research →</Link>
        </div>
      </div>
    </section>
  );
}
