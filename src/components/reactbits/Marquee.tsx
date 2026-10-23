import React, { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: "normal" | "slow";
  pauseOnHover?: boolean;
  fadeEdges?: boolean;
}

export function Marquee({
  children,
  className,
  speed = "normal",
  pauseOnHover = true,
  fadeEdges = true,
}: MarqueeProps) {
  const animationClass = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full flex select-none",
        fadeEdges && "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          animationClass,
          pauseOnHover && "hover:[animation-play-state:paused]",
          "flex items-center gap-4 py-2"
        )}
      >
        <div className="flex items-center gap-4 shrink-0">{children}</div>
        <div className="flex items-center gap-4 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
