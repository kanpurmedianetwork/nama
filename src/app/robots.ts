import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: [
          "OAI-SearchBot",
          "GPTBot",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
    ],
    sitemap: "https://www.nexudyam.in/sitemap.xml",
    host: "https://www.nexudyam.in",
  };
}
