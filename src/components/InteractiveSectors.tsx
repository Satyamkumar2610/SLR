"use client";

import Link from "next/link";
import { useState } from "react";

const sectors = [
  {
    num: "01",
    title: "Defence & Homeland Security",
    desc: "Strategic technologies, defence regulation, security frameworks and the foundations of economic resilience.",
    link: "/sectors/defence",
    color: "var(--color-navy)"
  },
  {
    num: "02",
    title: "Pharmaceuticals & Healthcare",
    desc: "Global health security, pharmaceutical regulation, supply-chain integrity, innovation pathways and market access.",
    link: "/sectors/pharma",
    color: "var(--color-slate)"
  },
  {
    num: "03",
    title: "Energy & Climate",
    desc: "Energy security, transition pathways, critical minerals, infrastructure development and climate-related investment.",
    link: "/sectors/energy-climate",
    color: "var(--color-forest)"
  },
  {
    num: "04",
    title: "Technology & AI",
    desc: "AI governance, digital regulation, semiconductors, cyber policy and the broader landscape of emerging technologies.",
    link: "/sectors/technology-ai",
    color: "var(--color-gold)"
  },
  {
    num: "05",
    title: "Financial Services",
    desc: "Global financial architecture, investment flows, fintech innovation, regulatory evolution and the geopolitics of finance.",
    link: "/sectors/financial-services",
    color: "var(--color-charcoal)"
  },
  {
    num: "06",
    title: "Infrastructure & Connectivity",
    desc: "Trade corridors, logistics networks, digital infrastructure, investment frameworks and regional connectivity.",
    link: "/sectors/infrastructure",
    color: "var(--color-slate)"
  },
  {
    num: "07",
    title: "Electronics & Semiconductors",
    desc: "Technology supply chains, industrial policy, investment dynamics and strategic dependencies.",
    link: "/sectors/semiconductors",
    color: "var(--color-burgundy)"
  }
];

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
          <Link href="/sectors" className="btn-ghost-gold">All Priority Sectors →</Link>
        </div>

        <div className="sectors-editorial-list" id="sectors-accordion">
          {sectors.map((sector, idx) => (
            <div 
              key={idx}
              className={`sector-editorial-item ${activeIndex === idx ? "active" : ""}`} 
              style={{ "--sector-bar": sector.color } as React.CSSProperties}
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
                <p className="sector-item-desc">{sector.desc}</p>
                <Link href={sector.link} className="btn-ghost-gold">Explore Sector →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
