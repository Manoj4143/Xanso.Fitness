import React, { useState } from 'react';

export default function BookingModal({ isOpen, onClose, defaultItem }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    selectedClass: defaultItem?.title || 'Morning Yoga (06:30 AM)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-lg bg-sanctuary-cream rounded-3xl p-8 border border-sanctuary-sandstone shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-sanctuary-parchment flex items-center justify-center text-sanctuary-darkOlive hover:bg-sanctuary-sandstone transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sanctuary-olive/10 flex items-center justify-center text-sanctuary-olive">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h3 className="font-serif-luxury text-3xl font-semibold text-sanctuary-darkOlive mb-2">
              Sacred Space Reserved
            </h3>
            <p className="text-sm text-sanctuary-muted max-w-xs mx-auto">
              Your session has been recorded. We have sent confirmation and arrival notes to your email.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.24em] text-sanctuary-bronze block mb-1">
                SANCTUARY RESERVATION
              </span>
              <h3 className="font-serif-luxury text-3xl font-semibold text-[#1f1d1a]">
                {defaultItem?.title ? `Reserve: ${defaultItem.title}` : 'Reserve Your Practice'}
              </h3>
              <p className="text-xs text-sanctuary-muted mt-1">
                Join us in the stone colonnade for sacred movement and stillness.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-sanctuary-darkOlive mb-1.5">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Maya Sen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-sanctuary-ivory border border-sanctuary-sandstone/70 text-sanctuary-charcoal text-sm focus:outline-none focus:border-sanctuary-terracotta"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-sanctuary-darkOlive mb-1.5">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="maya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-sanctuary-ivory border border-sanctuary-sandstone/70 text-sanctuary-charcoal text-sm focus:outline-none focus:border-sanctuary-terracotta"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-sanctuary-darkOlive mb-1.5">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-sanctuary-ivory border border-sanctuary-sandstone/70 text-sanctuary-charcoal text-sm focus:outline-none focus:border-sanctuary-terracotta"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-sanctuary-darkOlive mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-sanctuary-ivory border border-sanctuary-sandstone/70 text-sanctuary-charcoal text-sm focus:outline-none focus:border-sanctuary-terracotta"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-sanctuary-olive hover:bg-sanctuary-darkOlive text-sanctuary-cream text-xs uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

