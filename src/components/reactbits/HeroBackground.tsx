"use client";

import React from "react";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Subtle Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.45] [background-image:radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" 
      />

      {/* Ambient Animated Glow Aura 1 */}
      <div 
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-brand/5 via-accent/30 to-transparent rounded-full blur-3xl opacity-70 animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      {/* Ambient Animated Glow Aura 2 */}
      <div 
        className="absolute top-[30%] -left-[10%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl opacity-60 animate-pulse"
        style={{ animationDuration: "12s" }}
      />

      {/* Ambient Animated Glow Aura 3 */}
      <div 
        className="absolute top-[25%] -right-[10%] w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-3xl opacity-60 animate-pulse"
        style={{ animationDuration: "10s" }}
      />
    </div>
  );
}
