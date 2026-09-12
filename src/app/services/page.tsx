import type { Metadata } from "next";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Palette, Share2, Megaphone, Monitor, MapPin, Calendar, Users, Cpu, CheckCircle2, ShoppingBag } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Digital Marketing & Branding Services in Kanpur | Nexudyam",
  description: "Explore Nexudyam's digital marketing, web development, and branding services. We help startups and MSMEs get more customers. Get a free audit today!",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Digital Marketing & Branding Services in Kanpur | Nexudyam",
    description: "Explore Nexudyam's digital marketing, web development, and branding services. We help startups and MSMEs get more customers. Get a free audit today!",
    url: "https://www.nexudyam.in/services",
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
    title: "Digital Marketing & Branding Services in Kanpur | Nexudyam",
    description: "Explore Nexudyam's digital marketing, web development, and branding services. We help startups and MSMEs get more customers. Get a free audit today!",
    images: ["/logo.svg"],
  },
};

export default function ServicesPage() {
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
              name: "Services",
              item: "https://www.nexudyam.in/services"
            }
          ]
        }}
      />
      
      <div className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Digital Marketing & Branding Services in Kanpur
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide all the digital marketing, web development, and branding services your business needs to grow and find more customers. Get a free audit today!
            </p>
          </div>

          {/* Service Cards Grid linking to detailed sections below */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start mb-24">
            <ServiceCard 
              title="Brand Identity Design"
              description="Visual identity that builds trust and recognition."
              features={["Logo, palette, typography", "Brand guidelines", "Delivered in 7 days"]}
              icon={<Palette size={28} />}
              href="#brand-identity"
            />
            <ServiceCard 
              title="Social Media Marketing"
              description="Consistent posting — you just approve."
              features={["Instagram Reels strategy", "Facebook page setup", "AI captions & scripts"]}
              icon={<Share2 size={28} />}
              href="#social-media"
            />
            <ServiceCard 
              title="Ads Campaign Setup"
              description="Starting at ₹2,000 ad spend — any budget."
              features={["Meta Ads (FB + Insta)", "Google Search & Display", "A/B testing & reporting"]}
              icon={<Megaphone size={28} />}
              href="#paid-ads"
            />
            <ServiceCard 
              title="Website Development"
              description="Fast, mobile-first websites built on modern stack."
              features={["5-page business site", "SEO-optimized from day one", "Includes Google Business setup"]}
              icon={<Monitor size={28} />}
              href="#web-development"
            />
            <ServiceCard 
              title="Google Business Profile"
              description="Rank in Google Maps and 'near me' searches."
              features={["Claim and verify", "Full optimization", "Review management"]}
              icon={<MapPin size={28} />}
              href="#local-seo"
            />
            <ServiceCard 
              title="AI Content Marketing"
              description="10x faster than traditional agencies — at 1/3rd the cost."
              features={["AI Reels & blog scripts", "WhatsApp broadcast content", "30-day calendars in 48h"]}
              icon={<Cpu size={28} />}
              href="#ai-content"
            />
            <ServiceCard 
              title="Event Promotion"
              description="End-to-end event buzz and coverage."
              features={["Pre-event ads & WhatsApp", "Live coverage brief", "Post-event repurposing"]}
              icon={<Calendar size={28} />}
              href="/events"
            />
            <ServiceCard 
              title="E-commerce Websites"
              description="High-converting Shopify stores built to sell."
              href="/ecom-websites"
              features={["Custom Shopify store setup", "Payment & shipping setup", "Mobile-first & SEO-ready"]}
              icon={<ShoppingBag size={28} />}
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
                  A professional brand identity is the foundational block of business trust and customer recognition. At Nexudyam, we work with startups and MSMEs in Kanpur to design custom logos, select target brand color palettes, define typography guidelines, and build comprehensive brand manuals. A brand is not merely a graphic or symbol; it is the entire visual story that separates your company from competitors. Our structured design workflow takes just 7 working days, delivering high-resolution vector assets, print-ready templates, and tailored social media profile kits.
                </p>
                <p>
                  By establishing a cohesive, polished visual identity, your startup projects the authority of a seasoned corporate player. This visual credibility makes it much easier to attract high-value leads, secure partnership deals, and establish long-term equity in the Uttar Pradesh marketplace. Whether you run a manufacturing plant, a retail showroom, or an agritech venture, a solid visual presence is what turns initial impressions into sales. We make sure that all typography, colors, and layout elements align perfectly with your target audience's psychological triggers, building trust from the very first click.
                </p>
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
                  Maintaining a consistent social media presence is essential for building a loyal customer community, but managing posts daily can be exhausting for busy business owners. Nexudyam handles the entire social media marketing process for your brand in Kanpur, UP. We formulate tailored Instagram Reels strategies, establish optimized Facebook business pages, write engaging captions, and develop interactive post calendars. You don't have to worry about graphic designing or video editing; our team provides a full 30-day content calendar for your approval before anything goes live.
                </p>
                <p>
                  By combining modern AI-assisted copy production with experienced editors, we deliver consistent, algorithm-optimized content that keeps your followers engaged. This regular digital touchpoint increases your brand recall value, boosts organic profile reach, and converts random social media scrollers into active, recurring customers. Our approach goes beyond generic posts. We research local trends and create hyper-localized content that speaks directly to the community in Kanpur and wider Uttar Pradesh. From festive graphics to educational posts, we align everything with your direct lead generation goals.
                </p>
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
                  Organic reach takes time, but paid advertising is the fastest way to get immediate leads and conversions. Nexudyam specializes in setting up and managing high-converting Meta Ads (Facebook & Instagram) and Google Ads (Search, Display, and Maps) campaigns. We assist local UP businesses in launching targeted ad campaigns starting with budgets as low as ₹2,000 in ad spend. We perform detailed audience research, construct compelling ad copy, run A/B copy tests, and configure conversion tracking.
                </p>
                <p>
                  Whether you are seeking direct phone calls, map directions, website traffic, or WhatsApp inquiries, we optimize your ad spend for the highest conversion rates. With weekly optimizations and transparent monthly reporting, we track which campaigns deliver the highest return on investment. This data-driven strategy ensures your marketing budget is spent directly on acquiring customers rather than wasting impressions on irrelevant audiences. Our campaign managers stay updated on the latest shifts in Google and Meta algorithms, avoiding common pitfalls like broad-match keyword bleeding or poor audience segmentation. We focus purely on low cost-per-lead (CPL) and high return on ad spend (ROAS) for your business.
                </p>
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
                  Your website is your digital office—it is where conversions happen. Nexudyam builds fast, responsive, and SEO-optimized business websites on modern developer stacks like Next.js. We specialize in creating high-performance 5-page business profile sites and full-service e-commerce stores on Shopify. Every website we build is optimized for mobile responsiveness and speed from day one, ensuring that pages load in milliseconds to keep bounce rates low. We include basic search engine optimization, domain routing, custom typography, secure hosting configuration, and a Google Business Profile setup as part of our web development package.
                </p>
                <p>
                  A fast, beautifully designed website increases user trust and elevates your professional brand. This ensures that when prospective clients find your site, they are guided by clear navigation paths directly to call or message you, maximizing your conversion funnel. We avoid clunky website builders that slow down your load speed. By coding clean, lightweight structures, we guarantee that your website ranks well in Core Web Vitals audits. We also make it easy to update contents, allowing your site to evolve as your business scales.
                </p>
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
                  For local retail showrooms, restaurants, dental clinics, and service providers in Kanpur, ranking on Google Maps is the most profitable digital channel. Nexudyam's local SEO services claim, verify, and fully optimize your Google Business Profile (GBP) to put your business in Google's local 3-pack. We enforce strict Name, Address, and Phone (NAP) consistency across directories, set up accurate categories, upload geotagged photos, and establish weekly posting schedules. We also implement a review acquisition plan to help you collect positive customer reviews containing high-intent keywords.
                </p>
                <p>
                  Local SEO ensures that when a customer searches for your services 'near me', your profile appears immediately with directions, call buttons, and opening hours. This local search optimization drives immediate store foot traffic, direct phone calls, and highly qualified inquiries from customers ready to buy. We build dozens of local citations on high-authority Indian business directories like JustDial, IndiaMART, and trade portals. This search engine validation reinforces your geographic authority, making it easier to outrank competitors in surrounding Uttar Pradesh areas.
                </p>
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
                  Content creation is the bottleneck of modern marketing, but AI has revolutionized speed and affordability. Nexudyam's AI content marketing combines artificial intelligence tools with professional human editors to produce Reels scripts, WhatsApp broadcasts, and blog articles in 48 hours. By automating the research and initial drafting stages, we cut traditional content production costs by up to 70%. We don't just dump generic AI text; our editorial team reviews, rewrites, and customizes every post to ensure it incorporates Kanpur-specific context and aligns with your brand voice.
                </p>
                <p>
                  This hybrid system gives startups and MSMEs a high volume of consistent, high-quality content that engages audiences without the bloated retainer budgets of traditional agencies. This cost-efficient approach allows even micro-enterprises to run robust content campaigns that build authority and drive organic traffic. From scripts that hooks viewer attention in the first 3 seconds of a Reel to detailed blog articles structured to answer search engine queries, we calibrate our AI systems for conversion. This ensures that you stay top-of-mind for your audience while keeping your overhead low.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
