# SLR Global — Website Design Brief
## For: Antigravity Design Studio
**Project** SLR Centre for Global Law, Geoeconomics & Emerging Technologies — Full Website  
**Version** 1.0 · September 2026  
**Status** For Design · Confidential  
**Primary Reference** [A&O Shearman](https://www.aoshearman.com/en) — structural and visual inspiration  
**Brand Authority** SLR Advocates & Solicitors — Website Colour Palette Guide (attached image)

---

## Table of Contents

1. [Project Brief](#1-project-brief)
2. [Design Mandate](#2-design-mandate)
3. [Brand Colour System](#3-brand-colour-system)
4. [Typography](#4-typography)
5. [Grid, Spacing & Layout](#5-grid-spacing--layout)
6. [Design Inspiration — A&O Shearman](#6-design-inspiration--ao-shearman)
7. [Navigation Architecture](#7-navigation-architecture)
8. [Photography & Visual Direction](#8-photography--visual-direction)
9. [Component Specifications](#9-component-specifications)
10. [Page-by-Page Layout](#10-page-by-page-layout)
11. [Interaction & Motion](#11-interaction--motion)
12. [Responsive Behaviour](#12-responsive-behaviour)
13. [Deliverables Checklist](#13-deliverables-checklist)

---

## 1. Project Brief

### What we're building
A world-class institutional website for the **SLR Centre for Global Law, Geoeconomics & Emerging Technologies** — a high-level research, intelligence, and strategic advisory centre anchored in India with a global mandate.

The site must do three things simultaneously:

- **Signal authority** — peer to global think tanks (CFR, Chatham House) and elite law firm websites (A&O Shearman)
- **Surface research** — make publications, intelligence briefs, and sector insights easy to find and share
- **Drive engagement** — convert senior decision-makers (CEOs, ministers, institutional investors) into enquiries, event attendees, and research subscribers

### Who visits this site
| Audience | What they want | How we serve them |
|---|---|---|
| Senior executives (C-suite, investors) | Quick positioning read, credibility check | Hero clarity, stats strip, notable engagements |
| Government / policy officials | Research on specific geopolitical issues | Areas of Focus, Insights search |
| Academics & journalists | Citable publications, expert contacts | Insights hub, PDF downloads |
| Prospective event attendees | Upcoming roundtables and conferences | Events module, Engage page |
| International partners | Centre profile, geographic scope | About, Geographies |

### What SLR is not
- Not a law firm website (no matter/client focus)
- Not a news outlet (research is substantive, not reactive)
- Not a government institution (nimble, not bureaucratic)
- Not a consultancy (advisory, not implementation)

---

## 2. Design Mandate

### The feeling
> *"The Economist meets the Council on Foreign Relations, built with the restraint of A&O Shearman."*

- **Authoritative** — every visual decision must signal intellectual seriousness
- **Global** — the design should feel at home in London, Singapore, Washington, or Delhi
- **Restrained** — Burnished Gold is used sparingly; white space carries weight here
- **Editorial** — content is the hero; the design frames it, never competes with it
- **Warm Ivory foundation** — not stark white; the Warm Ivory (#F8F7F3) background gives warmth and distinguishes SLR from generic corporate sites

### What to avoid
- No gradients
- No drop shadows (except micro-shadows on interactive cards)
- No generic stock photography (business handshakes, glass towers)
- No rounded "pill" buttons — sharp 4px radius only (institutional, not consumer)
- No overcrowded pages — generous section padding always
- No gold overuse — one or two gold elements per section maximum

---

## 3. Brand Colour System

> **These are the only permitted colours.** All hex values are taken directly from the SLR Advocates & Solicitors Colour Palette Guide. Do not introduce new colours.

### 3.1 Primary Colours

| Token Name | Hex | Name | Usage |
|---|---|---|---|
| `--color-navy` | `#0A1F44` | Midnight Navy | Nav bar, footers, hero backgrounds, all primary headings, icon fills on light surfaces |
| `--color-slate` | `#3B506E` | Slate Blue | Secondary nav elements, hover backgrounds, subtle borders, divider bands between sections |
| `--color-gold` | `#B08D57` | Burnished Gold | Accent lines, dividers, icon accents, eyebrow labels, CTA button borders — **USE SPARINGLY** |
| `--color-ivory` | `#F8F7F3` | Warm Ivory | Primary page background, alternating section fill — **never** pure white as page bg |

### 3.2 Supporting Colours

| Token Name | Hex | Name | Usage |
|---|---|---|---|
| `--color-charcoal` | `#222222` | Charcoal | All body copy and paragraph text — never pure black |
| `--color-grey-soft` | `#D8D8DB` | Soft Grey | Card borders, input underlines, horizontal rules, disabled states |
| `--color-white` | `#FFFFFF` | White | Card surfaces, form inputs, panel fills — not page backgrounds |
| `--color-forest` | `#2E5E3E` | Deep Forest | Energy & Climate sector tag, chart series 2, secondary accent |
| `--color-burgundy` | `#7A1E2E` | Burgundy | Tertiary alerts, emphasis badges, call-out boxes |

### 3.3 Colour Ratios (per page section)

```
Navy sections (hero, footer, dark CTA):    Navy 80% · Gold accent 5% · White text 15%
Ivory sections (content, areas, sectors):  Ivory 85% · Navy text 12% · Gold accent 3%
White sections (cards, insights):          White 90% · Navy text 8% · Gold accent 2%
Slate sections (divider bands):            Slate 100% · White/gold label text
```

### 3.4 Sector Colour Assignment
Each sector uses a brand colour for its left-border card accent and category badge only:

| Sector | Accent Colour | Hex |
|---|---|---|
| Defence & Homeland Security | Midnight Navy | `#0A1F44` |
| Pharmaceuticals & Healthcare | Slate Blue | `#3B506E` |
| Energy & Climate | Deep Forest | `#2E5E3E` |
| Technology & AI | Burnished Gold | `#B08D57` |
| Financial Services | Charcoal | `#222222` |
| Infrastructure & Connectivity | Soft Grey (navy text) | `#D8D8DB` |
| Electronics & Semiconductors | Burgundy | `#7A1E2E` |

### 3.5 Critical Usage Rules

1. **Gold is an accent, not a fill** — never use `#B08D57` as a button background, large area fill, or heading colour
2. **Ivory is the page background** — `#F8F7F3` everywhere the page shows behind content; `#FFFFFF` only for card and panel surfaces
3. **Navy heads everything** — `#0A1F44` is the colour of headings, not Slate Blue
4. **Charcoal for body, not Navy** — `#222222` for paragraphs; navy is reserved for structural elements and headings
5. **Maintain contrast** — charcoal on ivory ratio is ~7:1 ✓ · Gold on ivory fails WCAG — never place gold text on ivory
6. **Forest and Burgundy are data colours** — only in charts, sector badges, and alert states; never in navigation or headings

---

## 4. Typography

### 4.1 Font Families

```
Heading font:  Playfair Display — Google Fonts
               Weights to load: 600 (SemiBold), 700 (Bold)
               Fallback: 'Georgia', Times New Roman, serif

Body font:     Inter — Google Fonts
               Weights to load: 400 (Regular), 500 (Medium), 600 (SemiBold)
               Fallback: 'Helvetica Neue', Arial, sans-serif
```

**Why this combination:** Playfair gives the editorial serif character of the Economist or FT. Inter is the most legible sans-serif for dense analytical content on screen.

### 4.2 Type Scale

| Element | Font | Weight | Desktop | Mobile | Line Height |
|---|---|---|---|---|---|
| Hero display | Playfair Display | 700 Bold | 64–72px | 36–40px | 1.1 |
| H1 — Page title | Playfair Display | 700 Bold | 40px | 28px | 1.2 |
| H2 — Section title | Playfair Display | 600 SemiBold | 30px | 22px | 1.3 |
| H3 — Sub-section | Inter | 600 SemiBold | 20px | 18px | 1.4 |
| Lead paragraph | Inter | 400 Regular | 18px | 17px | 1.65 |
| Body copy | Inter | 400 Regular | 16px | 16px | 1.75 |
| Nav items | Inter | 500 Medium | 14px | 16px | — |
| Eyebrow label | Inter | 600 SemiBold CAPS | 11px | 11px | — |
| Caption / meta | Inter | 400 Regular | 13px | 12px | 1.5 |
| CTA button | Inter | 600 SemiBold | 14px | 14px | — |
| Pull quote | Playfair Display | 600 SemiBold Italic | 22–26px | 18px | 1.45 |
| Stats number | Playfair Display | 700 Bold | 56–64px | 36px | 1.1 |
| Stats label | Inter | 600 SemiBold CAPS | 12px | 11px | — |

### 4.3 Typographic Rules

- **Eyebrow labels**: `LETTER-SPACING: 0.12em` · ALL CAPS · Burnished Gold · Inter 600 · 11px · placed above every section H2
- **Heading colour**: Always `#0A1F44` Midnight Navy on light backgrounds · Always `#FFFFFF` on navy backgrounds
- **Body text max-width**: 680px (≈ 68 characters) — never let paragraphs run full-column on large screens
- **Pull quotes**: Playfair Display italic · gold left border (4px) · Warm Ivory background · 24px left padding · used on About and Area sub-pages
- **No bold mid-sentence** — do not bold individual words in body paragraphs for emphasis; use sentence structure instead

---

## 5. Grid, Spacing & Layout

### 5.1 Grid

```
Columns:         12
Max-width:       1280px
Gutter:          24px
Outer padding:   64px (desktop) · 32px (tablet) · 20px (mobile)
Container:       centred, max-width 1280px
Full-bleed:      hero, CTA banners, footer — 100vw with internal container
```

### 5.2 Spacing Tokens

| Token | Value | Where used |
|---|---|---|
| `--space-1` | 8px | Micro: icon margins, badge padding |
| `--space-2` | 16px | Small: paragraph gaps, list spacing |
| `--space-3` | 24px | Medium: card padding, button horizontal padding |
| `--space-4` | 32px | Card padding desktop, grid gap on mobile |
| `--space-6` | 48px | Section padding mobile |
| `--space-8` | 64px | Section padding tablet |
| `--space-10` | 80px | Section padding desktop |
| `--space-15` | 120px | Hero vertical padding |

### 5.3 Section Rhythm

Every page section follows this pattern:
```
[Full-width background colour or image]
  [Container: max 1280px, centred]
    [Eyebrow label — gold caps — 11px]
    [Section H2 — Playfair — 30px navy]
    [Lead or description — Inter 18px charcoal — max-width 560px]
    [Content: cards / grid / accordion / map]
    [Footer link: "All [topic] →" — Inter 14px navy, gold underline on hover]
  [/Container]
[/Full-width]
```

---

## 6. Design Inspiration — A&O Shearman

### 6.1 What to take directly from A&O Shearman

Study `https://www.aoshearman.com/en` before designing. The following specific patterns are to be adopted:

#### Pattern 1 — Mega-menu navigation
A&O groups their nav into 3 top-level items (Expertise/Industries/Global Coverage) each opening a full-width dark dropdown with grouped sub-links and a trailing "ALL [CATEGORY]" link.

**Adopt for SLR:**
- Full-width dropdown panel: `#0A1F44` navy background
- Three columns inside the dropdown: left column is a short description of the section (Playfair italic, white, 17px); centre and right columns are sub-page links (Inter 14px, white, letter-spacing 0.02em)
- Bottom row of each dropdown: one featured insight card (dark card, gold 4px left border)
- "ALL [AREAS OF FOCUS] →" / "ALL [SECTORS] →" footer link in Burnished Gold caps inside the dropdown
- Hover state on links: gold underline (1px, animated from left 200ms)

#### Pattern 2 — Editorial hero with eyebrow + headline + CTA
A&O's hero: eyebrow label (dark, small caps) · large bold serif headline (2–3 lines) · 1-sentence description · single CTA arrow link.

**Adopt for SLR:**
- Eyebrow: `CENTRE FOR GLOBAL LAW · GEOECONOMICS & EMERGING TECHNOLOGIES` — gold, 11px caps
- Headline: Playfair Display Bold, 64px, white — 2–3 line declarative statement (not a tagline, a claim)
- Description: Inter Regular, 18px, `#D8D8DB` Soft Grey — one sentence only
- CTA: two buttons — Primary: `Explore Our Research` · Secondary: `Engage the Centre`
- Background: `#0A1F44` Midnight Navy + faint abstract SVG (global connectivity nodes, gold, 8% opacity)

#### Pattern 3 — Capability/Area cards with description
A&O's "Explore our capabilities" section: 6 cards in 3-column grid, each with bold title, 2-line description, and an arrow CTA. White background, generous padding, clean.

**Adopt for SLR** (for "Areas of Focus" and "Sectors" sections):
- Card: white background · `#D8D8DB` 1px border · 4px gold left border accent · 8px border-radius
- Inside: Area number (gold, Inter 600, 12px caps) · Area title (Playfair 20px navy) · 2-sentence description (Inter 15px charcoal) · `Explore →` (Inter 14px navy, gold underline on hover)
- Hover: card lifts (micro shadow), gold left border brightens to `#B08D57`
- Grid: 3 columns on desktop, 2 on tablet, 1 on mobile

#### Pattern 4 — Insights spotlight grid
A&O's "Spotlight on our news and insights": 3 cards, each with editorial image (16:9), category label, headline, content type badge, date. Clean, editorial.

**Adopt for SLR (Insights section):**
- 3-column card grid on ivory background
- Each card: 16:9 image (WebP, lazy-loaded) · category badge (navy pill, white 11px caps) over image bottom-left · Playfair 18px navy headline · Inter 14px charcoal 2-line excerpt · date + content type (Inter 13px, `#888` grey) · `Read →` gold text link
- Hover: image scales 103% (transition 300ms ease) · gold left border appears on card (4px, slides in 200ms)
- Left-most card is pinned as "Featured" — slightly larger image, badge reads "Featured"
- Section footer: `View all insights →` right-aligned, Inter 14px navy, gold underline

#### Pattern 5 — Global coverage region tabs
A&O's "Where you are, we are" section: clickable region tabs (North America, Europe, Asia Pacific, Middle East, Africa, Latin America) that highlight the selected region.

**Adopt for SLR (Geographies section):**
- Eyebrow: `GEOGRAPHIES & STRATEGIC CORRIDORS`
- Headline: `Where the world moves, we follow` — Playfair 30px navy
- Horizontal tab bar: 9 region tabs — pill style, `#D8D8DB` default, `#0A1F44` active fill, white active text
- Below tabs: 2-column — Left 60%: region name (Playfair 24px) + 2-para description + 3 key themes as bullet list · Right 40%: 2 related insight cards stacked
- Mobile: tabs become horizontal scroll strip

#### Pattern 6 — "About us" 2-column panel
A&O has a clean 2-column section: left is a brief positioning statement, right is an editorial image or a bold headline + CTA button.

**Adopt for SLR (About teaser on homepage):**
- Left 55%: eyebrow + H2 heading + 3-line description + `Learn About the Centre →` link
- Right 45%: navy card with gold rule at top + pull quote from Centre's mission statement (Playfair italic white)
- Background: Warm Ivory `#F8F7F3`

#### Pattern 7 — Footer architecture
A&O footer: 4-column link navigation + bottom bar with copyright and legal links.

**Adopt for SLR:**
- Column 1: SLR logo (white version) + tagline `Let justice be done though the heavens fall` (Playfair italic, gold, 14px) + LinkedIn icon
- Column 2: `Areas of Focus` — 5 area links
- Column 3: `Sectors` — 7 sector links
- Column 4: `Connect` — Insights · Events · Engage the Centre · Newsletter sign-up
- Separator: 1px gold rule at top of footer
- Bottom bar: copyright · Privacy Policy · Terms · Cookie Settings — Inter 12px, `#D8D8DB`
- Background: `#0A1F44` Midnight Navy throughout

### 6.2 What NOT to take from A&O Shearman

| A&O pattern | Why not for SLR |
|---|---|
| Green (`#009B55`) accent colour | SLR uses Burnished Gold — do not substitute green |
| "Find people" people-search in nav | SLR does not have a people directory |
| "Careers" as top-level nav item | SLR's primary audience is not job seekers |
| Deal/client case study format | SLR is a research centre, not a transactional law firm |
| Very minimal hero with almost no colour | SLR's navy hero is intentionally richer and darker |

---

## 7. Navigation Architecture

### 7.1 Desktop Nav Bar

```
[SLR Logo — white — left]    [Areas of Focus ▾] [Sectors ▾] [What We Do ▾] [Geographies ▾] [Insights]    [About] [Engage the Centre ▶]
```

- Height: 72px
- Background: `#0A1F44` always — no scroll transparency
- Logo: SLR SVG mark, white, left; links to `/`
- Nav links: Inter 500, 14px, white, letter-spacing 0.03em
- Active/current page: 2px gold underline at bottom of nav item
- `Engage the Centre`: outlined button — 1px gold border, white text, 4px radius; hover: gold fill, navy text
- Sticky: fixed on scroll, no colour change on scroll

### 7.2 Mega-Menu Dropdowns (A&O pattern)

Triggered by hover (desktop) or tap (touch). Full-width, animated: 200ms ease, 6px downward reveal.

```
┌─────────────────────────────────────────────────────────────────┐
│  [Description column]      [Links col 1]      [Links col 2]     │
│                                                                  │
│  Areas of Focus            01 Global Law      04 Energy         │
│  Research across five      02 Geoeconomics    05 Emerging Tech  │
│  interconnected domains    03 Global Finance                     │
│  shaping the world order.                                        │
│                                                                  │
│  [Featured insight card — dark, gold left border]               │
│                                                                  │
│  ALL AREAS OF FOCUS  →                                          │
└─────────────────────────────────────────────────────────────────┘
```

- Background: `#0A1F44`
- Description column: Playfair italic, white, 17px, max-width 200px
- Links: Inter 14px, white, padding 6px 0; hover: gold underline animates from left
- "ALL →" link: Inter 600, gold caps, 11px, letter-spacing 0.1em
- Featured insight card at bottom: dark navy card (#0D2040), 4px gold left border, category badge, headline (Playfair 16px white)

**Mega-menu contents per nav item:**

| Nav item | Column 1: Left description | Columns 2–3: Sub-page links |
|---|---|---|
| Areas of Focus | "Research across five interconnected domains shaping the global order." | 01 Global Law & Regulation · 02 Geoeconomics & Strategic Affairs · 03 Global Finance & Investment · 04 Energy & Transitions · 05 Emerging Technologies |
| Sectors | "Applied research across the industries where geopolitical forces converge." | Defence · Pharma & Healthcare · Energy & Climate · Technology & AI · Financial Services · Infrastructure · Electronics & Semiconductors |
| What We Do | "Three modes of engagement: research, intelligence, and strategic advisory." | Research & Strategic Intelligence · Geopolitical & Regulatory Intelligence · Executive Briefings · Executive Preparation · Closed-Door Roundtables · Market Entry Intelligence · Scenario Planning · Bespoke Research · Knowledge Platforms |
| Geographies | "A global perspective anchored in India and the Indo-Pacific." | India & South Asia · Indo-Pacific & East Asia · ASEAN · Middle East & Gulf · Europe & Eurasia · North America · Africa · Latin America · Strategic Corridors |

### 7.3 Mobile Navigation

- Hamburger icon: right side of nav bar (24px, white, 3 horizontal lines with 6px gap)
- Drawer: slides in from right, full-height, full-width, `#0A1F44` background
- Top of drawer: SLR logo left + close ✕ right
- `Engage the Centre` gold-bordered button at top of drawer
- Nav items: Inter 500, 18px, white, padding 16px 24px, 1px `#3B506E` bottom border
- Expand caret on items with sub-pages: tapping expands inline accordion
- Sub-items: Inter 400, 16px, `#D8D8DB`, indent 16px, padding 10px 24px
- Footer of drawer: LinkedIn icon + copyright line

---

## 8. Photography & Visual Direction

### 8.1 What to shoot / source

**Hero images** — Full-bleed photography. Subject matter:
- Global architecture: legislative buildings, international tribunals, financial districts (not tourist-familiar)
- Abstract global connectivity: satellite imagery, shipping lanes, data infrastructure
- Working environment: high-level meetings, roundtable settings, editorial portraits — no posed handshakes
- Geopolitical geography: aerial views of strategic corridors, border regions, ports

**Avoid:**
- Generic business stock (handshakes, glass offices, diverse-team-smiling)
- Obvious tourist landmarks (Big Ben, Eiffel Tower, Taj Mahal)
- AI-generated imagery or anything that reads as synthetic
- Bright, colourful, or lifestyle photography

### 8.2 Image Specifications

| Type | Dimensions | Format | Notes |
|---|---|---|---|
| Hero (full-bleed) | 1920 × 1080px min | WebP + JPEG fallback | 40–60% navy gradient overlay from bottom |
| Insight card thumbnail | 800 × 500px | WebP + JPEG fallback | 16:9 ratio, consistent crop |
| OG / social share image | 1200 × 630px | JPEG | Branded template: navy bg, SLR logo top-left, title in Playfair white |
| Author headshot | 400 × 400px | WebP | Square crop, monochrome or desaturated |
| Geography / region image | 1200 × 600px | WebP | Aerial or architectural — region-appropriate |

### 8.3 Overlay Treatment

- Dark hero images: navy-tinted overlay at 50–65% opacity before text is placed
- Navy sections with photography: gradient from `#0A1F44` at 85% (left/bottom) fading to 0% (right/top)
- SVG patterns: world-connectivity node graph, `#B08D57` Burnished Gold, 6–10% opacity, used on navy hero backgrounds only

### 8.4 Iconography

- Style: Outline icons only (Tabler Icons recommended — 5800+ icons, consistent stroke width)
- Size: 24px standard · 40px for section feature icons · 16px for inline/nav
- Colour: `#B08D57` gold on navy backgrounds · `#0A1F44` navy on light/ivory backgrounds
- Do not use filled icons, emoji, or illustrations
- Custom SVG for SLR logo mark — provided by client

---

## 9. Component Specifications

### 9.1 Buttons

| Variant | Default | Hover | When to use |
|---|---|---|---|
| Primary | Navy fill `#0A1F44` · white text · 1px gold border | Gold fill `#B08D57` · navy text | Hero CTA, form submit, main section CTA |
| Secondary | Transparent · 1px gold border `#B08D57` · gold text | Gold fill · navy text | Secondary CTAs alongside primary |
| Ghost | No border · navy text · no underline | 1px gold underline · no fill | In-text links, "Read more →" arrows |
| Nav CTA | Transparent · 1px gold border · white text (in nav bar only) | Gold fill · navy text | "Engage the Centre" button in nav |

**All buttons:**
- Border-radius: 4px (sharp — institutional, not consumer)
- Padding: 12px 24px
- Letter-spacing: 0.06em
- Min height: 44px (touch target)
- Transition: all 180ms ease
- No box shadows on buttons

### 9.2 Cards

#### Insight Card (used in homepage spotlight, Insights hub)
```
┌─────────────────────────────────────┐
│ [16:9 image]                        │
│ [Category badge — bottom-left over] │
├─────────────────────────────────────┤
│ INTELLIGENCE BRIEF                  │  ← gold eyebrow, 11px caps
│ Headline in Playfair 18px navy      │
│ Two-line excerpt in Inter 14px      │
│ charcoal, max 2 lines, ellipsis     │
├─────────────────────────────────────┤
│ 11 Sep 2026              Read →     │  ← Inter 13px grey · gold arrow
└─────────────────────────────────────┘
```
- Background: `#FFFFFF` white
- Border: 1px `#D8D8DB` Soft Grey
- Border-radius: 8px
- Left border on hover: 4px `#B08D57` gold, slides in from top (200ms)
- Image hover: scale 103% (300ms ease, overflow hidden)
- Shadow on hover: `0 8px 24px rgba(10, 31, 68, 0.10)`

#### Area / Sector Card (capability-style, A&O pattern)
```
┌────────────────────────────────────────┐
│ 01                                     │  ← gold caps, 12px
│ Global Law & Cross-Border Regulation   │  ← Playfair 20px navy
│                                        │
│ The Centre analyses the evolving       │  ← Inter 15px charcoal
│ legal and regulatory architecture...   │
│                                        │
│ Explore →                              │  ← Inter 14px navy
└────────────────────────────────────────┘
```
- Left border: 4px `#B08D57` always visible (not just on hover)
- Background: `#FFFFFF`
- Border: 1px `#D8D8DB`
- Border-radius: 8px
- Hover: left border brightens, card lifts microshadow

#### Stats Card (MitKat-inspired credibility block)
```
[  8+  ]    [  5   ]    [  7   ]    [ 11   ]
Geographies  Areas of   Priority    Engagement
Tracked      Focus      Sectors     Formats
```
- Numbers: Playfair Display Bold, 56px, `#0A1F44`
- Labels: Inter 600 SemiBold CAPS, 12px, `#B08D57` Burnished Gold
- Background: `#0A1F44` navy (full-width section)
- Layout: 4 columns desktop, 2×2 grid mobile
- No borders, no cards — numbers float on navy

#### Event Card
```
[ROUNDTABLE]  ← burgundy badge
15 Oct 2026   ← Inter 13px gold
New Delhi, India

Closed-Door Roundtable: India's Role   ← Playfair 17px white
in the Global Technology Order         

Register →                             ← white ghost link
```
- Background: `#3B506E` Slate Blue (events section is slate, distinguishing it)
- No card border — full-width event list with 1px `#4A6080` separator between events

### 9.3 Forms

**Contact / Enquiry form inputs:**
- No visible box — only a 2px bottom border in `#D8D8DB` Soft Grey at rest
- Focus: bottom border transitions to `#B08D57` Burnished Gold (200ms)
- Label: floats above on focus (animated up, 13px Inter, gold when active, grey at rest)
- Error state: bottom border `#7A1E2E` Burgundy + helper text below, 12px Inter
- Textarea: same style, min-height 120px, resize: vertical only
- Submit: Primary button, full-width on mobile

**Newsletter sign-up (footer + inline):**
- Single line: email input + Subscribe button side by side
- Input: white with 1px grey border (this is the exception — full border when inline with button)
- Button: Primary button compact (10px 20px padding)

### 9.4 Section Labels / Badges

| Type | Style | Example |
|---|---|---|
| Eyebrow label | Inter 600 · ALL CAPS · 11px · `#B08D57` · letter-spacing 0.12em | `AREAS OF FOCUS` |
| Content type badge | Navy pill `#0A1F44` · white 11px Inter · 6px 10px padding | `INTELLIGENCE BRIEF` |
| Geography tag | `#D8D8DB` soft grey pill · `#0A1F44` navy text | `India & South Asia` |
| Sector tag | Sector colour left dot 6px · Inter 13px charcoal name | `• Energy & Climate` |
| Featured badge | `#B08D57` fill · `#0A1F44` navy text · 11px caps | `FEATURED` |
| Alert / call-out | `#7A1E2E` burgundy border-left 4px · `#FCEBEB` bg | ⚠ Call-out text |

### 9.5 Divider Bands (between major page sections)

Use a 12px-height Slate Blue (`#3B506E`) band between major homepage sections as a pacing device. Contains:
- No text or content
- Purely structural: signals section transition without white space alone

---

## 10. Page-by-Page Layout

### 10.1 Homepage

The homepage follows the A&O Shearman rhythm: dark hero → capability strip → insights → global coverage → about → CTA.

---

#### Section A — Navigation (sticky)
*[see Section 7 above]*

---

#### Section B — Hero
**Background:** Full-width, 100vh, `#0A1F44` Midnight Navy  
**Background texture:** SVG global node graph (connectivity lines between lat/lng points), `#B08D57` at 8% opacity  
**Optional:** Photographic overlay (international institution / global architecture), 20% opacity, desaturated  
**Layout:** Centred vertically, centred horizontally within container  

```
[Eyebrow] CENTRE FOR GLOBAL LAW, GEOECONOMICS & EMERGING TECHNOLOGIES
[H1]      Navigating the Forces
          Reshaping the World
[Lead]    Rigorous research, applied intelligence, and strategic advisory
          at the intersection of law, economics, and emerging technology.
[CTAs]    [Explore Our Research]  [Engage the Centre]
[Scroll]  ↓ (animated gold chevron)
```

- H1: Playfair Display Bold, 64px, white, line-height 1.1
- Lead: Inter Regular, 18px, `#D8D8DB`, max-width 540px
- CTAs: Primary + Secondary buttons, side-by-side (stacked on mobile)
- Scroll cue: gold `#B08D57` animated chevron, bottom centre, bounce animation

---

#### Section C — Three Pillar Strip (What We Do)
**Background:** `#FFFFFF` white  
**Layout:** 3-column equal grid, container max 1280px  
**Padding:** 64px 0  

Each pillar:
- Gold SVG icon: 40px, `#B08D57`
- Title: Playfair SemiBold 22px, `#0A1F44` — **Research** / **Intelligence** / **Strategic Advisory**
- Description: Inter Regular 15px, `#222222`, 3 lines max
- Link: `Learn more →` Inter 14px navy, gold underline on hover

Bottom: 1px `#D8D8DB` rule  

---

#### Section D — Areas of Focus
**Background:** `#F8F7F3` Warm Ivory  
**Eyebrow:** `AREAS OF FOCUS`  
**H2:** `Five domains. One mandate.`  
**Layout:** 3-column card grid on desktop (05 numbered areas + 1 "View all" card)  
**Padding:** 80px 0  

Cards: Area Card component (see 9.2)  
Section footer: `All Areas of Focus →` right-aligned, Inter 14px, navy  

---

#### Section E — Stats / Credibility Strip
**Background:** Full-width `#0A1F44` Midnight Navy  
**Layout:** 4-column stats grid (Stats Card component)  
**Padding:** 64px 0  

Stats:
- `8+` Geographies Tracked
- `5` Areas of Focus
- `7` Priority Sectors
- `11` Engagement Formats

---

#### Section F — Priority Sectors
**Background:** `#FFFFFF` white  
**Eyebrow:** `PRIORITY SECTORS`  
**H2:** `Where geopolitics meets industry`  
**Layout:** 4-column × 2-row tile grid, 8 tiles (7 sectors + 1 "All Sectors →" tile)  
**Padding:** 80px 0  

Each tile:
- 4px left border in sector colour
- Sector icon (24px outline, sector colour)
- Title: Inter 600, 16px, `#0A1F44`
- Description: Inter 400, 13px, `#222222`, 1 line
- Hover: navy fill, white text, gold icon, arrow appears right

---

#### Section G — Insights Spotlight (A&O "Spotlight" pattern)
**Background:** `#F8F7F3` Warm Ivory  
**Eyebrow:** `LATEST INSIGHTS`  
**H2:** `Research that anticipates what's next`  
**Layout:** 1 featured card (wide, left) + 2 standard cards (right column stacked)  
**Padding:** 80px 0  

Featured card: double-width, larger image, `FEATURED` gold badge  
Standard cards: Insight Card component (see 9.2)  
Section footer: `View all insights →` right-aligned  

---

#### Section H — Geographies Strip (A&O "Global coverage" pattern)
**Background:** `#0A1F44` Midnight Navy  
**Eyebrow:** `GEOGRAPHIES & STRATEGIC CORRIDORS` — white  
**H2:** `Where the world moves, we follow` — Playfair white  
**Layout:** Horizontal 9-region tab strip + content area below  
**Padding:** 80px 0  

Tab strip: horizontal scrollable pills  
- Default: `#3B506E` Slate Blue pill, white text
- Active: `#FFFFFF` white pill, `#0A1F44` navy text

Below active tab:
- Left 60%: region name (Playfair 24px white) + 1-para description (Inter 16px `#D8D8DB`) + 3 key themes (Inter 14px gold bullets)
- Right 40%: 2 insight cards stacked (dark card variant — navy bg, white text, gold border-top)

Section footer: `Explore all geographies →` in gold, white arrow  

---

#### Section I — Who We Engage With
**Background:** `#F8F7F3` Warm Ivory  
**Eyebrow:** `WHO WE ENGAGE WITH`  
**H2:** `Serving leaders who shape the global agenda`  
**Layout:** 3 × 2 grid of stakeholder cards  
**Padding:** 80px 0  

Each card:
- Gold outline icon (40px)
- Stakeholder type: Inter 600, 16px, navy
- Description: Inter 400, 14px, charcoal
- Backgrounds: white, 1px grey border, 8px radius

Stakeholders: Businesses & Multinationals · Investors & Financial Institutions · Governments · International Organisations · Industry Associations · Universities & Research Institutions  

---

#### Section J — Events Preview
**Background:** `#3B506E` Slate Blue (differentiating band)  
**Eyebrow:** `UPCOMING EVENTS` — white  
**H2:** `Dialogues that drive decisions` — Playfair white  
**Layout:** 3-event horizontal list (not cards — list rows)  
**Padding:** 64px 0  

Each event row:
- Badge: Burgundy `ROUNDTABLE` / `CONFERENCE` / `FORUM`
- Date: Inter 600, 14px, gold
- Title: Playfair 18px, white
- Location: Inter 13px, `#D8D8DB`
- `Register →` ghost white link right

Section footer: `View all events →` gold, right-aligned  

---

#### Section K — About the Centre (A&O 2-column "About us" pattern)
**Background:** `#FFFFFF` white  
**Layout:** 2-column: Left 55% content, Right 45% quote card  
**Padding:** 80px 0  

Left:
- Eyebrow: `ABOUT THE CENTRE`
- H2: `Rigorous analysis. Actionable intelligence.`
- Description: Inter 16px, charcoal, 3 lines
- Link: `Learn about the Centre →`

Right:
- Navy card (`#0A1F44`), gold top rule (2px)
- Pull quote in Playfair italic white: mission statement excerpt (Playfair 20px, line-height 1.5)
- Attribution: `— SLR Centre for Global Law` Inter 13px gold

---

#### Section L — Engagement CTA Banner
**Background:** Full-width `#0A1F44` Midnight Navy  
**Layout:** Centred, max-width 680px  
**Padding:** 100px 0  
**Pattern:** SVG geometric — repeating gold diamond pattern, 4% opacity

```
[H2]     Commission Research. Attend a Dialogue.
         Request a Briefing.
[Sub]    Engage the Centre to navigate what's changing
         in your world.
[CTA]    [Engage the Centre]   ← Primary button
```

---

#### Section M — Footer
*[see Section 9 / Section 7.3 above]*

---

### 10.2 Areas of Focus — Hub Page

**URL:** `/areas-of-focus`

- Hero (40vh): Navy · title `Areas of Focus` Playfair 40px white · lead sentence
- Section: 5-card grid (full-width cards, numbered 01–05, Area Card component)
- Each card has consistent: number · title · 2-sentence summary · `Explore this area →`
- Bottom strip: ivory background · `Related Sectors` pills linking to sector pages

---

### 10.3 Area Sub-page

**URL:** `/areas-of-focus/[slug]`  
**Example:** `/areas-of-focus/geoeconomics-strategic-affairs`

```
[Hero — 40vh navy]
  Breadcrumb: Areas of Focus > Geoeconomics
  Area number: 02
  Title: Geoeconomics & Strategic Affairs
  Lead paragraph: 2 sentences from source content

[Key Themes — ivory bg]
  Eyebrow: KEY THEMES
  3-column grid of theme pills (Inter 14px navy, grey border)

[Research in This Area — white bg]
  Eyebrow: LATEST RESEARCH
  3 insight cards (Insight Card component)

[Related Sectors — ivory bg]
  Eyebrow: RELATED SECTORS
  Horizontal sector pills with sector colour dot

[CTA]
  Navy: "Commission research in this area" → Engage CTA
```

---

### 10.4 Insights Hub

**URL:** `/insights`

```
[Hero — 40vh navy]
  Title: Insights & Publications
  Filter bar (pinned to bottom of hero, white bg):
    [Type ▾] [Geography ▾] [Sector ▾] [Area of Focus ▾] [Date ▾]

[Content area — ivory bg]
  Layout: Left sidebar 25% (sticky) + Right grid 75%

  Sidebar:
    Filter: Type checkboxes
    Filter: Geography checkboxes
    Filter: Sector checkboxes
    Filter: Area of Focus
    Filter: Date range
    [Clear all filters] ghost button

  Grid:
    [Featured banner — full width, photo bg, white text, gold badge]
    [3-column card grid, 6 per load]
    [Load more button — Primary, centred]
```

---

### 10.5 Individual Insight / Article Page

**URL:** `/insights/[slug]`

```
[Hero — 50vh, full-bleed photo, dark navy overlay]
  Bottom-left content:
    [Category badge]
    [Title: Playfair 36px white]
    [Author · Date · Read time: Inter 13px grey]
    [PDF download button — if applicable]

[Article body — 3-column layout]
  Left sidebar 20% (sticky):
    Table of contents (auto H2)
    Share buttons: LinkedIn · Copy link

  Centre 55% (article):
    Lead paragraph (Inter 18px, larger)
    Body text (Inter 16px, 1.75 line-height)
    H2 sections separated by 1px gold rule
    Pull quotes (Playfair italic, gold border-left)
    Data callouts (navy bg, white Playfair number, gold label)

  Right sidebar 25%:
    "Also in this series" card links
    Newsletter sign-up widget
    Tags: Sectors / Areas / Geographies

[Related Insights — ivory bg]
  3 insight cards below article
```

---

### 10.6 Geographies Page

**URL:** `/geographies`

- Hero (40vh): navy, title, lead
- Interactive SVG world map: regions clickable; hover highlights in `#B08D57` gold
- On click: right panel slides in (300ms ease) with region name, summary, corridors, 2 insight cards, "Explore →"
- Below map: Strategic Corridors section — horizontal scroll of corridor cards (slate blue bg, white text, gold left border)
- Mobile: map replaced by accordion of regions; tap to expand

---

### 10.7 What We Do (Services)

**URL:** `/what-we-do`

- Hero (40vh): navy, title "What We Do", 3-pillar anchor links (Research / Intelligence / Advisory)
- 11 service sections: alternating 2-column layout
  - Odd: text left, icon/abstract graphic right (navy bg for graphic panel)
  - Even: icon/graphic left, text right
  - Each: eyebrow (gold) → H2 (navy) → lead (charcoal) → 3 key deliverables bullets → `Enquire →` link
- Divider bands: 12px `#3B506E` Slate Blue between groups of services
- Bottom: Who We Engage With grid + Engagement CTA banner

---

### 10.8 Contact / Engage Page

**URL:** `/engage`

**Layout:** 2-column on desktop (stacked on mobile)

Left 45% — ivory background:
- Eyebrow: `GET IN TOUCH`
- H2: `Commission research. Attend a dialogue. Request a briefing.`
- Description: Inter 16px charcoal
- Response time: `We respond within 2 working days`
- LinkedIn: link with icon
- Key engagement formats listed: bullet list

Right 55% — white background, 2px gold left border on this column:
```
Form:
  Full Name *
  Organisation *
  Role / Title
  Email Address *
  Country / Region (dropdown)
  Nature of Enquiry (dropdown):
    Research Inquiry
    Advisory Services
    Roundtables & Events
    Media Enquiry
    Partnership
    Other
  Message (textarea)
  [Send Enquiry] — Primary button
```

Below form: `Subscribe to insights` — inline newsletter (single line, email + Subscribe)

---

## 11. Interaction & Motion

### 11.1 Principles
- **Purposeful** — every animation communicates state change, not decoration
- **Fast** — 150–300ms maximum; this is a serious site, not a portfolio
- **Ease-out** — all transitions use ease-out (elements decelerate into position)

### 11.2 Specific Animations

| Element | Animation | Duration | Easing |
|---|---|---|---|
| Mega-menu open | Fade in + 6px downward slide | 200ms | ease-out |
| Card hover border | Left border slides in from top | 200ms | ease-out |
| Card hover image | Scale from 100% to 103% | 300ms | ease-out |
| Button hover | Background colour fill | 180ms | ease |
| Nav CTA hover | Gold fill | 180ms | ease |
| Geography side panel | Slides in from right | 300ms | ease-out |
| Mobile nav drawer | Slides in from right | 250ms | ease-out |
| Scroll reveal | Fade + 12px upward | 400ms | ease-out |
| Gold underline (links) | Grows from left to right | 200ms | ease |

### 11.3 Scroll Behaviour
- Sticky nav: fixed after scroll past hero, no appearance change
- Scroll-reveal: applies to cards and section content blocks — staggered by 80ms per card in a grid
- Sticky sidebar (Insights article): sidebar remains fixed while article scrolls
- Horizontal scrolls (geography tabs, corridor cards, sector tiles on mobile): native scroll, custom scrollbar (2px `#D8D8DB` track, `#B08D57` thumb)

---

## 12. Responsive Behaviour

| Breakpoint | Layout changes |
|---|---|
| `< 375px` Mobile S | Single column · 16px outer margin · font scales down 10% · hamburger nav |
| `375–767px` Mobile | Single column · 20px outer margin · hamburger nav · stacked CTAs · 2×2 sector grid · accordion geographies |
| `768–1023px` Tablet | 2-column max · 32px outer margin · nav bar horizontal but compressed · 2-col article |
| `1024–1279px` Laptop | Full layout, minor compression · 3-col insight grid · full mega-menu |
| `≥ 1280px` Desktop | Full 12-column, max-width 1280px, all layouts at full spec |

### Key Mobile Adaptations

- **Mega-menu**: becomes full-screen drawer with accordion sub-menus
- **Homepage hero**: headline drops to 36px, sub-headline 16px, CTAs stack vertically
- **Stats strip**: 4-column → 2×2 grid
- **Sector tiles**: 4-column → 2-column
- **Insight grid**: 3-column → single column (stacked cards)
- **Geography tabs**: horizontal scroll strip (touch-scrollable)
- **Article layout**: 3-column collapses — ToC becomes sticky top banner; right sidebar collapses to below article
- **Contact form**: 2-column stacks to single column; left content block goes above form

---

## 13. Deliverables Checklist

### Phase 1 — Design System (Figma)
- [ ] Colour token library (all 9 colours, CSS variable names as token names)
- [ ] Typography scale (all elements, desktop + mobile)
- [ ] Spacing token grid
- [ ] Icon set: Tabler outline, 24px, gold and navy variants (minimum 30 icons)
- [ ] Button component: all 4 variants × all 3 states (default, hover, disabled)
- [ ] Input component: rest, focus, error, success states
- [ ] Card component: Insight, Area, Stats, Event — all states
- [ ] Badge/tag components: all 6 types
- [ ] Navigation component: desktop full + mega-menu + mobile drawer
- [ ] Footer component

### Phase 2 — High-Fidelity Mockups (Figma)
- [ ] Homepage — desktop
- [ ] Homepage — mobile
- [ ] Insights Hub — desktop
- [ ] Individual Insight article — desktop
- [ ] Areas of Focus hub — desktop
- [ ] One Area sub-page — desktop
- [ ] Geographies — desktop
- [ ] Contact/Engage — desktop
- [ ] All above — mobile versions

### Phase 3 — Remaining Pages (Figma)
- [ ] About page
- [ ] Sectors hub
- [ ] One Sector sub-page
- [ ] What We Do
- [ ] Events listing
- [ ] Individual Event page
- [ ] All remaining — mobile versions

### Phase 4 — Handoff
- [ ] Figma Dev Mode annotations (all components with spacing, colour, and type specs)
- [ ] Export: all icons as SVG
- [ ] Export: OG image template (1200×630px, Figma frame)
- [ ] Export: favicon set (16, 32, 180, 192px)
- [ ] CSS token file: all colour, spacing, and typography variables
- [ ] Animation spec: timing + easing for all interactive states
- [ ] Interaction prototype: Homepage scroll + mega-menu + mobile drawer (Figma prototype)
- [ ] Photography brief: sourcing direction for hero and insight images

---

## Appendix A — Content Inventory (for design layout purposes)

### Areas of Focus (5)
1. Global Law & Cross-Border Regulation
2. Geoeconomics & Strategic Affairs
3. Global Finance & Investment
4. Energy & Energy Transitions
5. Emerging Technologies & Governance

### Priority Sectors (7)
1. Defence & Homeland Security
2. Pharmaceuticals & Healthcare
3. Energy & Climate
4. Technology & AI
5. Financial Services
6. Infrastructure & Connectivity
7. Electronics & Semiconductors

### What We Do — Offerings (11)
1. Research & Strategic Intelligence
2. Geopolitical & Regulatory Intelligence
3. Executive & C-Suite Briefings
4. Executive Preparation & Strategic Decision Support
5. Closed-Door Roundtables & Strategic Dialogues
6. Policy & Stakeholder Engagement
7. Market Entry & International Expansion Intelligence
8. Geoeconomic & Investment Risk Advisory
9. Scenario Planning & Strategic Foresight
10. Bespoke Research & Advisory
11. Knowledge Platforms, Conferences & Convenings

### Geographies (9 regions)
1. India & South Asia ← **Primary anchor**
2. Indo-Pacific & East Asia
3. ASEAN & Southeast Asia
4. Middle East & Gulf
5. Europe & Eurasia
6. North America
7. Africa
8. Latin America & the Caribbean
9. Global Supply Chains & Strategic Corridors

### Strategic Corridors (7)
1. India–Middle East–Europe
2. India–Indo-Pacific
3. China+1 Supply-Chain Networks
4. Gulf–India–Asia Energy & Investment
5. Europe–Eurasia–Asia Connectivity
6. Africa–Middle East–India
7. Americas–Europe–Indo-Pacific Strategic Supply Chains

### Who We Engage With (7)
1. Businesses & Multinational Corporations
2. Investors & Financial Institutions
3. Governments & Public Institutions
4. International Organisations
5. Industry Associations
6. Universities & Research Institutions
7. Diplomatic & International Networks

---

## Appendix B — Tagline & Brand Language

**Primary tagline:** `Let justice be done though the heavens fall`  
*(Fiat justitia ruat caelum — appears in footer, SLR logo mark)*

**Centre positioning line (for hero sub-headline):**
`Situated at the nexus of law, geoeconomics, and emerging technologies`

**Three-word summary of each pillar:**
- Research: `Evidence. Depth. Clarity.`
- Intelligence: `Monitor. Interpret. Anticipate.`
- Advisory: `Navigate. Strategise. Act.`

**Voice:** Authoritative. Analytical. Global. Never promotional, never jargon-heavy.

---

*End of Antigravity Design Brief — SLR Global*  
*For questions on this document: [client contact to be added]*  
*Colour palette authority: SLR Advocates & Solicitors — Website Colour Palette Guide (attached)*  
*Design reference: https://www.aoshearman.com/en*
