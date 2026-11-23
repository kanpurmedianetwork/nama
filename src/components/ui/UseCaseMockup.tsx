"use client";

import React from "react";
import { 
  Star, 
  MapPin, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Clock, 
  ArrowRight,
  ExternalLink,
  Sparkles,
  ShoppingBag,
  Download,
  FileText
} from "lucide-react";

interface UseCaseMockupProps {
  slug: string;
  industry?: string;
  className?: string;
}

export function UseCaseMockup({ slug, industry, className = "" }: UseCaseMockupProps) {
  switch (slug) {
    case "clinics-doctors":
    case "salons-wellness":
      return <ClinicMockup industry={industry || "Clinics & Doctors"} className={className} />;
    case "d2c-fashion":
      return <D2CMockup industry={industry || "D2C & Fashion"} className={className} />;
    case "coaching-education":
      return <CoachingMockup industry={industry || "Coaching & Education"} className={className} />;
    case "b2b-manufacturers-exporters":
      return <B2BMockup industry={industry || "B2B Manufacturers & Exporters"} className={className} />;
    default:
      return <GeneralFunnelMockup industry={industry || "Service Business"} className={className} />;
  }
}

/**
 * 1. CLINICS & DOCTORS MOCKUP:
 * Local Google Maps 3-Pack Rank + Direct WhatsApp Appointment Booking Flow
 */
