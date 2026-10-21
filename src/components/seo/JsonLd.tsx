import React from "react";

export interface JsonLdProps {
  type?: string;
  data: Record<string, any>;
}

export function JsonLd({ type, data }: JsonLdProps) {
  const jsonLd = type
    ? {
        "@context": "https://schema.org",
        "@type": type,
        ...data,
      }
    : data["@context"]
    ? data
    : {
        "@context": "https://schema.org",
        ...data,
      };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
