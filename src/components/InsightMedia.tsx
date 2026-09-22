import Image from "next/image";
import { ViewTransition } from "react";
import type { Insight } from "@/lib/content";
import InsightArt from "@/components/InsightArt";

// The same name on list and article pages lets the image morph into place
// when a reader opens an insight.
export default function InsightMedia({
  insight,
  sizes,
  preload = false,
  className = "",
}: {
  insight: Insight;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <ViewTransition name={`insight-media-${insight.slug}`} share="morph" default="none">
      <div className={`insight-media ${className}`}>
        {insight.image ? (
          <Image src={insight.image.src} alt={insight.image.alt} fill sizes={sizes} preload={preload} />
        ) : (
          <InsightArt insight={insight} />
        )}
      </div>
    </ViewTransition>
  );
}
