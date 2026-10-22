import type { Metadata } from "next";
import Link from "next/link";
import { SearchTrigger } from "@/components/SearchPalette";

export const metadata: Metadata = {
  title: "Page not found — SLR Centre",
};

const destinations = [
  { href: "/research", label: "Research Portal", note: "Five domains of analysis" },
  { href: "/insights", label: "Insights & Publications", note: "Reports, briefs and policy notes" },
  { href: "/sectors", label: "Sector Observatory", note: "Seven priority sectors" },
  { href: "/engage", label: "Engage the Centre", note: "Commission research or request a briefing" },
];

export default function NotFound() {
  return (
    <main>
      <section className="page-hero state-hero">
        <div className="stage-container">
          <span className="state-code" aria-hidden="true">404</span>
          <span className="eyebrow eyebrow-light">Page not found</span>
          <h1 className="page-hero-title">This page has moved, or never existed.</h1>
          <p className="page-hero-lead">
            The link may be out of date. Search the Centre&apos;s research, or start from one of the destinations below.
          </p>
          <div className="state-actions">
            <SearchTrigger variant="inline" />
            <Link href="/" className="btn btn-secondary">Return Home</Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="state-links">
            {destinations.map((d) => (
              <Link key={d.href} href={d.href} className="state-link">
                <span className="state-link-label">{d.label}</span>
                <span className="state-link-note">{d.note}</span>
                <span className="state-link-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
