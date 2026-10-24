"use client";

import React, { useEffect, useState, useRef } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center" | "random";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "hover" | "view";
}

export function DecryptedText({
  text,
  speed = 45,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
  className = "",
  parentClassName = "",
  encryptedClassName = "text-brand/60 font-mono",
  animateOn = "view",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const availableChars = useOriginalCharsOnly
    ? Array.from(new Set(text.split(""))).filter((char) => char !== " ")
    : characters.split("");

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let iteration = 0;

    const getScrambledText = (revealedIndices: Set<number>) => {
      return text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (revealedIndices.has(index)) return text[index];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join("");
    };

    const startAnimation = () => {
      const revealedIndices = new Set<number>();

      if (sequential) {
        let currentIndex = 0;
        if (revealDirection === "end") {
          currentIndex = text.length - 1;
        } else if (revealDirection === "center") {
          currentIndex = Math.floor(text.length / 2);
        }

        interval = setInterval(() => {
          setDisplayText(() => {
            const nextRevealed = new Set(revealedIndices);

            if (revealDirection === "start") {
              nextRevealed.add(currentIndex);
              currentIndex++;
              if (currentIndex > text.length) clearInterval(interval);
            } else if (revealDirection === "end") {
              nextRevealed.add(currentIndex);
              currentIndex--;
              if (currentIndex < 0) clearInterval(interval);
            } else if (revealDirection === "center") {
              nextRevealed.add(currentIndex);
              const offset = Math.floor(nextRevealed.size / 2);
              currentIndex =
                nextRevealed.size % 2 === 0
                  ? Math.floor(text.length / 2) + offset + 1
                  : Math.floor(text.length / 2) - offset - 1;
              if (nextRevealed.size >= text.length) clearInterval(interval);
            } else {
              const unrevealed = text
                .split("")
                .map((_, i) => i)
                .filter((i) => !nextRevealed.has(i) && text[i] !== " ");
              if (unrevealed.length > 0) {
                const randIdx = unrevealed[Math.floor(Math.random() * unrevealed.length)];
                nextRevealed.add(randIdx);
              } else {
                clearInterval(interval);
              }
            }

            return getScrambledText(nextRevealed);
          });
        }, speed);
      } else {
        interval = setInterval(() => {
          setDisplayText(getScrambledText(new Set()));
          iteration++;
          if (iteration >= maxIterations) {
            clearInterval(interval);
            setDisplayText(text);
          }
        }, speed);
      }
    };

    if (animateOn === "hover" && isHovering) {
      startAnimation();
    } else if (animateOn === "view" && hasAnimated) {
      startAnimation();
    } else {
      setDisplayText(text);
    }

    return () => clearInterval(interval);
  }, [isHovering, hasAnimated, text, speed, maxIterations, sequential, revealDirection]);

  useEffect(() => {
    if (animateOn !== "view") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animateOn]);

  return (
    <span
      ref={containerRef}
      className={`inline-block ${parentClassName}`}
      onMouseEnter={() => animateOn === "hover" && setIsHovering(true)}
      onMouseLeave={() => animateOn === "hover" && setIsHovering(false)}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {displayText.split("").map((char, index) => {
          const isResolved = char === text[index] || char === " ";
          return (
            <span
              key={index}
              className={isResolved ? className : encryptedClassName}
            >
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
}
