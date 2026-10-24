"use client";

import React, { useRef, useState, useCallback, type ReactNode, type MouseEvent } from "react";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltedCardProps {
  children: ReactNode;
  className?: string;
  maxAngle?: number;
  scale?: number;
  glare?: boolean;
}

export function TiltedCard({
  children,
  className,
  maxAngle = 8,
  scale = 1.02,
  glare = true,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const springConfig = { damping: 20, stiffness: 200, mass: 0.1 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scaleSpring = useSpring(1, springConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate tilt angles (-maxAngle to +maxAngle)
      const xPct = (mouseX / width - 0.5) * 2;
      const yPct = (mouseY / height - 0.5) * 2;

      rotateX.set(-yPct * maxAngle);
      rotateY.set(xPct * maxAngle);
      scaleSpring.set(scale);

      if (glare) {
        setGlarePosition({
          x: (mouseX / width) * 100,
          y: (mouseY / height) * 100,
          opacity: 0.15,
        });
      }
    },
    [maxAngle, scale, glare, rotateX, rotateY, scaleSpring]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    scaleSpring.set(1);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  }, [rotateX, rotateY, scaleSpring]);

  return (
    <div
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale: scaleSpring,
          transformStyle: "preserve-3d",
        }}
        className={cn("relative h-full transition-shadow duration-300", className)}
      >
        {children}

        {/* Dynamic Specular Glare */}
        {glare && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl z-40 transition-opacity duration-300"
            style={{
              opacity: glarePosition.opacity,
              background: `radial-gradient(400px circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.4), transparent 80%)`,
            }}
            aria-hidden="true"
          />
        )}
      </motion.div>
    </div>
  );
}
