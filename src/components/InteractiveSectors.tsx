"use client";

import Link from "next/link";
import { useState } from "react";
import { sectors } from "@/lib/content";

export default function InteractiveSectors() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="stage-container">
      <section className="section-sectors-stage" id="sectors">
        <div className="sectors-top">
          <div>
            <span className="eyebrow">Convergence of Forces</span>
            <h2 className="text-section-title" style={{ marginTop: "8px" }}>Priority Sectors</h2>
          </div>
          <Link href="/sectors" className="btn-ghost-gold">Open the Sector Observatory →</Link>
        </div>

        <div className="sectors-editorial-list" id="sectors-accordion">
          {sectors.map((sector, idx) => (
            <div
              key={sector.slug}
              className={`sector-editorial-item ${activeIndex === idx ? "active" : ""}`}
              style={{ "--sector-bar": `var(--${sector.color})` } as React.CSSProperties}
            >
              <div
                className="sector-item-header"
                onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                style={{ cursor: "pointer" }}
              >
                <div className="sector-item-left">
                  <span className="sector-item-num">{sector.num}</span>
                  <h3 className="sector-item-title">{sector.title}</h3>
                </div>
                <span className="sector-item-symbol">{activeIndex === idx ? "−" : "+"}</span>
              </div>
              <div className="sector-item-drawer">
                <p className="sector-item-desc">{sector.summary}</p>
                <Link href={`/sectors/${sector.slug}`} className="btn-ghost-gold">Explore Sector →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
