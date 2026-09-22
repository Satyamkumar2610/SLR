import { ImageResponse } from "next/og";

export const alt = "SLR Centre for Global Law, Geoeconomics & Emerging Technologies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="72" height="72" viewBox="0 0 48 48">
            <path d="M24 4L44 24L24 44L4 24L24 4Z" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M24 10L38 24L24 38L10 24L24 10Z" fill="none" stroke="#D4BC8E" strokeWidth="1.4" />
            <path d="M24 16L32 24L24 32L16 24L24 16Z" fill="#D4BC8E" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: 4 }}>SLR CENTRE</span>
            <span style={{ fontSize: 20, color: "#B08D57", letterSpacing: 1 }}>Global Law &amp; Geoeconomics</span>
          </div>
        </div>
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
