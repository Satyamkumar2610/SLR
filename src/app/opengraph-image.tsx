import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "SLR Centre for Global Law, Geoeconomics & Emerging Technologies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const svg = await readFile(join(process.cwd(), "public/brand/slr-lockup-ivory.svg"));
  const logo = `data:image/svg+xml;base64,${svg.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #06132B 0%, #0A1F44 55%, #3B506E 100%)",
          color: "#FFFFFF",
        }}
      >
        <img src={logo} width={431} height={80} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ width: 72, height: 3, background: "#B08D57" }} />
          <span style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.08, maxWidth: 920 }}>
            Navigating the Forces Reshaping the World
          </span>
          <span style={{ fontSize: 26, color: "rgba(255,255,255,0.75)", maxWidth: 900 }}>
            Research, intelligence and strategic advisory at the intersection of law, economics and emerging technology.
          </span>
        </div>
      </div>
    ),
    size
  );
}
