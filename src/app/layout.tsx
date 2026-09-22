import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MotionRoot from "@/components/MotionRoot";
import SearchPalette from "@/components/SearchPalette";
import WorldMapDefs from "@/components/WorldMapDefs";

// Modern, professional typeface pairing: a geometric sans for UI/body copy
// and an editorial variable serif for headlines — self-hosted via next/font
// (no external network request, no layout shift). Both expose a CSS custom
// property so the existing `var(--font-sans)` / `var(--font-serif)` tokens
// in globals.css keep working everywhere without further changes.
const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans-face",
  display: "swap",
});

const fontSerif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif-face",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SLR Centre for Global Law, Geoeconomics & Emerging Technologies",
  description: "Rigorous research, applied intelligence, and strategic advisory at the intersection of law, economics, and emerging technology. The SLR Centre analyses the forces reshaping the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable}`}>
      <body>
        <WorldMapDefs />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <MotionRoot>
          <Navigation />
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
          <Footer />
        </MotionRoot>
        <SearchPalette />
      </body>
    </html>
  );
}
