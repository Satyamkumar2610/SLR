/**
 * SLR CENTRE — CONTENT DATA LAYER
 * ============================================================
 * Single source of truth for all institutional content on the site.
 *
 * SOURCE OF TRUTH: "SLR Centre for Global Law, Geoeconomics & Emerging
 * Technologies — Centre Profile" (supplied PDF) and the previous
 * site's editorial copy (the former static build, retired from the repo). Nothing in this file that is
 * presented as institutional fact (areas of focus, sectors, offerings,
 * geographies, corridors, who-we-engage) has been invented — it is
 * transcribed or lightly restructured (e.g. into "key issues tracked"
 * lists) from those source documents.
 *
 * The INSIGHTS and EVENTS arrays start empty: the source documents
 * contain no published articles or scheduled events, and the site no
 * longer ships invented samples. Every page that lists them renders a
 * "forthcoming" state while they are empty, and switches to the full
 * listing as soon as real entries are added below.
 */

// ----------------------------------------------------------------
// CENTRE PROFILE
// ----------------------------------------------------------------

export const centre = {
  name: "SLR Centre for Global Law, Geoeconomics & Emerging Technologies",
  shortName: "SLR Centre",
  parent: "SLR Advocates & Solicitors",
  motto: "Let justice be done though the heavens fall",
  statement:
    "The Centre rigorously examines the profound transformations underway in global power structures, regulatory frameworks, capital flows, energy systems and technological innovation, assessing their impact on markets, institutions and the international order. It converts these complex developments into precise, actionable intelligence for businesses, governments and institutional stakeholders.",
  convening:
    "By convening distinguished leaders, subject-matter experts, policymakers and industry principals, the Centre fosters high-level dialogue, generates practical insights and identifies strategic opportunities for collaboration.",
  positioning:
    "Situated at the nexus of law, geoeconomics, and emerging technologies, the Centre analyses how evolving configurations of power, capital, trade, energy, regulation, and technology are reshaping economies, industries, and institutions worldwide. By integrating multidisciplinary research and applied intelligence, it equips businesses, governments, investors, and institutions to anticipate emerging risks, discern opportunities, and navigate an increasingly intricate global landscape with clarity and confidence.",
  anchor: "India & South Asia",
};

// ----------------------------------------------------------------
// AREAS OF FOCUS / RESEARCH WINGS (5)
// ----------------------------------------------------------------

export interface AreaOfFocus {
  num: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  keyIssues: string[];
  relatedSectors: string[]; // sector slugs
}

