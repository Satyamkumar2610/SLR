import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sectors, getSector, areasForSector } from "@/lib/content";
import HeroPhoto from "@/components/HeroPhoto";
import { sectorPhotos } from "@/lib/images";
import MetadataRail from "@/components/MetadataRail";


export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return {
    title: `${sector.title} — Sector Observatory — SLR Centre`,
    description: sector.summary,
  };
}

export default async function SectorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const relatedAreas = areasForSector(sector.slug);
  const otherSectors = sectors.filter((s) => s.slug !== sector.slug);

  return (
    <main>
      <section className={`page-hero ${sectorPhotos[sector.slug] ? "page-hero-photo" : ""}`}>
        {sectorPhotos[sector.slug] && <HeroPhoto photo={sectorPhotos[sector.slug]} />}
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/sectors">Sectors</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{sector.title}</span>
          </div>
          <span className="eyebrow eyebrow-light" style={{ marginTop: "18px" }}>Priority Sector</span>
          <h1 className="page-hero-title">{sector.title}</h1>
          <p className="page-hero-lead">{sector.summary}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="profile-grid">
            <div>
              <div className="rail-block">
                <span className="rail-label">Key Issues Tracked</span>
                <div className="directory-issues">
                  {sector.keyIssues.map((issue) => (
                    <span className="issue-tag" key={issue}>{issue}</span>
                  ))}
                </div>
              </div>

              {relatedAreas.length > 0 && (
                <div className="rail-block sector-areas">
                  <span className="rail-label">Related Research</span>
                  <ul className="sector-area-list">
                    {relatedAreas.map((a) => (
                      <li key={a.slug}>
                        <Link href={`/research?area=${a.slug}`} className="sector-area-title">{a.title}</Link>
                        <p>{a.summary}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <MetadataRail
              blocks={[
                {
                  label: "Other Sectors",
                  links: otherSectors.map((s) => ({ href: `/sectors/${s.slug}`, label: s.title })),
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="stage-container">
          <Link href="/sectors" className="btn btn-outline-navy">← Back to Sector Observatory</Link>
        </div>
      </section>
    </main>
  );
}
