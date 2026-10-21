module.exports = [
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
    source: "/blog/ai-content-marketing-vs-traditional-agency-comparison",
    destination: "/blog/ai-content-marketing-vs-traditional",
    permanent: true,
  },
  {
    source: "/blog/google-business-profile-setup-india-msme",
    destination: "/blog/google-business-profile-kanpur",
    permanent: true,
  },
];
