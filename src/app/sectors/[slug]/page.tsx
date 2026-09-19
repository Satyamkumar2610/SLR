import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sectors, getSector, areasForSector } from "@/lib/content";
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
      <section className="page-hero">
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/sectors">Sectors</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{sector.title}</span>
          </div>
          <span className="profile-tag" style={{ marginTop: "18px" }}>
            <span className="profile-tag-dot" style={{ backgroundColor: `var(--${sector.color})` }} />
            Sector {sector.num} of {sectors.length}
          </span>
          <h1 className="page-hero-title">{sector.title}</h1>
          <p className="page-hero-lead">{sector.summary}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="profile-grid">
            <div>
              <div className="profile-body">
                <p>{sector.description}</p>
              </div>

              <div className="rail-block" style={{ marginTop: "var(--s8)" }}>
                <span className="rail-label">Key Issues Tracked</span>
                <div className="directory-issues">
                  {sector.keyIssues.map((issue) => (
                    <span className="issue-tag" key={issue}>{issue}</span>
                  ))}
                </div>
              </div>
            </div>

            <MetadataRail
              blocks={[
                {
                  label: "Related Research",
                  links: relatedAreas.map((a) => ({ href: `/research?area=${a.slug}`, label: `${a.num} ${a.title}` })),
                },
                {
                  label: "Other Sectors",
                  links: otherSectors.slice(0, 5).map((s) => ({ href: `/sectors/${s.slug}`, label: s.title })),
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="stage-container">
          <Link href="/sectors" className="btn-outline-navy">← Back to Sector Observatory</Link>
        </div>
      </section>
    </main>
  );
}
