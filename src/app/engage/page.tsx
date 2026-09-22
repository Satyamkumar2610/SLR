import type { Metadata } from "next";
import Link from "next/link";
import { geographies } from "@/lib/content";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Engage the Centre — SLR Centre",
  description: "Commission research. Attend a dialogue. Request a briefing. We work with senior decision-makers across business, government, and international organisations.",
};

const engagementFormats = [
  "Research & Strategic Intelligence",
  "Geopolitical & Regulatory Intelligence",
  "Executive & C-Suite Briefings",
  "Closed-Door Roundtables & Strategic Dialogues",
  "Market Entry & International Expansion Intelligence",
  "Geoeconomic & Investment Risk Advisory",
  "Scenario Planning & Strategic Foresight",
  "Bespoke Research & Advisory",
];

export default function EngagePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Engage</span>
          </div>
          <span className="eyebrow eyebrow-light">Get in Touch</span>
          <h1 className="page-hero-title">Commission research. Attend a dialogue. Request a briefing.</h1>
          <p className="page-hero-lead">
            We work with senior decision-makers across business, government, and international organisations.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="contact-grid">
            <div className="contact-info-block">
              <div>
                <span className="rail-label">How to Engage the Centre</span>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", lineHeight: 1.7, color: "var(--color-charcoal)" }}>
                  The SLR Centre offers multiple modes of engagement — from commissioned research and
                  executive briefings to closed-door roundtables and strategic advisory.
                </p>
              </div>

              <div>
                <span className="rail-label">Engagement Formats</span>
                <div className="contact-formats-list">
                  {engagementFormats.map((f) => (
                    <div className="contact-format-row" key={f}>{f}</div>
                  ))}
                </div>
              </div>

              <div>
                <span className="rail-label">Response Time</span>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--color-charcoal)" }}>
                  We respond within 2 working days.
                </p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-gold"
                  style={{ marginTop: "10px", display: "inline-flex" }}
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </div>

            <EnquiryForm regions={geographies.map(({ slug, name }) => ({ slug, name }))} />
          </div>
        </div>
      </section>
    </main>
  );
}
