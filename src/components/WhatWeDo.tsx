import Link from "next/link";
import { pillars, whatWeDoIntro } from "@/lib/content";

// Copy is taken from the Centre Profile ("What We Do" and "Our Offerings")
// and the design brief's three-pillar strip. The full scope lists for each
// pillar live on /capabilities, so the home page keeps to one line each.
export default function WhatWeDo() {
  return (
    <section className="section-wwd" id="what-we-do">
      <div className="stage-container">
        <header className="wwd-head">
          <div>
            <span className="eyebrow">What We Do</span>
            <h2 className="text-section-title wwd-title">Three modes of engagement</h2>
          </div>
          <p className="wwd-lead">
            {whatWeDoIntro}
          </p>
        </header>

        <div className="wwd-pillars">
          {pillars.map((pillar) => (
            <article className="wwd-pillar" key={pillar.slug} id={pillar.slug} aria-labelledby={`wwd-${pillar.slug}-title`}>
              <div className="wwd-pillar-top">
                <PillarIcon slug={pillar.slug} />
                <span className="wwd-pillar-num">{pillar.num}</span>
              </div>

              <div className="wwd-pillar-heading">
                <h3 className="wwd-pillar-title" id={`wwd-${pillar.slug}-title`}>{pillar.title}</h3>
              </div>

              <p className="wwd-pillar-intro">{pillar.intro}</p>

              <Link href={`/capabilities#${pillar.slug}`} className="wwd-pillar-link" aria-label={`Learn more about ${pillar.title}`}>
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarIcon({ slug }: { slug: string }) {
  const common = {
    className: "wwd-pillar-icon",
    viewBox: "0 0 40 40",
    width: 40,
    height: 40,
    fill: "none",
    "aria-hidden": true,
  } as const;

  if (slug === "research") {
    return (
      <svg {...common}>
        <path d="M9 6h15l7 7v21H9z" />
        <path d="M24 6v7h7" />
        <path d="M14 19h12M14 24h12M14 29h7" />
      </svg>
    );
  }
  if (slug === "intelligence") {
    return (
      <svg {...common}>
        <circle cx="20" cy="20" r="14" />
        <circle cx="20" cy="20" r="8" />
        <path d="M20 20L30 10" />
        <circle cx="20" cy="20" r="1.8" className="wwd-pillar-icon-fill" />
        <circle cx="27" cy="23" r="1.6" className="wwd-pillar-icon-fill" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="20" cy="20" r="14" />
      <path d="M24.5 15.5L22 22l-6.5 2.5L18 18z" />
      <path d="M20 4v3M20 33v3M4 20h3M33 20h3" />
    </svg>
  );
}
