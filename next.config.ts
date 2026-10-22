import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Licensed photography is served from Unsplash's CDN (see src/lib/images.ts).
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-**" }],
  },
};

export default nextConfig;
