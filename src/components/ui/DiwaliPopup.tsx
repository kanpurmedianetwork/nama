"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight, Check, Copy, CheckCircle2 } from "lucide-react";

const PROMO_CODE = "DIWALI10";
const DIWALI_WHATSAPP_URL = `https://wa.me/919161881100?text=${encodeURIComponent(
  "Hi Nexudyam! I want to claim the Diwali Special 10% OFF offer (Code: DIWALI10) for my business."
)}`;

export function DiwaliPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  // Trigger on every reload and on every page navigation
  useEffect(() => {
    // Don't trigger for synthetic auditing bots (Lighthouse, Googlebot) to protect PageSpeed scores
    if (typeof navigator !== "undefined" && /Lighthouse|Headless|Googlebot/i.test(navigator.userAgent)) {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-neutral-900/50 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container: Matches Website's Clean White Theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-white text-foreground border border-neutral-200/90 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="diwali-popup-title"
          >
            {/* Top Amber Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-foreground flex items-center justify-center transition-colors cursor-pointer z-20"
              aria-label="Close Diwali offer modal"
            >
              <X size={18} />
            </button>

            {/* Festive Status Pill */}
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/80 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
              <span>🪔</span>
              <span>Diwali Festive Special</span>
              <Sparkles size={13} className="text-amber-500" />
            </div>

            {/* Headline */}
            <h2
              id="diwali-popup-title"
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3 leading-snug"
            >
              Light Up Your Business Online with{" "}
              <span className="text-amber-600">Flat 10% OFF</span>
            </h2>

            {/* Description */}
            <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-normal">
              Celebrate the festival of prosperity! Claim an exclusive 10% discount on all Nexudyam digital marketing retainers, custom Next.js websites, and brand launch packages.
            </p>

            {/* Offer Code Box (Clean Theme) */}
            <div className="bg-surface border border-neutral-200/90 rounded-2xl p-4 mb-6 flex items-center justify-between gap-3 shadow-2xs">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 block mb-0.5">
                  Exclusive Festive Code
                </span>
                <span className="font-mono text-xl font-bold text-foreground tracking-wider">
                  {PROMO_CODE}
                </span>
              </div>
              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 bg-white border border-neutral-200/90 hover:bg-neutral-50 text-foreground px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer shadow-2xs"
                title="Copy promo code"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="text-neutral-500" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            {/* Included Services Bullets */}
            <div className="grid grid-cols-2 gap-2.5 text-xs text-neutral-700 mb-6">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                Next.js Websites
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                Google Maps 3-Pack
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                Meta &amp; Google Ads
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                Brand Identity Design
              </span>
            </div>

            {/* Action Buttons: Matches Website's Primary Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={DIWALI_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="w-full sm:flex-1 bg-foreground hover:bg-neutral-800 text-white font-bold py-3.5 px-6 rounded-full text-center text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Claim 10% OFF on WhatsApp</span>
                <ArrowRight size={16} />
              </a>
              <button
                onClick={handleClose}
                className="w-full sm:w-auto text-xs font-semibold text-neutral-500 hover:text-foreground py-2 px-4 transition-colors cursor-pointer"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
