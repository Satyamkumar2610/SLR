"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { areasOfFocus, centre } from "@/lib/content";
import { photos, type Photo } from "@/lib/images";

const AREA_PHOTOS: Record<string, Photo> = {
  "global-law": photos.columns,
  geoeconomics: photos.cargoShip,
  "global-finance": photos.financialDistrict,
  energy: photos.windTurbine,
  "emerging-technologies": photos.wafer,
};

// Five photo panels; the active one widens to reveal its summary.
// Hover or keyboard focus moves the active panel.
export default function InteractiveAreas() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-areas" id="areas-of-focus">
      <div className="stage-container">
        <div className="areas-header-row">
          <div>
            <span className="eyebrow">Strategic Research Agenda</span>
            <h2 className="text-section-title" style={{ marginTop: "8px" }}>Areas of Focus</h2>
          </div>
          <p className="text-lead" style={{ marginBottom: 0 }}>{centre.positioning.split(". By integrating")[0]}.</p>
        </div>

        <div className="area-panels">
          {areasOfFocus.map((area, idx) => {
            const photo = AREA_PHOTOS[area.slug];
            return (
              <Link
                key={area.slug}
                href={`/research?area=${area.slug}`}
                className={`area-panel ${activeIndex === idx ? "is-active" : ""}`}
                onMouseEnter={() => setActiveIndex(idx)}
                onFocus={() => setActiveIndex(idx)}
              >
                {photo && (
                  <Image src={photo.src} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" className="area-panel-img" />
                )}
                <span className="area-panel-shade" aria-hidden="true" />
                <span className="area-panel-body">
                  <span className="area-panel-num">{area.num}</span>
                  <h3 className="area-panel-title">{area.title}</h3>
                  <span className="area-panel-desc">{area.summary}</span>
                  <span className="area-panel-link">Explore <span aria-hidden="true">→</span></span>
                </span>
              </Link>
            );
          })}
        </div>

        <div style={{ marginTop: "36px", textAlign: "right" }}>
          <Link href="/research" className="btn-ghost-gold">All Research →</Link>
        </div>
      </div>
    </section>
  );
}
