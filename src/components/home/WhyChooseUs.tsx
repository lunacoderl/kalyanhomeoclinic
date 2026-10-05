import React from 'react';
import { UserCheck, Users, Shield, Sparkles, HeartPulse } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: "Experienced & Qualified Doctors",
      desc: "Care led directly by Dr. Ch. Ravi Kumar, M.D., bringing decades of clinical acumen and empathetic listening.",
      icon: UserCheck
    },
    {
      title: "Suitable for All Age Groups",
      desc: "Gentle, non-invasive homeopathic solutions safe for infants, children, pregnant mothers, and seniors.",
      icon: Users
    },
    {
      title: "Safe, Natural & Individualized Plans",
      desc: "Zero harsh synthetic chemicals or suppressive toxicity. Every prescription is custom-matched to your constitution.",
      icon: Shield
    },
    {
      title: "Focus on Long-Term Wellness",
      desc: "Treating the root susceptibility of recurring conditions rather than superficial temporary symptom masking.",
      icon: Sparkles
    },
    {
      title: "Holistic & Caring Consultations",
      desc: "In-depth case taking that addresses physiological, emotional, dietary, and lifestyle dimensions.",
      icon: HeartPulse
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream/70 relative z-10 border-b border-border/70 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Why Choose Us Content & 5 Points */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint border border-green/30 text-green text-xs font-bold tracking-wide uppercase">
              Why Choose Us
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest leading-tight">
              Trusted Homeopathy Care for a Healthier Tomorrow
            </h2>

            <p className="text-base text-text-secondary leading-relaxed">
              Our focus is on treating the root cause with gentle, safe and long-lasting homeopathic solutions. With years of experience and thousands of satisfied patients, Kalyan Homeo Care stands for trust, care and results.
            </p>

            {/* 5 Feature Rows */}
            <div className="space-y-4 pt-2">
              {points.map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/90 border border-border/70 shadow-xs hover:border-green/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-mint text-forest flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forest">
                        {pt.title}
                      </h4>
                      <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full max-w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-amber-50 via-emerald-50 to-green-100 p-5 sm:p-10 flex flex-col items-center justify-center min-h-[380px] sm:min-h-[440px] text-center max-w-full">
              {/* Decorative sunburst glow */}
              <div className="absolute inset-0 bg-radial from-amber-200/40 via-transparent to-transparent pointer-events-none" />

              {/* Botanical leaves accents */}
              <div className="absolute top-4 right-4 text-3xl select-none">🍃</div>
              <div className="absolute bottom-4 left-4 text-3xl select-none">🌿</div>

              {/* Family Protection Graphic */}
              <div className="relative z-10 w-full max-w-xs space-y-6">
                <div className="w-28 h-28 mx-auto rounded-full bg-white/90 shadow-lg flex items-center justify-center text-forest p-4 border border-sage">
                  <svg
                    className="w-16 h-16 text-forest"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Cupped hands supporting family */}
                    <path d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" fill="#C89A45" />
                    <path d="M7 21v-4a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v4" stroke="#0B5A3C" strokeWidth="2" />
                    <path d="M4 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="#16845B" />
                    <path d="M2 21v-2a3 3 0 0 1 3-3h1" stroke="#0B5A3C" strokeWidth="1.5" />
                    <path d="M20 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="#16845B" />
                    <path d="M22 21v-2a3 3 0 0 0-3-3h-1" stroke="#0B5A3C" strokeWidth="1.5" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <span className="font-cursive text-3xl sm:text-4xl font-bold text-forest block tracking-wide">
                    Your Health Our Priority
                  </span>
                  <p className="text-xs text-text-secondary max-w-xs mx-auto leading-relaxed">
                    Protecting family vitality with individualized constitutional homeopathy in Visakhapatnam.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-forest text-xs font-bold shadow-xs border border-border">
                  <span className="w-2 h-2 rounded-full bg-green" />
                  Doctor-Led Constitutional Prescriptions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
