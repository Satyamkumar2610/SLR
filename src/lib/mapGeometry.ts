/**
 * Shared geometry for every map on the site.
 *
 * `WORLD_LAND_PATH` in ./worldMap.ts was generated with d3-geo's
 * equirectangular projection fitted to the whole globe inside a 2000 × 1000
 * box. That makes the projection exactly linear, so longitude/latitude can be
 * converted here without pulling d3 into the bundle:
 *
 *   x = (lon + 180) / 360 * 2000
 *   y = (90  - lat) / 180 * 1000
 *
 * Every node position in GEO_MAP_POSITIONS sits on that same grid, so
 * graticules, routes and land all line up.
 */

export const PROJECTION_WIDTH = 2000;
export const PROJECTION_HEIGHT = 1000;

export interface Point {
  x: number;
  y: number;
}

export function project(lon: number, lat: number): Point {
  return {
    x: ((lon + 180) / 360) * PROJECTION_WIDTH,
    y: ((90 - lat) / 180) * PROJECTION_HEIGHT,
  };
}

export interface ViewBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function parseViewBox(viewBox: string): ViewBox {
  const [x, y, width, height] = viewBox.trim().split(/\s+/).map(Number);
  return { x, y, width, height };
}

/**
 * Meridians and parallels clipped to `viewBox`, as one path — a quiet
 * geographic grid behind the land, never a decorative pattern.
 */
export function graticulePath(viewBox: string, stepDegrees = 20): string {
  const { x, y, width, height } = parseViewBox(viewBox);
  const right = x + width;
  const bottom = y + height;
  const segments: string[] = [];

  for (let lon = -180; lon <= 180; lon += stepDegrees) {
    const { x: gx } = project(lon, 0);
    if (gx >= x && gx <= right) segments.push(`M${round(gx)},${round(y)}V${round(bottom)}`);
  }
  for (let lat = -80; lat <= 80; lat += stepDegrees) {
    const { y: gy } = project(0, lat);
    if (gy >= y && gy <= bottom) segments.push(`M${round(x)},${round(gy)}H${round(right)}`);
  }

  return segments.join("");
}

/** A polyline through the given points, gently bowed so routes read as arcs. */
export function routePath(points: Point[]): string {
  if (points.length < 2) return "";
  let d = `M${round(points[0].x)},${round(points[0].y)}`;
  for (let i = 1; i < points.length; i++) {
    const from = points[i - 1];
    const to = points[i];
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    // Bow perpendicular to the segment, scaled to its length, so short hops
    // stay nearly straight and long ones curve like a great-circle route.
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.hypot(dx, dy);
    const bow = length * 0.12;
    const cx = midX + (dy / length) * bow;
    const cy = midY - (dx / length) * bow;
    d += `Q${round(cx)},${round(cy)} ${round(to.x)},${round(to.y)}`;
  }
  return d;
}

/**
 * Approximate length of a route, used to seed the stroke-dash draw-on
 * animation. Curvature adds a little over the straight-line distance.
 */
export function routeLength(points: Point[]): number {
  let total = 0;
  for (let i = 1; i < points.length; i++) {
    total += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
  }
  return Math.round(total * 1.05);
}

function round(n: number) {
  return Math.round(n * 10) / 10;
}
