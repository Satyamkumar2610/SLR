import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { geographies, getGeography, corridorsForGeography } from "@/lib/content";
import MetadataRail from "@/components/MetadataRail";

export function generateStaticParams() {
  return geographies.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const geo = getGeography(slug);
  if (!geo) return {};
  return {
    title: `${geo.name} — Geographies — SLR Centre`,
    description: geo.description,
  };
}

export default async function GeographyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const geo = getGeography(slug);
  if (!geo) notFound();

  const relatedCorridors = corridorsForGeography(geo.slug);
  const otherGeographies = geographies.filter((g) => g.slug !== geo.slug);

  return (
    <main>
      <section className="page-hero">
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/geographies">Geographies</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{geo.name}</span>
          </div>
          <span className="profile-tag" style={{ marginTop: "18px" }}>
            <span className="profile-tag-dot" style={{ backgroundColor: "var(--color-gold)" }} />
            {geo.tag}
          </span>
          <h1 className="page-hero-title">{geo.name}</h1>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="profile-grid">
            <div>
              <div className="profile-body">
                <p>{geo.description}</p>
              </div>
            </div>

            <MetadataRail
              blocks={[
                {
                  label: "Strategic Corridors Touching This Region",
                  links: relatedCorridors.map((c) => ({ href: `/corridors#${c.slug}`, label: c.name })),
                },
                {
                  label: "Other Geographies",
                  links: otherGeographies.slice(0, 5).map((g) => ({ href: `/geographies/${g.slug}`, label: g.name })),
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="stage-container">
          <Link href="/geographies" className="btn-outline-navy">← Back to Geographies</Link>
        </div>
      </section>
    </main>
  );
}
