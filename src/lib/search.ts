import { areasOfFocus, corridors, events, geographies, insights, offerings, sectors } from "@/lib/content";

export type SearchKind = "Page" | "Research" | "Sector" | "Geography" | "Corridor" | "Insight" | "Event" | "Capability";

export interface SearchEntry {
  kind: SearchKind;
  title: string;
  href: string;
  description: string;
  keywords?: string;
}

const pages: SearchEntry[] = [
  { kind: "Page", title: "Home", href: "/", description: "The SLR Centre for Global Law, Geoeconomics & Emerging Technologies." },
  { kind: "Page", title: "Research Portal", href: "/research", description: "The Centre's five areas of focus." },
  { kind: "Page", title: "Sector Observatory", href: "/sectors", description: "Seven priority sectors where the Centre applies its research." },
  { kind: "Page", title: "Geographies", href: "/geographies", description: "Regions the Centre monitors and advises on." },
  { kind: "Page", title: "Strategic Corridors", href: "/corridors", description: "Trade and connectivity corridors reshaping the world economy." },
  { kind: "Page", title: "Insights & Publications", href: "/insights", description: "Research reports, intelligence briefs and policy notes." },
  { kind: "Page", title: "Events & Dialogues", href: "/events", description: "Roundtables, conferences and closed-door dialogues." },
  { kind: "Page", title: "Capabilities", href: "/capabilities", description: "Research, intelligence and strategic advisory services." },
  { kind: "Page", title: "About the Centre", href: "/about", description: "Mandate, positioning and who the Centre engages with." },
  { kind: "Page", title: "Engage the Centre", href: "/engage", description: "Commission research, attend a dialogue or request a briefing.", keywords: "contact enquiry email get in touch" },
  { kind: "Page", title: "Privacy Policy", href: "/privacy", description: "How the Centre handles personal data." },
  { kind: "Page", title: "Terms of Use", href: "/terms", description: "Terms governing use of this website." },
];

export const searchIndex: SearchEntry[] = [
  ...pages,
  ...areasOfFocus.map((a) => ({ kind: "Research" as const, title: a.title, href: `/research?area=${a.slug}`, description: a.summary, keywords: a.keyIssues.join(" ") })),
  ...sectors.map((s) => ({ kind: "Sector" as const, title: s.title, href: `/sectors/${s.slug}`, description: s.summary, keywords: s.keyIssues.join(" ") })),
  ...geographies.map((g) => ({ kind: "Geography" as const, title: g.name, href: `/geographies/${g.slug}`, description: g.description, keywords: g.tag })),
  ...corridors.map((c) => ({ kind: "Corridor" as const, title: c.name, href: `/corridors#${c.slug}`, description: c.description, keywords: c.shortName })),
  ...insights.map((i) => ({ kind: "Insight" as const, title: i.title, href: `/insights/${i.slug}`, description: i.excerpt, keywords: i.category })),
  ...events.map((e) => ({ kind: "Event" as const, title: e.title, href: "/events", description: `${e.date} · ${e.venue}`, keywords: e.type })),
  ...offerings.map((o) => ({ kind: "Capability" as const, title: o.title, href: `/capabilities#${o.slug}`, description: o.description })),
];

const normalise = (s: string) => s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "");

const prepared = searchIndex.map((entry) => ({
  entry,
  title: normalise(entry.title),
  body: normalise(`${entry.kind} ${entry.description} ${entry.keywords ?? ""}`),
}));

export function search(query: string, limit = 12): SearchEntry[] {
  const terms = normalise(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  const scored: { entry: SearchEntry; score: number }[] = [];
  for (const item of prepared) {
    let score = 0;
    let matchedAll = true;
    for (const term of terms) {
      const inTitle = item.title.indexOf(term);
      if (inTitle === 0) score += 12;
      else if (inTitle > 0) score += item.title.includes(` ${term}`) ? 8 : 5;
      else if (item.body.includes(term)) score += 1;
      else {
        matchedAll = false;
        break;
      }
    }
    if (matchedAll) scored.push({ entry: item.entry, score: score - item.title.length / 200 });
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((s) => s.entry);
}

export const suggested: SearchEntry[] = [
  searchIndex.find((e) => e.href === "/research"),
  searchIndex.find((e) => e.kind === "Insight") ?? searchIndex.find((e) => e.href === "/sectors"),
  searchIndex.find((e) => e.href === "/corridors"),
  searchIndex.find((e) => e.href === "/engage"),
].filter((e) => e !== undefined);
