import React from 'react';
import { ArrowRight, Leaf, Heart, Users, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: "Natural Healing",
      icon: Leaf,
      color: "text-green",
      bg: "bg-mint"
    },
    {
      title: "Personalized Treatment",
      icon: Heart,
      color: "text-[#B85D38]",
      bg: "bg-peach/30"
    },
    {
      title: "Care for All Ages",
      icon: Users,
      color: "text-forest",
      bg: "bg-sage/40"
    },
    {
      title: "Safe & Non-Invasive",
      icon: ShieldCheck,
      color: "text-gold",
      bg: "bg-gold/20"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-ivory relative z-10 border-b border-border/70 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Natural Remedies Visual & Cursive Sticker */}
          <div className="lg:col-span-5 relative max-w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-border/80 bg-white">
              <img
                src="/services/service-12.webp"
                alt="Natural homeopathic medicines and herbal extracts at Kalyan Homeo Care"
                className="w-full h-[380px] sm:h-[440px] object-cover"
                loading="lazy"
              />
              {/* Botanical cursive sticker overlay */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-4 py-2 rounded-2xl border border-border/80 shadow-md">
                <span className="font-cursive text-xl sm:text-2xl font-bold text-forest">
                  Healing People Naturally 🌿
                </span>
              </div>
            </div>

            {/* Circular "Since 2008 Serving Vizag" Badge - safely positioned inside mobile container */}
            <div className="absolute bottom-2 right-2 sm:-bottom-6 sm:right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-forest text-white p-2 shadow-2xl flex flex-col items-center justify-center text-center border-4 border-white animate-spin-slow">
              <span className="text-[10px] uppercase font-bold tracking-wider text-mint/80">Since</span>
              <span className="font-serif font-bold text-xl sm:text-2xl text-gold leading-none">2008</span>
              <span className="text-[9px] font-semibold text-mint/90 tracking-tight leading-tight mt-0.5">Serving Vizag</span>
            </div>
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint border border-green/30 text-green text-xs font-bold tracking-wide uppercase">
              About Us
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest leading-tight">
                {siteConfig.name}
              </h2>
              <p className="text-lg font-serif italic text-gold mt-1">
                {siteConfig.subtitle}
              </p>
            </div>

            <p className="text-base text-text-secondary leading-relaxed">
              Kalyan Homeo Care is one of the trusted and well-established homeopathy clinics in Visakhapatnam. Since 2008, under the clinical leadership of <strong className="text-forest font-semibold">Dr. Ch. Ravi Kumar, M.D.</strong> alongside senior physicians <strong className="text-forest font-semibold">Dr. Sudhakar, MD (Hom.)</strong> and <strong className="text-forest font-semibold">Dr. Shweta, BHMS</strong>, we have been providing gentle, safe, and effective homeopathic care for a wide range of acute and chronic health conditions with a patient-centric, empathetic approach.
            </p>

            <p className="text-sm text-text-muted leading-relaxed">
              We focus on individualized constitutional case-taking—listening carefully to your complete medical history, mental triggers, and metabolic tendencies to formulate treatment plans that support deep and lasting healing.
            </p>

            {/* 4 Feature Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-white border border-border/80 shadow-xs flex flex-col items-center text-center space-y-1.5"
                  >
                    <div className={`w-10 h-10 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-text-primary leading-tight">
                      {pillar.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href="/services"
                className="inline-flex items-center gap-2.5 bg-forest hover:bg-forest-dark text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Know More About Our Care</span>
                <ArrowRight className="w-4 h-4 text-mint" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
