import type { Metadata } from "next";
import Link from "next/link";
import ConveningCalendar from "@/components/ConveningCalendar";
import { upcomingEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events & Dialogues — SLR Centre",
  description: "Invitation-only roundtables, strategic dialogues, and convenings that bring together senior leaders from business, government, and academia.",
};

// Re-render daily so events drop off the list once their date has passed.
export const revalidate = 86400;

export default function EventsPage() {
  const hasUpcoming = upcomingEvents().length > 0;

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
              <h2 className="text-section-title" style={{ marginTop: "8px" }}>{hasUpcoming ? "Upcoming Events" : "How the Centre convenes"}</h2>
            </div>
          </div>

          <ConveningCalendar />
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
