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
