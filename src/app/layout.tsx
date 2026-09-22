import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MotionRoot from "@/components/MotionRoot";

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

export const metadata: Metadata = {
  title: "SLR Centre for Global Law, Geoeconomics & Emerging Technologies",
  description: "Rigorous research, applied intelligence, and strategic advisory at the intersection of law, economics, and emerging technology. The SLR Centre analyses the forces reshaping the world.",
  icons: {
    icon: "/assets/logo-slr-navy.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable}`}>
      <body>
        <MotionRoot>
          <Navigation />
          {children}
          <Footer />
        </MotionRoot>
      </body>
    </html>
  );
}