export const areasOfFocus: AreaOfFocus[] = [
  {
    num: "01",
    slug: "global-law",
    title: "Global Law & Cross-Border Regulation",
    summary:
      "The evolving legal and regulatory architecture that governs international commerce, investment, technology, sanctions, and cross-border transactions across fragmented jurisdictions.",
    description:
      "The Centre analyses the evolving legal and regulatory architecture that governs international commerce, investment, technology and cross-border activity. Its work encompasses international economic law, trade and investment regimes, sanctions and economic restrictive measures, digital regulation, cross-border transactions, comparative regulatory approaches and emerging frameworks. Through this lens, the Centre assesses how regulatory shifts reshape international markets and equips businesses to navigate an increasingly complex and fragmented jurisdictional landscape. The Centre tracks how diverging regulatory regimes, sanctions architectures, and cross-border enforcement mechanisms are reshaping the legal frameworks within which businesses and states operate.",
    keyIssues: [
      "International economic law",
      "Trade & investment regimes",
      "Sanctions & economic restrictive measures",
      "Digital regulation",
      "Comparative regulatory approaches",
      "Cross-border enforcement mechanisms",
    ],
    relatedSectors: ["pharma", "technology-ai", "financial-services"],
  },
  {
    num: "02",
    slug: "geoeconomics",
    title: "Geoeconomics & Strategic Affairs",
    summary:
      "The strategic deployment of trade, investment, finance, technology, resources, and economic policy as instruments of statecraft, economic security, and international influence.",
    description:
      "Economic and geopolitical power are ever more tightly interwoven. The Centre examines the strategic deployment of trade, investment, finance, technology, resources and economic policy as instruments of statecraft and international influence. Research focuses on global power realignments, economic security, strategic autonomy, the roles of BRICS+, the G20, the Indo-Pacific and the Global South, supply-chain resilience, and the transforming architecture of international cooperation. The Centre analyses how major powers use economic tools to project influence, secure strategic advantages, and reshape the international order.",
    keyIssues: [
      "Global power realignments",
      "Economic security & strategic autonomy",
      "BRICS+, G20 & the Global South",
      "Supply-chain resilience",
      "Architecture of international cooperation",
    ],
    relatedSectors: ["defence", "infrastructure", "semiconductors"],
  },
  {
    num: "03",
    slug: "global-finance",
    title: "Global Finance & Investment",
    summary:
      "The global financial architecture, sovereign and institutional capital flows, economic restrictions, and the deepening nexus between capital allocation and geopolitical risk.",
    description:
      "Capital allocation is increasingly shaped by geopolitical risk, regulatory evolution and strategic competition. The Centre investigates the global financial architecture, investment flows, sovereign and institutional finance, development finance, economic restrictions, investment risk and the deepening nexus between finance and geopolitics. Its work illuminates how shifts in global capital influence markets, corporate strategy and investment decision-making. The Centre examines how investment patterns, financial sanctions, and capital controls are redefining the relationship between markets and geopolitics.",
    keyIssues: [
      "Global financial architecture",
      "Sovereign & institutional finance",
      "Development finance",
      "Investment risk",
      "Finance-geopolitics nexus",
    ],
    relatedSectors: ["financial-services", "infrastructure"],
  },
  {
    num: "04",
    slug: "energy",
    title: "Energy & Energy Transitions",
    summary:
      "Energy security, global markets, critical minerals, transition finance, and the reconfiguration of global energy systems impacting industrial competitiveness.",
    description:
      "Energy has become a central determinant of economic performance, security, industrial competitiveness and geopolitical leverage. The Centre examines energy security, energy markets, critical minerals, energy transitions, climate-related regulation, transition finance and the reconfiguration of the global energy system. Research explores how evolving energy landscapes affect industrial competitiveness, supply chains, investment patterns and international relations. The Centre analyses how energy transition pathways, critical mineral dependencies, and shifting energy geographies create both risks and opportunities for states and industries.",
    keyIssues: [
      "Energy security & energy markets",
      "Critical minerals",
      "Climate-related regulation",
      "Transition finance",
      "Reconfiguration of the global energy system",
    ],
    relatedSectors: ["energy-climate"],
  },
  {
    num: "05",
    slug: "emerging-technologies",
    title: "Emerging Technologies & Governance",
    summary:
      "Artificial intelligence, semiconductors, digital economies, autonomous systems, cyber policy, technology governance, and nascent cross-border regulatory frameworks.",
    description:
      "Technology has emerged as a defining force in economic competitiveness and strategic power. The Centre analyses artificial intelligence, frontier technologies, digital economies, semiconductors, autonomous systems, cyber policy, technology governance and nascent regulatory frameworks. Beyond technological development itself, the Centre studies the broader implications of technological convergence for markets, institutions, security and the future of global governance. The Centre tracks how technology competition, governance gaps, and emerging regulatory paradigms are reshaping industries and international relations.",
    keyIssues: [
      "Artificial intelligence & frontier technologies",
      "Digital economies",
      "Semiconductors & autonomous systems",
      "Cyber policy",
      "Technology governance frameworks",
    ],
    relatedSectors: ["technology-ai", "semiconductors"],
  },
];

// ----------------------------------------------------------------
// PRIORITY SECTORS (7)
// ----------------------------------------------------------------

// Priority-sector framing and summaries are transcribed from the Centre
// Profile; key issues are the summary's own items, listed individually.
export const sectorsIntro =
  "The Centre applies its research to priority sectors in which geopolitical, regulatory, technological and economic forces increasingly converge and interact.";

export interface Sector {
  num: string;
  slug: string;
  title: string;
  summary: string;
  keyIssues: string[];
  color: string; // css variable name, no var()
  relatedAreas: string[]; // area slugs
}

