import React from 'react';

export default function InstructionsSection() {
  const steps = [
    {
      num: "01",
      title: "ARRIVE IN STILLNESS",
      desc: "Reach the courtyard 15 minutes before the bell. Step out of footwear at the threshold and silence all personal devices."
    },
    {
      num: "02",
      title: "CONSCIOUS BREATHING",
      desc: "Begin with gentle Dirga pranayama. Inhale through the nose expanding belly and ribs; exhale smoothly with steady awareness."
    },
    {
      num: "03",
      title: "HONOR YOUR ALIGNMENT",
      desc: "Never force a posture. Allow the spine to lengthen naturally and adjust depth according to your body's daily hormonal rhythm."
    },
    {
      num: "04",
      title: "HYDRATION & RECOVERY",
      desc: "Sip warm herbal infusions only after the practice concludes to preserve internal agni (digestive warmth) and cellular calm."
    }
  ];

  return (
    <section 
      id="practice-guide" 
      className="py-24 bg-[#F5EFE6] border-y border-sanctuary-sandstone/40 relative overflow-hidden"
      data-purpose="yoga-instructions-editorial"
    >
      {/* Background Architectural Grid Lines & Plus Marks */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-30">
        <div className="max-w-7xl mx-auto h-full px-6 lg:px-12 flex justify-between border-x border-sanctuary-sandstone/30">
          <div className="w-px h-full bg-sanctuary-sandstone/25 hidden md:block" />
          <div className="w-px h-full bg-sanctuary-sandstone/25 hidden lg:block" />
          <div className="w-px h-full bg-sanctuary-sandstone/25" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Editorial Header Row with Crosshairs & Metadata */}
        <div className="flex flex-col md:flex-row md:items-start justify-between pb-8 border-b border-sanctuary-sandstone/40 gap-6">
          <div className="flex items-start space-x-4">
            <span className="text-xl font-light text-sanctuary-bronze select-none leading-none mt-0.5">+</span>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-[0.28em] text-sanctuary-darkOlive font-mono">
                XANSO ATELIER PROTOCOLS
              </div>
              <div className="text-[9px] uppercase tracking-[0.22em] text-sanctuary-bronze font-mono mt-0.5">
                DISCIPLINE &amp; SANCTUARY ESSENTIALS
              </div>
              <div className="w-6 h-0.5 bg-sanctuary-terracotta mt-2.5"></div>
            </div>
          </div>

          <div className="flex items-center space-x-8 text-right self-end md:self-start">
            <div className="hidden sm:block">
              <span className="text-[9px] uppercase tracking-[0.24em] font-semibold text-sanctuary-darkOlive block">
                SACRED FEMININE DISCIPLINE
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-sanctuary-muted font-mono block mt-0.5">
                MINDFUL INTENT · INNER BALANCE
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-serif-luxury text-2xl lg:text-3xl font-semibold text-sanctuary-darkOlive leading-none">
                20
              </span>
              <span className="font-serif-luxury text-2xl lg:text-3xl font-semibold text-sanctuary-darkOlive leading-none">
                26
              </span>
              <span className="w-5 h-1.5 bg-[#D4C0A7] mt-1.5 inline-block"></span>
            </div>
          </div>
        </div>

        {/* Poster Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10 items-start">
          
          {/* Left Column: Bold Typography & Core Directive (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2">
            <div>
              {/* Massive Editorial Headline */}
              <div className="relative">
                <h2 className="font-serif-luxury text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#1f1d1a] font-semibold leading-[0.92] tracking-tight uppercase">
                  BEFORE<br />
                  THE<br />
                  <span className="italic font-normal text-sanctuary-terracotta">PRACTICE</span>
                </h2>
                <div className="hidden sm:block absolute right-0 top-3 text-[9px] uppercase font-mono tracking-[0.22em] text-sanctuary-bronze max-w-[120px] text-right">
                  WHERE BREATH MEETS SHAPE.
                </div>
              </div>

              {/* Sub-Manifesto Note */}
              <div className="mt-8 max-w-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-sanctuary-darkOlive leading-relaxed">
                  WE DO NOT MERELY EXECUTE ASANAS; WE NURTURE THE SOVEREIGN SELF THROUGH REFINED POSTURE.
                </p>
                <div className="w-8 h-px bg-sanctuary-sandstone my-3"></div>
              </div>

              {/* Four Mini Instruction Items */}
              <div className="mt-8 space-y-5" data-purpose="instructions-list">
                <div className="text-[10px] uppercase font-bold tracking-[0.26em] text-sanctuary-bronze">
                  SANCTUARY DIRECTIVES
                </div>

                <div className="space-y-4">
                  {steps.map((step) => (
                    <div 
                      key={step.num}
                      className="group p-3 -mx-3 rounded-xl hover:bg-sanctuary-cream/60 transition-colors border border-transparent hover:border-sanctuary-sandstone/30"
                    >
                      <div className="flex items-center space-x-2.5 mb-1">
                        <span className="text-[10px] font-mono font-bold text-sanctuary-terracotta">
                          {step.num}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-sanctuary-sandstone"></span>
                        <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#1f1d1a]">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#302D28]/85 leading-relaxed pl-5 font-normal">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Barcode & Archival Stamp */}
            <div className="mt-10 pt-6 border-t border-sanctuary-sandstone/40 flex items-center justify-between">
              <div>
                {/* Visual Barcode Accent */}
                <div className="flex items-end space-x-[2px] h-7 opacity-85 mb-1.5">
                  <span className="w-1 h-full bg-sanctuary-darkOlive"></span>
                  <span className="w-[2px] h-full bg-sanctuary-darkOlive"></span>
                  <span className="w-[3px] h-full bg-sanctuary-darkOlive"></span>
                  <span className="w-[1px] h-full bg-sanctuary-darkOlive"></span>
                  <span className="w-[2px] h-4/5 bg-sanctuary-darkOlive"></span>
                  <span className="w-1 h-full bg-sanctuary-darkOlive"></span>
                  <span className="w-[1px] h-full bg-sanctuary-darkOlive"></span>
                  <span className="w-[3px] h-full bg-sanctuary-darkOlive"></span>
                  <span className="w-[2px] h-3/4 bg-sanctuary-darkOlive"></span>
                  <span className="w-1 h-full bg-sanctuary-darkOlive"></span>
                  <span className="w-[2px] h-full bg-sanctuary-darkOlive"></span>
                  <span className="w-1 h-full bg-sanctuary-darkOlive"></span>
                  <span className="w-[1px] h-full bg-sanctuary-darkOlive"></span>
                  <span className="w-[3px] h-full bg-sanctuary-darkOlive"></span>
                </div>
                <div className="text-[9px] uppercase tracking-[0.2em] font-mono text-sanctuary-muted">
                  XANSO ARCHIVE © 2026
                </div>
              </div>

              <div className="text-right">
                <span className="text-2xl font-light text-sanctuary-bronze select-none leading-none">+</span>
                <p className="text-[9px] uppercase tracking-widest text-sanctuary-bronze font-mono mt-1">
                  ALL RIGHTS OBSERVED
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Arch Image Collage with Geometric Accents (7 Cols) */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px]">
              
              {/* Fine Linear Grid Circle Motif */}
              <div className="absolute -top-8 left-16 sm:left-24 w-32 h-32 rounded-full border border-sanctuary-darkOlive/30 pointer-events-none flex items-center justify-center -z-0">
                <div className="w-2.5 h-2.5 rounded-full bg-sanctuary-bronze absolute right-2 top-8"></div>
                <div className="w-full h-px bg-sanctuary-darkOlive/20"></div>
              </div>

              {/* Right Vertical Badge Text: LIGHT / MOVEMENT / STORY / BALANCE */}
              <div className="absolute top-12 -right-4 sm:-right-8 z-20 hidden sm:flex flex-col space-y-2 text-[9px] font-mono uppercase tracking-[0.28em] text-sanctuary-darkOlive font-bold">
                <span>✦ LIGHT</span>
                <span>✦ PRANA</span>
                <span>✦ ASANA</span>
                <span>✦ STILLNESS</span>
              </div>

              {/* Layer 1: Dark Slate Block Behind Image */}
              <div className="absolute right-0 top-16 w-3/5 h-[80%] bg-sanctuary-darkOlive rounded-2xl shadow-xl -z-10"></div>

              {/* Layer 2: Main Arch Image (Walking/Movement in Sandstone Sunlight) */}
              <div className="relative arch-frame overflow-hidden border-4 border-sanctuary-cream shadow-2xl bg-sanctuary-parchment aspect-[3/4] w-[82%] sm:w-[78%]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN93VRokG_3tfdoZXbHdJMyemUclaW6_K4UCpt-ocM_DoumNN4YHKOj5Ce9T-xGFKaSgtMh0Fc8tcZE0Qw87VAIHbY0Vv8mP2SbeV-AOy8UpblLaR655O_jn53jL4c1lJvZQ0MK5PyyQNifyl3HoSZZRkdHxjO_MTejp9UJRJxsPhxGJWL8JHNWdK6zjKVf-UCvNT3l_C6y5KkqoynU-k-EcqlbwgCDM_WdtaBVkwuuefZZ1w2i4Uc"
                  alt="Mindful movement inside the sunlit sandstone sanctuary colonnade"
                  className="w-full h-full object-cover object-center filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sanctuary-darkOlive/40 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Layer 3: Studio Indicator Plaque Over Dark Slate Block */}
              <div className="absolute bottom-16 right-0 sm:right-2 z-20 text-sanctuary-cream p-5 text-right flex flex-col items-end">
                <span className="material-symbols-outlined text-sanctuary-terracotta text-lg mb-1">
                  sparkles
                </span>
                <span className="text-[9px] uppercase tracking-[0.26em] text-sanctuary-cream/70 font-mono">
                  SANCTUARY
                </span>
                <span className="font-serif-luxury text-4xl font-bold tracking-tight text-sanctuary-cream leading-tight">
                  01
                </span>
                <div className="w-6 h-px bg-sanctuary-sandstone/60 my-1.5"></div>
                <span className="text-[9px] uppercase tracking-[0.18em] text-sanctuary-cream/80 font-mono">
                  JAIPUR ATELIER
                </span>
              </div>

              {/* Layer 4: Floating Seal Stamp Badge Overlapping Arch Bottom */}
              <div className="absolute -bottom-6 left-12 sm:left-20 z-30">
                <div className="w-20 h-20 rounded-full bg-sanctuary-darkOlive text-sanctuary-cream border-2 border-sanctuary-cream shadow-xl flex flex-col items-center justify-center p-2 text-center transform -rotate-12 hover:rotate-0 transition-transform">
                  <span className="text-[7px] uppercase tracking-[0.2em] font-mono text-sanctuary-sandstone">
                    XANSO
                  </span>
                  <span className="material-symbols-outlined text-sm text-sanctuary-terracotta my-0.5">
                    spa
                  </span>
                  <span className="text-[6px] uppercase tracking-[0.16em] font-mono text-sanctuary-cream/80">
                    SANCTUARY
                  </span>
                </div>
              </div>

              {/* Layer 5: Left Minimal Silhouette Card */}
              <div className="absolute bottom-8 -left-6 sm:-left-12 w-28 sm:w-36 aspect-[4/5] bg-sanctuary-cream rounded-xl p-2.5 shadow-lg border border-sanctuary-sandstone/60 hidden sm:block">
                <div className="w-full h-full bg-[#E8DEC8]/60 rounded-lg overflow-hidden relative flex flex-col justify-end p-2">
                  <div className="w-6 h-6 bg-sanctuary-sandstone/70 rounded-xs mb-auto"></div>
                  <span className="material-symbols-outlined text-sanctuary-olive text-2xl opacity-70">
                    self_improvement
                  </span>
                  <span className="text-[8px] uppercase tracking-widest font-mono text-sanctuary-darkOlive font-bold mt-1">
                    ASANA NO. 1
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

