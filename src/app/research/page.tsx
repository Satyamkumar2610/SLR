import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ResearchPortal from "@/components/ResearchPortal";
import HeroPhoto from "@/components/HeroPhoto";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Research Portal — SLR Centre",
  description: "The Centre's five areas of focus across global law, geoeconomics, finance, energy and emerging technologies.",
};

export default function ResearchPage() {
  return (
    <main>
      <section className="page-hero page-hero-photo">
        <HeroPhoto photo={photos.safdarjung} />
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Research</span>
          </div>
          <span className="eyebrow eyebrow-light">Research Portal</span>
          <h1 className="page-hero-title">Areas of Focus</h1>
          <p className="page-hero-lead">
            The Centre analyses how evolving configurations of power, capital, trade, energy, regulation, and
            technology are reshaping economies, industries, and institutions worldwide.
          </p>
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
