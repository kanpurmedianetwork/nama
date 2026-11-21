import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Wrench, 
  TrendingUp, 
  AlertCircle,
  Quote
} from "lucide-react";
import { caseStudiesData } from "@/lib/case-studies-data";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbs, article } from "@/lib/schema";
import { HERO_CTA_TEXT, WHATSAPP_URL } from "@/lib/constants";
import { LeadForm } from "@/components/ui/LeadForm";

export async function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudiesData.find((item) => item.slug === slug);
  if (!cs) return {};

  return pageMetadata({
    title: `${cs.title} | Case Study | Nexudyam`,
    description: `Read how Nexudyam helped solve: ${cs.challenge}`,
    path: `/case-studies/${cs.slug}`,
    noIndex: cs.draft,
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudiesData.find((item) => item.slug === slug);
  if (!cs) notFound();

  const breadcrumbData = [
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/#proof" },
    { name: cs.title, url: `/case-studies/${cs.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbs(breadcrumbData)} />
      <JsonLd 
        data={article({
          title: cs.title,
          description: cs.challenge,
          datePublished: "2026-10-01",
          dateModified: "2026-11-20",
          url: `https://www.nexudyam.in/case-studies/${cs.slug}`,
        })}
      />

      {/* Draft Notification Badge if Draft */}
      {cs.draft && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 py-2.5 text-center text-xs font-semibold text-amber-800">
          Draft Preview Only — This case study template is excluded from public sitemaps and navigation until verified client metrics are finalized.
        </div>
      )}

      {/* Breadcrumbs */}
      <div className="bg-surface/50 border-b border-border py-3">
        <div className="container mx-auto px-6 max-w-4xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight size={12} />
            <Link href="/#proof" className="hover:text-foreground">Case Studies</Link>
            <ChevronRight size={12} />
            <span className="text-foreground font-medium truncate">{cs.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 md:py-20 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand/10 px-3 py-1 rounded-full">
              {cs.industry}
            </span>
            <span className="text-xs font-medium text-neutral-500 bg-surface px-3 py-1 rounded-full border border-neutral-200">
              {cs.clientType}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            {cs.title}
          </h1>

          <div className="flex items-center gap-6 text-xs sm:text-sm text-neutral-500 pt-4 border-t border-neutral-100">
            <div className="flex items-center gap-1.5">
              <Clock size={15} />
              <span>Execution Timeline: {cs.timeline}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Body: Challenge, Approach, Results, Tools, Quote */}
      <section className="py-16 md:py-20 bg-surface border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          {/* Challenge */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200 shadow-2xs">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-red-600 mb-3">
              <AlertCircle size={16} />
              <span>The Challenge</span>
            </div>
            <h2 className="font-display font-bold text-2xl text-foreground mb-4">
              The Initial Bottleneck
            </h2>
            <p className="text-neutral-700 text-base leading-relaxed">
              {cs.challenge}
            </p>
          </div>

          {/* Approach */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200 shadow-2xs">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-brand mb-3">
              <Wrench size={16} />
              <span>The Strategic Approach</span>
            </div>
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">
              What We Implemented
            </h2>
            <div className="space-y-4">
              {cs.approach.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-brand/10 text-brand text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Results (Metrics) */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200 shadow-2xs">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3">
              <TrendingUp size={16} />
              <span>The Results &amp; Impact</span>
            </div>
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">
              Measurable Business Outcomes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cs.results.map((res, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-surface border border-neutral-200/80 text-center">
                  <div className="font-display text-lg sm:text-xl font-bold text-foreground mb-1 break-words">
                    {res.metric}
                  </div>
                  <p className="text-xs text-neutral-500 font-medium">{res.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Tech Stack */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200 shadow-2xs">
            <h3 className="font-display font-bold text-lg text-foreground mb-4">
              Tools &amp; Platforms Used:
            </h3>
            <div className="flex flex-wrap gap-2">
              {cs.tools.map((tool, idx) => (
                <span key={idx} className="px-3.5 py-1.5 rounded-lg bg-surface border border-neutral-200 text-xs font-semibold text-neutral-700">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Client Quote */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border-l-4 border-amber-500 border border-neutral-200 shadow-2xs relative">
            <Quote size={28} className="text-amber-500/20 absolute top-6 right-6" />
            <p className="text-neutral-800 text-base sm:text-lg italic leading-relaxed mb-4">
              &ldquo;{cs.quote.text}&rdquo;
            </p>
            <div>
              <p className="font-bold text-sm text-foreground">{cs.quote.author}</p>
              <p className="text-xs text-neutral-500">{cs.quote.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Lead Capture Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand mb-2 block">
              Free 5-Point Lead Audit
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want Similar Lead Generation Results for Your Business?
            </h2>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
              Connect with our strategy team. We will analyze your search visibility, website conversion, and ad funnel, delivering an actionable 5-point lead roadmap.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
