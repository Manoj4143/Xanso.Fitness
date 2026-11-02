import React from 'react';

export default function AtelierSection() {
  return (
    <section className="py-20 relative bg-sanctuary-parchment/40 border-y border-sanctuary-sandstone/40" data-purpose="editorial-atelier" id="art-of-stillness">
      <div className="max-w-6xl mx-auto px-6">
        {/* Frame Container */}
        <div className="bg-sanctuary-cream/95 rounded-3xl p-8 lg:p-14 border border-sanctuary-sandstone/60 shadow-xl relative overflow-hidden">
          {/* Ghost Watermark Behind */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
            <span className="font-serif-luxury text-[140px] lg:text-[220px] tracking-[0.2em] text-sanctuary-charcoal">
              STILLNESS
            </span>
          </div>

          {/* Top Atelier Header Details */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-sanctuary-sandstone/50 pb-6 mb-12 gap-3">
            <div className="text-[11px] uppercase tracking-[0.25em] font-semibold text-sanctuary-darkOlive flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-sanctuary-terracotta"></span>
              <span>Xanso.Fitness / The Art of Yoga</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-sanctuary-bronze font-mono">
              ✦ Culture × Craft × Balance
            </div>
          </div>

          {/* Central Curated Artwork & Geometry Showcase */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Layered Cards Structure */}
            <div className="relative w-full max-w-md my-4">
              {/* Background Border Card Layer */}
              <div className="absolute -top-4 -left-4 -right-4 -bottom-4 rounded-[42px] border border-sanctuary-sandstone/40 -z-10 pointer-events-none"></div>

              {/* Centerpiece Arch Artwork Container */}
              <div className="arch-frame overflow-hidden bg-sanctuary-parchment border-2 border-sanctuary-sandstone/60 shadow-2xl relative aspect-[3/4] flex items-center justify-center p-3">
                <img
                  alt="Sacred Sukhasana fine art linework meditation yoga emblem with mandala geometry"
                  className="w-full h-full object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoWUYvIpzkOqZyihfRJ6bMCoQK7wtsfAhVG74-XvjvucoCxX90XM5erfYUgRvdgDusVV6OYkdoeMlPOsJl2zowxc_RmCLY-Br2K4bRs3LevXPuh67irb3RkMjtkhSM2UKFk4yldJNGfa7ov2gbXazTf6XkownbdPor-QgxA_AZ6Bf0JUJEvQIH7jy_XAjTwfi6VqSdnNgiuG-SPmDI8J6x67TQg3GEUP444S3Xd9Uq_STxQvPBQEG1"
                />

                {/* Top Floating Emblem Badge */}
                <div className="absolute top-6 inset-x-0 flex justify-center">
                  <div className="glass-pill px-4 py-1.5 rounded-full text-[10px] tracking-[0.24em] uppercase text-sanctuary-darkOlive font-medium shadow-xs">
                    ✦ Ananda Sukhasana · Sacred Stillness ✦
                  </div>
                </div>

                {/* Lower Tilted Stamp Card */}
                <div className="absolute bottom-6 -right-2 transform rotate-[-3deg] bg-sanctuary-cream/95 px-5 py-3 rounded-lg border border-sanctuary-sandstone shadow-md">
                  <p className="font-serif-luxury italic text-xs text-sanctuary-terracotta font-medium">
                    Sculpted in timeless devotion
                  </p>
                  <p className="text-[9px] uppercase tracking-widest text-sanctuary-muted font-mono mt-0.5">
                    Jaipur Atelier Record
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Plaque Section */}
            <div className="text-center mt-12 max-w-xl">
              <div className="inline-block border-y-2 border-sanctuary-sandstone/70 py-3 px-10 mb-4">
                <span className="font-serif-luxury text-2xl lg:text-3xl tracking-[0.24em] uppercase text-sanctuary-darkOlive font-semibold">
                  Timeless in Every Form
                </span>
              </div>
              <h3 className="font-serif-luxury text-3xl lg:text-4xl text-[#1f1d1a] font-medium tracking-wide mb-3">
                Ancient Wisdom. Modern Wellness.
              </h3>
              <p className="text-sanctuary-darkOlive text-sm tracking-widest uppercase font-medium">
                Rooted in authentic tradition · Dedicated to conscious feminine vitality
              </p>
            </div>
          </div>

          {/* Bottom Atelier Barcode & Lineage Ribbon */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between border-t border-sanctuary-sandstone/50 pt-6 mt-12 text-[10px] uppercase tracking-[0.2em] text-sanctuary-muted gap-4 font-mono">
            <div>❖ Rajasthan · Tamil Nadu Yoga Parampara Lineage</div>
            <div className="flex items-center space-x-3">
              <span className="tracking-widest">ARCHIVE // NO. 08</span>
              <span>•</span>
              <span>JAIPUR SANCTUARY</span>
            </div>
            <div>MMXXV SANCTUARY COLLECTION ❖</div>
          </div>
        </div>
      </div>
    </section>
  );
}

