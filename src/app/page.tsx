import Link from "next/link";
import { ArrowRight, Zap, Palette, Share2, Megaphone, Monitor, MapPin, Calendar, Users, Cpu, ShoppingBag, Star, CheckCircle2, ExternalLink, ShieldCheck, Clock, Layers } from "lucide-react";
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

export const metadata = pageMetadata({
  title: "Digital Marketing & Branding Agency in Kanpur | Nexudyam",
  description: "Nexudyam helps startups & MSMEs in Kanpur & UP get more customers. We design brands, build websites, and run Meta/Google Ads. Get a free audit today!",
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

      {/* Hero Section: Editorial, Authoritative, High-End Agency Style */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-border/60">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-xs border border-neutral-200 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 text-neutral-800 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Empowering Startups &amp; MSMEs in Kanpur &amp; Uttar Pradesh</span>
          </div>

          {/* Confident, Architectural H1 */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.08] max-w-4xl mx-auto">
            Grow Your Business Online with Kanpur&apos;s Top Digital Marketing Agency
          </h1>
          
          {/* Service Cycling Highlight */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-base md:text-xl font-medium text-neutral-600 mb-8">
            <span>Specializing in</span>
            <RotatingText
              words={[
                "Meta & Google Ads",
                "Modern Next.js Websites",
                "Google Maps 3-Pack SEO",
                "AI Content Marketing",
                "Brand Identity Design",
              ]}
            />
          </div>

          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Nexudyam helps startups and MSMEs in Kanpur and UP grow online. We create high-converting digital marketing campaigns, build websites, and design brand identities to get you more leads.{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-foreground font-bold underline underline-offset-4 hover:opacity-75 transition-opacity">
              Claim your free marketing audit today
            </a> before your competitors find your next customer.
          </p>

          {/* Action Row: High-End Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-foreground text-white px-8 py-4 rounded-full text-base font-bold hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{HERO_CTA_TEXT}</span>
              <ArrowRight size={18} />
            </a>
            <Link
              href="/pricing"
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
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">Businesses Trust Us</p>
              </div>
              <div className="pt-4 md:pt-0 md:pl-6">
                <p className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-1 flex items-center justify-center gap-1">
                  5.0 <Star size={20} className="fill-amber-400 text-amber-400 inline" />
                </p>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">Google Maps Rating (3 reviews)</p>
              </div>
              <div className="pt-4 md:pt-0 md:pl-6">
                <p className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-1">10x</p>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">Faster Delivery with AI</p>
              </div>
              <div className="pt-4 md:pt-0 md:pl-6">
                <p className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-1">₹4,999</p>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">Starter Package Price</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Services Marquee Strip */}
      <section className="py-8 border-b border-border bg-surface/50 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl mb-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
            Trusted Core Capabilities for Startups &amp; MSMEs Across Uttar Pradesh
          </p>
        </div>
        <Marquee speed="normal" pauseOnHover={true} className="py-2">
          {[
            "Brand Identity Design",
            "Social Media Marketing",
            "Google Ads (Search & Display)",
            "Meta Ads (FB + Instagram)",
            "Next.js Website Development",
            "Shopify E-commerce Stores",
            "Google Business Profile (3-Pack)",
            "AI Content Marketing",
            "Event Promotion & Coverage",
            "Local SEO Kanpur & UP",
          ].map((tag) => (
            <span 
              key={tag} 
              className="text-xs sm:text-sm font-semibold text-foreground bg-white border border-neutral-200 px-4 py-2 rounded-full whitespace-nowrap shadow-2xs hover:border-foreground/40 transition-colors"
            >
              {tag}
            </span>
          ))}
        </Marquee>
      </section>

      {/* On-Page Copywriting Content Expansion Section (GEO/SEO Optimization) */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
            Empowering MSMEs with Premium Digital Solutions in Uttar Pradesh
          </h2>
          <div className="text-neutral-600 leading-relaxed space-y-4 text-center max-w-3xl mx-auto text-sm sm:text-base">
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
      <section className="py-20 md:py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 block">
            The Market Challenge
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Most Startups &amp; Businesses Are Invisible Online. <span className="text-neutral-500">We Fix That.</span>
          </h2>
          <p className="text-base md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            You built something real. A business, a craft, a dream. But without the right digital presence, your potential customers can&apos;t find you — they&apos;re finding your competitors instead. The problem isn&apos;t your product. It&apos;s visibility. And that&apos;s exactly what Nexudyam was built to solve.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              What We Deliver
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Everything Your Business Needs — In One Place
            </h2>
            <p className="text-neutral-600 text-sm md:text-base">
              High-converting execution across brand design, web engineering, local SEO, and paid performance ads.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            <ServiceCard 
              title="Brand Identity Design"
              description="Visual identity that builds trust and recognition."
              features={["Logo, palette, typography", "Brand guidelines", "Delivered in 7 days"]}
              icon={<Palette size={26} />}
              href="/services/brand-identity-kanpur"
            />
            <ServiceCard 
              title="Social Media Marketing"
              description="Consistent posting — you just approve."
              features={["Instagram Reels strategy", "Facebook page setup", "AI captions & scripts"]}
              icon={<Share2 size={26} />}
              href="/services/social-media-marketing-kanpur"
            />
            <ServiceCard 
              title="Ads Campaign Setup"
              description="Starting at ₹2,000 ad spend — any budget."
              features={["Meta Ads (FB + Insta)", "Google Search & Display", "A/B testing & reporting"]}
              icon={<Megaphone size={26} />}
              href="/services/meta-google-ads-kanpur"
            />
            <ServiceCard 
              title="Website Development"
              description="Fast, mobile-first websites built on modern stack."
              features={["5-page business site", "SEO-optimized from day one", "Includes Google Business setup"]}
              icon={<Monitor size={26} />}
              href="/services/website-development-kanpur"
            />
            <ServiceCard 
              title="Google Business Profile"
              description="Rank in Google Maps and 'near me' searches."
              features={["Claim and verify", "Full optimization", "Review management"]}
              icon={<MapPin size={26} />}
              href="/services/google-business-profile-kanpur"
            />
            <ServiceCard 
              title="AI Content Marketing"
              description="10x faster than traditional agencies — at 1/3rd the cost."
              features={["AI Reels & blog scripts", "WhatsApp broadcast content", "30-day calendars in 48h"]}
              icon={<Cpu size={26} />}
              href="/services/ai-content-marketing"
            />
            <ServiceCard 
              title="Event Promotion"
              description="End-to-end event buzz and coverage."
              features={["Pre-event ads & WhatsApp", "Live coverage brief", "Post-event repurposing"]}
              icon={<Calendar size={26} />}
              href="/events"
            />
            <ServiceCard 
              title="E-commerce Websites"
              description="High-converting Shopify stores built to sell."
              features={["Custom Shopify store setup", "Payment & shipping setup", "Mobile-first & SEO-ready"]}
              icon={<ShoppingBag size={26} />}
              href="/ecom-websites"
            />
          </div>
        </div>
      </section>

      {/* AI Marketing Advantage Section (High-Contrast Editorial) */}
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
            We use artificial intelligence to create content 10x faster — meaning you get professional Reels scripts, ad copy, blog posts, and social content delivered faster and cheaper than any traditional agency. You get speed. You get quality. You keep the savings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <Clock size={24} className="text-amber-400 mb-3" />
              <p className="font-bold text-lg mb-1">48-Hour Turnaround</p>
              <p className="text-xs text-neutral-300 leading-relaxed">30-day social calendars, ad creatives, and copywriting produced in days, not weeks.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <ShieldCheck size={24} className="text-emerald-400 mb-3" />
              <p className="font-bold text-lg mb-1">Human Strategic Direction</p>
              <p className="text-xs text-neutral-300 leading-relaxed">Every AI-generated draft is edited and vetted by senior marketers for regional market nuances.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <Layers size={24} className="text-sky-400 mb-3" />
              <p className="font-bold text-lg mb-1">70% Cost Savings</p>
              <p className="text-xs text-neutral-300 leading-relaxed">No bloated agency overhead. We pass the operational efficiency directly back to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nexudyam: 4 Pillars of Excellence */}
      <section className="py-20 md:py-24 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2 block">
              Why Partner With Us
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Why Hundreds of Businesses Choose Nexudyam
            </h2>
            <p className="text-neutral-600 text-sm md:text-base">
              Engineered for local Indian entrepreneurs who need transparent results, responsive communication, and affordable growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-surface p-8 rounded-2xl border border-neutral-200/90 shadow-2xs hover:shadow-md transition-shadow">
              <span className="font-mono text-xs font-bold text-neutral-600 uppercase tracking-wider block mb-2">01 / INTEGRATED TEAM</span>
              <p className="font-display font-bold text-xl sm:text-2xl mb-3 text-foreground">One Partner, Everything Included</p>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">No juggling between a freelance designer, an unvetted web developer, and an ad agency. We handle brand identity, custom website code, and ad campaigns under one roof.</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl border border-neutral-200/90 shadow-2xs hover:shadow-md transition-shadow">
              <span className="font-mono text-xs font-bold text-neutral-600 uppercase tracking-wider block mb-2">02 / WORKFLOW SPEED</span>
              <p className="font-display font-bold text-xl sm:text-2xl mb-3 text-foreground">AI-Powered, Agency Quality</p>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">Our AI tools cut delivery time and cost in half. You get faster content, better results, and more savings than any traditional agency with zero compromise on creative quality.</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl border border-neutral-200/90 shadow-2xs hover:shadow-md transition-shadow">
              <span className="font-mono text-xs font-bold text-neutral-600 uppercase tracking-wider block mb-2">03 / HONEST PRICING</span>
              <p className="font-display font-bold text-xl sm:text-2xl mb-3 text-foreground">MSME-First Pricing</p>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">We built our packages for real Indian businesses — not for corporates. ₹4,999 gets you started with zero hidden retainers or multi-month lock-in commitments.</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl border border-neutral-200/90 shadow-2xs hover:shadow-md transition-shadow">
              <span className="font-mono text-xs font-bold text-neutral-600 uppercase tracking-wider block mb-2">04 / LOCAL ROOTS</span>
              <p className="font-display font-bold text-xl sm:text-2xl mb-3 text-foreground">Local Roots, Statewide Reach</p>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">Based in Kanpur. Built for Bharat. We understand regional consumer psychology and local market nuances across Kanpur, Lucknow, Noida, Prayagraj, and Varanasi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-24 bg-surface border-b border-border">
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
                "Priority support (2-hour response)"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section (Authentic Google Business Profile Verified Reviews) */}
      <section className="py-20 md:py-24 bg-white border-b border-border">
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
              Read authentic feedback from founders, startups, and business owners who partner with Nexudyam in Kanpur and Uttar Pradesh.
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
                {/* Accent top border */}
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

          <div className="text-center mt-12">
            <a
              href="https://share.google/B15NK2QgaMEn9hpoX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-neutral-200 px-6 py-3 rounded-full text-sm font-bold text-foreground hover:bg-neutral-50 transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Review Nexudyam on Google Business Profile</span>
              <ExternalLink size={14} className="text-neutral-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Free Audit Lead Capture Form Section */}
      <section className="py-20 md:py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Free Growth Audit
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Free Digital Growth Audit
            </h2>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
              Fill out the form below with your name and WhatsApp number. Our strategy team will analyze your website, local map rankings, and social profiles, and get in touch with you with a custom roadmap.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-24 bg-white">
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
    </>
  );
}

const serviceSchemas = [
  {
    "@type": "Service",
    name: "Brand Identity Design",
    description: "Visual identity that builds trust and recognition for MSMEs and startups, including logo, color palette, typography, and brand guidelines.",
    provider: { "@type": "LocalBusiness", name: "Nexudyam" },
    url: "https://www.nexudyam.in/services/brand-identity-kanpur",
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
    url: "https://www.nexudyam.in/services/social-media-marketing-kanpur",
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
    url: "https://www.nexudyam.in/services/meta-google-ads-kanpur",
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
    url: "https://www.nexudyam.in/services/website-development-kanpur",
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
    url: "https://www.nexudyam.in/services/google-business-profile-kanpur",
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
    url: "https://www.nexudyam.in/services/ai-content-marketing",
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
    quote: "NexUdyam ke saath mera experience kaafi achha raha. Starting se hi team kaafi professional aur cooperative thi. Inhone meri requirements ko properly samjha aur uske according suggestions diye, jo mujhe kaafi useful lage. Communication bhi smooth raha aur kaam ko lekar response time bhi achha tha. Sabse achhi baat ye lagi ki sirf service provide karne ke liye nahi, but business ko actually kaise grow kiya ja sakta hai uss perspective se bhi guidance di. Kanpur mein digital marketing aur branding ke liye definitely ek baar NexUdyam ko consider kar sakte ho. Overall experience very positive raha. Keep up the good work!",
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
