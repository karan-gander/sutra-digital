"use client";

import React, { useState, useEffect } from "react";
import { AGENCY_INFO } from "@/lib/data";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Features", href: "#features" },
  { name: "Services", href: "#services" },
  { name: "Why Sutra", href: "#why-us" },
  { name: "Portfolio", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Reviews", href: "#testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#EAE3D6] shadow-[0_4px_25px_rgba(28,25,23,0.06)] py-3.5"
          : "bg-[#FCFAF7] border-b border-[#EFE9DF] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Indian Lotus / Peacock Crest */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label={`${AGENCY_INFO.name} Home`}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B6B58] via-[#0E836C] to-[#E0580C] p-[1.5px] shadow-sm group-hover:shadow-md transition-all">
              <div className="w-full h-full bg-[#FAF8F5] rounded-[10px] flex items-center justify-center">
                {/* Traditional Lotus / Diya Motif */}
                <svg
                  className="w-5 h-5 text-[#0B6B58] group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C12 2 13.5 6.5 15.5 8C17.5 9.5 22 10 22 10C22 10 18 13.5 17 16C16 18.5 16 22 16 22C16 22 13.5 19 12 19C10.5 19 8 22 8 22C8 22 8 18.5 7 16C6 13.5 2 10 2 10C2 10 6.5 9.5 8.5 8C10.5 6.5 12 2 12 2Z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-[#1C1917] font-heritage-serif">
                  {AGENCY_INFO.name}
                </span>
                <span className="text-[11px] font-medium text-[#E0580C] bg-[#FFEDE3] px-1.5 py-0.2 rounded font-sans">
                  डिजिटल
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase text-[#78716C] font-mono">
                Indian Digital Agency
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-[#57534E] hover:text-[#0B6B58] hover:bg-[#F4EFE6] rounded-lg transition-all duration-150 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs: Outline SIGN IN + Solid START SELLING / PROJECT */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-semibold text-[#0B6B58] border-2 border-[#0B6B58] rounded-xl hover:bg-[#E7F3F0] transition-colors"
            >
              SIGN IN
            </a>
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-semibold text-white bg-[#0B6B58] hover:bg-[#085546] rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-1.5"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#0B6B58] rounded-lg"
            >
              START
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-[#EAE3D6] text-[#57534E] hover:text-[#0B6B58] transition-colors focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#D93829]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] bg-[#FFFDF9] border-b border-[#EAE3D6] shadow-xl lg:hidden max-h-[calc(100vh-65px)] overflow-y-auto px-6 py-6 z-50"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#78716C] mb-1 font-mono">
                Menu
              </span>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 text-base font-medium text-[#1C1917] hover:text-[#0B6B58] border-b border-[#F4EFE6] transition-colors"
                >
                  {link.name}
                  <ArrowUpRight className="w-4 h-4 text-[#78716C]" />
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-3 text-sm font-bold text-white bg-[#0B6B58] hover:bg-[#085546] rounded-xl shadow-sm flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>START YOUR PROJECT NOW</span>
                </a>
                <div className="p-3.5 rounded-xl bg-[#F4EFE6] border border-[#EAE3D6] text-xs text-[#57534E] flex flex-col gap-1">
                  <div className="text-[#0B6B58] font-bold">
                    ✦ Shubh Aarambh — 20% Off This Season
                  </div>
                  <div>Email: {AGENCY_INFO.email}</div>
                  <div>Phone: {AGENCY_INFO.phone}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
