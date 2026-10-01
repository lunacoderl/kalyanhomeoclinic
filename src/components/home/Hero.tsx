import React from 'react';
import { MessageCircle, ArrowRight, Shield, Heart, Users, Phone } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../../data/siteConfig';

interface HeroProps {
  onOpenBookModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookModal }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* 
        Desktop Full-Screen Fixed Background Image (without color overlays).
        Active on large screens for seamless desktop parallax scrolling.
      */}
      <div
        className="hidden lg:block absolute inset-0 z-0 bg-cover bg-right md:bg-center bg-no-repeat transition-all"
        style={{
          backgroundImage: `url(${siteConfig.homeBg})`,
          backgroundAttachment: 'fixed'
        }}
        role="img"
        aria-label="Dr. Ch. Ravi Kumar, M.D. in Kalyan Homeo Care clinic Visakhapatnam"
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24 w-full">
        {/* 
          Mobile Hero Image:
          Displays full width and proportional natural height without cropping or oversizing.
          Texts are aligned below so the image is 100% visible on mobile devices.
        */}
        <div className="lg:hidden w-full mb-6">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-border bg-white">
            <img
              src={siteConfig.homeBg}
              alt="Dr. Ch. Ravi Kumar, M.D., at Kalyan Homeo Care in Visakhapatnam"
              className="w-full h-auto object-contain block"
              loading="eager"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, Badges, Text & CTAs with very light blur background container */}
          <div className="lg:col-span-7 space-y-6 max-w-2xl bg-white/90 lg:bg-white/75 backdrop-blur-md p-6 sm:p-9 rounded-3xl border border-white/80 shadow-lg">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint/90 border border-green/30 text-green text-xs font-bold tracking-wide uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              Trusted Homeopathy Clinic in Visakhapatnam
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-bold text-forest leading-[1.15] tracking-tight">
              Gentle Healing for a Healthier Tomorrow
            </h1>

            {/* Supporting Emotion Line & Paragraph */}
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-medium text-text-primary">
                Gentle care. Thoughtful consultation. A doctor who listens.
              </p>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                Kalyan Homeo Care provides personalized homeopathic consultations in Visakhapatnam, with convenient access through branches in Dwaraka Nagar, Old Gajuwaka and Steel Plant.
              </p>
            </div>

            {/* 3 Micro Benefit Pills */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-2.5 rounded-2xl bg-white/90 border border-border/80 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center text-green mb-1.5">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-text-primary leading-tight">
                  Natural & Safe Treatment
                </span>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-2.5 rounded-2xl bg-white/90 border border-border/80 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-peach/30 flex items-center justify-center text-[#B85D38] mb-1.5">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-text-primary leading-tight">
                  Personalized Care
                </span>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-2.5 rounded-2xl bg-white/90 border border-border/80 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold mb-1.5">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-text-primary leading-tight">
                  Trusted by Thousands
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={getWhatsAppLink(siteConfig.defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-forest hover:bg-forest-dark text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Consult on WhatsApp</span>
              </a>

              <a
                href="/services"
                className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-forest border border-forest/30 px-6 py-3.5 rounded-full font-bold text-sm shadow-xs hover:shadow-sm transition-all"
              >
                <span>Know Our Services</span>
                <ArrowRight className="w-4 h-4 text-green" />
              </a>
            </div>
          </div>

          {/* Right Column: Doctor Spotlight Card (Dr. Ch. Ravi Kumar, M.D. ONLY) */}
          <div className="lg:col-span-5 flex flex-col items-end justify-center">
            {/* Cursive botanical badge sticker */}
            <div className="hidden sm:flex items-center gap-2 text-forest font-cursive text-2xl lg:text-3xl font-bold mb-3 pr-4">
              <span>People Care Healing Naturally 🌿</span>
            </div>

            {/* Floating Doctor Profile Card */}
            <div className="w-full max-w-sm bg-white/95 backdrop-blur-sm rounded-3xl p-5 border border-border/80 shadow-xl space-y-3">
              <div className="flex items-center gap-4">
                <img
                  src={siteConfig.doctor.image}
                  alt="Dr. Ch. Ravi Kumar, M.D., at Kalyan Homeo Care in Visakhapatnam"
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-green/30 shadow-xs"
                />
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-green uppercase block">
                    Chief Physician
                  </span>
                  <h3 className="text-xl font-serif font-bold text-forest leading-tight">
                    {siteConfig.doctor.name}
                  </h3>
                  <span className="text-xs font-semibold text-text-secondary">
                    {siteConfig.doctor.qualification} • {siteConfig.doctor.role}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-border flex items-center justify-between">
                <a
                  href={`tel:${siteConfig.doctor.phone}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-forest hover:text-green transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-green" />
                  <span>{siteConfig.doctor.phone}</span>
                </a>

                <button
                  onClick={onOpenBookModal}
                  className="text-xs font-bold text-green hover:underline cursor-pointer"
                >
                  Book Slot →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
