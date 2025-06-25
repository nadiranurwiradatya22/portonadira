"use client";

import type { ReactNode } from "react";
import { RevealOnScroll } from "./reveal-on-scroll";

interface StaggeredRevealProps {
  children: ReactNode[];
  staggerDelay?: number;
  animation?: "fade" | "slideUp" | "slideLeft" | "slideRight" | "scale";
  className?: string;
  triggerOnce?: boolean; // Tambahkan prop untuk kontrol
}

export function StaggeredReveal({
  children,
  staggerDelay = 100,
  animation = "slideUp",
  className = "",
  triggerOnce = false, // Default false untuk animasi berulang
}: StaggeredRevealProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <RevealOnScroll
          key={index}
          animation={animation}
          delay={index * staggerDelay}
          triggerOnce={triggerOnce}
        >
          {child}
        </RevealOnScroll>
      ))}
    </div>
  );
}
