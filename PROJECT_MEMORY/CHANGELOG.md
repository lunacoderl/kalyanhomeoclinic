# Changelog - Kalyan Homeo Care

All notable changes, updates, fixes, and additions to this project are documented here in chronological order.

## [2026-10-26] - Qualification Alignment: Dr. Shweta (BHMS)
### Updated:
- **`src/data/doctors.ts`**:
  - Replaced Dr. Shweta's qualification and degree from `M.D.` / `M.D. (Homeopathy)` to `BHMS` / `B.H.M.S.`.
  - Updated clinical bio to reflect `Dr. Shweta, BHMS`.
- **`src/data/faqs.ts`**:
  - Updated FAQ #9 doctor lineup to list `Consultant Homeopath Dr. Shweta, BHMS (10+ years experience)`.
- **`src/components/home/DoctorsTeamSection.tsx`**:
  - Updated team introduction paragraph to reference `Dr. Shweta, BHMS`.
  - Updated badge text from `"Certified M.D. Homeopathy Specialists"` to `"Certified M.D. & B.H.M.S. Specialists"`.
- **`src/components/home/AboutSection.tsx`**:
  - Updated clinical leadership reference to `Dr. Shweta, BHMS`.
- **`src/components/layout/Footer.tsx`**:
  - Updated footer credentials to `Dr. Shweta, BHMS`.
- **`PROJECT_MEMORY/PROJECT_STATE.md`**:
  - Aligned Dr. Shweta's medical leadership specification to `Dr. Shweta, BHMS` (`B.H.M.S.`).

---

## [2026-10-11] - Medical Leadership Update: Dr. Sudhakar & Lady Doctor Dr. Shweta
### Added & Updated:
- **`src/data/doctors.ts`**:
  - **Dr. Sudhakar, M.D.**:
    - Updated biographical and clinical details from official handwritten clinical notes:
      - Bio: *"Dr. Sudhakar M.D. is a passionate homeopath. He is a genius who unfolded the pictures of many homeopathic remedies in a new light. His ability to perceive the patient's mind is exceptional. His experience teaches that whenever the quite correctly and fittingly chosen remedy is applied and operates within the spheres, the overthrow of the disease is naturally to be expected."*
      - Motto / Clinical Philosophy: *"Whenever the quite correctly and fittingly chosen remedy is applied and operates within the spheres, the overthrow of the disease is naturally to be expected."*
      - Specializations: Constitutional Materia Medica, Perception of Patient's Mind & Temperament, Chronic Metabolic & Digestive Pathologies, Chronic Joint & Spine Disorders.
      - Degree / Qualification: `M.D.` / `M.D. (Homeopathy)`.
  - **Dr. Shweta, M.D. (Lady Doctor)**:
    - Updated to same course (`M.D.` / `M.D. (Homeopathy)`), with distinct experience (`10+ Years Experience`):
      - Bio: *"Dr. Shweta M.D. is a passionate and compassionate homeopath. She is an insightful physician who unfolds the constitutional pictures of homeopathic remedies in a luminous, empathetic light. Her ability to perceive the patient's mind, emotional depth, and subtle hormonal disharmonies is exceptional. Her experience teaches that whenever the accurately chosen remedy operates within its true spheres, the gentle overthrow of the disease is naturally to be expected."*
      - Motto / Clinical Philosophy: *"When the fittingly and correctly chosen remedy is applied with deep constitutional perception, the overthrow of disease and lasting vitality naturally follow."*
      - Specializations: Women's Hormonal Health (PCOD/PCOS & Thyroid), Pediatric Constitutional Care & Child Immunity, Perception of Mind & Emotional Well-Being, Allergic Rhinitis, Sinusitis & Skin Wellness.
- **`src/components/home/DoctorsTeamSection.tsx`**:
  - Updated section introduction to reflect `Dr. Sudhakar, M.D.` and `Dr. Shweta, M.D.`.
  - Updated badge text to `"Certified M.D. Homeopathy Specialists"`.
  - Removed `line-clamp-3` on doctor biography paragraph to allow full clinical text to display cleanly.
- **`src/components/home/AboutSection.tsx`**:
  - Updated clinical leadership sentence to mention `Dr. Sudhakar, M.D.` and `Dr. Shweta, M.D.`.
- **`src/components/layout/Footer.tsx`**:
  - Updated footer credentials to reflect `Dr. Sudhakar, M.D.` and `Dr. Shweta, M.D.`.
- **`src/data/faqs.ts`**:
  - Updated FAQ #9 answer with M.D. credentials and updated experience numbers.

---

## [2026-10-05] - Navbar Sticky Positioning Fix
### Fixed:
- **`src/index.css`**: Replaced `overflow-x: hidden !important;` on `html` and `body` with `overflow-x: clip;` so horizontal bleed is clipped without breaking `position: sticky`. Removed `overflow-x: hidden` on `#root`.
- **`src/components/layout/AppLayout.tsx`**: Removed `overflow-x-hidden` from outer wrapper `div` so that ancestor tree has no scroll container blocking `sticky`. Kept containment on `<main>`.
- **`src/components/layout/Navbar.tsx`**: Added explicit `style={{ position: 'sticky', top: 0 }}` inline fallback.

---

## [2026-10-05] - Vercel SPA 404 Routing Fix
### Fixed:
- **`vercel.json`**: Removed `"cleanUrls": true` which caused Vercel to bypass `/index.html` rewrites on deep page refreshes (such as `/services?service=diabetes-management`). Retained standard SPA catch-all rewrites to `/index.html`.
- **`vite.config.ts`**: Added explicit `base: '/'` to ensure absolute asset resolution.

---

## [2026-10-05] - Mobile Layout & Overflow Containment Fix
### Fixed:
- **`index.html`**: Added `viewport-fit=cover` and `maximum-scale=5.0` to viewport meta tag.
- **`src/components/home/Gallery.tsx`**: Made category filter and tab switcher responsive with `w-full sm:w-auto` and `truncate`.
- **`src/components/home/AboutSection.tsx`**: Fixed rotating badge overflow on mobile by positioning safely inside column with `overflow-hidden`.
- **`src/components/home/Hero.tsx`**: Added `min-w-0` and `break-words` on 3 benefit cards and responsive container padding.
- **`src/components/home/ProofStrip.tsx`**: Added responsive grid gaps and `min-w-0` truncation on small screens.
- **`src/components/layout/Navbar.tsx`**: Sized brand logo and text responsively and hid verbose slogan on extra-small mobile screens.

---

## [Earlier Milestones]
- Initial website implementation with parallax fixed images and clean visibility.
- Integration of 3 clinic branches in Visakhapatnam (Dwaraka Nagar, Old Gajuwaka, Steel Plant).
- Embedding of top 10 YouTube clinical case videos with controls, modal, and channel links.
- Addition of medical leadership team cards (Dr. Ch. Ravi Kumar, Dr. Sudhakar, Dr. Shweta).
