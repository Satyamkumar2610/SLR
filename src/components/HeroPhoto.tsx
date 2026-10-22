import Image from "next/image";
import type { Photo } from "@/lib/images";

/** Photograph behind a page hero, toned into the navy band by an overlay. */
export default function HeroPhoto({ photo, position = "center" }: { photo: Photo; position?: string }) {
  return (
    <div className="hero-photo" aria-hidden="true">
      <Image src={photo.src} alt="" fill preload sizes="100vw" style={{ objectPosition: position }} />
    </div>
  );
}
