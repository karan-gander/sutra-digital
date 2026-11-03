"use client";

import React from "react";
import { STATS_METRICS } from "@/lib/data";
import { motion } from "framer-motion";

export function StatsRibbon() {
  return (
    <div className="border-y border-[#EAE3D6] bg-[#F7F3EB] py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {STATS_METRICS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] font-heritage-serif tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-mono font-bold text-[#0B6B58] uppercase">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-sm font-bold text-[#292524] mt-1 font-sans">
                {stat.label}
              </div>
              <div className="text-xs text-[#78716C] mt-0.5">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
