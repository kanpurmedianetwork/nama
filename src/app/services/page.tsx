import type { Metadata } from "next";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Palette, Share2, Megaphone, Monitor, MapPin, Calendar, Users, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing & Branding Services | Nexudyam",
  description: "Explore Nexudyam's digital marketing, web development, and branding services. We help startups and MSMEs get more customers. Get a free audit today!",
};

export default function ServicesPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Digital Marketing & Branding Services for Your Business
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide all the digital marketing, web development, and branding services your business needs to grow and find more customers. Get a free audit today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          <ServiceCard 
            title="Brand Identity Design"
            description="Visual identity that builds trust and recognition."
            features={["Logo, palette, typography", "Brand guidelines", "Delivered in 7 days"]}
            icon={<Palette size={28} />}
          />
          <ServiceCard 
            title="Social Media Marketing"
            description="Consistent posting — you just approve."
            features={["Instagram Reels strategy", "Facebook page setup", "AI captions & scripts"]}
            icon={<Share2 size={28} />}
          />
          <ServiceCard 
            title="Ads Campaign Setup"
            description="Starting at ₹2,000 ad spend — any budget."
            features={["Meta Ads (FB + Insta)", "Google Search & Display", "A/B testing & reporting"]}
            icon={<Megaphone size={28} />}
          />
          <ServiceCard 
            title="Website Development"
            description="Fast, mobile-first websites built on modern stack."
            features={["5-page business site", "SEO-optimized from day one", "Includes Google Business setup"]}
            icon={<Monitor size={28} />}
          />
          <ServiceCard 
            title="Google Business Profile"
            description="Rank in Google Maps and 'near me' searches."
            features={["Claim and verify", "Full optimization", "Review management"]}
            icon={<MapPin size={28} />}
          />
          <ServiceCard 
            title="AI Content Marketing"
            description="10x faster than traditional agencies — at 1/3rd the cost."
            features={["AI Reels & blog scripts", "WhatsApp broadcast content", "30-day calendars in 48h"]}
            icon={<Cpu size={28} />}
          />
          <ServiceCard 
            title="Event Promotion"
            description="End-to-end event buzz and coverage."
            features={["Pre-event ads & WhatsApp", "Live coverage brief", "Post-event repurposing"]}
            icon={<Calendar size={28} />}
          />
          <ServiceCard 
            title="Artist Management"
            description="Professional profile for independent creators."
            href="/artist-management"
            features={["Brand identity for artists", "Booking management", "Instagram/YouTube growth"]}
            icon={<Users size={28} />}
          />
        </div>
      </div>
    </div>
  );
}
