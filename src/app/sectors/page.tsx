import type { Metadata } from "next";
import Link from "next/link";
import SectorDirectory from "@/components/SectorDirectory";
import { sectors } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sector Observatory — SLR Centre",
  description: "Applied research across the sectors where geopolitical, regulatory, and technological forces increasingly converge.",
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
          <h1 className="page-hero-title">Where geopolitics meets industry</h1>
          <p className="page-hero-lead">
            Applied research across the {sectors.length} priority sectors where geopolitical, regulatory, and
            technological forces increasingly converge and interact.
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
