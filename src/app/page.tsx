import Link from "next/link";
import { 
  ArrowRight, 
  Zap, 
  Palette, 
  Share2, 
  Megaphone, 
  Monitor, 
  MapPin, 
  Calendar, 
  ShoppingBag, 
  Star, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  Layers,
  AlertCircle,
  MousePointerClick,
  MapPinOff,
  Rocket,
  Stethoscope,
  Scissors,
  GraduationCap,
  Building2,
  Utensils,
  Store,
  Factory,
  Wrench,
  Sparkles
} from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PricingCard } from "@/components/ui/PricingCard";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { HERO_CTA_TEXT, HERO_SUB_CTA_TEXT, WHATSAPP_URL } from "@/lib/constants";
import { LeadForm } from "@/components/ui/LeadForm";
import { pageMetadata } from "@/lib/metadata";
import { faqPage } from "@/lib/schema";
import { Marquee } from "@/components/reactbits/Marquee";
import { CountUp } from "@/components/reactbits/CountUp";
import { HeroBackground } from "@/components/reactbits/HeroBackground";
import { RotatingText } from "@/components/reactbits/RotatingText";
import { publishedCaseStudies } from "@/lib/case-studies-data";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata = pageMetadata({
  title: "Nexudyam | Lead-Generation Marketing for Startups & MSMEs",
  description: "We help startups and MSMEs across India get more leads with Meta & Google Ads, conversion-ready websites, brand identity and AI-assisted content. Get a free lead audit.",
  path: "/",
  ogImage: "/og/home.png",
});

