import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, ArrowUp } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../../data/siteConfig';

interface FloatingActionRailProps {
  onOpenBookModal: () => void;
}

export const FloatingActionRail: React.FC<FloatingActionRailProps> = ({ onOpenBookModal }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const railItems = [
    {
      id: 'call',
      label: 'CALL',
      icon: Phone,
      bgColor: '#0B5A3C', // Deep Green
      textColor: '#FFFFFF',
      onClick: () => {
        window.location.href = `tel:${siteConfig.phone}`;
      },
      ariaLabel: `Call Kalyan Homeo Care at ${siteConfig.phoneDisplay}`
    },
    {
      id: 'whatsapp',
      label: 'WHATSAPP',
      icon: MessageCircle,
      bgColor: '#25D366', // WhatsApp Green
      textColor: '#FFFFFF',
      onClick: () => {
        window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer');
      },
      ariaLabel: 'Chat with Kalyan Homeo Care on WhatsApp'
    },
    {
      id: 'book',
      label: 'BOOK',
      sublabel: 'APPOINT.',
      icon: Calendar,
      bgColor: '#C89A45', // Warm Gold Accent
      textColor: '#0B5A3C', // Dark-green text
      onClick: onOpenBookModal,
      ariaLabel: 'Book an appointment with Dr. Ch. Ravi Kumar'
    },
    {
      id: 'top',
      label: 'TOP',
      icon: ArrowUp,
      bgColor: '#EEF7F0', // Mint
      textColor: '#0B5A3C', // Forest Green
      onClick: scrollToTop,
      ariaLabel: 'Scroll to top of page'
    }
  ];

  return (
    <aside
      className="hidden lg:flex flex-col fixed right-0 top-1/2 -translate-y-1/2 z-[1000] select-none"
      aria-label="Quick Actions Rail"
    >
      <div className="flex flex-col space-y-[2px]">
        {railItems.map((item, idx) => {
          const Icon = item.icon;
          const isHovered = hoveredIndex === idx;

          return (
            <button
              key={item.id}
              onClick={item.onClick}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: item.bgColor,
                color: item.textColor,
                borderRadius: '18px 0 0 18px',
                boxShadow: '0 10px 30px rgba(16, 67, 45, 0.12)'
              }}
              className={`group relative flex items-center justify-center transition-all duration-300 ease-out cursor-pointer overflow-hidden ${
                isHovered ? '-translate-x-1.5 w-28 px-3' : 'w-16 px-2'
              } h-[58px]`}
              aria-label={item.ariaLabel}
            >
              <div className="flex flex-col items-center justify-center pointer-events-none">
                <Icon className={`w-4 h-4 transition-transform duration-300 ${isHovered && item.id === 'top' ? '-translate-y-0.5' : ''}`} />
                <span className="text-[10px] font-bold tracking-wider leading-none mt-1 uppercase text-center font-sans">
                  {item.label}
                </span>
                {item.sublabel && !isHovered && (
                  <span className="text-[8px] font-semibold tracking-tighter leading-none text-center font-sans">
                    {item.sublabel}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
