import React, { useState } from 'react';
import { X, Calendar, MessageSquare, Phone, User, MapPin, Stethoscope } from 'lucide-react';
import { branchesData } from '../../data/branches';
import { siteConfig, getWhatsAppLink } from '../../data/siteConfig';
import { doctorsData } from '../../data/doctors';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedBranch?: string;
  preselectedConcern?: string;
  preselectedDoctor?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedBranch,
  preselectedConcern,
  preselectedDoctor
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [doctor, setDoctor] = useState(preselectedDoctor || 'Dr. Ch. Ravi Kumar, M.D.');
  const [branch, setBranch] = useState(preselectedBranch || 'dwaraka-nagar');
  const [concern, setConcern] = useState(preselectedConcern || '');
  const [preferredDay, setPreferredDay] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedBranchObj = branchesData.find(b => b.id === branch) || branchesData[0];
    const message = `Hello Kalyan Homeo Care,\n\nI would like to book a consultation.\n\n• Preferred Doctor: ${doctor}\n• Name: ${name || 'Patient'}\n• Phone: ${phone || 'Not provided'}\n• Preferred Branch: ${selectedBranchObj.name} (${selectedBranchObj.badge})\n• Health Concern: ${concern || 'General Consultation'}\n• Preferred Day/Time: ${preferredDay || 'Earliest available'}\n\nPlease let me know the available consultation slot.`;

    const waUrl = getWhatsAppLink(message);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-border"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-text-muted hover:text-text-primary hover:bg-mint transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-mint flex items-center justify-center text-forest">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest text-green uppercase">Book Consultation</span>
            <h3 className="text-2xl font-serif font-bold text-text-primary">
              {doctor ? `Consult ${doctor.split(' ')[1] || doctor}` : 'Book Doctor Consultation'}
            </h3>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-mint text-forest rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-forest mb-2">Redirecting to WhatsApp...</h4>
            <p className="text-sm text-text-secondary">
              Opening your consultation enquiry directly with Kalyan Homeo Care clinic team.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-text-secondary mb-1">Select Preferred Doctor</label>
              <div className="relative">
                <Stethoscope className="absolute left-3.5 top-3.5 w-4 h-4 text-text-muted" />
                <select
                  value={doctor}
                  onChange={e => setDoctor(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border focus:border-green focus:outline-hidden text-sm bg-ivory/50"
                >
                  <option value="Any Available Senior Doctor">Any Available Senior Doctor</option>
                  {doctorsData.map(d => (
                    <option key={d.id} value={`${d.name}, ${d.degree}`}>
                      {d.name}, {d.degree} ({d.role})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-text-secondary mb-1">Your Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Varma"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border focus:border-green focus:outline-hidden text-sm bg-ivory/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-text-secondary mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-text-muted" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border focus:border-green focus:outline-hidden text-sm bg-ivory/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-text-secondary mb-1">Select Branch</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-text-muted" />
                  <select
                    value={branch}
                    onChange={e => setBranch(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border focus:border-green focus:outline-hidden text-sm bg-ivory/50"
                  >
                    {branchesData.map(b => (
                      <option key={b.id} value={b.id}>
                        {b.name} ({b.badge})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-text-secondary mb-1">Preferred Time / Day</label>
                <input
                  type="text"
                  placeholder="e.g. Tomorrow morning"
                  value={preferredDay}
                  onChange={e => setPreferredDay(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-green focus:outline-hidden text-sm bg-ivory/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-text-secondary mb-1">Health Concern / Reason for Visit</label>
              <input
                type="text"
                placeholder="e.g. Kidney stones, PCOD, Allergies, Joint pain"
                value={concern}
                onChange={e => setConcern(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-green focus:outline-hidden text-sm bg-ivory/50"
              />
            </div>

            <p className="text-[12px] text-text-muted leading-tight">
              Note: General appointment enquiry. Please avoid sharing sensitive medical documents through public forms.
            </p>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-forest hover:bg-forest-dark text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Send Enquiry via WhatsApp
            </button>

            <div className="text-center pt-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-xs text-forest hover:underline font-semibold"
              >
                Or Call Us Directly: {siteConfig.phoneDisplay}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
