"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Stethoscope, 
  Scissors,
  GraduationCap, 
  Building2,
  Utensils,
  Store, 
  Factory, 
  Wrench,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { UseCaseMockup } from "@/components/ui/UseCaseMockup";

const allUseCases = [
  {
    slug: "clinics-doctors",
    industry: "Clinics & Doctors",
    icon: Stethoscope,
    badge: "Local 3-Pack & WhatsApp",
    summary: "Patient acquisition funnel combining Google Maps local 3-pack authority with instant 1-tap WhatsApp slot bookings."
  },
  {
    slug: "salons-wellness",
    industry: "Salons & Wellness",
    icon: Scissors,
    badge: "Instagram Reels & Booking",
    summary: "High-ticket bridal package lookbooks, Instagram Reels transformation ads, and seamless WhatsApp appointment scheduling."
  },
  {
    slug: "coaching-education",
    industry: "Coaching & Education",
    icon: GraduationCap,
    badge: "High-Intent Google Ads",
    summary: "Student enrollment pipeline targeting parents and students with high-intent search ads and automated WhatsApp brochure delivery."
  },
  {
    slug: "real-estate",
    industry: "Real Estate",
    icon: Building2,
    badge: "Qualified Buyer Leads",
    summary: "Verified homebuyer site-visit funnels with RERA project landing pages, budget qualification filters, and automated sales CRM dispatch."
  },
  {
    slug: "restaurants-cafes",
    industry: "Restaurants & Cafes",
    icon: Utensils,
    badge: "0% Commission Direct Booking",
    summary: "Pack your dining tables on weekends with Google Maps food SEO, signature dish Instagram Reels, and direct WhatsApp table reservations."
  },
  {
    slug: "d2c-fashion",
    industry: "D2C & Fashion",
    icon: Store,
    badge: "Reels Ads + Shopify COD",
    summary: "Direct-to-consumer store setup with Meta catalog ads, 1-click mobile checkout, and automated WhatsApp abandoned cart recovery."
  },
  {
    slug: "b2b-manufacturers-exporters",
    industry: "B2B Manufacturers",
    icon: Factory,
    badge: "Procurement SEO & RFQ",
    summary: "Industrial lead funnel designed for wholesale inquiries, technical specification matrix, and 4-hour commercial RFQ turnarounds."
  },
  {
    slug: "home-local-services",
    industry: "Home & Local Services",
    icon: Wrench,
    badge: "Google Call-Only Ads",
    summary: "Emergency doorstep repair bookings and contractor inquiries via mobile Google Call ads and automated technician dispatch alerts."
  },
  {
    slug: "creators-artists",
    industry: "Creators & Artists",
    icon: Sparkles,
    badge: "Digital Press Kit & Gigs",
    summary: "Authoritative artist portfolio website, video showreel showcases, and dedicated inquiry forms for corporate events and brand sponsorships."
  }
];

export function UseCaseShowcase() {
  const [activeSlug, setActiveSlug] = useState(allUseCases[0].slug);

  const active = allUseCases.find((u) => u.slug === activeSlug) || allUseCases[0];

  return (
    <div className="mt-16 pt-12 border-t border-neutral-200/80">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
          Interactive Deliverable Blueprints
        </span>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">
          See What We Build For All 9 Industries
        </h3>
        <p className="text-neutral-500 text-xs md:text-sm mt-2">
          Select any industry below to preview the exact customer acquisition setup and conversion interface we engineer:
        </p>
      </div>

      {/* Tabs for all 9 industries */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-5xl mx-auto">
        {allUseCases.map((item) => {
          const Icon = item.icon;
          const isActive = activeSlug === item.slug;
          return (
            <button
              key={item.slug}
              type="button"
              onClick={() => setActiveSlug(item.slug)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-neutral-900 text-white shadow-md scale-[1.02]"
                  : "bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 border border-neutral-200"
              }`}
            >
              <Icon size={14} className={isActive ? "text-emerald-400" : "text-neutral-400"} />
              <span>{item.industry}</span>
            </button>
          );
        })}
      </div>

      {/* Display Grid (Mockup on one side, Value breakdown on the other) */}
      <div className="bg-neutral-900 rounded-3xl p-6 sm:p-10 text-white border border-neutral-800 shadow-xl max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Summary & Direct Action */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-emerald-400 font-mono text-[11px] font-semibold">
            <Sparkles size={12} />
            <span>{active.badge}</span>
          </div>

          <h4 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
            The {active.industry} Lead Engine
          </h4>

          <p className="text-neutral-300 text-sm leading-relaxed">
            {active.summary}
          </p>

          <div className="space-y-2.5 pt-2 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Tailored for Indian market buyer psychology</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Zero bloated retainers — fast 48h to 7-day rollout</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Integrated WhatsApp lead capture &amp; tracking</span>
            </div>
          </div>

          <div className="pt-3">
            <Link
              href={`/use-cases/${active.slug}`}
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all hover:scale-[1.02] shadow-sm"
            >
              <span>Explore full {active.industry} breakdown</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right Column: The Live Deliverable Mockup Frame */}
        <div className="lg:col-span-7 flex justify-center">
          <UseCaseMockup slug={active.slug} industry={active.industry} className="w-full" />
        </div>

      </div>
    </div>
  );
}
