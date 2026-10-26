# Project Changelog - Kalyan Homeo Care

## [2026-10-26] - Qualification Alignment: Dr. Shweta (BHMS)

### Changes Made & Updates
- **Medical Qualifications & Bio Alignment**:
  - Replaced Dr. Shweta's qualification and degree from `M.D.` / `M.D. (Homeopathy)` to `BHMS` / `B.H.M.S.` in `src/data/doctors.ts`.
  - Updated bio to reflect `Dr. Shweta, BHMS`.
  - Updated FAQ #9 doctor lineup in `src/data/faqs.ts` to reflect `Consultant Homeopath Dr. Shweta, BHMS`.
  - Updated team introduction paragraph and team credential badge in `src/components/home/DoctorsTeamSection.tsx` to `Dr. Shweta, BHMS` and `"Certified M.D. & B.H.M.S. Specialists"`.
  - Updated clinic about section in `src/components/home/AboutSection.tsx` to `Dr. Shweta, BHMS`.
  - Updated footer credentials in `src/components/layout/Footer.tsx` to `Dr. Shweta, BHMS`.
  - Synced `PROJECT_MEMORY/PROJECT_STATE.md` with updated qualifications.

### Files Modified
- `src/data/doctors.ts`
- `src/data/faqs.ts`
- `src/components/home/DoctorsTeamSection.tsx`
- `src/components/home/AboutSection.tsx`
- `src/components/layout/Footer.tsx`
- `PROJECT_MEMORY/PROJECT_STATE.md`
- `PROJECT_MEMORY/CHANGELOG.md`
- `PROJECT_CHANGELOG.md`

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
