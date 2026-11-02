import React from 'react';

const INSTRUCTORS = [
  {
    name: "Ananya Sharma",
    title: "Classical Hatha & Pranayama",
    experience: "12 Years Experience",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN93VRokG_3tfdoZXbHdJMyemUclaW6_K4UCpt-ocM_DoumNN4YHKOj5Ce9T-xGFKaSgtMh0Fc8tcZE0Qw87VAIHbY0Vv8mP2SbeV-AOy8UpblLaR655O_jn53jL4c1lJvZQ0MK5PyyQNifyl3HoSZZRkdHxjO_MTejp9UJRJxsPhxGJWL8JHNWdK6zjKVf-UCvNT3l_C6y5KkqoynU-k-EcqlbwgCDM_WdtaBVkwuuefZZ1w2i4Uc",
    bio: "Rooted in traditional breath regulation and alignment for mental clarity and hormonal balance.",
    lineage: "Kaivalyadhama Lineage"
  },
  {
    name: "Priya Menon",
    title: "Dynamic Vinyasa & Breathwork",
    experience: "9 Years Experience",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDExbcliGAEPI9Rg5ANYy89YcE4yEfws3cGFcUhUkoTs1jCp6CqbGorYeoIf8yo-so3K3ovqGdqjjrHQHkZTfQR5qQUSZmtTXFavF3JJ-eTSybY4bwY2seqCWuxMQNPJBvzjCW-XnHNrefhlay5z42waJyEH0tMtsDsnXCbq91dkMKjOuOvD9mkg-d1EkVN18zBDNUzxjVHWCeodG24D0zp8sO7A5IM_2BGcsz8cYBasOB7_4duTR_B",
    bio: "Fluid transitions, somatic core awareness, and joyful strength anchored in steady posture.",
    lineage: "Mysore Ashtanga Trained"
  },
  {
    name: "Dr. Sumita Rao",
    title: "Pelvic Health & Restorative Yoga",
    experience: "14 Years Experience",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiBw4D1ZVC7DOvjnUop4JnlgiFm490XVXhBlenWmWeajdeUq9F5gPLI0jLs3f2f9axgFuuPECmakuZolhx-nZndlYIw3UTyn-YOnsO2p6xxsFj66tduykLzxC-2v4bHYEGsW5_LTwM_5EDDkzI9WZFtmGjDfvqKB54eDhCFPCSjJMRcXE62To57GIagke2hb52ZIVk2iZ-VAIhEn36PRurSwXztdk_quySbyJ6EV_51Q5wuirEodKm",
    bio: "Gentle restorative protocols, nervous system down-regulation, and holistic feminine well-being.",
    lineage: "BAMS, Ayurvedic Physician"
  }
];

export default function InstructorsSection({ onSelectInstructor }) {
  return (
    <section className="py-24 bg-sanctuary-ivory" data-purpose="instructors" id="instructors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.28em] font-bold text-sanctuary-bronze block mb-2">
            MEET YOUR GUIDES
          </span>
          <h2 className="font-serif-luxury text-5xl lg:text-6xl text-[#1f1d1a] font-semibold tracking-tight mb-4">
            Guided With Grace.
          </h2>
          <p className="text-[#201e1a] text-lg lg:text-xl leading-relaxed font-normal">
            Practitioners of mindful movement and traditional yoga, bringing wisdom, quietude, and hormonal balance to every practice.
          </p>
        </div>

        {/* Instructor Cards 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {INSTRUCTORS.map((guide, idx) => (
            <article
              key={idx}
              className="bg-sanctuary-cream rounded-2xl overflow-hidden border border-sanctuary-sandstone/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-sanctuary-parchment">
                <img
                  alt={`${guide.name} - ${guide.title} at Xanso.Fitness`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  src={guide.image}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-sanctuary-cream/95 backdrop-blur-sm text-sanctuary-darkOlive text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full font-bold border border-sanctuary-sandstone/60 shadow-xs">
                    {guide.experience}
                  </span>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif-luxury text-3xl font-semibold text-[#1f1d1a] mb-1.5">
                    {guide.name}
                  </h3>
                  <p className="text-sm uppercase tracking-widest font-semibold text-sanctuary-terracotta mb-3">
                    {guide.title}
                  </p>
                  <p className="text-[#201e1a] text-base font-normal leading-relaxed">
                    {guide.bio}
                  </p>
                </div>
                <div
                  onClick={() => onSelectInstructor && onSelectInstructor(guide)}
                  className="pt-5 mt-5 border-t border-sanctuary-sandstone/40 flex items-center justify-between text-sm text-sanctuary-darkOlive cursor-pointer group-hover:text-sanctuary-terracotta transition-colors"
                >
                  <span className="font-semibold text-sanctuary-bronze group-hover:text-sanctuary-terracotta">
                    {guide.lineage}
                  </span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

