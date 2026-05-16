import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  target: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({ name, price, target, features, isPopular }: PricingCardProps) {
  return (
    <div className={cn(
      "relative bg-white border rounded-2xl p-8 flex flex-col h-full transition-transform duration-300",
      isPopular ? "border-brand shadow-xl md:-translate-y-4" : "border-border hover:shadow-md hover:-translate-y-1"
    )}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
          <span>★</span> Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="font-display font-bold text-2xl text-foreground mb-2">{name}</h3>
        <p className="text-subtle-foreground text-sm">{target}</p>
      </div>
      
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-3xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground text-sm">/ month</span>
        </div>
      </div>
      
      <a 
        href="https://wa.me/919161881100" 
        target="_blank" 
        rel="noopener noreferrer"
        className={cn(
          "w-full block text-center py-3 rounded-lg font-bold mb-8 transition-colors",
          isPopular 
            ? "bg-brand text-white hover:bg-brand-dark shadow-md hover:shadow-lg" 
            : "bg-surface text-foreground border border-border hover:bg-border/50"
        )}
      >
        Get Started
      </a>
      
      <div className="flex-grow">
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start text-sm text-muted-foreground">
              <Check size={18} className="text-brand shrink-0 mr-3 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
