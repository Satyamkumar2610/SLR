import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights, getInsight, getArea, sectorsForArea } from "@/lib/content";
import MetadataRail from "@/components/MetadataRail";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return {
    title: `${insight.title} — SLR Centre`,
    description: insight.excerpt,
  };
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const area = getArea(insight.area);
  const relatedSectors = area ? sectorsForArea(area.slug) : [];
  const otherInsights = insights.filter((i) => i.slug !== insight.slug).slice(0, 4);

  return (
    <main>
      <article>
        <header className="article-hero">
          <div className="stage-container">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <Link href="/insights">Insights</Link>
              <span className="breadcrumb-sep">/</span>
              <span>{insight.category}</span>
            </div>
            <span className="article-category">{insight.category}</span>
            <h1 className="article-title">{insight.title}</h1>
            <p className="article-dek">{insight.excerpt}</p>
            <div className="article-byline">
              <span>{insight.date}</span>
              {area && (
                <>
                  <span>·</span>
                  <span>{area.title}</span>
                </>
              )}
            </div>
          </div>
        </header>

        <section className="page-section">
          <div className="stage-container">
            <div className="article-layout">
              <div className="article-body">
                <p>{insight.excerpt}</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontStyle: "italic", color: "var(--color-grey-muted)" }}>
                  This is a summary abstract. The full publication is in preparation and will be published
                  here when available.
                </p>
              </div>

              <MetadataRail
                blocks={[
                  {
                    label: "Related Research",
                    links: area ? [{ href: `/research?area=${area.slug}`, label: area.title }] : [],
                  },
                  {
                    label: "Related Sectors",
                    links: relatedSectors.map((s) => ({ href: `/sectors/${s.slug}`, label: s.title })),
                  },
                  {
                    label: "More Insights",
                    links: otherInsights.map((i) => ({ href: `/insights/${i.slug}`, label: i.title })),
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="page-section" style={{ paddingTop: 0 }}>
          <div className="stage-container">
            <Link href="/insights" className="btn-outline-navy">← Back to Insights &amp; Publications</Link>
          </div>
        </section>
      </article>
    </main>
  );
}
