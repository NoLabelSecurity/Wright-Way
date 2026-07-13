# Wright-Way Services LLC - Analytics & Conversion Tracking

A high-performance business website must be coupled with clear, data-driven insights. This document outlines how to track, analyze, and optimize user engagement and conversion funnels on the Wright-Way Services LLC web platform.

---

## 1. Key Performance Indicators (KPIs)
To measure the success of the platform as a lead-generation tool, we monitor three primary tiers of user actions:

| KPI Class | Triggering Action | Value Context |
| :--- | :--- | :--- |
| **Primary Conversion** | Floating "Call Now" Button Click | Immediate direct phone inquiry; highest conversion intent. |
| **Primary Conversion** | Contact Form Submission Success | Structured electronic quote request / scheduling inquiry. |
| **Secondary Engagement** | Service Detail Modal Opened | Indicates specific user interest in one of the 6 core offerings. |
| **Secondary Engagement** | Gallery Album View | Shows interest in examining past work quality. |
| **Tertiary Engagement** | Map Location Selection | Indicates a local user verifying local coverage (Lexington vs Richland). |
| **Micro-Interaction** | Before/After Slider Drags | Measures interactive engagement and visual trust verification. |

---

## 2. Event Tracking Specifications
If integrating Google Analytics 4 (GA4) or Meta Pixel, we recommend implementing the following custom event schemas in the client-side handlers:

### Click-to-Call Tracking
* **Event Name:** `contact_click_to_call`
* **Trigger:** Click on the floating bottom-right phone button or header contact line.
* **Parameters:**
  * `location`: `floating_button` or `header_contact`
  * `phone_number`: `8035303722`

### Quote Request Form Submission
* **Event Name:** `quote_request_submitted`
* **Trigger:** Successful submission validation on `ContactForm.tsx`.
* **Parameters:**
  * `service_type`: The service category selected by the user (e.g., `Home Inspections`, `Kitchen/Bath Renovations`).
  * `has_description`: Boolean indicating if the user added detailed project specifications.

### Service Detail Interrogation
* **Event Name:** `service_modal_view`
* **Trigger:** Click on "Learn More" in any service card.
* **Parameters:**
  * `service_title`: The specific service name (e.g., `Radon, Mold & Moisture Diagnostics`).

### Gallery Album Exploration
* **Event Name:** `gallery_album_open`
* **Trigger:** Click on any category card in `Gallery.tsx`.
* **Parameters:**
  * `album_id`: Category identifier (e.g., `kitchen`, `bath`, `deck_additions`, `inspections`).

### Service Area Map Highlight
* **Event Name:** `service_area_map_focus`
* **Trigger:** Click on a location panel in the MapSection.
* **Parameters:**
  * `location_name`: The selected city/county (e.g., `Lexington, SC`, `Richland County`).

---

## 3. Recommended Technical Stack
* **Google Analytics 4 (GA4):** For global user flows, acquisition channels (Google search vs. local business listings), and page-stay analytics.
* **Meta Pixel / Google Ads Tag:** For running retargeting campaigns to South Carolina Midlands homeowners who visited the site but did not complete a quote request.
* **Hotjar or Microsoft Clarity:** Session recording software to analyze how users drag the Before/After slider and identify any friction points on mobile devices.

---

## 4. Privacy & Compliance (GDPR/CCPA/South Carolina Law)
* Since the site operates as a local business portfolio collecting standard contact data (names, emails, phones, and addresses), ensure any integration of tracking cookies is declared in a standard footer Privacy Policy link.
* Data submitted via the contact form must be transmitted securely over HTTPS and stored in a compliance-validated workspace or database.