export const sectors: Sector[] = [
  {
    num: "01",
    slug: "defence",
    title: "Defence & Homeland Security",
    summary:
      "Strategic technologies, defence regulation, security frameworks and the foundations of economic resilience.",
    keyIssues: [
      "Strategic technologies",
      "Defence regulation",
      "Security frameworks",
      "Economic resilience",
    ],
    color: "color-navy",
    relatedAreas: ["geoeconomics", "global-law"],
  },
  {
    num: "02",
    slug: "pharma",
    title: "Pharmaceuticals & Healthcare",
    summary:
      "Global health security, pharmaceutical regulation, supply-chain integrity, innovation pathways and market access.",
    keyIssues: [
      "Global health security",
      "Pharmaceutical regulation",
      "Supply-chain integrity",
      "Innovation pathways",
      "Market access",
    ],
    color: "color-burgundy",
    relatedAreas: ["global-law", "global-finance"],
  },
  {
    num: "03",
    slug: "energy-climate",
    title: "Energy & Climate",
    summary:
      "Energy security, transition pathways, critical minerals, infrastructure development and climate-related investment.",
    keyIssues: [
      "Energy security",
      "Transition pathways",
      "Critical minerals",
      "Infrastructure development",
      "Climate-related investment",
    ],
    color: "color-forest",
    relatedAreas: ["energy", "geoeconomics"],
  },
  {
    num: "04",
    slug: "technology-ai",
    title: "Technology & AI",
    summary:
      "AI governance, digital regulation, semiconductors, cyber policy and the broader landscape of emerging technologies.",
    keyIssues: [
      "AI governance",
      "Digital regulation",
      "Semiconductors",
      "Cyber policy",
      "Emerging technologies",
    ],
    color: "color-gold",
    relatedAreas: ["emerging-technologies", "global-law"],
  },
  {
    num: "05",
    slug: "financial-services",
    title: "Financial Services",
    summary:
      "Global financial architecture, investment flows, fintech innovation, regulatory evolution and the geopolitics of finance.",
    keyIssues: [
      "Global financial architecture",
      "Investment flows",
      "Fintech innovation",
      "Regulatory evolution",
      "Geopolitics of finance",
    ],
    color: "color-slate",
    relatedAreas: ["global-finance", "geoeconomics"],
  },
  {
    num: "06",
    slug: "infrastructure",
    title: "Infrastructure & Connectivity",
    summary:
      "Trade corridors, logistics networks, digital infrastructure, investment frameworks and regional connectivity.",
    keyIssues: [
      "Trade corridors",
      "Logistics networks",
      "Digital infrastructure",
      "Investment frameworks",
      "Regional connectivity",
    ],
    color: "color-charcoal",
    relatedAreas: ["geoeconomics", "global-finance"],
  },
  {
    num: "07",
    slug: "semiconductors",
    title: "Electronics & Semiconductors",
    summary:
      "Technology supply chains, industrial policy, investment dynamics and strategic dependencies.",
    keyIssues: [
      "Technology supply chains",
      "Industrial policy",
      "Investment dynamics",
      "Strategic dependencies",
    ],
    color: "color-navy",
    relatedAreas: ["emerging-technologies", "geoeconomics"],
  },
];

// ----------------------------------------------------------------
// GEOGRAPHIES (8 regions)
// ----------------------------------------------------------------

export interface Geography {
  slug: string;
  name: string;
  isAnchor?: boolean;
  tag: string;
  description: string;
}

