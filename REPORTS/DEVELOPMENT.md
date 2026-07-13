# Wright-Way Services LLC - Development Guide

This document outlines the setup, architecture, styling standards, and building workflow for developers maintaining or expanding the Wright-Way Services LLC codebase.

---

## 1. Getting Started

### Prerequisites
* Node.js (v18.x or higher recommended)
* npm (v9.x or higher)

### Installation
To install project dependencies from `package.json`, run:
```bash
npm install
```

### Dev Server
To spin up the local development server on the mandated port (3000), execute:
```bash
npm run dev
```
*Note: The dev server is pre-configured to bind to `0.0.0.0:3000` for seamless sandbox container ingress.*

---

## 2. Directory Structure
```text
├── REPORTS/               # Project documentation and reports
├── src/
│   ├── components/        # Extracted, modular UI components
│   │   ├── About.tsx             # Owner bio, credentials, and service areas
│   │   ├── BeforeAfterSlider.tsx # Interactive comparison slider
│   │   ├── ContactForm.tsx       # Validation-supported quote request form
│   │   ├── Footer.tsx            # Footer navigation and contact info
│   │   ├── Gallery.tsx           # Multi-album project showcase
│   │   ├── Header.tsx            # Navigation header and mobile drawer
│   │   ├── Hero.tsx              # Splash section and initial CTA
│   │   ├── MapSection.tsx        # Interactive service areas map with county focus
│   │   ├── Reviews.tsx           # Customer review testimonials carousel
│   │   └── Services.tsx          # Detailed services grid and modals
│   ├── App.tsx            # App entry layout wrapper
│   ├── index.css          # Global CSS (Tailwind directives and font-imports)
│   ├── main.tsx           # React DOM render root
│   └── types.ts           # Shared TypeScript types and interfaces
├── index.html             # HTML shell
├── package.json           # Scripts and dependency declarations
├── tsconfig.json          # TypeScript build configuration
└── vite.config.ts         # Vite build bundler configuration
```

---

## 3. Key Development Scripts
* `npm run dev` - Starts the development server.
* `npm run build` - Compiles the application into highly-optimized, static assets in `dist/`.
* `npm run lint` - Executes TypeScript non-emit compilation (`tsc --noEmit`) to guarantee absolute code validity.

---

## 4. Coding Standards & Mandates

### TypeScript & Strict Typing
* **No `any` Types:** All variables, parameters, and function returns must possess explicit type annotations or rely on robust inference.
* **Top-Level Imports:** All `import` statements must remain at the absolute top of the files.
* **Standard Enums:** Always use standard `enum` declarations over `const enum`.
* **Imports Rule:** Use named imports rather than full object destructuring where applicable to optimize treeshaking.

### Styling & CSS
* **Tailwind Utility Classes Only:** Custom styling must be declared inline via Tailwind utility classes.
* **Single CSS Entry Point:** Do not create modular `.css` files (e.g., `App.css`). All directives, fonts, and animation utility classes are kept strictly in `/src/index.css` under:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap');
  @import "tailwindcss";
  ```
* **Color Schemes:** Standardize on semantic tailwind variations matching the design:
  * Brand Green: `text-brand-default` (`#22C55E` / `emerald-500`)
  * Navy Elements: `bg-navy-default` (`#020617` / `slate-950`)
  * Charcoal: `bg-charcoal` (`#0F172A` / `slate-900`)

### HMR Constraints
* **Disabled Hot Module Replacement (HMR):** The platform operates with `DISABLE_HMR=true` during development to prevent erratic re-renders during incremental writes. The preview refreshes upon final compiler synchronization.

---

## 5. Verification Checklist
Prior to pushing any new code edits, always run this workflow sequentially:
1. Run `npm run lint` to confirm zero compilation warnings or type-mismatches.
2. Run `npm run build` to ensure the production build assets compile safely.
