"use client";

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative py-20 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-br from-[#0B6B58] via-[#095747] to-[#063F33] p-10 sm:p-16 text-center text-white shadow-xl overflow-hidden"
        >
          {/* Subtle decorative motif */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E0580C]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-amber-200 border border-white/20 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>शुभ आरम्भ ✦ Begin Your Digital Transformation</span>
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6 font-heritage-serif">
              Have an Idea? Let&apos;s Build{" "}
              <span className="text-amber-200">
                Something Great Together.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-emerald-100 font-normal leading-relaxed max-w-2xl mb-10">
              Let&apos;s discuss your project and turn your ideas into meaningful digital experiences that scale across India and global markets effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-[#0B6B58] bg-white hover:bg-emerald-50 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-white border-2 border-white/30 hover:border-white hover:bg-white/10 rounded-xl transition-all flex items-center justify-center"
              >
                Explore Portfolio
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-emerald-200/90 font-mono">
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>Unilateral NDA Guaranteed &bull; 24-hour turnaround on custom technical roadmaps</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
