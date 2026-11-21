import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Target, 
  Layers, 
  Calendar, 
  HelpCircle, 
  Sparkles,
  FileText
} from "lucide-react";
import { useCasesData } from "@/lib/use-cases-data";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPage, breadcrumbs, serviceSchema } from "@/lib/schema";
import { Accordion } from "@/components/ui/Accordion";
import { LeadForm } from "@/components/ui/LeadForm";
import { HERO_CTA_TEXT } from "@/lib/constants";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export async function generateStaticParams() {
  return useCasesData.map((u) => ({
    slug: u.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const useCase = useCasesData.find((u) => u.slug === slug);
  if (!useCase) return {};

  return pageMetadata({
    title: useCase.metaTitle,
    description: useCase.metaDescription,
    path: `/use-cases/${useCase.slug}`,
  });
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const useCase = useCasesData.find((u) => u.slug === slug);
  if (!useCase) notFound();

  const breadcrumbData = [
    { name: "Home", url: "/" },
    { name: "Use Cases", url: "/#use-cases" },
    { name: useCase.industry, url: `/use-cases/${useCase.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbs(breadcrumbData)} />
      <JsonLd data={faqPage(useCase.faqs)} />
      <JsonLd 
        data={serviceSchema({
          name: useCase.headline,
          description: useCase.metaDescription,
          url: `https://www.nexudyam.in/use-cases/${useCase.slug}`,
          serviceType: "Industry Marketing Setup",
          price: useCase.examplePlan.budgetRange,
        })}
      />

      {/* Breadcrumbs */}
      <div className="bg-surface/50 border-b border-border py-3">
        <div className="container mx-auto px-6 max-w-5xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight size={12} />
            <Link href="/#use-cases" className="hover:text-foreground">Use Cases</Link>
            <ChevronRight size={12} />
            <span className="text-foreground font-medium truncate">{useCase.industry}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
            <Sparkles size={14} className="text-emerald-600" />
            <span>Use Case: {useCase.industry}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {useCase.headline}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            {useCase.metaDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton text={HERO_CTA_TEXT} />
            <Link
              href="#plan"
              className="inline-flex items-center justify-center border border-neutral-300 text-foreground bg-white px-8 py-4 rounded-full text-base font-bold hover:bg-neutral-50 transition-all shadow-xs"
            >
              View Example Plan
            </Link>
          </div>
        </div>
      </section>

      {/* The Situation & Typical Goal */}
      <section className="py-20 bg-surface border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
                  The Current Situation
                </span>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Where Most {useCase.industry} Struggle
                </h2>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {useCase.situation}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
                  The Primary Objective
                </span>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Typical Goal &amp; Outcome
                </h2>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {useCase.typicalGoal}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <Target size={16} className="text-emerald-600" />
                <span>Engineered for qualified conversion, not vanity clicks.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Set Up: Channels & Assets */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand mb-2 block">
              Acquisition Infrastructure
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Set Up for {useCase.industry}
            </h2>
            <p className="text-neutral-600 text-sm md:text-base">
              A synchronized system across active search demand and direct-response customer engagement:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-neutral-200 bg-surface/40">
              <h3 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-2">
                <Layers size={20} className="text-brand" />
                <span>Primary Lead Generation Channels</span>
              </h3>
              <ul className="space-y-4">
                {useCase.whatWeSetUp.channels.map((ch, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-neutral-200 bg-surface/40">
              <h3 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-2">
                <FileText size={20} className="text-brand" />
                <span>Creative &amp; Technical Assets Deployed</span>
              </h3>
              <ul className="space-y-4">
                {useCase.whatWeSetUp.assets.map((asset, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{asset}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Example Plan & Monthly Budget Range */}
      <section className="py-20 bg-surface border-b border-border" id="plan">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Budget &amp; Action Plan
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Example Plan &amp; Monthly Budget Range
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200 shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-100 pb-6 mb-6">
              <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Recommended Budget Range</span>
              <span className="font-display text-xl sm:text-2xl font-bold text-foreground mt-2 sm:mt-0">{useCase.examplePlan.budgetRange}</span>
            </div>

            <h3 className="font-bold text-base text-foreground mb-4">Key Monthly Execution Activities:</h3>
            <ul className="space-y-3 mb-6">
              {useCase.examplePlan.activities.map((act, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-surface rounded-xl border border-neutral-200/80 text-xs text-neutral-600">
              <strong className="text-foreground">Agency Fee:</strong> Tied to our Grow (₹9,999/mo) or Scale (₹18,999/mo) packages. Ad spend is paid directly by the client to Meta/Google with zero markup.
            </div>
          </div>
        </div>
      </section>

      {/* Expected Timeline (No Fabricated Results) */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Execution Roadmap
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expected Timeline &amp; Milestones
            </h2>
            <p className="text-neutral-600 text-sm md:text-base">
              A transparent breakdown of how campaigns are launched and scaled without fabricated claims:
            </p>
          </div>

          <div className="space-y-6">
            {useCase.expectedTimeline.map((item, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-surface/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-foreground">{item.phase}</h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold bg-neutral-200/80 px-3 py-1 rounded-full text-neutral-700 w-fit">
                    <Calendar size={12} />
                    <span>{item.duration}</span>
                  </span>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {item.deliverables}
                </p>
                <div className="p-3 bg-white rounded-lg border border-dashed border-neutral-300 text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-700 block mb-0.5">Benchmark Target:</span>
                  <span>{item.outcomePlaceholder}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking: Related Solutions & Services */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Target size={18} className="text-brand" />
                <span>Related Solutions</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {useCase.relatedSolutions.map((sol, i) => (
                  <Link
                    key={i}
                    href={sol.href}
                    className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-neutral-200 px-3.5 py-2 rounded-lg text-foreground hover:border-foreground/40 transition-colors shadow-2xs"
                  >
                    <span>{sol.title}</span>
                    <ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Layers size={18} className="text-brand" />
                <span>Related Core Services</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {useCase.relatedServices.map((svc, i) => (
                  <Link
                    key={i}
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-neutral-200 px-3.5 py-2 rounded-lg text-foreground hover:border-foreground/40 transition-colors shadow-2xs"
                  >
                    <span>{svc.title}</span>
                    <ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Industry FAQs
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions for {useCase.industry}
            </h2>
          </div>
          <Accordion items={useCase.faqs} />
        </div>
      </section>

      {/* Final Lead Capture CTA */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand mb-2 block">
              Free 5-Point Lead Audit
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Accelerate Growth for Your {useCase.industry} Business?
            </h2>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
              Submit your inquiry below or connect via WhatsApp. We will analyze your search rankings, ad setup, and conversion flow, providing an actionable roadmap within 24 hours.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
