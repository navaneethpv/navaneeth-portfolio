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
    <section className="w-full border-b border-border">
      {/* Title */}
      <div className="p-8 md:p-12 border-b border-border">
        <h2 className="text-6xl md:text-9xl font-heading font-bold uppercase tracking-tighter text-primary">
          Testimonial
        </h2>
      </div>

      {/* Testimonials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        {testimonials.map((item, idx) => (
          <div key={idx} className="p-8 md:p-12 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <Icon icon="lucide:quote" className="text-border text-4xl" />
              <p className="text-sm md:text-base text-secondary leading-relaxed font-sans">
                &quot;{item.quote}&quot;
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4 pt-8 border-t border-border">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary shadow-xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.avatar} alt={item.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-heading text-xl uppercase font-bold text-primary">
                  {item.author}
                </h4>
                <p className="text-[10px] text-secondary font-mono uppercase tracking-widest mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
