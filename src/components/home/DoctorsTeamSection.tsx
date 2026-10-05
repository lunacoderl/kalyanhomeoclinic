import React, { useState } from 'react';
import { 
  Award, 
  MapPin, 
  Calendar, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight,
  Stethoscope,
  HeartHandshake
} from 'lucide-react';
import { doctorsData, type DoctorItem } from '../../data/doctors';
import { getWhatsAppLink } from '../../data/siteConfig';
import { AppointmentModal } from '../common/AppointmentModal';

export const DoctorsTeamSection: React.FC = () => {
  const [selectedDoctorForModal, setSelectedDoctorForModal] = useState<DoctorItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenAppointment = (doctor: DoctorItem) => {
    setSelectedDoctorForModal(doctor);
    setIsModalOpen(true);
  };

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white relative z-10 border-b border-border/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint border border-green/30 text-green text-xs font-bold tracking-wide uppercase">
              <Stethoscope className="w-3.5 h-3.5 text-green" />
              <span>Medical Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest leading-tight">
              Meet Our Expert Doctors
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              Led by founder <strong className="text-forest font-semibold">Dr. Ch. Ravi Kumar, M.D.</strong> alongside senior physicians <strong className="text-forest font-semibold">Dr. Sudhakar, MD (Hom.)</strong> and <strong className="text-forest font-semibold">Dr. Shweta, BHMS</strong>, our medical team brings decades of specialized constitutional care to Visakhapatnam.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-ivory border border-border/80 text-xs font-bold text-forest shadow-xs">
              <Award className="w-4 h-4 text-gold" />
              <span>Certified M.D. & B.H.M.S. Specialists</span>
            </span>
          </div>
        </div>

        {/* 3 Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsData.map((doc) => {
            const docWhatsAppMessage = `Hello Kalyan Homeo Care, I would like to book a consultation with ${doc.name}, ${doc.degree}. Please let me know the available timings.`;
            const docWhatsAppUrl = getWhatsAppLink(docWhatsAppMessage);

            return (
              <div
                key={doc.id}
                className="group rounded-3xl bg-ivory/60 border border-border/80 hover:border-forest/40 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Doctor Portrait Header */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-forest/5">
                  <img
                    src={doc.image}
                    alt={`${doc.name} - ${doc.qualification} at Kalyan Homeo Care`}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-forest-dark/90 backdrop-blur-xs text-white text-xs font-bold border border-white/20 shadow-md">
                      {doc.qualification}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gold/90 backdrop-blur-xs text-forest-dark text-[11px] font-bold shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{doc.experience}</span>
                    </span>
                  </div>

                  {/* Bottom Image Overlay: Name & Role */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif font-bold text-2xl drop-shadow-md text-white">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-medium text-mint/90 drop-shadow-sm mt-0.5">
                      {doc.role}
                    </p>
                  </div>
                </div>

                {/* Doctor Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5 bg-white">
                  
                  {/* Motto / Clinic Philosophy */}
                  <div className="p-3.5 rounded-2xl bg-ivory border border-border/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-green">
                      <HeartHandshake className="w-3.5 h-3.5 text-green" />
                      <span>Clinical Philosophy</span>
                    </div>
                    <p className="text-xs italic text-forest font-serif leading-relaxed">
                      "{doc.motto}"
                    </p>
                  </div>

                  {/* Biography */}
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {doc.bio}
                  </p>

                  {/* Specializations Pills */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-forest uppercase tracking-wider block">
                      Core Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.specialization.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-mint/70 border border-green/20 text-forest text-[11px] font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Branches & Timings info */}
                  <div className="pt-3 border-t border-border/70 space-y-2 text-xs text-text-secondary">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-green shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-forest font-semibold">Consulting at:</strong>{' '}
                        {doc.branches.join(' • ')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold-dark shrink-0" />
                      <span>{doc.availability}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-border/70 grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleOpenAppointment(doc)}
                      className="py-2.5 px-3 rounded-xl bg-forest hover:bg-forest-dark text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-mint" />
                      <span>Book Visit</span>
                    </button>

                    <a
                      href={docWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-12 p-6 rounded-3xl bg-ivory border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center text-green shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-forest">
                Comprehensive Constitutional Case Evaluation
              </h4>
              <p className="text-xs text-text-secondary">
                Each consultation includes exhaustive case repertorization, root cause diagnosis, and personalized pure homeopathic dispensations.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-forest hover:text-green shrink-0 group"
          >
            <span>View All Branch Timings</span>
            <ChevronRight className="w-4 h-4 text-green group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>

      {/* Appointment Modal with Preselected Doctor */}
      {selectedDoctorForModal && (
        <AppointmentModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedDoctorForModal(null);
          }}
          preselectedDoctor={selectedDoctorForModal.name}
        />
      )}
    </section>
  );
};
