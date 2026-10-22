import Link from "next/link";
import { offerings, upcomingEvents } from "@/lib/content";

const CONVENING_FORMATS = ["roundtables-dialogues", "executive-briefings", "knowledge-platforms"];

const firstSentence = (text: string) => text.split(/(?<=\.)\s/)[0];

/**
 * Upcoming events when any are scheduled; otherwise the Centre's
 * convening formats (from the Centre Profile) with an invitation CTA.
 */
export default function ConveningCalendar() {
  const upcoming = upcomingEvents();

  if (upcoming.length > 0) {
    return (
      <div className="events-chronology-list">
        {upcoming.map((event, idx) => (
          <div className="event-chronology-row" key={event.slug}>
            <div>
              <span className={`event-badge-pill ${idx % 2 === 0 ? "pill-burgundy" : "pill-slate"}`}>{event.type}</span>
              <time className="event-date-display" dateTime={event.isoDate}>{event.date}</time>
            </div>
            <div>
              <h3 className="event-headline-text">{event.title}</h3>
              <span className="event-venue-meta">{event.venue}</span>
            </div>
            <div className="event-row-action">
              <Link href="/engage?enquiry=Roundtables%20%26%20Events" className="btn btn-outline-navy">Request Invitation</Link>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const formats = CONVENING_FORMATS.map((slug) => offerings.find((o) => o.slug === slug)).filter((o) => o !== undefined);

  return (
    <div className="convening-empty">
      <div className="convening-format-grid">
        {formats.map((o) => (
          <Link href={`/capabilities#${o.slug}`} className="convening-format" key={o.slug}>
            <h3 className="convening-format-title">{o.title}</h3>
            <p className="convening-format-desc">{firstSentence(o.description)}</p>
            <span className="convening-format-link">Learn more <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </div>
      <div className="convening-note">
        <p>
          The Centre&apos;s convenings are held by invitation. Upcoming dates are announced here and shared directly
          with registered participants.
        </p>
        <Link href="/engage?enquiry=Roundtables%20%26%20Events" className="btn btn-outline-navy">Request an Invitation</Link>
      </div>
    </div>
  );
}
