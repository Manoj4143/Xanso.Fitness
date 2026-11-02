import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-sanctuary-cream/70 border-t border-sanctuary-sandstone/40 relative overflow-hidden"
      data-purpose="contact-section"
    >
      {/* Background Subtle Watermark */}
      <div className="absolute -bottom-10 right-10 text-[140px] lg:text-[200px] font-serif-luxury text-sanctuary-sandstone/15 font-light tracking-widest leading-none pointer-events-none ghost-watermark">
        CONNECT
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-sanctuary-sandstone/40 pb-6 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-sanctuary-terracotta"></span>
              <span className="text-xs uppercase tracking-[0.26em] font-bold text-sanctuary-bronze">
                06 / SANCTUARY CONCIERGE
              </span>
            </div>
            <h2 className="font-serif-luxury text-5xl lg:text-6xl text-[#1f1d1a] font-semibold tracking-tight">
              Contact &amp; Inquiries
            </h2>
          </div>
          <p className="font-serif-luxury italic text-lg lg:text-xl text-sanctuary-darkOlive mt-3 md:mt-0 font-medium max-w-md">
            Reach out directly for private retreat requests, personal guidance, or courtyard visits.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Directives & Highlighted Phone Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Direct Calling & WhatsApp Card */}
            <div className="bg-sanctuary-ivory rounded-3xl p-8 border-2 border-sanctuary-sandstone/60 shadow-lg relative overflow-hidden group hover:border-sanctuary-olive transition-colors">
              <div className="text-[10px] uppercase font-bold tracking-[0.24em] text-sanctuary-bronze mb-2">
                DIRECT CONCIERGE LINE
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-sanctuary-olive text-sanctuary-cream flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div>
                  <a 
                    href="tel:+919105837321" 
                    className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1f1d1a] hover:text-sanctuary-terracotta transition-colors tracking-tight block"
                  >
                    +91 91058 37321
                  </a>
                  <p className="text-xs text-sanctuary-muted uppercase tracking-widest font-mono mt-0.5">
                    Available: 06:00 AM – 08:30 PM IST
                  </p>
                </div>
              </div>

              <p className="text-xs text-sanctuary-charcoal/80 leading-relaxed mb-6 font-normal">
                Direct hotline for consultations, studio bookings, private retreats, or immediate inquiries.
              </p>

              {/* Fast Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919105837321"
                  className="inline-flex items-center space-x-2 bg-sanctuary-olive hover:bg-sanctuary-darkOlive text-sanctuary-cream text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/919105837321?text=Hello%20Xanso.Fitness%20Sanctuary,%20I%20would%20like%20to%20inquire%20about%20yoga%20classes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-sanctuary-cream hover:bg-white text-sanctuary-darkOlive border border-sanctuary-sandstone text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full transition-all shadow-xs"
                >
                  <span className="material-symbols-outlined text-base text-sanctuary-olive">chat</span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Address & Hours Detail */}
            <div className="bg-sanctuary-parchment/60 rounded-2xl p-6 border border-sanctuary-sandstone/50 space-y-4">
              <div className="flex items-start space-x-3 text-xs text-sanctuary-charcoal">
                <span className="material-symbols-outlined text-sanctuary-terracotta text-lg mt-0.5">
                  location_on
                </span>
                <div>
                  <span className="font-semibold uppercase tracking-wider block text-sanctuary-darkOlive">
                    The Stone Colonnade
                  </span>
                  <span className="text-sanctuary-muted leading-relaxed">
                    Heritage Courtyard, Jaipur – 302001, Rajasthan, India
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-xs text-sanctuary-charcoal border-t border-sanctuary-sandstone/40 pt-3">
                <span className="material-symbols-outlined text-sanctuary-olive text-lg mt-0.5">
                  schedule
                </span>
                <div>
                  <span className="font-semibold uppercase tracking-wider block text-sanctuary-darkOlive">
                    Daily Courtyard Hours
                  </span>
                  <span className="text-sanctuary-muted leading-relaxed">
                    Dawn Prana (05:45 AM) to Twilight Yin (08:30 PM)
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Dedicated Message Form (7 Cols) */}
          <div className="lg:col-span-7 bg-sanctuary-cream rounded-3xl p-8 lg:p-10 border border-sanctuary-sandstone/60 shadow-xl relative">
            <span className="text-[10px] uppercase font-bold tracking-[0.24em] text-sanctuary-bronze block mb-1">
              SEND A MESSAGE
            </span>
            <h3 className="font-serif-luxury text-3xl font-semibold text-[#1f1d1a] mb-2">
              Connect with Our Curators
            </h3>
            <p className="text-xs text-sanctuary-muted mb-8 leading-relaxed">
              Have questions regarding our teachers, customized Ayurvedic plans, or studio access? We respond within 24 hours.
            </p>

            {submitted ? (
              <div className="py-12 text-center bg-sanctuary-ivory/80 rounded-2xl border border-sanctuary-sandstone/50">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-sanctuary-olive/15 flex items-center justify-center text-sanctuary-olive">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h4 className="font-serif-luxury text-2xl font-semibold text-sanctuary-darkOlive mb-1">
                  Message Delivered
                </h4>
                <p className="text-xs text-sanctuary-muted max-w-xs mx-auto">
                  Thank you for reaching out. Our sanctuary concierge will respond to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-sanctuary-darkOlive mb-1.5">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Maya Sen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sanctuary-ivory border border-sanctuary-sandstone text-sanctuary-charcoal text-sm focus:outline-none focus:border-sanctuary-terracotta"
                    />
                  </div>

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
                      className="w-full px-4 py-3 rounded-xl bg-sanctuary-ivory border border-sanctuary-sandstone text-sanctuary-charcoal text-sm focus:outline-none focus:border-sanctuary-terracotta"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-sanctuary-darkOlive mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Tell us about your practice goals or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-sanctuary-ivory border border-sanctuary-sandstone text-sanctuary-charcoal text-sm focus:outline-none focus:border-sanctuary-terracotta resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-9 py-3.5 rounded-full bg-sanctuary-olive hover:bg-sanctuary-darkOlive text-sanctuary-cream text-xs uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer hover:shadow-lg"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
