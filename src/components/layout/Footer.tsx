import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { branchesData } from '../../data/branches';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-dark text-white pt-16 pb-24 lg:pb-12 border-t border-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Doctor identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={siteConfig.logo}
                alt="Kalyan Homeo Care Logo"
                className="w-14 h-14 rounded-full bg-white p-1 object-contain"
              />
              <div>
                <span className="font-serif font-bold text-xl tracking-tight block uppercase leading-none text-white">
                  Kalyan
                </span>
                <span className="font-serif font-bold text-lg tracking-tight block uppercase leading-tight text-white">
                  Homeo Care
                </span>
                <span className="text-xs text-mint/80 font-sans tracking-wide">
                  Rapid gentle permanent cure
                </span>
              </div>
            </div>

            <p className="text-xs text-mint/80 leading-relaxed">
              Personalized homeopathic care led by <strong className="text-white font-semibold">Dr. Ch. Ravi Kumar, M.D.</strong> alongside senior physicians <strong className="text-white font-semibold">Dr. Sudhakar, MD (Hom.)</strong> and <strong className="text-white font-semibold">Dr. Shweta, BHMS</strong>. Serving local families across Visakhapatnam with dedicated clinical listening and gentle remedies.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF0000] flex items-center justify-center text-white transition-colors"
                aria-label="Kalyan Homeo Care YouTube Channel"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <div className="flex items-center gap-1.5 text-xs text-mint/90 font-medium">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Verified Homeopathy Practice</span>
              </div>
            </div>
          </div>

          {/* Column 2: Branches */}
          <div>
            <h4 className="text-sm font-bold font-serif uppercase tracking-wider text-gold mb-4">
              Our 3 Branches in Vizag
            </h4>
            <div className="space-y-3.5 text-xs text-mint/80">
              {branchesData.map((branch) => (
                <div key={branch.id} className="border-l-2 border-green/60 pl-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{branch.name}</span>
                    <span className="text-[10px] uppercase font-bold text-gold px-1.5 py-0.5 rounded-full bg-white/10">
                      {branch.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-mint/70 mt-0.5 line-clamp-2">{branch.address}</p>
                  <a
                    href={`tel:${branch.phone}`}
                    className="inline-flex items-center gap-1 text-mint hover:text-white font-semibold mt-1"
                  >
                    <Phone className="w-3 h-3 text-gold" />
                    <span>{branch.phoneDisplay}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold font-serif uppercase tracking-wider text-gold mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-mint/80 font-medium">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition-colors">About Kalyan Homeo Care</a>
              </li>
              <li>
                <a href="/#doctors" className="hover:text-white transition-colors text-gold font-semibold">Our Doctors Team</a>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Homeopathic Services</Link>
              </li>
              <li>
                <a href="/#branches" className="hover:text-white transition-colors">Clinic Branches</a>
              </li>
              <li>
                <a href="/#testimonials" className="hover:text-white transition-colors">Patient Testimonials</a>
              </li>
              <li>
                <a href="/#gallery" className="hover:text-white transition-colors">Inside Our Clinic (Gallery)</a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact & Directions</Link>
              </li>
              <li>
                <a
                  href={siteConfig.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold hover:underline"
                >
                  <span>Official YouTube Channel</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Consultations */}
          <div>
            <h4 className="text-sm font-bold font-serif uppercase tracking-wider text-gold mb-4">
              Consultation Enquiries
            </h4>
            <div className="space-y-3 text-xs text-mint/80">
              <p>
                To enquire about consultations with <strong className="text-white">Dr. Ch. Ravi Kumar, M.D.</strong>, contact the clinic reception:
              </p>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <a href={`tel:${siteConfig.phone}`} className="text-white font-bold hover:underline">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-[11px] text-mint/80">
                    Visakhapatnam, Andhra Pradesh — Dwaraka Nagar, Old Gajuwaka & Steel Plant.
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block py-2.5 px-5 rounded-full bg-gold hover:bg-gold-hover text-forest font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Contact All Branches
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-mint/60">
          <p>© {new Date().getFullYear()} Kalyan Homeo Care. All Rights Reserved. Featuring Dr. Ch. Ravi Kumar, M.D.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>Visakhapatnam, Andhra Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
