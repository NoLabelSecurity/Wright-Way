# 📚 Technical Documentation

> This report is maintained automatically after every development session.
>
> **Purpose:** Maintain accurate technical documentation for the current project architecture, codebase, configuration, and development environment. This report should always reflect the current implementation rather than historical changes.

---

# Documentation Overview

| Property | Value |
|-----------|-------|
| Project | Wright Way Services LLC |
| Framework | React 19 (Vite 6) |
| Language(s) | TypeScript, HTML, CSS |
| Repository | Target Repository |
| Architecture | Single Page Application (SPA) |
| Primary Database | None (Client-side local state) |
| API Type | None (Client-side form handler) |
| Deployment Platform | Cloud Run Sandbox Container |
| Last Updated | 2026-07-30 |

---

<details open>

<summary><strong>🏗 System Architecture</strong></summary>

## Architecture Summary

The application is built as a single-view React 19 Single Page Application (SPA) bundled with Vite 6 and styled using Tailwind CSS v4. Animation dynamics are driven by Motion (`motion/react`) with Lucide React vector icons.

---

### Technology Stack

| Layer | Technology |
|---------|------------|
| Frontend | React 19.0.1, TypeScript 5.8 |
| Backend | None (Standalone Client-Side SPA) |
| Database | None |
| Authentication | None |
| ORM | None |
| Styling | Tailwind CSS 4.1.14 |
| Hosting | Cloud Run Dev Container |
| Storage | Browser Local State |

---

### Application Flow

```text
User Interaction (Browser)
 ↓
React State Hooks (App.tsx / Components)
 ↓
Framer Motion Animations & Modals
 ↓
DOM View Render
```

</details>

---

<details>

<summary><strong>📁 Project Structure</strong></summary>

## Directory Tree

