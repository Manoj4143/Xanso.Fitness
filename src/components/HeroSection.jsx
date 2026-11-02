import React from 'react';
import heroImg from '../assets/hero-yoga-indian.jpg';

export default function HeroSection({ onExploreClick, onJoinClick }) {
  return (
    <section className="relative min-h-[750px] lg:min-h-[88vh] flex items-center overflow-hidden bg-sanctuary-ivory" data-purpose="hero-section">
      {/* Full-Bleed Background Image of Indian lady doing yoga */}
      <img
        src={heroImg}
        alt="Indian woman practicing yoga meditation in a sunlit Rajasthani courtyard"
        className="absolute inset-0 w-full h-full object-cover object-right lg:object-center pointer-events-none -z-0"
      />

      {/* Soft gradient: Keeps the text crystal clear on the left while prominently showing the lady on the right */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#F7F2E9] via-[#F7F2E9]/75 to-transparent sm:via-[#F7F2E9]/60 md:to-transparent pointer-events-none z-1" 
      />
      <div 
        className="absolute inset-0 bg-gradient-to-t from-[#F7F2E9]/80 via-transparent to-transparent pointer-events-none z-1" 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            {/* Category Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-sanctuary-parchment/90 border border-sanctuary-sandstone/80 text-sanctuary-darkOlive text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-8 shadow-xs backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sanctuary-bronze"></span>
              <span>Xanso.Fitness Sanctuary</span>
            </div>

            {/* Main Heading with Serifs */}
            <h1 className="font-serif-luxury text-6xl sm:text-7xl lg:text-8xl leading-[1.05] text-[#1f1d1a] tracking-tight mb-5 font-semibold">
              Breathe. Move.<br />
              <span className="italic font-normal text-sanctuary-terracotta">Become.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="font-serif-luxury text-3xl lg:text-4xl italic font-medium tracking-wide mb-6 text-sanctuary-darkOlive">
              Your space. Your strength.
            </h2>

            {/* Paragraph with heightened readability & dark rich charcoal */}
            <p className="text-[#201e1a] text-lg lg:text-xl leading-relaxed max-w-2xl mb-10 font-normal">
              A dedicated sanctuary sculpted in sandstone hush and filtered sunlight. Sacred feminine alignment, classical breath, and sovereign stillness designed exclusively for women.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-5 mb-14">
              <a
                href="#timings"
                onClick={onExploreClick}
                className="bg-sanctuary-olive hover:bg-sanctuary-darkOlive text-sanctuary-cream text-base uppercase tracking-widest font-semibold px-9 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Explore Classes
              </a>
              <a
                href="#membership"
                onClick={onJoinClick}
                className="bg-sanctuary-cream/90 hover:bg-white text-sanctuary-darkOlive border-2 border-sanctuary-sandstone text-base uppercase tracking-widest font-semibold px-9 py-4 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
              >
                Join Us
              </a>
            </div>

            {/* Authenticity Endorsement Footnote */}
            <div className="flex items-center space-x-3 text-sm tracking-[0.2em] font-medium uppercase text-sanctuary-darkOlive border-t border-sanctuary-sandstone/60 pt-6 w-full max-w-lg">
              <span className="material-symbols-outlined text-sanctuary-terracotta text-2xl">spa</span>
              <span>Rooted in authentic tradition · Dedicated to feminine vitality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Architectural Provenance Badge (Lower Right) */}
      <div className="absolute bottom-8 right-6 lg:right-12 z-20 hidden md:block">
        <div className="glass-pill rounded-full px-5 py-3 flex items-center space-x-4 shadow-lg border border-sanctuary-sandstone/50">
          <div className="flex items-center space-x-2.5 text-sanctuary-charcoal">
            <span className="material-symbols-outlined text-sanctuary-terracotta text-lg">wb_sunny</span>
            <span className="font-serif-luxury font-medium text-sm tracking-wide text-sanctuary-charcoal">
              Jodhpur Sandstone Sanctuary
            </span>
          </div>
          <span className="text-xs font-mono font-medium tracking-wider text-sanctuary-bronze">06:30 AM</span>
        </div>
      </div>
    </section>
  );
}
