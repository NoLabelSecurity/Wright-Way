# Wright-Way Services LLC - Features Documentation

This document catalogs and describes the interactive feature modules built into the Wright-Way Services LLC web platform, along with their UX design intent and technical implementations.

---

## 1. Global Navigation Header & Mobile Drawer (`Header.tsx`)
* **Visual Presentation:** Sleek, glassmorphic floating design anchored to the top of the viewport. Built with a blurred background (`backdrop-blur-md`) and subtle transparency overlays (`bg-navy-default/80`) to guarantee high-end readability on top of active sections.
* **Responsive Control:** Displays clear, horizontal nav options on desktop, transitioning into an overlay sliding drawer menu on mobile devices.
* **Navigation Links:** Smooth scrolling (`scroll-smooth`) anchors linking to: `#home`, `#services`, `#gallery`, `#about`, and `#contact`.

---

## 2. Dynamic Hero Stage (`Hero.tsx`)
* **Design Philosophy:** Captures attention immediately using a high-impact headline: *"Built Wright. Inspected Wright."*
* **High-Conversion Framing:** Features two prominent CTA buttons:
  * **Primary:** `Get a Quote` (scrolls to `#contact`)
  * **Secondary:** `View Our Work` (scrolls to `#gallery`)
* **Credibility Indicator:** Displays floating stats badges indicating 100% Satisfaction, State Licensed Inspectors, and 15+ Years Field Experience to build instant trust with first-time visitors.

---

## 3. Comprehensive Services Grid & Detailed Modals (`Services.tsx`)
* **Core Cards:** Organizes Robert's specialties into 6 grid items:
  1. **Home Inspections** (RBI #49302 licensed inspections)
  2. **Kitchen, Bath & Full Renovations** (Inspector-grade master carpentry)
  3. **Radon, Mold & Moisture Diagnostics** (Lab-certified testing)
  4. **Structural Wood Rot & Handyman Care** (Root-cause remediation)
  5. **Custom Additions & Extensions** (ADUs, porches, extensions)
  6. **Expert Contractor Oversight & Planning** (Unbiased consulting and codes coaching)
* **The "Learn More" Modal System:** Clicking on any service opens a high-fidelity modal detailing:
  * **Description:** In-depth paragraphs explaining the scope.
  * **Timeline Stats:** Typical completion timeframes (e.g., 2-4 hours for inspections, 4-12 weeks for additions).
  * **Service Checklists:** Accurate, check-marked items mapping coverage.
  * **The Wright-Way Process:** Staggered, numbered steps detailing the physical execution flow.
  * **The Wright-Way Difference:** Hand-crafted quote by Robert Wright detailing the specific structural caution applied.
* **Modal Accessibility:** Includes full background backdrop blurs, keyboard escape bindings, scrollbar containment, and spring animations via Framer Motion.

---

## 4. Enhanced Project Gallery & Slider (`Gallery.tsx`)
* **Increased Gallery Card Height (+25%):** Gallery album covers are styled with a **25% height boost** (`h-[225px]` on mobile, `h-[250px]` on desktop/tablet) to maximize visual presence, giving the project photography a dominant, luxurious, and highly scannable visual footprint.
* **Album Inspector:** Clicking on a category card (Kitchen Remodels, Bathroom Renovation, Deck & Additions, Home Inspections) opens an immersive, fullscreen carousel displaying high-resolution project captures.
* **Before/After Comparison Slider (`BeforeAfterSlider.tsx`):** An interactive double-image container allowing users to drag a split-line handle left and right to inspect a real-world home transformation (pre-renovation vs. final finish). Fully touch-responsive and keyboard accessible.

---

## 5. Service Areas Map & Boundaries (`MapSection.tsx`)
* **Map Focus Interaction:** The "Areas We Cover" panel features 5 South Carolina Midlands locations (Lexington, Columbia, West Columbia, Richland County, and Batesburg-Leesville, SC).
* **Selectable Elements:** All location text, subtexts, and badges are kept **strictly selectable (`select-text`)** to allow users to easily copy geographical terms, city names, or zip codes for reference.
* **On-Click Focus Change:** Clicking a location instantly updates the active state and loads a custom county-bounded satellite/political map focused precisely on that region.
* **Lexington HQ Badge:** Visually designates Lexington, SC with a custom, glowing **HQ** badge, pointing out Wright-Way's physical home base.
* **County Boundary Display:** Displays a prominent, floating active status badge: *"Showing: <County Name> Boundary"* to give immediate context of local zoning and regulatory compliance.

---

## 6. High-Conversion Quote Request Form (`ContactForm.tsx`)
* **Direct Input Validation:** Collects critical project details: full name, phone number, email address, property address, selected service type, and project details.
* **Status Feedback:** Interactive hover states, active input glow accents matching the emerald theme, and immediate validation feedback.

---

## 7. Floating Click-to-Call Conversion (`App.tsx`)
* **Behavior:** A floating button anchored persistently at the bottom-right of the screen (`Call Now: 803-530-3722`).
* **Micro-Animations:** Features a subtle entrance bounce, glowing action pulse shadow (`shadow-[0_15px_30px_rgba(34,197,94,0.3)]`), and responsive hover-scaling to drive direct phone call leads on mobile devices.
