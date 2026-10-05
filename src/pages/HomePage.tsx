import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { ProofStrip } from '../components/home/ProofStrip';
import { AboutSection } from '../components/home/AboutSection';
import { DoctorsTeamSection } from '../components/home/DoctorsTeamSection';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { BranchSection } from '../components/home/BranchSection';
import { Testimonials } from '../components/home/Testimonials';
import { Gallery } from '../components/home/Gallery';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { FinalCTA } from '../components/home/FinalCTA';
import { generalFaqs } from '../data/faqs';

interface OutletContextType {
  openBookingModal: () => void;
}

export const HomePage: React.FC = () => {
  const { openBookingModal } = useOutletContext<OutletContextType>();

  return (
    <div className="w-full">
      {/* 01. Hero with full-screen fixed background and Dr. Ch. Ravi Kumar, M.D. */}
      <Hero onOpenBookModal={openBookingModal} />

      {/* 02. Trust & Proof Strip */}
      <ProofStrip />

      {/* 03. About Kalyan Homeo Care */}
      <AboutSection />

      {/* 04. Expert Doctors Team (Dr. Ch. Ravi Kumar, Dr. Sudhakar, Dr. Shweta) */}
      <DoctorsTeamSection />

      {/* 05. Core Services Preview (6 cards) */}
      <ServicesPreview />

      {/* 05. Why Choose Us with family protection visual */}
      <WhyChooseUs />

      {/* 06. 3 Verified Clinic Branches in Visakhapatnam */}
      <BranchSection />

      {/* 07. Patient Testimonials & Verified Stories */}
      <Testimonials />

      {/* 08. Clinic Moments Gallery */}
      <Gallery />

      {/* 09. Frequently Asked Questions Accordion */}
      <FAQAccordion
        faqs={generalFaqs}
        title="Frequently Asked Questions About Kalyan Homeo Care"
        subtitle="Helpful information regarding consultations with Dr. Ch. Ravi Kumar, M.D., clinic timings, and branch locations."
      />

      {/* 10. Final CTA Banner: We're Here to Help */}
      <FinalCTA />
    </div>
  );
};
