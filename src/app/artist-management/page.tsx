import type { Metadata } from "next";
import { Users, Video, Mic, CalendarCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Artist Management │ Creators & Influencers │ Nexudyam",
  description: "Professional brand building, booking management, and Instagram/YouTube growth execution for artists and independent creators in Kanpur & UP.",
};

export default function ArtistManagementPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-bold tracking-tight uppercase mb-6">
            Creator Vertical
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Build Your Fanbase. <br />We Handle the Rest.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We handle the rest while you build your fanbase and focus on your art. We focus on building your brand, growing your reach on Instagram and YouTube, and managing bookings.
          </p>
          <a 
            href="https://wa.me/919161881100" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-foreground text-white px-8 py-4 rounded-full font-bold hover:bg-brand transition-colors"
          >
            Apply for Roster
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-surface p-8 md:p-16 rounded-3xl border border-border">
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">What We Do for Creators</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-border mr-4">
                  <Video className="text-brand" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Content Strategy & Growth</h3>
                  <p className="text-muted-foreground text-sm mt-1">Strategic planning for Instagram Reels and YouTube to maximize algorithm reach.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-border mr-4">
                  <Mic className="text-brand" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Brand Identity</h3>
                  <p className="text-muted-foreground text-sm mt-1">Professional press kits, logos, and visual styling for artists.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-border mr-4">
                  <CalendarCheck className="text-brand" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Booking Management</h3>
                  <p className="text-muted-foreground text-sm mt-1">We handle inbound inquiries, negotiate rates, and schedule your gigs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-border mr-4">
                  <ShieldCheck className="text-brand" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Brand Deal Outreach</h3>
                  <p className="text-muted-foreground text-sm mt-1">Active pitching to relevant brands for sponsorships and collaborations.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-brand/20 to-accent rounded-2xl h-full min-h-[400px] flex items-center justify-center border border-brand/20 relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] [background-size:20px_20px]" />
             <div className="relative text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl m-8 border border-white/50 shadow-xl">
               <Users size={48} className="text-brand mx-auto mb-4" />
               <p className="font-display font-bold text-2xl text-foreground">Nexudyam Artists</p>
               <p className="text-sm text-muted-foreground">Representing top talent in UP</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
