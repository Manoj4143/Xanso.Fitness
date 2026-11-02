# Xanso.Fitness — Women's Sanctuary 🌿✨

An elegant, luxury wellness and yoga sanctuary website designed for women, built with modern frontend tools (**React 19**, **Vite 6**, and **Tailwind CSS v4**). 

This project is a reproduction and componentization of the Stitch design: **[Xanso Fitness Wellness Sanctuary](https://stitch.withgoogle.com/preview/9111512219782995533?node-id=6d6887cac5964846b36a2ad7f263314e)**.

---

## 🎨 Design & Aesthetic System

The design combines calm heritage architecture (Rajasthani sandstone colonnades, courtyard hush) with high-end editorial aesthetics tailored specifically for mindful movement:

- **Typography**: 
  - *Serif*: `Cormorant Garamond` (classic, luxury editorial feel)
  - *Sans*: `Plus Jakarta Sans` (clean, modern legibility)
- **Palette**:
  - `sanctuary-ivory`: `#F7F2E9` (warm background)
  - `sanctuary-cream`: `#FCF9F3` (card surfaces)
  - `sanctuary-parchment`: `#EEE5D7` (subtle containers)
  - `sanctuary-sandstone`: `#D4C0A7` (accents & borders)
  - `sanctuary-olive`: `#394735` (primary interactive green)
  - `sanctuary-darkOlive`: `#292F25` (deep contrast)
  - `sanctuary-terracotta`: `#B86A4B` (warm focal highlights)
  - `sanctuary-bronze`: `#98744D` (metadata badges & timestamps)
- **Visual Features**:
  - Arch-frame curves (`arch-frame`)
  - Glass-morphism floating status pills (`glass-pill`)
  - Subtle architectural ghost watermarks (`FLOW`, `STILLNESS`)
  - High-resolution authentic imagery and linework geometry

---

## 🚀 Features & Components

1. **Top Navigation Header (`Header.jsx`)**
   - Translucent glass navbar with smooth-scroll anchors (`Timings`, `Instructors`, `Atelier`, `Experience`, `Membership`).
   - "Join Now" and Member Profile action buttons.
   - Mobile-responsive sliding hamburger navigation menu.

2. **Hero Section (`HeroSection.jsx`)**
   - Full-bleed sunlit courtyard imagery with custom legibility gradient masks.
   - Authentic editorial statement: *"Breathe. Move. Become."*
   - Interactive quick-action buttons to explore classes or initiate membership.
   - Floating architectural location badge (*Jodhpur Sandstone Sanctuary · 06:30 AM*).

3. **Editorial Yoga Directives & Guidelines (`InstructionsSection.jsx`)**
   - Poster-style modern layout inspired by geometric studio compositions (*"BEFORE THE PRACTICE — WHERE BREATH MEETS SHAPE"*).
   - Crisp, simple, neat instructions in neat compact typography:
     - `01 / Arrive in Stillness` (15 mins prior, barefoot transition, device silence).
     - `02 / Conscious Breathing` (Dirga pranayama, nasal diaphragmatic flow).
     - `03 / Honor Your Alignment` (Spinal integrity tailored to daily energy).
     - `04 / Hydration & Recovery` (Warm herbal decoctions post-session).
   - Architectural arch imagery layered with slate framing, subtle linear coordinate circles, studio badges, and barcode archive markings.

4. **Sanctuary Ledger / Yoga Timings (`ScheduleSection.jsx`)**
   - Diurnal solar schedule (`06:30 AM`, `08:00 AM`, `05:30 PM`, `06:30 PM`).
   - Arch-framed showcase of *Virabhadrasana II* with pose badge.
   - Interactive "Book" buttons attached to every class slot.

4. **Meet Your Guides (`InstructorsSection.jsx`)**
   - Profiles of master practitioners:
     - **Ananya Sharma** (Classical Hatha & Pranayama · Kaivalyadhama Lineage)
     - **Priya Menon** (Dynamic Vinyasa & Breathwork · Mysore Ashtanga)
     - **Dr. Sumita Rao** (Pelvic Health & Restorative Yoga · Ayurvedic Physician)
   - Experience badges and direct consultation booking hooks.

5. **The Art of Yoga Atelier (`AtelierSection.jsx`)**
   - Centered sacred geometry mandala and *Ananda Sukhasana* linework emblem.
   - Arch card layer with decorative tilted Jaipur atelier record stamp.
   - Lineage archive reference bar.

6. **Cinematic Immersion Video Player (`VideoSection.jsx`)**
   - 4K Ultra HD Surya Prana courtyard practice simulator.
   - Custom playback controls (Play/Pause, Mute/Unmute, interactive seek scrubber bar, timestamps, and fullscreen toggle).

7. **Sanctuary Membership Tiers (`MembershipSection.jsx`)**
   - **Drop-In** (`₹299 / session`): Single studio pass, heritage mat, herbal decoction.
   - **Monthly** (`₹1,499 / month` — *Most Beloved Ritual* highlighted card): Unlimited studio access, weekly sound baths, priority mat reservation.
   - **Premium** (`₹2,499 / month`): All-access, 1-on-1 Ayurvedic dosha alignment, private retreat invites.

8. **Interactive Booking Modal (`BookingModal.jsx`)**
   - Modal triggerable from any class booking, consultation, or membership selection.
   - Captures Name, Email, Phone, Preferred Date, and confirms reservations.

9. **Footer (`Footer.jsx`)**
   - Brand mission statement, Courtyard timings ledger, quick navigation links, quietude rooms, and legal links.

---

## 🛠️ Tech Stack & Setup

- **React 19**
- **Vite 6**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Google Fonts & Material Symbols**

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ or 20+ recommended).

### Installation & Running Locally

1. **Clone or open the project folder**:
   ```bash
   cd INSTESHIP_WEBSITE_YOGA
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open the displayed URL (usually `http://localhost:5173/`) in your browser to view the sanctuary.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   The production-optimized static files will be generated in the `dist/` directory.

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
INSTESHIP_WEBSITE_YOGA/
├── index.html                 # Main HTML with Google Fonts & Material Symbols
├── package.json               # Dependencies and build scripts
├── vite.config.js             # Vite 6 config with Tailwind CSS v4 plugin
├── README.md                  # Project documentation & instructions
└── src/
    ├── App.jsx                # Main application component & modal state
    ├── index.css              # Tailwind theme definitions, colors, arch styles
    ├── main.jsx               # React entry point
    └── components/
        ├── Header.jsx         # Sticky navigation with mobile menu
        ├── HeroSection.jsx    # Hero visual & editorial intro
        ├── ScheduleSection.jsx# Class timetable & posture showcase
        ├── InstructorsSection.jsx # Guide profiles with experience badges
        ├── AtelierSection.jsx # Sacred geometry atelier showcase
        ├── VideoSection.jsx   # Interactive video player with controls
        ├── MembershipSection.jsx # Pricing cards (Drop-In, Monthly, Premium)
        ├── BookingModal.jsx   # Interactive booking & reservation modal
        └── Footer.jsx         # Courtyard timings & footer links
```

