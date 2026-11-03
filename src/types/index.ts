export type ServiceCategory = "seo" | "web-dev" | "mobile-dev";

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  iconName: string;
  gradient: string;
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  detailedOverview: string;
  tools: string[];
}

export type ProjectCategory = "All" | "Web Development" | "Mobile Apps" | "SEO & Growth";

export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: "Web Development" | "Mobile Apps" | "SEO & Growth";
  description: string;
  fullOverview: string;
  tags: string[];
  gradient: string;
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  liveUrl?: string;
  featured: boolean;
  mockupType: "browser" | "mobile" | "analytics";
  isDemo: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatarText: string;
  stats?: string;
  isPlaceholderNotice: boolean;
}

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend & Cloud" | "Mobile" | "SEO & Analytics";
  description: string;
  level: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber?: string;
  serviceRequired: "SEO & Digital Growth" | "Web Development" | "Mobile App Development" | "Full-Stack Strategy";
  projectBudget?: string;
  projectDescription: string;
  honeypot?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
