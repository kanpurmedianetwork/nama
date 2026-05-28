import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nexudyam.in";

  // Base routes
  const routes = [
    "",
    "/services",
    "/pricing",
    "/artist-management",
    "/events",
    "/about",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog posts routes
  const blogRoutes = [
    "/blog/get-found-on-google-2026",
    "/blog/google-business-profile-kanpur",
    "/blog/ai-content-marketing-vs-traditional",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
