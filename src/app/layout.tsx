import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
