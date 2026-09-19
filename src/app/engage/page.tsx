import type { Metadata } from "next";
import Link from "next/link";
import { geographies } from "@/lib/content";

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

const enquiryTypes = [
  "Research Inquiry",
  "Advisory Services",
  "Roundtables & Events",
  "Media Enquiry",
  "Partnership",
  "Other",
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

            <form>
              <div className="form-row-2">
                <div className="form-field">
                  <label className="form-label" htmlFor="fullName">Full Name *</label>
                  <input className="form-input" id="fullName" name="fullName" type="text" required />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="organisation">Organisation *</label>
                  <input className="form-input" id="organisation" name="organisation" type="text" required />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-field">
                  <label className="form-label" htmlFor="role">Role / Title</label>
                  <input className="form-input" id="role" name="role" type="text" />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input className="form-input" id="email" name="email" type="email" required />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-field">
                  <label className="form-label" htmlFor="region">Country / Region</label>
                  <select className="form-select" id="region" name="region" defaultValue="">
                    <option value="" disabled>Select a region</option>
                    {geographies.map((g) => (
                      <option key={g.slug} value={g.slug}>{g.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="enquiry">Nature of Enquiry</label>
                  <select className="form-select" id="enquiry" name="enquiry" defaultValue="">
                    <option value="" disabled>Select enquiry type</option>
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea className="form-textarea" id="message" name="message" rows={5} />
              </div>

              <button type="submit" className="btn btn-primary">Send Enquiry</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
