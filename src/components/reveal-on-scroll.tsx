"use client";

import type { ReactNode } from "react";
import { useIntersectionObserver } from "@/app/hooks/use-intersection-observer";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: "fade" | "slideUp" | "slideLeft" | "slideRight" | "scale";
  delay?: number;
  duration?: number;
  triggerOnce?: boolean; // Tambahkan prop untuk kontrol
}

export function RevealOnScroll({
  children,
  className = "",
  animation = "fade",
  delay = 0,
  duration = 600,
  triggerOnce = false, // Default false untuk animasi berulang
}: RevealOnScrollProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce,
  });

  const getAnimationClass = () => {
    const baseClass = "transition-all ease-out";
    const durationClass = `duration-[${duration}ms]`;
    const delayClass = delay > 0 ? `delay-[${delay}ms]` : "";

    if (!isVisible) {
      switch (animation) {
        case "fade":
          return `${baseClass} ${durationClass} ${delayClass} opacity-0`;
        case "slideUp":
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 translate-y-8`;
        case "slideLeft":
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 -translate-x-8`;
        case "slideRight":
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 translate-x-8`;
        case "scale":
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 scale-95`;
        default:
          return `${baseClass} ${durationClass} ${delayClass} opacity-0`;
      }
    } else {
      return `${baseClass} ${durationClass} ${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }
  };

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
}
