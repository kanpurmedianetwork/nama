import Link from "next/link";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Palette, Share2, Megaphone, Monitor, MapPin, Cpu, ArrowRight } from "lucide-react";
import { JsonLd, breadcrumbs } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Digital Marketing, Website & Branding Services | Nexudyam",
  description: "Explore Nexudyam's digital marketing, website development, and branding services. Tailored lead-generation packages for startups and MSMEs across India.",
  path: "/services",
  ogImage: "/og/default.png",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd 
        data={breadcrumbs([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />
      
      <div className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Digital Marketing, Website & Branding Services Across India
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide all the digital marketing, web development, and branding services your business needs to grow and generate qualified leads. Get a free lead audit today!
            </p>
          </div>

          {/* Service Cards Grid linking to dedicated service routes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-24">
            <ServiceCard 
              title="Brand Identity Design"
              description="Visual identity that builds trust and recognition."
              features={["Logo, palette, typography", "Brand guidelines", "Delivered in 7 days"]}
              icon={<Palette size={24} />}
              href="/services/brand-identity"
              imageSrc="/services/brand-identity.jpg"
            />
            <ServiceCard 
              title="Social Media Marketing"
              description="Consistent posting — you just approve."
              features={["Instagram Reels strategy", "Facebook page setup", "AI captions & scripts"]}
              icon={<Share2 size={24} />}
              href="/services/social-media-marketing"
              imageSrc="/services/social-media-marketing.jpg"
            />
            <ServiceCard 
              title="Ads Campaign Setup"
              description="Starting at ₹2,000 ad spend — any budget."
              features={["Meta Ads (FB + Insta)", "Google Search & Display", "A/B testing & reporting"]}
              icon={<Megaphone size={24} />}
              href="/services/meta-google-ads"
              imageSrc="/services/meta-google-ads.jpg"
            />
            <ServiceCard 
              title="Website & E-commerce Development"
              description="Fast, mobile-first websites and conversion-ready Shopify stores."
              features={["Custom business sites & Shopify", "SEO-optimized from day one", "Includes Google Business setup"]}
              icon={<Monitor size={24} />}
              href="/services/website-development"
              imageSrc="/services/website-development.jpg"
            />
            <ServiceCard 
              title="Google Business Profile"
              description="Rank in Google Maps and 'near me' searches."
              features={["Claim and verify", "Full optimization", "Review management"]}
              icon={<MapPin size={24} />}
              href="/services/google-business-profile"
              imageSrc="/services/google-business-profile.jpg"
            />
            <ServiceCard 
              title="AI Content Marketing"
              description="Fast Reels scripts, blog posts, and calendar planning."
              features={["AI Reels & blog scripts", "WhatsApp broadcast content", "30-day calendars in 48h"]}
              icon={<Cpu size={24} />}
              href="/services/ai-content-marketing"
              imageSrc="/services/ai-content-marketing.jpg"
            />
          </div>

          {/* Detailed Content Sections (SEO/GEO Optimization) */}
          <div className="max-w-4xl mx-auto space-y-16 border-t border-border pt-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Detailed Service Breakdown
            </h2>

            {/* Brand Identity Section */}
            <section id="brand-identity" className="scroll-mt-24 bg-white p-8 md:p-10 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="text-brand shrink-0" size={28} />
                <h3 className="font-display text-2xl font-bold text-foreground">Brand Identity Design</h3>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  A professional brand identity is the foundational block of business trust and customer recognition. At Nexudyam, we work with startups and MSMEs across India to design custom logos, select target brand color palettes, define typography guidelines, and build comprehensive brand manuals. A brand is not merely a graphic or symbol; it is the entire visual story that separates your company from competitors. Our structured design workflow takes just 7 working days, delivering high-resolution vector assets, print-ready templates, and tailored social media profile kits.
                </p>
                <p>
                  By establishing a cohesive, polished visual identity, your startup projects the authority of a seasoned corporate player. This visual credibility makes it much easier to attract high-value leads, secure partnership deals, and establish long-term equity in the Indian marketplace. Whether you run a manufacturing plant, a retail showroom, or an agritech venture, a solid visual presence is what turns initial impressions into sales. We make sure that all typography, colors, and layout elements align perfectly with your target audience&apos;s psychological triggers, building trust from the very first click.
                </p>
                <div className="pt-2">
                  <Link href="/services/brand-identity" className="inline-flex items-center gap-2 text-brand font-semibold hover:underline">
                    Learn more about Brand Identity Design <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </section>

            {/* Social Media Marketing Section */}
            <section id="social-media" className="scroll-mt-24 bg-white p-8 md:p-10 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="text-brand shrink-0" size={28} />
                <h3 className="font-display text-2xl font-bold text-foreground">Social Media Marketing</h3>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Maintaining a consistent social media presence is essential for building a loyal customer community, but managing posts daily can be exhausting for busy business owners. Nexudyam handles the entire social media marketing process for your brand across India. We formulate tailored Instagram Reels strategies, establish optimized Facebook business pages, write engaging captions, and develop interactive post calendars. You don&apos;t have to worry about graphic designing or video editing; our team provides a full 30-day content calendar for your approval before anything goes live.
                </p>
                <p>
                  By combining modern AI-assisted copy production with experienced editors, we deliver consistent, algorithm-optimized content that keeps your followers engaged. This regular digital touchpoint increases your brand recall value, boosts organic profile reach, and converts random social media scrollers into active, recurring customers. Our approach goes beyond generic posts. We research industry trends and create localized content that speaks directly to your target buyers. From festive graphics to educational posts, we align everything with your direct lead generation goals.
                </p>
                <div className="pt-2">
                  <Link href="/services/social-media-marketing" className="inline-flex items-center gap-2 text-brand font-semibold hover:underline">
                    Learn more about Social Media Marketing <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </section>

            {/* Ads Campaign Setup Section */}
            <section id="paid-ads" className="scroll-mt-24 bg-white p-8 md:p-10 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Megaphone className="text-brand shrink-0" size={28} />
                <h3 className="font-display text-2xl font-bold text-foreground">Ads Campaign Setup & Management</h3>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Organic reach takes time, but paid advertising is the fastest way to get immediate leads and conversions. Nexudyam specializes in setting up and managing high-converting Meta Ads (Facebook & Instagram) and Google Ads (Search, Display, and Maps) campaigns. We assist growing businesses in launching targeted ad campaigns starting with budgets as low as ₹2,000 in ad spend. We perform detailed audience research, construct compelling ad copy, run A/B copy tests, and configure conversion tracking.
                </p>
                <p>
                  Whether you are seeking direct phone calls, map directions, website traffic, or WhatsApp inquiries, we optimize your ad spend for the highest conversion rates. With weekly optimizations and transparent monthly reporting, we track which campaigns deliver the highest return on investment. This data-driven strategy ensures your marketing budget is spent directly on acquiring customers rather than wasting impressions on irrelevant audiences. Our campaign managers stay updated on the latest shifts in Google and Meta algorithms, avoiding common pitfalls like broad-match keyword bleeding or poor audience segmentation. We focus purely on low cost-per-lead (CPL) and high return on ad spend (ROAS) for your business.
                </p>
                <div className="pt-2">
                  <Link href="/services/meta-google-ads" className="inline-flex items-center gap-2 text-brand font-semibold hover:underline">
                    Learn more about Meta & Google Ads <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </section>

            {/* Website Development Section */}
            <section id="web-development" className="scroll-mt-24 bg-white p-8 md:p-10 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="text-brand shrink-0" size={28} />
                <h3 className="font-display text-2xl font-bold text-foreground">Website Development</h3>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Your website is your digital office—it is where conversions happen. Nexudyam builds fast, responsive, and SEO-optimized business websites on modern developer stacks like Next.js. We specialize in creating high-performance 5-page business profile sites and full-service e-commerce stores on Shopify. Every website we build is optimized for mobile responsiveness and speed from day one, ensuring that pages load in milliseconds to keep bounce rates low. We include search engine optimization, domain routing, custom typography, secure hosting configuration, and a Google Business Profile setup as part of our web development package.
                </p>
                <p>
                  A fast, beautifully designed website increases user trust and elevates your professional brand. This ensures that when prospective clients find your site, they are guided by clear navigation paths directly to call or message you, maximizing your conversion funnel. We avoid clunky website builders that slow down your load speed. By coding clean, lightweight structures, we guarantee that your website ranks well in Core Web Vitals audits. We also make it easy to update contents, allowing your site to evolve as your business scales.
                </p>
                <div className="pt-2">
                  <Link href="/services/website-development" className="inline-flex items-center gap-2 text-brand font-semibold hover:underline">
                    Learn more about Website Development <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </section>

            {/* Google Business Profile Section */}
            <section id="local-seo" className="scroll-mt-24 bg-white p-8 md:p-10 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-brand shrink-0" size={28} />
                <h3 className="font-display text-2xl font-bold text-foreground">Google Business Profile / Local SEO</h3>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  For retail showrooms, restaurants, clinics, and service-area providers across India, ranking on Google Maps is the most profitable digital channel. Nexudyam&apos;s local SEO services claim, verify, and fully optimize your Google Business Profile (GBP) to put your business in Google&apos;s local 3-pack. We enforce strict Name, Address, and Phone (NAP) consistency across directories, set up accurate categories, upload geotagged photos, and establish weekly posting schedules. We also implement a review acquisition plan to help you collect positive customer reviews containing high-intent keywords.
                </p>
                <p>
                  Local SEO ensures that when a customer searches for your services &apos;near me&apos; or in your service area, your profile appears immediately with directions, call buttons, and opening hours. This local search optimization drives immediate store foot traffic, direct phone calls, and highly qualified inquiries from customers ready to buy. We build dozens of local citations on high-authority Indian business directories like JustDial, IndiaMART, and trade portals. This search engine validation reinforces your geographic authority, making it easier to outrank competitors across multi-city markets.
                </p>
                <div className="pt-2">
                  <Link href="/services/google-business-profile" className="inline-flex items-center gap-2 text-brand font-semibold hover:underline">
                    Learn more about Google Business Profile & Local SEO <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </section>

            {/* AI Content Marketing Section */}
            <section id="ai-content" className="scroll-mt-24 bg-white p-8 md:p-10 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="text-brand shrink-0" size={28} />
                <h3 className="font-display text-2xl font-bold text-foreground">AI Content Marketing</h3>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Content creation is often a bottleneck for early-stage marketing, but modern workflows have transformed speed and affordability. Nexudyam&apos;s AI-assisted content marketing combines automated research and draft generation with experienced human editors to deliver 30-day social calendars and ad creatives in 48 hours. By streamlining production workflows, we pass operational savings directly to founders with no bloated management retainers. We don&apos;t produce generic text; our editorial team refines every post to ensure it captures authentic industry context and speaks directly to your ideal customer.
                </p>
                <p>
                  This hybrid system gives startups and MSMEs a high volume of consistent, high-quality content that engages audiences without the bloated retainer budgets of traditional agencies. This cost-efficient approach allows even micro-enterprises to run robust content campaigns that build authority and drive organic traffic. From scripts that hook viewer attention in the first 3 seconds of a Reel to detailed blog articles structured to answer search engine queries, we calibrate our AI systems for conversion. This ensures that you stay top-of-mind for your audience while keeping your overhead low.
                </p>
                <div className="pt-2">
                  <Link href="/services/ai-content-marketing" className="inline-flex items-center gap-2 text-brand font-semibold hover:underline">
                    Learn more about AI Content Marketing <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
