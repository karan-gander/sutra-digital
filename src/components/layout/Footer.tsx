"use client";

import React, { useState } from "react";
import { AGENCY_INFO, SERVICES_DATA } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

export function Footer() {
  const [activeLegalModal, setActiveLegalModal] = useState<"privacy" | "terms" | null>(null);
  const currentYear = 2026;

  return (
    <footer className="border-t border-[#EAE3D6] bg-[#F4EFE6] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#EAE3D6]">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#0B6B58] via-[#0E836C] to-[#E0580C] p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-[#FAF8F5] rounded-[9px] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#0B6B58]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C12 2 13.5 6.5 15.5 8C17.5 9.5 22 10 22 10C22 10 18 13.5 17 16C16 18.5 16 22 16 22C16 22 13.5 19 12 19C10.5 19 8 22 8 22C8 22 8 18.5 7 16C6 13.5 2 10 2 10C2 10 6.5 9.5 8.5 8C10.5 6.5 12 2 12 2Z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-[#1C1917] font-heritage-serif">
                  {AGENCY_INFO.name}
                </span>
                <span className="text-xs text-[#E0580C] font-semibold bg-[#FFEDE3] px-2 py-0.5 rounded">
                  {AGENCY_INFO.hindiName}
                </span>
              </div>
            </a>

            <p className="text-sm text-[#57534E] max-w-sm leading-relaxed">
              {AGENCY_INFO.shortDescription}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-[#0B6B58] mt-1 bg-[#E7F3F0] border border-[#0B6B58]/20 px-3 py-1.5 rounded-full w-fit font-bold">
              <span className="w-2 h-2 rounded-full bg-[#0B6B58] animate-pulse" />
              {/* {AGENCY_INFO.status} */}
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917] font-mono">
              Core Services
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-[#57534E]">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-[#0B6B58] transition-colors flex items-center gap-1 group font-medium"
                  >
                    {service.title}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="hover:text-[#0B6B58] transition-colors font-medium">
                  UPI &amp; Payment Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0B6B58] transition-colors font-medium">
                  Multilingual Web Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917] font-mono">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-[#57534E]">
              <li>
                <a href="#features" className="hover:text-[#0B6B58] transition-colors font-medium">
                  Features
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0B6B58] transition-colors font-medium">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#0B6B58] transition-colors font-medium">
                  Why Sutra
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#0B6B58] transition-colors font-medium">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#0B6B58] transition-colors font-medium">
                  Portfolio / Work
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#0B6B58] transition-colors font-medium">
                  Development Process
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917] font-mono">
              Get in Touch
            </span>
            <div className="flex flex-col gap-2 text-sm text-[#57534E]">
              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="hover:text-[#0B6B58] transition-colors font-medium text-[#1C1917]"
              >
                {AGENCY_INFO.email}
              </a>
              <span className="text-[#57534E] font-medium">{AGENCY_INFO.phone}</span>
              <span className="text-xs text-[#78716C] leading-relaxed">
                {AGENCY_INFO.address}
              </span>
            </div>
{/* 
            <div className="flex items-center gap-2.5 mt-3">
              GitHub
              <a
                href={AGENCY_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-[#EAE3D6] flex items-center justify-center text-[#57534E] hover:text-[#0B6B58] hover:bg-[#FAF8F5] transition-all shadow-2xs"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              Twitter / X
              <a
                href={AGENCY_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-[#EAE3D6] flex items-center justify-center text-[#57534E] hover:text-[#0B6B58] hover:bg-[#FAF8F5] transition-all shadow-2xs"
                aria-label="X / Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              LinkedIn
              <a
                href={AGENCY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-[#EAE3D6] flex items-center justify-center text-[#57534E] hover:text-[#0B6B58] hover:bg-[#FAF8F5] transition-all shadow-2xs"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>  */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {AGENCY_INFO.legalName}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveLegalModal("privacy")}
              className="hover:text-[#0B6B58] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveLegalModal("terms")}
              className="hover:text-[#0B6B58] transition-colors"
            >
              Terms of Service
            </button>
            <a
              href="#contact"
              className="text-[#0B6B58] hover:underline font-bold"
            >
              Client Portal
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={activeLegalModal === "privacy"}
        onClose={() => setActiveLegalModal(null)}
        title="Privacy Policy"
        badge="Legal Transparency"
      >
        <div className="space-y-4 text-sm text-[#57534E] leading-relaxed">
          <p>
            At {AGENCY_INFO.legalName}, we respect your confidentiality and data sovereignty. We collect only information strictly necessary to communicate, execute client development agreements, and provide technical consultations.
          </p>
          <h4 className="font-bold text-[#1C1917]">Information We Collect</h4>
          <p>
            When you complete our project consultation form, we collect your name, email address, optional phone number, and project brief. This information is utilized solely to evaluate your requirements and prepare a custom proposal.
          </p>
          <h4 className="font-bold text-[#1C1917]">Non-Disclosure &amp; Code Confidentiality</h4>
          <p>
            All client intellectual property, repository commits, design assets, and architectural documents remain 100% owned by the client under our master services agreements.
          </p>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={activeLegalModal === "terms"}
        onClose={() => setActiveLegalModal(null)}
        title="Terms of Service"
        badge="Client Agreement"
      >
        <div className="space-y-4 text-sm text-[#57534E] leading-relaxed">
          <p>
            Welcome to {AGENCY_INFO.name}. By accessing our website, booking discovery sessions, or engaging our software engineering services, you agree to these terms.
          </p>
          <h4 className="font-bold text-[#1C1917]">Engineering Deliverables</h4>
          <p>
            Deliverables are scoped via mutual statement of work (SOW) documents detailing milestones, acceptance criteria, and production deployment parameters.
          </p>
        </div>
      </Modal>
    </footer>
  );
}
