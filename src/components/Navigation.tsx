"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SearchTrigger } from "@/components/SearchPalette";
import { areasOfFocus, sectors, geographies, insightCategories, offerings } from "@/lib/content";

type MenuKey = "research" | "sectors" | "geographies" | "insights" | "capabilities";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    const toggle = toggleRef.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [mobileOpen]);

  const closeAll = () => setOpenMenu(null);

  // Mega-menus open on hover and on keyboard focus, and close on Escape or
  // when focus leaves the item.
  const menuProps = (key: MenuKey) => ({
    className: `nav-item-wrap ${openMenu === key ? "is-open" : ""}`,
    onMouseEnter: () => setOpenMenu(key),
    onFocus: () => setOpenMenu(key),
    onBlur: (e: React.FocusEvent<HTMLDivElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenMenu((m) => (m === key ? null : m));
    },
    onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        e.currentTarget.querySelector<HTMLElement>(".nav-link")?.focus();
      }
    },
  });

  return (
    <>
      <nav
        className={`site-nav ${scrolled ? "is-scrolled" : ""}`}
        aria-label="Main Navigation"
        onMouseLeave={closeAll}
        style={{ viewTransitionName: "site-header" }}
      >
        <div className="nav-inner">
        <div className="nav-brand">
          <Link href="/" aria-label="SLR Centre home" onClick={closeAll}>
            <Image src="/assets/logo-slr-white.svg" alt="SLR Advocates & Solicitors" width={120} height={48} unoptimized preload style={{ height: "38px", width: "auto" }} />
          </Link>
          <div className="nav-brand-text">
            <span className="nav-brand-title">SLR Centre</span>
            <span className="nav-brand-subtitle">Global Law &amp; Geoeconomics</span>
          </div>
        </div>

        <div className="nav-menu" id="nav-menu">
          {/* RESEARCH */}
          <div {...menuProps("research")}>
            <Link href="/research" className={`nav-link ${isActive("/research") ? "is-active" : ""}`} aria-haspopup="true" aria-expanded={openMenu === "research"}>
              Research <span className="nav-item-chevron" aria-hidden="true" />
            </Link>
            <div className={`nav-dropdown ${openMenu === "research" ? "is-open" : ""}`}>
              <div>
                <span className="nav-dropdown-col-title">Research Wings</span>
                <div className="nav-dropdown-links">
                  {areasOfFocus.map((a) => (
                    <Link key={a.slug} href={`/research?area=${a.slug}`} className="nav-dropdown-link" onClick={closeAll}>
                      <span className="nav-dropdown-link-num">{a.num}</span> {a.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <span className="nav-dropdown-col-title">The Research Portal</span>
                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: 1.55 }}>
                  Five interconnected domains — the analytical foundation for everything the Centre publishes.
                </p>
              </div>
              <div className="nav-dropdown-footer">
                <Link href="/research" className="nav-dropdown-footer-link" onClick={closeAll}>View the Research Portal →</Link>
              </div>
            </div>
          </div>

          {/* SECTORS */}
          <div {...menuProps("sectors")}>
            <Link href="/sectors" className={`nav-link ${isActive("/sectors") ? "is-active" : ""}`} aria-haspopup="true" aria-expanded={openMenu === "sectors"}>
              Sectors <span className="nav-item-chevron" aria-hidden="true" />
            </Link>
            <div className={`nav-dropdown ${openMenu === "sectors" ? "is-open" : ""}`}>
              <div>
                <span className="nav-dropdown-col-title">Priority Sectors</span>
                <div className="nav-dropdown-links">
                  {sectors.slice(0, 4).map((s) => (
                    <Link key={s.slug} href={`/sectors/${s.slug}`} className="nav-dropdown-link" onClick={closeAll}>
                      <span className="nav-dropdown-link-num">{s.num}</span> {s.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <span className="nav-dropdown-col-title">&nbsp;</span>
                <div className="nav-dropdown-links">
                  {sectors.slice(4).map((s) => (
                    <Link key={s.slug} href={`/sectors/${s.slug}`} className="nav-dropdown-link" onClick={closeAll}>
                      <span className="nav-dropdown-link-num">{s.num}</span> {s.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="nav-dropdown-footer">
                <Link href="/sectors" className="nav-dropdown-footer-link" onClick={closeAll}>Open the Sector Observatory →</Link>
              </div>
            </div>
          </div>

          {/* GEOGRAPHIES */}
          <div {...menuProps("geographies")}>
            <Link href="/geographies" className={`nav-link ${isActive("/geographies") ? "is-active" : ""}`} aria-haspopup="true" aria-expanded={openMenu === "geographies"}>
              Geographies <span className="nav-item-chevron" aria-hidden="true" />
            </Link>
            <div className={`nav-dropdown ${openMenu === "geographies" ? "is-open" : ""}`}>
              <div>
                <span className="nav-dropdown-col-title">Regions</span>
                <div className="nav-dropdown-links">
                  {geographies.slice(0, 4).map((g) => (
                    <Link key={g.slug} href={`/geographies/${g.slug}`} className="nav-dropdown-link" onClick={closeAll}>
                      {g.name}{g.isAnchor ? " ★" : ""}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <span className="nav-dropdown-col-title">&nbsp;</span>
                <div className="nav-dropdown-links">
                  {geographies.slice(4).map((g) => (
                    <Link key={g.slug} href={`/geographies/${g.slug}`} className="nav-dropdown-link" onClick={closeAll}>
                      {g.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="nav-dropdown-footer" style={{ display: "flex", justifyContent: "space-between" }}>
                <Link href="/geographies" className="nav-dropdown-footer-link" onClick={closeAll}>All Geographies →</Link>
                <Link href="/corridors" className="nav-dropdown-footer-link" onClick={closeAll}>Strategic Corridors →</Link>
              </div>
            </div>
          </div>

          {/* CORRIDORS (simple link) */}
          <Link href="/corridors" className={`nav-link ${isActive("/corridors") ? "is-active" : ""}`}>Corridors</Link>

          {/* INSIGHTS */}
          <div {...menuProps("insights")}>
            <Link href="/insights" className={`nav-link ${isActive("/insights") ? "is-active" : ""}`} aria-haspopup="true" aria-expanded={openMenu === "insights"}>
              Insights <span className="nav-item-chevron" aria-hidden="true" />
            </Link>
            <div className={`nav-dropdown ${openMenu === "insights" ? "is-open" : ""}`}>
              <div>
                <span className="nav-dropdown-col-title">Content Types</span>
                <div className="nav-dropdown-links">
                  {insightCategories.map((c) => (
                    <Link key={c} href={`/insights?category=${encodeURIComponent(c)}`} className="nav-dropdown-link" onClick={closeAll}>
                      {c}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <span className="nav-dropdown-col-title">Convening</span>
                <div className="nav-dropdown-links">
                  <Link href="/events" className="nav-dropdown-link" onClick={closeAll}>Events &amp; Dialogues</Link>
                </div>
              </div>
              <div className="nav-dropdown-footer">
                <Link href="/insights" className="nav-dropdown-footer-link" onClick={closeAll}>All Insights &amp; Publications →</Link>
              </div>
            </div>
          </div>

          {/* CAPABILITIES */}
          <div {...menuProps("capabilities")}>
            <Link href="/capabilities" className={`nav-link ${isActive("/capabilities") ? "is-active" : ""}`} aria-haspopup="true" aria-expanded={openMenu === "capabilities"}>
              Capabilities <span className="nav-item-chevron" aria-hidden="true" />
            </Link>
            <div className={`nav-dropdown ${openMenu === "capabilities" ? "is-open" : ""}`}>
              <div>
                <span className="nav-dropdown-col-title">Research &amp; Intelligence</span>
                <div className="nav-dropdown-links">
                  {offerings.filter((o) => o.pillar !== "advisory").slice(0, 5).map((o) => (
                    <Link key={o.slug} href={`/capabilities#${o.slug}`} className="nav-dropdown-link" onClick={closeAll}>{o.title}</Link>
                  ))}
                </div>
              </div>
              <div>
                <span className="nav-dropdown-col-title">Strategic Advisory</span>
                <div className="nav-dropdown-links">
                  {offerings.filter((o) => o.pillar === "advisory").slice(0, 6).map((o) => (
                    <Link key={o.slug} href={`/capabilities#${o.slug}`} className="nav-dropdown-link" onClick={closeAll}>{o.title}</Link>
                  ))}
                </div>
              </div>
              <div className="nav-dropdown-footer">
                <Link href="/capabilities" className="nav-dropdown-footer-link" onClick={closeAll}>All Capabilities →</Link>
              </div>
            </div>
          </div>

          <Link href="/about" className={`nav-link ${isActive("/about") ? "is-active" : ""}`}>About</Link>
        </div>

        <div className="nav-actions">
          <SearchTrigger variant="nav" />
          <Link href="/engage" className="nav-btn-cta">Engage the Centre</Link>
          <button
            ref={toggleRef}
            className={`nav-mobile-toggle ${mobileOpen ? "active" : ""}`}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer-scrim ${mobileOpen ? "is-open" : ""}`} onClick={() => setMobileOpen(false)} aria-hidden="true" />
      <div
        className={`mobile-drawer-panel ${mobileOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        inert={!mobileOpen}
      >
        <div className="mobile-drawer-top">
          <button ref={closeBtnRef} className="mobile-drawer-close" aria-label="Close menu" onClick={() => setMobileOpen(false)}>✕</button>
        </div>

        <div className="mobile-drawer-search" onClick={() => setMobileOpen(false)}>
          <SearchTrigger variant="drawer" />
        </div>

        <MobileSection
          label="Research"
          id="research"
          open={mobileSection === "research"}
          onToggle={() => setMobileSection(mobileSection === "research" ? null : "research")}
          allHref="/research"
          allLabel="Research Portal"
          onNavigate={() => setMobileOpen(false)}
        >
          {areasOfFocus.map((a) => (
            <Link key={a.slug} href={`/research?area=${a.slug}`} onClick={() => setMobileOpen(false)}>{a.num} {a.title}</Link>
          ))}
        </MobileSection>

        <MobileSection
          label="Sectors"
          id="sectors"
          open={mobileSection === "sectors"}
          onToggle={() => setMobileSection(mobileSection === "sectors" ? null : "sectors")}
          allHref="/sectors"
          allLabel="Sector Observatory"
          onNavigate={() => setMobileOpen(false)}
        >
          {sectors.map((s) => (
            <Link key={s.slug} href={`/sectors/${s.slug}`} onClick={() => setMobileOpen(false)}>{s.title}</Link>
          ))}
        </MobileSection>

        <MobileSection
          label="Geographies"
          id="geographies"
          open={mobileSection === "geographies"}
          onToggle={() => setMobileSection(mobileSection === "geographies" ? null : "geographies")}
          allHref="/geographies"
          allLabel="All Geographies"
          onNavigate={() => setMobileOpen(false)}
        >
          {geographies.map((g) => (
            <Link key={g.slug} href={`/geographies/${g.slug}`} onClick={() => setMobileOpen(false)}>{g.name}</Link>
          ))}
          <Link href="/corridors" onClick={() => setMobileOpen(false)}>Strategic Corridors</Link>
        </MobileSection>

        <MobileSection
          label="Insights"
          id="insights"
          open={mobileSection === "insights"}
          onToggle={() => setMobileSection(mobileSection === "insights" ? null : "insights")}
          allHref="/insights"
          allLabel="All Insights"
          onNavigate={() => setMobileOpen(false)}
        >
          {insightCategories.map((c) => (
            <Link key={c} href={`/insights?category=${encodeURIComponent(c)}`} onClick={() => setMobileOpen(false)}>{c}</Link>
          ))}
          <Link href="/events" onClick={() => setMobileOpen(false)}>Events &amp; Dialogues</Link>
        </MobileSection>

        <Link href="/capabilities" className="mobile-nav-simple-link" onClick={() => setMobileOpen(false)}>Capabilities</Link>
        <Link href="/about" className="mobile-nav-simple-link" onClick={() => setMobileOpen(false)}>About</Link>

        <div className="mobile-drawer-cta">
          <Link href="/engage" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Engage the Centre</Link>
        </div>
      </div>
    </>
  );
}

function MobileSection({
  label,
  open,
  onToggle,
  allHref,
  allLabel,
  onNavigate,
  children,
}: {
  label: string;
  id: string;
  open: boolean;
  onToggle: () => void;
  allHref: string;
  allLabel: string;
  onNavigate: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="mobile-nav-section">
      <button className="mobile-nav-toggle" onClick={onToggle} aria-expanded={open}>
        {label}
        <span className="mobile-nav-toggle-symbol">{open ? "−" : "+"}</span>
      </button>
      <div className={`mobile-nav-sublist ${open ? "is-open" : ""}`}>
        {children}
        <Link href={allHref} onClick={onNavigate} style={{ color: "var(--color-gold-light)" }}>
          {allLabel} →
        </Link>
      </div>
    </div>
  );
}
