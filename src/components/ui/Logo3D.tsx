"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Logo3DProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function Logo3D({ size = 32, className = "" }: Logo3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt physics values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 180 };
  const mouseRotateX = useSpring(useTransform(y, [-0.5, 0.5], [20, -20]), springConfig);
  const mouseRotateY = useSpring(useTransform(x, [-0.5, 0.5], [-20, 20]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{
        perspective: 800,
        width: size,
        height: size,
      }}
    >
      {/* 3D Ambient + Interactive Floating Canvas */}
      <motion.div
        className="w-full h-full relative"
        style={{
          transformStyle: "preserve-3d",
          rotateX: isHovered ? mouseRotateX : 0,
          rotateY: isHovered ? mouseRotateY : 0,
        }}
        animate={
          !isHovered
            ? {
                rotateY: [-12, 12, -12],
                rotateX: [6, -6, 6],
                rotateZ: [-2, 2, -2],
                y: [-1.5, 1.5, -1.5],
              }
            : undefined
        }
        transition={
          !isHovered
            ? {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      >
        {/* Soft 3D Shadow Layer */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none opacity-40 blur-xs"
          style={{
            transform: "translateZ(-8px) scale(0.9)",
            background: "radial-gradient(circle, rgba(0,0,0,0.3) 0%, transparent 70%)",
          }}
        />

        {/* 3D Emblem Layer */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transform: "translateZ(12px)",
            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.16))",
          }}
        >
          <Image
            src="/logo-transparent.png"
            alt="Nexudyam 3D logo"
            width={size}
            height={size}
            priority
            className="w-full h-full object-contain pointer-events-none transition-transform duration-200"
          />

          {/* 3D Specular Sheen Reflection sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 rounded-full"
            style={{
              background:
                "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.8) 50%, transparent 80%)",
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1.5,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
