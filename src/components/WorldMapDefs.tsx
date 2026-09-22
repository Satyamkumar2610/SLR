import { WORLD_LAND_PATH } from "@/lib/worldMap";

// The world landmass path is ~60KB of coordinate data — rendered once here
// and referenced everywhere else via <use href="#world-land-mass">, so the
// page payload never repeats it per corridor row.
export default function WorldMapDefs() {
  return (
    <svg aria-hidden="true" style={{ position: "absolute", width: 0, height: 0 }}>
      <defs>
        <path id="world-land-mass" d={WORLD_LAND_PATH} />
      </defs>
    </svg>
  );
}
