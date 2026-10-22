import Image from "next/image";
import Link from "next/link";
import InteractiveSectors from "@/components/InteractiveSectors";
import InteractiveAreas from "@/components/InteractiveAreas";
import CorridorGlobe from "@/components/CorridorGlobe";
import InsightMedia from "@/components/InsightMedia";
import SectionIndex from "@/components/SectionIndex";
import WhatWeDo from "@/components/WhatWeDo";
import { photos } from "@/lib/images";
import ScrollStatement from "@/components/ScrollStatement";
import PublicationsForthcoming from "@/components/PublicationsForthcoming";
import ConveningCalendar from "@/components/ConveningCalendar";
import { corridors, insights, centre, areasOfFocus, sectors, geographies } from "@/lib/content";

const featured = insights.find((i) => i.featured) ?? insights[0];
const latest = featured ? insights.filter((i) => i.slug !== featured.slug).slice(0, 2) : [];

const homeSections = [
  { id: "what-we-do", label: "What We Do" },
  { id: "areas-of-focus", label: "Research Agenda" },
  { id: "sectors", label: "Priority Sectors" },
  ...(featured ? [{ id: "featured", label: "Featured" }] : []),
  { id: "insights", label: featured ? "Latest Insights" : "Publications" },
  { id: "corridors", label: "Corridors" },
  { id: "events", label: "Events" },
  { id: "engage", label: "Engage" },
];

