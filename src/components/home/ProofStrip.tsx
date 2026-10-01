import React from 'react';
import { Award, MapPin, Heart, Stethoscope } from 'lucide-react';

export const ProofStrip: React.FC = () => {
  const proofItems = [
    {
      icon: Award,
      metric: "15+",
      label: "Years of Service",
      color: "text-forest",
      bgColor: "bg-sage/40"
    },
    {
      icon: MapPin,
      metric: "3",
      label: "Branches in Vizag",
      color: "text-green",
      bgColor: "bg-mint"
    },
    {
      icon: Heart,
      metric: "Thousands",
      label: "Happy Patients",
      color: "text-[#B85D38]",
      bgColor: "bg-peach/30"
    },
    {
      icon: Stethoscope,
      metric: "Wide Range",
      label: "of Health Conditions",
      color: "text-gold",
      bgColor: "bg-gold/20"
    }
  ];

  return (
    <section className="relative z-10 py-6 bg-white border-y border-border/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {proofItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl bg-ivory/80 border border-border/60 hover:border-green/40 hover:bg-white transition-all shadow-xs"
              >
                <div className={`w-11 h-11 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-forest leading-none">
                    {item.metric}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-text-secondary mt-0.5">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
