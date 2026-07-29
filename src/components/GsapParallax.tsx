"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface GsapParallaxProps {
  children: React.ReactNode;
  speed?: number; // Multiplier e.g. -0.3, -0.5
  scale?: number;
  rotate?: number;
  className?: string;
}

export const GsapParallax: React.FC<GsapParallaxProps> = ({
  children,
  speed = -0.3,
  scale,
  rotate,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const target = targetRef.current;

    if (!container || !target) return;

    // Calculate percentage shift relative to height for visible parallax movement
    const yShift = speed * 120; // e.g. -0.3 * 120 = -36% vertical shift

    const ctx = gsap.context(() => {
      gsap.fromTo(
        target,
        {
          yPercent: 0,
          scale: 1,
          rotate: 0,
        },
        {
          yPercent: yShift,
          scale: scale || 1,
          rotate: rotate || 0,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.2, // Fast, responsive scrub response
          },
        }
      );
    }, container);

    // Refresh ScrollTrigger to ensure accurate trigger geometry
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
    };
  }, [speed, scale, rotate]);

  return (
    <div ref={containerRef} className={`relative overflow-visible ${className}`}>
      <div ref={targetRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
};
