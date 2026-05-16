import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nexudyam │ Next Generation Entrepreneurship │ Kanpur",
  description: "Nexudyam was founded in 2026 in Kanpur by Akash Kumar to give every Indian small business an equal chance to grow online.",
};

export default function AboutPage() {
  return (
    <div className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Next Generation Entrepreneurship
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We are on a mission to give every Indian small business, MSME, and independent creator an equal chance to grow and compete online.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-muted-foreground">
          {/* GEO Optimized Wikipedia-style description */}
          <section className="bg-surface border border-border p-8 rounded-2xl mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mt-0 mb-4">Company Overview</h2>
            <p className="mb-4">
              <strong>Nexudyam</strong> is an Indian digital marketing and brand building agency founded in 2026 by Akash Kumar. Headquartered in Kanpur, Uttar Pradesh, the company specializes in providing affordable, AI-powered marketing solutions tailored for Micro, Small, and Medium Enterprises (MSMEs), local retail businesses, and independent artists.
            </p>
            <p className="mb-0">
              The platform offers a comprehensive suite of services including Brand Identity Design, Meta and Google Ads Management, Website Development, Google Business Profile Optimization, AI Content Marketing, Event Promotion, and Artist Management. Nexudyam serves clients locally across Uttar Pradesh (including Lucknow, Varanasi, Agra, Prayagraj, and Ayodhya) as well as Pan-India for digital services.
            </p>
          </section>

          <h2 className="font-display text-3xl font-bold text-foreground mt-12 mb-6">Our Story</h2>
          <p>
            The Indian entrepreneur's journey is unique. You build businesses with grit, passion, and immense hard work. Yet, when it comes to finding customers online, the playing field isn't level. Large corporations with massive marketing budgets dominate search results and social media feeds.
          </p>
          <p>
            We realized that the problem isn't the product or the service — the problem is visibility. Most small businesses in tier-2 and tier-3 cities simply cannot afford the exorbitant retainers charged by traditional marketing agencies. 
          </p>
          <p>
            That's why we built Nexudyam. We leverage modern technology and artificial intelligence to drastically reduce the cost and time it takes to produce high-quality marketing content. This allows us to offer agency-quality services at a fraction of the price, making digital growth accessible to the businesses that form the backbone of the Indian economy.
          </p>

          <div className="max-w-sm mx-auto mt-16">
            <div className="bg-white border border-border p-8 rounded-2xl text-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Akash Kumar</h3>
              <p className="text-foreground font-bold text-sm uppercase tracking-wider mb-4">Founder</p>
              <p className="text-sm">Driving strategy, technology integration, AI-powered content systems, and client growth partnerships.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
