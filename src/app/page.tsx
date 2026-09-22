import Link from "next/link";
import AnimatedHeading from "@/components/AnimatedHeading";
import InteractiveSectors from "@/components/InteractiveSectors";
import GeographicIndex from "@/components/GeographicIndex";
import InteractiveAreas from "@/components/InteractiveAreas";
import CorridorDiagram from "@/components/CorridorDiagram";
import { corridors, insights, events, stakeholders, centre, pillars, areasOfFocus, sectors, geographies, offeringsForPillar } from "@/lib/content";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  const heroFacts = [
    { num: pad(areasOfFocus.length), label: "Research domains" },
    { num: pad(sectors.length), label: "Priority sectors" },
    { num: pad(geographies.length), label: "Geographies" },
    { num: pad(corridors.length), label: "Strategic corridors" },
  ];
  const featured = insights.find((i) => i.featured) ?? insights[0];
  const latest = insights.filter((i) => i.slug !== featured.slug).slice(0, 2);

  return (
    <main>
      {/* ============================================================
           SCENE 01 — HERO (navigation floats over this stage)
           ============================================================ */}
      <section className="hero-stage" id="hero">
        <div className="hero-bg-media"></div>
        <div className="hero-bg-overlay"></div>

        <div className="hero-body">
          <span className="eyebrow eyebrow-light hero-reveal hero-reveal-eyebrow">Centre for Global Law, Geoeconomics & Emerging Technologies</span>
          <AnimatedHeading text="Navigating the Forces Reshaping the World" className="text-hero-display" />
          <p className="hero-lead-text hero-reveal hero-reveal-lead">Rigorous research, applied intelligence, and strategic advisory at the intersection of law, economics, and emerging technology.</p>
          <div className="hero-buttons hero-reveal hero-reveal-buttons">
            <Link href="/research" className="btn btn-primary">Explore Our Research</Link>
            <Link href="/engage" className="btn btn-secondary">Engage the Centre</Link>
          </div>
        </div>

        <div className="hero-facts hero-reveal hero-reveal-facts">
          <div className="hero-facts-inner">
            {heroFacts.map((fact) => (
              <div className="hero-fact" key={fact.label}>
                <span className="hero-fact-num">{fact.num}</span>
                <span className="hero-fact-label">{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
           SCENE 02 — WHAT WE DO
           ============================================================ */}
      <section className="section-wwd" id="what-we-do">
        <div className="stage-container">
          <div className="wwd-head">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2 className="text-section-title" style={{ marginTop: "8px" }}>Three integrated functions. One analytical core.</h2>
            </div>
            <p className="text-lead" style={{ marginBottom: 0 }}>Research builds the evidence, intelligence interprets what is changing, and advisory turns both into decisions.</p>
          </div>

          <div className="wwd-rows">
            {pillars.map((pillar) => (
              <article className="wwd-row" key={pillar.slug} id={pillar.slug}>
                <header className="wwd-row-head">
                  <span className="wwd-row-num">{pillar.num}</span>
                  <h3 className="wwd-row-title">{pillar.title}</h3>
                  <span className="wwd-row-tagline">{pillar.tagline}</span>
                </header>

                <div className="wwd-row-body">
                  <p className="wwd-row-intro">{pillar.intro}</p>
                  <span className="wwd-items-label">{pillar.itemsLabel}</span>
                  <ul className="wwd-items">
                    {offeringsForPillar(pillar.slug).map((offering) => (
                      <li key={offering.slug}>
                        <Link href={`/capabilities#${offering.slug}`}>{offering.title}</Link>
                      </li>
                    ))}
                  </ul>
                  {pillar.closing && <p className="wwd-row-closing">{pillar.closing}</p>}
                  <Link href={`/capabilities#${pillar.slug}`} className="btn-ghost-gold">Explore {pillar.title} →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
           SCENE 03 — STATEMENT
           ============================================================ */}
      <section className="section-interruption">
        <div className="stage-container">
          <div className="interruption-inner">
            <div className="interruption-rule"></div>
            <blockquote className="interruption-quote">Where geopolitics meets industry</blockquote>
          </div>
        </div>
      </section>

      {/* ============================================================
           SCENE 05 — AREAS OF FOCUS
           ============================================================ */}
      <InteractiveAreas />

      {/* ============================================================
           SCENE 06 — PRIORITY SECTORS
           ============================================================ */}
      <InteractiveSectors />

      {/* ============================================================
           SCENE 07 — EDITORIAL FEATURE
           ============================================================ */}
      <div className="stage-container section-featured-feature">
        <div className="featured-split-card">
          <div className="featured-media-side"></div>
          <div className="featured-editorial-side">
            <span className="featured-eyebrow-tag">{featured.category} · {featured.date}</span>
            <h2 className="featured-story-title">{featured.title}</h2>
            <p className="featured-story-excerpt">{featured.excerpt}</p>
            <div>
              <Link href={`/insights/${featured.slug}`} className="btn btn-secondary">Read {featured.category} →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
           SCENE 08 — NEWSROOM
           ============================================================ */}
      <section className="section-newsroom" id="insights">
        <div className="stage-container">
          <div className="newsroom-container">
            <div className="newsroom-header">
              <div>
                <span className="eyebrow">Research & Intelligence</span>
                <h2 className="text-section-title" style={{ marginTop: "8px" }}>Research that anticipates what&apos;s next</h2>
              </div>
              <Link href="/insights" className="btn-ghost-gold">View All Insights →</Link>
            </div>

            <div className="newsroom-asymmetric-grid">
              {latest.map((item, idx) => (
                <article className={idx === 0 ? "story-lead" : "story-secondary"} key={item.slug}>
                  {idx === 0 ? (
                    <div className="story-lead-image">
                      <img src="/assets/insight-sanctions.jpg" alt="" />
                    </div>
                  ) : (
                    <div className="story-secondary-image">
                      <img src="/assets/insight-energy.jpg" alt="" />
                    </div>
                  )}
                  <div className="story-meta">
                    <span className="story-tag">{item.category}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="story-title" style={idx === 0 ? { fontSize: "28px" } : undefined}>{item.title}</h3>
                  <p className="story-excerpt">{item.excerpt}</p>
                  <div>
                    <Link href={`/insights/${item.slug}`} className="btn-ghost-gold">Read →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           SCENE 09 — GEOGRAPHIC INDEX
           ============================================================ */}
      <GeographicIndex />

      {/* ============================================================
           SCENE 10 — STRATEGIC CORRIDORS
           ============================================================ */}
      <div className="stage-container">
        <section className="section-chapter-reset" style={{ padding: "72px var(--outer-padding)", textAlign: "left" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "40px" }}>
            <div>
              <span className="eyebrow eyebrow-light">Where Trade Meets Strategy</span>
              <h2 className="chapter-reset-heading" style={{ fontSize: "clamp(30px, 3.6vw, 44px)", marginTop: "10px", textAlign: "left" }}>Seven corridors. One connected world.</h2>
            </div>
            <Link href="/corridors" className="btn-ghost-gold" style={{ color: "var(--color-gold-light)" }}>Explore Strategic Corridors →</Link>
          </div>
          <div className="corridor-list">
            {corridors.slice(0, 4).map((corridor) => (
              <div className="corridor-row" key={corridor.slug}>
                <h3 className="corridor-name">{corridor.name}</h3>
                <p className="corridor-desc">{corridor.description}</p>
                <div className="corridor-row-map">
                  <CorridorDiagram highlightSlug={corridor.slug} variant="compact" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ============================================================
           SCENE 11 — WHO WE ENGAGE WITH
           ============================================================ */}
      <section className="section-stakeholders-list" id="stakeholders">
        <div className="stage-container">
          <div className="stakeholders-list-header">
            <div>
              <span className="eyebrow">Institutional Network</span>
              <h2 className="text-section-title" style={{ marginTop: "8px" }}>Who We Engage With</h2>
            </div>
            <p className="text-lead" style={{ marginBottom: 0 }}>Serving leaders who shape the global agenda across seven strategic constituencies.</p>
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

      {/* ============================================================
           SCENE 12 — EVENTS CHRONOLOGY
           ============================================================ */}
      <div className="stage-container">
        <section className="section-events-stage" id="events">
          <div className="events-top-row">
            <div>
              <span className="eyebrow">Convening Authority</span>
              <h2 className="text-section-title" style={{ marginTop: "8px" }}>Dialogues that drive decisions</h2>
            </div>
            <Link href="/events" className="btn-ghost-gold">View All Events →</Link>
          </div>

          <div className="events-chronology-list">
            {events.map((event, idx) => (
              <div className="event-chronology-row" key={event.slug}>
                <div>
                  <span className={`event-badge-pill ${idx % 2 === 0 ? "pill-burgundy" : "pill-slate"}`}>{event.type}</span>
                  <div className="event-date-display">{event.date}</div>
                </div>
                <div>
                  <h3 className="event-headline-text">{event.title}</h3>
                  <span className="event-venue-meta">{event.venue}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <Link href="/events" className="btn btn-outline-navy">Request Invitation</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ============================================================
           SCENE 13 — ABOUT / QUIET CLOSING
           ============================================================ */}
      <section className="section-about-stage" id="about">
        <div className="stage-container">
          <div className="about-editorial-grid">
            <div className="about-text-column">
              <span className="eyebrow">Institutional Mandate</span>
              <h2 className="text-section-title">Rigorous analysis. Actionable intelligence.</h2>
              <p className="text-lead">The SLR Centre for Global Law, Geoeconomics and Emerging Technologies provides senior decision-makers with the analytical depth and strategic foresight needed to navigate an increasingly fragmented international order.</p>
              <div>
                <Link href="/about" className="btn btn-outline-navy">Learn About the Centre →</Link>
              </div>
            </div>

            <div className="about-quote-box">
              <blockquote className="about-quote-text">&quot;{centre.positioning.split(". By integrating")[0]}.&quot;</blockquote>
              <span className="about-quote-author">— {centre.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           SCENE 14 — CTA BANNER
           ============================================================ */}
      <div className="stage-container">
        <section className="section-cta-stage" id="engage">
          <div className="cta-stage-lattice"></div>
          <div className="cta-stage-content">
            <span className="eyebrow eyebrow-light">Executive Engagement</span>
            <h2 className="text-hero-display" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>Commission Research. Attend a Dialogue. Request a Briefing.</h2>
            <p className="hero-lead-text">Engage the Centre to navigate what&apos;s changing in your world.</p>
            <div style={{ marginTop: "8px" }}>
              <Link href="/engage" className="btn btn-primary">Engage the Centre</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
