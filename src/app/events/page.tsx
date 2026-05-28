import type { Metadata } from "next";
import { CalendarDays, Megaphone, Camera, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Event Promotion & Coverage │ Nexudyam",
  description: "End-to-end event promotion, live coverage, and post-event content repurposing for businesses and creators in Kanpur & UP.",
  keywords: ["event promotion services", "event marketing campaigns", "live coverage team UP", "social media countdown ads", "pre-event buzz agency"],
};

export default function EventsPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Make Your Next Event Unforgettable
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We make your next event unforgettable by handling the digital buzz so you can focus on hosting. From pre-event promotions to live coverage and post-event content generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-border">
            <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center mb-6">
              <Megaphone size={24} />
            </div>
            <h3 className="font-display font-bold text-xl mb-3">Pre-Event Buzz</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              We generate hype before the doors open to ensure maximum attendance.
            </p>
            <ul className="space-y-2 text-sm text-subtle-foreground">
              <li>• Meta & Google Ads targeting</li>
              <li>• WhatsApp broadcast campaigns</li>
              <li>• Social media countdowns</li>
            </ul>
          </div>

          <div className="bg-brand text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Camera size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 text-white rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Camera size={24} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Live Coverage</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Real-time updates to keep the momentum going for those who couldn't make it.
              </p>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• Live Instagram Stories & Reels</li>
                <li>• Professional photography briefs</li>
                <li>• Real-time social engagement</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-border">
            <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center mb-6">
              <Share2 size={24} />
            </div>
            <h3 className="font-display font-bold text-xl mb-3">Post-Event Repurposing</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              We turn one night into weeks of engaging social media content.
            </p>
            <ul className="space-y-2 text-sm text-subtle-foreground">
              <li>• Highlight reels & aftermovies</li>
              <li>• Testimonial snippets</li>
              <li>• Evergreen brand content</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
