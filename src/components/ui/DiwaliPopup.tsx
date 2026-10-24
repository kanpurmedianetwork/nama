"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight, Check, Copy } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const PROMO_CODE = "DIWALI10";
const DIWALI_WHATSAPP_URL = `https://wa.me/919161881100?text=${encodeURIComponent(
  "Hi Nexudyam! I would like to claim the Diwali Special 10% OFF offer (Code: DIWALI10) for my business."
)}`;

export function DiwaliPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem("nexudyam_diwali_dismissed");
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500); // Trigger after 2.5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("nexudyam_diwali_dismissed", "true");
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
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-neutral-950 text-white border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="diwali-popup-title"
          >
            {/* Ambient Festive Glows */}
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer z-20"
              aria-label="Close Diwali offer modal"
            >
              <X size={18} />
            </button>

            {/* Festive Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
              <span>🪔</span>
              <span>Diwali Festive Special</span>
              <Sparkles size={13} className="text-amber-400" />
            </div>

            {/* Headline */}
            <h2
              id="diwali-popup-title"
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 leading-snug"
            >
              Light Up Your Business Online with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400">
                Flat 10% OFF
              </span>
            </h2>

            {/* Description */}
            <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-normal">
              Celebrate the festival of prosperity! Claim an exclusive 10% discount on all Nexudyam digital marketing retainers, custom Next.js websites, and brand launch packages.
            </p>

            {/* Offer Code Box */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 flex items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-0.5">
                  Exclusive Festive Code
                </span>
                <span className="font-mono text-xl font-bold text-amber-400 tracking-wider">
                  {PROMO_CODE}
                </span>
              </div>
              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-neutral-200 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                title="Copy promo code"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            {/* Included Services Bullets */}
            <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300 mb-6">
              <span className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">✓</span> Next.js Websites
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">✓</span> Google Maps 3-Pack
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">✓</span> Meta &amp; Google Ads
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">✓</span> Brand Identity Design
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={DIWALI_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="w-full sm:flex-1 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 font-bold py-3.5 px-6 rounded-full text-center text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-amber-500/20 cursor-pointer"
              >
                <span>Claim 10% OFF on WhatsApp</span>
                <ArrowRight size={16} />
              </a>
              <button
                onClick={handleClose}
                className="w-full sm:w-auto text-xs text-neutral-400 hover:text-white py-2 px-4 transition-colors cursor-pointer"
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
