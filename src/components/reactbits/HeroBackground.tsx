"use client";

import React from "react";
import { Squares } from "./Squares";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Interactive Squares Grid (React Bits) */}
      <div className="absolute inset-0 pointer-events-auto [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_60%,transparent_100%)] opacity-80">
        <Squares
          direction="diagonal"
          speed={0.35}
          squareSize={44}
          borderColor="rgba(0, 0, 0, 0.05)"
          hoverFillColor="rgba(0, 0, 0, 0.04)"
        />
      </div>

      {/* Ambient Animated Glow Aura 1 */}
      <div 
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-brand/5 via-accent/30 to-transparent rounded-full blur-3xl opacity-70 animate-pulse pointer-events-none"
        style={{ animationDuration: "8s" }}
      />

      {/* Ambient Animated Glow Aura 2 */}
      <div 
        className="absolute top-[30%] -left-[10%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl opacity-60 animate-pulse pointer-events-none"
        style={{ animationDuration: "12s" }}
      />

      {/* Ambient Animated Glow Aura 3 */}
      <div 
        className="absolute top-[25%] -right-[10%] w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-3xl opacity-60 animate-pulse pointer-events-none"
        style={{ animationDuration: "10s" }}
      />
    </div>
  );
}
