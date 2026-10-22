import Link from "next/link";
import { areasOfFocus, pillars } from "@/lib/content";

/**
 * Shown wherever publications are listed while the insights feed is
 * empty. Everything here is drawn from the Centre Profile: the research
 * portfolio formats and the five domains the work will be organised by.
 */
export default function PublicationsForthcoming({ compact = false }: { compact?: boolean }) {
  const formats = pillars.find((p) => p.slug === "research")?.items ?? [];
  // Sits under the home page's section heading when compact, and directly
  // under the page title on /insights.
  const Title = compact ? "h3" : "h2";

  return (
    <div className={`forthcoming ${compact ? "forthcoming-compact" : ""}`}>
      <div className="forthcoming-card">
        <div className="forthcoming-lattice" aria-hidden="true" />
        <div className="forthcoming-copy">
          <span className="forthcoming-status">
            <span className="forthcoming-dot" aria-hidden="true" />
            In preparation
          </span>
          <Title className="forthcoming-title">The Centre&apos;s first publications are in preparation.</Title>
          <p className="forthcoming-lead">
            Research reports, intelligence briefs and policy papers will be published here as they are released.
            Register your interest to receive them on publication.
          </p>
          <div className="forthcoming-actions">
            <Link href="/engage?enquiry=Research%20Inquiry" className="btn btn-primary">Register Interest</Link>
            <Link href="/research" className="btn btn-secondary">Explore the Research Agenda</Link>
          </div>
        </div>
        <div className="forthcoming-formats">
          <span className="forthcoming-formats-label">The research portfolio</span>
          <ul className="forthcoming-format-list">
            {formats.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      {!compact && (
        <div className="forthcoming-domains">
          <span className="eyebrow">Organised across five domains</span>
          <div className="forthcoming-domain-grid">
            {areasOfFocus.map((area) => (
              <Link key={area.slug} href={`/research?area=${area.slug}`} className="forthcoming-domain">
                <span className="forthcoming-domain-num">{area.num}</span>
                <span className="forthcoming-domain-title">{area.title}</span>
                <span className="forthcoming-domain-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
