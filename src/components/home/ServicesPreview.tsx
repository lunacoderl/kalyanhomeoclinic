import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { servicesData } from '../../data/services';
import { getWhatsAppLink } from '../../data/siteConfig';

export const ServicesPreview: React.FC = () => {
  // Display the 6 featured core services on the home page matching the mockup
  const featuredServices = servicesData.filter(s => s.isHomeFeatured);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative z-10 border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint border border-green/30 text-green text-xs font-bold tracking-wide uppercase">
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest leading-tight">
              Natural Treatment for a Better Life
            </h2>
            <p className="text-base text-text-secondary">
              We offer safe and effective homeopathic treatment for a wide range of health conditions.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-green group shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-green group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service) => {
            const waMessage = `Hello Kalyan Homeo Care, I would like to enquire about consultation and treatment for ${service.title} with Dr. Ch. Ravi Kumar.`;
            const waUrl = getWhatsAppLink(waMessage);

            return (
              <article
                key={service.id}
                className="group flex flex-col bg-white rounded-3xl border border-border/80 hover:border-green/50 shadow-card-soft hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                {/* Top Image Container */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-ivory">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-forest group-hover:text-green transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mt-2 line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Actions: "Get Service Now" & "Learn More" (highlighted background color) */}
                  <div className="pt-3 border-t border-border/60 flex items-center justify-between gap-3">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-mint text-forest hover:bg-mint/80 border border-green/30 font-bold text-xs transition-colors shadow-xs"
                      aria-label={`Get Service Now for ${service.title} via WhatsApp`}
                    >
                      <span>Get Service</span>
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    </a>

                    <Link
                      to={`/services?service=${service.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-forest hover:bg-forest-dark text-white font-bold text-xs shadow-xs hover:shadow-md transition-all"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
