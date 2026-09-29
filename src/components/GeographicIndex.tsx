"use client";

import Link from "next/link";
import { useState } from "react";
import { geographies } from "@/lib/content";

export default function GeographicIndex() {
  const [activeGeo, setActiveGeo] = useState(geographies[0]);

  return (
    <div className="stage-container">
      <section className="section-geographies-stage" id="geographies">
        <div>
          <div className="geo-top-bar">
            <div>
              <span className="eyebrow eyebrow-light">Global Footprint</span>
              <h2 className="text-section-title" style={{ color: "var(--color-white)", marginTop: "8px" }}>Where the world moves, we follow</h2>
            </div>
            <Link href="/geographies" className="btn-ghost-gold" style={{ color: "var(--color-gold-light)" }}>Explore All Geographies →</Link>
          </div>

          <div className="geo-stage-grid">
            <div className="geo-nav-column" id="geo-nav-list">
              {geographies.map((geo) => (
                <button
                  key={geo.slug}
                  className={`geo-item-btn ${activeGeo.slug === geo.slug ? "active" : ""}`}
                  onClick={() => setActiveGeo(geo)}
                  aria-pressed={activeGeo.slug === geo.slug}
                >
                  {geo.name}{geo.isAnchor ? " ★" : ""}
                </button>
              ))}
              <Link href="/corridors" className="geo-item-btn" style={{ color: "var(--color-gold-light)", marginTop: "10px" }}>
                Strategic Corridors →
              </Link>
            </div>

            <div className="geo-intel-card panel-fade-in" id="geo-detail-panel" key={activeGeo.slug}>
              <span className="eyebrow eyebrow-light" id="geo-detail-type">{activeGeo.tag}</span>
              <h3 className="geo-intel-title" id="geo-detail-title">{activeGeo.name}</h3>
              <p className="geo-intel-desc" id="geo-detail-desc">{activeGeo.description}</p>
              <Link href={`/geographies/${activeGeo.slug}`} className="btn-ghost-gold" style={{ marginTop: "8px" }}>
                Full Geography Profile →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
