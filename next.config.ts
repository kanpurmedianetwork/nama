import type { NextConfig } from "next";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const redirectsList = require("./redirects");

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return redirectsList;
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
