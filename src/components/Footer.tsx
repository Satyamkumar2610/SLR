import Link from "next/link";

export default function Footer() {
  return (
    <div className="stage-container" style={{ paddingBottom: "24px" }}>
      <footer className="signature-footer">
        <div className="footer-top-layout">
          <div className="footer-brand-wrap">
            <img src="/assets/logo-slr-white.svg" alt="SLR Advocates & Solicitors" />
            <h3 className="footer-institution-name">Centre for Global Law, Geoeconomics & Emerging Technologies</h3>
            <p className="footer-motto-phrase">Let justice be done though the heavens fall</p>
          </div>
          <div>
            <Link href="/engage" className="btn btn-secondary">Engage the Centre</Link>
          </div>
        </div>

        <div className="footer-directory-grid">
          <div className="footer-col-group">
            <span className="footer-header-label">Areas of Focus</span>
            <Link href="/areas-of-focus#global-law" className="footer-dir-link">01 Global Law & Regulation</Link>
            <Link href="/areas-of-focus#geoeconomics" className="footer-dir-link">02 Geoeconomics & Strategic Affairs</Link>
            <Link href="/areas-of-focus#finance" className="footer-dir-link">03 Global Finance & Investment</Link>
            <Link href="/areas-of-focus#energy" className="footer-dir-link">04 Energy & Energy Transitions</Link>
            <Link href="/areas-of-focus#tech" className="footer-dir-link">05 Emerging Technologies & Governance</Link>
          </div>

          <div className="footer-col-group">
            <span className="footer-header-label">Priority Sectors</span>
            <Link href="/sectors/defence" className="footer-dir-link">Defence & Homeland Security</Link>
            <Link href="/sectors/pharma" className="footer-dir-link">Pharmaceuticals & Healthcare</Link>
            <Link href="/sectors/energy-climate" className="footer-dir-link">Energy & Climate</Link>
            <Link href="/sectors/technology-ai" className="footer-dir-link">Technology & AI</Link>
            <Link href="/sectors/financial-services" className="footer-dir-link">Financial Services</Link>
            <Link href="/sectors/infrastructure" className="footer-dir-link">Infrastructure & Connectivity</Link>
            <Link href="/sectors/semiconductors" className="footer-dir-link">Electronics & Semiconductors</Link>
          </div>

          <div className="footer-col-group">
            <span className="footer-header-label">Connect</span>
            <Link href="/insights" className="footer-dir-link">Insights & Publications</Link>
            <Link href="/events" className="footer-dir-link">Events & Dialogues</Link>
            <Link href="/engage" className="footer-dir-link">Engage the Centre</Link>
            <Link href="/about" className="footer-dir-link">About the Centre</Link>
          </div>

          <div className="footer-col-group">
            <span className="footer-header-label">Locations</span>
            <span className="footer-dir-link" style={{ color: "var(--color-ivory)" }}>New Delhi, India</span>
            <span className="footer-dir-link" style={{ color: "var(--color-ivory)" }}>London, United Kingdom</span>
            <span className="footer-dir-link" style={{ color: "var(--color-ivory)" }}>Dubai, United Arab Emirates</span>
          </div>
        </div>

        <div className="footer-closing-bar">
          <div>© 2026 SLR Advocates & Solicitors. All rights reserved.</div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/privacy" className="footer-dir-link" style={{ fontSize: "12px" }}>Privacy Policy</Link>
            <Link href="/terms" className="footer-dir-link" style={{ fontSize: "12px" }}>Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
