import React from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { galleryData } from '../../data/gallery';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-ivory relative z-10 border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint border border-green/30 text-green text-xs font-bold tracking-wide uppercase">
              Gallery
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest leading-tight">
              Moments from Our Clinic
            </h2>
            <p className="text-base text-text-secondary">
              A glimpse of our clinic, doctors and patient care.
            </p>
          </div>

          <a
            href="#branches"
            className="inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-green group shrink-0"
          >
            <span>View More Photos</span>
            <ArrowRight className="w-4 h-4 text-green group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4-Photo Gallery Grid (Exclusive gallary1-4 photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="group relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden bg-white border border-border/80 shadow-card-soft hover:shadow-card-hover transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase font-bold text-gold tracking-wider">
                  {item.category}
                </span>
                <span className="text-xs font-bold text-white leading-tight mt-0.5">
                  {item.title}
                </span>
              </div>
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-forest opacity-0 group-hover:opacity-100 transition-opacity">
                <ImageIcon className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
