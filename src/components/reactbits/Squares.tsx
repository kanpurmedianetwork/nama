"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

interface SquaresProps {
  direction?: "right" | "left" | "up" | "down" | "diagonal";
  speed?: number;
  borderColor?: string;
  hoverFillColor?: string;
  squareSize?: number;
  className?: string;
}

export function Squares({
  direction = "right",
  speed = 0.5,
  borderColor = "rgba(0, 0, 0, 0.06)",
  hoverFillColor = "rgba(0, 0, 0, 0.04)",
  squareSize = 40,
  className = "",
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const numSquaresX = useRef<number>(0);
  const numSquaresY = useRef<number>(0);
  const gridOffset = useRef({ x: 0, y: 0 });
  const [hoveredSquare, setHoveredSquare] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x / squareSize);
      const startY = Math.floor(gridOffset.current.y / squareSize);

      ctx.lineWidth = 0.75;
      ctx.strokeStyle = borderColor;

      for (let x = startX; x < startX + numSquaresX.current; x++) {
        for (let y = startY; y < startY + numSquaresY.current; y++) {
          const squareX = x * squareSize - (gridOffset.current.x % squareSize);
          const squareY = y * squareSize - (gridOffset.current.y % squareSize);

          if (hoveredSquare && hoveredSquare.x === x && hoveredSquare.y === y) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }

          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      // Update grid movement offset
      switch (direction) {
        case "right":
          gridOffset.current.x -= speed;
          break;
        case "left":
          gridOffset.current.x += speed;
          break;
        case "down":
          gridOffset.current.y -= speed;
          break;
        case "up":
          gridOffset.current.y += speed;
          break;
        case "diagonal":
          gridOffset.current.x -= speed;
          gridOffset.current.y -= speed;
          break;
      }

      requestRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize, hoveredSquare]);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const hoveredX = Math.floor((mouseX + (gridOffset.current.x % squareSize)) / squareSize) + Math.floor(gridOffset.current.x / squareSize);
      const hoveredY = Math.floor((mouseY + (gridOffset.current.y % squareSize)) / squareSize) + Math.floor(gridOffset.current.y / squareSize);

      setHoveredSquare({ x: hoveredX, y: hoveredY });
    },
    [squareSize]
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredSquare(null);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`w-full h-full border-none block ${className}`}
    />
  );
}
