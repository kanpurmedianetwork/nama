import React from "react";

export interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organization = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nexudyam",
  url: "https://www.nexudyam.in",
  logo: "https://www.nexudyam.in/logo.png",
  image: "https://www.nexudyam.in/og/home.png",
  email: "support@nexudyam.in",
  telephone: "+91-9161881100",
  priceRange: "₹4,999 - ₹18,999",
  description:
    "Nexudyam is a digital marketing, website development, and branding agency based in Kanpur, Uttar Pradesh, helping startups and MSMEs grow.",
  areaServed: [
    {
      "@type": "City",
      name: "Kanpur",
    },
    {
      "@type": "State",
      name: "Uttar Pradesh",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  sameAs: [],
};

export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nexudyam",
  url: "https://www.nexudyam.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.nexudyam.in/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export function faqPage(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function article({
  title,
  description,
  datePublished,
  dateModified,
  authorName = "Akash Kumar",
  url,
  imageUrl = "https://www.nexudyam.in/og/default.png",
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  url: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: datePublished,
    dateModified: dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Person",
      name: authorName,
      jobTitle: "Founder & Lead Consultant",
    },
    publisher: {
      "@type": "Organization",
      name: "Nexudyam",
      logo: {
        "@type": "ImageObject",
        url: "https://www.nexudyam.in/logo.png",
      },
    },
  };
}

export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `https://www.nexudyam.in${item.url}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  url,
  serviceType,
  price,
  priceCurrency = "INR",
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  price?: string | number;
  priceCurrency?: string;
}) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType,
    provider: {
      "@type": "LocalBusiness",
      name: "Nexudyam",
      url: "https://www.nexudyam.in",
    },
    areaServed: {
      "@type": "City",
      name: "Kanpur",
    },
  };

  if (price) {
    schema.offers = {
      "@type": "Offer",
      price: typeof price === "number" ? price.toString() : price.replace(/[^0-9]/g, ""),
      priceCurrency,
    };
  }

  return schema;
}
