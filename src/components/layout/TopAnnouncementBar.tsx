"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function TopAnnouncementBar() {
  return (
    <div className="bg-[#D93829] text-white text-xs sm:text-sm font-medium py-2.5 px-4 text-center relative z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-white text-[#D93829] tracking-wider uppercase shadow-xs">
          NEW
        </span>
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-200 shrink-0" />
          <span>
            Shubh Aarambh — 20% off on all new digital builds. Pay less as you grow.
          </span>
        </span>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-amber-200 hover:text-white font-semibold underline underline-offset-2 transition-colors ml-1"
        >
          <span>Claim Offer</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
