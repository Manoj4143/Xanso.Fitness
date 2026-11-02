import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-sanctuary-ivory border-t border-sanctuary-sandstone/40 pt-16 pb-12 text-sanctuary-charcoal" data-purpose="site-footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-sanctuary-sandstone/40">
          {/* Brand Narrative (5 cols) */}
          <div className="lg:col-span-5">
            <div className="font-serif-luxury text-3xl font-semibold text-sanctuary-darkOlive mb-3">
              Xanso.Fitness
            </div>
            <p className="font-serif-luxury italic text-base text-sanctuary-muted max-w-sm leading-relaxed mb-6">
              A mindful movement sanctuary for the sovereign woman. Rooted in ancient rhythm, framed in architectural stillness.
            </p>
            <div className="flex items-center space-x-2 text-xs tracking-widest uppercase font-medium text-sanctuary-bronze">
              <span className="material-symbols-outlined text-base">location_on</span>
              <span>The Stone Colonnade, Jaipur Court</span>
            </div>
          </div>

          {/* Timings (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.24em] font-semibold text-sanctuary-bronze mb-4">
              Courtyard Timings
            </h4>
            <ul className="space-y-2.5 text-xs text-sanctuary-charcoal/80 font-light">
              <li className="flex justify-between">
                <span>Dawn Prana:</span>
                <span className="font-medium text-sanctuary-darkOlive">05:45 – 08:30</span>
              </li>
              <li className="flex justify-between">
                <span>Solar Flow:</span>
                <span className="font-medium text-sanctuary-darkOlive">10:00 – 12:30</span>
              </li>
              <li className="flex justify-between">
                <span>Twilight Yin:</span>
                <span className="font-medium text-sanctuary-darkOlive">17:30 – 19:45</span>
              </li>
              <li className="flex justify-between">
                <span>Silent Meditation:</span>
                <span className="font-medium text-sanctuary-darkOlive">Daily at Dusk</span>
              </li>
            </ul>
          </div>

          {/* Sanctuary Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.24em] font-semibold text-sanctuary-bronze mb-4">
              Sanctuary
            </h4>
            <ul className="space-y-2 text-xs text-sanctuary-charcoal/80 font-light">
              <li>
                <a className="hover:text-sanctuary-terracotta transition-colors" href="#timings">
                  Timings Ledger
                </a>
              </li>
              <li>
                <a className="hover:text-sanctuary-terracotta transition-colors" href="#instructors">
                  The Masters
                </a>
              </li>
              <li>
                <a className="hover:text-sanctuary-terracotta transition-colors" href="#membership">
                  Tiers &amp; Passes
                </a>
              </li>
              <li>
                <a className="hover:text-sanctuary-terracotta transition-colors" href="#art-of-stillness">
                  Atelier Archive
                </a>
              </li>
            </ul>
          </div>

          {/* Quietude (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.24em] font-semibold text-sanctuary-bronze mb-4">
              Quietude
            </h4>
            <ul className="space-y-2 text-xs text-sanctuary-charcoal/80 font-light">
              <li>
                <span className="hover:text-sanctuary-terracotta cursor-pointer transition-colors">
                  Private Solarium
                </span>
              </li>
              <li>
                <span className="hover:text-sanctuary-terracotta cursor-pointer transition-colors">
                  Ayurvedic Tea Room
                </span>
              </li>
              <li>
                <span className="hover:text-sanctuary-terracotta cursor-pointer transition-colors">
                  Pranayama Garden
                </span>
              </li>
              <li>
                <span className="hover:text-sanctuary-terracotta cursor-pointer transition-colors">
                  Sanctuary Library
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-sanctuary-muted font-light gap-4">
          <div>
            © 2025 Xanso.Fitness Sanctuary. All sovereign rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-[11px] tracking-wider uppercase">
            <a className="hover:text-sanctuary-darkOlive transition-colors" href="#">
              Privacy Sanctuary
            </a>
            <span>·</span>
            <a className="hover:text-sanctuary-darkOlive transition-colors" href="#">
              Terms of Stillness
            </a>
            <span>·</span>
            <a className="hover:text-sanctuary-darkOlive transition-colors" href="#">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

