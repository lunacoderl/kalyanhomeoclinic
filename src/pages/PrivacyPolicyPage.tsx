import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const PrivacyPolicyPage: React.FC = () => {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Healthcare Website Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest">
            Privacy Policy
          </h1>
          <p className="text-xs text-text-muted">
            Last Updated: January 2026 • Kalyan Homeo Care, Visakhapatnam
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-border space-y-8 text-sm text-text-secondary leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-forest">1. Introduction</h2>
            <p>
              At Kalyan Homeo Care ("we", "our", or "the clinic"), patient dignity, confidential care, and privacy are foundational. This Privacy Policy details the limited information collected through this website and how consultation enquiries are managed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-forest">2. Information We Collect</h2>
            <p>
              This website serves primarily as an informational and appointment coordination portal. We do not maintain an electronic patient medical portal through this public website.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Contact & Consultation Enquiries:</strong> When you initiate contact via our online appointment enquiry forms or direct WhatsApp links, we receive your name, telephone number, preferred clinic branch, and broad reason for visit.</li>
              <li><strong>Telephone Communication:</strong> Direct phone calls to our clinic branches (Dwaraka Nagar, Old Gajuwaka, Steel Plant) connect directly with reception staff.</li>
              <li><strong>Technical & Analytics Data:</strong> Anonymous web traffic metrics (such as page views, browser type, and device screen size) to optimize website performance.</li>
            </ul>
          </section>

          <section className="space-y-3 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60">
            <h2 className="text-lg font-serif font-bold text-amber-900">3. Non-Collection of Sensitive Health Records</h2>
            <p className="text-amber-800 text-xs sm:text-sm">
              We explicitly request that patients <strong>do not upload or submit highly confidential diagnostic scans, sensitive medical test results, or detailed physiological histories</strong> through public web forms. All clinical evaluations are conducted privately and confidentially by Dr. Ch. Ravi Kumar, M.D. in person or during verified consultation sessions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-forest">4. Use of WhatsApp for Communication</h2>
            <p>
              When you click our WhatsApp consultation buttons, you are transferred to the WhatsApp messaging service (governed by WhatsApp's end-to-end encryption and terms). Any chat correspondence remains between you and the clinic administration team.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-forest">5. Embedded Media & External Links</h2>
            <p>
              Our website provides links to our official YouTube channel (<code>https://www.youtube.com/@kalyanhomeocare</code>) and Google Maps directions for clinic branches. Interacting with third-party platforms is subject to their respective privacy terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-forest">6. Contacting the Clinic Regarding Privacy</h2>
            <p>
              If you have any questions regarding privacy or wish to update your contact details, please contact us:
            </p>
            <div className="p-4 rounded-xl bg-ivory border border-border space-y-1.5 text-xs">
              <p className="font-bold text-forest">Kalyan Homeo Care — Administrative Office</p>
              <p>Sankara Matam Rd, near Diamond Park, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530016</p>
              <p>Phone: <a href={`tel:${siteConfig.phone}`} className="text-green hover:underline font-semibold">{siteConfig.phoneDisplay}</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
