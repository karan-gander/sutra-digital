"use client";

import React from "react";
import {
  ArrowRight,
  Star,
  Sparkles,
  TrendingUp,
  FileCode,
  Smartphone,
  Globe2,
  CheckCircle2,
  Trophy,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-[#FAF8F5] overflow-hidden bg-mandala-pattern">
      {/* Background traditional accent glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-b from-[#E7F3F0] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Header (Inspired by the Reference Image Layout) */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Traditional Welcome / Shubh Aarambh Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FFEDE3] text-[#E0580C] border border-[#FDBA74]/40 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E0580C]" />
              <span>शुभ आरम्भ ✦ Crafting India&apos;s Digital Giants</span>
            </span>
          </motion.div>

          {/* Majestic Serif Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1C1917] tracking-tight leading-[1.12] mb-6 font-heritage-serif"
          >
            Go from zero to building India&apos;s next digital giant{" "}
            <span className="text-[#0B6B58] inline-block font-sans">₹</span>
            <span className="text-[#E0580C] inline-block font-sans">!</span>
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#57534E] max-w-2xl leading-relaxed mb-8"
          >
            With Sutra Digital, build your digital enterprise with timeless Indian craftsmanship and Silicon Valley engineering. Just start with what knowledge or vision you have to offer, test the waters, and watch as your digital empire begins rolling in. It truly is a win-win partnership!
          </motion.p>

          {/* Primary CTA Button (Matching the Reference Image's Large Teal/Emerald Button) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 text-base sm:text-lg font-bold text-white bg-[#0B6B58] hover:bg-[#085546] rounded-xl shadow-[0_10px_25px_-5px_rgba(11,107,88,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(11,107,88,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>START YOUR PROJECT NOW!</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Rating & Social Proof (Matching the 5 stars and partner badges in the screenshot) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#57534E]">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-[#1C1917]">2,500+ reviews</span>
              <span className="text-[#A8A29E]">&middot;</span>
              <span>Trusted by 750,000+ founders across Bharat &amp; Global Hubs</span>
            </div>

            {/* Badges (Google & Microsoft style, infused with Indian excellence) */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
              {/* Google Partner Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#EAE3D6] shadow-2xs">
                <Award className="w-4 h-4 text-blue-600" />
                <div className="text-left text-[11px] leading-tight">
                  <div className="text-[#78716C] text-[9px] font-medium uppercase tracking-wider">Google Cloud</div>
                  <div className="font-bold text-[#1C1917]">Premier Partner</div>
                </div>
              </div>

              {/* NASSCOM Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#EAE3D6] shadow-2xs">
                <Trophy className="w-4 h-4 text-amber-600" />
                <div className="text-left text-[11px] leading-tight">
                  <div className="text-[#78716C] text-[9px] font-medium uppercase tracking-wider">NASSCOM Tech</div>
                  <div className="font-bold text-[#1C1917]">Innovation Winner</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Creative Visual Composition (Matching the left and right characters/cards from screenshot) */}
        <div className="relative mt-8 sm:mt-12 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Floating Interactive Card: Sales, Graph, Currency Coin */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#EAE3D6] shadow-[0_12px_40px_-10px_rgba(28,25,23,0.08)] flex flex-col justify-between"
            >
              {/* Floating Rupee Coin Badge (Like the green $ coin in screenshot) */}
              <div className="absolute -top-4 -left-3 w-10 h-10 rounded-full bg-[#E7F3F0] border-2 border-[#0B6B58] text-[#0B6B58] font-bold font-sans flex items-center justify-center shadow-md animate-traditional-float text-lg">
                ₹
              </div>

              {/* Header with Avatar Illustration & Sales Counter */}
              <div className="flex items-center justify-between mb-5 pl-4">
                <div className="flex items-center gap-3">
                  {/* Stylized Traditional Motif Avatar (Inspired by illustration in screenshot) */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0B6B58] via-[#E0580C] to-[#F59E0B] p-[2px] shadow-sm">
                    <div className="w-full h-full bg-[#FAF8F5] rounded-full flex items-center justify-center text-sm font-bold text-[#0B6B58]">
                      SD
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-mono font-medium text-[#78716C] uppercase">
                      Client Growth Metrics
                    </div>
                    <div className="text-base font-bold text-[#1C1917]">
                      450+ Active Deployments
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-[#78716C] font-mono">Revenue Scaled</div>
                  <div className="text-lg font-extrabold text-[#0B6B58]">
                    ₹42.8 Lakh+
                  </div>
                </div>
              </div>

              {/* Financial Telemetry Line & Bar Graph (Matching the graph card in screenshot) */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6]/70">
                <div className="flex items-center justify-between text-xs text-[#78716C] mb-2 font-mono">
                  <span>Growth Velocity (LTM)</span>
                  <span className="text-[#0B6B58] font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +380%
                  </span>
                </div>

                {/* Simulated Chart Bars and Line */}
                <div className="flex items-end gap-2.5 h-20 pt-3">
                  {[25, 40, 35, 60, 50, 75, 70, 92, 85, 100].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        style={{ height: `${val}%` }}
                        className="w-full rounded-t bg-gradient-to-t from-[#0B6B58] to-[#0E836C] opacity-85 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-[#A8A29E] font-mono mt-2 pt-1 border-t border-[#EAE3D6]">
                  <span>Q1 Launch</span>
                  <span>Q2 Scale</span>
                  <span>Q3 Bharat Peak</span>
                  <span>Q4 Global</span>
                </div>
              </div>
            </motion.div>

            {/* Right Floating Interactive Card: Digital Product & Progress Milestone */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#EAE3D6] shadow-[0_12px_40px_-10px_rgba(28,25,23,0.08)] flex flex-col justify-between"
            >
              {/* Floating Dollar Coin Badge */}
              <div className="absolute -top-4 -right-3 w-10 h-10 rounded-full bg-[#E7F3F0] border-2 border-[#0B6B58] text-[#0B6B58] font-bold font-sans flex items-center justify-center shadow-md animate-traditional-float text-lg">
                $
              </div>

              {/* Product Card Row (Matching the "UI Design Book Alex - $40" card in screenshot) */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E0580C] to-[#D97706] text-white flex items-center justify-center shadow-xs">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-[#E0580C]">
                      Enterprise Mobile Suite
                    </div>
                    <div className="text-sm font-bold text-[#1C1917]">
                      Unified Android &amp; iOS App
                    </div>
                    <div className="text-[11px] text-[#78716C]">
                      Full UPI 2.0 &amp; Biometric Auth
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#E7F3F0] text-[#0B6B58] font-mono">
                    ₹45,000
                  </span>
                </div>
              </div>

              {/* Milestone Progress Bar (Matching the earnings progress in screenshot) */}
              <div className="p-4 rounded-xl bg-white border border-[#EAE3D6]">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#57534E] font-medium">Sprint Milestones</span>
                  <span className="text-[#0B6B58] font-bold">94% Delivered</span>
                </div>
                <div className="w-full h-2.5 bg-[#F4EFE6] rounded-full overflow-hidden mb-2">
                  <div className="w-[94%] h-full bg-[#0B6B58] rounded-full" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#78716C]">
                  <span className="flex items-center gap-1 text-[#0B6B58]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Next.js 16 Edge Prerendering
                  </span>
                  <span className="font-mono font-semibold text-[#1C1917]">60 FPS Fluid</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4 Feature Columns Row (Exactly as in the reference image bottom section!) */}
        <div id="features" className="mt-20 pt-16 border-t border-[#EAE3D6]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Create Website */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#EAE3D6] flex items-center justify-center text-[#1C1917] mb-4 shadow-2xs">
                <FileCode className="w-6 h-6 text-[#0B6B58]" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#FFEDE3] text-[#D93829]">
                  NEW
                </span>
                <h3 className="text-base font-bold text-[#1C1917]">
                  Create website
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                With our Next.js architecture, create a complete digital storefront and express your brand with custom designs, Indian cultural motifs, and sub-400ms speed.
              </p>
            </motion.div>

            {/* Column 2: Sell Multiple Versions / Multi-Platform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#EAE3D6] flex items-center justify-center text-[#1C1917] mb-4 shadow-2xs">
                <Smartphone className="w-6 h-6 text-[#0B6B58]" />
              </div>
              <h3 className="text-base font-bold text-[#1C1917] mb-2">
                Sell multiple versions
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Give buyers the power of choice with web, native Android APK, iOS, and PWA apps - plus offline-first sync and instant UPI deep-linking for high retention.
              </p>
            </motion.div>

            {/* Column 3: Grow Your Audience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#EAE3D6] flex items-center justify-center text-[#1C1917] mb-4 shadow-2xs">
                <TrendingUp className="w-6 h-6 text-[#0B6B58]" />
              </div>
              <h3 className="text-base font-bold text-[#1C1917] mb-2">
                Grow your audience
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Keep your customers in the loop with programmatic technical SEO, vernacular Hindi &amp; regional search visibility, and automated high-converting funnels.
              </p>
            </motion.div>

            {/* Column 4: Say ₹ $ € to Different Currencies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#EAE3D6] flex items-center justify-center text-[#1C1917] mb-4 shadow-2xs">
                <Globe2 className="w-6 h-6 text-[#0B6B58]" />
              </div>
              <h3 className="text-base font-bold text-[#1C1917] mb-2">
                Say ₹ $ € to currencies
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Expand your customer base and unlock new markets - start taking instant UPI, RuPay, Razorpay, Stripe, and global payments effortlessly today.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
