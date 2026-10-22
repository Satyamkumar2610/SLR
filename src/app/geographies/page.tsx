import type { Metadata } from "next";
import Link from "next/link";
import { geographies, corridors, geographiesIntro, corridorsIntro } from "@/lib/content";
import HeroPhoto from "@/components/HeroPhoto";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Geographies — SLR Centre",
  description: geographiesIntro,
};

export default function GeographiesPage() {
  return (
    <main>
      <section className="page-hero page-hero-photo">
        <HeroPhoto photo={photos.worldMap1798} />
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Geographies</span>
          </div>
          <span className="eyebrow eyebrow-light">Geographies &amp; Strategic Corridors</span>
          <h1 className="page-hero-title">Geographies</h1>
          <p className="page-hero-lead">
            {geographiesIntro}
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="section-head-row">
            <div>
              <span className="eyebrow">Regions</span>
              <h2 className="text-section-title" style={{ marginTop: "8px" }}>
                {geographies.length} geographies, one global perspective
              </h2>
            </div>
          </div>

          <div className="geo-directory-grid">
            {geographies.map((geo) => (
              <div className="geo-directory-item" key={geo.slug}>
                <span className="geo-directory-tag">{geo.tag}</span>
                <h3 className="geo-directory-name">{geo.name}{geo.isAnchor && <span className="anchor-tag">Anchor</span>}</h3>
                <p className="geo-directory-desc">{geo.description}</p>
                <div style={{ marginTop: "16px" }}>
                  <Link href={`/geographies/${geo.slug}`} className="btn-ghost-gold">Explore →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section-dark">
        <div className="stage-container">
          <div className="section-head-row">
            <div>
              <span className="eyebrow eyebrow-light">Strategic Corridors</span>
              <h2 className="text-section-title" style={{ marginTop: "8px", color: "var(--color-white)" }}>
                Strategic Corridors We Track
              </h2>
              <p className="text-lead" style={{ marginTop: "14px", color: "rgba(255,255,255,0.72)" }}>
                {corridorsIntro}
              </p>
            </div>
            <Link href="/corridors" className="btn-ghost-gold" style={{ color: "var(--color-gold-light)" }}>
              Explore Strategic Corridors →
            </Link>
          </div>

          <div className="corridor-list">
            {corridors.map((corridor) => (
              <div className="corridor-row" key={corridor.slug}>
                <h3 className="corridor-name">{corridor.name}</h3>
                <p className="corridor-desc">{corridor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
