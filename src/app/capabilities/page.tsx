import type { Metadata } from "next";
import Link from "next/link";
import { pillars, offerings, offeringsForPillar } from "@/lib/content";

export const metadata: Metadata = {
  title: "Capabilities — SLR Centre",
  description: "Research. Intelligence. Strategic Advisory. Three modes of engagement, integrated to equip decision-makers with clarity.",
};

export default function CapabilitiesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Capabilities</span>
          </div>
          <span className="eyebrow eyebrow-light">Capabilities</span>
          <h1 className="page-hero-title">Research. Intelligence. Strategic Advisory.</h1>
          <p className="page-hero-lead">
            Three modes of engagement — integrated to equip decision-makers with the clarity that
            consequential decisions demand.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="pillar-strip">
            {pillars.map((pillar) => (
              <div className="pillar-strip-item" key={pillar.slug}>
                <span className="pillar-strip-num">Pillar {pillar.num}</span>
                <h3 className="pillar-strip-title">{pillar.title}</h3>
                <span className="pillar-strip-tagline">{pillar.tagline}</span>
                <p className="pillar-strip-desc">{pillar.description}</p>
              </div>
            ))}
          </div>

          {pillars.map((pillar) => (
            <div key={pillar.slug} style={{ marginBottom: "var(--s10)" }}>
              <div className="section-head-row">
                <div>
                  <span className="eyebrow">Pillar {pillar.num}</span>
                  <h2 className="text-section-title" style={{ marginTop: "8px" }}>{pillar.title}</h2>
                </div>
              </div>
              <div className="capabilities-list">
                {offeringsForPillar(pillar.slug).map((offering) => (
                  <div className="capability-row" id={offering.slug} key={offering.slug}>
                    <span className="capability-num">{offering.num}</span>
                    <div>
                      <h3 className="capability-title">{offering.title}</h3>
                      <p className="capability-desc">{offering.description}</p>
                    </div>
                    <span className="capability-pillar-tag">{pillar.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p className="directory-count">{offerings.length} capabilities across {pillars.length} pillars</p>
        </div>
      </section>

      <section className="page-section-dark">
        <div className="stage-container" style={{ textAlign: "left" }}>
          <span className="eyebrow eyebrow-light">Ready to Engage?</span>
          <h2 className="text-section-title" style={{ marginTop: "8px", color: "var(--color-white)" }}>
            Commission research, attend a dialogue, or request a briefing.
          </h2>
          <div style={{ marginTop: "24px" }}>
            <Link href="/engage" className="btn btn-primary">Engage the Centre</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