function ClinicMockup({ industry, className = "" }: { industry: string; className?: string }) {
  return (
    <div className={`relative max-w-md mx-auto select-none ${className}`}>
      {/* Device Frame (Mobile Phone) */}
      <div className="bg-neutral-950 p-3 sm:p-4 rounded-[36px] border-4 border-neutral-800 shadow-2xl">
        {/* Phone Notch & Speaker */}
        <div className="w-28 h-4 bg-neutral-900 rounded-full mx-auto mb-3 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-neutral-800 mr-2" />
          <div className="w-8 h-1.5 rounded-full bg-neutral-800" />
        </div>

        {/* Screen Content */}
        <div className="bg-neutral-900 rounded-[24px] p-4 text-white space-y-3.5">
          {/* Mock Search Bar */}
          <div className="bg-neutral-800/90 rounded-full px-3.5 py-2 text-xs flex items-center justify-between border border-neutral-700/60">
            <span className="text-neutral-300 truncate">orthopedic doctor / clinic near me</span>
            <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded-full">#1 on Maps</span>
          </div>

          {/* Google Maps 3-Pack Card */}
          <div className="bg-neutral-800 p-3.5 rounded-2xl border border-neutral-700 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm text-white">City Care Specialty Clinic</h4>
                  <ShieldCheck size={14} className="text-blue-400 shrink-0" />
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-400 mt-0.5">
                  <span className="font-bold">4.9</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-neutral-400 text-[10px]">(142 verified reviews)</span>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded-md font-semibold">
                Open Now
              </span>
            </div>

            <p className="text-xs text-neutral-300 flex items-center gap-1">
              <MapPin size={12} className="text-neutral-400 shrink-0" />
              <span>Civil Lines · 1.2 km away · Multi-specialty</span>
            </p>

            {/* Quick 1-Tap CTA Strip */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="flex items-center justify-center gap-1.5 bg-neutral-700/80 hover:bg-neutral-700 text-white py-1.5 px-3 rounded-lg text-xs font-semibold">
                <Phone size={12} className="text-emerald-400" />
                <span>Call Clinic</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white py-1.5 px-3 rounded-lg text-xs font-semibold shadow-xs">
                <MessageSquare size={12} />
                <span>Book Slot</span>
              </div>
            </div>
          </div>

          {/* Simulated WhatsApp Instant Booking Message */}
          <div className="bg-neutral-950 p-3 rounded-2xl border border-neutral-800 space-y-2 text-xs">
            <div className="flex items-center justify-between text-[10px] text-neutral-400 border-b border-neutral-800 pb-1.5">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                WhatsApp Lead Capture Active
              </span>
              <span>10:42 AM</span>
            </div>

            {/* User message */}
            <div className="bg-emerald-950/70 text-emerald-100 p-2.5 rounded-xl rounded-br-none ml-4 border border-emerald-800/40">
              <p className="font-medium text-[11px]">
                &ldquo;Hello, I would like to book a doctor consultation tomorrow at 5 PM.&rdquo;
              </p>
            </div>

            {/* Clinic auto-response */}
            <div className="bg-neutral-800 text-neutral-200 p-2.5 rounded-xl rounded-bl-none mr-4 border border-neutral-700">
              <p className="text-[11px] leading-relaxed">
                Namaste! Dr. Sharma is available tomorrow. We have reserved <strong>5:15 PM</strong> for you. Please reply with Patient Name to confirm.
              </p>
            </div>
          </div>

          {/* Value callout pill */}
          <div className="text-center pt-1">
            <span className="text-[11px] text-neutral-400 font-mono">
              Setup: GBP Claim + Review Protocol + 1-Click WhatsApp
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. D2C & FASHION MOCKUP:
 * High-Converting Meta/Instagram Story Ad & 1-Click Shopify COD Checkout
 */
function D2CMockup({ industry, className = "" }: { industry: string; className?: string }) {
  return (
    <div className={`relative max-w-md mx-auto select-none ${className}`}>
      <div className="bg-neutral-950 p-3 sm:p-4 rounded-[36px] border-4 border-neutral-800 shadow-2xl">
        {/* Notch */}
        <div className="w-28 h-4 bg-neutral-900 rounded-full mx-auto mb-3 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-neutral-800 mr-2" />
          <div className="w-8 h-1.5 rounded-full bg-neutral-800" />
        </div>

        <div className="bg-neutral-900 rounded-[24px] p-4 text-white space-y-3.5">
          {/* Ad Mockup Card */}
          <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-3.5 rounded-2xl border border-neutral-700 space-y-2 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center text-[10px] font-bold">
                  D2C
                </div>
                <div>
                  <span className="text-xs font-bold text-white block leading-tight">Artisan Studio</span>
                  <span className="text-[10px] text-neutral-400">Sponsored Meta Ad</span>
                </div>
              </div>
              <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full font-mono font-bold">
                Flat 20% OFF
              </span>
            </div>

            <div className="bg-neutral-950/70 p-3 rounded-xl border border-neutral-800">
              <p className="text-xs font-semibold text-neutral-200">
                100% Breathable Pure Linen Shirts — Tailored for Indian Weather.
              </p>
              <div className="flex items-center gap-3 text-[11px] text-neutral-400 mt-2">
                <span className="text-white font-bold text-sm">₹1,499</span>
                <span className="line-through text-neutral-500">₹1,999</span>
                <span className="text-emerald-400 font-semibold">Save ₹500</span>
              </div>
            </div>
          </div>

          {/* Shopify Fast Checkout Card */}
          <div className="bg-neutral-800 p-3.5 rounded-2xl border border-neutral-700 space-y-2.5">
            <div className="flex items-center justify-between text-xs border-b border-neutral-700 pb-2">
              <span className="font-semibold text-neutral-300">Shopify Mobile Checkout</span>
              <span className="text-emerald-400 flex items-center gap-1 font-mono text-[10px]">
                <CheckCircle2 size={11} />
                Low RTO Funnel
              </span>
            </div>

            {/* Size selector */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-400">Select Size:</span>
              <div className="flex gap-1.5">
                {["S", "M", "L", "XL"].map((size) => (
                  <span
                    key={size}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      size === "L"
                        ? "bg-white text-black"
                        : "bg-neutral-700 text-neutral-300"
                    }`}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust factors */}
            <div className="grid grid-cols-3 gap-1 text-[9px] text-neutral-400 text-center py-1 bg-neutral-900/60 rounded-lg">
              <div>✓ COD Available</div>
              <div>✓ Free Shipping</div>
              <div>✓ 7-Day Exchange</div>
            </div>

            {/* High-converting 1-click CTA button */}
            <div className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-xl text-xs text-center flex items-center justify-center gap-1.5 shadow-sm">
              <ShoppingBag size={14} />
              <span>Order with Cash on Delivery (COD OTP)</span>
            </div>
          </div>

          <div className="text-center pt-1">
            <span className="text-[11px] text-neutral-400 font-mono">
              Setup: Reels Video Ads + Shopify Fast Cart + WhatsApp Abandoned Recovery
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. COACHING & EDUCATION MOCKUP:
 * Search Intent Ad to Automated WhatsApp Syllabus & Counseling Flow
 */
function CoachingMockup({ industry, className = "" }: { industry: string; className?: string }) {
  return (
    <div className={`relative max-w-md mx-auto select-none ${className}`}>
      <div className="bg-neutral-950 p-3 sm:p-4 rounded-[36px] border-4 border-neutral-800 shadow-2xl">
        <div className="w-28 h-4 bg-neutral-900 rounded-full mx-auto mb-3 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-neutral-800 mr-2" />
          <div className="w-8 h-1.5 rounded-full bg-neutral-800" />
        </div>

        <div className="bg-neutral-900 rounded-[24px] p-4 text-white space-y-3.5">
          {/* Google Search Ad Preview */}
          <div className="bg-neutral-800 p-3.5 rounded-2xl border border-neutral-700 space-y-2">
            <div className="flex items-center gap-1.5 text-[10px] text-neutral-400">
              <span className="font-bold text-white uppercase bg-neutral-700 px-1.5 py-0.2 rounded text-[9px]">Ad</span>
              <span>neet-jee-academy.in/admissions-2026</span>
            </div>

            <h4 className="font-bold text-sm text-blue-400 hover:underline leading-snug">
              NEET &amp; JEE 2026-27 Batch Enrollments Open | Top Faculty
            </h4>

            <p className="text-xs text-neutral-300 leading-relaxed">
              Limited 25 students per batch for personalized attention. 92% selection rate. Free diagnostic test &amp; scholarship up to 50%.
            </p>

            <div className="flex gap-2 pt-1 text-[11px]">
              <span className="bg-neutral-700/80 px-2 py-1 rounded text-neutral-300">✓ Download Syllabus</span>
              <span className="bg-neutral-700/80 px-2 py-1 rounded text-neutral-300">✓ Fee Structure</span>
            </div>
          </div>

          {/* Lead Capture & WhatsApp Delivery Automation */}
          <div className="bg-neutral-950 p-3.5 rounded-2xl border border-neutral-800 space-y-2.5">
            <div className="flex items-center justify-between text-xs border-b border-neutral-800 pb-2">
              <span className="font-semibold text-neutral-200">Automated Lead Workflow</span>
              <span className="text-emerald-400 text-[10px] font-mono">Zero Lead Bleed</span>
            </div>

            <div className="bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-800/40 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-emerald-300 font-semibold text-[11px]">
                <FileText size={13} />
                <span>NEET-2026-Course-Matrix.pdf (2.8 MB)</span>
              </div>
              <p className="text-[11px] text-neutral-300">
                Delivered instantly to parent&apos;s WhatsApp within 10 seconds of form submission.
              </p>
            </div>

            <div className="w-full bg-white text-black font-bold py-2.5 px-3 rounded-xl text-xs text-center flex items-center justify-center gap-1.5 hover:bg-neutral-200 transition-colors">
              <Download size={13} />
              <span>Instant WhatsApp Syllabus Download</span>
            </div>
          </div>

          <div className="text-center pt-1">
            <span className="text-[11px] text-neutral-400 font-mono">
              Setup: High-Intent Google Search + WhatsApp CRM Auto-Dispatcher
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. B2B MANUFACTURERS & EXPORTERS MOCKUP:
 * Desktop Browser Frame for Technical Specs & 4-Hour RFQ Pipeline
 */
function B2BMockup({ industry, className = "" }: { industry: string; className?: string }) {
  return (
    <div className={`relative max-w-lg mx-auto select-none ${className}`}>
      {/* Desktop Browser Chrome Frame */}
      <div className="bg-neutral-900 rounded-2xl border border-neutral-700 shadow-2xl overflow-hidden text-white">
        {/* Browser Top Bar with Traffic Light Dots */}
        <div className="bg-neutral-950 px-4 py-2.5 flex items-center gap-3 border-b border-neutral-800">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="bg-neutral-800 text-neutral-400 text-[11px] font-mono px-3 py-1 rounded-md flex-1 text-center truncate border border-neutral-700/50">
            precision-engineering.in/catalog/industrial-valves-rfq
          </div>
        </div>

        {/* Browser Content */}
        <div className="p-5 space-y-4 bg-neutral-900">
          {/* Header & Certifications */}
          <div className="flex items-start justify-between border-b border-neutral-800 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                Direct Manufacturer · GST &amp; IEC Registered
              </span>
              <h4 className="font-bold text-base text-white mt-0.5">
                Forged Steel High-Pressure Ball Valves (Class 150 - 600)
              </h4>
            </div>
            <span className="text-[10px] bg-neutral-800 text-neutral-300 font-mono px-2 py-1 rounded border border-neutral-700 shrink-0">
              ISO 9001:2015
            </span>
          </div>

          {/* Technical Spec Matrix */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-neutral-800/80 p-2 rounded-lg border border-neutral-700/60">
              <span className="text-[10px] text-neutral-400 block">Material Grade</span>
              <span className="font-bold text-white">SS316 / WCB</span>
            </div>
            <div className="bg-neutral-800/80 p-2 rounded-lg border border-neutral-700/60">
              <span className="text-[10px] text-neutral-400 block">Testing Norm</span>
              <span className="font-bold text-white">API 598 Tested</span>
            </div>
            <div className="bg-neutral-800/80 p-2 rounded-lg border border-neutral-700/60">
              <span className="text-[10px] text-neutral-400 block">Minimum Order</span>
              <span className="font-bold text-emerald-400">100 Pieces</span>
            </div>
          </div>

          {/* High-Intent RFQ Form Card */}
          <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-3">
            <div className="flex items-center justify-between">
              <h5 className="font-bold text-xs text-white">Commercial Request for Quote (RFQ)</h5>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <Clock size={11} /> 4-Hr SLA
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-neutral-900 border border-neutral-800 px-3 py-2 rounded-lg text-neutral-300">
                Qty: 500 - 1000 Units
              </div>
              <div className="bg-neutral-900 border border-neutral-800 px-3 py-2 rounded-lg text-neutral-300">
                Port: Nhava Sheva / CIF
              </div>
            </div>

            <div className="w-full bg-white hover:bg-neutral-200 text-black font-bold py-2.5 px-4 rounded-xl text-xs text-center flex items-center justify-center gap-2 transition-colors">
              <span>Generate Official Technical Quote on WhatsApp</span>
              <ArrowRight size={13} />
            </div>
          </div>

          <div className="text-center">
            <span className="text-[11px] text-neutral-400 font-mono">
              Setup: Procurement SEO + Spec Sheets + Instant Commercial RFQ Routing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 5. GENERAL MULTI-CHANNEL ACQUISITION BLUEPRINT (Fallback)
 */
function GeneralFunnelMockup({ industry, className = "" }: { industry: string; className?: string }) {
  return (
    <div className={`relative max-w-md mx-auto select-none ${className}`}>
      <div className="bg-neutral-950 p-3 sm:p-4 rounded-[36px] border-4 border-neutral-800 shadow-2xl">
        <div className="w-28 h-4 bg-neutral-900 rounded-full mx-auto mb-3 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-neutral-800 mr-2" />
          <div className="w-8 h-1.5 rounded-full bg-neutral-800" />
        </div>

        <div className="bg-neutral-900 rounded-[24px] p-4 text-white space-y-3.5">
          <div className="bg-neutral-800 p-3.5 rounded-2xl border border-neutral-700 space-y-2">
            <span className="text-[10px] font-mono uppercase bg-white/10 text-white px-2 py-0.5 rounded font-semibold">
              Conversion Blueprint
            </span>
            <h4 className="font-bold text-sm text-white">Full-Funnel Setup for {industry}</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Targeted high-intent customer acquisition across Search, conversion-engineered landing pages, and instant WhatsApp booking.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-neutral-950 p-3 rounded-xl border border-neutral-800 text-center">
              <span className="text-emerald-400 font-bold block text-sm">Step 1</span>
              <span className="text-neutral-400 text-[10px]">Active Search &amp; Ads</span>
            </div>
            <div className="bg-neutral-950 p-3 rounded-xl border border-neutral-800 text-center">
              <span className="text-white font-bold block text-sm">Step 2</span>
              <span className="text-neutral-400 text-[10px]">1-Click WhatsApp Lead</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
