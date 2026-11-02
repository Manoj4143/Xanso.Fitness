import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InstructionsSection from './components/InstructionsSection';
import ScheduleSection from './components/ScheduleSection';
import InstructorsSection from './components/InstructorsSection';
import AtelierSection from './components/AtelierSection';
import VideoSection from './components/VideoSection';
import MembershipSection from './components/MembershipSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenBooking = (item = null) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-sanctuary-ivory flex flex-col font-sans selection:bg-sanctuary-sandstone selection:text-sanctuary-darkOlive">
      <Header
        onBookClick={() => handleOpenBooking()}
        onJoinClick={() => {
          const el = document.getElementById('membership');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      
      <main className="flex-grow">
        <HeroSection
          onExploreClick={() => {
            const el = document.getElementById('timings');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onJoinClick={() => {
            const el = document.getElementById('membership');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <InstructionsSection />

        <ScheduleSection onBookClass={(item) => handleOpenBooking(item)} />

        <InstructorsSection onSelectInstructor={(guide) => handleOpenBooking({ title: `Consultation with ${guide.name}` })} />

        <AtelierSection />

        <VideoSection />

        <MembershipSection onSelectPlan={(plan) => handleOpenBooking({ title: `${plan.title} Membership Tier` })} />
      </main>

      <Footer />

      <BookingModal
        isOpen={modalOpen}
        onClose={handleCloseBooking}
        defaultItem={selectedItem}
      />
    </div>
  );
}

