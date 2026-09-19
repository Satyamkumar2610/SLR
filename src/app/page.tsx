import Link from "next/link";
import InteractiveSectors from "@/components/InteractiveSectors";
import GeographicIndex from "@/components/GeographicIndex";
import InteractiveAreas from "@/components/InteractiveAreas";

export default function Home() {
  return (
    <main>
      {/* ============================================================
           SCENE 01 — IMMERSIVE HERO STAGE (85–95vh)
           ============================================================ */}
      <section className="hero-stage" id="hero">
        <div className="hero-bg-media"></div>
        <div className="hero-bg-overlay"></div>
        <div className="hero-bg-grid"></div>

        <div className="hero-body" style={{ paddingTop: "80px" }}>
          <div className="hero-main">
            <span className="eyebrow eyebrow-light">Centre for Global Law, Geoeconomics & Emerging Technologies</span>
            <h1 className="text-hero-display">Navigating the Forces Reshaping the World</h1>
          </div>

          <div className="hero-sub">
            <p className="hero-lead-text">Rigorous research, applied intelligence, and strategic advisory at the intersection of law, economics, and emerging technology.</p>
            <div className="hero-buttons">
              <Link href="/insights" className="btn btn-primary">Explore Our Research</Link>
              <Link href="/engage" className="btn btn-secondary">Engage the Centre</Link>
            </div>
          </div>
        </div>

        <div className="hero-footer-bar">
          <span>Strategic Research & Intelligence Platform</span>
          <span>Anchor: India & Global Corridors</span>
        </div>
      </section>

      {/* ============================================================
           SCENE 02 — TYPOGRAPHIC STATEMENT (WHAT WE DO)
           ============================================================ */}
      <section className="section-wwd-editorial" id="what-we-do">
        <div className="stage-container">
          <div className="wwd-editorial-layout">
            <div>
              <div className="wwd-stacked-heading">
                WHAT<br/>WE<br/>DO
              </div>
              <div className="wwd-ledger-rule"></div>
            </div>

            <div className="wwd-tiers-column">
              <div className="wwd-tier wwd-tier-1">
                <span className="wwd-tier-num">01 // Evidence</span>
                <h3 className="wwd-tier-title">Research</h3>
                <span className="wwd-tier-tagline">Evidence. Depth. Clarity.</span>
                <p className="wwd-tier-desc">The Centre produces rigorous, evidence-based research that illuminates emerging global trends and their strategic implications — flagship reports, global outlooks, policy papers, working papers, and comparative regulatory analysis.</p>
              </div>

              <div className="wwd-tier wwd-tier-2">
                <span className="wwd-tier-num">02 // Anticipation</span>
                <h3 className="wwd-tier-title">Intelligence</h3>
                <span className="wwd-tier-tagline">Monitor. Interpret. Anticipate.</span>
                <p className="wwd-tier-desc">Translating complex global developments into focused, decision-relevant intelligence — spanning geopolitical intelligence, geoeconomic monitoring, regulatory intelligence, country risk assessment, and strategic risk monitoring.</p>
              </div>

              <div className="wwd-tier wwd-tier-3">
                <span className="wwd-tier-num">03 // Strategy</span>
                <h3 className="wwd-tier-title">Strategic Advisory</h3>
                <span className="wwd-tier-tagline">Navigate. Strategise. Act.</span>
                <p className="wwd-tier-desc">Supporting organisations navigating complex and rapidly evolving international environments — market-entry intelligence, geopolitical risk assessment, regulatory strategy, scenario planning, and cross-border intelligence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           SCENE 03 — CAPABILITY STRIP
           ============================================================ */}
      <div className="stage-container capability-strip-stage">
        <div className="capability-strip">
          <div className="cap-panel cap-panel-1">
            <div>
              <div className="cap-micro-header">
                <span>Primary Function</span>
                <span>01</span>
              </div>
              <h4 className="cap-headline">Rigorous, evidence-based research illuminating global trends.</h4>
            </div>
            <Link href="/what-we-do#research" className="cap-link">Explore Research →</Link>
          </div>

          <div className="cap-panel cap-panel-2">
            <div>
              <div className="cap-micro-header">
                <span>Primary Function</span>
                <span>02</span>
              </div>
              <h4 className="cap-headline">Decision-relevant intelligence spanning geopolitical risk.</h4>
            </div>
            <Link href="/what-we-do#intelligence" className="cap-link">Explore Intelligence →</Link>
          </div>

          <div className="cap-panel cap-panel-3">
            <div>
              <div className="cap-micro-header">
                <span>Primary Function</span>
                <span>03</span>
              </div>
              <h4 className="cap-headline">Supporting organisations in navigating complex environments.</h4>
            </div>
            <Link href="/what-we-do#advisory" className="cap-link">Explore Advisory →</Link>
          </div>
        </div>
      </div>

      {/* ============================================================
           SCENE 04 — TYPOGRAPHIC INTERRUPTION
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
            <span className="featured-eyebrow-tag">Featured Report // 12 September 2026</span>
            <h2 className="featured-story-title">India&apos;s Strategic Position in the Global Technology Order</h2>
            <p className="featured-story-excerpt">An examination of India&apos;s evolving role within global technology value chains, semiconductor ecosystems, and digital governance frameworks — and what this means for businesses, investors, and policymakers navigating the new technology order.</p>
            <div>
              <Link href="/insights/india-technology-order" className="btn btn-secondary">Read Report →</Link>
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
              <article className="story-lead">
                <div className="story-lead-image">
                  <img src="/assets/insight-sanctions.jpg" alt="Sanctions Architecture" />
                </div>
                <div className="story-meta">
                  <span className="story-tag">Intelligence Brief</span>
                  <span>•</span>
                  <span>8 September 2026</span>
                </div>
                <h3 className="story-title" style={{ fontSize: "28px" }}>Navigating the New Sanctions Architecture</h3>
                <p className="story-excerpt">How evolving sanctions regimes are reshaping cross-border commerce, investment flows, and corporate compliance frameworks.</p>
                <div>
                  <Link href="/insights/sanctions" className="btn-ghost-gold">Read Brief →</Link>
                </div>
              </article>

              <article className="story-secondary">
                <div className="story-secondary-image">
                  <img src="/assets/insight-energy.jpg" alt="Critical Minerals & Energy" />
                </div>
                <div className="story-meta">
                  <span className="story-tag">Policy Paper</span>
                  <span>•</span>
                  <span>1 September 2026</span>
                </div>
                <h3 className="story-title">Energy Security and the Geopolitics of Critical Minerals</h3>
                <p className="story-excerpt">The intersection of energy transition and mineral supply chains — risks, dependencies, and strategic opportunities.</p>
                <div>
                  <Link href="/insights/critical-minerals" className="btn-ghost-gold">Read Paper →</Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           SCENE 09 — GEOGRAPHIC INDEX
           ============================================================ */}
      <GeographicIndex />

      {/* ============================================================
           SCENE 10 — CHAPTER VISUAL RESET
           ============================================================ */}
      <div className="stage-container">
        <section className="section-chapter-reset">
          <div className="chapter-reset-rule"></div>
          <h2 className="chapter-reset-heading">Five domains. One mandate.</h2>
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
            <div className="roster-row">
              <span className="roster-num">01</span>
              <h3 className="roster-title">Businesses & Multinational Corporations</h3>
              <p className="roster-desc">Advising enterprise leadership navigating international sanctions, cross-border regulatory shifts, and supply-chain realignment.</p>
            </div>
            <div className="roster-row">
              <span className="roster-num">02</span>
              <h3 className="roster-title">Investors & Financial Institutions</h3>
              <p className="roster-desc">Providing sovereign wealth funds, private equity, and institutional investors with geopolitical risk assessments and regulatory foresight.</p>
            </div>
            <div className="roster-row">
              <span className="roster-num">03</span>
              <h3 className="roster-title">Governments & Public Institutions</h3>
              <p className="roster-desc">Delivering comparative policy analysis, strategic scenario planning, and cross-border regulatory intelligence to ministries and regulatory bodies.</p>
            </div>
            <div className="roster-row">
              <span className="roster-num">04</span>
              <h3 className="roster-title">International Organisations</h3>
              <p className="roster-desc">Contributing empirical research and policy frameworks to multilateral institutions shaping global economic governance.</p>
            </div>
            <div className="roster-row">
              <span className="roster-num">05</span>
              <h3 className="roster-title">Industry Associations</h3>
              <p className="roster-desc">Partnering with peak industry bodies to analyze regulatory headwinds, trade barriers, and industrial policy developments.</p>
            </div>
            <div className="roster-row">
              <span className="roster-num">06</span>
              <h3 className="roster-title">Universities & Research Institutions</h3>
              <p className="roster-desc">Collaborating with leading global policy institutes, law faculties, and think tanks on joint research initiatives.</p>
            </div>
            <div className="roster-row">
              <span className="roster-num">07</span>
              <h3 className="roster-title">Diplomatic & International Networks</h3>
              <p className="roster-desc">Providing strategic intelligence and advisory support to diplomatic missions, embassies, and cross-border international networks.</p>
            </div>
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
            <div className="event-chronology-row">
              <div>
                <span className="event-badge-pill pill-burgundy">Roundtable</span>
                <div className="event-date-display">15 Oct 2026</div>
              </div>
              <div>
                <h3 className="event-headline-text">India&apos;s Role in the Global Technology Order</h3>
                <span className="event-venue-meta">Closed-Door Dialogue // New Delhi, India</span>
              </div>
              <div style={{ textAlign: "right" }}>
                <Link href="/events" className="btn btn-outline-navy">Request Invitation</Link>
              </div>
            </div>

            <div className="event-chronology-row">
              <div>
                <span className="event-badge-pill pill-slate">Forum</span>
                <div className="event-date-display">08 Nov 2026</div>
              </div>
              <div>
                <h3 className="event-headline-text">Gulf–India Energy and Investment Corridors</h3>
                <span className="event-venue-meta">Executive Forum // Dubai, UAE</span>
              </div>
              <div style={{ textAlign: "right" }}>
                <Link href="/events" className="btn btn-outline-navy">Request Invitation</Link>
              </div>
            </div>

            <div className="event-chronology-row">
              <div>
                <span className="event-badge-pill pill-burgundy">Conference</span>
                <div className="event-date-display">03 Dec 2026</div>
              </div>
              <div>
                <h3 className="event-headline-text">Rethinking Global Supply Chains in an Era of Strategic Competition</h3>
                <span className="event-venue-meta">International Conference // London, UK</span>
              </div>
              <div style={{ textAlign: "right" }}>
                <Link href="/events" className="btn btn-outline-navy">Request Invitation</Link>
              </div>
            </div>
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
              <blockquote className="about-quote-text">&quot;Situated at the nexus of law, geoeconomics, and emerging technologies, the Centre bridges scholarly rigor and executive decision-making.&quot;</blockquote>
              <span className="about-quote-author">— SLR Centre for Global Law</span>
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
