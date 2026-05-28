import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Palette, Share2, Megaphone, Monitor, MapPin, Calendar, Users, Cpu } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PricingCard } from "@/components/ui/PricingCard";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd 
        type="LocalBusiness"
        data={{
          name: "Nexudyam",
          url: "https://www.nexudyam.in",
          telephone: "+91-9161881100",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kanpur",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN"
          },
          geo: { latitude: 26.4499, longitude: 80.3319 },
          areaServed: [
            { "@type": "City", name: "Kanpur" },
            { "@type": "City", name: "Lucknow" },
            { "@type": "City", name: "Noida" },
            { "@type": "City", name: "Prayagraj" },
            { "@type": "City", name: "Varanasi" },
            { "@type": "City", name: "Agra" },
            { "@type": "State", name: "Uttar Pradesh" }
          ],
          openingHours: "Mo-Sa 10:00-19:00",
          priceRange: "₹₹"
        }}
      />
      <JsonLd 
        type="FAQPage"
        data={{
          mainEntity: faqData.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          }))
        }}
      />
      <JsonLd 
        type="Service"
        data={{
          name: "Digital Marketing and Brand Identity",
          provider: {
            "@type": "LocalBusiness",
            name: "Nexudyam"
          },
          areaServed: [
            { "@type": "City", name: "Kanpur" },
            { "@type": "City", name: "Lucknow" },
            { "@type": "City", name: "Noida" },
            { "@type": "City", name: "Prayagraj" },
            { "@type": "City", name: "Varanasi" },
            { "@type": "City", name: "Agra" },
            { "@type": "State", name: "Uttar Pradesh" }
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Digital Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Brand Identity Design"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Website Development"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Meta & Google Ads"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Local SEO"
                }
              }
            ]
          }
        }}
      />

      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-28 md:pb-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Grow Your Business Online with Kanpur's Top Digital Marketing Agency
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Nexudyam helps startups and MSMEs in Kanpur and UP grow online. We create high-converting digital marketing campaigns, build websites, and design brand identities to get you more leads.{" "}
            <a href="https://wa.me/919161881100" target="_blank" rel="noopener noreferrer" className="text-foreground font-bold underline underline-offset-4 hover:opacity-70 transition-opacity">
              Claim your free marketing audit today
            </a> before your competitors find your next customer.
          </p>

          {/* Dark CTA Bar */}
          <div className="inline-flex items-center bg-foreground rounded-full pl-6 pr-2 py-2 gap-4 mb-8 shadow-xl">
            <span className="text-white/80 text-sm md:text-base font-medium">nexudyam.in</span>
            <a
              href="https://wa.me/919161881100"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-foreground px-5 py-2.5 rounded-full text-sm font-bold hover:bg-accent transition-colors flex items-center gap-2"
              aria-label="Contact us on WhatsApp"
            >
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">● AI Content Marketing</span>
            <span className="flex items-center gap-1.5">● Meta + Google Ads</span>
            <span className="flex items-center gap-1.5">● Website Development</span>
          </div>
        </div>
      </section>

      {/* Stats + Trusted By Strip */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-8">
            <div className="flex items-center gap-3">
              <Users size={22} className="text-muted-foreground" />
              <div>
                <span className="font-display text-3xl font-bold text-foreground">50+</span>
                <span className="text-sm text-muted-foreground ml-2">Businesses trust us</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={22} className="text-muted-foreground" />
              <div>
                <span className="font-display text-3xl font-bold text-foreground">UP</span>
                <span className="text-sm text-muted-foreground ml-2">Kanpur, Lucknow, Noida, Prayagraj & More</span>
              </div>
            </div>
          </div>

          {/* Trusted By Label */}
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground text-center mb-6">
            Trusted by Startups & Businesses across India
          </p>

          {/* Service Tags Strip */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {["Brand Identity", "Social Media", "Google Ads", "Meta Ads", "Websites", "Artist Mgmt", "Events", "AI Content"].map((tag) => (
              <span key={tag} className="text-sm font-bold text-subtle-foreground border border-border px-4 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
            Most Startups & Businesses Are Invisible Online. <span className="text-brand">We Fix That.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            You built something real. A business, a craft, a dream. But without the right digital presence, your potential customers can&apos;t find you — they&apos;re finding your competitors instead. The problem isn&apos;t your product. It&apos;s visibility. And that&apos;s exactly what Nexudyam was built to solve.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-brand font-bold uppercase tracking-wider text-sm mb-2 block">What We Do</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Everything Your Business Needs — In One Place
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            <ServiceCard 
              title="Brand Identity Design"
              description="Visual identity that builds trust and recognition."
              features={["Logo, palette, typography", "Brand guidelines", "Delivered in 7 days"]}
              icon={<Palette size={28} />}
              href="/services#brand-identity"
            />
            <ServiceCard 
              title="Social Media Marketing"
              description="Consistent posting — you just approve."
              features={["Instagram Reels strategy", "Facebook page setup", "AI captions & scripts"]}
              icon={<Share2 size={28} />}
              href="/services#social-media"
            />
            <ServiceCard 
              title="Ads Campaign Setup"
              description="Starting at ₹2,000 ad spend — any budget."
              features={["Meta Ads (FB + Insta)", "Google Search & Display", "A/B testing & reporting"]}
              icon={<Megaphone size={28} />}
              href="/services#paid-ads"
            />
            <ServiceCard 
              title="Website Development"
              description="Fast, mobile-first websites built on modern stack."
              features={["5-page business site", "SEO-optimized from day one", "Includes Google Business setup"]}
              icon={<Monitor size={28} />}
              href="/services#web-development"
            />
            <ServiceCard 
              title="Google Business Profile"
              description="Rank in Google Maps and 'near me' searches."
              features={["Claim and verify", "Full optimization", "Review management"]}
              icon={<MapPin size={28} />}
              href="/services#local-seo"
            />
            <ServiceCard 
              title="AI Content Marketing"
              description="10x faster than traditional agencies — at 1/3rd the cost."
              features={["AI Reels & blog scripts", "WhatsApp broadcast content", "30-day calendars in 48h"]}
              icon={<Cpu size={28} />}
              href="/services#ai-content"
            />
            <ServiceCard 
              title="Event Promotion"
              description="End-to-end event buzz and coverage."
              features={["Pre-event ads & WhatsApp", "Live coverage brief", "Post-event repurposing"]}
              icon={<Calendar size={28} />}
              href="/events"
            />
            <ServiceCard 
              title="Artist Management"
              description="Professional profile for independent creators."
              features={["Brand identity for artists", "Booking management", "Instagram/YouTube growth"]}
              icon={<Users size={28} />}
              href="/artist-management"
            />
          </div>
        </div>
      </section>

      {/* AI Marketing Strip */}
      <section className="py-20 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px]" />
        <div className="container relative mx-auto px-6 max-w-5xl text-center flex flex-col items-center">
          <div className="bg-white/10 p-4 rounded-full mb-6">
            <Zap size={40} className="text-white" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            AI-Powered Marketing. Agency Quality. Startup Price.
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto">
            We use artificial intelligence to create content 10x faster — meaning you get professional Reels scripts, ad copy, blog posts, and social content delivered faster and cheaper than any traditional agency. You get speed. You get quality. You keep the savings.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-brand font-bold uppercase tracking-wider text-sm mb-2 block">Simple Packages</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              No Confusion. No Hidden Costs. Just Growth.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              name="Launch"
              price="₹4,999"
              target="Idea-stage businesses"
              features={[
                "Brand identity (logo + palette + guide)",
                "Google Business Profile setup",
                "8 AI-powered social posts/month",
                "WhatsApp support (4-hour response)"
              ]}
            />
            <PricingCard 
              name="Grow"
              price="₹9,999"
              target="Growing brands"
              isPopular={true}
              features={[
                "Everything in Launch, plus:",
                "5-page website development",
                "Meta Ads + Google Ads setup",
                "16 posts + 4 Reels/month",
                "Monthly performance report"
              ]}
            />
            <PricingCard 
              name="Scale"
              price="₹18,999"
              target="Established businesses"
              features={[
                "Everything in Grow, plus:",
                "Full ads management",
                "Event promotion (1/month)",
                "Artist management services",
                "Priority support (2-hour response)"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Nexudyam Section */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
            Why Hundreds of Businesses Choose Nexudyam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <p className="font-display font-bold text-2xl mb-3">One Partner, Everything Included</p>
              <p className="text-muted-foreground leading-relaxed">No juggling between a designer, a developer, and an agency. We handle brand, digital, and ads — together.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <p className="font-display font-bold text-2xl mb-3">AI-Powered, Agency Quality</p>
              <p className="text-muted-foreground leading-relaxed">Our AI tools cut delivery time and cost in half. You get faster content, better results, and more savings than any traditional agency.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <p className="font-display font-bold text-2xl mb-3">MSME-First Pricing</p>
              <p className="text-muted-foreground leading-relaxed">We built our packages for real Indian businesses — not for corporates. ₹4,999 gets you started. One new customer covers it.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <p className="font-display font-bold text-2xl mb-3">Local Roots, National Reach</p>
              <p className="text-muted-foreground leading-relaxed">Based in Kanpur. Built for Bharat. We understand the Indian entrepreneur's journey — because we are one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
            Frequently Asked Questions
          </h2>
          <Accordion items={faqData} />
        </div>
      </section>
    </>
  );
}

const faqData = [
  {
    question: "Why should I choose Nexudyam as my digital marketing agency in Kanpur?",
    answer: "Nexudyam is a leading digital marketing agency in Kanpur, offering tailored branding, local SEO, and paid advertising solutions. We specialize in helping startups and MSMEs build their online presence, run high-converting campaigns, and grow their businesses starting at affordable monthly retainers."
  },
  {
    question: "What services does your website development company in Kanpur provide?",
    answer: "As a top web design and website development company in Kanpur, we build fast, responsive, SEO-optimized business websites on modern platforms like Next.js, WordPress, and Shopify. We focus on creating high-converting websites that load in milliseconds and turn visitors into active customer leads."
  },
  {
    question: "How do your local SEO services in Kanpur help small businesses rank?",
    answer: "Our local SEO services in Kanpur focus on Claiming, Optimizing, and Managing your Google Business Profile to help you rank at the top of Google Maps and 'near me' searches. We build local citations, manage reviews, and target geotargeted keywords across Kanpur, Lucknow, and UP to drive local store traffic."
  },
  {
    question: "Which digital marketing packages are best for startup lead generation?",
    answer: "Our affordable digital marketing packages are designed to scale with your budget. The 'Launch' package is ideal for early-stage branding and local SEO at ₹4,999/month, while our 'Grow' and 'Scale' packages include full website development, social media posting, and Meta/Google Ads lead generation campaigns."
  },
  {
    question: "How does AI content marketing compare to a traditional branding agency?",
    answer: "Our AI-powered content marketing lets us write scripts, create captions, and draft social posts 10x faster than a traditional branding agency. This eliminates slow turnaround times and cuts costs by 70%, giving startups premium-quality marketing assets at an unbeatable speed and price."
  },
  {
    question: "How can I contact Nexudyam for a free digital marketing audit?",
    answer: "You can claim a free marketing audit for your business by contacting our team directly on WhatsApp or calling +91-9161881100. We'll analyze your website, review your current search presence, check your local listings, and outline a step-by-step plan to get more leads."
  }
];
