import Image from "next/image";
import type { Photo } from "@/lib/images";

/**
 * The Centre's statement set large, optionally over a photograph.
 */
export default function ScrollStatement({ text, eyebrow, photo }: { text: string; eyebrow?: string; photo?: Photo }) {
  return (
    <section className={`section-statement ${photo ? "section-statement-photo" : ""}`} aria-label={eyebrow}>
      {photo && (
        <div className="statement-photo" aria-hidden="true">
          <Image src={photo.src} alt="" fill sizes="100vw" />
        </div>
      )}
      <div className="stage-container">
        <div className="statement-inner">
          {eyebrow && <span className={`eyebrow ${photo ? "eyebrow-light" : ""}`}>{eyebrow}</span>}
          <p className="statement-text">{text}</p>
        </div>
      </div>
    </section>
  );
}
