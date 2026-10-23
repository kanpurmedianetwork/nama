import Link from "next/link";
import { CheckCircle2, Clock, IndianRupee, ArrowRight, MapPin, Star, ExternalLink } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd, breadcrumbs, serviceSchema, faqPage } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "Google Business Profile Optimization in Kanpur | Nexudyam",
  description: "Claim, verify, and optimize your Google Business Profile in Kanpur. Increase local visibility on Google Maps and search results.",
  path: "/services/google-business-profile-kanpur",
  ogImage: "/og/default.png",
});

const faqs = [
  {
    question: "Why is video verification required by Google?",
    answer: "Google frequently requests video verification in India to confirm physical business presence, signage, and operational equipment.",
  },
  {
    question: "How long does it take for a profile to appear on Google Maps?",
    answer: "Once verified by Google, listings typically appear publicly within 24 to 72 hours.",
  },
  {
    question: "Can you remove negative reviews?",
    answer: "Google only removes reviews that violate its community guidelines. We help you flag policy-violating reviews and draft professional responses to legitimate feedback.",
  },
  {
    question: "Do I need a physical shop to have a profile?",
    answer: "Businesses without physical storefronts can be configured as Service Area Businesses serving specific localities in Kanpur.",
  },
];

export default function GoogleBusinessProfilePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Google Business Profile in Kanpur", url: "/services/google-business-profile-kanpur" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Google Business Profile Services in Kanpur",
          description: "Claim, verify, and optimize your Google Business Profile in Kanpur. Increase local visibility on Google Maps and search results.",
          url: "https://www.nexudyam.in/services/google-business-profile-kanpur",
          serviceType: "Local SEO & Google Business Profile",
          price: "4999",
        })}
      />
      <JsonLd data={faqPage(faqs)} />

      <div className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-6">
            <Link
              href="/services"
              className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Services Hub
            </Link>
          </div>

          <header className="max-w-3xl mb-12">
            <div className="inline-block bg-brand/10 text-brand px-4 py-1.5 rounded-full text-xs font-bold tracking-tight uppercase mb-4">
              Local SEO Vertical
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Google Business Profile Services in Kanpur
            </h1>
            <div className="p-6 bg-surface border-l-4 border-brand rounded-r-2xl">
              <p className="text-lg text-foreground font-medium leading-relaxed">
                Nexudyam offers professional Google Business Profile setup and local SEO services for businesses in Kanpur. We verify your business listing, optimize your categories, publish accurate NAP details, upload storefront media, and implement localized review acquisition processes. This ensures your physical store or service appears clearly in Google Maps and local search queries.
              </p>
            </div>
          </header>

          {/* Pricing & Timeline Badge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="flex items-center gap-4 p-6 bg-surface rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                <IndianRupee size={24} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-muted-foreground">Standard Pricing</p>
                <p className="text-2xl font-display font-bold text-foreground">₹4,999</p>
                <p className="text-xs text-muted-foreground">Included within Launch plan (₹4,999/month)</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-surface rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-muted-foreground">Estimated Setup</p>
                <p className="text-2xl font-display font-bold text-foreground">7 to 14 Days</p>
                <p className="text-xs text-muted-foreground">Subject to Google verification processing</p>
              </div>
            </div>
          </div>

          {/* Google Reviews Trust Banner */}
          <div className="mb-16 p-6 bg-white border border-border rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="font-bold text-foreground text-sm">
                5.0 ★ Google Rating based on verified reviews
              </span>
            </div>
            <a
              href="https://share.google/B15NK2QgaMEn9hpoX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
            >
              <span>View Nexudyam on Google Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* What is Included */}
          <section className="mb-20">
            <h2 className="font-display text-3xl font-bold mb-8 text-foreground">
              What is Included in Profile Optimization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Profile claim, verification guidance (video, postcard, or phone), and ownership setup",
                "Primary and secondary category selection matched to Kanpur search patterns",
                "Complete NAP (Name, Address, Phone number) alignment across local directories",
                "10+ optimized business photos and storefront imagery",
                "Product catalog and service list configuration with pricing details",
                "Customer review generation short link and professional response templates",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border">
                  <CheckCircle2 size={20} className="text-brand shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Process Steps */}
          <section className="mb-20">
            <h2 className="font-display text-3xl font-bold mb-8 text-foreground">
              Our 4-Step Verification & Setup Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Audit & Claim", desc: "We identify duplicate listings and initiate official ownership verification on GBP manager." },
                { step: "02", title: "Verification", desc: "We guide your team through video recording, SMS, or postcard verification requirements." },
                { step: "03", title: "Data Enrichment", desc: "We input accurate working hours, service menus, descriptions, and geotagged shop photos." },
                { step: "04", title: "Citations & Reviews", desc: "We align your NAP on key Indian trade directories and launch your review acquisition workflow." },
              ].map((p, idx) => (
                <div key={idx} className="p-6 bg-surface rounded-2xl border border-border">
                  <span className="text-xs font-mono font-bold text-brand block mb-2">{p.step}</span>
                  <h3 className="font-bold text-base mb-2 text-foreground">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mb-20">
            <h2 className="font-display text-3xl font-bold mb-8 text-foreground">
              Frequently Asked Questions
            </h2>
            <Accordion items={faqs} />
          </section>

          {/* CTA Banner */}
          <div className="p-8 md:p-12 bg-brand rounded-2xl text-white text-center flex flex-col items-center">
            <h3 className="font-display text-3xl font-bold mb-4">
              Get Your Business Verified on Google Maps
            </h3>
            <p className="text-white/80 max-w-xl mx-auto mb-8 text-base">
              Start capturing local phone calls and foot traffic from customers searching near your Kanpur location.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-full font-bold hover:bg-accent transition-colors"
            >
              Verify Your Profile on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