export const geographies: Geography[] = [
  {
    slug: "india-south-asia",
    name: "India & South Asia",
    isAnchor: true,
    tag: "Principal Geographic Anchor",
    description:
      "India constitutes the Centre's principal geographic anchor. Research examines India's evolving role in global trade, investment, technology, energy, defence, pharmaceuticals and critical supply chains, together with its relationships with South Asian neighbours and major global partners. Analysis considers India's position as a market, manufacturing base, investment destination and emerging node within global value chains.",
  },
  {
    slug: "indo-pacific",
    name: "Indo-Pacific & East Asia",
    tag: "Strategic Theatre",
    description:
      "The Indo-Pacific remains a core area of focus given its centrality to global trade, maritime connectivity, technology, manufacturing and strategic competition. Coverage encompasses China, Japan, South Korea, Taiwan, the ASEAN economies, Australia and key Indo-Pacific partnerships, with particular attention to semiconductors, electronics, critical minerals, advanced manufacturing, maritime trade, technology ecosystems and China+1 strategies.",
  },
  {
    slug: "asean",
    name: "ASEAN & Southeast Asia",
    tag: "Emerging Manufacturing Hub",
    description:
      "SLR Global tracks Southeast Asia as an increasingly significant destination for investment, manufacturing diversification and supply-chain restructuring. Research examines Singapore, Indonesia, Vietnam, Malaysia, Thailand, the Philippines and other ASEAN markets, including their roles in electronics, semiconductors, energy, logistics, digital infrastructure and emerging manufacturing networks.",
  },
  {
    slug: "middle-east",
    name: "Middle East & Gulf",
    tag: "Capital & Energy Nexus",
    description:
      "The Gulf and wider Middle East are analysed as rising centres of capital, energy, logistics, infrastructure, technology and sovereign investment. Coverage includes the GCC economies and their expanding economic relationships with India, Asia, Europe and Africa, with particular attention to energy security, sovereign wealth, infrastructure, technology investment, trade corridors and new economic partnerships.",
  },
  {
    slug: "europe",
    name: "Europe & Eurasia",
    tag: "Regulatory & Security Landscape",
    description:
      "SLR Global monitors Europe and Eurasia through the interconnected lenses of regulation, trade, energy security, finance, technology and geopolitical risk. Coverage spans the European Union, the United Kingdom and key Eurasian markets, with attention to sanctions and economic restrictions, industrial policy, energy diversification, strategic technologies, investment regulation and evolving trade relationships.",
  },
  {
    slug: "north-america",
    name: "North America",
    tag: "Technology & Security Partner",
    description:
      "The United States and Canada are examined as major centres of global finance, technology, investment, defence, innovation and regulatory influence. Research focuses on developments affecting international businesses and supply chains, including technology controls, investment screening, economic security, industrial policy, critical technologies, energy and strategic trade.",
  },
  {
    slug: "africa",
    name: "Africa",
    tag: "Critical Resources & Growth",
    description:
      "Africa is analysed through the lenses of resources, infrastructure, energy, critical minerals, emerging markets and new trade and investment relationships. Particular attention is given to countries and corridors relevant to India's economic engagement, global resource security, manufacturing diversification, infrastructure development and South–South cooperation.",
  },
  {
    slug: "latin-america",
    name: "Latin America & the Caribbean",
    tag: "Resource & Trade Dynamics",
    description:
      "SLR Global monitors Latin America and the Caribbean as emerging strategic partners in critical minerals, energy, agriculture, infrastructure, manufacturing and global trade. Research considers the region's evolving relationships with India, China, the United States, Europe and other major economic centres.",
  },
];

export const whatWeDoIntro =
  "The Centre develops research, intelligence and strategic engagement offerings designed to help organisations understand and respond to a rapidly changing global environment.";

export const geographiesIntro =
  "SLR Global adopts a global, cross-border perspective, with particular emphasis on the regions and economic corridors that are reshaping trade, investment, technology, energy security and the evolving international order.";

export const corridorsIntro =
  "The Centre also examines the strategic importance of major trade, investment, energy and connectivity corridors.";

export const stakeholdersIntro =
  "SLR Global works across the public and private sectors, engaging a diverse range of stakeholders whose decisions shape, and are shaped by, the evolving global environment.";

export const supplyChainsIntro =
  "Geographic research is complemented by a supply-chain and strategic-corridor perspective. The Centre examines how geopolitical competition, regulation, investment patterns, infrastructure and technological change are reorganising the movement of goods, capital, energy, data and critical technologies across borders.";

// ----------------------------------------------------------------
// STRATEGIC CORRIDORS (7)
// ----------------------------------------------------------------

export interface Corridor {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  geographies: string[]; // geography slugs, derived from the corridor's own name/description
}

