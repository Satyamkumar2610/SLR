"use client";

import Link from "next/link";
import { useState } from "react";

const geoData = [
  {
    id: "geo-1",
    name: "India & South Asia",
    type: "Principal Geographic Anchor",
    desc: "India constitutes the Centre's principal geographic anchor. Research examines India's evolving role in global trade, investment, technology, energy, defence, pharmaceuticals and critical supply chains, together with its relationships with South Asian neighbours and major global partners.",
    reportTitle: "India's Strategic Trade and Investment Landscape: 2026 Outlook"
  },
  {
    id: "geo-2",
    name: "Indo-Pacific & East Asia",
    type: "Strategic Theater",
    desc: "Analysis of the strategic and economic dynamics across the Indo-Pacific, focusing on maritime security, regional trade architectures, technology supply chains, and evolving power balances in East Asia.",
    reportTitle: "Supply Chain Resiliency in the Indo-Pacific"
  },
  {
    id: "geo-3",
    name: "ASEAN & Southeast Asia",
    type: "Emerging Economic Hub",
    desc: "Examining Southeast Asia's pivotal role in global value chains, regional integration, digital economy developments, and its strategic balancing between major global powers.",
    reportTitle: "Digital Economy Integration in ASEAN"
  },
  {
    id: "geo-4",
    name: "Middle East & Gulf",
    type: "Energy & Capital Nexus",
    desc: "Monitoring the Gulf's evolving role beyond energy, focusing on sovereign capital flows, technological diversification, and new strategic corridors connecting the Middle East with South Asia.",
    reportTitle: "Gulf Sovereign Wealth and Global Tech Investment"
  },
  {
    id: "geo-5",
    name: "Europe & Eurasia",
    type: "Regulatory & Security Landscape",
    desc: "Tracking European regulatory developments, energy security architecture, trans-Atlantic technology alignments, and the evolving geopolitical landscape across Eurasia.",
    reportTitle: "European AI Governance and Cross-Border Impacts"
  },
  {
    id: "geo-6",
    name: "North America",
    type: "Technology & Security Partner",
    desc: "Focusing on US industrial policy, technology export controls, nearshoring trends, and the strategic economic partnerships between North America and key global allies.",
    reportTitle: "US Export Controls and the Global Semiconductor Sector"
  },
  {
    id: "geo-7",
    name: "Africa",
    type: "Critical Resources & Growth",
    desc: "Researching the strategic competition for critical minerals, infrastructure development, energy transitions, and emerging trade patterns across the African continent.",
    reportTitle: "Critical Minerals Security in Sub-Saharan Africa"
  },
  {
    id: "geo-8",
    name: "Latin America & the Caribbean",
    type: "Resource & Trade Dynamics",
    desc: "Analyzing Latin America's role in global energy transitions, critical resource supply chains, and evolving regional integration and trade partnerships.",
    reportTitle: "Lithium Triangles and the Geopolitics of Energy"
  }
];

export default function GeographicIndex() {
  const [activeGeo, setActiveGeo] = useState(geoData[0]);

  return (
    <div className="stage-container">
      <section className="section-geographies-stage" id="geographies">
        <div style={{ padding: "0 var(--outer-padding)" }}>
          <div className="geo-top-bar">
            <div>
              <span className="eyebrow eyebrow-light">Global Footprint</span>
              <h2 className="text-section-title" style={{ color: "var(--color-white)", marginTop: "8px" }}>Where the world moves, we follow</h2>
            </div>
            <Link href="/geographies" className="btn-ghost-gold" style={{ color: "var(--color-gold-light)" }}>Explore All Geographies →</Link>
          </div>

          <div className="geo-stage-grid">
            <div className="geo-nav-column" id="geo-nav-list">
              {geoData.map((geo) => (
                <button 
                  key={geo.id}
                  className={`geo-item-btn ${activeGeo.id === geo.id ? "active" : ""}`}
                  onClick={() => setActiveGeo(geo)}
                >
                  {geo.name}
                </button>
              ))}
              <button className="geo-item-btn" style={{ color: "var(--color-gold-light)", marginTop: "10px", pointerEvents: "none" }}>Strategic Corridors</button>
            </div>

            <div className="geo-intel-card" id="geo-detail-panel">
              <span className="eyebrow eyebrow-light" id="geo-detail-type">{activeGeo.type}</span>
              <h3 className="geo-intel-title" id="geo-detail-title">{activeGeo.name}</h3>
              <p className="geo-intel-desc" id="geo-detail-desc">{activeGeo.desc}</p>
              <div className="geo-report-box" id="geo-detail-report">
                <span className="eyebrow eyebrow-light" style={{ fontSize: "10px" }}>Recent Intelligence Report</span>
                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "var(--color-white)", marginTop: "4px" }}>{activeGeo.reportTitle}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
