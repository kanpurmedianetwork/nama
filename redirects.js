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
    permanent: true,
  },
  // Permanent 301 redirects for service URLs dropping -kanpur
  {
    source: "/services/website-development-kanpur",
    destination: "/services/website-development",
    permanent: true,
  },
  {
    source: "/services/google-business-profile-kanpur",
    destination: "/services/google-business-profile",
    permanent: true,
  },
  {
    source: "/services/meta-google-ads-kanpur",
    destination: "/services/meta-google-ads",
    permanent: true,
  },
  {
    source: "/services/brand-identity-kanpur",
    destination: "/services/brand-identity",
    permanent: true,
  },
  {
    source: "/services/social-media-marketing-kanpur",
    destination: "/services/social-media-marketing",
    permanent: true,
  },
  // Permanent 301 redirects for de-localized blog slugs
  {
    source: "/blog/ai-content-marketing-vs-traditional-agency-comparison",
    destination: "/blog/ai-content-marketing-vs-traditional",
    permanent: true,
  },
  {
    source: "/blog/google-business-profile-setup-india-msme",
    destination: "/blog/google-business-profile-guide",
    permanent: true,
  },
  {
    source: "/blog/google-business-profile-kanpur",
    destination: "/blog/google-business-profile-guide",
    permanent: true,
  },
  {
    source: "/blog/digital-marketing-cost-kanpur",
    destination: "/blog/digital-marketing-cost-india",
    permanent: true,
  },
  {
    source: "/blog/best-digital-marketing-agency-kanpur",
    destination: "/blog/best-digital-marketing-agency-guide",
    permanent: true,
  },
  {
    source: "/blog/rank-google-maps-local-seo-up",
    destination: "/blog/rank-google-maps-local-seo-guide",
    permanent: true,
  },
];
