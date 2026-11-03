"use client";

import React, { useState } from "react";
import { TESTIMONIALS_DATA } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length
    );
  };

  return (
    <section id="testimonials" className="relative py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Client Endorsements"
          badgeDot
          title="Endorsed by India's Top"
          highlight="Founders & Engineering Leaders."
          description="Read how our technical standards, design precision, and growth strategies transformed key digital metrics for our partners."
          align="center"
        />

        {/* Demo Notice */}
        <div className="max-w-md mx-auto mb-8 p-2 rounded-xl bg-white border border-[#EAE3D6] text-center text-xs font-mono text-[#78716C]">
          ✦ Note: Demo testimonials curated for preview before actual client reviews.
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative indian-card p-8 sm:p-12 overflow-hidden">
            <Quote className="absolute top-6 right-8 w-16 h-16 text-[#FAF8F5] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 relative z-10"
              >
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-500 fill-amber-400"
                    />
                  ))}
                  {TESTIMONIALS_DATA[currentIndex].stats && (
                    <span className="ml-3 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#E7F3F0] text-[#0B6B58] border border-[#0B6B58]/20">
                      {TESTIMONIALS_DATA[currentIndex].stats}
                    </span>
                  )}
                </div>

                {/* Quote Text */}
                <blockquote className="text-xl sm:text-2xl font-bold text-[#1C1917] font-heritage-serif leading-relaxed">
                  &ldquo;{TESTIMONIALS_DATA[currentIndex].quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="pt-6 border-t border-[#F4EFE6] flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0B6B58] via-[#E0580C] to-[#D97706] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                      {TESTIMONIALS_DATA[currentIndex].avatarText}
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#1C1917] flex items-center gap-1.5">
                        {TESTIMONIALS_DATA[currentIndex].author}
                        <CheckCircle2 className="w-4 h-4 text-[#0B6B58]" />
                      </div>
                      <div className="text-xs text-[#78716C] font-mono">
                        {TESTIMONIALS_DATA[currentIndex].role} &middot;{" "}
                        <span className="text-[#0B6B58] font-bold">
                          {TESTIMONIALS_DATA[currentIndex].company}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2.5 rounded-xl bg-white border border-[#EAE3D6] hover:bg-[#F4EFE6] text-[#57534E] hover:text-[#0B6B58] transition-all cursor-pointer shadow-2xs"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2.5 rounded-xl bg-white border border-[#EAE3D6] hover:bg-[#F4EFE6] text-[#57534E] hover:text-[#0B6B58] transition-all cursor-pointer shadow-2xs"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 bg-[#0B6B58]"
                    : "w-2 bg-[#D8CEBD] hover:bg-[#A8A29E]"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
