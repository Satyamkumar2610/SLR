import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events & Dialogues — SLR Centre",
  description: "Invitation-only roundtables, strategic dialogues, and convenings that bring together senior leaders from business, government, and academia.",
};

export default function EventsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Events</span>
          </div>
          <span className="eyebrow eyebrow-light">Events &amp; Dialogues</span>
          <h1 className="page-hero-title">Dialogues that drive decisions</h1>
          <p className="page-hero-lead">
            Invitation-only roundtables, strategic dialogues, and convenings that bring together senior
            leaders from business, government, and academia.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="section-head-row">
            <div>
              <span className="eyebrow">Convening Authority</span>
              <h2 className="text-section-title" style={{ marginTop: "8px" }}>Upcoming Events</h2>
            </div>
          </div>

          <div className="events-chronology-list">
            {events.map((event, idx) => (
              <div className="event-chronology-row" key={event.slug}>
                <div>
                  <span className={`event-badge-pill ${idx % 2 === 0 ? "pill-burgundy" : "pill-slate"}`}>{event.type}</span>
                  <div className="event-date-display">{event.date}</div>
                </div>
                <div>
                  <h3 className="event-headline-text">{event.title}</h3>
                  <span className="event-venue-meta">{event.venue}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <Link href="/engage" className="btn btn-outline-navy">Request Invitation</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section-dark">
        <div className="stage-container" style={{ textAlign: "left" }}>
          <span className="eyebrow eyebrow-light">Host a Convening</span>
          <h2 className="text-section-title" style={{ marginTop: "8px", color: "var(--color-white)" }}>
            Host a private roundtable or commission a convening
          </h2>
          <p className="text-lead" style={{ marginTop: "14px", color: "rgba(255,255,255,0.72)" }}>
            The Centre designs and hosts bespoke dialogues for organisations navigating complex geoeconomic
            challenges.
          </p>
          <div style={{ marginTop: "24px" }}>
            <Link href="/engage" className="btn btn-primary">Enquire</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
