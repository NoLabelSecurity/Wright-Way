# Wright-Way Services LLC - Project Memory & Log

This document acts as the persistent, historical "system memory" for the Wright-Way Services LLC web application, detailing why architectural modifications were made, how problems were resolved, and outlining the long-term developmental roadmap.

---

## 1. System Engineering Log & Milestones

### Milestone 1: Initial Brand & Blueprint Launch
* **Action:** Established the core dark-navy and emerald-green blueprint aesthetic.
* **Rational:** Conveyed the feeling of a code-compliant residential builder who prioritizes structure and safety.
* **Outcomes:** Implemented smooth single-page scrolling, modern Lucide icons, glassmorphic headers, and modular layouts.

### Milestone 2: Interactive Project Gallery Elevation
* **Action:** Increased the vertical height of all project gallery album cards by **25%** (`h-[225px]` on mobile / `h-[250px]` on desktop).
* **Rational:** Standard rectangular cards were cutting off rich imagery. A 25% height boost gives photography generous breathing room, creating an immersive, publication-grade layout.
* **Outcomes:** Dramatically improved overall visual rhythm and heightened CTA engagement within the gallery.

### Milestone 3: Map Section Accessibility & Focus Upgrades
* **Action:** Restructured the regional selector in `/src/components/MapSection.tsx` to support selectable text, smooth coordinates transitions, a custom Lexington "HQ" badge, and explicit county indicators.
* **Rational:** 
  1. Customers must be able to select and copy city names or zip codes without the map jumping immediately.
  2. Clear HQ markers visually reassure clients of the physical hub (Lexington).
  3. Interactive county indicators make local South Carolina building regulations and inspection bounds clear.
* **Outcomes:** Converted the location elements from raw `<button>` controls to highly accessible, keyboard-focusable and copyable elements. Added a text selection guard to prevent erratic re-renders, and integrated county boundary status banners.

---

## 2. Solved Engineering Hurdles

### Issue: Modal/Lightbox Scroll Bleed
* **Symptom:** Opening a service modal or image lightbox still allowed users to scroll the main body content in the background, creating visual misalignment.
* **Resolution:** Injected a React hook inside `Services.tsx` and `Gallery.tsx` that binds to the open state. Upon activation, it sets `#app-wrapper` and `document.body.style.overflow` to `'hidden'`, reverting back to `'unset'` on close. This completely eliminates background scroll bleed.

### Issue: HMR Interference During Development
* **Symptom:** Fast writing of files was triggering immediate hot reloads, causing flickering inside the iframe preview.
* **Resolution:** Confirmed configuration of `DISABLE_HMR=true` inside the developer environment. This allows complete code structures to build successfully before rendering, ensuring a clean development workflow.

---

## 3. Future Architectural Roadmap

### Phase 1: Automated Email / SMS Lead Dispatching
* Integrate `EmailJS` or a server-side proxy route `/api/quote` to automatically parse and route form submissions directly to Robert's smartphone as an SMS or formatted email, eliminating latency in customer response times.

### Phase 2: Live Calendar & Scheduling Integration
* Integrate Google Calendar or a scheduling SDK into the `ContactForm` so that clients can instantly view Robert's real-time inspection availability and block out 3-hour walk-through sessions dynamically.

### Phase 3: Headless CMS Image Synchronization
* Connect the `Gallery` module to a lightweight headless CMS (e.g., Sanity.io or Strava API/Cloud Storage) so that Robert can upload newly completed kitchen, bath, or inspection photos directly from his smartphone on the job site without editing code.
