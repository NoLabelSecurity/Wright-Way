# SEO & Structured Data Audit

## Executive Summary

An audit of Search Engine Optimization (SEO) factors and structured data implementation was conducted for Wright-Way Services LLC per `WEBSITE_PRODUCTION_STANDARDS.md` (Sections 8 & 9). The website is optimized for organic search discovery in South Carolina local markets.

---

## Technical SEO Implementation

### 1. Document Metadata
- **Page Title**: `Wright-Way Services LLC | Home Inspection & Remodeling` (Includes primary brand & targeted service keywords).
- **Meta Description**: `Professional home inspections, remodeling, and property improvement services in South Carolina. Done the Wright-Way.` (Concise, conversion-oriented, under 160 characters).
- **Viewport**: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
- **Canonical URL**: `<link rel="canonical" href="https://wright-way.netlify.app/" />`
- **Robots Tag**: `<meta name="robots" content="index, follow" />`

### 2. Social Graph Metadata (Open Graph & Twitter/X)
- **Open Graph**: `og:title`, `og:description`, `og:url`, `og:image`, `og:type="website"`, `og:locale="en_US"`.
- **Twitter Card**: `twitter:card="summary_large_image"`, `twitter:title`, `twitter:description`, `twitter:image`.
- **Preview Asset**: Custom social preview banner configured.

### 3. Schema.org Structured Data (JSON-LD)
A comprehensive `HomeAndConstructionBusiness` JSON-LD schema is embedded in `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Wright-Way Services LLC",
  "image": "https://raw.githubusercontent.com/NoLabelSecurity/Wright-Way-Services-LLC/content/img/logo-transparent-bg.png",
  "telephone": "(803) 530-3722",
  "email": "wrightway.homeinspection@gmail.com",
  "url": "https://wright-way.netlify.app/",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lexington",
    "addressRegion": "SC",
    "postalCode": "29072",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.9815,
    "longitude": -81.2365
  },
  "areaServed": [
    "Lexington, SC",
    "Columbia, SC",
    "West Columbia, SC",
    "Richland County, SC",
    "Batesburg-Leesville, SC"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "priceRange": "$$"
}
```

---

## Local Search Optimization

- **Geo-targeting**: Primary service regions explicitly highlighted across copy and metadata: Lexington, SC; Columbia, SC; West Columbia, SC; Richland County; Batesburg-Leesville, SC.
- **NAP Consistency**: Name, Address, Phone Number consistent across page headers, footers, schema markup, and contact sections.

---

## Verification Status

**Status**: PASSED (100% Technical SEO & Schema.org Compliant)
