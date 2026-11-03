"use client";

import React, { useState } from "react";
import { SERVICES_DATA } from "@/lib/data";
import { ServiceItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import {
  TrendingUp,
  Globe,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-[#E0580C]" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-[#0B6B58]" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-[#D97706]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#0B6B58]" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Core Specializations"
          badgeDot
          title="Digital Solutions Crafted for"
          highlight="Bharat & Global Scale."
          description="We blend timeless Indian dedication with cutting-edge software engineering to build sustainable, compounding digital advantages for your enterprise."
          align="center"
        />

        {/* 3 Core Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="indian-card p-7 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#57534E] bg-[#F4EFE6] border border-[#EAE3D6] px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold text-[#1C1917] font-heritage-serif mb-1 group-hover:text-[#0B6B58] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-[#E0580C] mb-3">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-[#57534E] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-8 pt-4 border-t border-[#F4EFE6]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#78716C] block mb-2 font-mono">
                    Key Offerings:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#292524]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0B6B58] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Metrics & Button */}
              <div className="pt-5 border-t border-[#F4EFE6]">
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {service.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-2 rounded-lg bg-[#FAF8F5] border border-[#EAE3D6] text-center"
                    >
                      <div className="text-xs font-extrabold text-[#0B6B58] font-mono">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-[#78716C] truncate mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#0B6B58] bg-[#E7F3F0] hover:bg-[#0B6B58] hover:text-white border border-[#0B6B58]/20 transition-all duration-200 group/btn cursor-pointer"
                >
                  <span>Learn More &amp; Specifications</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
          badge={selectedService.badge}
          maxWidth="lg"
        >
          <div className="space-y-6 text-[#1C1917]">
            <p className="text-base text-[#57534E] leading-relaxed">
              {selectedService.detailedOverview}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#78716C] font-mono mb-3">
                Complete Scope of Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] flex items-center gap-2.5 text-xs text-[#292524]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0B6B58] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#78716C] font-mono mb-2">
                Tech Stack &amp; Diagnostic Tooling:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono font-medium px-3 py-1 rounded-md bg-[#FAF8F5] border border-[#EAE3D6] text-[#57534E]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#E7F3F0] border border-[#0B6B58]/25 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#0B6B58]" />
                <div className="text-xs">
                  <div className="font-bold text-[#0B6B58]">
                    Ready to launch this service?
                  </div>
                  <div className="text-[#57534E]">
                    Get a custom roadmap and proposal within 24 hours.
                  </div>
                </div>
              </div>
              <Button
                asAnchor
                href="#contact"
                variant="primary"
                size="sm"
                onClick={() => setSelectedService(null)}
              >
                Request Proposal
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
