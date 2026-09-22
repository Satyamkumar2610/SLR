import Image from "next/image";
import Link from "next/link";
import { areasOfFocus, sectors, geographies } from "@/lib/content";

export default function Footer() {
  return (
    <div className="stage-container" style={{ paddingBottom: "24px" }}>
      <footer className="signature-footer">
        <div className="footer-top-layout">
          <div className="footer-brand-wrap">
            <Image src="/assets/logo-slr-white.svg" alt="SLR Advocates & Solicitors" width={125} height={50} unoptimized style={{ height: "50px", width: "auto" }} />
            <h3 className="footer-institution-name">Centre for Global Law, Geoeconomics & Emerging Technologies</h3>
            <p className="footer-motto-phrase">Let justice be done though the heavens fall</p>
          </div>
          <div>
            <Link href="/engage" className="btn btn-secondary">Engage the Centre</Link>
          </div>
        </div>

        <div className="footer-directory-grid">
          <div className="footer-col-group">
            <span className="footer-header-label">Research</span>
            {areasOfFocus.map((a) => (
              <Link key={a.slug} href={`/research?area=${a.slug}`} className="footer-dir-link">
                {a.num} {a.title}
              </Link>
            ))}
            <Link href="/research" className="footer-dir-link" style={{ color: "var(--color-gold-light)" }}>All Research →</Link>
          </div>

          <div className="footer-col-group">
            <span className="footer-header-label">Sectors</span>
            {sectors.map((s) => (
              <Link key={s.slug} href={`/sectors/${s.slug}`} className="footer-dir-link">{s.title}</Link>
            ))}
            <Link href="/sectors" className="footer-dir-link" style={{ color: "var(--color-gold-light)" }}>Sector Observatory →</Link>
          </div>

          <div className="footer-col-group">
            <span className="footer-header-label">Geographies</span>
            {geographies.map((g) => (
              <Link key={g.slug} href={`/geographies/${g.slug}`} className="footer-dir-link">{g.name}{g.isAnchor ? " ★" : ""}</Link>
            ))}
            <Link href="/corridors" className="footer-dir-link" style={{ color: "var(--color-gold-light)" }}>Strategic Corridors →</Link>
          </div>

          <div className="footer-col-group">
            <span className="footer-header-label">Connect</span>
            <Link href="/insights" className="footer-dir-link">Insights &amp; Publications</Link>
            <Link href="/events" className="footer-dir-link">Events &amp; Dialogues</Link>
            <Link href="/capabilities" className="footer-dir-link">Capabilities</Link>
            <Link href="/about" className="footer-dir-link">About the Centre</Link>
            <Link href="/engage" className="footer-dir-link">Engage the Centre</Link>
          </div>
        </div>

        <div className="footer-closing-bar">
          <div>© 2026 SLR Advocates &amp; Solicitors. All rights reserved.</div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/privacy" className="footer-dir-link" style={{ fontSize: "12px" }}>Privacy Policy</Link>
            <Link href="/terms" className="footer-dir-link" style={{ fontSize: "12px" }}>Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
