import Link from "next/link";
import { ArrowRight, Zap, Palette, Share2, Megaphone, Monitor, MapPin, Calendar, Users, Cpu, ShoppingBag } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PricingCard } from "@/components/ui/PricingCard";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { HERO_CTA_TEXT, HERO_SUB_CTA_TEXT, WHATSAPP_URL, CONTACT_PHONE, CONTACT_EMAIL } from "@/lib/constants";
import { LeadForm } from "@/components/ui/LeadForm";

export default function Home() {
  return (
    <>
      <JsonLd 
        type="LocalBusiness"
        data={{
          name: "Nexudyam",
          url: "https://www.nexudyam.in",
          logo: "https://www.nexudyam.in/logo.svg",
          image: "https://www.nexudyam.in/logo.svg",
          telephone: CONTACT_PHONE,
          email: CONTACT_EMAIL,
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Lines",
            addressLocality: "Kanpur",
            addressRegion: "Uttar Pradesh",
            postalCode: "208001",
            addressCountry: "IN"
          },
          geo: { 
            "@type": "GeoCoordinates",
            latitude: 26.4499, 
            longitude: 80.3319 
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
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "19:00"
          },
          sameAs: [
            "https://www.facebook.com/nexudyam",
            "https://www.instagram.com/nexudyam",
            "https://www.linkedin.com/company/nexudyam"
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "3"
          },
          review: testimonials.map(t => ({
            "@type": "Review",
            author: {
              "@type": "Person",
              name: t.name
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5"
            },
            reviewBody: t.quote
          }))
        }}
      />
      <JsonLd 
        type="Organization"
        data={{
          name: "Nexudyam",
          url: "https://www.nexudyam.in",
          logo: "https://www.nexudyam.in/logo.svg",
          founder: {
            "@type": "Person",
            name: "Akash Kumar"
          },
          sameAs: [
            "https://www.facebook.com/nexudyam",
            "https://www.instagram.com/nexudyam",
            "https://www.linkedin.com/company/nexudyam"
          ]
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
      {serviceSchemas.map((service, idx) => (
        <JsonLd 
          key={idx}
          type="Service"
          data={service}
        />
      ))}

      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-28 md:pb-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Grow Your Business Online with Kanpur's Top Digital Marketing Agency
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Nexudyam helps startups and MSMEs in Kanpur and UP grow online. We create high-converting digital marketing campaigns, build websites, and design brand identities to get you more leads.{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-foreground font-bold underline underline-offset-4 hover:opacity-70 transition-opacity">
              Claim your free marketing audit today
            </a> before your competitors find your next customer.
          </p>

          {/* Configuration Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-white px-8 py-4 rounded-full text-base font-bold hover:bg-brand-dark transition-all flex items-center gap-2 shadow-lg"
            >
              <span>{HERO_CTA_TEXT}</span>
              <ArrowRight size={18} />
            </a>
            <Link
              href="/pricing"
              className="border border-border text-foreground bg-white px-8 py-4 rounded-full text-base font-bold hover:bg-surface transition-colors"
            >
              {HERO_SUB_CTA_TEXT}
            </Link>
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
            {["Brand Identity", "Social Media", "Google Ads", "Meta Ads", "Websites", "Shopify Stores", "Events", "AI Content"].map((tag) => (
              <span key={tag} className="text-sm font-bold text-subtle-foreground border border-border px-4 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* On-Page Copywriting Content Expansion Section (GEO/SEO Optimization) */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
            Empowering MSMEs with Premium Digital Solutions in Uttar Pradesh
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-4 text-center max-w-3xl mx-auto">
            <p>
              Nexudyam is a leading <strong className="text-foreground">digital marketing agency in Kanpur</strong>, dedicated to helping startups, micro, small, and medium enterprises (MSMEs) establish a dominant online presence. The modern marketplace demands that local businesses be visible on search engines and social platforms. However, traditional agencies often charge hefty retainers that are out of reach for growing Indian businesses. Nexudyam was founded to level the playing field by providing high-quality, tech-enabled marketing support.
            </p>
            <p>
              As a full-service <strong className="text-foreground">branding agency for MSMEs</strong>, we combine cutting-edge artificial intelligence tools with human strategic editing to deliver creative designs, high-converting social media campaigns, and custom websites. We serve clients across Uttar Pradesh—including Kanpur, Lucknow, Noida, Prayagraj, and Varanasi—offering a single partner for all digital growth.
            </p>
            <p>
              Whether you are looking to rank your store on Google Maps, build a professional business website, or launch targeted social media ads, we have tailored packages that fit your requirements. Our <strong className="text-foreground">affordable digital marketing packages UP</strong> start at just ₹4,999 per month, ensuring that even early-stage startups can afford to get found online by active customers. Stop losing leads to competitors and start scaling your business with Nexudyam.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-background border-t border-border">
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
              title="E-commerce Websites"
              description="High-converting Shopify stores built to sell."
              features={["Custom Shopify store setup", "Payment & shipping setup", "Mobile-first & SEO-ready"]}
              icon={<ShoppingBag size={28} />}
              href="/ecom-websites"
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
                "Shopify / E-com store setup",
                "Priority support (2-hour response)"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-brand font-bold uppercase tracking-wider text-sm mb-2 block">Success Stories</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              What Local Businesses Say About Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand/10 text-brand font-bold flex items-center justify-center text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nexudyam Section */}
      <section className="py-24 bg-background border-b border-border">
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

      {/* Reusable Lead Capture Form Section (Task 6) */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <span className="text-brand font-bold uppercase tracking-wider text-sm mb-2 block">Free Audit</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Free Digital Growth Audit
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Fill out the form below with your name and WhatsApp number. Our strategy team will analyze your website, local map rankings, and social profiles, and get in touch with you with a custom roadmap.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background border-t border-border">
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

const serviceSchemas = [
  {
    "@type": "Service",
    name: "Brand Identity Design",
    description: "Visual identity that builds trust and recognition for MSMEs and startups, including logo, color palette, typography, and brand guidelines.",
    provider: { "@type": "LocalBusiness", name: "Nexudyam" },
    url: "https://www.nexudyam.in/services#brand-identity",
    offers: {
      "@type": "Offer",
      "price": "4999",
      "priceCurrency": "INR",
      "url": "https://www.nexudyam.in/pricing"
    }
  },
  {
    "@type": "Service",
    name: "Social Media Marketing",
    description: "Consistent posting, Instagram Reels strategy, Facebook page management, and AI captions & scripts for local businesses.",
    provider: { "@type": "LocalBusiness", name: "Nexudyam" },
    url: "https://www.nexudyam.in/services#social-media",
    offers: {
      "@type": "Offer",
      "price": "4999",
      "priceCurrency": "INR",
      "url": "https://www.nexudyam.in/pricing"
    }
  },
  {
    "@type": "Service",
    name: "Ads Campaign Setup",
    description: "Meta Ads (Facebook & Instagram) and Google Ads (Search & Display) campaign setups to drive lead generation starting at any budget.",
    provider: { "@type": "LocalBusiness", name: "Nexudyam" },
    url: "https://www.nexudyam.in/services#paid-ads",
    offers: {
      "@type": "Offer",
      "price": "9999",
      "priceCurrency": "INR",
      "url": "https://www.nexudyam.in/pricing"
    }
  },
  {
    "@type": "Service",
    name: "Website Development",
    description: "Fast, mobile-first, SEO-optimized business websites on modern stack with Google Business Profile setup included.",
    provider: { "@type": "LocalBusiness", name: "Nexudyam" },
    url: "https://www.nexudyam.in/services#web-development",
    offers: {
      "@type": "Offer",
      "price": "9999",
      "priceCurrency": "INR",
      "url": "https://www.nexudyam.in/pricing"
    }
  },
  {
    "@type": "Service",
    name: "Google Business Profile",
    description: "Rank in Google Maps and 'near me' local searches. Claim, verify, and optimize local listings with review management.",
    provider: { "@type": "LocalBusiness", name: "Nexudyam" },
    url: "https://www.nexudyam.in/services#local-seo",
    offers: {
      "@type": "Offer",
      "price": "4999",
      "priceCurrency": "INR",
      "url": "https://www.nexudyam.in/pricing"
    }
  },
  {
    "@type": "Service",
    name: "AI Content Marketing",
    description: "10x faster Reels scripts, blog posts, WhatsApp broadcast content, and monthly calendars at 1/3rd the cost of traditional agencies.",
    provider: { "@type": "LocalBusiness", name: "Nexudyam" },
    url: "https://www.nexudyam.in/services#ai-content",
    offers: {
      "@type": "Offer",
      "price": "4999",
      "priceCurrency": "INR",
      "url": "https://www.nexudyam.in/pricing"
    }
  },
  {
    "@type": "Service",
    name: "Event Promotion & Coverage",
    description: "Pre-event buzz, live coverage via Instagram Reels/Stories, and post-event evergreen content repurposing.",
    provider: { "@type": "LocalBusiness", name: "Nexudyam" },
    url: "https://www.nexudyam.in/events",
    offers: {
      "@type": "Offer",
      "price": "18999",
      "priceCurrency": "INR",
      "url": "https://www.nexudyam.in/pricing"
    }
  },
  {
    "@type": "Service",
    name: "E-commerce Website Development (Shopify)",
    description: "Custom Shopify e-commerce store setup, payment gateway integration, product catalog design, and conversion rate optimization for MSMEs in Kanpur & UP.",
    provider: { "@type": "LocalBusiness", name: "Nexudyam" },
    url: "https://www.nexudyam.in/ecom-websites",
    offers: {
      "@type": "Offer",
      "price": "18999",
      "priceCurrency": "INR",
      "url": "https://www.nexudyam.in/pricing"
    }
  }
];

const faqData = [
  {
    question: "Why should I choose Nexudyam as my digital marketing agency in Kanpur?",
    answer: "Nexudyam is Kanpur's premier digital marketing agency, specializing in helping local startups and MSMEs navigate the digital landscape. We offer a comprehensive suite of branding, local SEO, website development, and social media marketing services. Unlike traditional agencies that charge high retainers, we leverage artificial intelligence to cut content creation costs by up to 70%, delivering professional results at a fraction of the price. Based in Kanpur, Uttar Pradesh, we understand the local market dynamics and are dedicated to building long-term growth partnerships with local entrepreneurs."
  },
  {
    question: "What services does your website development company in Kanpur provide?",
    answer: "As a leading website development company in Kanpur, Nexudyam builds high-performance, mobile-first websites tailored for MSMEs and startups. Our services cover custom front-end development using modern frameworks like Next.js, e-commerce stores on Shopify, and easy-to-manage WordPress sites. Every website we build is speed-optimized, visually stunning, and built with local SEO best practices from day one to ensure you rank on search engines. We also handle domain setup, hosting, and integrate Google Business Profile to deliver a complete, turn-key web solution."
  },
  {
    question: "How do your local SEO services in Kanpur help small businesses rank?",
    answer: "Our local SEO services in Kanpur focus on claiming, optimizing, and managing your Google Business Profile to rank at the top of Google Maps and 'near me' searches. We maintain NAP consistency, build high-authority local citations, target geo-targeted search keywords, and manage customer reviews. This local map visibility helps retail stores, salons, clinics, and professional offices across Kanpur and UP attract high-intent local foot traffic and direct phone calls."
  },
  {
    question: "Which digital marketing packages are best for startup lead generation?",
    answer: "For early-stage startups and small businesses, Nexudyam offers flexible, affordable digital marketing packages with clear pricing and zero hidden costs. Our 'Launch' package at ₹4,999/month is perfect for establishing brand identity and local SEO. The popular 'Grow' package at ₹9,999/month introduces a 5-page custom website and Meta/Google Ads campaign setups. For established brands looking for full ads management, event promotion, and Shopify e-commerce store setup, our 'Scale' package at ₹18,999/month provides priority support and comprehensive marketing execution."
  },
  {
    question: "How does AI content marketing compare to a traditional branding agency?",
    answer: "Nexudyam's AI content marketing uses cutting-edge artificial intelligence to draft Reels scripts, social captions, ad copy, and blog posts in 48 hours instead of weeks. Traditional branding agencies rely on slow, manual workflows and charge high retainers (₹50k-₹1L/month). By combining AI speed with expert human editing, Nexudyam delivers 10x faster content production and cuts costs by 70%. This gives MSMEs and startups a high volume of premium marketing assets without the bloated budgets of legacy agencies."
  },
  {
    question: "How can I contact Nexudyam for a free digital marketing audit?",
    answer: "You can contact Nexudyam directly by clicking our floating WhatsApp button, calling us at +91-9161881100, or filling out the lead capture form on our contact page. We offer a free, comprehensive digital marketing audit where we analyze your current website speed, Google Maps visibility, social media engagement, and ad performance. We'll identify exactly where you are losing customers to competitors and provide a step-by-step digital strategy to increase your leads within 24 hours of our consultation."
  }
];

const testimonials = [
  {
    quote: "Nexudyam set up our Google Business Profile and ran a local Meta Ads campaign. We got over 40 active inquiries for our bakery within 30 days. Their pricing is extremely affordable for small businesses.",
    name: "Aditya Mishra",
    role: "Founder",
    company: "Kanpur Bakery Co.",
    initials: "AM"
  },
  {
    quote: "We were struggling to get noticed in Kanpur. Nexudyam designed our brand logo, created our Instagram reel templates, and got us ranking on Google Maps. Now customers find our boutique easily!",
    name: "Sneha Gupta",
    role: "Owner",
    company: "SG Fashion Studio",
    initials: "SG"
  },
  {
    quote: "The Grow plan was perfect for our agritech startup. We got a fast, professional website and a complete Meta and Google Ads setup. They delivered everything within 2 weeks and the support is outstanding.",
    name: "Rajesh Yadav",
    role: "Director",
    company: "Yadav AgroTech",
    initials: "RY"
  }
];
