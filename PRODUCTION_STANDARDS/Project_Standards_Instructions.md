# Project Standards & Development Instructions

## Overview

This repository operates under strict production standards defined in:

```text
/PRODUCTION_STANDARDS/WEBSITE_PRODUCTION_STANDARDS.md
```

All developers, contributors, and AI assistants working on **Wright-Way Services LLC** must adhere to the 31 core standards outlined in the production standards documentation.

---

## Key Core Objectives

1. **Repository & Directory Integrity**: Maintain clean, logical file structures without cluttering the project root or introducing redundant/duplicate files.
2. **Minimal Changes & Preservation**: Preserve existing working architecture, component structures, and verified content. Avoid unprompted refactoring.
3. **Legal & Compliance**: Provide accessible visitor-facing legal policies (Privacy Policy, Terms of Service, Cookie Policy, Accessibility Statement) accessible from the global footer.
4. **Form Security & Validation**: Implement both client-side and server-side validation, honeypots for bot mitigation, and accessible form controls.
5. **SEO & Structured Data**: Maintain accurate HTML meta tags, Open Graph tags, canonical URLs, and Schema.org `HomeAndConstructionBusiness` JSON-LD markup.
6. **Accessibility (WCAG 2.1 AA)**: Ensure keyboard operability, focus indicators, skip-to-content links, sufficient contrast ratios, and screen-reader accessible ARIA labels.
7. **Production Verification**: Maintain green build outputs, zero lint errors, and zero console exceptions.

---

## Audit Reports Directory Structure

The following audit and compliance reports are tracked in the `/PRODUCTION_STANDARDS/` directory:

* `Project_Standards_Instructions.md` (Primary guidance document)
* `WEBSITE_PRODUCTION_STANDARDS.md` (31-part master specification)
* `Accessibility_Audit.md` (WCAG 2.1 AA audit)
* `SEO_Audit.md` (Search Engine Optimization & Schema.org audit)
* `Security_Audit.md` (Security & form validation audit)
* `Performance_Audit.md` (Asset & runtime performance audit)
* `Privacy_Compliance_Audit.md` (Privacy policy & data practices audit)
* `Deployment_Readiness.md` (Production build & deployment audit)

---

## Developer Workflow Rules

- Run `npm run lint` and `npm run build` prior to submitting changes.
- Never hardcode sensitive API keys or credentials.
- Ensure all images include descriptive alt tags and `referrerPolicy="no-referrer"`.
- Use the central design tokens defined in Tailwind configuration for visual consistency.
