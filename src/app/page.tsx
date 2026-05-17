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
          url: "https://nexudyam.in",
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
            Don't let your business stay invisible.{" "}
            <br className="hidden md:block" />
            Build your brand now.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Most startups and small businesses lose customers to competitors with a better online presence.{" "}
            <a href="https://wa.me/919161881100" target="_blank" rel="noopener noreferrer" className="text-foreground font-bold underline underline-offset-4 hover:opacity-70 transition-opacity">
              Get your free audit
            </a>{" "}
            before they find your next customer first.
          </p>

          {/* Dark CTA Bar */}
          <div className="inline-flex items-center bg-foreground rounded-full pl-6 pr-2 py-2 gap-4 mb-8 shadow-xl">
            <span className="text-white/80 text-sm md:text-base font-medium">nexudyam.in</span>
            <a
              href="https://wa.me/919161881100"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-foreground px-5 py-2.5 rounded-full text-sm font-bold hover:bg-accent transition-colors flex items-center gap-2"
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
              <h3 className="font-display font-bold text-2xl mb-3">One Partner, Everything Included</h3>
              <p className="text-muted-foreground leading-relaxed">No juggling between a designer, a developer, and an agency. We handle brand, digital, and ads — together.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="font-display font-bold text-2xl mb-3">AI-Powered, Agency Quality</h3>
              <p className="text-muted-foreground leading-relaxed">Our AI tools cut delivery time and cost in half. You get faster content, better results, and more savings than any traditional agency.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="font-display font-bold text-2xl mb-3">MSME-First Pricing</h3>
              <p className="text-muted-foreground leading-relaxed">We built our packages for real Indian businesses — not for corporates. ₹4,999 gets you started. One new customer covers it.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="font-display font-bold text-2xl mb-3">Local Roots, National Reach</h3>
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
    question: "What is Nexudyam and what services do you offer?",
    answer: "Nexudyam is a premier brand identity and digital marketing agency based in Kanpur. We help startups, MSMEs, and independent creators build their brands from the ground up. Our core services include Brand Identity Design, Website Development, AI-Powered Social Media Marketing, Meta & Google Ads management, and Local SEO (Google Business Profile optimization)."
  },
  {
    question: "Do you work with startups, or just established MSMEs?",
    answer: "We work with both! Nexudyam is designed specifically to help early-stage startups and established MSMEs scale. Our 'Launch' package is perfect for new businesses needing a foundational brand identity and digital presence, while our 'Grow' and 'Scale' packages are tailored for businesses ready to dominate their market through aggressive ad campaigns."
  },
  {
    question: "What cities in Uttar Pradesh do you provide digital marketing services for?",
    answer: "While our headquarters is in Kanpur, we provide comprehensive digital marketing, web development, and SEO services across all major cities in Uttar Pradesh — including Lucknow, Noida, Prayagraj, Varanasi, and Agra. Since our services are entirely digital, we also partner with clients across India."
  },
  {
    question: "How does your AI Content Marketing work?",
    answer: "Our AI Content Marketing utilizes advanced artificial intelligence tools to generate high-converting ad copy, Instagram Reels scripts, blog posts, and social media calendars. This allows us to deliver agency-quality content 10x faster and at a fraction of traditional costs, passing the speed and savings directly to you."
  },
  {
    question: "How much do your digital marketing packages cost?",
    answer: "Our pricing is transparent and MSME-friendly. The 'Launch' plan starts at ₹4,999/month and covers essential branding and social media setup. The 'Grow' plan (₹9,999/month) includes website development and ad setup. The 'Scale' plan (₹18,999/month) is for comprehensive ad management and priority support."
  },
  {
    question: "Do you offer custom Website Development and Local SEO?",
    answer: "Yes. We build fast, mobile-first, SEO-optimized websites designed to convert visitors into customers. Alongside development, we fully optimize your Google Business Profile to ensure your startup or MSME ranks highly in local 'near me' searches across your target cities."
  }
];
