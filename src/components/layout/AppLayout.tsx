import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { FloatingActionRail } from './FloatingActionRail';
import { MobileActionBar } from './MobileActionBar';
import { ScrollToTop } from './ScrollToTop';
import { Footer } from './Footer';
import { AppointmentModal } from '../common/AppointmentModal';

export const AppLayout: React.FC = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-text-primary relative selection:bg-mint selection:text-forest">
      {/* Top Sticky Header */}
      <Navbar onOpenBookModal={() => setIsBookModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        <Outlet context={{ openBookingModal: () => setIsBookModalOpen(true) }} />
      </main>

      {/* Signature Desktop Right-Edge Vertical Action Rail */}
      <FloatingActionRail onOpenBookModal={() => setIsBookModalOpen(true)} />

      {/* Mobile Fixed Bottom Action Bar */}
      <MobileActionBar onOpenBookModal={() => setIsBookModalOpen(true)} />

      {/* Floating Scroll To Top Button (above mobile bottom bar) */}
      <ScrollToTop />

      {/* Universal Footer */}
      <Footer />

      {/* Universal Booking Enquiry Modal */}
      <AppointmentModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </div>
  );
};
