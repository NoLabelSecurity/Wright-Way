# Wright-Way Services LLC - Client User Manual

Welcome, Robert! This handbook explains how to update, modify, and manage the Wright-Way Services LLC website content. The site has been engineered to be highly organized, meaning you can update critical business details—like your phone number, license numbers, reviews, gallery photos, and service locations—in just a few minutes without needing complex programming.

---

## 1. Quick Business Profile Updates

### Updating Contact Phone, Email, & Address
To modify your contact details, open `/src/components/Footer.tsx` or `/src/components/Header.tsx` to find standard text variables:
* **Primary Phone:** `803-530-3722`
* **Primary Email:** `brianlorick1988@gmail.com`
* **HQ Location:** Lexington, SC

---

## 2. Managing Your Reviews and Testimonials
Customer reviews build tremendous trust. To add a new review or edit existing ones, open `/src/components/Reviews.tsx`. You will see a list of reviews structured like this:

```typescript
const reviews = [
  {
    name: "John S.",
    location: "Lexington, SC",
    rating: 5,
    text: "Robert did a thorough inspection of our home. His builder background really shows!",
    tag: "Home Inspection"
  },
  // To add a new review, simply copy the section above, paste it inside the list, and update the text!
];
```

---

## 3. Adding New Project Images to the Gallery
Your gallery is your strongest sales tool. To add new albums or update existing project images, open `/src/components/Gallery.tsx`. Locate the `albums` list:

```typescript
const albums: GalleryAlbum[] = [
  {
    id: 'kitchen',
    title: 'Kitchen Remodels',
    cover: 'https://images.unsplash.com/...', // Image URL for the folder cover
    images: [
      'https://images.unsplash.com/...', // List of full-screen image URLs
      'https://images.unsplash.com/...',
    ]
  },
  // Add new links here as you complete new projects!
];
```
*Note: You can use free image hosting tools or cloud accounts to host your completed project images, then paste the secure URLs directly into the list above.*

---

## 4. Modifying Service Details and the "Wright-Way Process"
If you wish to update your State License Number, change service descriptions, or adjust typical timelines, open `/src/components/Services.tsx` and find the `services` array. You can easily adjust:
* **Descriptions:** Change how you describe each service.
* **Key Services Checklists:** Add or remove items covered by your inspections or remodels.
* **The Process:** Adjust your step-by-step workflow stages.
* **Timeframes:** Modify typical job times (e.g., changing inspection delivery speed).

---

## 5. Understanding Lead Delivery (Contact Form)
When potential clients submit the quote request form:
1. It validates their details (ensures phone numbers and emails are complete).
2. It aggregates their selections (e.g., requested service type, description of wood rot, address).
3. Under the hood, this object is ready to be bound to your preferred lead delivery system (such as direct email notifications via EmailJS, a backend CRM, or standard email routing).
