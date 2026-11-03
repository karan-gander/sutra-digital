"use client";

import React, { useState } from "react";
import { TECH_STACK_DATA } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Server, Smartphone, Search } from "lucide-react";

type CategoryFilter = "All" | "Frontend" | "Backend & Cloud" | "Mobile" | "SEO & Analytics";

const CATEGORIES: CategoryFilter[] = [
  "All",
  "Frontend",
  "Backend & Cloud",
  "Mobile",
  "SEO & Analytics",
];

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const filteredTech = TECH_STACK_DATA.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Code className="w-4 h-4 text-[#0B6B58]" />;
      case "Backend & Cloud":
        return <Server className="w-4 h-4 text-[#E0580C]" />;
      case "Mobile":
        return <Smartphone className="w-4 h-4 text-[#D97706]" />;
      case "SEO & Analytics":
        return <Search className="w-4 h-4 text-[#0B6B58]" />;
      default:
        return <Code className="w-4 h-4 text-[#0B6B58]" />;
    }
  };

  return (
    <section id="expertise" className="relative py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technological Mastery"
          badgeDot
          title="Battle-Tested Toolchains &"
          highlight="Next-Gen Architecture."
          description="Every component of our engineering stack is chosen to deliver peak speed, developer velocity, and bulletproof security across Indian and global clouds."
          align="center"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                activeCategory === category
                  ? "bg-[#0B6B58] text-white shadow-sm"
                  : "bg-white text-[#57534E] hover:text-[#0B6B58] hover:bg-[#F4EFE6] border border-[#EAE3D6]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          <AnimatePresence>
            {filteredTech.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="indian-card p-5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-[#FAF8F5] border border-[#EAE3D6]">
                      {getCategoryIcon(tech.category)}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#E7F3F0] text-[#0B6B58] border border-[#0B6B58]/20">
                      {tech.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1C1917] group-hover:text-[#0B6B58] transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-[#57534E] mt-1 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F4EFE6] text-[11px] font-mono text-[#78716C]">
                  {tech.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
