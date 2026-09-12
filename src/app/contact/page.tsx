import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { LeadForm } from "@/components/ui/LeadForm";
import { WHATSAPP_URL, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Nexudyam | Digital Marketing Agency in Kanpur",
  description: "Reach Nexudyam on WhatsApp, call +91-9161881100, or fill our contact form. We respond within 4 hours on business days.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Nexudyam | Digital Marketing Agency in Kanpur",
    description: "Reach Nexudyam on WhatsApp, call +91-9161881100, or fill our contact form. We respond within 4 hours on business days.",
    url: "https://www.nexudyam.in/contact",
    siteName: "Nexudyam",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Nexudyam Digital Marketing Agency Kanpur logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Nexudyam | Digital Marketing Agency in Kanpur",
    description: "Reach Nexudyam on WhatsApp, call +91-9161881100, or fill our contact form. We respond within 4 hours on business days.",
    images: ["/logo.svg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd 
        type="BreadcrumbList"
        data={{
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.nexudyam.in"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact",
              item: "https://www.nexudyam.in/contact"
            }
          ]
        }}
      />
      <div className="py-20 md:py-32 bg-surface">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Contact Our Kanpur Marketing Team
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Let&apos;s talk about your business growth. Whether you need digital marketing, web design, or paid advertising help, we are here to support your journey. Reach out to us directly or fill out the form below.
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
                      <a href={WHATSAPP_URL} className="text-muted-foreground hover:text-brand transition-colors block mt-1">{CONTACT_PHONE}</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-brand/10 p-3 rounded-lg text-brand mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Email</p>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: `<!--email_off--><a href="mailto:${CONTACT_EMAIL}" class="text-muted-foreground hover:text-brand transition-colors block mt-1">${CONTACT_EMAIL}</a><!--/email_off-->`
                        }}
                      />
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
                    href={WHATSAPP_URL} 
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

            {/* Reusable Lead Capture Form instead of Tally button */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
