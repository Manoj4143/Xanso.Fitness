import React from 'react';

const PLANS = [
  {
    id: "drop-in",
    title: "Drop-In",
    tagline: "Singular sanctuary arrival for visitors and focused individual practice.",
    price: "₹299",
    period: "/ session",
    featured: false,
    features: [
      "1 Studio session pass",
      "Heritage mat & organic cotton towel",
      "Post-practice herbal decoction"
    ]
  },
  {
    id: "monthly",
    title: "Monthly",
    badge: "Most Beloved Ritual",
    tagline: "Continuous feminine vitality, habitual movement, and communal quietude.",
    price: "₹1,499",
    period: "/ month",
    featured: true,
    features: [
      "Unlimited daily studio access",
      "Weekly pranayama & sound bath immersions",
      "Priority ritual mat reservation",
      "Herbal apothecary pantry access"
    ]
  },
  {
    id: "premium",
    title: "Premium",
    tagline: "The pinnacle experience of personalized restorative care and deep alignment.",
    price: "₹2,499",
    period: "/ month",
    featured: false,
    features: [
      "Full unlimited all-sanctuary access",
      "Monthly 1-on-1 Ayurvedic dosha alignment",
      "Dedicated personal locker & mat space",
      "Private moon solstice retreat invites"
    ]
  }
];

export default function MembershipSection({ onSelectPlan }) {
  return (
    <section className="py-24 bg-sanctuary-ivory relative" data-purpose="membership-plans" id="membership">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.28em] font-bold text-sanctuary-bronze block mb-2">
            Sanctuary Membership
          </span>
          <h2 className="font-serif-luxury text-5xl lg:text-6xl text-[#1f1d1a] font-semibold tracking-tight mb-4">
            Choose Your Practice.
          </h2>
          <p className="text-[#201e1a] text-lg lg:text-xl leading-relaxed font-normal">
            Immerse yourself into rhythmic self-devotion. Every tier includes access to our sunlit stone courtyards, changing suites, and restorative apothecary.
          </p>
        </div>

        {/* 3 Membership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan) => {
            if (plan.featured) {
              return (
                <div
                  key={plan.id}
                  className="relative bg-sanctuary-olive rounded-3xl p-8 lg:p-10 text-sanctuary-cream shadow-2xl flex flex-col justify-between transform lg:-translate-y-3 border-2 border-sanctuary-olive hover:shadow-3xl transition-all"
                >
                  {/* Floating Pill Badge */}
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span className="bg-[#F5DEC7] text-sanctuary-darkOlive text-xs uppercase font-bold tracking-[0.2em] px-4 py-1.5 rounded-full shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif-luxury text-3xl lg:text-4xl font-semibold text-sanctuary-cream mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-sanctuary-cream/90 text-sm font-normal leading-relaxed mb-6">
                      {plan.tagline}
                    </p>
                    {/* Pricing */}
                    <div className="flex items-baseline space-x-1 border-b border-sanctuary-sandstone/30 pb-6 mb-8">
                      <span className="font-serif-luxury text-5xl lg:text-6xl font-bold text-sanctuary-cream">
                        {plan.price}
                      </span>
                      <span className="text-sm text-sanctuary-cream/80 font-medium tracking-wider ml-1">
                        {plan.period}
                      </span>
                    </div>
                    {/* Features */}
                    <ul className="space-y-4 text-sm text-sanctuary-cream mb-8 font-medium">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <span className="material-symbols-outlined text-[#F5DEC7] text-xl">
                            check_circle
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className="w-full py-4 px-6 rounded-full bg-sanctuary-cream hover:bg-white text-sanctuary-darkOlive text-sm uppercase tracking-widest font-bold transition-all shadow-md cursor-pointer hover:shadow-lg"
                  >
                    Choose Plan
                  </button>
                </div>
              );
            }

            return (
              <div
                key={plan.id}
                className="bg-sanctuary-cream rounded-3xl p-8 lg:p-10 border border-sanctuary-sandstone/50 shadow-sm flex flex-col justify-between hover:border-sanctuary-bronze hover:shadow-md transition-all"
              >
                <div>
                  <h3 className="font-serif-luxury text-3xl lg:text-4xl font-semibold text-[#1f1d1a] mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-sanctuary-darkOlive text-sm font-normal leading-relaxed mb-6">
                    {plan.tagline}
                  </p>
                  {/* Pricing */}
                  <div className="flex items-baseline space-x-1 border-b border-sanctuary-sandstone/40 pb-6 mb-8">
                    <span className="font-serif-luxury text-5xl lg:text-6xl font-bold text-[#1f1d1a]">
                      {plan.price}
                    </span>
                    <span className="text-sm text-sanctuary-darkOlive font-medium tracking-wider ml-1">
                      {plan.period}
                    </span>
                  </div>
                  {/* Features */}
                  <ul className="space-y-4 text-sm text-[#1f1d1a] mb-8 font-medium">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <span className="material-symbols-outlined text-sanctuary-olive text-xl">
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => onSelectPlan(plan)}
                  className="w-full py-4 px-6 rounded-full bg-sanctuary-parchment hover:bg-[#E3D7C5] text-sanctuary-darkOlive text-sm uppercase tracking-widest font-semibold border border-sanctuary-sandstone transition-colors cursor-pointer"
                >
                  Choose Plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