export const corridors: Corridor[] = [
  {
    slug: "imec",
    name: "India–Middle East–Europe",
    shortName: "IMEC",
    description:
      "Trade, logistics, energy, investment and connectivity linking India with the Gulf and Europe.",
    geographies: ["india-south-asia", "middle-east", "europe"],
  },
  {
    slug: "india-indo-pacific",
    name: "India–Indo-Pacific",
    shortName: "India–Indo-Pacific",
    description:
      "Manufacturing, technology, maritime connectivity, investment and supply-chain diversification across India and East/Southeast Asia.",
    geographies: ["india-south-asia", "indo-pacific", "asean"],
  },
  {
    slug: "china-plus-one",
    name: "China+1 Supply-Chain Networks",
    shortName: "China+1",
    description:
      "The relocation and diversification of manufacturing and sourcing away from concentrated dependence on China, particularly across India, ASEAN and other emerging manufacturing centres.",
    geographies: ["india-south-asia", "asean", "indo-pacific"],
  },
  {
    slug: "gulf-india-asia",
    name: "Gulf–India–Asia Energy & Investment Corridor",
    shortName: "Gulf–India–Asia",
    description:
      "The movement of energy, capital, infrastructure investment and strategic partnerships between the Gulf, India and wider Asia.",
    geographies: ["middle-east", "india-south-asia", "indo-pacific"],
  },
  {
    slug: "europe-eurasia-asia",
    name: "Europe–Eurasia–Asia Connectivity",
    shortName: "Europe–Eurasia–Asia",
    description:
      "Trade, energy, infrastructure and economic-security developments connecting European and Asian markets.",
    geographies: ["europe", "indo-pacific", "asean"],
  },
  {
    slug: "africa-middle-east-india",
    name: "Africa–Middle East–India Corridor",
    shortName: "Africa–Middle East–India",
    description:
      "Emerging connections involving resources, critical minerals, energy, infrastructure, logistics, manufacturing and investment.",
    geographies: ["africa", "middle-east", "india-south-asia"],
  },
  {
    slug: "americas-europe-indo-pacific",
    name: "Americas–Europe–Indo-Pacific Strategic Supply Chains",
    shortName: "Americas–Europe–Indo-Pacific",
    description:
      "The increasingly interconnected networks surrounding semiconductors, critical minerals, energy and advanced technology.",
    geographies: ["north-america", "europe", "indo-pacific"],
  },
];

// ----------------------------------------------------------------
// WHAT WE DO — THREE PILLARS
// ----------------------------------------------------------------

export interface Pillar {
  num: string;
  slug: string;
  title: string;
  description: string;
  /** Structured breakdown of `description`, used for the scannable home-page layout. */
  intro: string;
  itemsLabel: string;
  items: string[];
  closing?: string;
}

export const pillars: Pillar[] = [
  {
    num: "01",
    slug: "research",
    title: "Research",
    description:
      "The Centre produces rigorous, evidence-based research that illuminates emerging global trends and their strategic implications. Its research portfolio encompasses flagship reports, global outlooks, policy papers, working papers, country studies, sector studies, comparative regulatory analysis, thematic inquiries and strategic briefs.",
    intro: "The Centre produces rigorous, evidence-based research that illuminates emerging global trends and their strategic implications.",
    itemsLabel: "The research portfolio",
    items: ["Flagship reports", "Global outlooks", "Policy papers", "Working papers", "Country studies", "Sector studies", "Comparative regulatory analysis", "Thematic inquiries", "Strategic briefs"],
  },
  {
    num: "02",
    slug: "intelligence",
    title: "Intelligence",
    description:
      "The Centre translates complex global developments into focused, decision-relevant intelligence. This work spans geopolitical intelligence, geoeconomic monitoring, regulatory intelligence, country risk assessment, market and sector intelligence, investment intelligence, emerging technology intelligence and strategic risk monitoring. The objective is to enable organisations to identify what is changing, understand why it matters, and anticipate where the consequences are most likely to materialise.",
    intro: "The Centre translates complex global developments into focused, decision-relevant intelligence.",
    itemsLabel: "This work spans",
    items: ["Geopolitical intelligence", "Geoeconomic monitoring", "Regulatory intelligence", "Country risk assessment", "Market and sector intelligence", "Investment intelligence", "Emerging technology intelligence", "Strategic risk monitoring"],
    closing: "The objective is to enable organisations to identify what is changing, understand why it matters, and anticipate where the consequences are most likely to materialise.",
  },
  {
    num: "03",
    slug: "advisory",
    title: "Strategic Advisory",
    description:
      "The Centre supports organisations navigating complex and rapidly evolving international environments. Its advisory services include market-entry intelligence, geopolitical risk assessment, international expansion strategy, regulatory strategy, scenario planning, investment risk evaluation, policy strategy, stakeholder mapping, strategic foresight and cross-border intelligence. By integrating deep research with applied strategic analysis, the Centre equips decision-makers with the clarity required for better-informed choices.",
    intro: "The Centre supports organisations navigating complex and rapidly evolving international environments.",
    itemsLabel: "Advisory services include",
    items: ["Market-entry intelligence", "Geopolitical risk assessment", "International expansion strategy", "Regulatory strategy", "Scenario planning", "Investment risk evaluation", "Policy strategy", "Stakeholder mapping", "Strategic foresight", "Cross-border intelligence"],
    closing: "By integrating deep research with applied strategic analysis, the Centre equips decision-makers with the clarity required for better-informed choices.",
  },
];

