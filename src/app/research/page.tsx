import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ResearchPortal from "@/components/ResearchPortal";
import { areasOfFocus, sectors, geographies, corridors } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research Portal — SLR Centre",
  description: "Five interconnected research domains at the intersection of global law, geoeconomics and emerging technologies.",
};

export default function ResearchPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Research</span>
          </div>
          <span className="eyebrow eyebrow-light">Research Portal</span>
          <h1 className="page-hero-title">Five domains. One mandate.</h1>
          <p className="page-hero-lead">
            The Centre analyses how evolving configurations of power, capital, trade, energy, regulation, and
            technology are reshaping economies, industries, and institutions worldwide.
          </p>
          <div className="page-hero-facts">
            <div>
              <span className="page-hero-fact-num">{areasOfFocus.length}</span>
              <span className="page-hero-fact-label">Research Domains</span>
            </div>
            <div>
              <span className="page-hero-fact-num">{sectors.length}</span>
              <span className="page-hero-fact-label">Priority Sectors</span>
            </div>
            <div>
              <span className="page-hero-fact-num">{geographies.length}</span>
              <span className="page-hero-fact-label">Geographies</span>
            </div>
            <div>
              <span className="page-hero-fact-num">{corridors.length}</span>
              <span className="page-hero-fact-label">Strategic Corridors</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <Suspense fallback={null}>
            <ResearchPortal />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
