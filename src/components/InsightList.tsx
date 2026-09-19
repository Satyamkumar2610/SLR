import Link from "next/link";
import type { Insight } from "@/lib/content";

/**
 * Editorial publication-index rows — date, category, title, excerpt,
 * read link, horizontal rule. Used on the Insights hub and reused for
 * the homepage "Latest Intelligence" feed. Never rendered as cards.
 */
export default function InsightList({ items }: { items: Insight[] }) {
  if (items.length === 0) {
    return <div className="directory-empty">No items match this filter yet.</div>;
  }

  return (
    <div className="pub-list">
      {items.map((item) => (
        <article className="pub-row" key={item.slug}>
          <div className="pub-meta-col">
            <span className="pub-category">{item.category}</span>
            <span className="pub-date">{item.date}</span>
          </div>
          <div>
            <Link href={`/insights/${item.slug}`}>
              <h3 className="pub-title">{item.title}</h3>
            </Link>
            <p className="pub-excerpt">{item.excerpt}</p>
            <Link href={`/insights/${item.slug}`} className="pub-read">Read →</Link>
          </div>
        </article>
      ))}
    </div>
  );
}
