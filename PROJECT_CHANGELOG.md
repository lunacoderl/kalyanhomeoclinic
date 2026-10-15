# Project Changelog - Kalyan Homeo Care

## [2026-10-15] - Technical SEO & Google Search Console Alignment Overhaul

### Changes Made & Updates
- **Domain Canonicalization & Alignment**:
  - Aligned custom production domain to approved live URL `https://www.kalyanhomeocare.com` across `index.html`, canonical tags, and OpenGraph metadata.
  - Created `src/siteSeo.ts` to provide centralized constants and canonical path resolvers.
  - Upgraded `src/components/common/SEOHead.tsx` to dynamically sync canonical link, OpenGraph URL, robots directive, and Schema.org structured data to `https://www.kalyanhomeocare.com`.
- **Sitemap & Robots Creation**:
  - Created missing `public/robots.txt` specifying allowed crawling and accurate sitemap pointer.
  - Cleaned and updated `public/sitemap.xml` with canonical URLs matching the live domain, removing non-canonical query parameter variants that triggered GSC alternate canonical warnings.
- **Soft-404 Crawl Indexation Fix**:
  - Updated `src/pages/NotFoundPage.tsx` with `<SEOHead title="404 - Page Not Found | Kalyan Homeo Care" noIndex={true} />` ensuring error pages are marked with `noindex, nofollow`.

### Files Created
- `src/siteSeo.ts`
- `public/robots.txt`
- `PROJECT_CHANGELOG.md`

### Files Modified
- `index.html`
- `src/components/common/SEOHead.tsx`
- `src/pages/NotFoundPage.tsx`
- `public/sitemap.xml`
