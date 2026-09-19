import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import InsightsExplorer from "@/components/InsightsExplorer";

export const metadata: Metadata = {
  title: "Insights & Publications — SLR Centre",
  description: "Rigorous analysis and intelligence briefs at the intersection of law, geoeconomics, and emerging technologies.",
};

export default function InsightsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Insights</span>
          </div>
          <span className="eyebrow eyebrow-light">Insights &amp; Publications</span>
          <h1 className="page-hero-title">Research that anticipates what&apos;s next</h1>
          <p className="page-hero-lead">
            Rigorous analysis and intelligence briefs at the intersection of law, geoeconomics, and emerging
            technologies.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <Suspense fallback={null}>
            <InsightsExplorer />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
