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
      <div className="px-5 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12 border-b border-border">
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl 2xl:text-[10rem] font-heading font-bold uppercase tracking-tighter text-primary">
          Testimonials
        </h2>
      </div>

      {/* Testimonials List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 lg:divide-x divide-border">
        {testimonials.map((item, idx) => (
          <div key={idx} className="px-5 sm:px-8 md:px-12 lg:px-14 py-8 md:py-12 space-y-8 flex flex-col justify-between">
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
