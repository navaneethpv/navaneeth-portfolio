"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Testimonial } from "@/data/portfolioData";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="w-full px-6 py-24 md:py-32 border-t border-border">
      <div className="space-y-16">
        {/* Title */}
        <div className="space-y-4 max-w-xl">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            [ 06 / WORDS ]
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-foreground">
            Client Feedback
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bento-card space-y-6 relative"
            >
              <Icon
                icon="lucide:quote"
                className="text-muted-foreground/10 text-7xl absolute top-4 right-4 pointer-events-none"
              />
              <p className="text-base text-muted-foreground italic leading-relaxed relative z-10">
                {item.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-foreground">
                    {item.author}
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
