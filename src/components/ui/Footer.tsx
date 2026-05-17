import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image src="/logo.svg" alt="Nexudyam Logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-display font-bold text-xl tracking-tight text-foreground">
                NEXUDYAM
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Next Generation Entrepreneurship. We help startups, MSMEs, and creators build brand identity and grow online.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Services</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-brand">Brand Identity</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-brand">Meta & Google Ads</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-brand">Website Development</Link></li>
              <li><Link href="/artist-management" className="text-sm text-muted-foreground hover:text-brand">Artist Management</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-brand">About Us</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-brand">Pricing</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-brand">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-brand">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Kanpur, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand shrink-0" />
                <span className="text-sm text-muted-foreground">+91-9161881100</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand shrink-0" />
                <span className="text-sm text-muted-foreground">hello@nexudyam.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-brand rounded-2xl p-8 md:p-12 text-center text-white mb-16 flex flex-col items-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            One Call. One Partner. Everything Your Business Needs to Grow.
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            Stop losing customers to businesses with better online presence. Start with a free audit — we'll show you exactly what's missing and how to fix it.
          </p>
          <a
            href="https://wa.me/919161881100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand px-8 py-4 rounded-full font-bold hover:bg-accent transition-colors"
          >
            Talk to Us on WhatsApp
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-subtle-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Nexudyam. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-subtle-foreground hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-subtle-foreground hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
