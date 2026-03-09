# Tru Sunshine Coast Bond Cleaners

## Current State
The site has Home, Services, ServiceDetail, About, and Contact pages. There are no suburb-specific landing pages. The home page has no links to suburb pages.

## Requested Changes (Diff)

### Add
- 10 suburb landing pages for key Sunshine Coast suburbs:
  - Noosa Heads, Maroochydore, Caloundra, Mooloolaba, Nambour, Buderim, Kawana Waters, Coolum Beach, Sippy Downs, Palmwoods
- Each suburb page (400 words, simple language, Australian English):
  - Unique `<title>` tag: "Bond Cleaning [Suburb] | Tru Sunshine Coast Bond Cleaners"
  - Meta description (155 chars) targeting [suburb] bond cleaning
  - Meta keywords for suburb
  - Hero image with SEO alt text specific to suburb
  - H1 with suburb + bond cleaning keyword
  - Content sections: intro, what we clean, why choose us locally, pricing, CTA
  - WhatsApp CTA button
  - Link back to home and services
- Shared `SuburbPage` component that accepts suburb data props
- Route pattern: `/suburbs/[suburb-slug]`
- Suburb section on home page: grid of suburb links (signals internal links for SEO)

### Modify
- `App.tsx`: add routes for all 10 suburb pages
- `Home.tsx`: add "Areas We Serve" section with links to all suburb pages

### Remove
- Nothing removed

## Implementation Plan
1. Create suburb data file (`src/data/suburbs.ts`) with all suburb metadata (name, slug, meta, content)
2. Create `SuburbPage.tsx` component using the shared data
3. Update `App.tsx` to include suburb routes
4. Add "Areas We Serve" section to `Home.tsx` with links to each suburb page
5. Generate suburb hero images (one shared Sunshine Coast cleaning image is fine, reused per suburb)
