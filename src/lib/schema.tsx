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
  sameAs: [
    "https://share.google/B15NK2QgaMEn9hpoX",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Neha Gandhi",
      },
      datePublished: "2026-09-25",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "I'm really happy with my experience with the team! They're warm, supportive, creative, and always willing to understand exactly what I'm looking for. I truly appreciate their effort and personal attention. It's been lovely working with them, and I would happily recommend them to anyone looking for a great digital marketing team",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Krishang Gandhi",
      },
      datePublished: "2026-09-25",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "NexUdyam ke saath mera experience kaafi achha raha. Starting se hi team kaafi professional aur cooperative thi. Inhone meri requirements ko properly samjha aur uske according suggestions diye, jo mujhe kaafi useful lage. Communication bhi smooth raha aur kaam ko lekar response time bhi achha tha. Sabse achhi baat ye lagi ki sirf service provide karne ke liye nahi, but business ko actually kaise grow kiya ja sakta hai uss perspective se bhi guidance di. Kanpur mein digital marketing aur branding ke liye definitely ek baar NexUdyam ko consider kar sakte ho. Overall experience very positive raha. Keep up the good work!",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Organization",
        name: "Clamss International Limited",
      },
      datePublished: "2026-05-30",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Had a great experience with NexUdyam Brand Launch Agency. Their team is professional, supportive, and highly dedicated to helping brands grow and reach the right audience. The collaboration process was smooth, communication was excellent, and the overall service quality exceeded expectations. Highly recommended for startups, businesses, and brands looking for strong promotion and launch support. 🚀",
    },
  ],
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
