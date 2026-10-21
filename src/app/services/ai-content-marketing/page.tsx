import Link from "next/link";
import { CheckCircle2, Clock, IndianRupee, ArrowRight, Cpu } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd, breadcrumbs, serviceSchema, faqPage } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "AI Content Marketing Services in Kanpur | Nexudyam",
  description: "Fast, affordable AI content marketing for Indian MSMEs. Scalable video scripts, SEO articles, and messaging workflows with human review.",
  path: "/services/ai-content-marketing",
  ogImage: "/og/default.png",
});

const faqs = [
  {
    question: "Does Google penalize AI-generated content?",
    answer: "Google's official guidelines state that content is evaluated on helpfulness and quality, regardless of how it was produced. Because we edit and fact-check every piece with human editors, the content meets search quality standards.",
  },
  {
    question: "How does this differ from just using free ChatGPT?",
    answer: "Raw AI outputs often sound generic, hallucinate facts, and fail to reflect local Indian business contexts. We apply structured frameworks, proprietary prompt chains, and rigorous human editing.",
  },
  {
    question: "Can this content help my website rank on Google?",
    answer: "Yes. Blog articles are specifically optimized for local and industry keywords with proper heading structures and FAQ schemas.",
  },
  {
    question: "What languages are supported?",
    answer: "We support English and Hindi/Hinglish copy suitable for Indian audiences.",
  },
];

export default function AiContentMarketingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "AI Content Marketing Services in Kanpur", url: "/services/ai-content-marketing" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "AI Content Marketing Services in Kanpur",
          description: "Fast, affordable AI content marketing for Indian MSMEs. Scalable video scripts, SEO articles, and messaging workflows with human review.",
          url: "https://www.nexudyam.in/services/ai-content-marketing",
          serviceType: "AI Content Marketing & Copywriting",
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
              AI Acceleration Vertical
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              AI Content Marketing Services in Kanpur
            </h1>
            <div className="p-6 bg-surface border-l-4 border-brand rounded-r-2xl">
              <p className="text-lg text-foreground font-medium leading-relaxed">
                Nexudyam provides structured AI content marketing services in Kanpur, combining artificial intelligence software with human editorial oversight. We generate high-volume Instagram Reels scripts, marketing email campaigns, promotional WhatsApp broadcasts, and search-optimized blog posts. Every piece of content is fact-checked, edited, and tailored to Indian MSME market requirements before publication.
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
                <p className="text-xs font-mono uppercase text-muted-foreground">Entry Pricing</p>
                <p className="text-2xl font-display font-bold text-foreground">₹4,999 / mo</p>
                <p className="text-xs text-muted-foreground">Scalable packages tailored to content volume</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-surface rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-muted-foreground">Batch Turnaround</p>
                <p className="text-2xl font-display font-bold text-foreground">48 to 72 Hours</p>
                <p className="text-xs text-muted-foreground">Per approved topic schedule</p>
              </div>
            </div>
          </div>

          {/* What is Included */}
          <section className="mb-20">
            <h2 className="font-display text-3xl font-bold mb-8 text-foreground">
              What is Included in AI Content Workflows
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "4 comprehensive SEO blog articles (1,000+ words each) mapped to targeted search queries",
                "12 short-form video scripts structured with 3-second hooks and audience calls-to-action",
                "4 promotional WhatsApp broadcast messages designed for customer retention",
                "Human editorial verification ensuring factual accuracy and brand alignment",
                "Keyword insertion and FAQ schema markup for articles",
                "Digital distribution calendar formatted for multi-channel publishing",
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
              Our 4-Step Hybrid AI Workflow
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Topic Selection", desc: "We select search queries and customer pain points relevant to your sector." },
                { step: "02", title: "AI Drafting", desc: "We use customized prompts to draft initial outlines, hooks, and content variations." },
                { step: "03", title: "Human Review", desc: "Professional copywriters review every line for factual accuracy, readability, and tone." },
                { step: "04", title: "Delivery", desc: "Final formatted documents are supplied for blog upload and social distribution." },
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
              Accelerate Your Marketing Output Today
            </h3>
            <p className="text-white/80 max-w-xl mx-auto mb-8 text-base">
              Request a free sample content batch customized for your business in Kanpur.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-full font-bold hover:bg-accent transition-colors"
            >
              Request Free Sample on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
