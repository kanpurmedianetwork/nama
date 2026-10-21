import Link from "next/link";
import { CheckCircle2, Clock, IndianRupee, ArrowRight, Palette } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd, breadcrumbs, serviceSchema, faqPage } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "Brand Identity Design Services in Kanpur | Nexudyam",
  description: "Professional brand identity and logo design services in Kanpur. Custom logos, color palettes, typography, and brand guideline decks.",
  path: "/services/brand-identity-kanpur",
  ogImage: "/og/default.png",
});

const faqs = [
  {
    question: "Do I own full copyright over my logo design?",
    answer: "Yes. Upon project delivery, all design rights and vector master files belong entirely to your business.",
  },
  {
    question: "Can the logo files be used for large storefront signboards?",
    answer: "Yes. We supply vector formats (SVG, EPS, PDF) that scale to any billboard or signage dimension without pixelation.",
  },
  {
    question: "What if none of the initial concepts match my vision?",
    answer: "We conduct a recalibration discussion and provide an additional revision round based on refined specifications.",
  },
  {
    question: "Do you also design business cards and letterheads?",
    answer: "Yes, stationery design packages including visiting cards, letterheads, and bill book templates are available upon request.",
  },
];

export default function BrandIdentityPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Brand Identity Design in Kanpur", url: "/services/brand-identity-kanpur" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Brand Identity Design in Kanpur",
          description: "Professional brand identity and logo design services in Kanpur. Custom logos, color palettes, typography, and brand guideline decks.",
          url: "https://www.nexudyam.in/services/brand-identity-kanpur",
          serviceType: "Brand Identity & Graphic Design",
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
              Brand Identity Vertical
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Brand Identity Design in Kanpur
            </h1>
            <div className="p-6 bg-surface border-l-4 border-brand rounded-r-2xl">
              <p className="text-lg text-foreground font-medium leading-relaxed">
                Nexudyam delivers brand identity design services in Kanpur for entrepreneurs, new ventures, and retail brands. We design custom vector logos, establish complementary color palettes, select clear brand typography, and compile comprehensive brand guidelines. These assets equip your business with a consistent, professional visual presentation across storefront signage, stationery, digital packaging, and social media channels.
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
                <p className="text-xs text-muted-foreground">One-time package or included in Launch</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-surface rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-muted-foreground">Turnaround Time</p>
                <p className="text-2xl font-display font-bold text-foreground">5 to 7 Days</p>
                <p className="text-xs text-muted-foreground">From initial brief submission</p>
              </div>
            </div>
          </div>

          {/* What is Included */}
          <section className="mb-20">
            <h2 className="font-display text-3xl font-bold mb-8 text-foreground">
              What is Included in Brand Identity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "3 distinct initial logo design concept directions",
                "Primary logo, secondary mark, and responsive app/favicon variations",
                "Vector master files (AI, EPS, SVG, PDF) and transparent PNG assets",
                "Official color system with HEX, RGB, and CMYK color codes",
                "Font hierarchy recommendations and typography pairing guide",
                "10-page brand guidelines PDF documenting proper usage rules",
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
              Our 4-Step Design Workflow
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Creative Brief", desc: "We review your sector, customer demographic, and visual preferences." },
                { step: "02", title: "Concepting", desc: "We create 3 distinct visual routes testing typographic and symbol formats." },
                { step: "03", title: "Refinement", desc: "We refine proportions, geometry, and color swatches based on your feedback." },
                { step: "04", title: "Asset Delivery", desc: "We generate high-resolution print and screen-ready vector asset packages." },
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
              Build a Recognizable Brand Identity in Kanpur
            </h3>
            <p className="text-white/80 max-w-xl mx-auto mb-8 text-base">
              Share your business idea or existing storefront branding with our creative team on WhatsApp to get started.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-full font-bold hover:bg-accent transition-colors"
            >
              Start Brand Design on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
