"use client";

import React from "react";
import { WHY_CHOOSE_US_DATA } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Sparkles,
  Globe,
  CreditCard,
  Zap,
  MessageSquare,
  ShieldCheck,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

export function WhyUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#E0580C]" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-[#0B6B58]" />;
      case "CreditCard":
        return <CreditCard className="w-5 h-5 text-[#D97706]" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-[#E0580C]" />;
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-[#0B6B58]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#0B6B58]" />;
      default:
        return <Check className="w-5 h-5 text-[#0B6B58]" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Sutra Difference"
          badgeDot
          title="Engineered for Founders Who Refuse"
          highlight="To Compromise on Quality."
          description="We discard generic templates and buggy shortcuts. Instead, we deliver bespoke craftsmanship, obsessive Core Web Vitals optimization, and complete architectural transparency."
          align="center"
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {WHY_CHOOSE_US_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="indian-card p-7 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#57534E] bg-[#F4EFE6] border border-[#EAE3D6] px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1C1917] font-heritage-serif mb-2 group-hover:text-[#0B6B58] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#57534E] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F4EFE6] flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#0B6B58]">
                  {item.highlight}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#0B6B58] opacity-60 group-hover:opacity-100 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benchmark Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#EAE3D6] shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-[#E0580C] font-bold tracking-wider uppercase">
                Technical Benchmarks
              </span>
              <h4 className="text-2xl font-bold text-[#1C1917] font-heritage-serif mt-1">
                Generic Templates vs. The Sutra Standard
              </h4>
              <p className="text-sm text-[#57534E] mt-1 max-w-xl">
                We craft from first principles: clean semantic HTML, native UPI deep-linking, and sub-400ms speeds on Indian mobile networks.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full md:w-auto">
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] text-center">
                <div className="text-xs text-[#78716C] font-mono">Lighthouse</div>
                <div className="text-xl font-bold text-[#0B6B58] font-mono mt-0.5">99/100</div>
                <div className="text-[10px] text-[#A8A29E]">Industry avg: 62</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] text-center">
                <div className="text-xs text-[#78716C] font-mono">Mobile 4G TTFB</div>
                <div className="text-xl font-bold text-[#E0580C] font-mono mt-0.5">&lt; 380ms</div>
                <div className="text-[10px] text-[#A8A29E]">Industry avg: 2.5s</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] text-center col-span-2 sm:col-span-1">
                <div className="text-xs text-[#78716C] font-mono">UPI Drop-off</div>
                <div className="text-xl font-bold text-[#0B6B58] font-mono mt-0.5">0.05%</div>
                <div className="text-[10px] text-[#A8A29E]">Instant Settlement</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
