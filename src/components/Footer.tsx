import Image from "next/image";
import Link from "next/link";
import { areasOfFocus, sectors, geographies } from "@/lib/content";

/**
 * The page floor: full-bleed navy (it cancels the 16px page frame rather
 * than sitting inside it, so there is no gutter down either side), with the
 * brand block as the first column of the directory so the width is used and
 * the whole thing stays compact.
 */
export default function Footer() {
  return (
    <footer className="signature-footer">
      <div className="stage-container">
        <div className="footer-directory-grid">
          <div className="footer-brand-wrap">
            <Image
              src="/assets/logo-slr-white.svg"
              alt="SLR Advocates & Solicitors"
              width={125}
              height={50}
              unoptimized
              style={{ height: "34px", width: "auto" }}
            />
            <h3 className="footer-institution-name">
              Centre for Global Law, Geoeconomics &amp; Emerging Technologies
            </h3>
            <p className="footer-motto-phrase">Let justice be done though the heavens fall</p>
            <Link href="/engage" className="btn btn-secondary footer-brand-cta">Engage the Centre</Link>
          </div>

          <div className="footer-col-group">
            <span className="footer-header-label">Research</span>
            {areasOfFocus.map((a) => (
              <Link key={a.slug} href={`/research?area=${a.slug}`} className="footer-dir-link">
                {a.title}
              </Link>
            ))}
            <Link href="/research" className="footer-dir-link footer-dir-all">All Research →</Link>
          </div>

          <div className="footer-col-group">
            <span className="footer-header-label">Sectors</span>
            {sectors.map((s) => (
              <Link key={s.slug} href={`/sectors/${s.slug}`} className="footer-dir-link">{s.title}</Link>
            ))}
            <Link href="/sectors" className="footer-dir-link footer-dir-all">Sector Observatory →</Link>
          </div>

          <div className="footer-col-group">
            <span className="footer-header-label">Geographies</span>
            {geographies.map((g) => (
              <Link key={g.slug} href={`/geographies/${g.slug}`} className="footer-dir-link">{g.name}</Link>
            ))}
            <Link href="/corridors" className="footer-dir-link footer-dir-all">Strategic Corridors →</Link>
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
          <span>© 2026 SLR Advocates &amp; Solicitors. All rights reserved.</span>
          <span className="footer-closing-legal">
            <Link href="/privacy" className="footer-dir-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-dir-link">Terms of Use</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
