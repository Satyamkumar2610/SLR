"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="site-nav" role="navigation" aria-label="Main Navigation">
      <div className="nav-brand">
        <Link href="/" aria-label="SLR Home">
          <img src="/assets/logo-slr-white.svg" alt="SLR Advocates & Solicitors" />
        </Link>
        <div className="nav-brand-text">
          <span className="nav-brand-title">SLR Centre</span>
          <span className="nav-brand-subtitle">Global Law & Geoeconomics</span>
        </div>
      </div>

      <div className={`nav-menu ${isOpen ? "active" : ""}`} id="nav-menu">
        <Link href="/areas-of-focus" className="nav-link">Areas of Focus</Link>
        <Link href="/sectors" className="nav-link">Sectors</Link>
        <Link href="/what-we-do" className="nav-link">What We Do</Link>
        <Link href="/geographies" className="nav-link">Geographies</Link>
        <Link href="/insights" className="nav-link">Insights</Link>
        <Link href="/about" className="nav-link">About</Link>
      </div>

      <div className="nav-actions">
        <Link href="/engage" className="nav-btn-cta">Engage the Centre</Link>
        <button 
          className={`nav-mobile-toggle ${isOpen ? "active" : ""}`} 
          id="mobile-toggle" 
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