export default function Home() {
  const heroFacts = [
    { num: areasOfFocus.length, label: "Research domains" },
    { num: sectors.length, label: "Priority sectors" },
    { num: geographies.length, label: "Geographies" },
    { num: corridors.length, label: "Strategic corridors" },
  ];

  return (
    <main>
      {/* ============================================================
           SCENE 01 — HERO (navigation floats over this stage)
           ============================================================ */}
      <section className="hero-stage" id="hero">
        <div className="hero-bg-media">
          <Image src={photos.containerPort.src} alt="" fill preload sizes="100vw" />
        </div>
        <div className="hero-bg-overlay"></div>

        <div className="hero-body">
          <span className="eyebrow eyebrow-light hero-reveal hero-reveal-eyebrow">Centre for Global Law, Geoeconomics & Emerging Technologies</span>
          <h1 className="text-hero-display">Navigating the Forces Reshaping the World</h1>
          <p className="hero-lead-text hero-reveal hero-reveal-lead">Research, intelligence and strategic advisory at the nexus of law, geoeconomics and emerging technologies.</p>
          <div className="hero-buttons hero-reveal hero-reveal-buttons">
            <Link href="/research" className="btn btn-primary">Explore Our Research</Link>
            <Link href="/engage" className="btn btn-secondary">Engage the Centre</Link>
          </div>
        </div>

        <div className="hero-facts hero-reveal hero-reveal-facts">
          <div className="hero-facts-inner">
            {heroFacts.map((fact) => (
              <div className="hero-fact" key={fact.label}>
                <span className="hero-fact-num">{String(fact.num).padStart(2, "0")}</span>
                <span className="hero-fact-label">{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
           SCENE 02 — WHAT WE DO
           ============================================================ */}
      <WhatWeDo />

      {/* ============================================================
           SCENE 03 — STATEMENT
           ============================================================ */}
      <ScrollStatement eyebrow="The Centre" text={centre.statement.split(". ")[0] + "."} photo={photos.seaLink} />

      {/* ============================================================
           SCENE 04 — AREAS OF FOCUS
           ============================================================ */}
      <InteractiveAreas />

      {/* ============================================================
           SCENE 05 — PRIORITY SECTORS
           ============================================================ */}
      <InteractiveSectors />

      {/* ============================================================
           SCENE 06 — EDITORIAL FEATURE
           ============================================================ */}
      {featured && (
        <div className="stage-container section-featured-feature" id="featured">
          <div className="featured-split-card">
            <InsightMedia insight={featured} sizes="(max-width: 900px) 100vw, 55vw" className="featured-media-side reveal-media" />
            <div className="featured-editorial-side">
              <span className="featured-eyebrow-tag">{featured.category} · {featured.date}</span>
              <h2 className="featured-story-title">
                <Link href={`/insights/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p className="featured-story-excerpt">{featured.excerpt}</p>
              <div>
                <Link href={`/insights/${featured.slug}`} className="btn btn-secondary">Read {featured.category} →</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
           SCENE 07 — NEWSROOM
           ============================================================ */}
      <section className="section-newsroom" id="insights">
        <div className="stage-container">
          <div className={`newsroom-container ${featured ? "" : "newsroom-container-plain"}`}>
            <div className="newsroom-header">
              <div>
                <span className="eyebrow">Research & Intelligence</span>
                <h2 className="text-section-title" style={{ marginTop: "8px" }}>Insights &amp; Publications</h2>
              </div>
              <Link href="/insights" className="btn-ghost-gold">Insights &amp; Publications →</Link>
            </div>

            {!featured && <PublicationsForthcoming compact />}
            {latest.length > 0 && <div className="newsroom-asymmetric-grid">
              {latest.map((item, idx) => (
                <article className={idx === 0 ? "story-lead" : "story-secondary"} key={item.slug}>
                  <Link href={`/insights/${item.slug}`} tabIndex={-1} className="story-media-link">
                    <InsightMedia
                      insight={item}
                      sizes={idx === 0 ? "(max-width: 900px) 100vw, 45vw" : "(max-width: 900px) 100vw, 32vw"}
                      className={`${idx === 0 ? "story-lead-image" : "story-secondary-image"} reveal-media`}
                    />
                  </Link>
                  <div className="story-meta">
                    <span className="story-tag">{item.category}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className={`story-title ${idx === 0 ? "story-title-lead" : ""}`}>
                    <Link href={`/insights/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p className="story-excerpt">{item.excerpt}</p>
                  <div>
                    <Link href={`/insights/${item.slug}`} className="btn-ghost-gold" aria-label={`Read: ${item.title}`}>Read →</Link>
                  </div>
                </article>
              ))}
            </div>}
          </div>
        </div>
      </section>

      {/* ============================================================
           SCENE 08 — STRATEGIC CORRIDORS
           ============================================================ */}
      <div className="stage-container">
        <CorridorGlobe />
      </div>

      {/* ============================================================
           SCENE 09 — EVENTS CHRONOLOGY
           ============================================================ */}
      <div className="stage-container">
        <section className="section-events-stage" id="events">
          <div className="events-top-row">
            <div>
              <span className="eyebrow">Convening</span>
              <h2 className="text-section-title" style={{ marginTop: "8px" }}>Events &amp; Dialogues</h2>
            </div>
            <Link href="/events" className="btn-ghost-gold">Events &amp; Dialogues →</Link>
          </div>

          <ConveningCalendar />
        </section>
      </div>

      {/* ============================================================
           SCENE 10 — CTA BANNER
           ============================================================ */}
      <div className="stage-container">
        <section className="section-cta-stage section-cta-photo" id="engage">
          <div className="hero-photo" aria-hidden="true">
            <Image src={photos.boardroom.src} alt="" fill sizes="100vw" />
          </div>
          <div className="cta-stage-content">
            <span className="eyebrow eyebrow-light">Engage</span>
            <h2 className="text-hero-display" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>Commission Research. Attend a Dialogue. Request a Briefing.</h2>
            <p className="hero-lead-text">The Centre converts complex developments into precise, actionable intelligence for businesses, governments and institutional stakeholders.</p>
            <div style={{ marginTop: "8px" }}>
              <Link href="/engage" className="btn btn-primary">Engage the Centre</Link>
            </div>
          </div>
        </section>
      </div>

      <SectionIndex sections={homeSections} hideWhileVisible="hero" />
    </main>
  );
}
