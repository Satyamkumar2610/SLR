import type { Metadata } from "next";
import Link from "next/link";
import { corridors, supplyChainsIntro, corridorsIntro } from "@/lib/content";
import CorridorDiagram from "@/components/CorridorDiagram";
import HeroPhoto from "@/components/HeroPhoto";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Strategic Corridors — SLR Centre",
  description: corridorsIntro,
};

export default function CorridorsPage() {
  return (
    <main>
      <section className="page-hero page-hero-photo">
        <HeroPhoto photo={photos.portBarcelona} />
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Corridors</span>
          </div>
          <span className="eyebrow eyebrow-light">Geographies &amp; Strategic Corridors</span>
          <h1 className="page-hero-title">Strategic Corridors</h1>
          <p className="page-hero-lead">{supplyChainsIntro}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="section-head-row">
            <div>
              <span className="eyebrow">Corridor Map</span>
              <h2 className="text-section-title" style={{ marginTop: "8px" }}>How the corridors connect</h2>
              <p className="text-lead" style={{ marginTop: "14px" }}>
                A schematic view of the geographies each corridor connects, based only on the relationships
                described in the Centre&apos;s own research briefs — not modelled trade volumes.
              </p>
            </div>
          </div>
          <CorridorDiagram />
        </div>
      </section>

      <section className="page-section-dark">
        <div className="stage-container">
          <div className="section-head-row">
            <div>
              <span className="eyebrow eyebrow-light">Strategic Corridors We Track</span>
              <h2 className="text-section-title" style={{ marginTop: "8px", color: "var(--color-white)" }}>
                {corridors.length} corridors, one connected world
              </h2>
            </div>
          </div>

          <div className="corridor-list">
            {corridors.map((corridor) => (
              <div className="corridor-row" id={corridor.slug} key={corridor.slug}>
                <h3 className="corridor-name">{corridor.name}</h3>
                <p className="corridor-desc">{corridor.description}</p>
                <div className="corridor-row-map">
                  <CorridorDiagram highlightSlug={corridor.slug} variant="compact" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
