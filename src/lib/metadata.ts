import type { Metadata } from "next";

export const BASE_URL = "https://www.nexudyam.in";

export interface PageMetadataProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Helper to generate consistent, SEO/AEO-aligned metadata for every route.
 * Guarantees that canonical, og:url, og:title, and og:description are aligned.
 * Uses literal '&' and never '&amp;'.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogImage = "/og/default.png",
  noIndex = false,
}: PageMetadataProps): Metadata {
  // Normalize path
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = cleanPath === "/" ? BASE_URL : `${BASE_URL}${cleanPath}`;
  const resolvedOgImage = ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: cleanPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Nexudyam",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: resolvedOgImage,
          width: 1200,
          height: 630,
          alt: "Nexudyam logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedOgImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/logo.png", type: "image/png" },
        { url: "/logo.svg", type: "image/svg+xml" },
      ],
      apple: "/logo.png",
      shortcut: "/favicon.ico",
    },
  };
}
