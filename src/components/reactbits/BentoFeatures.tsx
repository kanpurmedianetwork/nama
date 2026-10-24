"use client";

import React from "react";
import { SpotlightCard } from "./SpotlightCard";
import { Zap, ShieldCheck, MapPin, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function BentoFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* Bento Item 1: Large Feature Card (Spans 2 columns) */}
      <SpotlightCard className="md:col-span-2 bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden group">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6">
            <Layers size={24} />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand mb-2 block">
            End-To-End Execution
          </span>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
            One Unified Partner. Zero Vendor Juggling.
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-xl mb-6">
            Instead of hiring a freelance graphic designer, an unvetted web developer, and a separate ad agency, Nexudyam synchronizes brand identity, custom website code, and ad campaigns into a single unified growth engine.
          </p>
        </div>

        {/* Visual Pipeline Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-neutral-100">
          <div className="bg-surface/80 border border-neutral-200/70 p-3 rounded-xl text-center">
            <span className="text-[11px] font-bold text-muted-foreground uppercase block">Step 01</span>
            <span className="text-xs font-semibold text-foreground">Brand Identity</span>
          </div>
          <div className="bg-surface/80 border border-neutral-200/70 p-3 rounded-xl text-center">
            <span className="text-[11px] font-bold text-muted-foreground uppercase block">Step 02</span>
            <span className="text-xs font-semibold text-foreground">Next.js Web</span>
          </div>
          <div className="bg-surface/80 border border-neutral-200/70 p-3 rounded-xl text-center">
            <span className="text-[11px] font-bold text-muted-foreground uppercase block">Step 03</span>
            <span className="text-xs font-semibold text-foreground">Meta/Google Ads</span>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl text-center">
            <span className="text-[11px] font-bold text-emerald-700 uppercase block">Step 04</span>
            <span className="text-xs font-bold text-emerald-800">Leads &amp; Sales</span>
          </div>
        </div>
      </SpotlightCard>

      {/* Bento Item 2: AI Speed Comparison */}
      <SpotlightCard className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-sm flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
            <Zap size={24} />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2 block">
            Speed Advantage
          </span>
          <h3 className="font-display font-bold text-2xl text-foreground mb-3">
            10x Faster Content Turnaround
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            We combine cutting-edge AI generation with expert human creative direction to produce 30-day social calendars in 48 hours.
          </p>
        </div>

        {/* Speed Bars */}
        <div className="space-y-3 bg-surface p-4 rounded-2xl border border-neutral-200/60">
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-brand">Nexudyam AI Pipeline</span>
              <span className="text-emerald-600 font-bold">48 Hours</span>
            </div>
            <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full w-[95%]" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Traditional Agencies</span>
              <span>3-4 Weeks</span>
            </div>
            <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
              <div className="bg-neutral-400 h-full rounded-full w-[25%]" />
            </div>
          </div>
        </div>
      </SpotlightCard>

      {/* Bento Item 3: MSME-First Pricing */}
      <SpotlightCard className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-sm flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6">
            <ShieldCheck size={24} />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2 block">
            Transparent Pricing
          </span>
          <h3 className="font-display font-bold text-2xl text-foreground mb-3">
            Plans Built for Bharat &amp; MSMEs
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Zero ₹50,000 corporate retainers. Transparent, honest packages start from just ₹4,999/month with zero lock-in contracts.
          </p>
        </div>
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground">Starting at</span>
            <p className="font-display font-bold text-xl text-foreground">₹4,999/mo</p>
          </div>
          <Link
            href="/pricing"
            className="text-xs font-bold text-brand hover:underline inline-flex items-center gap-1"
          >
            <span>View Packages</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </SpotlightCard>

      {/* Bento Item 4: Local Roots (Spans 2 columns) */}
      <SpotlightCard className="md:col-span-2 bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-sm flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6">
            <MapPin size={24} />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand mb-2 block">
            Hyper-Local Insight
          </span>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
            Local Roots in Kanpur. High-Impact Reach Across UP.
          </h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-xl">
            We understand consumer psychology, local Hindi/Hinglish phrasing, and regional market trends across Uttar Pradesh — giving your campaigns genuine resonance that generic metro agencies miss.
          </p>
        </div>

        {/* Region Badges */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
          {["Kanpur Nagar", "Lucknow", "Noida / Greater Noida", "Prayagraj", "Varanasi", "Agra", "Bareilly"].map(
            (city) => (
              <span
                key={city}
                className="bg-surface border border-neutral-200/80 text-foreground text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                ● {city}
              </span>
            )
          )}
        </div>
      </SpotlightCard>
    </div>
  );
}
