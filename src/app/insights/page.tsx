import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import InsightsExplorer from "@/components/InsightsExplorer";
import PublicationsForthcoming from "@/components/PublicationsForthcoming";
import { insights } from "@/lib/content";
import HeroPhoto from "@/components/HeroPhoto";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Insights & Publications — SLR Centre",
  description: "Research reports, intelligence briefs and policy papers from the SLR Centre.",
};

export default function InsightsPage() {
  return (
    <main>
      <section className="page-hero page-hero-photo">
        <HeroPhoto photo={photos.library} />
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Insights</span>
          </div>
          <span className="eyebrow eyebrow-light">Research &amp; Intelligence</span>
          <h1 className="page-hero-title">Insights &amp; Publications</h1>
          <p className="page-hero-lead">
            Research reports, intelligence briefs and policy papers from the Centre.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          {insights.length === 0 ? (
            <PublicationsForthcoming />
          ) : (
            <Suspense fallback={null}>
              <InsightsExplorer />
            </Suspense>
          )}
        </div>
      </section>
    </main>
  );
}
