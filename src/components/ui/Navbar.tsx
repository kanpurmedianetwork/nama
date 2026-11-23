"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Phone, 
  ArrowRight, 
  Plus, 
  X, 
  MessageSquare, 
  Sparkles,
  Target,
  Globe,
  Share2,
  Palette,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import { trackPhoneClick, trackWhatsAppClick, getPrefilledWhatsAppUrl } from "@/lib/tracking";

// Core services displayed in Column 1
const coreServices = [
  {
    title: "Meta & Google Ads",
    desc: "Search, Performance Max & Meta paid ads",
    href: "/services/meta-google-ads",
    icon: Target,
  },
  {
    title: "Website Development",
    desc: "Conversion-ready Next.js & Shopify pages",
    href: "/services/website-development",
    icon: Globe,
  },
  {
    title: "Google Business Profile",
    desc: "Multi-city local 3-pack & Google Maps ranking",
    href: "/services/google-business-profile",
    icon: Search,
  },
  {
    title: "AI Content Marketing (GEO)",
    desc: "AI Overviews, ChatGPT & search content",
    href: "/services/ai-content-marketing",
    icon: Sparkles,
  },
  {
    title: "Brand Identity & Creative",
    desc: "Logos, brand guidelines & ad creatives",
    href: "/services/brand-identity",
    icon: Palette,
  },
  {
    title: "Social Media Marketing",
    desc: "Organic reels, founder branding & growth",
    href: "/services/social-media-marketing",
    icon: Share2,
  },
];

// Problem-led solutions displayed in Column 2
const coreSolutions = [
  {
    title: "Ads not generating leads",
    href: "/solutions/ads-not-generating-leads",
  },
  {
    title: "Website not converting",
    href: "/solutions/website-not-converting",
  },
  {
    title: "Not showing on Google & Maps",
    href: "/solutions/not-showing-on-google",
  },
  {
    title: "Brand or product launch",
    href: "/solutions/brand-or-product-launch",
  },
  {
    title: "Can't post consistently",
    href: "/solutions/consistent-content",
  },
  {
    title: "Sell online with Shopify",
    href: "/solutions/sell-online-shopify",
  },
];

