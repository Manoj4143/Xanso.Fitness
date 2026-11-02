import React, { useState } from 'react';

export default function Header({ onBookClick, onJoinClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sanctuary-ivory/90 backdrop-blur-md border-b border-sanctuary-sandstone/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo Branding */}
        <a className="flex flex-col group cursor-pointer" href="#" data-purpose="brand-logo">
          <span className="font-serif-luxury text-2xl lg:text-3xl font-semibold tracking-tight text-sanctuary-darkOlive group-hover:text-sanctuary-terracotta transition-colors">
            Xanso.Fitness
          </span>
          <span className="text-[9px] uppercase tracking-[0.28em] font-medium text-sanctuary-bronze -mt-1">
            Women's Sanctuary
          </span>
        </a>

        {/* Primary Navigation Links */}
        <nav className="hidden md:flex items-center space-x-9 text-[13px] tracking-wider font-medium text-sanctuary-charcoal/80" data-purpose="desktop-nav">
          <a className="hover:text-sanctuary-terracotta transition-colors" href="#practice-guide">
            Guidelines
          </a>
          <a className="hover:text-sanctuary-terracotta transition-colors" href="#timings">
            Timings
          </a>
          <a className="hover:text-sanctuary-terracotta transition-colors" href="#instructors">
            Instructors
          </a>
          <a className="hover:text-sanctuary-terracotta transition-colors" href="#art-of-stillness">
            Atelier
          </a>
          <a className="hover:text-sanctuary-terracotta transition-colors" href="#cinematic-flow">
            Experience
          </a>
          <a className="hover:text-sanctuary-terracotta transition-colors" href="#membership">
            Membership
          </a>
        </nav>

        {/* Header Action CTAs */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onJoinClick}
            className="hidden sm:inline-block bg-sanctuary-olive hover:bg-sanctuary-darkOlive text-sanctuary-cream text-xs uppercase tracking-widest font-medium px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            Join Now
          </button>
          
          <button
            aria-label="Member Profile"
            onClick={onJoinClick}
            className="w-10 h-10 rounded-full bg-sanctuary-darkOlive flex items-center justify-center text-sanctuary-cream hover:bg-sanctuary-olive transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-sanctuary-darkOlive focus:outline-none p-1.5"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sanctuary-cream/98 border-b border-sanctuary-sandstone/40 px-6 py-6 transition-all shadow-lg">
          <nav className="flex flex-col space-y-4 text-sm font-medium tracking-wide text-sanctuary-charcoal">
            <a 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-sanctuary-terracotta py-1" 
              href="#practice-guide"
            >
              Guidelines
            </a>
            <a 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-sanctuary-terracotta py-1" 
              href="#timings"
            >
              Timings
            </a>
            <a 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-sanctuary-terracotta py-1" 
              href="#instructors"
            >
              Instructors
            </a>
            <a 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-sanctuary-terracotta py-1" 
              href="#art-of-stillness"
            >
              Atelier
            </a>
            <a 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-sanctuary-terracotta py-1" 
              href="#cinematic-flow"
            >
              Experience
            </a>
            <a 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-sanctuary-terracotta py-1" 
              href="#membership"
            >
              Membership
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinClick();
              }}
              className="mt-2 text-center bg-sanctuary-olive hover:bg-sanctuary-darkOlive text-sanctuary-cream text-xs uppercase tracking-widest font-medium py-3 rounded-full shadow-sm"
            >
              Join Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

