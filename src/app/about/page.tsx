import Link from "next/link";

export default function AboutPage() {
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
        <span>About</span>
      </div>
      <p className="eyebrow">About the Centre</p>
      <h1>Rigorous analysis. Actionable intelligence.</h1>
      <p className="lead">The SLR Centre for Global Law, Geoeconomics &amp; Emerging Technologies is a high-level research, intelligence, and strategic advisory centre anchored in India with a global mandate.</p>
    </div>
  </section>

  <section className="section section--spacious bg-ivory">
    <div className="container">
      <div className="about-split">
        <div>
          <div className="section-header">
            <p className="eyebrow">Our Mission</p>
            <h2>Navigating the forces reshaping the world</h2>
          </div>
          <p className="about-body">The Centre exists to equip senior decision-makers — in business, government, and international organisations — with the depth of analysis and clarity of intelligence required to navigate an era of accelerating geopolitical complexity.</p>
          <p className="about-body">We operate at the intersection of law, economics, and emerging technology, producing research and advisory services that are substantive, not reactive — designed to anticipate, not merely respond.</p>
          <p className="about-body">Our work spans five interconnected research domains across seven priority sectors, anchored in India and extending across eight geographies and the strategic corridors connecting them.</p>
        </div>
        <div className="about-quote-panel margin-note qs-item">
          <p className="about-quote-text">"Situated at the nexus of law, geoeconomics, and emerging technologies, the Centre provides the analytical depth and strategic foresight that consequential decisions demand."</p>
          <p className="about-quote-attr">— SLR Centre for Global Law, Geoeconomics &amp; Emerging Technologies</p>
        </div>
      </div>
    </div>
  </section>

  <div className="gold-thread-divider" aria-hidden="true">
    <svg className="gold-thread-svg" viewBox="0 0 1280 3" preserveAspectRatio="none">
      <line className="gold-thread-line" x1="0" y1="1.5" x2="1280" y2="1.5" style={{ "--thread-len": "1280" } as React.CSSProperties} />
    </svg>
  </div>

  <section className="section bg-white">
    <div className="container">
      <div className="section-header">
        <p className="eyebrow">Our Focus</p>
        <h2>Five interconnected research domains</h2>
      </div>
      <div className="grid grid-3 quiet-stagger" style={{marginTop: "var(--s4)"}}>
        <div className="capability-card qs-item"><div><span className="capability-card-number">01</span><h3 className="capability-card-title">Global Law &amp; Cross-Border Regulation</h3><p className="capability-card-body">The evolving legal and regulatory architecture that governs international commerce, investment, technology, and sanctions.</p></div><a href="/areas/global-law" className="capability-card-link">Explore →</a></div>
        <div className="capability-card qs-item"><div><span className="capability-card-number">02</span><h3 className="capability-card-title">Geoeconomics &amp; Strategic Affairs</h3><p className="capability-card-body">The strategic deployment of trade, investment, finance, technology, and economic policy as instruments of statecraft.</p></div><a href="/areas/geoeconomics" className="capability-card-link">Explore →</a></div>
        <div className="capability-card qs-item"><div><span className="capability-card-number">03</span><h3 className="capability-card-title">Global Finance &amp; Investment</h3><p className="capability-card-body">Sovereign and institutional capital flows, economic restrictions, and the nexus between capital allocation and geopolitical risk.</p></div><a href="/areas/global-finance" className="capability-card-link">Explore →</a></div>
        <div className="capability-card qs-item"><div><span className="capability-card-number">04</span><h3 className="capability-card-title">Energy &amp; Energy Transitions</h3><p className="capability-card-body">Energy security, critical minerals, transition finance, and the reconfiguration of global energy systems.</p></div><a href="/areas/energy" className="capability-card-link">Explore →</a></div>
        <div className="capability-card qs-item"><div><span className="capability-card-number">05</span><h3 className="capability-card-title">Emerging Technologies &amp; Governance</h3><p className="capability-card-body">AI, semiconductors, digital economies, autonomous systems, cyber policy, and nascent regulatory frameworks.</p></div><a href="/areas/emerging-technologies" className="capability-card-link">Explore →</a></div>
      </div>
    </div>
  </section>

  <section className="section bg-ivory">
    <div className="container">
      <div className="section-header">
        <p className="eyebrow">Who We Engage With</p>
        <h2>Serving leaders who shape the global agenda</h2>
      </div>
      <div className="grid grid-3 quiet-stagger" style={{marginTop: "var(--s4)"}}>
        <div className="stakeholder-card qs-item"><svg className="stakeholder-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v.01"/><path d="M9 12v.01"/><path d="M9 15v.01"/><path d="M9 18v.01"/></svg><h3 className="stakeholder-card-title">Businesses &amp; Multinationals</h3><p className="stakeholder-card-body">Strategic intelligence for C-suite executives navigating geopolitical complexity, regulatory divergence, and emerging market risks.</p></div>
        <div className="stakeholder-card qs-item"><svg className="stakeholder-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 5h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z"/></svg><h3 className="stakeholder-card-title">Investors &amp; Financial Institutions</h3><p className="stakeholder-card-body">Geoeconomic risk assessment and regulatory intelligence for sovereign wealth funds, institutional investors, and development finance.</p></div>
        <div className="stakeholder-card qs-item"><svg className="stakeholder-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/></svg><h3 className="stakeholder-card-title">Governments &amp; Public Institutions</h3><p className="stakeholder-card-body">Research and advisory support for government ministries, regulatory agencies, and public institutions shaping policy in an era of geoeconomic competition.</p></div>
        <div className="stakeholder-card qs-item"><svg className="stakeholder-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg><h3 className="stakeholder-card-title">International Organisations</h3><p className="stakeholder-card-body">Analytical support for multilateral institutions, development agencies, and international bodies engaged in governance reform.</p></div>
        <div className="stakeholder-card qs-item"><svg className="stakeholder-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg><h3 className="stakeholder-card-title">Industry Associations</h3><p className="stakeholder-card-body">Research and convening services for sector associations seeking to understand cross-border regulatory and geoeconomic dynamics.</p></div>
        <div className="stakeholder-card qs-item"><svg className="stakeholder-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg><h3 className="stakeholder-card-title">Universities &amp; Research Institutions</h3><p className="stakeholder-card-body">Collaborative research partnerships, joint publications, and academic exchanges with leading global institutions.</p></div>
      </div>
    </div>
  </section>

  <section className="cta-banner section--spacious bg-navy on-dark">
    <div className="container">
      <div className="cta-banner-content qs-item" style={{textAlign: "center", maxWidth: "640px", margin: "0 auto"}}>
        <h2>Commission Research.<br />Attend a Dialogue.<br />Request a Briefing.</h2>
        <p style={{fontSize: "18px", color: "rgba(216,216,219,0.8)", marginTop: "var(--s3)"}}>Engage the Centre to navigate what's changing in your world.</p>
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
