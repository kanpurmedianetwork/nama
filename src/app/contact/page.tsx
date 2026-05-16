import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { TallyPopupButton } from "@/components/ui/TallyEmbed";

export const metadata: Metadata = {
  title: "Contact Nexudyam │ WhatsApp, Call, or Email │ Kanpur",
  description: "Reach Nexudyam on WhatsApp, call +91-9161881100, or fill our contact form. We respond within 4 hours on business days.",
};

export default function ContactPage() {
  return (
    <div className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Let's Talk About Your Growth
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you need a complete rebrand or just want to run better ads, we're here to help. Reach out to us directly or fill out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="font-display font-bold text-xl mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-brand/10 p-3 rounded-lg text-brand mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Phone / WhatsApp</p>
                    <a href="https://wa.me/919161881100" className="text-muted-foreground hover:text-brand transition-colors block mt-1">+91 91618 81100</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand/10 p-3 rounded-lg text-brand mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Email</p>
                    <a href="mailto:hello@nexudyam.in" className="text-muted-foreground hover:text-brand transition-colors block mt-1">hello@nexudyam.in</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand/10 p-3 rounded-lg text-brand mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Headquarters</p>
                    <p className="text-muted-foreground mt-1">Kanpur, Uttar Pradesh<br/>India</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand/10 p-3 rounded-lg text-brand mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Business Hours</p>
                    <p className="text-muted-foreground mt-1">Mon - Sat: 10:00 AM - 7:00 PM<br/>Sun: Closed</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-border">
                <a 
                  href="https://wa.me/919161881100" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-foreground text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors shadow-md"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Tally.so Popup Form Trigger */}
          <div className="lg:col-span-3">
            <div className="bg-white p-10 md:p-16 rounded-2xl border border-border shadow-sm h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-foreground/5 rounded-full flex items-center justify-center mb-8">
                <Send size={36} className="text-foreground" />
              </div>
              <h3 className="font-display font-bold text-3xl mb-4">Send us a message</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
                Tell us about your business and what you're looking to achieve. We'll respond within 4 hours on business days.
              </p>
              <TallyPopupButton
                className="bg-foreground text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-brand-dark transition-colors shadow-md flex items-center gap-3"
              >
                <Mail size={20} />
                Open Contact Form
              </TallyPopupButton>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
