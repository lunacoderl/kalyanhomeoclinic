import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowRight, ArrowLeft, MessageCircle, Phone, CheckCircle, HelpCircle, Shield, Sparkles, Activity, HeartPulse } from 'lucide-react';
import { servicesData } from '../data/services';
import { siteConfig, getWhatsAppLink } from '../data/siteConfig';
import { branchesData } from '../data/branches';
import { FAQAccordion } from '../components/common/FAQAccordion';

export const ServicesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSlug = searchParams.get('service');
  const [searchQuery, setSearchQuery] = useState('');
  const detailPanelRef = useRef<HTMLDivElement>(null);

  // Find currently selected service if any
  const selectedService = selectedSlug
    ? servicesData.find((s) => s.slug === selectedSlug)
    : undefined;

  // Filter services by search term
  const filteredServices = servicesData.filter((service) => {
    const q = searchQuery.toLowerCase();
    return (
      service.title.toLowerCase().includes(q) ||
      service.shortDescription.toLowerCase().includes(q) ||
      service.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });

  // Handle dynamic document title & meta description update
  useEffect(() => {
    if (selectedService) {
      document.title = `${selectedService.title} Consultation | Kalyan Homeo Care`;
      if (detailPanelRef.current) {
        detailPanelRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      document.title = 'Homeopathic Services & Treatments | Kalyan Homeo Care Visakhapatnam';
    }
  }, [selectedService]);

  const handleSelectService = (slug: string) => {
    setSearchParams({ service: slug });
  };

  const handleClearSelectedService = () => {
    setSearchParams({});
    const gridEl = document.getElementById('service-directory');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const consultationSteps = [
    {
      step: '01',
      title: 'Book / Enquire',
      desc: 'Connect with Kalyan Homeo Care through WhatsApp or phone to schedule your consultation slot with Dr. Ch. Ravi Kumar, M.D.'
    },
    {
      step: '02',
      title: 'Discuss Your Concerns',
      desc: 'Participate in an in-depth, relaxed consultation where the doctor listens attentively to your full symptom history, lifestyle, and triggers.'
    },
    {
      step: '03',
      title: 'Personalized Prescription',
      desc: 'Receive tailored, gentle constitutional homeopathic remedies matched precisely to your unique metabolic and physical constitution.'
    },
    {
      step: '04',
      title: 'Follow-Up as Advised',
      desc: 'Periodic reviews to observe positive clinical changes, adjust remedy dilutions, and maintain enduring holistic vitality.'
    }
  ];

  return (
    <div className="w-full">
      {/* 
        Services Hero with fixed background image (servicesection-bg.png) 
        without layered color overlay so the background image is 100% sharp and clear.
      */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-border/80">
        <div
          className="hidden lg:block absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${siteConfig.serviceBg})`,
            backgroundAttachment: 'fixed'
          }}
          role="img"
          aria-label="Kalyan Homeo Care Homeopathic Services Background"
        />

        {/* Hero Content with Light Blur Glass Container Centered for Services */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20 w-full flex flex-col items-center justify-center">
          {/* Mobile Hero Image: full width and proportional natural height without cropping or oversizing */}
          <div className="lg:hidden w-full max-w-2xl mb-6">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-border bg-white">
              <img
                src={siteConfig.serviceBg}
                alt="Kalyan Homeo Care Homeopathic Services"
                className="w-full h-auto object-contain block"
                loading="eager"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 bg-white/90 lg:bg-white/80 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-white/80 shadow-lg text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint border border-green/30 text-green text-xs font-bold tracking-wide uppercase">
              Our Services
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-forest leading-tight text-center">
              Homeopathic Care for a Range of Health Concerns
            </h1>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl text-center">
              Explore the areas of care available at Kalyan Homeo Care and learn more about the concerns you may wish to discuss during a consultation with <strong className="text-forest">Dr. Ch. Ravi Kumar, M.D.</strong>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={getWhatsAppLink('Hello Kalyan Homeo Care, I would like to enquire about your homeopathic services and consultation options.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Talk to Us on WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-ivory text-forest border border-border px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-green" />
                <span>Contact the Clinic</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Service Detail Panel (Renders when a service is selected) */}
      {selectedService && (
        <section
          ref={detailPanelRef}
          className="py-14 sm:py-20 bg-cream border-b-2 border-gold/30 relative z-20 scroll-mt-20 animate-fadeIn"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={handleClearSelectedService}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-forest hover:bg-mint font-bold text-xs border border-border shadow-xs transition-colors mb-8 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-green" />
              <span>Back to All Services Directory</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-border/80">
              {/* Left 40%: Service Illustration & Badges */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden bg-ivory border border-border/60 shadow-md">
                  <img
                    src={selectedService.image}
                    alt={selectedService.alt}
                    className="w-full h-72 sm:h-84 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-forest text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    Clinical Discipline
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-mint/50 border border-green/20 space-y-2">
                  <div className="flex items-center gap-2 text-forest font-bold text-xs">
                    <Shield className="w-4 h-4 text-green" />
                    <span>Constitutional Homeopathy</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Consultations for {selectedService.title} are conducted personally by Dr. Ch. Ravi Kumar, M.D., focusing on root causation, constitutional temperament, and enduring recovery.
                  </p>
                </div>

                {/* Consultation Involves Card */}
                <div className="p-5 rounded-2xl bg-ivory border border-border/80 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-forest flex items-center gap-2">
                    <Activity className="w-4 h-4 text-green" />
                    <span>What Consultation Involves</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-text-secondary">
                    {selectedService.consultationInvolves.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green mt-1.5 shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right 60%: In-Depth Clinical Information & Therapeutics */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-green uppercase">Clinical Detail & Evidence</span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest leading-tight mt-1">
                    {selectedService.title}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {selectedService.overview}
                </p>

                {/* 01. Root Causes & Physiological Triggers */}
                {selectedService.rootCauses && selectedService.rootCauses.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-forest flex items-center gap-2">
                      <HeartPulse className="w-4 h-4 text-forest" />
                      <span>Root Causes & Contributing Triggers</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedService.rootCauses.map((cause, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-text-primary p-2.5 rounded-xl bg-ivory border border-border/60">
                          <CheckCircle className="w-3.5 h-3.5 text-green shrink-0 mt-0.5" />
                          <span>{cause}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 02. Common Concerns Discussed in Consultation */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-forest">
                    Common Concerns & Symptoms Discussed
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.commonConcerns.map((concern, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-text-primary">
                        <CheckCircle className="w-4 h-4 text-green shrink-0 mt-0.5" />
                        <span>{concern}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 03. Homeopathic Constitutional Approach & Therapeutics */}
                {selectedService.homeopathicApproach && selectedService.homeopathicApproach.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-forest flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold" />
                      <span>Homeopathic Approach & Constitutional Care</span>
                    </h3>
                    <div className="p-4 rounded-2xl bg-mint/40 border border-green/30 space-y-2">
                      {selectedService.homeopathicApproach.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-forest leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-forest mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 04. Diet & Lifestyle Guidance */}
                {selectedService.dietAndLifestyle && selectedService.dietAndLifestyle.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-forest">
                      Dietary & Lifestyle Recommendations
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedService.dietAndLifestyle.map((item, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-ivory border border-border/70 text-xs text-text-secondary leading-relaxed">
                          • {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 05. When to Seek Medical Advice */}
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
                  <strong>When to Seek Prompt Advice:</strong> {selectedService.whenToSeekAdvice}
                </div>

                {/* 06. Service Specific FAQs */}
                {selectedService.faqs.length > 0 && (
                  <div className="space-y-3 pt-3">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-forest flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-gold" />
                      <span>Frequently Asked Clinical Questions</span>
                    </h3>
                    <div className="space-y-2.5">
                      {selectedService.faqs.map((faq, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-ivory border border-border/80 text-xs sm:text-sm space-y-1">
                          <p className="font-bold text-forest">{faq.question}</p>
                          <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* WhatsApp Direct Enquiry Button */}
                <div className="pt-4 border-t border-border flex flex-wrap items-center gap-4">
                  <a
                    href={getWhatsAppLink(`Hello Kalyan Homeo Care, I would like to enquire about a consultation regarding ${selectedService.title} with Dr. Ch. Ravi Kumar.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Enquire About {selectedService.title} on WhatsApp</span>
                  </a>

                  <button
                    onClick={handleClearSelectedService}
                    className="text-xs font-bold text-text-muted hover:text-forest transition-colors cursor-pointer"
                  >
                    Close Detail View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Directory Grid Section */}
      <section id="service-directory" className="py-20 lg:py-24 bg-white relative z-10 border-b border-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint border border-green/30 text-green text-xs font-bold tracking-wide uppercase">
              All 12 Disciplines
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest">
              Homeopathic Care Directory
            </h2>

            <p className="text-sm sm:text-base text-text-secondary">
              Browse the health concerns covered in our service information and open any service to understand the consultation focus, root causation, and constitutional remedies.
            </p>

            {/* Instant Client-Side Search Field */}
            <div className="max-w-md mx-auto pt-3">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search health concerns (e.g. Thyroid, Kidney, PCOD)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[52px] pl-12 pr-4 rounded-full border border-border bg-white focus:border-green focus:outline-hidden text-sm shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* 12-Card Grid (4 cols desktop, 2 cols tablet, 1 col mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service) => {
              const waUrl = getWhatsAppLink(`Hello Kalyan Homeo Care, I would like to enquire about consultation regarding ${service.title} with Dr. Ch. Ravi Kumar.`);

              return (
                <article
                  key={service.id}
                  className="group bg-white rounded-3xl border border-border/80 hover:border-green/50 shadow-card-soft hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="h-44 overflow-hidden bg-ivory relative">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-5 space-y-2">
                      <h3 className="text-lg font-serif font-bold text-forest group-hover:text-green transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-border/50 flex items-center justify-between gap-2 mt-2">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-mint text-forest hover:bg-mint/80 border border-green/30 font-bold text-[11px] transition-colors shadow-xs"
                      aria-label={`Get service now for ${service.title}`}
                    >
                      <span>Get Service</span>
                      <MessageCircle className="w-3 h-3 text-[#25D366]" />
                    </a>

                    {/* Learn More Button Highlighted With Background Color */}
                    <button
                      onClick={() => handleSelectService(service.slug)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest hover:bg-forest-dark text-white font-bold text-xs shadow-xs hover:shadow-sm transition-all cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted text-base">No health concerns found matching "{searchQuery}".</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs font-bold text-green hover:underline cursor-pointer"
              >
                View all health concerns
              </button>
            </div>
          )}
        </div>
      </section>

      {/* How Consultation Works Timeline */}
      <section className="py-20 bg-mint/50 border-b border-border/70 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold tracking-widest text-green uppercase">Clinical Protocol</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest">
              How Consultation Works
            </h2>
            <p className="text-sm text-text-secondary">
              A systematic, caring process designed around your individual health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {consultationSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-border/80 shadow-xs space-y-3 relative group hover:border-green/40 transition-colors"
              >
                <div className="font-serif text-4xl sm:text-5xl font-bold text-gold">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-forest">
                  {step.title}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearest Branch CTA */}
      <section className="py-16 bg-ivory border-b border-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border/80 shadow-card-soft flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-green uppercase tracking-wider">Convenient Care Locations</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest">
                Looking for the Nearest Kalyan Homeo Care Branch?
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary">
                Visit Dr. Ch. Ravi Kumar at our Dwaraka Nagar, Old Gajuwaka, or Steel Plant clinics.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {branchesData.map((branch) => (
                <a
                  key={branch.id}
                  href={`tel:${branch.phone}`}
                  className="px-4 py-2.5 rounded-full bg-ivory border border-border text-xs font-bold text-forest hover:bg-mint hover:border-green transition-colors"
                >
                  {branch.name} ({branch.phoneDisplay})
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <FAQAccordion
        faqs={servicesData[0].faqs.concat(servicesData[1].faqs).map((f, i) => ({
          id: `serv-faq-${i}`,
          question: f.question,
          answer: f.answer,
          category: 'Services'
        }))}
        title="Services & Consultation FAQ"
        subtitle="Frequently asked questions about our individualized homeopathic treatments."
      />

      {/* Final Services Conversion CTA */}
      <section className="py-16 bg-forest text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Have Questions About a Health Concern?
          </h2>
          <p className="text-sm text-mint/80 max-w-xl mx-auto">
            Contact Kalyan Homeo Care to discuss your enquiry and consultation options directly with Dr. Ch. Ravi Kumar, M.D.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 bg-white text-forest hover:bg-mint px-7 py-3.5 rounded-full font-bold text-sm shadow-md transition-all"
            >
              <Phone className="w-4 h-4 text-green" />
              <span>Call {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