// ----------------------------------------------------------------
// OFFERINGS / CAPABILITIES (11)
// ----------------------------------------------------------------

export interface Offering {
  num: string;
  slug: string;
  title: string;
  pillar: string; // pillar slug
  description: string;
}

export const offerings: Offering[] = [
  {
    num: "01",
    slug: "research-strategic-intelligence",
    title: "Research & Strategic Intelligence",
    pillar: "research",
    description:
      "The Centre produces rigorous, decision-oriented research on the developments shaping global markets, institutions and the international order. Its research spans geopolitical and geoeconomic trends, cross-border regulation, international law, global finance and investment, energy security and transition, emerging technologies and AI governance. Through thematic studies, country and sector assessments, policy papers, outlooks and intelligence briefs, the Centre translates complex developments into clear strategic insights.",
  },
  {
    num: "02",
    slug: "geopolitical-regulatory-intelligence",
    title: "Geopolitical & Regulatory Intelligence",
    pillar: "intelligence",
    description:
      "SLR Global monitors developments across jurisdictions to identify regulatory, geopolitical and economic shifts that may affect organisations, markets and investments. This intelligence work encompasses country and sector monitoring, regulatory developments, sanctions and economic restrictions, trade and investment measures, technology regulation, energy policy and other developments relevant to cross-border operations. The objective is to enable decision-makers to identify emerging risks and opportunities before they crystallise into operational challenges.",
  },
  {
    num: "03",
    slug: "executive-briefings",
    title: "Executive & C-Suite Briefings",
    pillar: "intelligence",
    description:
      "The Centre provides confidential briefings for CEOs, boards, senior executives and leadership teams on issues with material geopolitical, regulatory, economic or technological implications. These briefings are tailored to the organisation's strategic priorities and may address geopolitical developments, market-entry considerations, regulatory shifts, international relations, economic security, emerging technologies or sector-specific risks. Rather than simply conveying information, the briefings focus on what has changed, why it matters and what decision-makers should consider next.",
  },
  {
    num: "04",
    slug: "executive-preparation",
    title: "Executive Preparation & Strategic Decision Support",
    pillar: "advisory",
    description:
      "SLR Global supports senior leaders preparing for consequential meetings, negotiations, international engagements, government interactions, investor discussions, diplomatic engagements and high-stakes strategic decisions. Support may include geopolitical and regulatory background notes, stakeholder profiles, country assessments, talking points, briefing books, anticipated questions, scenario analysis and decision frameworks. The objective is to ensure that executives enter critical engagements with the relevant context, risks, opportunities and strategic considerations clearly mapped.",
  },
  {
    num: "05",
    slug: "roundtables-dialogues",
    title: "Closed-Door Roundtables & Strategic Dialogues",
    pillar: "advisory",
    description:
      "The Centre convenes carefully curated roundtables that bring together policymakers, diplomats, business leaders, investors, academics, legal experts, technology leaders and other subject-matter specialists. These engagements are designed to facilitate candid discussion on emerging issues that require cross-sector and cross-border perspectives. Where appropriate, roundtables may be conducted under the Chatham House Rule, enabling participants to use the information received while protecting the identity and institutional affiliation of the speaker. This format encourages frank exchange, surfaces diverse perspectives and develops practical understanding of complex issues.",
  },
  {
    num: "06",
    slug: "policy-stakeholder-engagement",
    title: "Policy & Stakeholder Engagement",
    pillar: "advisory",
    description:
      "SLR Global helps organisations understand and navigate the wider policy ecosystem surrounding their sectors and markets. Its work may include stakeholder mapping, policy landscape assessments, institutional analysis and preparation for engagements with governments, regulators, industry associations, diplomatic missions, international organisations and other relevant stakeholders. By integrating policy, regulatory, geopolitical and legal perspectives, the Centre enables organisations to approach institutional engagement with greater clarity and strategic preparedness.",
  },
  {
    num: "07",
    slug: "market-entry-intelligence",
    title: "Market Entry & International Expansion Intelligence",
    pillar: "advisory",
    description:
      "For organisations entering new jurisdictions or expanding internationally, the Centre provides research and intelligence on the political, regulatory, economic and strategic environment of prospective markets. Assessments may examine market conditions, regulatory frameworks, investment policies, geopolitical exposure, supply-chain considerations, strategic sectors, institutional stakeholders and emerging risks. This work supports market-entry decisions and complements legal, corporate and transaction advisory undertaken by SLR Advocates & Solicitors.",
  },
  {
    num: "08",
    slug: "geoeconomic-investment-risk",
    title: "Geoeconomic & Investment Risk Advisory",
    pillar: "advisory",
    description:
      "The Centre examines how trade policy, sanctions, economic security measures, capital flows, energy dependencies, strategic industries and geopolitical competition are reshaping investment and commercial decisions. It supports organisations in assessing the broader environment surrounding investments, transactions and international expansion, helping decision-makers identify risks that may not be visible through conventional commercial or legal due diligence alone.",
  },
  {
    num: "09",
    slug: "scenario-planning",
    title: "Scenario Planning & Strategic Foresight",
    pillar: "advisory",
    description:
      "SLR Global develops forward-looking assessments to help organisations prepare for multiple possible futures. Scenario exercises may examine geopolitical disruptions, regulatory changes, technological shifts, energy transitions, supply-chain vulnerabilities or transformations in the international economic order. These engagements are designed to strengthen organisational preparedness by identifying potential developments, testing assumptions and examining the strategic implications of alternative scenarios.",
  },
  {
    num: "10",
    slug: "bespoke-research",
    title: "Bespoke Research & Advisory",
    pillar: "research",
    description:
      "The Centre undertakes commissioned research and strategic assignments tailored to the specific requirements of businesses, investors, governments, institutions and international organisations. Assignments may include country and sector studies, geopolitical risk assessments, regulatory landscape analysis, stakeholder mapping, policy impact studies, strategic reports and executive intelligence products. Each engagement is structured around the client's decision, question or strategic challenge rather than a standardised research format.",
  },
  {
    num: "11",
    slug: "knowledge-platforms",
    title: "Knowledge Platforms, Conferences & Convening",
    pillar: "research",
    description:
      "Beyond commissioned work, SLR Global develops knowledge platforms that bring together expertise from law, policy, business, finance, diplomacy, academia and technology. Through conferences, executive dialogues, policy forums, masterclasses and specialised programmes, the Centre creates spaces for informed exchange and collaboration around emerging global issues.",
  },
];

