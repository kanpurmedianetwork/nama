import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
