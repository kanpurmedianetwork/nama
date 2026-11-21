"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { getPrefilledWhatsAppUrl, trackWhatsAppClick } from "@/lib/tracking";

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  variant?: "primary" | "secondary" | "subtle";
  customMessage?: string;
}

export function WhatsAppButton({
  text = "Get a Free 5-Point Lead Audit",
  className,
  variant = "primary",
  customMessage,
}: WhatsAppButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackWhatsAppClick({ cta_text: text });
    e.currentTarget.href = getPrefilledWhatsAppUrl(customMessage);
  };

  const defaultClasses =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2.5 bg-foreground text-white px-8 py-4 rounded-full text-base font-bold hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
      : "inline-flex items-center justify-center gap-2 border border-neutral-300 text-foreground bg-white px-8 py-4 rounded-full text-base font-bold hover:bg-neutral-50 transition-all shadow-xs cursor-pointer";

  return (
    <a
      href="https://wa.me/919161881100"
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className || defaultClasses}
    >
      <span>{text}</span>
      <ArrowRight size={18} />
    </a>
  );
}
