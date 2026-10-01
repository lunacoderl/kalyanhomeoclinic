import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../../data/siteConfig';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 relative z-10 bg-gradient-to-r from-mint via-sage/30 to-mint border-b border-border/80 overflow-hidden">
      {/* Decorative leaf motifs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: CTA Content */}
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-green/30 text-green text-xs font-bold tracking-wide uppercase shadow-xs">
              Get In Touch
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest leading-tight">
              We're Here to Help
            </h2>

            <p className="text-base text-text-secondary max-w-2xl leading-relaxed">
              Have questions or want to consult <strong className="text-forest font-semibold">Dr. Ch. Ravi Kumar, M.D.</strong>? Reach out to us through WhatsApp or contact your nearest branch in Dwaraka Nagar, Old Gajuwaka, or Steel Plant.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-forest hover:bg-forest-dark text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-ivory text-forest border border-border px-7 py-3.5 rounded-full font-bold text-sm shadow-xs transition-all"
              >
                <span>Contact Details</span>
                <ArrowRight className="w-4 h-4 text-green" />
              </Link>
            </div>
          </div>

          {/* Right Column: Cursive botanical banner element */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right">
            <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-xs border border-border/80 shadow-card-soft space-y-2 max-w-xs">
              <span className="text-3xl block">🌱</span>
              <span className="font-cursive text-2xl sm:text-3xl font-bold text-forest block">
                Small Steps Towards a Healthier You
              </span>
              <span className="text-xs text-text-muted block">
                Personalized care at Kalyan Homeo Care
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
