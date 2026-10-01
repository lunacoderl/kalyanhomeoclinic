import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Stethoscope, Phone } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found | Kalyan Homeo Care';
  }, []);

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-cream/70 py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative botanical leaf blur */}
      <div className="absolute top-10 right-10 text-6xl opacity-30 select-none pointer-events-none">🌿</div>
      <div className="absolute bottom-10 left-10 text-6xl opacity-30 select-none pointer-events-none">🍃</div>

      <div className="max-w-lg w-full text-center space-y-6 relative z-10 bg-white/90 backdrop-blur-xs p-8 sm:p-12 rounded-3xl border border-border/80 shadow-xl">
        <div className="space-y-2">
          <span className="font-serif font-bold text-7xl sm:text-8xl text-forest tracking-tighter block">
            404
          </span>
          <span className="font-cursive text-2xl text-gold font-bold block">
            Healing journeys take thoughtful turns 🌿
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-forest">
            This page seems to have taken a different route.
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            Let's get you back to Kalyan Homeo Care so you can find the doctor consultations, services, and branch information you need.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-forest hover:bg-forest-dark text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-mint text-forest hover:bg-forest hover:text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <Stethoscope className="w-4 h-4" />
            <span>View Services</span>
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-ivory text-forest border border-border hover:bg-mint font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <Phone className="w-4 h-4 text-green" />
            <span>Contact Clinic</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
