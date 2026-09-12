import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Digital Marketing Blog & Guides for Indian MSMEs | Nexudyam",
  description: "Read actionable guides on digital marketing, local SEO, Google Business Profile, and Meta Ads for businesses in Kanpur and India.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Digital Marketing Blog & Guides for Indian MSMEs | Nexudyam",
    description: "Read actionable guides on digital marketing, local SEO, Google Business Profile, and Meta Ads for businesses in Kanpur and India.",
    url: "https://www.nexudyam.in/blog",
    siteName: "Nexudyam",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Nexudyam Digital Marketing Agency Kanpur logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Blog & Guides for Indian MSMEs | Nexudyam",
    description: "Read actionable guides on digital marketing, local SEO, Google Business Profile, and Meta Ads for businesses in Kanpur and India.",
    images: ["/logo.svg"],
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd 
        type="BreadcrumbList"
        data={{
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.nexudyam.in"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: "https://www.nexudyam.in/blog"
            }
          ]
        }}
      />
      <div className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Digital Marketing Blog & Guides for MSMEs
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We share actionable insights for your business growth. Read about the latest trends in digital marketing, branding, and local SEO in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.id}
              className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video bg-surface border-b border-border p-6 flex items-end justify-start">
                <span className="bg-white border border-border px-3 py-1 rounded-full text-xs font-bold text-foreground">
                  {post.category}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-foreground/70 transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center text-foreground font-bold text-sm mt-auto">
                  Read article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
