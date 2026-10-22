import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Image Credits — SLR Centre",
  description: "Sources and licences for the photography used on this website.",
};

export default function ImageCreditsPage() {
  return (
    <main>
      <section className="page-hero" style={{ paddingBottom: "40px" }}>
        <div className="stage-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Image Credits</span>
          </div>
          <span className="eyebrow eyebrow-light">Legal</span>
          <h1 className="page-hero-title">Image Credits</h1>
          <p className="page-hero-lead">
            Photography on this website is used under the Unsplash License or is in the public domain. We thank the
            photographers and institutions below.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="stage-container">
          <div className="credits-list">
            {Object.values(photos).map((photo) => (
              <figure className="credit-card" key={photo.src}>
                <div className="credit-thumb">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 600px) 100vw, 320px" />
                </div>
                <figcaption>
                  <span className="credit-subject">{photo.subject}</span>
                  <p className="credit-meta">
                    Photo by{" "}
                    <a href={photo.photographerUrl} target="_blank" rel="noopener noreferrer">{photo.photographer}</a>
                    {" · "}
                    <a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer">{photo.licence}</a>
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
