"use server";

import { z } from "zod";
import { Resend } from "resend";
import { ContactResponse } from "@/types";

const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name is too long"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .max(100, "Email is too long"),
  phoneNumber: z
    .string()
    .trim()
    .max(25, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  serviceRequired: z.enum(
    [
      "SEO & Digital Growth",
      "Web Development",
      "Mobile App Development",
      "Full-Stack Strategy",
    ],
    {
      message: "Please select a valid service",
    }
  ),
  projectBudget: z.string().optional().or(z.literal("")),
  projectDescription: z
    .string()
    .trim()
    .min(10, "Please provide at least a brief description (10+ characters)")
    .max(2000, "Description cannot exceed 2000 characters"),
  honeypot: z.string().optional(),
});

export async function submitContactForm(
  _prevState: unknown,
  formData: FormData
): Promise<ContactResponse> {
  try {
    const rawData = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      serviceRequired: formData.get("serviceRequired"),
      projectBudget: formData.get("projectBudget"),
      projectDescription: formData.get("projectDescription"),
      honeypot: formData.get("honeypot"),
    };

    // Honeypot spam defense: if honeypot is filled, silently discard or mock
    if (rawData.honeypot && typeof rawData.honeypot === "string" && rawData.honeypot.trim().length > 0) {
      return {
        success: true,
        message: "Thank you! Your message has been received.",
      };
    }

    const validationResult = contactSchema.safeParse(rawData);

    if (!validationResult.success) {
      const flattenedErrors = validationResult.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Please correct the errors in the form.",
        errors: flattenedErrors,
      };
    }

    const validData = validationResult.data;

    // Send email notification via Resend if API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey && apiKey.startsWith("re_")) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "Kinetic Agency <onboarding@resend.dev>",
        to: process.env.CONTACT_NOTIFICATION_EMAIL || "hello@kineticlabs.design",
        subject: `New Project Inquiry: ${validData.serviceRequired} - ${validData.fullName}`,
        text: `
New Project Lead Received:

Client: ${validData.fullName}
Email: ${validData.email}
Phone: ${validData.phoneNumber || "Not provided"}
Service Required: ${validData.serviceRequired}
Budget: ${validData.projectBudget || "Not specified"}

Project Description:
${validData.projectDescription}
        `,
      });
    } else {
      // In development or when no Resend API key is configured, log inquiry
      console.log("=== [KINETIC AGENCY INQUIRY RECEIVED] ===");
      console.log(validData);
      console.log("=========================================");
    }

    return {
      success: true,
      message:
        "Thank you! Your project inquiry has been received. Our leadership team will review your specifications and contact you within 24 hours.",
    };
  } catch (error) {
    console.error("Failed to process contact form submission:", error);
    return {
      success: false,
      message: "An unexpected error occurred while sending your message. Please try again or email us directly.",
    };
  }
}
