import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Clear answers about consultations, branches, and appointments at Kalyan Homeo Care."
}) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-24 bg-white relative z-10 border-b border-border/70" itemScope itemType="https://schema.org/FAQPage">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint border border-green/30 text-green text-xs font-bold tracking-wide uppercase">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest leading-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-border/80 bg-ivory/40 overflow-hidden transition-colors hover:border-green/40"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-forest" itemProp="name">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center text-forest transition-transform duration-300 ${isOpen ? 'rotate-180 bg-mint text-green' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    className="px-5 pb-5 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border/40 pt-3"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
