"use client";

import React, { useState } from "react";
import { PROJECTS_DATA } from "@/lib/data";
import { Project, ProjectCategory } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Web Development",
  "Mobile Apps",
  "SEO & Growth",
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="relative py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Curated Portfolio"
          badgeDot
          title="Digital Flagships Engineered for"
          highlight="National & Global Scale."
          description="Explore benchmark digital architectures deployed across Indian fintech, D2C luxury, agriculture, and organic search engines."
          align="center"
        />

        {/* Category Filter Tabs */}
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

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="indian-card overflow-hidden flex flex-col justify-between group"
              >
                {/* Visual Mockup Container */}
                <div className="relative h-56 w-full bg-[#F4EFE6] border-b border-[#EAE3D6] overflow-hidden p-4 flex items-center justify-center">
                  {/* Browser Mockup */}
                  {project.mockupType === "browser" && (
                    <div className="w-full max-w-[92%] h-40 rounded-xl bg-white border border-[#EAE3D6] shadow-md overflow-hidden flex flex-col">
                      <div className="h-6 bg-[#FAF8F5] border-b border-[#EAE3D6] px-3 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-400" />
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="ml-2 text-[9px] font-mono text-[#78716C] truncate">
                          https://{project.slug}.in
                        </span>
                      </div>
                      <div className="p-3 flex-1 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#0B6B58]">
                            {project.title}
                          </span>
                          <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#E7F3F0] text-[#0B6B58]">
                            99/100
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 my-auto">
                          <div className="h-8 rounded bg-[#FAF8F5] border border-[#EAE3D6] flex items-center justify-center text-[10px] text-[#292524] font-mono font-bold">
                            Sub-400ms
                          </div>
                          <div className="h-8 rounded bg-[#FAF8F5] border border-[#EAE3D6] flex items-center justify-center text-[10px] text-[#292524] font-mono font-bold">
                            UPI Ready
                          </div>
                          <div className="h-8 rounded bg-[#FAF8F5] border border-[#EAE3D6] flex items-center justify-center text-[10px] text-[#292524] font-mono font-bold">
                            Edge Prerender
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile App Mockup */}
                  {project.mockupType === "mobile" && (
                    <div className="w-40 h-44 rounded-2xl bg-white border-2 border-[#D8CEBD] shadow-lg p-2.5 flex flex-col justify-between relative overflow-hidden">
                      <div className="w-16 h-2 bg-[#1C1917] rounded-full mx-auto mb-2" />
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[9px] font-mono text-[#78716C]">
                          <span className="font-bold text-[#1C1917]">{project.title}</span>
                          <span className="text-[#0B6B58] font-bold">60 FPS</span>
                        </div>
                        <div className="h-10 rounded-lg bg-[#E7F3F0] border border-[#0B6B58]/20 p-1 flex items-center justify-between px-2 text-[9px] font-mono text-[#0B6B58]">
                          <span>UPI Balance</span>
                          <span className="font-bold">₹84,250.00</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1 text-[8px] text-[#57534E] font-mono">
                          <div className="p-1 rounded bg-[#FAF8F5] text-center">Biometrics</div>
                          <div className="p-1 rounded bg-[#FAF8F5] text-center">Offline DB</div>
                        </div>
                      </div>
                      <div className="w-12 h-1 bg-[#D8CEBD] rounded-full mx-auto mt-2" />
                    </div>
                  )}

                  {/* Analytics Console Mockup */}
                  {project.mockupType === "analytics" && (
                    <div className="w-full max-w-[92%] h-40 rounded-xl bg-white border border-[#EAE3D6] shadow-md p-3 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-[#0B6B58] font-bold flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" /> Bharat SERP Surge
                        </span>
                        <span className="text-[#E0580C] font-bold">+460% Organic</span>
                      </div>
                      <div className="flex items-end gap-1.5 h-16 w-full pt-2">
                        {[30, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((height, hIdx) => (
                          <div
                            key={hIdx}
                            style={{ height: `${height}%` }}
                            className="flex-1 rounded-t bg-gradient-to-t from-[#0B6B58] to-[#0E836C]"
                          />
                        ))}
                      </div>
                      <div className="flex justify-between text-[8px] font-mono text-[#78716C]">
                        <span>Month 1</span>
                        <span>Month 3</span>
                        <span>Month 6 (Page 1)</span>
                      </div>
                    </div>
                  )}

                  {/* Demo Indicator Tag */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-mono bg-white text-[#57534E] border border-[#EAE3D6] shadow-2xs">
                    Demo Project
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#0B6B58]">
                        {project.category}
                      </span>
                      <span className="text-xs text-[#78716C] font-mono">
                        {project.client}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1C1917] font-heritage-serif mb-2 group-hover:text-[#0B6B58] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#57534E] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#F4EFE6] border border-[#EAE3D6] text-[#57534E]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-[#F4EFE6] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs sm:text-sm font-bold text-[#0B6B58] hover:text-[#085546] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <span className="text-[11px] font-mono font-bold text-[#0B6B58]">
                      {project.metrics[0].value} {project.metrics[0].label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          badge={`${selectedProject.category} — ${selectedProject.client}`}
          maxWidth="xl"
        >
          <div className="space-y-6 text-[#1C1917]">
            <p className="text-base text-[#57534E] leading-relaxed">
              {selectedProject.fullOverview}
            </p>

            {/* Impact Metrics Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6]">
              {selectedProject.metrics.map((metric, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-2xl font-bold font-mono text-[#0B6B58]">
                    {metric.value}
                  </div>
                  <div className="text-xs text-[#78716C] font-mono mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#E0580C] font-mono mb-1">
                  The Engineering Challenge:
                </h4>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B6B58] font-mono mb-1">
                  The Sutra Solution:
                </h4>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#78716C] font-mono mb-2">
                Technologies Utilized:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono font-medium px-3 py-1 rounded bg-[#FAF8F5] border border-[#EAE3D6] text-[#57534E]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Modal Callout */}
            <div className="pt-4 border-t border-[#EAE3D6] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#78716C]">
                Demo showcase designed to reflect real-world technical scope.
              </span>
              <Button
                asAnchor
                href="#contact"
                variant="primary"
                size="sm"
                onClick={() => setSelectedProject(null)}
              >
                Discuss a Similar Project
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
