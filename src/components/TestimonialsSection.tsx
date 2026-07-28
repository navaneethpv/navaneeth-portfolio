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
    <section className="w-full px-6 py-32 md:py-48 max-w-7xl mx-auto border-t border-border">
      <div className="space-y-24">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-12">
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-secondary uppercase tracking-widest">
              [ 07 / WORDS ]
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight text-primary">
              Client Feedback
            </h2>
          </div>
        </div>

        {/* Testimonials List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="space-y-8 relative"
            >
              <Icon
                icon="lucide:quote"
                className="text-border text-5xl absolute -top-4 -left-4 pointer-events-none"
              />
              <p className="text-lg md:text-xl text-primary leading-relaxed relative z-10 font-sans font-light">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="w-12 h-12 rounded-full overflow-hidden grayscale-30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-primary">
                    {item.author}
                  </h4>
                  <p className="text-[10px] text-secondary font-mono uppercase tracking-widest">
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
