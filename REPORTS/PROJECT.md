# Wright-Way Services LLC - Project Specification

## 1. Executive Summary
**Wright-Way Services LLC** is a premium, high-conversion full-stack digital platform representing a premier residential services firm in the South Carolina Midlands (Lexington, Columbia, and surrounding areas). Founded and operated by **Robert Wright**, a dual-certified expert—**State-Licensed Home Inspector (#RBI 49581)** and veteran **Structural Framing Builder** with 15+ years of custom building experience—the business operates on a strict core principle: *Do it the right way, or don't do it at all.*

This web application serves as a high-performance marketing and informational hub. It is engineered to bridge the gap between rigorous, code-compliant property investigations and expert-level structural carpentry and remodeling.

---

## 2. Business Objectives & Goals
* **Establish Instant Trust:** Leverage Robert’s dual credentials (inspector + builder) to convey absolute authority and competence, distancing Wright-Way from unlicensed handyman setups or corporate franchise inspectors.
* **Generate High-Quality Leads:** Drive organic client intake through strategic calls-to-action (CTAs), a floating click-to-dial conversion mechanism, and a thorough electronic quote request system.
* **Demonstrate Quality Craftsmanship:** Show off real-world transformations through a highly interactive project gallery featuring high-resolution albums and visual before/after sliders.
* **Educate the Local Market:** Provide potential home buyers, sellers, and renovators with a transparent look into typical timelines, pricing, compliance guidelines, and the custom "Wright-Way Process" for home services.

---

## 3. Brand Identity & Visual Aesthetic
The platform’s user interface is themed around **Blueprint Modernism**—combining a precise, technical "builder" feel with elegant, clean luxury finishes.

* **Primary Palette:** Deep Navy (`#020617` / `#0B132B`) as a high-trust, structural background.
* **Accent Palette:** Vibrant Emerald/Mint Green (`#22C55E` / `#10B981`) symbolizing energy, growth, precision safety, and positive completions.
* **Secondary Neutrals:** Crisp charcoal-grays, soft off-whites, and transparent glassmorphic overlays for modern, eye-safe, and highly accessible reading.
* **Typography Pairing:** Modern geometric **Space Grotesk** for display headers (technical precision) paired with **Inter** for clean body readability, and **JetBrains Mono** for status flags and technical credentials.

---

## 4. Technical Architecture Overview
* **Runtime & Framework:** React 18+ bootstrapped with Vite, utilizing TypeScript for absolute compile-time type safety.
* **Styles & Layout:** Responsive, desktop-first precision with mobile-first Tailwind CSS utility declarations. Zero external layout sheets.
* **Interactive Animation:** Fluid transitions, modal entries, before/after dragging, and slider carousels powered by Framer Motion (`motion/react`).
* **Icons & Vector Elements:** Scalable, lightweight vector graphics sourced dynamically from `lucide-react`.
* **Lead Capturing:** Front-end form validations that feed into a structured, easily-routable client query object.
* **Geographical Mapping:** Custom interactive maps highlighting the South Carolina Midlands region (Lexington County & Richland County) with responsive bounding focus on selected service cities.
