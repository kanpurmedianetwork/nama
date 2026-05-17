"use client";

import { useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TallyPopupButton } from "./TallyEmbed";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
  href?: string;
}

export function ServiceCard({ title, description, features, icon }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group bg-white border border-border p-8 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      {/* Decorative top border highlight on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      
      <div className="w-14 h-14 bg-brand/10 text-brand rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="font-display font-bold text-xl text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>
      
      {!isExpanded ? (
        <>
          <ul className="space-y-2 mb-8">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start text-sm text-subtle-foreground">
                <span className="text-brand mr-2 font-bold">•</span>
                {feature}
              </li>
            ))}
          </ul>
          
          <button 
            onClick={() => setIsExpanded(true)}
            className="inline-flex items-center text-brand font-bold text-sm mt-auto group/button"
          >
            Learn more 
            <ArrowRight size={16} className="ml-1 group-hover/button:translate-x-1 transition-transform" />
          </button>
        </>
      ) : (
        <div className="mt-auto animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="bg-brand/5 border border-brand/10 rounded-xl p-4 mb-4">
            <p className="text-sm text-foreground font-bold mb-2">
              Ready to start?
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              Get a custom proposal and action plan tailored for your specific goals in {title}.
            </p>
            <TallyPopupButton className="w-full bg-brand text-white py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors shadow-sm">
              Get a Proposal
              <ArrowUpRight size={16} />
            </TallyPopupButton>
          </div>
          <button 
            onClick={() => setIsExpanded(false)}
            className="text-xs text-subtle-foreground hover:text-foreground transition-colors"
          >
            ← Back to features
          </button>
        </div>
      )}
    </div>
  );
}
