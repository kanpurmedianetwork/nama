import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "nexudyam.in",
          },
        ],
        destination: "https://www.nexudyam.in/:path*",
        permanent: true,
      },
      {
        source: "/artist-management",
        destination: "/ecom-websites",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Permissions-Policy",
            value: "join-ad-interest-group=(), run-ad-auction=(), shared-storage=(), shared-storage-select-url=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
