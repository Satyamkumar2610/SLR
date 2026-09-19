import Link from "next/link";

export default function InsightsPage() {
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
        <span>Insights</span>
      </div>
      <p className="eyebrow">Insights &amp; Publications</p>
      <h1>Research that anticipates what's next</h1>
      <p className="lead">Rigorous analysis and intelligence briefs at the intersection of law, geoeconomics, and emerging technologies.</p>
    </div>
  </section>

  <section className="section bg-ivory">
    <div className="container">
      <div className="filter-bar">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Intelligence Briefs</button>
        <button className="filter-btn">Research Papers</button>
        <button className="filter-btn">Strategic Analysis</button>
        <button className="filter-btn">Policy Notes</button>
      </div>

      <div className="insights-page-grid quiet-stagger" style={{marginTop: "var(--s4)"}}>
        <div className="insight-card qs-item">
          <div className="insight-card-image">
            <img src="assets/insight-india-tech.jpg" alt="India Technology Order" loading="lazy" />
            <span className="insight-card-badge">Intelligence Brief</span>
          </div>
          <div className="insight-card-body-wrap">
            <span className="insight-card-type">Geoeconomics &amp; Strategic Affairs</span>
            <h3 className="insight-card-title">India's Emerging Technology Order: Strategic Autonomy in a Fragmented World</h3>
            <p className="insight-card-excerpt">How India is positioning itself as a sovereign technology power through industrial policy, strategic partnerships, and selective alignment.</p>
            <div className="insight-card-footer">
              <span className="insight-card-date">11 Sep 2026</span>
              <span className="insight-card-read">Read →</span>
            </div>
          </div>
        </div>

        <div className="insight-card qs-item">
          <div className="insight-card-image">
            <img src="assets/insight-sanctions.jpg" alt="Sanctions Architecture" loading="lazy" />
            <span className="insight-card-badge">Strategic Analysis</span>
          </div>
          <div className="insight-card-body-wrap">
            <span className="insight-card-type">Global Law &amp; Regulation</span>
            <h3 className="insight-card-title">Navigating the New Sanctions Architecture: Compliance in a Multipolar World</h3>
            <p className="insight-card-excerpt">The evolving sanctions landscape demands a fundamental rethinking of compliance strategy as regulatory fragmentation accelerates.</p>
            <div className="insight-card-footer">
              <span className="insight-card-date">04 Sep 2026</span>
              <span className="insight-card-read">Read →</span>
            </div>
          </div>
        </div>

        <div className="insight-card qs-item">
          <div className="insight-card-image">
            <img src="assets/insight-energy.jpg" alt="Critical Minerals" loading="lazy" />
            <span className="insight-card-badge">Research Paper</span>
          </div>
          <div className="insight-card-body-wrap">
            <span className="insight-card-type">Energy &amp; Transitions</span>
            <h3 className="insight-card-title">Critical Minerals &amp; the New Energy Geopolitics: Supply Chain Vulnerabilities</h3>
            <p className="insight-card-excerpt">As the energy transition accelerates, control of critical mineral supply chains is becoming a primary axis of geopolitical competition.</p>
            <div className="insight-card-footer">
              <span className="insight-card-date">28 Aug 2026</span>
              <span className="insight-card-read">Read →</span>
            </div>
          </div>
        </div>

        <div className="insight-card qs-item">
          <div className="insight-card-image">
            <div className="placeholder-img"></div>
            <span className="insight-card-badge">Intelligence Brief</span>
          </div>
          <div className="insight-card-body-wrap">
            <span className="insight-card-type">Emerging Technologies</span>
            <h3 className="insight-card-title">Semiconductor Supply Chains: Strategic Dependencies &amp; Industrial Policy</h3>
            <p className="insight-card-excerpt">Mapping the critical chokepoints in global semiconductor manufacturing and the policy responses reshaping the industry.</p>
            <div className="insight-card-footer">
              <span className="insight-card-date">20 Aug 2026</span>
              <span className="insight-card-read">Read →</span>
            </div>
          </div>
        </div>

        <div className="insight-card qs-item">
          <div className="insight-card-image">
            <div className="placeholder-img"></div>
            <span className="insight-card-badge">Policy Note</span>
          </div>
          <div className="insight-card-body-wrap">
            <span className="insight-card-type">Global Finance</span>
            <h3 className="insight-card-title">De-risking vs Decoupling: Financial Sector Implications of Geoeconomic Fragmentation</h3>
            <p className="insight-card-excerpt">How financial institutions are navigating the tension between economic integration and geopolitical risk management.</p>
            <div className="insight-card-footer">
              <span className="insight-card-date">15 Aug 2026</span>
              <span className="insight-card-read">Read →</span>
            </div>
          </div>
        </div>

        <div className="insight-card qs-item">
          <div className="insight-card-image">
            <div className="placeholder-img"></div>
            <span className="insight-card-badge">Strategic Analysis</span>
          </div>
          <div className="insight-card-body-wrap">
            <span className="insight-card-type">Geoeconomics</span>
            <h3 className="insight-card-title">The IMEC Corridor: Reshaping Trade Routes Between India, the Gulf, and Europe</h3>
            <p className="insight-card-excerpt">Assessing the strategic, commercial, and geopolitical implications of the India-Middle East-Europe Economic Corridor.</p>
            <div className="insight-card-footer">
              <span className="insight-card-date">08 Aug 2026</span>
              <span className="insight-card-read">Read →</span>
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-primary btn-load-more">Load More Insights</button>
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