export default function Home() {
  return (
    <>
      <JsonLd data={faqPage(faqData)} />
      {serviceSchemas.map((service, idx) => (
        <JsonLd 
          key={idx}
          type="Service"
          data={service}
        />
      ))}

      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-border/60">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-xs border border-neutral-200 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 text-neutral-800 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Marketing for Startups &amp; MSMEs Across India</span>
          </div>

          {/* Architectural H1 */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.08] max-w-4xl mx-auto">
            Getting Traffic but Not Enough Leads? We Fix What&apos;s Broken Between the Click and the Customer.
          </h1>
          
          {/* Service Cycling Highlight */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-base md:text-xl font-medium text-neutral-600 mb-8 min-h-[36px]">
            <span>Specializing in</span>
            <RotatingText
              words={[
                "Meta & Google Ads",
                "Conversion-Ready Next.js Websites",
                "Google Maps Multi-City SEO",
                "AI Content Marketing",
                "Brand Identity Design",
              ]}
            />
          </div>

          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Nexudyam helps startups and MSMEs across India turn clicks into qualified customer inquiries. We build conversion-ready websites, manage profitable Meta and Google ad campaigns, and produce AI-assisted content with zero bloated retainers.{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-foreground font-bold underline underline-offset-4 hover:opacity-75 transition-opacity">
              Claim your free 5-point lead audit today
            </a> before your competitors reach your next customer.
          </p>

          {/* Action Row: Primary WhatsApp CTA + Secondary Pricing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <WhatsAppButton text={HERO_CTA_TEXT} />
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center border border-neutral-300 text-foreground bg-white/90 backdrop-blur-xs px-8 py-4 rounded-full text-base font-bold hover:bg-neutral-50 hover:border-neutral-400 transition-all shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              {HERO_SUB_CTA_TEXT}
            </Link>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs sm:text-sm text-neutral-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
              Verified 5.0 ★ Google Rating
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
              MSME Packages from ₹4,999/mo
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
              Zero Lock-in Contracts
            </span>
          </div>

          {/* Executive Results & Trust Strip */}
          <div className="w-full max-w-4xl mx-auto mt-14 bg-white/80 backdrop-blur-md border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-200/80">
              <div className="pt-2 md:pt-0">
                <div className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-1">
                  <CountUp to={50} suffix="+" />
                </div>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">Businesses Trust Us {/* {{TODO: confirm real client count}} */}</p>
              </div>
              <div className="pt-4 md:pt-0 md:pl-6">
                <p className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-1 flex items-center justify-center gap-1">
                  5.0 <Star size={20} className="fill-amber-400 text-amber-400 inline" />
                </p>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">Google Maps Rating (3 reviews)</p>
              </div>
              <div className="pt-4 md:pt-0 md:pl-6">
                <p className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-1">48h</p>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">30-Day Content Delivery</p>
              </div>
              <div className="pt-4 md:pt-0 md:pl-6">
                <p className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-1">₹4,999</p>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">Starter Package Price</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Capability Marquee Strip */}
      <section className="py-6 border-b border-border bg-surface/50 overflow-hidden">
        <Marquee speed="normal" pauseOnHover={true} className="py-1">
          {[
            "Brand Identity Design",
            "Meta & Google Ads Management",
            "Next.js Website Development",
            "Google Business Profile (3-Pack)",
            "AI Content Marketing",
            "Shopify E-commerce Stores",
            "Local SEO for Multi-City & Service-Area Businesses",
            "Event Promotion & Coverage",
          ].map((tag) => (
            <span 
              key={tag} 
              className="text-xs sm:text-sm font-semibold text-foreground bg-white border border-neutral-200 px-4 py-2 rounded-full whitespace-nowrap shadow-2xs hover:border-foreground/40 transition-colors mx-2"
            >
              {tag}
            </span>
          ))}
        </Marquee>
      </section>

      {/* 2. PROBLEMS WE FIX GRID */}
      <section className="py-20 md:py-24 bg-white border-b border-border" id="problems">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand mb-2 block">
              Problem-Led Solutions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Problems We Fix
            </h2>
            <p className="text-neutral-600 text-sm md:text-base">
              You don&apos;t buy abstract agency services. You buy solutions to specific revenue bottlenecks. Select what is holding back your growth:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/solutions/ads-not-generating-leads"
              className="group p-8 rounded-2xl border border-neutral-200 bg-surface/40 hover:bg-white hover:border-foreground/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <AlertCircle size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-brand transition-colors">
                  &ldquo;I run ads but get low-quality leads&rdquo;
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Wasting ad budget on irrelevant clicks, wrong numbers, and tire-kickers? We overhaul targeting, install multi-step qualification filters, and align ad promises with buyer intent.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-brand pt-4 border-t border-neutral-200/60">
                <span>See how we fix this</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              href="/solutions/website-not-converting"
              className="group p-8 rounded-2xl border border-neutral-200 bg-surface/40 hover:bg-white hover:border-foreground/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <MousePointerClick size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-brand transition-colors">
                  &ldquo;My website looks fine but doesn&apos;t convert&rdquo;
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Visitors browse and leave without filling a form or calling? We re-engineer value propositions above the fold, boost mobile speed, and install 1-click WhatsApp booking triggers.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-brand pt-4 border-t border-neutral-200/60">
                <span>See how we fix this</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              href="/solutions/not-showing-on-google"
              className="group p-8 rounded-2xl border border-neutral-200 bg-surface/40 hover:bg-white hover:border-foreground/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <MapPinOff size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-brand transition-colors">
                  &ldquo;I don&apos;t show up on Google or Maps&rdquo;
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Competitors dominate local search while your store is invisible? We optimize your Google Business Profile, fix citations, and implement review generation for 3-pack dominance.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-brand pt-4 border-t border-neutral-200/60">
                <span>See how we fix this</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              href="/solutions/brand-or-product-launch"
              className="group p-8 rounded-2xl border border-neutral-200 bg-surface/40 hover:bg-white hover:border-foreground/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Rocket size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-brand transition-colors">
                  &ldquo;I&apos;m launching a brand or product&rdquo;
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Starting from scratch without identity or launch buzz? We deliver custom vector brand identity, launch-ready web engineering, and introductory awareness ad campaigns in days.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-brand pt-4 border-t border-neutral-200/60">
                <span>See how we fix this</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              href="/solutions/consistent-content"
              className="group p-8 rounded-2xl border border-neutral-200 bg-surface/40 hover:bg-white hover:border-foreground/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Clock size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-brand transition-colors">
                  &ldquo;I can&apos;t post consistently&rdquo;
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Too busy running operations to script Reels and design posts? We provide 30-day AI-assisted content calendars, scripts, and graphics in 48 hours. You just review and approve.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-brand pt-4 border-t border-neutral-200/60">
                <span>See how we fix this</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              href="/solutions/sell-online-shopify"
              className="group p-8 rounded-2xl border border-neutral-200 bg-surface/40 hover:bg-white hover:border-foreground/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <ShoppingBag size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-brand transition-colors">
                  &ldquo;I want to sell online&rdquo;
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Ready to launch an e-commerce channel? We build custom Shopify stores with Razorpay, COD OTP verification, shipping automation, and WhatsApp abandoned cart recovery.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-brand pt-4 border-t border-neutral-200/60">
                <span>See how we fix this</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. WHO WE WORK WITH (USE-CASE ROW) */}
      <section className="py-20 md:py-24 bg-surface border-b border-border" id="use-cases">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Industry Use Cases
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Who We Work With
            </h2>
            <p className="text-neutral-600 text-sm md:text-base">
              Custom-built customer acquisition setups engineered for your specific business model:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              { title: "Clinics & Doctors", slug: "clinics-doctors", icon: <Stethoscope size={20} />, desc: "Patient bookings & local Google Maps 3-Pack." },
              { title: "Salons & Wellness", slug: "salons-wellness", icon: <Scissors size={20} />, desc: "Bridal packages & appointment scheduling." },
              { title: "Coaching & Education", slug: "coaching-education", icon: <GraduationCap size={20} />, desc: "Batch enrollments & qualified student leads." },
              { title: "Real Estate", slug: "real-estate", icon: <Building2 size={20} />, desc: "Verified buyer inquiries & site visit bookings." },
              { title: "Restaurants & Cafes", slug: "restaurants-cafes", icon: <Utensils size={20} />, desc: "Weekend table reservations & local footfall." },
              { title: "D2C & Fashion", slug: "d2c-fashion", icon: <Store size={20} />, desc: "Shopify stores, catalog ads & low RTO checkout." },
              { title: "B2B Manufacturers & Exporters", slug: "b2b-manufacturers-exporters", icon: <Factory size={20} />, desc: "Wholesale RFQs & technical procurement SEO." },
              { title: "Home & Local Services", slug: "home-local-services", icon: <Wrench size={20} />, desc: "Direct customer calls & service territory SEO." },
              { title: "Creators & Artists", slug: "creators-artists", icon: <Sparkles size={20} />, desc: "Press kits, showreels & event booking funnels." },
            ].map((uc) => (
              <Link
                key={uc.slug}
                href={`/use-cases/${uc.slug}`}
                className="group p-5 bg-white rounded-xl border border-neutral-200/80 hover:border-foreground/30 hover:shadow-sm transition-all flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-surface text-foreground flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                  {uc.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground group-hover:text-brand flex items-center gap-1.5 transition-colors">
                    <span>{uc.title}</span>
                    <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 leading-snug">{uc.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES (EXISTING CONDENSED) */}
      <section className="py-20 md:py-24 bg-white border-b border-border" id="services">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Core Capabilities
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Everything Your Business Needs — In One Place
            </h2>
            <p className="text-neutral-600 text-sm md:text-base">
              Integrated execution across brand design, web engineering, local SEO, and paid performance ads.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <ServiceCard 
              title="Brand Identity Design"
              description="Visual identity that builds trust and recognition."
              features={["Logo, palette, typography", "Brand guidelines", "Delivered in 7 days"]}
              icon={<Palette size={24} />}
              href="/services/brand-identity"
            />
            <ServiceCard 
              title="Social Media Marketing"
              description="Consistent posting — you just approve."
              features={["Instagram Reels strategy", "Facebook page setup", "AI captions & scripts"]}
              icon={<Share2 size={24} />}
              href="/services/social-media-marketing"
            />
            <ServiceCard 
              title="Ads Campaign Setup"
              description="Starting at ₹2,000 ad spend — any budget."
              features={["Meta Ads (FB + Insta)", "Google Search & Display", "A/B testing & reporting"]}
              icon={<Megaphone size={24} />}
              href="/services/meta-google-ads"
            />
            <ServiceCard 
              title="Website Development"
              description="Fast, mobile-first websites built on modern stack."
              features={["5-page business site", "SEO-optimized from day one", "Includes Google Business setup"]}
              icon={<Monitor size={24} />}
              href="/services/website-development"
            />
            <ServiceCard 
              title="Google Business Profile"
              description="Rank in Google Maps and 'near me' searches."
              features={["Claim and verify", "Full optimization", "Review management"]}
              icon={<MapPin size={24} />}
              href="/services/google-business-profile"
            />
            <ServiceCard 
              title="AI Content Marketing"
              description="Typical 30-day content calendar delivered in 48 hours."
              features={["AI Reels & blog scripts", "WhatsApp broadcast content", "30-day calendars in 48h"]}
              icon={<Zap size={24} />}
              href="/services/ai-content-marketing"
            />
            <ServiceCard 
              title="Event Promotion"
              description="End-to-end event buzz and coverage."
              features={["Pre-event ads & WhatsApp", "Live coverage brief", "Post-event repurposing"]}
              icon={<Calendar size={24} />}
              href="/events"
            />
            <ServiceCard 
              title="E-commerce Websites"
              description="High-converting Shopify stores built to sell."
              features={["Custom Shopify store setup", "Payment & shipping setup", "Mobile-first & SEO-ready"]}
              icon={<ShoppingBag size={24} />}
              href="/ecom-websites"
            />
          </div>
        </div>
      </section>

      {/* AI Marketing Advantage Section (Method & Context) */}
      <section className="py-20 md:py-24 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px]" />
        <div className="container relative mx-auto px-6 max-w-5xl text-center">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white border border-white/10">
            <Zap size={28} />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 block">
            The Speed Advantage
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            AI-Powered Marketing. Agency Quality. Startup Price.
          </h2>
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto mb-12">
            We use artificial intelligence to accelerate creative production — meaning you get professional Reels scripts, ad copy, blog posts, and social content delivered faster and more efficiently than legacy agency models. Typical 30-day content calendar delivered in 48 hours via AI workflows and human editing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <Clock size={24} className="text-amber-400 mb-3" />
              <p className="font-bold text-lg mb-1">48-Hour Turnaround</p>
              <p className="text-xs text-neutral-300 leading-relaxed">Typical 30-day content calendar delivered in 48 hours via AI workflows and human editing.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <ShieldCheck size={24} className="text-emerald-400 mb-3" />
              <p className="font-bold text-lg mb-1">Human Strategic Direction</p>
              <p className="text-xs text-neutral-300 leading-relaxed">Every AI-generated draft is reviewed and vetted by experienced marketers for brand voice and market relevance.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <Layers size={24} className="text-sky-400 mb-3" />
              <p className="font-bold text-lg mb-1">Cost Savings</p>
              <p className="text-xs text-neutral-300 leading-relaxed">Direct savings from reduced agency overhead passed onto founders with no bloated management retainers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROOF: REVIEWS + CASE STUDIES BLOCK */}
      <section className="py-20 md:py-24 bg-white border-b border-border" id="proof">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
              <CheckCircle2 size={14} className="text-emerald-600" />
              <span>Google Business Profile Verified Reviews</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Rated 5.0 ★ on Google Reviews
            </h2>
            <p className="text-neutral-600 text-base md:text-lg mb-6">
              Read authentic feedback from founders, startups, and business owners who partner with Nexudyam.
            </p>
            <a
              href="https://share.google/B15NK2QgaMEn9hpoX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:opacity-75 transition-opacity underline underline-offset-4"
            >
              <span>View our live listing &amp; reviews on Google Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl border border-neutral-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden h-full"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-amber-400" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div role="img" aria-label={`${t.rating} out of 5 stars`} className="flex text-amber-400 gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 size={11} />
                      Verified
                    </span>
                  </div>

                  <p className="text-neutral-700 text-sm md:text-[15px] leading-relaxed mb-6 font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200/70 mt-auto">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-100 text-foreground font-bold flex items-center justify-center text-sm shrink-0 border border-neutral-200">
                      {t.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-foreground text-sm truncate">{t.name}</p>
                      <p className="text-xs text-neutral-500 flex items-center gap-1.5">
                        <span>{t.role}</span>
                        <span>•</span>
                        <span>{t.date}</span>
                      </p>
                    </div>
                  </div>

                  {t.ownerReply && (
                    <div className="bg-surface border border-neutral-200/80 rounded-xl p-3 text-xs text-neutral-600 mt-3">
                      <span className="font-semibold text-foreground block mb-0.5">Response from owner:</span>
                      <p className="italic">&ldquo;{t.ownerReply}&rdquo;</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Case Studies Block (Hidden when publishedCaseStudies is empty) */}
          {publishedCaseStudies.length > 0 && (
            <div className="mt-20 pt-16 border-t border-neutral-200">
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-brand mb-2 block">
                  Proven Case Studies
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground">
                  Real Growth Stories
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {publishedCaseStudies.map((cs) => (
                  <Link
                    key={cs.slug}
                    href={`/case-studies/${cs.slug}`}
                    className="p-8 bg-surface rounded-2xl border border-neutral-200 hover:border-foreground/30 transition-all block group"
                  >
                    <span className="text-xs font-semibold text-brand uppercase tracking-wider block mb-2">{cs.industry}</span>
                    <h4 className="font-display font-bold text-xl text-foreground group-hover:text-brand transition-colors mb-3">
                      {cs.title}
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-6">{cs.challenge}</p>
                    <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-brand">
                      <span>Read full case study</span>
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. PRICING SECTION */}
      <section className="py-20 md:py-24 bg-surface border-b border-border" id="pricing">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Transparent Packages
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              No Confusion. No Hidden Costs. Just Growth.
            </h2>
            <p className="text-neutral-600 text-sm md:text-base">
              Clear, predictable monthly plans tailored for every stage of your business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
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
                "Priority support (4-hour response)"
              ]}
            />
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION (LOCATION-NEUTRAL) */}
      <section className="py-20 md:py-24 bg-white border-b border-border" id="faq">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Everything You Need to Know
            </h2>
          </div>
          <Accordion items={faqData} />
        </div>
      </section>

      {/* 8. FINAL CTA + AUDIT FORM */}
      <section className="py-20 md:py-24 bg-surface" id="lead-audit">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand mb-2 block">
              Free 5-Point Lead Audit
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Free 5-Point Lead Audit
            </h2>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
              Fill out the form below with your details. Our strategy team will analyze your website conversion flow, local map rankings, and ad funnels, and get in touch with an actionable roadmap.
            </p>
          </div>
          <LeadForm />
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
    provider: { "@type": "Organization", name: "Nexudyam", url: "https://www.nexudyam.in" },
    url: "https://www.nexudyam.in/services/brand-identity",
    areaServed: "IN",
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
    description: "Consistent posting, Instagram Reels strategy, Facebook page management, and AI captions & scripts for businesses across India.",
    provider: { "@type": "Organization", name: "Nexudyam", url: "https://www.nexudyam.in" },
    url: "https://www.nexudyam.in/services/social-media-marketing",
    areaServed: "IN",
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
    provider: { "@type": "Organization", name: "Nexudyam", url: "https://www.nexudyam.in" },
    url: "https://www.nexudyam.in/services/meta-google-ads",
    areaServed: "IN",
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
    provider: { "@type": "Organization", name: "Nexudyam", url: "https://www.nexudyam.in" },
    url: "https://www.nexudyam.in/services/website-development",
    areaServed: "IN",
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
    provider: { "@type": "Organization", name: "Nexudyam", url: "https://www.nexudyam.in" },
    url: "https://www.nexudyam.in/services/google-business-profile",
    areaServed: "IN",
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
    description: "Typical 30-day content calendar delivered in 48 hours for Reels scripts, blog posts, and WhatsApp broadcast copy with human review.",
    provider: { "@type": "Organization", name: "Nexudyam", url: "https://www.nexudyam.in" },
    url: "https://www.nexudyam.in/services/ai-content-marketing",
    areaServed: "IN",
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
    provider: { "@type": "Organization", name: "Nexudyam", url: "https://www.nexudyam.in" },
    url: "https://www.nexudyam.in/events",
    areaServed: "IN",
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
    description: "Custom Shopify e-commerce store setup, payment gateway integration, product catalog design, and conversion rate optimization for MSMEs.",
    provider: { "@type": "Organization", name: "Nexudyam", url: "https://www.nexudyam.in" },
    url: "https://www.nexudyam.in/ecom-websites",
    areaServed: "IN",
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
    question: "Why should I choose Nexudyam for digital marketing?",
    answer: "Nexudyam specializes in fixing the disconnect between ad clicks and real customer inquiries for Indian startups and MSMEs. We combine high-performance Meta and Google Ads, conversion-focused Next.js websites, and rapid AI content workflows with human strategy, delivering clear ROI and responsive WhatsApp support without bloated agency retainers."
  },
  {
    question: "What website services does Nexudyam provide?",
    answer: "We build custom, ultra-fast business websites engineered for lead generation and search engine visibility. Our services include 5-page custom Next.js websites, Shopify e-commerce setups, mobile-first responsive architecture, Google Business Profile integration, and on-page technical SEO so your site turns incoming visitors into qualified phone calls and WhatsApp leads."
  },
  {
    question: "How does local SEO help businesses rank in multiple cities?",
    answer: "Local SEO helps service-area businesses and multi-city brands capture high-intent 'near me' and city-specific searches on Google Maps and search results. By optimizing Google Business Profiles, structuring location landing pages, maintaining consistent business citations, and cultivating authentic reviews, we help your business rank at the top of local 3-packs across target markets."
  },
  {
    question: "Which digital marketing package suits startup lead generation best?",
    answer: "Our ₹9,999/month 'Grow' package offers the best value for startups needing active lead generation. It includes a custom 5-page Next.js website, complete Meta and Google Ads campaign setup, 16 social posts and 4 Reels monthly, and performance reporting. Early-stage businesses can start with our ₹4,999/month 'Launch' package."
  },
  {
    question: "How does AI content marketing compare to a traditional agency?",
    answer: "AI-assisted content marketing produces ad copy, Reels scripts, social posts, and blog outlines in 48 hours rather than weeks, at a fraction of legacy agency costs. Senior strategists edit and refine every output for regional nuances, giving MSMEs rapid execution and high creative volume without paying for agency bureaucracy."
  },
  {
    question: "How can I get a free lead audit from Nexudyam?",
    answer: "You can claim a free 5-point lead audit by submitting our lead form or messaging us directly on WhatsApp at +91 91618 81100. Our team analyzes your ad traffic, landing page conversion flow, search visibility, and response systems, delivering an actionable roadmap to fix lost leads within 24 hours."
  }
];

const testimonials = [
  {
    quote: "I'm really happy with my experience with the team! They're warm, supportive, creative, and always willing to understand exactly what I'm looking for. I truly appreciate their effort and personal attention. It's been lovely working with them, and I would happily recommend them to anyone looking for a great digital marketing team",
    name: "Neha Gandhi",
    role: "Verified Google Review",
    company: "Google Business Profile",
    initials: "NG",
    rating: 5,
    date: "4 weeks ago",
    ownerReply: "Thanks mam for your valuable feedback 🙏",
  },
  {
    // {{TODO: review contains Kanpur in original text - decide whether to keep or edit customer quote}}
    quote: "NexUdyam ke saath mera experience kaafi achha raha. Starting se hi team kaafi professional aur cooperative thi. Inhone meri requirements ko properly samjha aur uske according suggestions diye, jo mujhe kaafi useful lage. Communication bhi smooth raha aur kaam ko lekar response time bhi achha था. Sabse achhi baat ye lagi ki sirf service provide karne ke liye nahi, but business ko actually kaise grow kiya ja sakta hai uss perspective se bhi guidance di. Kanpur mein digital marketing aur branding ke liye definitely ek baar NexUdyam ko consider kar sakte ho. Overall experience very positive raha. Keep up the good work!",
    name: "Krishang Gandhi",
    role: "Verified Google Review",
    company: "Google Business Profile",
    initials: "KG",
    rating: 5,
    date: "4 weeks ago",
    ownerReply: "Thanks a lot these words means a lot to us .",
  },
  {
    quote: "Had a great experience with NexUdyam Brand Launch Agency. Their team is professional, supportive, and highly dedicated to helping brands grow and reach the right audience. The collaboration process was smooth, communication was excellent, and the overall service quality exceeded expectations. Highly recommended for startups, businesses, and brands looking for strong promotion and launch support. 🚀",
    name: "Clamss International Limited",
    role: "Corporate Client",
    company: "Google Business Profile",
    initials: "CI",
    rating: 5,
    date: "21 weeks ago",
    ownerReply: "Thanks a lot",
  },
];