```text
Wright-Way-Services-LLC/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── BeforeAfterSlider.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── MapSection.tsx
│   │   ├── Reviews.tsx
│   │   └── Services.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── REPORTS/
│   ├── ANALYTICS.md
│   ├── CLIENT.md
│   ├── DEVELOPMENT.md
│   ├── DOCUMENTATION.md
│   ├── FEATURES.md
│   ├── PROJECT.md
│   ├── PROJECT_MEMORY.md
│   ├── README.md
│   └── REPORTING_GUIDELINES.md
├── .env.example
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

### Directory Purpose

| Folder / File | Description |
|---------------|-------------|
| `src/components/` | Modular, decoupled UI components (Hero, Services, Gallery, Map, etc.) |
| `src/` | App entry points (`main.tsx`, `App.tsx`), global styles (`index.css`), and shared types (`types.ts`) |
| `REPORTS/` | Single source of truth documentation suite tracking development progress, technical specs, and analytics |
| Root Configs | Build config (`vite.config.ts`), TypeScript rules (`tsconfig.json`), dependencies (`package.json`), and metadata (`metadata.json`) |

</details>

---

<details>

<summary><strong>🧩 Components</strong></summary>

## Major Components

| Component | Purpose | Status |
|------------|---------|--------|
| Header.tsx | Floating navbar with mobile drawer and contact phone line | Active |
| Hero.tsx | Banner with headline, CTAs, and credentials badges | Active |
| Services.tsx | Service grid with modal overlays and scroll lock | Active |
| Gallery.tsx | Album showcase with +25% card height boost & lightboxes | Active |
| BeforeAfterSlider.tsx | Interactive drag slider for pre/post renovation views | Active |
| About.tsx | Owner bio, builder background, and licensing credentials | Active |
| MapSection.tsx | Interactive SC Midlands service areas map with county focus | Active |
| Reviews.tsx | Testimonial carousel including Eddy Kirkland review | Active |
| ContactForm.tsx | Quote request form with state validation | Active |
| Footer.tsx | Secondary navigation, office info, and branding | Active |

---

### Shared Components

- Floating Click-to-Call Widget (embedded in `App.tsx`)
- Service Modal Container (embedded in `Services.tsx`)
- Gallery Album Modal (embedded in `Gallery.tsx`)

</details>

---

<details>

<summary><strong>🌐 API Reference</strong></summary>

## API Routes

| Route | Method | Purpose |
|--------|--------|---------|
| N/A | N/A | Client-side SPA (no custom backend API routes) |

---

### External APIs

| Service | Purpose |
|----------|---------|
| Google Maps Embed | Embedded interactive regional map iframe |

</details>

---

<details>

<summary><strong>🗄 Database</strong></summary>

## Database Overview

Database Type: None (Static & Client State)

ORM: N/A

---

### Tables / Collections

| Name | Purpose |
|------|---------|
| N/A | N/A |

---

### Relationships

- None

</details>

---

<details>

<summary><strong>⚙ Configuration</strong></summary>

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| API_KEY | ❌ (Optional) | Server-side AI API key for dynamic content service if enabled |

---

### Configuration Files

- package.json
- tsconfig.json
- vite.config.ts
- metadata.json

</details>

---

<details>

<summary><strong>📦 Dependencies</strong></summary>

## Primary Packages

| Package | Purpose |
|----------|---------|
| react & react-dom | Core UI framework (v19) |
| vite | Build tool & development server (v6) |
| tailwindcss | Utility-first CSS styling (v4) |
| motion | UI animation library (`motion/react`) |
| lucide-react | Vector icon set |

---

### Development Packages

- typescript (~5.8.2)
- @types/node (^22.14.0)
- @tailwindcss/vite (^4.1.14)

</details>

---

<details>

<summary><strong>🚀 Deployment</strong></summary>

## Deployment Information

Hosting Provider: Cloud Run Container

Build Command: `npm run build`

Output Directory: `dist/`

Production URL: https://ais-pre-wxfh222yqvsdsttosd7mi5-653812816364.us-east1.run.app

Preview URL: https://ais-dev-wxfh222yqvsdsttosd7mi5-653812816364.us-east1.run.app

---

### Deployment Process

1. Developer makes code edits in container workspace.
2. `npm run lint` verifies TypeScript compiler checks.
3. `npm run build` generates static SPA bundle in `dist/`.

</details>

---

<details>

<summary><strong>🔐 Authentication & Security</strong></summary>

Authentication Provider: None

Authorization Method: N/A

Session Strategy: N/A

Protected Routes: None

Security Headers: Default Cloud Run reverse proxy headers

Rate Limiting: Managed by platform proxy

Input Validation: Client-side validation in `ContactForm.tsx`

</details>

---

<details>

<summary><strong>⚡ Performance</strong></summary>

Caching Strategy: Standard browser HTTP caching for static assets

Image Optimization: Unsplash CDN URLs & inline SVG data URIs

Code Splitting: Vite automatic chunk splitting

Lazy Loading: Dynamic modal rendering via React conditional state

SSR / SSG / ISR: Client-Side Rendering (CSR)

Performance Notes: Zero server-side roundtrips required for modal navigation

</details>

---

<details>

<summary><strong>🧪 Testing</strong></summary>

Testing Framework: TypeScript Compiler (`tsc --noEmit`)

Unit Tests: N/A

Integration Tests: N/A

E2E Tests: Manual browser verification in development container preview iframe

Coverage: N/A

Known Gaps: No automated unit testing framework installed

</details>

---

<details>

<summary><strong>🐛 Troubleshooting</strong></summary>

## Common Issues

### Issue 1: Modal Background Scroll Bleed

Problem: Opening a service or gallery modal allows the page in the background to scroll.

Cause: Browser window scroll event bubbling.

Solution: Controlled state hook in parent component toggling `document.body.style.overflow = 'hidden'`.

---

### Issue 2: Dev Server Port Binding

Problem: App fail to load externally on non-standard ports.

Cause: Cloud Run proxy routes exclusively to port 3000.

Solution: Vite configured with `--port=3000 --host=0.0.0.0`.

</details>

---

<details>

<summary><strong>📖 Developer Notes</strong></summary>

Important Conventions

- All interface types declared in `/src/types.ts`.
- Single CSS entry point at `/src/index.css`.

Naming Standards

- PascalCase for React components (`Services.tsx`, `Header.tsx`).
- camelCase for utility functions and state variables.

Coding Guidelines

- Strict TypeScript typing (no `any`).
- Use `motion` for layout transitions.

Best Practices

- Keep components modular and single-purpose.

</details>

---
