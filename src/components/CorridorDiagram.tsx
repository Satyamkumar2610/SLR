import { geographies, corridors } from "@/lib/content";
import { WORLD_VIEWBOX, GEO_MAP_POSITIONS } from "@/lib/worldMap";
import { graticulePath, routePath } from "@/lib/mapGeometry";

/**
 * The strategic-corridor network drawn over an actual, geographically
 * projected world map (Natural Earth 110m land data, equirectangular —
 * see src/lib/worldMap.ts) rather than an abstract schematic: nodes sit at
 * real approximate coordinates for each geography, so the shape of each
 * corridor route reads as a real path across the globe. No quantitative
 * flows are implied — only the relationships stated in the Centre's own
 * corridor descriptions.
 *
 * Pass `highlightSlug` to keep the full network visible but bring only the
 * requested corridor's route and geographies into focus. The highlighted
 * route also carries a slow directional trace, so a corridor reads as a
 * system with a direction of travel rather than a static line.
 */

const grid = graticulePath(WORLD_VIEWBOX, 20);

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
      viewBox={WORLD_VIEWBOX}
      role="img"
      aria-label={
        highlighted
          ? `Map highlighting the geographies connected by the ${highlighted.name} corridor`
          : "World map of geographies connected by SLR's tracked strategic corridors"
      }
    >
      <path className="corridor-diagram-graticule" d={grid} />
      <use href="#world-land-mass" className="corridor-diagram-land" />

      {corridors.map((corridor) => {
        const pts = corridor.geographies
          .map((slug) => GEO_MAP_POSITIONS[slug])
          .filter(Boolean);
        if (pts.length < 2) return null;
        const d = routePath(pts);
        const isActive = highlightSlug === corridor.slug;
        return (
          <g key={corridor.slug}>
            <path
              d={d}
              className={[
                "corridor-diagram-line",
                isActive ? "is-active" : "",
                relevant && !isActive ? "is-dimmed" : "",
              ].join(" ").trim()}
            />
            {isActive && <path d={d} className="corridor-diagram-flow" />}
          </g>
        );
      })}

      {nodes.map((geo) => {
        const pos = GEO_MAP_POSITIONS[geo.slug];
        const isRelevant = !relevant || relevant.has(geo.slug);
        return (
          <g key={geo.slug} className={isRelevant ? (relevant ? "is-relevant" : "") : "is-dimmed"}>
            <circle cx={pos.x} cy={pos.y} r={geo.isAnchor ? 26 : 19} className="corridor-diagram-node-halo" />
            <circle cx={pos.x} cy={pos.y} r={geo.isAnchor ? 14 : 10} className="corridor-diagram-node" />
            {(!relevant || isRelevant) && (
              <text
                x={pos.x}
                y={pos.y - (geo.isAnchor ? 32 : 25)}
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
