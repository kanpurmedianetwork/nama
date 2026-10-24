"use client";

import React, { type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StarBorderProps {
  as?: ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export function StarBorder({
  as: Component = "button",
  className = "",
  color = "#111827",
  speed = "5s",
  children,
  ...props
}: StarBorderProps) {
  return (
    <Component
      className={cn(
        "relative inline-flex items-center justify-center p-[2px] overflow-hidden rounded-full group cursor-pointer transition-transform active:scale-95",
        className
      )}
      {...props}
    >
      {/* Animated glowing star sweep top */}
      <div
        className="absolute w-[300%] h-[100%] opacity-80 -top-1/2 -left-1/2 rounded-full animate-star-movement-top pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color} 15%, transparent 65%)`,
          animationDuration: speed,
        }}
      />

      {/* Animated glowing star sweep bottom */}
      <div
        className="absolute w-[300%] h-[100%] opacity-80 -bottom-1/2 -right-1/2 rounded-full animate-star-movement-bottom pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color} 15%, transparent 65%)`,
          animationDuration: speed,
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full flex items-center justify-center rounded-full bg-brand text-white px-7 py-3.5 text-base font-bold transition-colors group-hover:bg-brand-dark">
        {children}
      </div>
    </Component>
  );
}
