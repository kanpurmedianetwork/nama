"use client";

import React from "react";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Subtle Architectural Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_35%,#000_60%,transparent_100%)]" 
      />

      {/* Soft Ambient Light Glow 1 */}
      <div 
        className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-b from-neutral-200/40 via-neutral-100/20 to-transparent rounded-full blur-3xl opacity-80"
      />

      {/* Soft Ambient Light Glow 2 */}
      <div 
        className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/[0.04] to-transparent rounded-full blur-3xl"
      />

      {/* Soft Ambient Light Glow 3 */}
      <div 
        className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-gradient-to-tl from-amber-500/[0.04] to-transparent rounded-full blur-3xl"
      />
    </div>
  );
}