// ----------------------------------------------------------------
// WHO WE ENGAGE WITH (7)
// ----------------------------------------------------------------

export interface Stakeholder {
  num: string;
  title: string;
  description: string;
}

export const stakeholders: Stakeholder[] = [
  {
    num: "01",
    title: "Businesses & Multinational Corporations",
    description:
      "Supporting organisations as they navigate international markets, regulatory change and geopolitical uncertainty with clarity and strategic foresight.",
  },
  {
    num: "02",
    title: "Investors & Financial Institutions",
    description:
      "Providing targeted intelligence on markets, sectors, investment environments and emerging risks to inform capital allocation and portfolio strategy.",
  },
  {
    num: "03",
    title: "Governments & Public Institutions",
    description:
      "Supporting policy research, comparative analysis and international engagement to strengthen evidence-based decision-making.",
  },
  {
    num: "04",
    title: "International Organisations",
    description:
      "Contributing research and informed perspectives on global governance and the management of cross-border challenges.",
  },
  {
    num: "05",
    title: "Industry Associations",
    description:
      "Developing sector-specific research, intelligence and policy insights that advance collective understanding and coordinated responses.",
  },
  {
    num: "06",
    title: "Universities & Research Institutions",
    description:
      "Advancing collaborative research, knowledge exchange and academic dialogue on issues of shared strategic importance.",
  },
  {
    num: "07",
    title: "Diplomatic & International Networks",
    description:
      "Creating carefully curated platforms for dialogue on emerging global and regional developments.",
  },
];

