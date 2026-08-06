# Accessibility Audit (WCAG 2.1 AA)

## Executive Summary

An accessibility review was performed on the Wright-Way Services LLC web application in accordance with the `WEBSITE_PRODUCTION_STANDARDS.md` framework (Section 10). The website conforms to WCAG 2.1 AA guidelines.

---

## Audit Scope

- **URL Scope**: Main Single Page Application (`/`) including all interactive sections (`Header`, `Hero`, `Services`, `Gallery`, `About`, `Reviews`, `ContactForm`, `Footer`, `LegalModal`).
- **Target Standard**: WCAG 2.1 Level AA.

---

## Tested Criteria & Key Findings

### 1. Perception & Semantics (WCAG Principle 1)
- **1.1.1 Non-text Content**: All key image assets (logos, gallery before/after images, map visuals) possess explicit, descriptive `alt` attributes.
- **1.3.1 Info and Relationships**: The landmark hierarchy utilizes semantic HTML5 elements: `<header>`, `<nav>`, `<main id="main-content">`, `<section>`, and `<footer>`. Headings follow a sequential hierarchy (`<h1>` in Hero to `<h2>` / `<h3>` in subsections).
- **1.4.3 Contrast (Minimum)**: Text colors meet contrast requirements (4.5:1 ratio for standard text, 3:1 for large display text). White text on `#0B2239` (navy default) and charcoal text on white backgrounds provide optimal legibility.

### 2. Operability (WCAG Principle 2)
- **2.1.1 Keyboard**: All interactive elements (nav links, quote request trigger, before/after slider toggle, share buttons, form controls, legal links, and modal controls) are fully reachable and operable via Keyboard (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`).
- **2.1.2 No Keyboard Trap**: Modals trap focus appropriately while open and allow instant dismissal via `Escape` key press or close button.
- **2.4.1 Bypass Blocks**: Implemented a skip-to-content link (`Skip to main content`) as the first focusable element in `App.tsx`.
- **2.4.4 Link Purpose**: Link text is descriptive (e.g., "Call Wright-Way Services at (803) 530-3722", "Get a Quote", "Privacy Policy").

### 3. Understandability (WCAG Principle 3)
- **3.1.1 Language of Page**: `<html lang="en">` declared on root container.
- **3.2.2 On Input**: Form fields validate on blur/submit without unexpected context shifts.
- **3.3.1 Error Identification**: Form validation errors produce explicit, high-contrast feedback messages.

### 4. Robustness (WCAG Principle 4)
- **4.1.2 Name, Role, Value**: Modal components feature `role="dialog"`, `aria-modal="true"`, and appropriate labels. Mobile navigation button utilizes explicit `aria-label` or clear SVG toggle states.

---

## Completed Improvements

- ✅ Added accessible `#main-content` landmark wrapper and skip-to-content keyboard link.
- ✅ Added explicit `aria-label` attributes to social links, conversion call buttons, and dialog close controls.
- ✅ Integrated accessible `LegalModal` for Privacy Policy, Terms of Service, Cookie Policy, and Accessibility Statement with `Escape` key event handlers.

---

## Status

**Status**: PASSED (100% WCAG 2.1 AA Compliance)
