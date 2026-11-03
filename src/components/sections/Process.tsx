"use client";

import React, { useState } from "react";
import { PROCESS_STEPS_DATA } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Compass,
  FileCode2,
  Palette,
  Terminal,
  Rocket,
  Activity,
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-5 h-5 text-[#0B6B58]" />;
      case "FileCode2":
        return <FileCode2 className="w-5 h-5 text-[#E0580C]" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-[#D97706]" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-[#0B6B58]" />;
      case "Rocket":
        return <Rocket className="w-5 h-5 text-[#E0580C]" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-[#0B6B58]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#0B6B58]" />;
    }
  };

  return (
    <section id="process" className="relative py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Agile Engineering Lifecycle"
          badgeDot
          title="From Sankalp to"
          highlight="National & Global Scale."
          description="Our proven six-stage framework eliminates ambiguity, guarantees predictability, and ensures every milestone meets our elite standard."
          align="center"
        />

        {/* Step Navigation Bar for Desktop */}
        <div className="hidden lg:grid grid-cols-6 gap-2 mb-10 p-1.5 rounded-2xl bg-white border border-[#EAE3D6] shadow-2xs">
          {PROCESS_STEPS_DATA.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-xl text-left transition-all duration-200 flex flex-col gap-1 cursor-pointer ${
                activeStep === idx
                  ? "bg-[#0B6B58] text-white shadow-sm"
                  : "hover:bg-[#F4EFE6] text-[#57534E] hover:text-[#1C1917]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold">{step.number}</span>
                <span className="text-[10px] font-mono opacity-80">{step.timeline}</span>
              </div>
              <span className="text-xs font-bold truncate mt-1">
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Showcase (Desktop) */}
        <div className="hidden lg:block mb-14">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="indian-card p-8 sm:p-10 border border-[#0B6B58]/30 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E7F3F0] border border-[#0B6B58]/20 flex items-center justify-center">
                    {getStepIcon(PROCESS_STEPS_DATA[activeStep].icon)}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#0B6B58] font-bold uppercase tracking-wider">
                      Phase {PROCESS_STEPS_DATA[activeStep].number} — {PROCESS_STEPS_DATA[activeStep].timeline}
                    </span>
                    <h3 className="text-2xl font-bold text-[#1C1917] font-heritage-serif">
                      {PROCESS_STEPS_DATA[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm font-semibold text-[#0B6B58] mb-2">
                  {PROCESS_STEPS_DATA[activeStep].subtitle}
                </p>

                <p className="text-sm text-[#57534E] leading-relaxed">
                  {PROCESS_STEPS_DATA[activeStep].description}
                </p>
              </div>

              {/* Deliverables Box */}
              <div className="w-full md:w-80 p-5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] shrink-0">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#78716C] uppercase tracking-wider mb-3">
                  <CheckCircle className="w-4 h-4 text-[#0B6B58]" />
                  <span>Phase Deliverables:</span>
                </div>
                <div className="space-y-2">
                  {PROCESS_STEPS_DATA[activeStep].deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="text-xs text-[#292524] flex items-start gap-2"
                    >
                      <span className="text-[#0B6B58] font-mono shrink-0">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vertical Timeline Cards */}
        <div className="relative space-y-6">
          <div className="absolute top-8 bottom-8 left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-[#EAE3D6] hidden sm:block" />

          {PROCESS_STEPS_DATA.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-12 ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="w-full sm:w-[calc(50%-2rem)] indian-card p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#0B6B58]">
                      STEP {step.number}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-[#78716C] bg-[#F4EFE6] border border-[#EAE3D6] px-2.5 py-0.5 rounded-full">
                      <Clock className="w-3 h-3 text-[#78716C]" />
                      {step.timeline}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#1C1917] font-heritage-serif mb-1">
                    {step.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#0B6B58] mb-2">
                    {step.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="pt-3 border-t border-[#F4EFE6] space-y-1.5">
                    {step.deliverables.slice(0, 2).map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="text-[11px] text-[#292524] flex items-center gap-2"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#0B6B58] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline Center Node */}
                <div className="hidden sm:flex z-10 w-10 h-10 rounded-full bg-white border-2 border-[#0B6B58] shadow-sm items-center justify-center shrink-0">
                  {getStepIcon(step.icon)}
                </div>

                <div className="hidden sm:block w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
