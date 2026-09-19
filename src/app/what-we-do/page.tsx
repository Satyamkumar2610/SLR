import Link from "next/link";

export default function WhatWeDoPage() {
  return (
    <main>
      {/* ===== MOBILE DRAWER ===== */}
  <div className="mobile-drawer" id="mobile-drawer" aria-label="Mobile navigation">
    <div className="mobile-drawer-header">
      <img src="assets/logo-slr-white.svg" alt="SLR Centre" className="mobile-drawer-logo" height="28" />
      <button className="mobile-drawer-close" id="mobile-drawer-close" aria-label="Close menu">✕</button>
    </div>
    <div className="mobile-drawer-cta">
      <a href="/engage" className="btn btn-primary">Engage the Centre</a>
    </div>
    <div className="mobile-nav-item">
      <button type="button" data-mobile-toggle="areas">Areas of Focus <svg width="12" height="8" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <div className="mobile-subnav" id="mobile-areas">
        <a href="/areas/global-law">01 Global Law & Cross-Border Regulation</a>
        <a href="/areas/geoeconomics">02 Geoeconomics & Strategic Affairs</a>
        <a href="/areas/global-finance">03 Global Finance & Investment</a>
        <a href="/areas/energy">04 Energy & Energy Transitions</a>
        <a href="/areas/emerging-technologies">05 Emerging Technologies & Governance</a>
        <a href="/areas-of-focus">All Areas of Focus →</a>
      </div>
    </div>
    <div className="mobile-nav-item">
      <button type="button" data-mobile-toggle="sectors">Sectors <svg width="12" height="8" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <div className="mobile-subnav" id="mobile-sectors">
        <a href="/sectors/defence">Defence & Homeland Security</a>
        <a href="/sectors/pharma">Pharmaceuticals & Healthcare</a>
        <a href="/sectors/energy-climate">Energy & Climate</a>
        <a href="/sectors/technology-ai">Technology & AI</a>
        <a href="/sectors/financial-services">Financial Services</a>
        <a href="/sectors/infrastructure">Infrastructure & Connectivity</a>
        <a href="/sectors/semiconductors">Electronics & Semiconductors</a>
        <a href="/sectors">All Sectors →</a>
      </div>
    </div>
    <div className="mobile-nav-item">
      <button type="button" data-mobile-toggle="whatwedo-m">What We Do <svg width="12" height="8" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <div className="mobile-subnav" id="mobile-whatwedo-m">
        <a href="/what-we-do#research">Research & Strategic Intelligence</a>
        <a href="/what-we-do#intelligence">Geopolitical & Regulatory Intelligence</a>
        <a href="/what-we-do#briefings">Executive & C-Suite Briefings</a>
        <a href="/what-we-do#roundtables">Closed-Door Roundtables & Dialogues</a>
        <a href="/what-we-do">All Offerings →</a>
      </div>
    </div>
    <div className="mobile-nav-item">
      <button type="button" data-mobile-toggle="geo-m">Geographies <svg width="12" height="8" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <div className="mobile-subnav" id="mobile-geo-m">
        <a href="/geographies/india-south-asia">India & South Asia ★</a>
        <a href="/geographies/indo-pacific">Indo-Pacific & East Asia</a>
        <a href="/geographies/asean">ASEAN & Southeast Asia</a>
        <a href="/geographies/middle-east">Middle East & Gulf</a>
        <a href="/geographies/europe">Europe & Eurasia</a>
        <a href="/geographies/north-america">North America</a>
        <a href="/geographies/africa">Africa</a>
        <a href="/geographies/latin-america">Latin America & the Caribbean</a>
        <a href="/geographies">All Geographies →</a>
      </div>
    </div>
    <div className="mobile-nav-item">
      <a href="/insights">Insights</a>
    </div>
    <div className="mobile-nav-item">
      <a href="/about">About</a>
    </div>
    <div className="mobile-drawer-footer">
      <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
      </a>
      <span>© 2026 SLR Advocates & Solicitors</span>
    </div>
  </div>


  <section className="page-hero on-dark">
    <div className="container">
      <div className="page-hero-breadcrumb">
        <a href="/">Home</a>
        <span className="breadcrumb-sep">/</span>
        <span>What We Do</span>
      </div>
      <p className="eyebrow">What We Do</p>
      <h1>Research. Intelligence. Strategic Advisory.</h1>
      <p className="lead">Three modes of engagement — integrated to equip decision-makers with the clarity that consequential decisions demand.</p>
      <div className="pillar-anchor-bar">
        <a href="#research" className="pillar-anchor-link">Research</a>
        <a href="#intelligence" className="pillar-anchor-link">Intelligence</a>
        <a href="#advisory" className="pillar-anchor-link">Advisory</a>
      </div>
    </div>
  </section>

  <section className="section bg-ivory" id="research">
    <div className="container">
      <div className="section-header">
        <p className="eyebrow">Pillar One</p>
        <h2>Research &amp; Strategic Intelligence</h2>
        <p className="lead">Evidence. Depth. Clarity. — Substantive research designed to anticipate, not merely respond.</p>
      </div>
      <div className="service-block qs-item">
        <div className="service-text">
          <p className="eyebrow">01</p>
          <h2>Research &amp; Strategic Intelligence</h2>
          <p className="lead">Original, in-depth research across law, geoeconomics, and technology — producing publications, intelligence briefs, and strategic analysis that equip leaders with foresight.</p>
          <ul className="service-deliverables">
            <li>Long-form research papers and policy analyses</li>
            <li>Strategic intelligence briefs</li>
            <li>Sector-specific risk assessments</li>
          </ul>
          <a href="/engage" className="gold-arrow" style={{marginTop: "var(--s3)"}}>Enquire <span>→</span></a>
        </div>
        <div className="service-visual"><svg className="service-visual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg></div>
      </div>
      <div className="service-block qs-item">
        <div className="service-text">
          <p className="eyebrow">02</p>
          <h2>Geopolitical &amp; Regulatory Intelligence</h2>
          <p className="lead">Real-time monitoring and analysis of regulatory shifts, sanctions developments, and geopolitical events affecting business strategy and investment decisions.</p>
          <ul className="service-deliverables">
            <li>Regulatory horizon scanning</li>
            <li>Sanctions compliance intelligence</li>
            <li>Political risk monitoring</li>
          </ul>
          <a href="/engage" className="gold-arrow" style={{marginTop: "var(--s3)"}}>Enquire <span>→</span></a>
        </div>
        <div className="service-visual"><svg className="service-visual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>
      </div>
    </div>
  </section>

  <div className="divider-band"></div>

  <section className="section bg-white" id="intelligence">
    <div className="container">
      <div className="section-header">
        <p className="eyebrow">Pillar Two</p>
        <h2>Intelligence &amp; Briefings</h2>
        <p className="lead">Monitor. Interpret. Anticipate. — Concise, actionable intelligence for time-constrained leaders.</p>
      </div>
      <div className="service-block qs-item">
        <div className="service-text">
          <p className="eyebrow">03</p>
          <h2>Executive &amp; C-Suite Briefings</h2>
          <p className="lead">Tailored briefing sessions for senior executives on specific geopolitical, regulatory, or technology developments relevant to their organisation and sector.</p>
          <ul className="service-deliverables">
            <li>Pre-board and pre-summit briefing packs</li>
            <li>Sector-specific executive intelligence</li>
            <li>Confidential one-on-one advisory sessions</li>
          </ul>
          <a href="/engage" className="gold-arrow" style={{marginTop: "var(--s3)"}}>Enquire <span>→</span></a>
        </div>
        <div className="service-visual"><svg className="service-visual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div>
      </div>
      <div className="service-block qs-item">
        <div className="service-text">
          <p className="eyebrow">04</p>
          <h2>Executive Preparation &amp; Strategic Decision Support</h2>
          <p className="lead">Comprehensive preparation and analytical support for consequential engagements — government negotiations, investment decisions, market entries, and strategic partnerships.</p>
          <ul className="service-deliverables">
            <li>Counterpart and stakeholder analysis</li>
            <li>Scenario modelling for negotiations</li>
            <li>Decision-support frameworks</li>
          </ul>
          <a href="/engage" className="gold-arrow" style={{marginTop: "var(--s3)"}}>Enquire <span>→</span></a>
        </div>
        <div className="service-visual"><svg className="service-visual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div>
      </div>
    </div>
  </section>

  <div className="divider-band"></div>

  <section className="section bg-ivory" id="advisory">
    <div className="container">
      <div className="section-header">
        <p className="eyebrow">Pillar Three</p>
        <h2>Strategic Advisory</h2>
        <p className="lead">Navigate. Strategise. Act. — Bespoke advisory for organisations navigating global complexity.</p>
      </div>
      <div className="service-block qs-item">
        <div className="service-text">
          <p className="eyebrow">05</p>
          <h2>Closed-Door Roundtables &amp; Strategic Dialogues</h2>
          <p className="lead">Invitation-only convenings bringing together senior leaders from business, government, and academia to engage on critical geoeconomic and regulatory challenges.</p>
          <ul className="service-deliverables">
            <li>Curated, off-the-record discussions</li>
            <li>Post-roundtable strategic summaries</li>
            <li>Network-building across sectors and geographies</li>
          </ul>
          <a href="/engage" className="gold-arrow" style={{marginTop: "var(--s3)"}}>Enquire <span>→</span></a>
        </div>
        <div className="service-visual"><svg className="service-visual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
      </div>
      <div className="service-block qs-item">
        <div className="service-text">
          <p className="eyebrow">06</p>
          <h2>Market Entry &amp; International Expansion Intelligence</h2>
          <p className="lead">Comprehensive regulatory, political, and geoeconomic intelligence for organisations entering new markets or expanding international operations.</p>
          <ul className="service-deliverables">
            <li>Regulatory landscape mapping</li>
            <li>Stakeholder and political risk assessment</li>
            <li>Strategic corridor analysis</li>
          </ul>
          <a href="/engage" className="gold-arrow" style={{marginTop: "var(--s3)"}}>Enquire <span>→</span></a>
        </div>
        <div className="service-visual"><svg className="service-visual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg></div>
      </div>
    </div>
  </section>

  <section className="cta-banner section--spacious bg-navy on-dark">
    <div className="container">
      <div className="cta-banner-content qs-item" style={{textAlign: "center", maxWidth: "640px", margin: "0 auto"}}>
        <h2>Ready to engage?</h2>
        <p style={{fontSize: "18px", color: "rgba(216,216,219,0.8)", marginTop: "var(--s3)"}}>Commission research, attend a dialogue, or request a briefing.</p>
        <a href="/engage" className="btn btn-primary" style={{marginTop: "var(--s5)"}}>Engage the Centre</a>
      </div>
    </div>
  </section>


  {/* Gold Thread Footer Border (C.1 — 600ms, one-time draw) */}
  <div className="footer-gold-thread" aria-hidden="true">
    <svg className="gold-thread-svg" viewBox="0 0 1280 3" preserveAspectRatio="none">
      <line className="gold-thread-line" x1="0" y1="1.5" x2="1280" y2="1.5" style={{ "--thread-len": "1280" } as React.CSSProperties} />
    </svg>
  </div>
  <footer className="footer bg-navy on-dark" id="footer">
    <div className="container">
      <div className="footer-grid">
        {/* Col 1: Logo + Tagline */}
        <div>
          <img src="assets/logo-slr-white.svg" alt="SLR Centre" className="footer-logo" height="36" />
          <p className="centre-name">Centre for Global Law, Geoeconomics & Emerging Technologies</p>
          <p className="footer-tagline">Let justice be done though the heavens fall</p>
          <a href="https://linkedin.com" className="footer-linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          </a>
        </div>

        {/* Col 2: Areas of Focus */}
        <div>
          <h4 className="footer-col-title">Areas of Focus</h4>
          <div className="footer-links">
            <a href="/areas/global-law">01 Global Law & Regulation</a>
            <a href="/areas/geoeconomics">02 Geoeconomics & Strategic Affairs</a>
            <a href="/areas/global-finance">03 Global Finance & Investment</a>
            <a href="/areas/energy">04 Energy & Energy Transitions</a>
            <a href="/areas/emerging-technologies">05 Emerging Technologies & Governance</a>
          </div>
        </div>

        {/* Col 3: Sectors */}
        <div>
          <h4 className="footer-col-title">Sectors</h4>
          <div className="footer-links">
            <a href="/sectors/defence">Defence & Homeland Security</a>
            <a href="/sectors/pharma">Pharmaceuticals & Healthcare</a>
            <a href="/sectors/energy-climate">Energy & Climate</a>
            <a href="/sectors/technology-ai">Technology & AI</a>
            <a href="/sectors/financial-services">Financial Services</a>
            <a href="/sectors/infrastructure">Infrastructure & Connectivity</a>
            <a href="/sectors/semiconductors">Electronics & Semiconductors</a>
          </div>
        </div>

        {/* Col 4: Connect */}
        <div>
          <h4 className="footer-col-title">Connect</h4>
          <div className="footer-links">
            <a href="/insights">Insights & Publications</a>
            <a href="/events">Events & Dialogues</a>
            <a href="/engage">Engage the Centre</a>
          </div>
          <div className="footer-newsletter">
            <h4 className="footer-col-title footer-newsletter-title">Newsletter</h4>
            <form className="footer-newsletter-form" >
              <input type="email" className="footer-newsletter-input" placeholder="Email address" aria-label="Email address" required />
              <button type="submit" className="footer-newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>© 2026 SLR Advocates & Solicitors. All rights reserved.</span>
        <div className="footer-legal-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/cookies">Cookie Settings</a>
        </div>
      </div>
    </div>
  </footer>

  {/* Magnetic Cursor Label (C.7) */}
  <div className="cursor-label" id="cursor-label" aria-hidden="true"></div>
    </main>
  );
}