// Main links in the central pill
const centerNavLinks = [
  { name: "Use Cases", href: "/use-cases/clinics-doctors" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const servicesBtnRef = useRef<HTMLButtonElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [whatsappHref, setWhatsappHref] = useState("https://wa.me/919161881100");

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsMegaOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsMegaOpen(false);
    }, 150);
  };

  useEffect(() => {
    setWhatsappHref(getPrefilledWhatsAppUrl());
  }, [pathname]);

  // Close menus on page route changes
  useEffect(() => {
    setIsMegaOpen(false);
    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileSolutionsOpen(false);
  }, [pathname]);

  // Scroll detection for border divider
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle outside clicks to close mega-menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        servicesBtnRef.current &&
        !servicesBtnRef.current.contains(event.target as Node)
      ) {
        setIsMegaOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMegaOpen(false);
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* 1. TOP FIXED HEADER (SalesUp dark style with monochrome palette) */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-300 select-none",
          "bg-[#070b16] text-white",
          scrolled || isMegaOpen
            ? "border-b border-white/10 shadow-lg shadow-black/20"
            : "border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name (Left) - Prominently visible with pure white emblem */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group shrink-0"
            aria-label="Nexudyam — Home"
          >
            <Image 
              src="/logo-white.png" 
              alt="Nexudyam logo" 
              width={36} 
              height={36} 
              priority
              className="w-9 h-9 object-contain transition-transform duration-200 group-hover:scale-105" 
            />
            <span className="font-display font-bold text-lg tracking-tight text-white group-hover:opacity-85 transition-opacity">
              NEXUDYAM
            </span>
          </Link>

          {/* Center Floating Pill Navigation Bar (Desktop) */}
          <nav 
            className="hidden lg:flex items-center gap-1 px-1.5 py-1 rounded-full bg-white/[0.05] ring-1 ring-white/10 shadow-inner"
            aria-label="Primary Navigation"
          >
            {/* Services Dropdown Trigger Pill Button */}
            <button
              ref={servicesBtnRef}
              type="button"
              onClick={() => setIsMegaOpen(!isMegaOpen)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-expanded={isMegaOpen}
              className={cn(
                "flex items-center gap-1.5 h-9 px-4 rounded-full text-[13.5px] font-medium transition-all duration-200 cursor-pointer",
                isMegaOpen
                  ? "bg-white/15 text-white"
                  : "text-neutral-300 hover:text-white hover:bg-white/[0.08]"
              )}
            >
              <span>Services</span>
              <ChevronDown 
                size={13} 
                className={cn(
                  "text-neutral-400 transition-transform duration-200",
                  isMegaOpen && "rotate-180 text-white"
                )} 
              />
            </button>

            {/* Standard Nav Pill Links */}
            {centerNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center h-9 px-3.5 rounded-full text-[13.5px] font-medium transition-all duration-200",
                  pathname.startsWith(link.href)
                    ? "bg-white/15 text-white"
                    : "text-neutral-300 hover:text-white hover:bg-white/[0.08]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Header Controls (Phone & Primary CTA Pill - NO BLUE) */}
          <div className="flex items-center gap-5 shrink-0">
            {/* Direct Phone Number (Visible on Desktop) */}
            <a
              href="tel:+919161881100"
              onClick={() => trackPhoneClick("+919161881100")}
              className="hidden xl:flex items-center gap-2 font-mono text-[13px] text-neutral-300 hover:text-white transition-colors"
              aria-label="Call Nexudyam: +91 91618 81100"
            >
              <Phone size={13} className="text-white/80 shrink-0" />
              <span>+91 91618 81100</span>
            </a>

            {/* Primary CTA Button (High-contrast pure white pill with black text - NO BLUE) */}
            <Link
              href="/contact"
              className="h-[38px] px-5 rounded-full bg-white hover:bg-neutral-100 text-black text-[13.5px] font-semibold ring-1 ring-white/25 shadow-sm transition-all duration-150 flex items-center justify-center hover:scale-[1.02] active:scale-[0.98]"
            >
              Free Audit
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/15 border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label={isMobileOpen ? "Close Menu" : "Open Navigation Menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={18} /> : (
                <div className="flex flex-col gap-1 w-4">
                  <span className="block h-0.5 w-full bg-white rounded-full"></span>
                  <span className="block h-0.5 w-3/4 bg-white rounded-full"></span>
                </div>
              )}
            </button>
          </div>

        </div>

        {/* 2. SALESUP-STYLE MEGA-MENU DROPDOWN (Monochrome, NO BLUE) */}
        {isMegaOpen && (
          <div
            ref={megaMenuRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hidden lg:block absolute top-full left-0 right-0 w-full bg-[#070b16] border-b border-white/10 shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-200"
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="grid grid-cols-12 gap-8 lg:gap-12">
                
                {/* Column 1: CORE SERVICES (2fr / 6 cols) */}
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                    <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-neutral-400 uppercase">
                      Core Services
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setIsMegaOpen(false)}
                      className="text-xs text-neutral-300 hover:text-white font-medium transition-colors flex items-center gap-1 underline underline-offset-4 decoration-white/20 hover:decoration-white"
                    >
                      View all services
                      <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {coreServices.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        onClick={() => setIsMegaOpen(false)}
                        className="group flex flex-col p-2.5 -mx-2.5 rounded-xl hover:bg-white/[0.06] transition-colors"
                      >
                        <span className="text-[14.5px] font-medium text-white group-hover:text-white transition-colors">
                          {service.title}
                        </span>
                        <span className="text-[12.5px] text-neutral-400 group-hover:text-neutral-200 transition-colors leading-snug mt-0.5">
                          {service.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2: PROBLEM-LED SOLUTIONS (1fr / 3 cols) */}
                <div className="col-span-12 lg:col-span-3">
                  <div className="mb-4 pb-2 border-b border-white/10">
                    <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-neutral-400 uppercase">
                      Solutions We Solve
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {coreSolutions.map((sol) => (
                      <Link
                        key={sol.title}
                        href={sol.href}
                        onClick={() => setIsMegaOpen(false)}
                        className="group flex items-center justify-between py-1.5 text-[13.5px] text-neutral-300 hover:text-white transition-colors"
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform">
                          {sol.title}
                        </span>
                        <span className="text-neutral-500 group-hover:text-white transition-colors text-xs font-mono">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3: PROMO CALLOUT CARD (1fr / 3 cols - Pure Monochrome Glow) */}
                <div className="col-span-12 lg:col-span-3">
                  <div className="h-full rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent p-6 flex flex-col justify-between hover:border-white/30 transition-all group relative overflow-hidden shadow-lg">
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-white/[0.05] rounded-full blur-2xl pointer-events-none" />

                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white font-mono text-[10.5px] font-semibold tracking-wider uppercase mb-3">
                        <Sparkles size={11} className="text-white/80" />
                        <span>Free 5-Point Audit</span>
                      </div>
                      
                      <h4 className="text-[17px] font-semibold text-white leading-snug group-hover:text-neutral-200 transition-colors">
                        Find what&apos;s broken between the click and the customer →
                      </h4>
                      
                      <p className="text-[12.5px] text-neutral-300 leading-relaxed mt-2.5">
                        We audit your ad hooks, landing page conversion friction, and multi-city search visibility. 24-hr turnaround.
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                      <Link
                        href="/contact"
                        onClick={() => setIsMegaOpen(false)}
                        className="text-xs font-semibold text-white hover:text-neutral-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        Claim your free audit
                        <ArrowRight size={12} />
                      </Link>
                      <span className="text-[11px] font-mono text-neutral-400">100% Free</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for desktop mega-menu */}
      {isMegaOpen && (
        <div
          onClick={() => setIsMegaOpen(false)}
          className="hidden lg:block fixed inset-0 top-16 bg-black/60 backdrop-blur-xs z-40 transition-opacity"
        />
      )}

      {/* 3. MOBILE FULLSCREEN OVERLAY (Monochrome, NO BLUE) */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-[60] bg-[#070b16] text-white flex flex-col justify-between overflow-y-auto px-6 py-6 animate-in fade-in zoom-in-95 duration-200"
          style={{
            backgroundImage: `radial-gradient(70% 45% at 100% 0%, rgba(255, 255, 255, 0.06), transparent 70%)`
          }}
        >
          {/* Top Row: Logo & Close */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link 
              href="/" 
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center gap-3"
            >
              <Image 
                src="/logo-white.png" 
                alt="Nexudyam logo" 
                width={36} 
                height={36} 
                className="w-9 h-9 object-contain" 
              />
              <span className="font-display font-bold text-lg tracking-tight text-white">
                NEXUDYAM
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileOpen(false)}
              className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/15 border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close Navigation"
            >
              <X size={20} />
            </button>
          </div>

          {/* Staggered Numbered Nav Items */}
          <div className="py-6 flex flex-col gap-5">
            
            {/* 01 Services (Accordion) */}
            <div className="border-b border-white/10 pb-4">
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between text-left group"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-semibold text-neutral-400">01</span>
                  <span className="font-display text-3xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                    Services
                  </span>
                </div>
                <div className={cn(
                  "w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-neutral-300 transition-transform duration-200",
                  isMobileServicesOpen && "rotate-45 text-white"
                )}>
                  <Plus size={16} />
                </div>
              </button>

              {isMobileServicesOpen && (
                <div className="mt-4 grid grid-cols-2 gap-2 animate-in fade-in duration-200">
                  {coreServices.map((service, idx) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-colors flex flex-col justify-between min-h-[76px]"
                    >
                      <span className="font-mono text-[10px] text-neutral-400 font-semibold">
                        0{idx + 1}
                      </span>
                      <span className="text-[13px] font-medium text-white leading-tight">
                        {service.title}
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setIsMobileOpen(false)}
                    className="col-span-2 py-2.5 text-center rounded-xl bg-white/10 border border-white/20 text-white font-medium text-xs hover:bg-white/15 transition-colors"
                  >
                    View all 6 services →
                  </Link>
                </div>
              )}
            </div>

            {/* 02 Solutions (Accordion) */}
            <div className="border-b border-white/10 pb-4">
              <button
                type="button"
                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                className="w-full flex items-center justify-between text-left group"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-semibold text-neutral-400">02</span>
                  <span className="font-display text-3xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                    Solutions
                  </span>
                </div>
                <div className={cn(
                  "w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-neutral-300 transition-transform duration-200",
                  isMobileSolutionsOpen && "rotate-45 text-white"
                )}>
                  <Plus size={16} />
                </div>
              </button>

              {isMobileSolutionsOpen && (
                <div className="mt-4 flex flex-col gap-2 animate-in fade-in duration-200">
                  {coreSolutions.map((sol) => (
                    <Link
                      key={sol.title}
                      href={sol.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="p-2.5 rounded-lg bg-white/[0.03] text-sm text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-colors flex items-center justify-between"
                    >
                      <span>{sol.title}</span>
                      <span className="text-neutral-400 font-mono text-xs">→</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 03 Use Cases */}
            <Link
              href="/use-cases/clinics-doctors"
              onClick={() => setIsMobileOpen(false)}
              className="border-b border-white/10 pb-4 flex items-center justify-between group"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-semibold text-neutral-400">03</span>
                <span className="font-display text-3xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                  Use Cases
                </span>
              </div>
              <ArrowRight size={20} className="text-neutral-500 group-hover:text-white transition-colors" />
            </Link>

            {/* 04 Pricing */}
            <Link
              href="/pricing"
              onClick={() => setIsMobileOpen(false)}
              className="border-b border-white/10 pb-4 flex items-center justify-between group"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-semibold text-neutral-400">04</span>
                <span className="font-display text-3xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                  Pricing
                </span>
              </div>
              <ArrowRight size={20} className="text-neutral-500 group-hover:text-white transition-colors" />
            </Link>

            {/* 05 About */}
            <Link
              href="/about"
              onClick={() => setIsMobileOpen(false)}
              className="border-b border-white/10 pb-4 flex items-center justify-between group"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-semibold text-neutral-400">05</span>
                <span className="font-display text-3xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                  About
                </span>
              </div>
              <ArrowRight size={20} className="text-neutral-500 group-hover:text-white transition-colors" />
            </Link>

            {/* 06 Blog */}
            <Link
              href="/blog"
              onClick={() => setIsMobileOpen(false)}
              className="border-b border-white/10 pb-4 flex items-center justify-between group"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-semibold text-neutral-400">06</span>
                <span className="font-display text-3xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                  Blog
                </span>
              </div>
              <ArrowRight size={20} className="text-neutral-500 group-hover:text-white transition-colors" />
            </Link>

          </div>

          {/* Bottom Actions: Phone, WhatsApp, and Primary Audit CTA (NO BLUE) */}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+919161881100"
                onClick={() => {
                  trackPhoneClick("+919161881100");
                  setIsMobileOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-white text-xs font-medium hover:bg-white/10 transition-colors"
              >
                <Phone size={14} className="text-white" />
                <span>Call Us</span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick({ page_path: pathname, phone_number: "+919161881100" });
                  setIsMobileOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-white text-xs font-medium hover:bg-white/10 transition-colors"
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </a>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="w-full py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black font-bold text-sm text-center shadow-lg transition-colors"
            >
              Get Free 5-Point Lead Audit
            </Link>
          </div>

        </div>
      )}
    </>
  );
}
