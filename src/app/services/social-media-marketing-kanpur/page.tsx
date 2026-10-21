import Link from "next/link";
import { CheckCircle2, Clock, IndianRupee, ArrowRight, Share2 } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd, breadcrumbs, serviceSchema, faqPage } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "Social Media Marketing Services in Kanpur | Nexudyam",
  description: "Monthly social media marketing in Kanpur. Structured post calendars, Instagram Reels scripts, graphics, and community management.",
  path: "/services/social-media-marketing-kanpur",
  ogImage: "/og/default.png",
});

const faqs = [
  {
    question: "Does someone visit our business to shoot videos?",
    answer: "We provide detailed script blueprints, audio suggestions, and framing guides that your staff can shoot on any smartphone. For dedicated on-site videography, custom packages are available.",
  },
  {
    question: "Do I have to approve posts before they are published?",
    answer: "Yes. We never publish without your written approval of the monthly content calendar.",
  },
  {
    question: "How do you measure social media success?",
    answer: "We evaluate reach, profile visits, post saves, direct message inquiries, and website click-throughs.",
  },
  {
    question: "Can you run sponsored boosts on our best posts?",
    answer: "Yes, post boosts can be integrated with our ads management setup.",
  },
];

export default function SocialMediaMarketingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Social Media Marketing in Kanpur", url: "/services/social-media-marketing-kanpur" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Social Media Marketing in Kanpur",
          description: "Monthly social media marketing in Kanpur. Structured post calendars, Instagram Reels scripts, graphics, and community management.",
          url: "https://www.nexudyam.in/services/social-media-marketing-kanpur",
          serviceType: "Social Media Marketing",
          price: "4999",
        })}
      />
      <JsonLd data={faqPage(faqs)} />

      <div className="py-20 md:py-32">
        <div className="container mx-auto px-5 max-w-5xl">
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
              Social Growth Vertical
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Social Media Marketing in Kanpur
            </h1>
            <div className="p-6 bg-surface border-l-4 border-brand rounded-r-2xl">
              <p className="text-lg text-foreground font-medium leading-relaxed">
                Nexudyam provides end-to-end social media marketing services in Kanpur for retail brands, service providers, and local institutions. We plan monthly editorial calendars, design on-brand static and carousel graphics, write engaging post copy, produce short-form video scripts, and manage community engagement across Instagram and Facebook to build consistent audience recognition.
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
                <p className="text-xs font-mono uppercase text-muted-foreground">Monthly Plans</p>
                <p className="text-2xl font-display font-bold text-foreground">₹4,999 / mo</p>
                <p className="text-xs text-muted-foreground">Launch (8 posts) or Grow (16 posts + 4 Reels at ₹9,999)</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-surface rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-muted-foreground">Calendar Delivery</p>
                <p className="text-2xl font-display font-bold text-foreground">Monthly In Advance</p>
                <p className="text-xs text-muted-foreground">Calendars delivered before the 25th of each month</p>
              </div>
            </div>
          </div>

          {/* What is Included */}
          <section className="mb-20">
            <h2 className="font-display text-3xl font-bold mb-8 text-foreground">
              What is Included in Social Media Marketing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "12 to 16 branded social media posts per month (mix of graphics, carousels, and announcements)",
                "4 to 8 Instagram Reels scripts with hook, shot list, and caption instructions",
                "Monthly content calendar delivered in advance for client approval",
                "Researched local Kanpur and industry-specific hashtag clusters",
                "Bio and highlight cover design optimization for Instagram and Facebook",
                "Monthly engagement and follower growth summary report",
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
              Our 4-Step Social Media Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Channel Audit", desc: "We review existing profile assets, standardize handles, and align brand visuals." },
                { step: "02", title: "Calendar Planning", desc: "We build a 30-day theme calendar aligning with holidays, local events, and promotions." },
                { step: "03", title: "Creative Drafting", desc: "We create branded graphics and write captions, submitting them for your review." },
                { step: "04", title: "Scheduling", desc: "We schedule posts at optimal audience hours and track engagement metrics." },
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
              Grow Your Business Presence on Social Media
            </h3>
            <p className="text-white/80 max-w-xl mx-auto mb-8 text-base">
              Speak with our social strategy team to plan your first 30-day posting calendar.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-full font-bold hover:bg-accent transition-colors"
            >
              Plan Your Content on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
