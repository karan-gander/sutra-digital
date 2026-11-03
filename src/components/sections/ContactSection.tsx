"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AGENCY_INFO } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { submitContactForm } from "@/actions/contact";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Shield,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters)"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  phoneNumber: z.string().trim().optional(),
  serviceRequired: z.enum(
    [
      "SEO & Digital Growth",
      "Web Development",
      "Mobile App Development",
      "Full-Stack Strategy",
    ],
    {
      message: "Please select a service",
    }
  ),
  projectBudget: z.string().optional(),
  projectDescription: z
    .string()
    .trim()
    .min(10, "Please describe your project (at least 10 characters)"),
  honeypot: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const SERVICE_OPTIONS = [
  "Web Development",
  "Mobile App Development",
  "SEO & Digital Growth",
  "Full-Stack Strategy",
] as const;

// const BUDGET_OPTIONS = [
//   "< ₹5 Lakhs (~$6k)",
//   "₹5L – ₹15 Lakhs (~$18k)",
//   "₹15L – ₹35 Lakhs (~$42k)",
//   "₹35L – ₹75 Lakhs (~$90k)",
//   "₹75 Lakhs+ ($100k+)",
// ];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceRequired: "Web Development",
      projectBudget: "₹15L – ₹35 Lakhs (~$42k)",
      fullName: "",
      email: "",
      phoneNumber: "",
      projectDescription: "",
      honeypot: "",
    },
  });

  const selectedService = watch("serviceRequired");

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      if (values.phoneNumber) formData.append("phoneNumber", values.phoneNumber);
      formData.append("serviceRequired", values.serviceRequired);
      if (values.projectBudget) formData.append("projectBudget", values.projectBudget);
      formData.append("projectDescription", values.projectDescription);
      if (values.honeypot) formData.append("honeypot", values.honeypot);

      const response = await submitContactForm(null, formData);

      if (response.success) {
        setSubmissionSuccess(true);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#0B6B58", "#E0580C", "#D97706", "#F4EFE6"],
          });
        } catch {
          // ignore confetti errors in test environments
        }
        reset();
      } else {
        setServerError(response.message || "Failed to submit form.");
      }
    } catch {
      setServerError("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Namaste & Welcome"
          badgeDot
          title="Tell Us About Your Vision &"
          highlight="Let's Build It Together."
          description="Whether you require a greenfield mobile app, an enterprise Next.js platform, or an aggressive organic growth engine, our senior engineers are ready."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-10">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Availability Badge Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#0B6B58]/30 shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0B6B58] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0B6B58]"></span>
                  </span>
                  <span className="text-sm font-bold text-[#0B6B58] font-mono">
                    {/* {AGENCY_INFO.status} */}
                  </span>
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  We maintain strict client limits each quarter to ensure our senior engineering team dedicates 100% focused velocity to your build.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="p-6 rounded-2xl bg-white border border-[#EAE3D6] shadow-sm space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#78716C] font-mono">
                  Direct Inquiries &amp; Offices
                </h3>

                <div className="space-y-3.5">
                  <a
                    href={`mailto:${AGENCY_INFO.email}`}
                    className="flex items-center gap-3.5 text-sm text-[#292524] hover:text-[#0B6B58] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] flex items-center justify-center text-[#0B6B58] group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-[#78716C] font-mono">Direct Email</div>
                      <div className="font-semibold text-[#1C1917]">{AGENCY_INFO.email}</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 text-sm text-[#292524]">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] flex items-center justify-center text-[#E0580C]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-[#78716C] font-mono">Headquarters Phone</div>
                      <div className="font-semibold text-[#1C1917]">{AGENCY_INFO.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 text-sm text-[#292524]">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] flex items-center justify-center text-[#D97706]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-[#78716C] font-mono">Studio Locations</div>
                      <div className="font-semibold text-[#1C1917]">{AGENCY_INFO.address}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 text-sm text-[#292524]">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] flex items-center justify-center text-[#0B6B58]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-[#78716C] font-mono">Operating Hours</div>
                      <div className="font-semibold text-[#1C1917]">{AGENCY_INFO.workingHours}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NDA Guarantee */}
            <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#EAE3D6] flex items-center gap-3 text-xs text-[#57534E]">
              <Shield className="w-5 h-5 text-[#0B6B58] shrink-0" />
              <span>
                All inquiries are protected by standard unilateral NDA. We never disclose client blueprints or codebases.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="indian-card p-7 sm:p-10 relative">
              <AnimatePresence mode="wait">
                {submissionSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#E7F3F0] border-2 border-[#0B6B58] text-[#0B6B58] flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1C1917] font-heritage-serif">
                      Inquiry Received Successfully!
                    </h3>

                    <p className="text-sm sm:text-base text-[#57534E] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Sutra Digital. Our executive engineering team will review your specifications and reply with a tailored roadmap within 24 hours.
                    </p>

                    <Button
                      variant="outline"
                      size="md"
                      onClick={() => setSubmissionSuccess(false)}
                      className="mt-4"
                    >
                      Submit Another Inquiry
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {serverError && (
                      <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      {...register("honeypot")}
                    />

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#57534E] font-mono mb-2.5">
                        1. Select Service Required *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {SERVICE_OPTIONS.map((service) => (
                          <button
                            type="button"
                            key={service}
                            onClick={() => setValue("serviceRequired", service)}
                            className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                              selectedService === service
                                ? "bg-[#E7F3F0] border-[#0B6B58] text-[#0B6B58] shadow-2xs"
                                : "bg-[#FAF8F5] border-[#EAE3D6] text-[#57534E] hover:border-[#D8CEBD]"
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                      {errors.serviceRequired && (
                        <p className="text-rose-600 text-xs mt-1">
                          {errors.serviceRequired.message}
                        </p>
                      )}
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#57534E] font-mono mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Aditi Singhania"
                          {...register("fullName")}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] focus:border-[#0B6B58] focus:bg-white text-[#1C1917] placeholder-[#A8A29E] text-sm outline-none transition-all"
                        />
                        {errors.fullName && (
                          <p className="text-rose-600 text-xs mt-1">
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#57534E] font-mono mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          placeholder="aditi@company.in"
                          {...register("email")}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] focus:border-[#0B6B58] focus:bg-white text-[#1C1917] placeholder-[#A8A29E] text-sm outline-none transition-all"
                        />
                        {errors.email && (
                          <p className="text-rose-600 text-xs mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#57534E] font-mono mb-1.5">
                          Phone Number (India / Global)
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98200 00000"
                          {...register("phoneNumber")}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] focus:border-[#0B6B58] focus:bg-white text-[#1C1917] placeholder-[#A8A29E] text-sm outline-none transition-all"
                        />
                      </div>

                      {/* <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#57534E] font-mono mb-1.5">
                          Estimated Budget
                        </label>
                        <select
                          {...register("projectBudget")}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] focus:border-[#0B6B58] focus:bg-white text-[#1C1917] text-sm outline-none transition-all"
                        >
                          {BUDGET_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div> */}
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#57534E] font-mono mb-1.5">
                        Project Brief &amp; Ambition *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about what you want to build, target audience, timelines, and milestones..."
                        {...register("projectDescription")}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] focus:border-[#0B6B58] focus:bg-white text-[#1C1917] placeholder-[#A8A29E] text-sm outline-none transition-all resize-y"
                      />
                      {errors.projectDescription && (
                        <p className="text-rose-600 text-xs mt-1">
                          {errors.projectDescription.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full justify-center text-center font-bold text-base py-4"
                      rightIcon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? "Submitting Brief..." : "Submit Project Inquiry"}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
