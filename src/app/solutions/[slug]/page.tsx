import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  Tag, 
  Layers, 
  Users, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import { solutionsData } from "@/lib/solutions-data";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPage, breadcrumbs, serviceSchema } from "@/lib/schema";
import { Accordion } from "@/components/ui/Accordion";
import { LeadForm } from "@/components/ui/LeadForm";
import { HERO_CTA_TEXT, WHATSAPP_URL } from "@/lib/constants";

export async function generateStaticParams() {
  return solutionsData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);
  if (!solution) return {};

  return pageMetadata({
    title: solution.metaTitle,
    description: solution.metaDescription,
    path: `/solutions/${solution.slug}`,
  });
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);
  if (!solution) notFound();

  const breadcrumbData = [
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/#problems" },
    { name: solution.problemTitle, url: `/solutions/${solution.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbs(breadcrumbData)} />
      <JsonLd data={faqPage(solution.faqs)} />
      <JsonLd 
        data={serviceSchema({
          name: solution.h1,
          description: solution.metaDescription,
          url: `https://www.nexudyam.in/solutions/${solution.slug}`,
          serviceType: "Digital Marketing Solution",
          price: solution.pricingRange,
        })}
      />

      {/* Breadcrumbs */}
      <div className="bg-surface/50 border-b border-border py-3">
        <div className="container mx-auto px-6 max-w-5xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight size={12} />
            <Link href="/#problems" className="hover:text-foreground">Solutions</Link>
            <ChevronRight size={12} />
            <span className="text-foreground font-medium truncate">{solution.problemTitle}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200/80 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
            <AlertTriangle size={14} className="text-red-600" />
            <span>Problem Solved: &ldquo;{solution.problemTitle}&rdquo;</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {solution.h1}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            {solution.heroSub}
          </p>

          {/* Customer Words Quote Card */}
          <div className="bg-surface border-l-4 border-amber-500 rounded-r-2xl p-6 sm:p-8 text-left max-w-2xl mx-auto shadow-2xs mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2">
              The Problem in the Founder&apos;s Words:
            </span>
            <p className="text-neutral-800 text-base sm:text-lg italic font-normal leading-relaxed">
              &ldquo;{solution.customerQuote}&rdquo;
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-white px-8 py-4 rounded-full text-base font-bold hover:bg-neutral-800 transition-all shadow-md"
            >
              <span>{HERO_CTA_TEXT}</span>
              <ArrowRight size={18} />
            </a>
            <Link
              href="#pricing-info"
              className="inline-flex items-center justify-center border border-neutral-300 text-foreground bg-white px-8 py-4 rounded-full text-base font-bold hover:bg-neutral-50 transition-all shadow-xs"
            >
              See Cost in India
            </Link>
          </div>
        </div>
      </section>

      {/* Why It Happens: 3 Root Causes */}
      <section className="py-20 bg-surface border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Root Cause Analysis
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why This Problem Happens (3 Core Flaws)
            </h2>
            <p className="text-neutral-600 text-sm md:text-base">
              Most businesses struggle with this not because their product is flawed, but because their acquisition architecture leaks value at these critical points:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.whyItHappens.map((cause, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-neutral-200/90 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 font-mono font-bold flex items-center justify-center mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-3">
                    {cause.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {cause.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do: The Steps */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand mb-2 block">
              The Solution Framework
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Fix It (Step-by-Step)
            </h2>
            <p className="text-neutral-600 text-sm md:text-base">
              A systematic engineering approach to remove bottlenecks and turn lost traffic into qualified customer inquiries:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solution.whatWeDo.map((step, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-neutral-200 bg-surface/40 hover:bg-white hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs font-bold bg-neutral-900 text-white px-3 py-1 rounded-full">
                    Step {step.step}
                  </span>
                  <h3 className="font-display font-bold text-xl text-foreground">{step.title}</h3>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What It Costs in India */}
      <section className="py-20 bg-surface border-b border-border" id="pricing-info">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
            Investment Transparency
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What It Costs in India
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-2xl mx-auto mb-8">
            Traditional Indian agencies charge ₹30,000 to ₹75,000/month retainers with multi-month lock-ins. Nexudyam fixes this bottleneck within straightforward packages starting from ₹4,999/month.
          </p>

          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200 shadow-sm max-w-xl mx-auto text-left mb-8">
            <div className="flex items-baseline justify-between mb-4">
              <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Estimated Budget Range</span>
              <span className="font-display text-2xl sm:text-3xl font-bold text-foreground">{solution.pricingRange}</span>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              {solution.pricingDetail}
            </p>
            <div className="p-4 bg-emerald-50 border border-emerald-200/80 rounded-xl text-xs text-emerald-800 flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>Zero lock-in contracts. Transparent monthly deliverables with full ownership of accounts and assets.</span>
            </div>
          </div>

          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
          >
            <span>Compare all 3 monthly packages (Launch ₹4,999 / Grow ₹9,999 / Scale ₹18,999)</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Audience Match
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who This Solution Is Built For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {solution.whoItsFor.map((target, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-neutral-200 bg-surface/50 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-foreground">{target}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking: Related Use Cases & Services */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Users size={18} className="text-brand" />
                <span>Related Industry Use Cases</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {solution.relatedUseCases.map((uc, i) => (
                  <Link
                    key={i}
                    href={uc.href}
                    className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-neutral-200 px-3.5 py-2 rounded-lg text-foreground hover:border-foreground/40 transition-colors shadow-2xs"
                  >
                    <span>{uc.title}</span>
                    <ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Layers size={18} className="text-brand" />
                <span>Related Core Capabilities</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {solution.relatedServices.map((svc, i) => (
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

      {/* FAQ Section: 4 direct-answer questions */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Direct Answers to Key Questions
            </h2>
          </div>
          <Accordion items={solution.faqs} />
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
              Ready to Fix This Bottleneck in Your Business?
            </h2>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
              Submit the form below or WhatsApp us. Our team will audit your current setup and provide a free 5-point action plan within 24 hours.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
