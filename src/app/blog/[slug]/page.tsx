import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { JsonLd, article, breadcrumbs } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return { title: "Post Not Found | Nexudyam" };
  }

  return pageMetadata({
    title: `${post.title} | Nexudyam Blog`,
    description: post.excerpt,
    path: `/blog/${slug}`,
    ogImage: "/og/default.png",
  });
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
              <strong key={i} className="text-foreground font-semibold">
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

  const relatedPosts = (post.relatedSlugs || [])
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <>
      <JsonLd 
        data={breadcrumbs([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={article({
          title: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.lastUpdated || post.date,
          authorName: post.author,
          url: `https://www.nexudyam.in/blog/${post.slug}`,
          imageUrl: "https://www.nexudyam.in/og/default.png",
        })}
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
            <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-muted-foreground mb-6">
              <span className="bg-surface border border-border px-3 py-1 rounded-full text-xs font-bold text-foreground font-sans">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} /> Published: {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-sans text-xs bg-muted/40 px-2.5 py-0.5 rounded text-foreground">
                Last updated: {post.lastUpdated}
              </span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              {post.title}
            </h1>

            {/* Visible Author Byline */}
            <div className="flex items-center gap-3 p-4 bg-surface rounded-xl border border-border mb-6">
              <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm shrink-0">
                <User size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  By {post.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {post.authorRole} at Nexudyam
                </p>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-foreground pl-6">
              {post.excerpt}
            </p>
          </header>
          
          <div>
            {renderContent(post.content)}
          </div>

          {/* Internal Link to Matching Service Page (Task 8) */}
          {post.serviceLink && (
            <div className="my-10 p-6 bg-surface border-l-4 border-brand rounded-r-xl">
              <p className="text-xs font-mono uppercase text-muted-foreground mb-1 tracking-wider">
                Recommended Solution
              </p>
              <h4 className="text-lg font-bold text-foreground mb-2">
                Need help with this for your business in Kanpur?
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Explore our dedicated service package with transparent pricing, fast turnaround, and local execution.
              </p>
              <Link
                href={post.serviceLink.href}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
              >
                Explore {post.serviceLink.title} <ArrowRight size={16} />
              </Link>
            </div>
          )}

          {/* Related Posts Internal Links (Task 8) */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <BookOpen size={20} className="text-brand" /> Related Guides & Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel!.slug}
                    href={`/blog/${rel!.slug}`}
                    className="p-5 rounded-xl border border-border hover:border-brand/40 bg-surface transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono text-muted-foreground block mb-2">
                        {rel!.category}
                      </span>
                      <h4 className="text-base font-bold text-foreground leading-snug line-clamp-2 mb-2">
                        {rel!.title}
                      </h4>
                    </div>
                    <span className="text-xs font-semibold text-brand flex items-center gap-1 mt-3">
                      Read article <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Post Footer CTA */}
          <div className="mt-12 p-8 bg-surface border border-border rounded-2xl text-center">
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
