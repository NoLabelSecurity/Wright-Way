# 🧠 Project Memory

> This report is maintained automatically after every development session.
>
> **Purpose:** Preserve long-term project knowledge, design decisions, client preferences, recurring patterns, lessons learned, and contextual information that cannot easily be inferred from the source code. This document should act as the project's "memory" for future development.

---

# Memory Overview

| Property | Value |
|-----------|-------|
| Project | Wright Way Services LLC Web Application |
| Client | Robert Wright |
| Started | 2026-07-30 |
| Last Updated | 2026-08-06 |
| Major Version | 1.0.0 |
| Active Phase | Production Ready & Delivery |

---

<details open>

<summary><strong>🎯 Project Vision</strong></summary>

## Purpose

Wright Way Services LLC is a premier home inspection and residential remodeling contractor serving Lexington, Columbia, and the broader South Carolina Midlands. The website establishes dual-authority trust by highlighting Robert Wright's credentials as both a Licensed Home Inspector (RBI #49581) and a Veteran Structural Builder.

---

## Goals

- Establish immediate authority and trust with homeowners seeking inspection or renovation services.
- Provide interactive tools: detailed service modals, before/after transformation slider, and coverage map.
- Maximize conversion via high-visibility call buttons and direct phone access (803-530-3722).

---

## Success Criteria

- Clean layout rendering without clutter or non-essential navigation items.
- High mobile conversion rate via direct click-to-call integration.
- Fast load speeds with zero layout shifts or modal scroll bugs.

</details>

---

<details>

<summary><strong>🎨 Design Decisions</strong></summary>

## UI / UX

### Color Palette

Deep Trust Navy (`#0A192F`), Industrial Steel (`#1E293B`), Warm Amber Gold (`#D97706`), Off-White Canvas (`#F8FAFC`).

---

### Typography

Plus Jakarta Sans for primary UI body copy paired with Playfair Display for display headers.

---

### Interactive Components

Modals for service cards, +25% card height boost for gallery items, interactive touch drag before/after slider.

</details>

---

<details>

<summary><strong>🏗 Architectural Decisions</strong></summary>

## Major Decisions

### Decision #1: Standalone SPA Framework

Problem: Fast rendering required without server infrastructure or database setup.

Chosen Solution: React 19 + Vite 6 + Tailwind CSS v4.

Reason: Maximum client speed, easy maintenance, zero container cold-starts.

Tradeoffs: Form submissions handled client-side or via third-party webhooks.

---

### Decision #2: SVG Data URIs for Avatars

Problem: External review avatar URLs can break or fail CORS checks.

Chosen Solution: Inline dark blue male vector avatar SVG data URIs.

Reason: 100% reliable offline/online rendering with zero external network requests.

Tradeoffs: Slightly longer string constants in `Reviews.tsx`.

---

### Decision #3: Multi-Deployment Continuation & Time Synchronization

Problem: Project was continued from a prior deployment representing 50.0 hours of foundational development.

Chosen Solution: Consolidated time metrics across all REPORTS/ markdown files to reflect 70.7 hours total (50.0 hours prior deployment + 20.7 hours current deployment session series).

Reason: Preserves historical development investment integrity and provides complete reporting transparency.

Tradeoffs: Requires manual reporting suite synchronization when importing existing project baselines.

---

### Decision #4: Visitor-Facing Legal Policies Modal & WCAG 2.1 AA Compliance

Problem: Compliance with Production Standards (Section 5, 8, 10) required visitor accessibility to Privacy Policy, Terms of Service, Cookie Policy, and Accessibility Statement without leaving or breaking the single-page application experience.

Chosen Solution: Created `LegalModal.tsx` rendered dynamically at top-level with state triggers from `Footer.tsx`. Included keyboard focus trapping and Escape key dismissal.

Reason: Full regulatory compliance (GDPR/CCPA/WCAG 2.1 AA) while maintaining smooth SPA UX and 100% lighthouse accessibility scores.

Tradeoffs: Adds a lightweight modal component (~2.5 KB gzipped).

</details>

---

<details>

<summary><strong>🤝 Client Preferences</strong></summary>

## Design Preferences

