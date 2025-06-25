"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

interface ResumeCardProps {
  logoUrl?: string;
  altText?: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  index?: number;
}

export const ResumeCard = ({
  logoUrl,
  altText = "Logo",
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  index = 0,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    if (description) {
      setIsExpanded((prev) => !prev);
    }
  };

  // PERBAIKAN: Index genap (0,2,4...) dari kiri, index ganjil (1,3,5...) dari kanan
  const animationDirection = index % 2 === 0 ? "slideRight" : "slideLeft";

  return (
    <RevealOnScroll
      animation={animationDirection}
      delay={index * 150}
      triggerOnce={false}
    >
      <div
        className="cursor-pointer px-0.5 py-1 hover:bg-neutral-900/50 rounded-lg transition-colors duration-200"
        onClick={toggleExpand}
        role={description ? "button" : undefined}
        aria-expanded={isExpanded}
        tabIndex={0}
      >
        <div className="flex gap-2 items-start">
          {/* Logo */}
          <div className="flex-none w-8 h-8 rounded-full overflow-hidden border border-neutral-700 bg-neutral-800 flex items-center justify-center">
            {logoUrl ? (
              <img
                src={logoUrl || "/placeholder.svg"}
                alt={altText}
                className="object-contain w-full h-full"
              />
            ) : (
              <span className="text-xs text-muted font-semibold">
                {altText[0]}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="flex-grow flex flex-col justify-center">
            <div className="flex items-start justify-between gap-1">
              <div className="flex items-center gap-1 flex-wrap">
                {href ? (
                  <Link
                    href={href}
                    onClick={(e) => e.stopPropagation()}
                    className="font-semibold text-xs sm:text-sm text-accent hover:underline"
                  >
                    {title}
                  </Link>
                ) : (
                  <h3 className="font-semibold text-xs sm:text-sm text-primary">
                    {title}
                  </h3>
                )}

                {badges?.map((badge, i) => (
                  <span
                    key={i}
                    className="bg-white text-black text-[9px] px-1 py-0.5 rounded font-medium"
                  >
                    {badge}
                  </span>
                ))}

                {description && (
                  <ChevronRight
                    className={`w-3 h-3 text-muted transition-transform duration-300 ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                )}
              </div>

              <div className="text-[10px] text-muted whitespace-nowrap">
                {period}
              </div>
            </div>

            {subtitle && (
              <div className="text-[10px] text-muted mt-0.5">{subtitle}</div>
            )}

            {description && (
              <div
                className={`mt-1 text-[10px] text-[#c2c2c2] leading-relaxed overflow-hidden transition-all duration-500 ${
                  isExpanded ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {description}
              </div>
            )}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};
