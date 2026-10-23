import React, { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ShinyTextProps {
  children: ReactNode;
  className?: string;
  speed?: number; // duration in seconds
  disabled?: boolean;
}

export function ShinyText({
  children,
  className,
  speed = 3,
  disabled = false,
}: ShinyTextProps) {
  if (disabled) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent bg-[linear-gradient(110deg,#111111_35%,#999999_50%,#111111_65%)] dark:bg-[linear-gradient(110deg,#ffffff_35%,#94a3b8_50%,#ffffff_65%)] bg-[length:250%_100%] animate-shine",
        className
      )}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {children}
    </span>
  );
}
