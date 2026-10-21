import { MetadataRoute } from "next";
import { execSync } from "child_process";
import { blogPosts } from "@/lib/blog-data";

function getFileLastMod(filePath: string): Date {
  try {
    const stdout = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    }).trim();
    if (stdout) {
      const parsed = new Date(stdout);
      if (!isNaN(parsed.getTime())) {
        return parsed;
      }
    }
  } catch {
    // fallback if git is unavailable in runtime
  }
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nexudyam.in";

  const staticPages: { route: string; file: string }[] = [
    { route: "", file: "src/app/page.tsx" },
    { route: "/services", file: "src/app/services/page.tsx" },
    { route: "/services/website-development-kanpur", file: "src/app/services/website-development-kanpur/page.tsx" },
    { route: "/services/google-business-profile-kanpur", file: "src/app/services/google-business-profile-kanpur/page.tsx" },
    { route: "/services/meta-google-ads-kanpur", file: "src/app/services/meta-google-ads-kanpur/page.tsx" },
    { route: "/services/brand-identity-kanpur", file: "src/app/services/brand-identity-kanpur/page.tsx" },
    { route: "/services/social-media-marketing-kanpur", file: "src/app/services/social-media-marketing-kanpur/page.tsx" },
    { route: "/services/ai-content-marketing", file: "src/app/services/ai-content-marketing/page.tsx" },
    { route: "/pricing", file: "src/app/pricing/page.tsx" },
    { route: "/ecom-websites", file: "src/app/ecom-websites/page.tsx" },
    { route: "/artist-management", file: "src/app/artist-management/page.tsx" },
    { route: "/events", file: "src/app/events/page.tsx" },
    { route: "/about", file: "src/app/about/page.tsx" },
    { route: "/contact", file: "src/app/contact/page.tsx" },
    { route: "/blog", file: "src/app/blog/page.tsx" },
    { route: "/privacy", file: "src/app/privacy/page.tsx" },
    { route: "/terms", file: "src/app/terms/page.tsx" },
  ];

  const routes: MetadataRoute.Sitemap = staticPages.map(({ route, file }) => ({
    url: `${baseUrl}${route}`,
    lastModified: getFileLastMod(file),
  }));

  const blogDataLastMod = getFileLastMod("src/lib/blog-data.ts");

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: blogDataLastMod,
  }));

  return [...routes, ...blogRoutes];
}
