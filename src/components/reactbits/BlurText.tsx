"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, type TargetAndTransition, type Transition } from "framer-motion";

interface BlurTextProps {
  text?: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: TargetAndTransition;
  animationTo?: TargetAndTransition;
  easing?: (t: number) => number;
  stepDuration?: number;
  onAnimationComplete?: () => void;
  className?: string;
}

export function BlurText({
  text = "",
  delay = 50,
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing,
  stepDuration = 0.35,
  onAnimationComplete,
  className = "",
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const getDefaultFrom = (): TargetAndTransition => {
    switch (direction) {
      case "top":
        return { filter: "blur(12px)", opacity: 0, y: -24 };
      case "bottom":
        return { filter: "blur(12px)", opacity: 0, y: 24 };
      case "left":
        return { filter: "blur(12px)", opacity: 0, x: -24 };
      case "right":
        return { filter: "blur(12px)", opacity: 0, x: 24 };
      default:
        return { filter: "blur(12px)", opacity: 0, y: -24 };
    }
  };

  const defaultTo: TargetAndTransition = {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    x: 0,
  };

  const initialProps = animationFrom || getDefaultFrom();
  const animateProps = inView ? (animationTo || defaultTo) : initialProps;

  return (
    <h1 ref={ref} className={`flex flex-wrap ${className}`}>
      {elements.map((element, index) => {
        const itemTransition: Transition = {
          duration: stepDuration,
          delay: (index * delay) / 1000,
          ease: easing || [0.25, 0.1, 0.25, 1],
        };

        return (
          <motion.span
            key={index}
            initial={initialProps}
            animate={animateProps}
            transition={itemTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
            style={{
              display: "inline-block",
              willChange: "transform, filter, opacity",
            }}
          >
            {element === " " ? "\u00A0" : element}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </h1>
  );
}