// ----------------------------------------------------------------
// INSIGHTS / PUBLICATIONS
// ----------------------------------------------------------------
// Add the Centre's published work here, newest first. Pages fall back
// to a "forthcoming" state while the list is empty. Example entry:
//
//   {
//     slug: "india-technology-order",
//     title: "India's Strategic Position in the Global Technology Order",
//     category: "Research Report",
//     area: "emerging-technologies",   // an areasOfFocus slug
//     date: "12 September 2026",
//     isoDate: "2026-09-12",
//     excerpt: "One- or two-sentence summary shown in listings.",
//     featured: true,                  // optional: lead item on Home/Insights
//     image: { src: "/assets/….jpg", alt: "…" }, // optional
//   },

export type InsightCategory =
  | "Research Report"
  | "Intelligence Brief"
  | "Strategic Analysis"
  | "Research Paper"
  | "Policy Note";

export interface Insight {
  slug: string;
  title: string;
  category: InsightCategory;
  area: string; // area slug this most relates to
  date: string; // display date
  isoDate: string;
  excerpt: string;
  featured?: boolean;
  image?: { src: string; alt: string };
}

export const insights: Insight[] = [];

export const insightCategories: InsightCategory[] = [
  "Research Report",
  "Intelligence Brief",
  "Strategic Analysis",
  "Research Paper",
  "Policy Note",
];

// ----------------------------------------------------------------
// EVENTS
// ----------------------------------------------------------------
// Add scheduled convenings here. Events whose isoDate has passed are
// hidden automatically (see upcomingEvents). Example entry:
//
//   {
//     slug: "india-tech-order-roundtable",
//     type: "Roundtable",
//     title: "India's Role in the Global Technology Order",
//     date: "15 October 2026",
//     isoDate: "2026-10-15",
//     venue: "Closed-Door Dialogue // New Delhi, India",
//   },

export interface EventItem {
  slug: string;
  type: "Roundtable" | "Conference" | "Forum";
  title: string;
  date: string;
  isoDate: string;
  venue: string;
}

export const events: EventItem[] = [];

export function upcomingEvents(now = new Date()) {
  const today = now.toISOString().slice(0, 10);
  return events.filter((e) => e.isoDate >= today).sort((a, b) => a.isoDate.localeCompare(b.isoDate));
}

// ----------------------------------------------------------------
// HELPERS
// ----------------------------------------------------------------

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
export function getGeography(slug: string) {
  return geographies.find((g) => g.slug === slug);
}
export function getArea(slug: string) {
  return areasOfFocus.find((a) => a.slug === slug);
}
export function getCorridor(slug: string) {
  return corridors.find((c) => c.slug === slug);
}
export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}
export function areasForSector(sectorSlug: string) {
  const sector = getSector(sectorSlug);
  if (!sector) return [];
  return sector.relatedAreas.map((slug) => getArea(slug)).filter(Boolean) as AreaOfFocus[];
}
export function sectorsForArea(areaSlug: string) {
  const area = getArea(areaSlug);
  if (!area) return [];
  return area.relatedSectors.map((slug) => getSector(slug)).filter(Boolean) as Sector[];
}
export function corridorsForGeography(geoSlug: string) {
  return corridors.filter((c) => c.geographies.includes(geoSlug));
}
export function geographiesForCorridor(corridorSlug: string) {
  const corridor = getCorridor(corridorSlug);
  if (!corridor) return [];
  return corridor.geographies.map((slug) => getGeography(slug)).filter(Boolean) as Geography[];
}
export function offeringsForPillar(pillarSlug: string) {
  return offerings.filter((o) => o.pillar === pillarSlug);
}
