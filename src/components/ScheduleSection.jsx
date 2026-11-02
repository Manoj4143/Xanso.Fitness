import React from 'react';

const SCHEDULE_ITEMS = [
  {
    id: 1,
    time: "06:30 AM",
    title: "Morning Yoga",
    level: "(All Levels)",
    details: "Acharya Ananya Sharma · Solar Prana · 75 Min"
  },
  {
    id: 2,
    time: "08:00 AM",
    title: "Hatha Yoga",
    level: "(Foundational Alignment)",
    details: "Priya Menon · Postural Geometry · 60 Min"
  },
  {
    id: 3,
    time: "05:30 PM",
    title: "Evening Flow",
    level: "(Dynamic Breath & Grace)",
    details: "Dr. Sumita Rao · Fluid Vinyasa & Core Release · 75 Min"
  },
  {
    id: 4,
    time: "06:30 PM",
    title: "Sunset Meditation",
    level: "(Restorative Stillness)",
    details: "Radhika Nair · Tibetan Singing Bowls & Yin · 50 Min"
  }
];

export default function ScheduleSection({ onBookClass }) {
  return (
    <section className="py-24 relative bg-sanctuary-cream/60 border-t border-sanctuary-sandstone/30 overflow-hidden" data-purpose="yoga-schedule" id="timings">
      {/* Ghost Watermark "FLOW" in background */}
      <div className="absolute top-10 left-10 lg:left-24 text-[120px] lg:text-[180px] font-serif-luxury text-sanctuary-sandstone/25 font-light tracking-widest leading-none pointer-events-none ghost-watermark">
        FLOW
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-sanctuary-sandstone/40 pb-6 mb-16">
          <div className="flex items-center space-x-4">
            <span className="text-sm uppercase tracking-[0.26em] font-bold text-sanctuary-bronze">
              02 / Sanctuary Ledger
            </span>
            <span className="w-12 h-px bg-sanctuary-sandstone"></span>
            <span className="text-sm uppercase tracking-[0.24em] text-sanctuary-darkOlive font-medium">
              Daily Rhythms
            </span>
          </div>
          <p className="font-serif-luxury italic text-lg lg:text-xl text-sanctuary-darkOlive mt-3 md:mt-0 font-medium">
            Harmonized around diurnal solar rhythms and sacred stillness.
          </p>
        </div>

        {/* Schedule Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Schedule Visual: Warrior II Asana Arch Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-[420px] mx-auto lg:mx-0">
              <div className="relative overflow-hidden arch-frame shadow-xl border-4 border-sanctuary-cream aspect-[4/5] bg-sanctuary-parchment">
                <img
                  alt="Indian woman practicing Virabhadrasana II posture inside the sandstone colonnade sanctuary"
                  className="w-full h-full object-cover object-center"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDExbcliGAEPI9Rg5ANYy89YcE4yEfws3cGFcUhUkoTs1jCp6CqbGorYeoIf8yo-so3K3ovqGdqjjrHQHkZTfQR5qQUSZmtTXFavF3JJ-eTSybY4bwY2seqCWuxMQNPJBvzjCW-XnHNrefhlay5z42waJyEH0tMtsDsnXCbq91dkMKjOuOvD9mkg-d1EkVN18zBDNUzxjVHWCeodG24D0zp8sO7A5IM_2BGcsz8cYBasOB7_4duTR_B"
                />
                {/* Bottom Pose Plaque */}
                <div className="absolute bottom-5 inset-x-5">
                  <div className="glass-pill rounded-xl p-4 shadow-md flex items-center justify-between border border-sanctuary-sandstone/50">
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-sanctuary-bronze text-xl">self_improvement</span>
                      <div>
                        <h4 className="font-serif-luxury font-semibold text-base text-sanctuary-darkOlive leading-tight">
                          Virabhadrasana II
                        </h4>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-sanctuary-muted">
                          Sandstone Colonnade
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-sanctuary-terracotta bg-sanctuary-terracotta/10 px-2 py-1 rounded">
                        Dawn Alignment
                      </span>
                      <p className="text-[9px] text-sanctuary-muted mt-1 uppercase tracking-widest">
                        Jaipur Court
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-2 arch-frame border border-sanctuary-sandstone/50 -z-10"></div>
            </div>
          </div>

          {/* Schedule Timetable List */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.24em] text-sanctuary-bronze uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-sanctuary-terracotta"></span>
              <span>Sacred Solar Progression</span>
            </div>
            <h2 className="font-serif-luxury text-5xl lg:text-6xl text-[#1f1d1a] font-semibold tracking-tight mb-4">
              Find Your Flow.
            </h2>
            <p className="text-[#201e1a] text-lg lg:text-xl leading-relaxed mb-10 max-w-xl font-normal">
              An unbroken continuum of solar awakening, geometric precision, and twilight sound bathing designed for women's natural energy cycles.
            </p>

            {/* Schedule Items Container */}
            <div className="divide-y divide-sanctuary-sandstone/50 border-y border-sanctuary-sandstone/50" data-purpose="timetable-list">
              {SCHEDULE_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-sanctuary-parchment/40 px-4 rounded-xl transition-colors"
                >
                  <div className="flex items-baseline space-x-5">
                    <span className="font-serif-luxury text-3xl lg:text-4xl text-sanctuary-darkOlive font-semibold whitespace-nowrap">
                      {item.time}
                    </span>
                    <div>
                      <h3 className="font-serif-luxury text-2xl lg:text-3xl font-semibold text-[#1f1d1a]">
                        {item.title}{' '}
                        <span className="text-sm text-sanctuary-darkOlive font-sans font-normal ml-1">
                          {item.level}
                        </span>
                      </h3>
                      <p className="text-base text-sanctuary-darkOlive font-medium tracking-wide mt-1">
                        {item.details}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => onBookClass(item)}
                      className="bg-sanctuary-olive hover:bg-sanctuary-darkOlive text-sanctuary-cream text-sm uppercase tracking-widest px-7 py-3 rounded-full font-semibold transition-all shadow-sm cursor-pointer hover:shadow"
                    >
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Timetable Footnote */}
            <div className="mt-8 flex items-center justify-between text-sm text-sanctuary-darkOlive font-medium">
              <div className="flex items-center space-x-2.5">
                <span className="material-symbols-outlined text-sanctuary-olive text-lg">eco</span>
                <span className="italic font-serif-luxury text-base">Courtyard herbal infusion served after practice</span>
              </div>
              <span className="text-xs tracking-widest uppercase font-mono text-sanctuary-bronze font-bold">
                DOORS 15M PRIOR
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

