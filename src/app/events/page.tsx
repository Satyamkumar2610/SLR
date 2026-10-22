import type { Metadata } from "next";
import Link from "next/link";
import ConveningCalendar from "@/components/ConveningCalendar";
import { centre, upcomingEvents } from "@/lib/content";
import HeroPhoto from "@/components/HeroPhoto";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Events & Dialogues — SLR Centre",
  description: centre.convening,
};

// Re-render daily so events drop off the list once their date has passed.
export const revalidate = 86400;

export default function EventsPage() {
  const hasUpcoming = upcomingEvents().length > 0;

  return (
    <main>
      <section className="page-hero page-hero-photo">
        <HeroPhoto photo={photos.boardroom} />
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Events</span>
          </div>
          <span className="eyebrow eyebrow-light">Convening</span>
          <h1 className="page-hero-title">Events &amp; Dialogues</h1>
          <p className="page-hero-lead">{centre.convening}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="section-head-row">
            <div>
              <span className="eyebrow">Convening</span>
              <h2 className="text-section-title" style={{ marginTop: "8px" }}>{hasUpcoming ? "Upcoming Events" : "How the Centre convenes"}</h2>
            </div>
          </div>

          <ConveningCalendar />
        </div>
      </section>

      <section className="page-section-dark">
        <div className="stage-container" style={{ textAlign: "left" }}>
          <span className="eyebrow eyebrow-light">Engage</span>
          <h2 className="text-section-title" style={{ marginTop: "8px", color: "var(--color-white)" }}>
            Request an invitation or discuss a convening with the Centre.
          </h2>
          <div style={{ marginTop: "24px" }}>
            <Link href="/engage?enquiry=Roundtables%20%26%20Events" className="btn btn-primary">Engage the Centre</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
