import { geographies, corridors } from "@/lib/content";

/**
 * A restrained schematic (not a literal map) showing which geographies
 * each strategic corridor connects — thin navy lines, gold nodes, ivory
 * canvas. Node order is a rough west-to-east arrangement; positions are
 * illustrative, not cartographic. No quantitative flows are implied —
 * only the relationships stated in the Centre's own corridor
 * descriptions.
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

export default function CorridorDiagram() {
  const nodes = order
    .map((slug) => geographies.find((g) => g.slug === slug))
    .filter(Boolean) as typeof geographies;

  return (
    <svg
      className="corridor-diagram"
      viewBox="0 0 760 240"
      role="img"
      aria-label="Schematic diagram of geographies connected by SLR's tracked strategic corridors"
      style={{ background: "var(--color-ivory)" }}
    >
      {corridors.map((corridor) => {
        const pts = corridor.geographies
          .map((slug) => nodePositions[slug])
          .filter(Boolean);
        if (pts.length < 2) return null;
        const d = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
        return (
          <path
            key={corridor.slug}
            d={d}
            stroke="var(--color-navy)"
            strokeWidth={1}
            strokeOpacity={0.35}
            fill="none"
          />
        );
      })}

      {nodes.map((geo) => {
        const pos = nodePositions[geo.slug];
        return (
          <g key={geo.slug}>
            <circle cx={pos.x} cy={pos.y} r={geo.isAnchor ? 7 : 5} fill="var(--color-gold)" />
            <text
              x={pos.x}
              y={pos.y - 12}
              textAnchor="middle"
              fontSize="10"
              fontFamily="var(--font-sans)"
              letterSpacing="0.02em"
              fill="var(--color-navy)"
            >
              {geo.name.split(" & ")[0]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
