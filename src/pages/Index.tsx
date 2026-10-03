import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { MidBannerGuarantee } from "@/components/MidBannerGuarantee";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AuditAndTestimonials } from "@/components/AuditAndTestimonials";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f4f1ea] font-sans antialiased text-[#2d4a44]">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MidBannerGuarantee />
        <ServicesGrid />
        <WhyChooseUs />
        <AuditAndTestimonials />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
