# Wright-Way Services LLC - Developer Documentation

This document provides developers with a deep structural look at the components, state mechanics, visual styling primitives, and rendering flows.

---

## 1. System Component Hierarchy

The application runs as a modular, single-view Single Page Application (SPA) structured as follows:

```text
App.tsx (Main Layout & Floating Call Widget)
│
├── Header.tsx (Global Nav, Brand Logo & Contact Line)
│
├── Hero.tsx (Main Splash Banner, CTAs & Value-Add Badges)
│
├── Services.tsx (Grid of Service Cards)
│   └── AnimatePresence (Dynamic detail overlay Modals)
│
├── Gallery.tsx (Album grid with 25% height-boost)
│   ├── AnimatePresence (Album-specific image carousels)
│   └── BeforeAfterSlider.tsx (Interactive side-by-side comparison slider)
│
├── About.tsx (Biographical text & Credentials layout)
│   └── MapSection.tsx (Geographic list & Interactive Map rendering)
│
├── Reviews.tsx (Testimonials carousel/grid)
│
├── ContactForm.tsx (Lead capture form with input validation)
│
└── Footer.tsx (Secondary navigation, office details & credit line)
```

---

## 2. Component Design & State Contracts

### Services Module (`Services.tsx`)
* **Purpose:** Handles the presentation of the 6 core business divisions.
* **State Hook:** `selectedService` (holds `ServiceCardData` or `null` to toggle the detail overlay).
* **Scroll Lock Side-Effect:** A `useEffect` hook monitors the state of `selectedService`. When active, it programmatically injects `overflow: hidden` onto the document body and primary wrapper (`#app-wrapper`) to lock vertical page scroll and ensure smooth modal exploration. Reverts on close.

### Gallery Showcase (`Gallery.tsx`)
* **Purpose:** Provides visual proof of structural mastery.
* **State Hooks:**
  * `activeAlbum` (holds `GalleryAlbum` or `null` for full-album lightboxes).
  * `currentImgIndex` (integer, tracks current slides in active album carousels).
* **Integration:** Connects to the child `BeforeAfterSlider.tsx` which manages its own internal drag percent via a single mouse/touch relative calculation.

### Map Section (`MapSection.tsx`)
* **Purpose:** Allows users to focus the map on target cities in the SC Midlands.
* **State Hook:** `selectedLoc` (tracks selected `LocationInfo` matching geographic coordinates).
* **Ref Hook:** `iframeContainerRef` (smoothly scrolls the map frame into view on selection).
* **Text Selection Guard:** Integrates a programmatic check using `window.getSelection()?.toString()` before invoking map updates to prevent map jumps when a client is selecting or copying geographic text.

### Contact Lead Engine (`ContactForm.tsx`)
* **Purpose:** Validates and processes user service inquiries.
* **State Hooks:**
  * `formData` (object tracking user inputs).
  * `isSubmitting` (boolean tracking submission state).
  * `submitStatus` (tracks `'success'`, `'error'`, or `null` feedback loops).

---

## 3. Styling & Color Systems

The style system uses **Tailwind CSS 4.0** with specific configuration:

```css
@theme {
  --color-brand-default: #22C55E;  /* Emerald Green representing safety */
  --color-brand-accent: #10B981;   /* Mint Accent representing precision */
  --color-navy-default: #020617;   /* High contrast structural background */
  --color-navy-light: #0B132B;     /* Card background values */
  --color-charcoal: #0F172A;       /* Alternate section backgrounds */
}
```

### Aesthetic Utilities
* **Blueprint Grids (`blueprint-grid`):** Custom CSS class declared in `/src/index.css` representing engineering draftsman blueprint grid overlays, creating a subtle technical accent.
* **Button Gradients (`btn-gradient`):** A custom layout animation class that blends emerald green shades together with smooth transitions.

---

## 4. Animation Strategy
* Powered exclusively by `motion` from `motion/react`.
* **AnimatePresence:** Orchestrates entry/exit transitions for modals, lightboxes, and sliding drawers, preventing jarring DOM pops.
* **Transition Physics:** Built around spring parameters (`type: "spring", stiffness: 300, damping: 30`) to model real-world physical deceleration.
