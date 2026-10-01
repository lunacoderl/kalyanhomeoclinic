import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const TermsPage: React.FC = () => {
  return (
    <div className="w-full py-16 lg:py-24 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-green hover:text-forest transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-green text-xs font-bold uppercase">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Notice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest">
            Terms & Conditions
          </h1>
          <p className="text-xs text-text-muted">
            Last Updated: January 2026 • Kalyan Homeo Care, Visakhapatnam
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-border space-y-8 text-sm text-text-secondary leading-relaxed">
          <section className="space-y-3 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60">
            <h2 className="text-lg font-serif font-bold text-amber-900">1. Medical Information Disclaimer</h2>
            <p className="text-amber-800 text-xs sm:text-sm">
              All content provided on this website—including health descriptions, service summaries, and homeopathic articles—is intended strictly for <strong>educational and informational guidance</strong>. It does not constitute individual medical diagnosis or prescribe medical treatment. Always consult a qualified medical physician, such as <strong>Dr. Ch. Ravi Kumar, M.D.</strong>, before making healthcare choices or adjusting ongoing treatments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-forest">2. Website Use & Intellectual Property</h2>
            <p>
              The Kalyan Homeo Care name, circular tree-of-life logo, photographs, clinical service descriptions, and layout designs are the proprietary property of Kalyan Homeo Care. Unauthorized reproduction, commercial distribution, or copying is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-forest">3. Appointment Enquiries</h2>
            <p>
              Submitting an online form or initiating a WhatsApp consultation message does not establish an immediate emergency doctor-patient contract. Appointments are finalized upon confirmation by clinic reception based on Dr. Ravi Kumar's availability across our Dwaraka Nagar, Old Gajuwaka, and Steel Plant branches.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-forest">4. Limitation of Liability</h2>
            <p>
              Kalyan Homeo Care and Dr. Ch. Ravi Kumar, M.D. shall not be held liable for any damages resulting from unauthorized self-medication, reliance on generic online health summaries without individualized clinical consultation, or technical interruptions in internet connectivity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-forest">5. Applicable Jurisdiction</h2>
            <p>
              Any disputes, legal notices, or matters arising in connection with this website and clinical consultations shall be governed under the jurisdiction of courts in <strong>Visakhapatnam, Andhra Pradesh, India</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-forest">6. Contact Information</h2>
            <p>
              For legal inquiries or operational concerns regarding these terms:
            </p>
            <div className="p-4 rounded-xl bg-ivory border border-border text-xs space-y-1">
              <p className="font-bold text-forest">Kalyan Homeo Care</p>
              <p>Dwaraka Nagar • Old Gajuwaka • Steel Plant Township</p>
              <p>Telephone: {siteConfig.phoneDisplay}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
