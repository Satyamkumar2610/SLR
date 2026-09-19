"use client";

import Link from "next/link";
import { useState } from "react";

const areas = [
  {
    num: "01",
    title: "Global Law & Cross-Border Regulation",
    desc: "The evolving legal and regulatory architecture that governs international commerce, investment, technology, sanctions, and cross-border transactions across fragmented jurisdictions."
  },
  {
    num: "02",
    title: "Geoeconomics & Strategic Affairs",
    desc: "The strategic deployment of trade, investment, finance, technology, resources, and economic policy as instruments of statecraft, economic security, and international influence."
  },
  {
    num: "03",
    title: "Global Finance & Investment",
    desc: "The global financial architecture, sovereign and institutional capital flows, economic restrictions, and the deepening nexus between capital allocation and geopolitical risk."
  },
  {
    num: "04",
    title: "Energy & Energy Transitions",
    desc: "Energy security, global markets, critical minerals, transition finance, and the reconfiguration of global energy systems impacting industrial competitiveness."
  },
  {
    num: "05",
    title: "Emerging Technologies & Governance",
    desc: "Artificial intelligence, semiconductors, digital economies, autonomous systems, cyber policy, technology governance, and nascent cross-border regulatory frameworks."
  }
];

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
          <p className="text-lead" style={{ marginBottom: 0 }}>The Centre analyses how evolving configurations of power, capital, trade, energy, regulation, and technology are reshaping economies, industries, and institutions worldwide.</p>
        </div>

        <div className="areas-index-list" onMouseLeave={() => setActiveIndex(0)}>
          {areas.map((area, idx) => (
            <div 
              key={idx}
              className={`area-index-row ${activeIndex === idx ? "active" : "dimmed"}`}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <span className="area-row-num">{area.num}</span>
              <h3 className="area-row-title">{area.title}</h3>
              <p className="area-row-desc">{area.desc}</p>
              <span className="area-row-arrow">→</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "36px", textAlign: "right" }}>
          <Link href="/areas-of-focus" className="btn-ghost-gold">All Areas of Focus →</Link>
        </div>
      </div>
    </section>
  );
}
