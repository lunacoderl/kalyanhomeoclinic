import React from 'react';
import { Star, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white relative z-10 border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint border border-green/30 text-green text-xs font-bold tracking-wide uppercase">
              Patient Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest leading-tight">
              What Our Patients Say
            </h2>
            <p className="text-base text-text-secondary">
              Real stories from people who have experienced better health with our care.
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/96QcLvKVbNFexY7C9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-green group shrink-0"
          >
            <span>View All Reviews</span>
            <ArrowRight className="w-4 h-4 text-green group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-ivory/60 rounded-3xl p-6 sm:p-8 border border-border/80 hover:border-green/40 hover:bg-white shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Reviewer Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-forest text-white font-serif font-bold text-lg flex items-center justify-center shadow-xs">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base text-forest">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-1 text-[11px] text-green font-semibold">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>

                  <Quote className="w-7 h-7 text-green/30 group-hover:text-green/50 transition-colors" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-text-secondary leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border/60 text-[11px] text-text-muted">
                {item.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
