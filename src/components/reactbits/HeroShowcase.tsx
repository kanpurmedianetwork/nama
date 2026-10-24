"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, Star, Phone, ArrowUpRight, TrendingUp, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import { BorderBeam } from "./BorderBeam";
import { CountUp } from "./CountUp";

export function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<"maps" | "ads" | "web">("maps");

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 mb-6">
      {/* Outer Glow Halo */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand/20 via-accent/30 to-brand/20 rounded-3xl blur-xl opacity-60 pointer-events-none" />

      {/* Main Glassmorphic Container with React Bits BorderBeam */}
      <div className="relative bg-white/90 backdrop-blur-xl border border-neutral-200/80 rounded-2xl shadow-2xl p-6 md:p-8 overflow-hidden text-left">
        <BorderBeam size={280} duration={10} colorFrom="#111827" borderWidth={1.5} />

        {/* Tab Controls (Load-balanced Interactive Switcher) */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200/70 pb-5 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
            <span className="text-xs font-mono text-muted-foreground ml-2 hidden sm:inline">
              nexudyam.in / live-growth-engine
            </span>
          </div>

          <div className="flex items-center gap-1 bg-surface p-1 rounded-xl border border-neutral-200/80 text-xs font-semibold">
            <button
              onClick={() => setActiveTab("maps")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === "maps"
                  ? "bg-brand text-white shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Google 3-Pack
            </button>
            <button
              onClick={() => setActiveTab("ads")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === "ads"
                  ? "bg-brand text-white shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Meta &amp; Google Ads
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === "web"
                  ? "bg-brand text-white shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Next.js Web Vitals
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Content Views */}
        <AnimatePresence mode="wait">
          {activeTab === "maps" && (
            <motion.div
              key="maps"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Simulated Search Bar */}
              <div className="flex items-center gap-3 bg-surface border border-neutral-200/70 rounded-full px-4 py-2.5 text-xs text-muted-foreground">
                <Search size={15} className="text-brand shrink-0" />
                <span className="text-foreground font-medium truncate">
                  "top digital marketing agency near me in kanpur"
                </span>
                <span className="ml-auto text-[11px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full shrink-0">
                  Rank #1 in 3-Pack
                </span>
              </div>

              {/* Simulated Google Maps Result Card */}
              <div className="bg-white border-2 border-brand/20 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-base text-foreground">Nexudyam Kanpur</p>
                    <span className="text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                      <CheckCircle2 size={11} /> Verified Listing
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <span className="font-bold text-amber-500 flex items-center gap-0.5">
                      5.0 <Star size={13} className="fill-amber-400 text-amber-400 inline" />
                    </span>
                    <span>(3 Google Reviews)</span>
                    <span>•</span>
                    <span className="text-foreground font-medium">Digital Marketing Agency</span>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin size={12} className="text-muted-foreground" />
                    <span>Serving Kanpur, Lucknow &amp; Uttar Pradesh • Open now</span>
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-neutral-100">
                  <div className="text-right">
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">Local Growth</p>
                    <p className="text-emerald-600 font-bold text-lg flex items-center gap-1">
                      <TrendingUp size={16} /> +340% Calls
                    </p>
                  </div>
                  <a
                    href="https://share.google/B15NK2QgaMEn9hpoX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-brand text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-brand-dark transition-colors"
                  >
                    <span>View Map Listing</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "ads" && (
            <motion.div
              key="ads"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="bg-surface border border-neutral-200/80 rounded-xl p-4">
                <p className="text-xs text-muted-foreground font-medium mb-1">Total Ad Spend</p>
                <p className="font-display text-2xl font-bold text-foreground">₹4,999</p>
                <p className="text-[11px] text-emerald-600 font-semibold mt-1">Starting budget</p>
              </div>
              <div className="bg-surface border border-neutral-200/80 rounded-xl p-4">
                <p className="text-xs text-muted-foreground font-medium mb-1">Ad Impressions</p>
                <div className="font-display text-2xl font-bold text-foreground flex items-center">
                  <CountUp to={64} duration={1.2} />k
                </div>
                <p className="text-[11px] text-muted-foreground mt-1">Targeted UP Reach</p>
              </div>
              <div className="bg-surface border border-neutral-200/80 rounded-xl p-4">
                <p className="text-xs text-muted-foreground font-medium mb-1">Qualified Leads</p>
                <div className="font-display text-2xl font-bold text-foreground flex items-center">
                  <CountUp to={52} duration={1.2} />
                </div>
                <p className="text-[11px] text-emerald-600 font-semibold mt-1">₹96.1 per lead</p>
              </div>
              <div className="bg-surface border border-neutral-200/80 rounded-xl p-4">
                <p className="text-xs text-muted-foreground font-medium mb-1">Average ROAS</p>
                <p className="font-display text-2xl font-bold text-foreground">6.8x</p>
                <p className="text-[11px] text-emerald-600 font-semibold mt-1">High-intent traffic</p>
              </div>
            </motion.div>
          )}

          {activeTab === "web" && (
            <motion.div
              key="web"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-4 text-center">
                <div className="w-12 h-12 rounded-full border-2 border-emerald-500 bg-white flex items-center justify-center font-display font-bold text-emerald-700 text-lg mx-auto mb-2">
                  100
                </div>
                <p className="text-xs font-bold text-foreground">Performance</p>
                <p className="text-[10px] text-emerald-700 font-medium">Sub-second load</p>
              </div>
              <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-4 text-center">
                <div className="w-12 h-12 rounded-full border-2 border-emerald-500 bg-white flex items-center justify-center font-display font-bold text-emerald-700 text-lg mx-auto mb-2">
                  100
                </div>
                <p className="text-xs font-bold text-foreground">Accessibility</p>
                <p className="text-[10px] text-emerald-700 font-medium">WCAG AA Standard</p>
              </div>
              <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-4 text-center">
                <div className="w-12 h-12 rounded-full border-2 border-emerald-500 bg-white flex items-center justify-center font-display font-bold text-emerald-700 text-lg mx-auto mb-2">
                  100
                </div>
                <p className="text-xs font-bold text-foreground">Best Practices</p>
                <p className="text-[10px] text-emerald-700 font-medium">Modern Web Stack</p>
              </div>
              <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-4 text-center">
                <div className="w-12 h-12 rounded-full border-2 border-emerald-500 bg-white flex items-center justify-center font-display font-bold text-emerald-700 text-lg mx-auto mb-2">
                  100
                </div>
                <p className="text-xs font-bold text-foreground">SEO / AEO</p>
                <p className="text-[10px] text-emerald-700 font-medium">Schema Structured</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
