import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Calendar, Navigation, CheckCircle2, ExternalLink, Stethoscope } from 'lucide-react';
import { branchesData } from '../data/branches';
import { doctorsData } from '../data/doctors';
import { siteConfig, getWhatsAppLink } from '../data/siteConfig';
import { FAQAccordion } from '../components/common/FAQAccordion';

export const ContactPage: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState(branchesData[0].id);
  const [selectedDoctorId, setSelectedDoctorId] = useState(doctorsData[0].id);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [concern, setConcern] = useState('');
  const [preferredContact, setPreferredContact] = useState('WhatsApp');
  const [messageText, setMessageText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact & Clinic Directions | Kalyan Homeo Care Visakhapatnam';
  }, []);

  const selectedBranch = branchesData.find(b => b.id === selectedBranchId) || branchesData[0];
  const selectedDoctor = doctorsData.find(d => d.id === selectedDoctorId) || doctorsData[0];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hello Kalyan Homeo Care,\n\nI would like to enquire about a consultation.\n\n• Preferred Doctor: ${selectedDoctor.name}, ${selectedDoctor.degree} (${selectedDoctor.role})\n• Patient Name: ${name}\n• Phone: ${phone}\n• Preferred Branch: ${selectedBranch.name} (${selectedBranch.badge})\n• Preferred Contact: ${preferredContact}\n• Concern/Reason: ${concern || 'General Enquiry'}\n• Message: ${messageText || 'None'}\n\nPlease let me know the available consultation timings.`;

    const waUrl = getWhatsAppLink(formatted);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactFaqs = [
    {
      id: 'c-faq-1',
      question: 'Which Kalyan Homeo Care branch should I visit?',
      answer: 'You can visit whichever branch is closest to your location in Visakhapatnam. The Dwaraka Nagar (Main Branch) is central near Diamond Park, Old Gajuwaka serves industrial and residential areas near Latha Hospital, and Steel Plant serves township families with continuous 24-hour service availability.',
      category: 'Branches'
    },
    {
      id: 'c-faq-2',
      question: 'Can I consult Dr. Ch. Ravi Kumar on WhatsApp?',
      answer: 'Yes, our clinic team is available on WhatsApp at 080083 00155 to schedule appointments, verify consultation timings, and assist with general clinic enquiries.',
      category: 'Consultation'
    },
    {
      id: 'c-faq-3',
      question: 'Do I need a prior appointment or are walk-ins accepted?',
      answer: 'While walk-in patients are welcomed during clinic hours, scheduling an appointment via WhatsApp or phone guarantees a dedicated consultation slot with minimal waiting time.',
      category: 'Appointments'
    }
  ];

  return (
    <div className="w-full">
      {/* 
        Contact Hero with full-screen fixed image (contactpage-bg.png) 
        without layered color overlay so the background image is 100% sharp and clear.
      */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-border/80">
        <div
          className="hidden lg:block absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${siteConfig.contactBg})`,
            backgroundAttachment: 'fixed'
          }}
          role="img"
          aria-label="Kalyan Homeo Care Contact Office Background"
        />

        {/* Hero Content with Light Blur Glass Container Positioned in the Right Corner */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24 w-full flex flex-col items-end">
          {/* Mobile Hero Image: full width and proportional natural height without cropping or oversizing */}
          <div className="lg:hidden w-full mb-6">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-border bg-white">
              <img
                src={siteConfig.contactBg}
                alt="Kalyan Homeo Care Contact Office"
                className="w-full h-auto object-contain block"
                loading="eager"
              />
            </div>
          </div>

          <div className="max-w-xl w-full ml-auto space-y-4 bg-white/90 lg:bg-white/80 backdrop-blur-md p-6 sm:p-9 rounded-3xl border border-white/80 shadow-xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint border border-green/30 text-green text-xs font-bold tracking-wide uppercase">
              Get In Touch
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-forest leading-tight">
              We're Here to Help You Connect With the Clinic
            </h1>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Reach Kalyan Homeo Care through WhatsApp, phone, or visit the branch most convenient for you across Visakhapatnam.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp the Clinic</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Quick Contact Cards */}
      <section className="py-8 bg-white border-b border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-ivory/60 hover:bg-mint/40 border border-border transition-colors flex flex-col items-center text-center space-y-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-sage/50 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="font-bold text-sm text-forest">WhatsApp Us</span>
              <span className="text-xs text-text-secondary">Instant enquiry & slots</span>
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="p-5 rounded-2xl bg-ivory/60 hover:bg-mint/40 border border-border transition-colors flex flex-col items-center text-center space-y-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-sage/50 flex items-center justify-center text-forest group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="font-bold text-sm text-forest">Call Reception</span>
              <span className="text-xs text-text-secondary">{siteConfig.phoneDisplay}</span>
            </a>

            <a
              href="#appointment-form"
              className="p-5 rounded-2xl bg-ivory/60 hover:bg-mint/40 border border-border transition-colors flex flex-col items-center text-center space-y-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-sage/50 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="font-bold text-sm text-forest">Book Appointment</span>
              <span className="text-xs text-text-secondary">Online form enquiry</span>
            </a>

            <a
              href="#branches"
              className="p-5 rounded-2xl bg-ivory/60 hover:bg-mint/40 border border-border transition-colors flex flex-col items-center text-center space-y-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-sage/50 flex items-center justify-center text-green group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="font-bold text-sm text-forest">Find a Branch</span>
              <span className="text-xs text-text-secondary">3 locations in Vizag</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Interactive Branch Directory & Details */}
      <section id="branches" className="py-20 bg-ivory border-b border-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-green uppercase">Three Clinic Locations</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest">
              Find a Kalyan Homeo Care Branch Near You
            </h2>
            <p className="text-sm text-text-secondary">
              Select any branch below to view its address, direct phone contact, operating hours, and live directions on Google Maps.
            </p>
          </div>

          {/* Interactive Branch Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {branchesData.map((branch) => {
              const isActive = selectedBranchId === branch.id;
              return (
                <button
                  key={branch.id}
                  onClick={() => setSelectedBranchId(branch.id)}
                  className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all cursor-pointer shadow-xs ${isActive
                      ? 'bg-forest text-white shadow-md scale-105'
                      : 'bg-white text-text-secondary hover:bg-mint hover:text-forest border border-border'
                    }`}
                >
                  {branch.name} ({branch.badge})
                </button>
              );
            })}
          </div>

          {/* Selected Branch Featured Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-border/80 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest text-white text-xs font-bold uppercase tracking-wider">
                {selectedBranch.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest">
                {selectedBranch.name} Branch
              </h3>

              <div className="space-y-3 text-sm text-text-secondary">
                <address className="not-italic flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{selectedBranch.address}</span>
                </address>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <a href={`tel:${selectedBranch.phone}`} className="font-bold text-forest hover:underline">
                    {selectedBranch.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green shrink-0" />
                  <span className="font-semibold text-text-primary">{selectedBranch.hours}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href={selectedBranch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green hover:bg-forest text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <a
                  href={`tel:${selectedBranch.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ivory hover:bg-mint text-forest border border-border font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4 text-green" />
                  <span>Call {selectedBranch.name}</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5 relative h-64 rounded-2xl overflow-hidden border border-border/80 bg-ivory shadow-xs">
              <img
                src={selectedBranchId === 'dwaraka-nagar' ? '/home-bg.png' : selectedBranchId === 'old-gajuwaka' ? '/contactpage-bg.png' : '/servicesection-bg.png'}
                alt={`${selectedBranch.name} clinic view`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Split Appointment Enquiry Section & Doctor Spotlight */}
      <section id="appointment-form" className="py-20 bg-cream/70 border-b border-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 cols: Doctor Spotlight & Clinic Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint border border-green/30 text-green text-xs font-bold tracking-wide uppercase">
                Meet Our Medical Team
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest leading-tight">
                Connect With Our Doctors
              </h2>

              <p className="text-sm text-text-secondary leading-relaxed">
                Consult with our experienced homeopathic doctors across all three clinic branches in Visakhapatnam. Click a doctor to select them for your consultation enquiry:
              </p>

              {/* 3 Doctor Cards */}
              <div className="space-y-3">
                {doctorsData.map((doc) => {
                  const isSelected = doc.id === selectedDoctorId;
                  return (
                    <div
                      key={doc.id}
                      onClick={() => setSelectedDoctorId(doc.id)}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-center gap-4 ${
                        isSelected
                          ? 'bg-white border-forest ring-2 ring-forest/30 shadow-md'
                          : 'bg-white/80 border-border/80 hover:border-forest/40 hover:bg-white'
                      }`}
                    >
                      <img
                        src={doc.image}
                        alt={`${doc.name}, ${doc.degree}`}
                        className="w-16 h-16 rounded-2xl object-cover object-top border border-green/30 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="font-serif font-bold text-forest text-base truncate">
                            {doc.name}
                          </h4>
                          <span className="px-2 py-0.5 rounded-md bg-forest/10 text-forest text-[10px] font-bold shrink-0">
                            {doc.qualification}
                          </span>
                        </div>
                        <p className="text-xs text-text-secondary truncate mt-0.5">
                          {doc.role}
                        </p>
                        <p className="text-[11px] text-text-muted mt-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-green shrink-0" />
                          <span className="truncate">{doc.branches.join(', ')}</span>
                        </p>
                      </div>

                      <div className="shrink-0">
                        {isSelected ? (
                          <div className="w-6 h-6 rounded-full bg-forest text-white flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-text-muted text-[10px]">
                            •
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Clinic Assurance */}
              <div className="p-4 rounded-2xl bg-white border border-border/80 text-xs text-text-secondary space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-forest font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                  <span>Serving Dwaraka Nagar, Old Gajuwaka & Steel Plant</span>
                </div>
                <p className="text-[11px] text-text-muted pl-6">
                  Every consultation includes in-depth constitutional analysis tailored specifically to you.
                </p>
              </div>
            </div>

            {/* Right 7 cols: Appointment Enquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-border/80">
              <div className="space-y-2 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint text-forest text-xs font-bold">
                  <span>Selected Doctor:</span>
                  <span className="text-green font-extrabold">{selectedDoctor.name}, {selectedDoctor.degree}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest">
                  Book an Appointment Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary">
                  Fill in your details below to compose a direct consultation enquiry via WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 bg-mint/50 rounded-2xl border border-green/30 p-6">
                  <CheckCircle2 className="w-12 h-12 text-green mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-forest">Opening WhatsApp...</h4>
                  <p className="text-xs text-text-secondary mt-1">
                    Your appointment enquiry has been prepared and sent directly to our clinic staff.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Preferred Doctor Selector */}
                  <div>
                    <label className="block text-xs font-bold text-text-secondary mb-1">Preferred Doctor *</label>
                    <div className="relative">
                      <Stethoscope className="absolute left-3.5 top-3.5 w-4 h-4 text-text-muted" />
                      <select
                        value={selectedDoctorId}
                        onChange={e => setSelectedDoctorId(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-ivory/50 focus:border-green focus:outline-hidden text-sm font-medium"
                      >
                        {doctorsData.map(d => (
                          <option key={d.id} value={d.id}>
                            {d.name}, {d.degree} — {d.role}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-text-secondary mb-1">Patient Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Sharma"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-ivory/50 focus:border-green focus:outline-hidden text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-text-secondary mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-ivory/50 focus:border-green focus:outline-hidden text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-text-secondary mb-1">Preferred Branch *</label>
                      <select
                        value={selectedBranchId}
                        onChange={e => setSelectedBranchId(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-ivory/50 focus:border-green focus:outline-hidden text-sm"
                      >
                        {branchesData.map(b => (
                          <option key={b.id} value={b.id}>
                            {b.name} ({b.badge})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-text-secondary mb-1">Preferred Contact Mode</label>
                      <select
                        value={preferredContact}
                        onChange={e => setPreferredContact(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-ivory/50 focus:border-green focus:outline-hidden text-sm"
                      >
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="In-Person Walk-in">In-Person Walk-in</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-secondary mb-1">Health Concern / Question</label>
                    <input
                      type="text"
                      placeholder="e.g. Kidney stones, Thyroid, PCOD, Allergies, Joint pain"
                      value={concern}
                      onChange={e => setConcern(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-ivory/50 focus:border-green focus:outline-hidden text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-secondary mb-1">Additional Message (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Brief note on your symptoms or suitable consultation time..."
                      value={messageText}
                      onChange={e => setMessageText(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-ivory/50 focus:border-green focus:outline-hidden text-sm resize-none"
                    />
                  </div>

                  <p className="text-[11px] text-text-muted leading-tight">
                    Privacy Note: Please avoid sharing highly confidential medical reports through this general enquiry form. You can present them in person to Dr. Ravi Kumar during consultation.
                  </p>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-forest hover:bg-forest-dark text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Send Appointment Enquiry via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Practical Contact FAQ */}
      <FAQAccordion
        faqs={contactFaqs}
        title="Contact & Visit FAQ"
        subtitle="Practical details about clinic access, walk-ins, and doctor timings."
      />

      {/* Stay Connected & YouTube Presence */}
      <section className="py-14 bg-white border-t border-border/80">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold text-green uppercase tracking-widest">Digital Health Education</span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest">
            Stay Connected With Kalyan Homeo Care
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary max-w-xl mx-auto">
            Watch Dr. Ch. Ravi Kumar's health education discussions, patient guidance, and homeopathy insights on our official YouTube channel.
          </p>
          <div className="pt-2">
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF0000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>Visit YouTube Channel: @kalyanhomeocare</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
