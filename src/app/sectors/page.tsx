import type { Metadata } from "next";
import Link from "next/link";
import SectorDirectory from "@/components/SectorDirectory";
import { sectorsIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sector Observatory — SLR Centre",
  description: sectorsIntro,
};

export default function SectorsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Sectors</span>
          </div>
          <span className="eyebrow eyebrow-light">Sector Observatory</span>
          <h1 className="page-hero-title">Priority Sectors</h1>
          <p className="page-hero-lead">
            {sectorsIntro}
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <SectorDirectory />
        </div>
      </section>
    </main>
  );
}