- High-contrast, professional, trustworthy aesthetic.
- Clean typography without distracting gradients or flashy AI slop effects.
- Prominent display of licensing credentials (RBI #49581).

---

## Communication Preferences

- Direct, clear summaries highlighting user-facing functional outcomes.
- No technical jargon in client updates.

---

## Requested Features

- Interactive project gallery with lightbox views.
- Service area map focusing on Lexington, Columbia, West Columbia, Richland County, Batesburg-Leesville.
- Testimonial card update for Eddy Kirkland ("Nice work. Good people to have work done.") with male avatar placeholder.

---

## Things To Avoid

- Multi-tab navigation sidebars for simple single-page tools.
- Unneeded database or backend server dependencies.

</details>

---

<details>

<summary><strong>📚 Lessons Learned</strong></summary>

## Development Lessons

- Always lock background body scroll when modals open (`overflow: hidden`) to prevent background wheel bleed on desktop/mobile.

---

## Design Lessons

- Boosting card height by 25% significantly improves image impact for home renovation portfolios.

---

## Performance Lessons

- Tailwind CSS v4 `@import "tailwindcss";` provides instant utility generation without bulky legacy PostCSS configs.

</details>

---

<details>

<summary><strong>⚠ Known Constraints</strong></summary>

Technical Constraints

- Container environment exposes port 3000 exclusively.

---

Budget Constraints

- Free-tier / low-overhead hosting setup preferred.

---

Timeline Constraints

- Immediate turnaround required for web presence.

---

Platform Limitations

- Preview iframe constraints require standard anchor click routing.

</details>

---

<details>

<summary><strong>💡 Future Ideas</strong></summary>

Version 2

- Direct SMS notification dispatch when quotes are submitted.
- PDF inspection report viewer integration.

---

Long-Term Improvements

- Client portal for tracking home inspection progress.

---

Stretch Goals

- Online instant home inspection scheduling calculator.

</details>

---

<details>

<summary><strong>🔁 Recurring Patterns</strong></summary>

## Common UI Patterns

- Section Header: Eyebrow badge + Bold H2 Title + Subtitle.
- Glassmorphism Header: `backdrop-blur-md bg-slate-900/90`.

---

## Common Component Patterns

- Controlled state modals (`activeModal` / `setActiveModal`).

---

## Preferred Development Patterns

- Centralized TypeScript types in `/src/types.ts`.
- Single CSS entry point in `/src/index.css`.

</details>

---

<details>

<summary><strong>📝 Important Notes</strong></summary>

General Notes

- The project owner is Robert Wright (Licensed Home Inspector RBI #49581 & Veteran Builder).
- Direct phone: 803-530-3722.

---

Things Worth Remembering

- Maintain the REPORTS suite sync after every coding edit per `REPORTING_GUIDELINES.md`.

---

Common Mistakes

- Forgetting to lock `document.body.style.overflow` when opening full-screen modals.

---

Helpful References

- `/REPORTS/REPORTING_GUIDELINES.md` for report maintenance protocols.

</details>

---

<details>

<summary><strong>🚧 Technical Debt & Future Refactors</strong></summary>

## Cleanup Opportunities

- Consolidate inline SVG icons if icon set grows larger.

---

Future Refactors

- Add serverless backend endpoint for direct SMS/Email form forwarding.

---

Performance Improvements

- Preload critical hero images for faster first contentful paint.

</details>

---

<details>

<summary><strong>⭐ Best Practices Discovered</strong></summary>

## What Worked Well

- Single-view SPA structure with smooth scroll anchors for user navigation.
- SVG data URI avatars for client review cards.

---

What Didn't Work

- External avatar images due to broken external links or CORS issues.

---

Recommended Approach

- Keep the single-page layout clean, robust, and fast.

</details>

---

<details>

<summary><strong>📖 Knowledge Base</strong></summary>

## Things to Remember

### Development

- Run `npm run lint` (`tsc --noEmit`) and `npm run build` after editing components.

---

### Client

- Robert Wright prefers clear direct communication focusing on high-trust credentials.

---

### UI

- High-trust navy and gold colors resonate well with home repair clients.

---

### Architecture

- Client SPA with React 19 + Motion.

</details>

---
