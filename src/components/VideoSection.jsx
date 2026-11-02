import React, { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(38);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    setProgress(Math.min(100, Math.max(0, Math.round(pos * 100))));
  };

  return (
    <section className="py-24 relative bg-sanctuary-cream/90 border-b border-sanctuary-sandstone/40 overflow-hidden" data-purpose="cinematic-video-feature" id="cinematic-flow">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-sanctuary-sandstone/40 pb-6 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-sanctuary-terracotta"></span>
              <span className="text-xs uppercase tracking-[0.26em] font-bold text-sanctuary-bronze">
                04 / CINEMATIC IMMERSION · DAILY MOVEMENT
              </span>
            </div>
            <h2 className="font-serif-luxury text-5xl lg:text-6xl text-[#1f1d1a] font-semibold tracking-tight">
              Sacred Flow in Motion
            </h2>
          </div>
          <p className="font-serif-luxury italic text-lg lg:text-xl text-sanctuary-darkOlive mt-3 md:mt-0 font-medium max-w-lg">
            Experience the meditative grace of classical vinyasa in the quiet courtyards of Jaipur.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-sanctuary-sandstone/50 shadow-2xl bg-sanctuary-parchment group">
          {/* Video Poster Aspect Container */}
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjYvgZPdFRnU36ODpisPAaNR-UOArTPkWM7UCB0MeUPZ1wnA0Yv8DkbkwTu7j0wqQjA3cwnJBMFQB_yHwGuhZz5_RaBVjpnZ9wi0vDV-cwguEJWx6xSALkBvvxVY1FKtnAJr70ahxu8OwYvQysdCsyKoVQtizFvI-Ry5Qbis7CjOnwRS5iCdRZEXEIXuyN1PrGEmbk3ysX9CJsRLgPO8qrtuHxOf-eiRE6-WEUa8oTj5z36ZLe40Lw"
              alt="Cinematic editorial video of graceful Indian woman in ivory linen performing yoga in sunlit Rajasthani courtyard"
              className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ${isPlaying ? 'scale-105 filter brightness-95' : ''}`}
            />

            {/* Subtle Warm Cinematic Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-sanctuary-darkOlive/80 via-transparent to-sanctuary-darkOlive/30 pointer-events-none"></div>

            {/* Top Badges Overlay */}
            <div className="absolute top-6 inset-x-6 flex items-center justify-between pointer-events-none">
              <div className="glass-pill px-4 py-1.5 rounded-full text-[10px] tracking-[0.24em] uppercase text-sanctuary-darkOlive font-semibold shadow-xs backdrop-blur-md">
                ✦ 4K ULTRA HD · CINEMATIC
              </div>
              <div className="glass-pill px-4 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase text-sanctuary-bronze font-mono shadow-xs backdrop-blur-md">
                12:40 MIN · VINYASA PRANA FLOW
              </div>
            </div>

            {/* Central Elegant Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause Video" : "Play Sanctuary Video"}
                className="w-20 h-20 rounded-full bg-sanctuary-cream/90 backdrop-blur-md border border-sanctuary-sandstone text-sanctuary-darkOlive flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-sanctuary-cream transition-all duration-300 group-hover:shadow-sanctuary-terracotta/20 cursor-pointer"
              >
                <span className="material-symbols-outlined text-4xl text-sanctuary-terracotta ml-1">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>
            </div>

            {/* Video Bottom Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-sanctuary-darkOlive/90 via-sanctuary-darkOlive/60 to-transparent flex flex-col gap-3">
              {/* Scrubber Bar */}
              <div
                onClick={handleSeek}
                className="w-full bg-sanctuary-cream/30 h-1.5 rounded-full overflow-hidden cursor-pointer"
              >
                <div
                  className="bg-sanctuary-terracotta h-full rounded-full relative transition-all duration-150"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-sanctuary-cream shadow-sm"></div>
                </div>
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between text-sanctuary-cream text-xs">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={togglePlay}
                    aria-label="Play / Pause"
                    className="hover:text-sanctuary-terracotta transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {isPlaying ? 'pause' : 'play_arrow'}
                    </span>
                  </button>
                  <button
                    onClick={toggleMute}
                    aria-label="Mute / Volume"
                    className="hover:text-sanctuary-terracotta transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {isMuted ? 'volume_off' : 'volume_up'}
                    </span>
                  </button>
                  <span className="text-[11px] font-mono tracking-wider text-sanctuary-cream/80">
                    {isPlaying ? '05:12' : '04:48'} / 12:40
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-sanctuary-cream/70 hidden sm:inline">
                    SURYA PRANA I
                  </span>
                  <button
                    aria-label="Fullscreen"
                    className="hover:text-sanctuary-terracotta transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-xl">fullscreen</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Descriptor Footnote Card */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-sanctuary-parchment/60 border border-sanctuary-sandstone/50 text-xs text-sanctuary-muted">
          <div className="flex items-center space-x-3">
            <span className="material-symbols-outlined text-sanctuary-terracotta text-lg">videocam</span>
            <span className="font-medium text-sanctuary-charcoal">
              Guided by Acharya Ananya Sharma · Diurnal Surya Flow
            </span>
          </div>
          <div className="flex items-center space-x-2 font-mono text-[11px] uppercase tracking-wider text-sanctuary-bronze">
            <span className="material-symbols-outlined text-sm">pin_drop</span>
            <span>Recorded at Mandawa Courtyard, Rajasthan</span>
          </div>
        </div>
      </div>
    </section>
  );
}

