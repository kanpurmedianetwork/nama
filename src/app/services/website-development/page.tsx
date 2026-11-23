import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Clock, IndianRupee, ArrowRight, ShieldCheck, Laptop, Globe, Layers } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd, breadcrumbs, serviceSchema, faqPage } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "Website Development Services for Startups & MSMEs | Nexudyam",
  description: "Professional website development for MSMEs and startups across India. Fast, mobile-first websites built with Next.js and WordPress with on-page SEO.",
  path: "/services/website-development",
  ogImage: "/og/default.png",
});

const faqs = [
  {
    question: "Which platforms do you use to build websites?",
    answer: "We primarily use Next.js for maximum speed, security, and SEO performance, or WordPress for clients requiring regular in-house blogging.",
  },
  {
    question: "Is website hosting and domain registration included?",
    answer: "We assist with domain purchasing and setting up fast cloud hosting on platforms like Vercel or Hostinger under your ownership.",
  },
  {
    question: "Will the website work properly on mobile phones?",
    answer: "Yes. All layouts are designed mobile-first and tested across multiple device screen dimensions.",
  },
  {
    question: "Can I update text and images myself later?",
    answer: "Yes. We provide documentation and an intuitive setup or CMS so you can edit basic text and imagery.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Website Development", url: "/services/website-development" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Website Development",
          description: "Professional website development across India for MSMEs and startups. Fast, mobile-first websites built with Next.js and WordPress with on-page SEO.",
          url: "https://www.nexudyam.in/services/website-development",
          serviceType: "Website Development",
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
              Web Engineering Vertical
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Website Development for Startups &amp; MSMEs
            </h1>
            <div className="p-6 bg-surface border-l-4 border-brand rounded-r-2xl">
              <p className="text-lg text-foreground font-medium leading-relaxed">
                Nexudyam provides custom website development for businesses, MSMEs, and startups across India. We engineer mobile-responsive, fast-loading websites built with Next.js or WordPress, complete with on-page SEO, contact forms, and security configurations. Every project includes structured metadata and technical optimization designed to convert visitors into business inquiries nationwide.
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
                <p className="text-2xl font-display font-bold text-foreground">₹9,999</p>
                <p className="text-xs text-muted-foreground">Included within Grow package or one-time</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-surface rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-muted-foreground">Estimated Delivery</p>
                <p className="text-2xl font-display font-bold text-foreground">10 to 14 Days</p>
                <p className="text-xs text-muted-foreground">From content & requirement signoff</p>
              </div>
            </div>
          </div>

          {/* Visual Deliverables Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl bg-neutral-950 mb-16 group">
            <div className="relative h-[320px] md:h-[440px] w-full">
              <Image
                src="/services/website-development.jpg"
                alt="Modern Next.js Web Engineering & Performance Dashboard"
                fill
                priority
                className="object-cover object-center grayscale contrast-110 group-hover:scale-102 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-black/60 border border-white/10 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-xs uppercase tracking-wider font-mono text-neutral-300 font-semibold">100/100 Core Web Vitals</span>
                </div>
                <p className="font-display font-bold text-lg md:text-xl text-white">High-Speed Next.js &amp; Shopify Commerce Architecture</p>
                <p className="text-xs md:text-sm text-neutral-300 mt-1">
                  Sub-second mobile page loads, zero bloated plugins, and high-conversion landing page layouts engineered for inbound leads.
                </p>
              </div>
            </div>
          </div>

          {/* What is Included */}
          <section className="mb-20">
            <h2 className="font-display text-3xl font-bold mb-8 text-foreground">
              What is Included in Website Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Up to 5 custom-designed responsive pages (Home, About, Services, Contact, Blog/Portfolio)",
                "Clean, semantic Next.js (App Router) or managed WordPress code",
                "Mobile-first layout testing across iOS and Android devices",
                "Technical on-page SEO (meta tags, OpenGraph tags, schema markup, XML sitemap)",
                "WhatsApp click-to-chat integration and lead capture form setup",
                "Domain and DNS connection assistance with SSL certificate installation",
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
              Our 4-Step Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery", desc: "We gather business goals, service lists, brand assets, and structural requirements." },
                { step: "02", title: "Wireframing", desc: "We draft desktop and mobile UI wireframes for your review and layout approval." },
                { step: "03", title: "Engineering", desc: "We code responsive pages, integrate schema, compress media, and verify Core Web Vitals." },
                { step: "04", title: "Deployment", desc: "We configure DNS records, SSL, submit XML sitemaps, and connect Search Console." },
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
              Ready to Build Your Conversion-Ready Business Website?
            </h3>
            <p className="text-white/80 max-w-xl mx-auto mb-8 text-base">
              Get in touch with our web engineering team to discuss your project scope and receive a transparent quote and lead-generation audit.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-full font-bold hover:bg-accent transition-colors"
            >
              Discuss Your Website on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
