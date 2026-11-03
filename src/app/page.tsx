import { TopAnnouncementBar } from "@/components/layout/TopAnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsRibbon } from "@/components/sections/StatsRibbon";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { TechStack } from "@/components/sections/TechStack";
// import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1C1917] selection:bg-[#0B6B58] selection:text-white">
      {/* 1. Auspicious Coral/Crimson Top Announcement Ribbon (as in Reference Screenshot) */}
      <TopAnnouncementBar />

      {/* 2. Responsive Indian Heritage Navbar with Sign In & Start Project CTAs */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 3. Hero Section (Matching Screenshot: Serif Headline, Big Emerald CTA, 5 Stars, Left & Right Floating Widgets, 4 Value Columns) */}
        <Hero />

        {/* 4. Stats Ribbon (Pan-India & Global Metrics) */}
        <StatsRibbon />

        {/* 5. 3 Core Specialization Services with Deep Specs Modals */}
        <Services />

        {/* 6. Why Choose Sutra (Bento Grid) */}
        <WhyUs />

        {/* 7. Modern Engineering Technologies & Tooling */}
        <TechStack />

        {/* 8. Curated Work & Case Studies (Fintech, D2C Luxury, Agri-Tech, Telehealth) */}
        {/* <Portfolio /> */}

        {/* 9. Six-Stage Development Process (Sankalp to Shubh Launch) */}
        <Process />

        {/* 10. Client Testimonials Carousel */}
        <Testimonials />

        {/* 11. High-Impact Call to Action Banner */}
        <CTA />

        {/* 12. Interactive Contact Form with Validation & Confetti */}
        <ContactSection />
      </main>

      {/* 13. Professional Footer with Legal Modals */}
      <Footer />
    </div>
  );
}
