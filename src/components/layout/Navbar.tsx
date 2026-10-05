import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

interface NavbarProps {
  onOpenBookModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/#about' },
    { label: 'Doctors', to: '/#doctors' },
    { label: 'Services', to: '/services' },
    { label: 'Branches', to: '/#branches' },
    { label: 'Gallery', to: '/#gallery' },
    { label: 'Reviews', to: '/#testimonials' },
    { label: 'Contact', to: '/contact' }
  ];

  const handleNavClick = (to: string) => {
    setMobileMenuOpen(false);
    if (to.startsWith('/#')) {
      const elementId = to.replace('/#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      style={{ position: 'sticky', top: 0 }}
      className={`sticky top-0 z-[900] w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-2'
          : 'bg-white/90 backdrop-blur-xs py-3'
      } border-b border-border/70`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between w-full max-w-full">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-3 group min-w-0"
          aria-label="Kalyan Homeo Care Home"
        >
          <img
            src={siteConfig.logo}
            alt="Kalyan Homeo Care – Homeopathy Clinic in Visakhapatnam"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain rounded-full shadow-xs group-hover:scale-105 transition-transform shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-serif font-bold text-base sm:text-lg md:text-xl tracking-tight text-forest leading-none uppercase truncate">
              Kalyan
            </span>
            <span className="font-serif font-bold text-sm sm:text-base md:text-lg tracking-tight text-forest leading-tight uppercase truncate">
              Homeo Care
            </span>
            <span className="hidden sm:block text-[10px] md:text-[11px] font-sans text-green tracking-wide truncate">
              Rapid gentle permanent cure
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => handleNavClick(link.to)}
              className={`text-sm font-semibold transition-colors hover:text-green ${
                location.pathname === link.to
                  ? 'text-forest font-bold'
                  : 'text-text-secondary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 text-xs font-bold text-text-secondary hover:text-forest transition-colors py-2 px-3 rounded-full hover:bg-mint"
          >
            <Phone className="w-3.5 h-3.5 text-green" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>

          <button
            onClick={onOpenBookModal}
            className="inline-flex items-center gap-2 bg-green hover:bg-forest text-white text-xs md:text-sm font-bold py-2.5 px-5 rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
          <button
            onClick={onOpenBookModal}
            className="text-xs font-bold bg-green text-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full flex items-center gap-1 shadow-xs shrink-0 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 rounded-xl text-forest hover:bg-mint transition-colors shrink-0 cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className="px-3 py-2 rounded-lg text-base font-semibold text-text-primary hover:bg-mint hover:text-forest transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-ivory text-forest font-bold text-sm border border-border"
              >
                <Phone className="w-4 h-4 text-green" />
                <span>Call Clinic: {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
