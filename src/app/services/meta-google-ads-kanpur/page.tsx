import Link from "next/link";
import { CheckCircle2, Clock, IndianRupee, ArrowRight, Megaphone } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd, breadcrumbs, serviceSchema, faqPage } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "Meta & Google Ads Management in Kanpur | Nexudyam",
  description: "Results-driven Meta (Facebook, Instagram) and Google Ads management for Kanpur MSMEs. Targeted lead generation with transparent reporting.",
  path: "/services/meta-google-ads-kanpur",
  ogImage: "/og/default.png",
});

const faqs = [
  {
    question: "Is the ad budget paid to Nexudyam or Google/Meta?",
    answer: "You pay ad spend directly to Google and Meta via your own debit/credit card or GST account. Our fee covers strategy, creative setup, and weekly campaign management.",
  },
  {
    question: "What is the minimum recommended ad budget?",
    answer: "We recommend starting with at least ₹3,000 to ₹5,000 per month in direct platform ad spend for local Kanpur business campaigns.",
  },
  {
    question: "How do we receive inquiries from ads?",
    answer: "Inquiries can be routed directly to your business WhatsApp number, direct telephone calls, or a dedicated website lead capture form.",
  },
  {
    question: "How soon can we expect inquiries?",
    answer: "Active campaigns begin generating impressions and clicks within 24 hours of platform review approval.",
  },
];

export default function MetaGoogleAdsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Meta & Google Ads Management in Kanpur", url: "/services/meta-google-ads-kanpur" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Meta and Google Ads Management in Kanpur",
          description: "Results-driven Meta (Facebook, Instagram) and Google Ads management for Kanpur MSMEs. Targeted lead generation with transparent reporting.",
          url: "https://www.nexudyam.in/services/meta-google-ads-kanpur",
          serviceType: "Paid Advertising Management",
          price: "9999",
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
              Paid Acquisition Vertical
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Meta and Google Ads Management in Kanpur
            </h1>
            <div className="p-6 bg-surface border-l-4 border-brand rounded-r-2xl">
              <p className="text-lg text-foreground font-medium leading-relaxed">
                Nexudyam manages Meta and Google advertising campaigns for small and medium businesses in Kanpur. We configure targeted ad sets across Instagram, Facebook, and Google Search, establish custom audience parameters, craft clear promotional copy, and track lead conversions. Campaigns are designed to generate verifiable sales and telephone inquiries within your specified monthly advertising budget.
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
                <p className="text-xs font-mono uppercase text-muted-foreground">Monthly Management Fee</p>
                <p className="text-2xl font-display font-bold text-foreground">₹9,999</p>
                <p className="text-xs text-muted-foreground">Platform ad spend starting from ₹3,000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-surface rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-muted-foreground">Campaign Launch</p>
                <p className="text-2xl font-display font-bold text-foreground">5 Business Days</p>
                <p className="text-xs text-muted-foreground">From account setup and creative approval</p>
              </div>
            </div>
          </div>

          {/* What is Included */}
          <section className="mb-20">
            <h2 className="font-display text-3xl font-bold mb-8 text-foreground">
              What is Included in Ads Management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Meta Ads account, Meta Pixel, and Conversions API integration",
                "Google Ads account setup, keyword research, and conversion tracking",
                "Ad creative graphics (up to 4 visual variations per campaign) and targeted copy",
                "Geographic targeting narrowed to Kanpur, Lucknow, and regional UP districts",
                "Negative keyword filtering to reduce unproductive Google Search ad spend",
                "Bi-weekly performance reporting on spend, clicks, reach, and cost-per-lead",
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
              Our 4-Step Campaign Management Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Audience Mapping", desc: "We identify buyer keywords, local competitor positioning, and demographic parameters." },
                { step: "02", title: "Creative Drafting", desc: "We design ad banners and write straightforward headlines aligned with local search queries." },
                { step: "03", title: "Tagging & Launch", desc: "We set up tracking parameters, connect WhatsApp conversion triggers, and launch campaigns." },
                { step: "04", title: "Optimization", desc: "We review search query reports weekly, trim wasted budget, and scale top-performing ads." },
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
              Start Generating Qualified Leads in Kanpur
            </h3>
            <p className="text-white/80 max-w-xl mx-auto mb-8 text-base">
              Talk to our paid media team on WhatsApp to evaluate the ideal initial ad budget and campaign plan for your business.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-full font-bold hover:bg-accent transition-colors"
            >
              Discuss Paid Ads on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
