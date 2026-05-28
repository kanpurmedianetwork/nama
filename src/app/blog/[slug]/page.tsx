import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return { title: "Post Not Found │ Nexudyam" };
  }

  return {
    title: `${post.title} │ Nexudyam Blog`,
    description: post.excerpt,
  };
}

function renderContent(content: string[]) {
  return content.map((block, index) => {
    // H2 heading
    if (block.startsWith("## ")) {
      return (
        <h2 key={index} className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
          {block.replace("## ", "")}
        </h2>
      );
    }

    // Process bold text within paragraphs
    const parts = block.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={i} className="text-foreground">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd
        type="Article"
        data={{
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: {
            "@type": "Organization",
            name: "Nexudyam",
            url: "https://www.nexudyam.in",
          },
          publisher: {
            "@type": "Organization",
            name: "Nexudyam",
            url: "https://www.nexudyam.in",
          },
        }}
      />
      <article className="py-20 md:py-32 bg-background min-h-screen">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>
          
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground mb-6">
              <span className="bg-surface border border-border px-3 py-1 rounded-full text-xs font-bold text-foreground font-sans">
                {post.category}
              </span>
              <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-foreground pl-6">
              {post.excerpt}
            </p>
          </header>
          
          <div>
            {renderContent(post.content)}
          </div>

          {/* Post Footer CTA */}
          <div className="mt-16 p-8 bg-surface border border-border rounded-2xl text-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Ready to grow your business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Nexudyam helps small businesses across India build their brand and get found online — starting at just ₹4,999/month.
            </p>
            <a
              href="https://wa.me/919161881100"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-foreground text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors"
            >
              Get a Free Audit →
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
