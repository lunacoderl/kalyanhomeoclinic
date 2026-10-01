import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { branchesData } from '../../data/branches';

export const BranchSection: React.FC = () => {
  // Clinic photos corresponding to each branch
  const branchImages: Record<string, string> = {
    'dwaraka-nagar': '/home-bg.png',
    'old-gajuwaka': '/contactpage-bg.png',
    'steel-plant': '/servicesection-bg.png'
  };

  return (
    <section id="branches" className="py-20 lg:py-28 bg-ivory relative z-10 border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint border border-green/30 text-green text-xs font-bold tracking-wide uppercase">
              Our Branches
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest leading-tight">
              Visit Our Clinics in Visakhapatnam
            </h2>
            <p className="text-base text-text-secondary">
              We are conveniently located at three key areas to serve you better.
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/96QcLvKVbNFexY7C9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green hover:bg-forest text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-sm transition-all shrink-0"
          >
            <span>Get Directions</span>
            <Navigation className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3 Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branchesData.map((branch) => {
            const img = branchImages[branch.id] || '/home-bg.png';

            return (
              <article
                key={branch.id}
                className="bg-white rounded-3xl border border-border/80 hover:border-green/50 shadow-card-soft hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Branch Photo with Badge */}
                  <div className="relative h-48 overflow-hidden bg-ivory">
                    <img
                      src={img}
                      alt={`${branch.name} branch - Kalyan Homeo Care Visakhapatnam`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-forest text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                      {branch.badge}
                    </div>
                  </div>

                  {/* Branch Details */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-forest">
                      {branch.name}
                    </h3>

                    <div className="space-y-2.5 text-xs sm:text-sm text-text-secondary">
                      {/* Address */}
                      <address className="not-italic flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-green shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{branch.address}</span>
                      </address>

                      {/* Phone */}
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-gold shrink-0" />
                        <a
                          href={`tel:${branch.phone}`}
                          className="font-bold text-text-primary hover:text-green transition-colors"
                        >
                          {branch.phoneDisplay}
                        </a>
                      </div>

                      {/* Hours */}
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-green shrink-0" />
                        <span className="font-semibold text-forest">
                          {branch.hours}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branch CTAs: Get Directions & Call Now */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full border border-border bg-ivory/60 hover:bg-mint text-forest font-bold text-xs transition-colors"
                    aria-label={`Get directions to ${branch.name} branch`}
                  >
                    <Navigation className="w-3.5 h-3.5 text-green" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={`tel:${branch.phone}`}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-forest hover:bg-forest-dark text-white font-bold text-xs transition-colors shadow-xs"
                    aria-label={`Call ${branch.name} branch`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
