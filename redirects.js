module.exports = [
  // 301 Canonical host redirect (non-www to www)
  {
    source: "/:path*",
    has: [
      {
        type: "host",
        value: "nexudyam.in",
      },
    ],
    destination: "https://www.nexudyam.in/:path*",
    statusCode: 301,
  },
  // Permanent 301 redirects for service URLs dropping -kanpur
  {
    source: "/services/website-development-kanpur",
    destination: "/services/website-development",
    statusCode: 301,
  },
  {
    source: "/services/google-business-profile-kanpur",
    destination: "/services/google-business-profile",
    statusCode: 301,
  },
  {
    source: "/services/meta-google-ads-kanpur",
    destination: "/services/meta-google-ads",
    statusCode: 301,
  },
  {
    source: "/services/brand-identity-kanpur",
    destination: "/services/brand-identity",
    statusCode: 301,
  },
  {
    source: "/services/social-media-marketing-kanpur",
    destination: "/services/social-media-marketing",
    statusCode: 301,
  },
  // Permanent 301 redirects for de-localized blog slugs
  {
    source: "/blog/ai-content-marketing-vs-traditional-agency-comparison",
    destination: "/blog/ai-content-marketing-vs-traditional",
    statusCode: 301,
  },
  {
    source: "/blog/google-business-profile-setup-india-msme",
    destination: "/blog/google-business-profile-guide",
    statusCode: 301,
  },
  {
    source: "/blog/google-business-profile-kanpur",
    destination: "/blog/google-business-profile-guide",
    statusCode: 301,
  },
  {
    source: "/blog/digital-marketing-cost-kanpur",
    destination: "/blog/digital-marketing-cost-india",
    statusCode: 301,
  },
  {
    source: "/blog/best-digital-marketing-agency-kanpur",
    destination: "/blog/best-digital-marketing-agency-guide",
    statusCode: 301,
  },
  {
    source: "/blog/rank-google-maps-local-seo-up",
    destination: "/blog/rank-google-maps-local-seo-guide",
    statusCode: 301,
  },
  // Permanent 301 redirect for deprecated /events route
  {
    source: "/events",
    destination: "/services",
    statusCode: 301,
  },
];
