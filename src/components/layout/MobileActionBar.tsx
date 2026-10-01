import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../../data/siteConfig';

interface MobileActionBarProps {
  onOpenBookModal: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenBookModal }) => {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[999] bg-white border-t border-border shadow-2xl"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="grid grid-cols-3 h-16 items-center">
        {/* Call CTA */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex flex-col items-center justify-center h-full text-forest hover:bg-mint/50 transition-colors border-r border-border/60"
          aria-label="Call clinic directly"
        >
          <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center mb-0.5 text-forest">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-tight">Call</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center h-full text-[#1EBE5B] hover:bg-[#25D366]/10 transition-colors border-r border-border/60"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366]/15 flex items-center justify-center mb-0.5 text-[#25D366]">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-tight text-text-primary">WhatsApp</span>
        </a>

        {/* Book Now CTA */}
        <button
          onClick={onOpenBookModal}
          className="flex flex-col items-center justify-center h-full bg-forest text-white hover:bg-forest-dark transition-colors cursor-pointer"
          aria-label="Book Consultation"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-0.5 text-white">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-tight">Book Now</span>
        </button>
      </div>
    </div>
  );
};
