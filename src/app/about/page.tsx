import type { Metadata } from "next";
import Link from "next/link";
import { centre, areasOfFocus, pillars, stakeholders } from "@/lib/content";

export const metadata: Metadata = {
  title: "About the Centre — SLR Centre",
  description: "The SLR Centre for Global Law, Geoeconomics & Emerging Technologies is a high-level research, intelligence, and strategic advisory centre anchored in India with a global mandate.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>About</span>
          </div>
          <span className="eyebrow eyebrow-light">About the Centre</span>
          <h1 className="page-hero-title">Rigorous analysis. Actionable intelligence.</h1>
          <p className="page-hero-lead">
            The {centre.name} is a high-level research, intelligence, and strategic advisory centre
            anchored in India with a global mandate.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="narrative-columns">
            <span className="narrative-side-label">What SLR Is</span>
            <div className="narrative-block">
              <p>{centre.statement}</p>
              <p>{centre.convening}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="narrative-columns">
            <span className="narrative-side-label">What It Studies</span>
            <div className="narrative-block">
              <p>{centre.positioning}</p>
              <div className="rail-block" style={{ marginTop: "var(--s6)" }}>
                <span className="rail-label">Five Research Domains</span>
                <div className="rail-link-list">
                  {areasOfFocus.map((a) => (
                    <Link key={a.slug} href={`/research?area=${a.slug}`} className="rail-link">
                      {a.num} {a.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <blockquote className="stage-container">
        <p className="pull-quote">
          &quot;{centre.positioning.split(". By integrating")[0]}.&quot;
          <cite className="pull-quote-cite">— {centre.name}</cite>
        </p>
      </blockquote>

      <section className="page-section">
        <div className="stage-container">
          <div className="narrative-columns">
            <span className="narrative-side-label">How It Works</span>
            <div className="narrative-block">
              <p>
                The Centre operates through three integrated modes of engagement — research, intelligence,
                and strategic advisory — each reinforcing the others.
              </p>
              {pillars.map((pillar) => (
                <p key={pillar.slug}>
                  <strong style={{ color: "var(--color-navy)", fontStyle: "normal" }}>{pillar.title}.</strong>{" "}
                  {pillar.description}
                </p>
              ))}
              <div style={{ marginTop: "var(--s2)" }}>
                <Link href="/capabilities" className="btn-ghost-gold">See Full Capabilities →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="who-we-engage">
        <div className="stage-container">
          <div className="section-head-row">
            <div>
              <span className="eyebrow">Who It Engages</span>
              <h2 className="text-section-title" style={{ marginTop: "8px" }}>Serving leaders who shape the global agenda</h2>
            </div>
          </div>
          <div className="stakeholder-editorial-roster">
            {stakeholders.map((s) => (
              <div className="roster-row" key={s.num}>
                <span className="roster-num">{s.num}</span>
                <h3 className="roster-title">{s.title}</h3>
                <p className="roster-desc">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="narrative-columns">
            <span className="narrative-side-label">Why the Centre Exists</span>
            <div className="narrative-block">
              <p>
                The Centre exists to equip senior decision-makers — in business, government, and international
                organisations — with the depth of analysis and clarity of intelligence required to navigate an
                era of accelerating geopolitical complexity.
              </p>
              <p>
                It operates at the intersection of law, economics, and emerging technology, producing research
                and advisory services that are substantive, not reactive — designed to anticipate, not merely
                respond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section-dark">
        <div className="stage-container" style={{ textAlign: "left" }}>
          <span className="eyebrow eyebrow-light">Executive Engagement</span>
          <h2 className="text-section-title" style={{ marginTop: "8px", color: "var(--color-white)" }}>
            Commission Research. Attend a Dialogue. Request a Briefing.
          </h2>
          <div style={{ marginTop: "24px" }}>
            <Link href="/engage" className="btn btn-primary">Engage the Centre</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
