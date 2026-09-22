import { geographies, corridors } from "@/lib/content";

/**
 * A restrained schematic (not a literal map) showing which geographies
 * each strategic corridor connects — thin navy lines, gold nodes, ivory
 * canvas. Node order is a rough west-to-east arrangement; positions are
 * illustrative, not cartographic. No quantitative flows are implied —
 * only the relationships stated in the Centre's own corridor
 * descriptions.
 *
 * Pass `highlightSlug` to render a compact "glass" variant that keeps the
 * full network visible but brings only the requested corridor's route and
 * geographies into focus — used inline in the corridor directory instead
 * of a plain list of keyword tags.
 */

const order = [
  "north-america",
  "latin-america",
  "africa",
  "europe",
  "middle-east",
  "india-south-asia",
  "asean",
  "indo-pacific",
];

const nodePositions: Record<string, { x: number; y: number }> = {
  "north-america": { x: 60, y: 70 },
  "latin-america": { x: 110, y: 190 },
  africa: { x: 260, y: 190 },
  europe: { x: 280, y: 60 },
  "middle-east": { x: 400, y: 110 },
  "india-south-asia": { x: 520, y: 140 },
  asean: { x: 640, y: 170 },
  "indo-pacific": { x: 700, y: 80 },
};

export default function CorridorDiagram({
  highlightSlug,
  variant = "full",
}: {
  highlightSlug?: string;
  variant?: "full" | "compact";
}) {
  const nodes = order
    .map((slug) => geographies.find((g) => g.slug === slug))
    .filter(Boolean) as typeof geographies;

  const highlighted = highlightSlug ? corridors.find((c) => c.slug === highlightSlug) : undefined;
  const relevant = highlighted ? new Set(highlighted.geographies) : null;

  return (
    <svg
      className={`corridor-diagram ${variant === "compact" ? "corridor-diagram-compact" : ""}`}
      viewBox="0 0 760 240"
      role="img"
      aria-label={
        highlighted
          ? `Schematic map highlighting the geographies connected by the ${highlighted.name} corridor`
          : "Schematic diagram of geographies connected by SLR's tracked strategic corridors"
      }
    >
      {corridors.map((corridor) => {
        const pts = corridor.geographies
          .map((slug) => nodePositions[slug])
          .filter(Boolean);
        if (pts.length < 2) return null;
        const d = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
        const isActive = highlightSlug === corridor.slug;
        return (
          <path
            key={corridor.slug}
            d={d}
            className={[
              "corridor-diagram-line",
              isActive ? "is-active" : "",
              relevant && !isActive ? "is-dimmed" : "",
            ].join(" ").trim()}
          />
        );
      })}

      {nodes.map((geo) => {
        const pos = nodePositions[geo.slug];
        const isRelevant = !relevant || relevant.has(geo.slug);
        return (
          <g key={geo.slug} className={relevant && !isRelevant ? "is-dimmed" : ""}>
            <circle cx={pos.x} cy={pos.y} r={geo.isAnchor ? 7 : 5} className="corridor-diagram-node" />
            {(!relevant || isRelevant) && (
              <text
                x={pos.x}
                y={pos.y - 12}
                textAnchor="middle"
                className="corridor-diagram-node-label"
              >
                {geo.name.split(" & ")[0]}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
