import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
  href?: string;
}

export function ServiceCard({ title, description, features, icon, href = "/services" }: ServiceCardProps) {
  return (
    <div className="group bg-white border border-border p-8 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      {/* Decorative top border highlight on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      
      <div className="w-14 h-14 bg-brand/10 text-brand rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="font-display font-bold text-xl text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm mb-6 flex-grow">{description}</p>
      
      <ul className="space-y-2 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start text-sm text-subtle-foreground">
            <span className="text-brand mr-2 font-bold">•</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <Link 
        href={href}
        className="inline-flex items-center text-brand font-bold text-sm mt-auto group/link"
      >
        Learn more 
        <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
