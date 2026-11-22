import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only badge; keep it clear of the sound toggle in the bottom-left.
  devIndicators: { position: "bottom-right" },
  async redirects() {
    return [
      // One canonical host: send bare aethyl.com to www.aethyl.com (308).
      // If the domain is also configured in the hosting dashboard (e.g. Vercel),
      // set apex -> www there too, never the reverse, or this will loop.
      {
        source: "/:path*",
        has: [{ type: "host", value: "aethyl.com" }],
        destination: "https://www.aethyl.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
