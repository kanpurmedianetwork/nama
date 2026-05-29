"use client";

import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919161881100"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2.5 font-sans font-bold text-sm md:text-base border border-white/20 hover:shadow-2xl"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
      </div>
      <MessageCircle size={18} className="fill-white/15" />
      <span>WhatsApp Us</span>
    </a>
  );
}
