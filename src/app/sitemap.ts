import { MetadataRoute } from "next";
import { execSync } from "child_process";
import { blogPosts } from "@/lib/blog-data";
import { solutionsData } from "@/lib/solutions-data";
import { useCasesData } from "@/lib/use-cases-data";
import { publishedCaseStudies } from "@/lib/case-studies-data";

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
    { route: "/services/website-development", file: "src/app/services/website-development/page.tsx" },
    { route: "/services/google-business-profile", file: "src/app/services/google-business-profile/page.tsx" },
    { route: "/services/meta-google-ads", file: "src/app/services/meta-google-ads/page.tsx" },
    { route: "/services/brand-identity", file: "src/app/services/brand-identity/page.tsx" },
    { route: "/services/social-media-marketing", file: "src/app/services/social-media-marketing/page.tsx" },
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
  const solutionsLastMod = getFileLastMod("src/lib/solutions-data.ts");
  const useCasesLastMod = getFileLastMod("src/lib/use-cases-data.ts");
  const caseStudiesLastMod = getFileLastMod("src/lib/case-studies-data.ts");

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: blogDataLastMod,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = solutionsData.map((solution) => ({
    url: `${baseUrl}/solutions/${solution.slug}`,
    lastModified: solutionsLastMod,
  }));

  const useCaseRoutes: MetadataRoute.Sitemap = useCasesData.map((useCase) => ({
    url: `${baseUrl}/use-cases/${useCase.slug}`,
    lastModified: useCasesLastMod,
  }));

  // Only published case studies (draft: false) are included
  const caseStudyRoutes: MetadataRoute.Sitemap = publishedCaseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: caseStudiesLastMod,
  }));

  return [...routes, ...blogRoutes, ...solutionRoutes, ...useCaseRoutes, ...caseStudyRoutes];
}
