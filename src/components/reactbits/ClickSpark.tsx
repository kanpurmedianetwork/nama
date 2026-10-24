"use client";

import React, { useRef, useEffect, useCallback, type ReactNode, type MouseEvent } from "react";

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  children: ReactNode;
  className?: string;
}

export function ClickSpark({
  sparkColor = "#000000",
  sparkSize = 8,
  sparkRadius = 24,
  sparkCount = 8,
  duration = 450,
  children,
  className = "",
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let animationId: number;

    const animate = (timestamp: number) => {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        sparksRef.current = sparksRef.current.filter((spark) => {
          const elapsed = timestamp - spark.startTime;
          if (elapsed >= duration) return false;

          const progress = elapsed / duration;
          // ease-out cubic
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentDist = easeOut * sparkRadius;
          const currentSize = sparkSize * (1 - progress);

          const px = spark.x + Math.cos(spark.angle) * currentDist;
          const py = spark.y + Math.sin(spark.angle) * currentDist;

          ctx.save();
          ctx.beginPath();
          ctx.arc(px, py, Math.max(0.5, currentSize / 2), 0, Math.PI * 2);
          ctx.fillStyle = sparkColor;
          ctx.globalAlpha = 1 - progress;
          ctx.fill();
          ctx.restore();

          return true;
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [sparkColor, sparkSize, sparkRadius, duration]);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const now = performance.now();
      const newSparks: Spark[] = [];

      for (let i = 0; i < sparkCount; i++) {
        const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() * 0.3 - 0.15);
        newSparks.push({ x, y, angle, startTime: now });
      }

      sparksRef.current.push(...newSparks);
    },
    [sparkCount]
  );

  return (
    <div onClick={handleClick} className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-50 w-full h-full"
      />
      {children}
    </div>
  );
}
