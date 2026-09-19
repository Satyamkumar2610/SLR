import Link from "next/link";

export default function AreasOfFocusPage() {
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
        <span>Areas of Focus</span>
      </div>
      <p className="eyebrow">Areas of Focus</p>
      <h1>Five domains. One mandate.</h1>
      <p className="lead">The Centre analyses how evolving configurations of power, capital, trade, energy, regulation, and technology are reshaping economies, industries, and institutions worldwide.</p>
    </div>
  </section>

  <section className="section bg-ivory">
    <div className="container">
      <div className="quiet-stagger" style={{display: "flex", flexDirection: "column", gap: "var(--s4)"}}>

        <div className="capability-card qs-item" style={{maxWidth: "100%"}}>
          <div>
            <span className="capability-card-number">01</span>
            <h3 className="capability-card-title">Global Law &amp; Cross-Border Regulation</h3>
            <p className="capability-card-body">The evolving legal and regulatory architecture that governs international commerce, investment, technology, sanctions, and cross-border transactions across fragmented jurisdictions. The Centre tracks how diverging regulatory regimes, sanctions architectures, and cross-border enforcement mechanisms are reshaping the legal frameworks within which businesses and states operate.</p>
          </div>
          <a href="/areas/global-law" className="capability-card-link">Explore This Area →</a>
        </div>

        <div className="capability-card qs-item" style={{maxWidth: "100%"}}>
          <div>
            <span className="capability-card-number">02</span>
            <h3 className="capability-card-title">Geoeconomics &amp; Strategic Affairs</h3>
            <p className="capability-card-body">The strategic deployment of trade, investment, finance, technology, resources, and economic policy as instruments of statecraft, economic security, and international influence. The Centre analyses how major powers use economic tools to project influence, secure strategic advantages, and reshape the international order.</p>
          </div>
          <a href="/areas/geoeconomics" className="capability-card-link">Explore This Area →</a>
        </div>

        <div className="capability-card qs-item" style={{maxWidth: "100%"}}>
          <div>
            <span className="capability-card-number">03</span>
            <h3 className="capability-card-title">Global Finance &amp; Investment</h3>
            <p className="capability-card-body">The global financial architecture, sovereign and institutional capital flows, economic restrictions, and the deepening nexus between capital allocation and geopolitical risk. The Centre examines how investment patterns, financial sanctions, and capital controls are redefining the relationship between markets and geopolitics.</p>
          </div>
          <a href="/areas/global-finance" className="capability-card-link">Explore This Area →</a>
        </div>

        <div className="capability-card qs-item" style={{maxWidth: "100%"}}>
          <div>
            <span className="capability-card-number">04</span>
            <h3 className="capability-card-title">Energy &amp; Energy Transitions</h3>
            <p className="capability-card-body">Energy security, global markets, critical minerals, transition finance, and the reconfiguration of global energy systems impacting industrial competitiveness. The Centre analyses how energy transition pathways, critical mineral dependencies, and shifting energy geographies create both risks and opportunities for states and industries.</p>
          </div>
          <a href="/areas/energy" className="capability-card-link">Explore This Area →</a>
        </div>

        <div className="capability-card qs-item" style={{maxWidth: "100%"}}>
          <div>
            <span className="capability-card-number">05</span>
            <h3 className="capability-card-title">Emerging Technologies &amp; Governance</h3>
            <p className="capability-card-body">Artificial intelligence, semiconductors, digital economies, autonomous systems, cyber policy, technology governance, and nascent cross-border regulatory frameworks. The Centre tracks how technology competition, governance gaps, and emerging regulatory paradigms are reshaping industries and international relations.</p>
          </div>
          <a href="/areas/emerging-technologies" className="capability-card-link">Explore This Area →</a>
        </div>

      </div>
    </div>
  </section>

  <section className="section bg-white">
    <div className="container">
      <div className="section-header">
        <p className="eyebrow">Related Sectors</p>
        <h2>Where our research applies</h2>
      </div>
      <div className="pill-strip" style={{marginTop: "var(--s4)"}}>
        <a href="/sectors/defence" className="pill"><span className="pill-dot" style={{background: "var(--navy)"}}></span> Defence &amp; Homeland Security</a>
        <a href="/sectors/pharma" className="pill"><span className="pill-dot" style={{background: "var(--slate)"}}></span> Pharmaceuticals &amp; Healthcare</a>
        <a href="/sectors/energy-climate" className="pill"><span className="pill-dot" style={{background: "var(--forest)"}}></span> Energy &amp; Climate</a>
        <a href="/sectors/technology-ai" className="pill"><span className="pill-dot" style={{background: "var(--gold)"}}></span> Technology &amp; AI</a>
        <a href="/sectors/financial-services" className="pill"><span className="pill-dot" style={{background: "var(--charcoal)"}}></span> Financial Services</a>
        <a href="/sectors/infrastructure" className="pill"><span className="pill-dot" style={{background: "var(--grey-soft)"}}></span> Infrastructure &amp; Connectivity</a>
        <a href="/sectors/semiconductors" className="pill"><span className="pill-dot" style={{background: "var(--burgundy)"}}></span> Electronics &amp; Semiconductors</a>
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
