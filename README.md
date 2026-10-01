# Kalyan Homeo Care — Official Website

> **"Rapid gentle permanent cure"** • Personalized Homeopathic Consultations in Visakhapatnam, Andhra Pradesh led by **Dr. Ch. Ravi Kumar, M.D.**

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com/)

---

## 🌿 About The Clinic

**Kalyan Homeo Care** is a trusted homeopathic clinic network in Visakhapatnam, Andhra Pradesh, providing gentle, non-invasive constitutional healthcare since 2008.

Under the clinical guidance of **Dr. Ch. Ravi Kumar, M.D. (Homeopathic Physician)**, the clinic offers holistic, individualized treatments treating root causation for acute and chronic conditions without harsh synthetic side effects.

### 📍 Clinic Branches

| Branch | Address | Contact | Timings | Google Maps |
| :--- | :--- | :--- | :--- | :--- |
| **Dwaraka Nagar** *(Main)* | Sankara Matam Rd, near Diamond Park, opp. Venkatarama Hospital, Dondaparthy, Visakhapatnam 530016 | `080083 00155` | 10:00 AM – 8:00 PM | [View Directions](https://maps.app.goo.gl/96QcLvKVbNFexY7C9) |
| **Old Gajuwaka** *(Second)* | 8-11-25, Between Varun Bajaj Showroom & Latha Hospital, Old Gajuwaka, Visakhapatnam 530026 | `080083 00166` | 10:00 AM – 8:00 PM | [View Directions](https://maps.app.goo.gl/FTedmnSBAg7GxYjR7) |
| **Steel Plant** *(Third)* | Russian Shopping Complex, near Steel Club Township, Sector 1, Steel Plant Twp, Gajuwaka 530032 | `099593 00030` | 24 Hours Open | [View Directions](https://maps.app.goo.gl/Jxh2TQqF64wv4Q967) |

---

## ✨ Features & Architecture

- **Visual Fidelity & Aesthetics**: Curated natural palette (`forest green #0B5A3C`, `gold #C89A45`, `mint #EEF7F0`, `ivory #FBFAF5`) with Google typography (*Playfair Display*, *Manrope*, *Caveat*).
- **Responsive Hero Sections**:
  - **Desktop**: Full-screen fixed background images with crystal clarity and zero color washes.
  - **Mobile**: Uncropped full-width images with natural aspect ratios and cleanly aligned text blocks for readability and image visibility.
  - **Alignment**: Centered hero layout on Services and right-corner positioning on Contact.
- **Dynamic Service Directory (`/services`)**:
  - Live client-side instant search across 12 clinical disciplines.
  - In-depth detail drawer: Root causes, clinical presentation, homeopathic constitutional approach, consultation protocol, dietary/lifestyle guidance, and clinical FAQs.
- **Interactive Multi-Branch Switcher (`/contact`)**:
  - Seamless branch tabs with real-time address, phone, and direct Google Maps navigation deep-links.
  - WhatsApp enquiry generator with branch and concern pre-fill.
- **Quick Action Interfaces**:
  - **Desktop**: Fixed vertical action rail on right edge (Call, WhatsApp, Appointment Modal, Scroll to Top).
  - **Mobile**: Sticky bottom action bar for quick calls, appointments, and WhatsApp.
- **YouTube Clinical Case Video Gallery (`#gallery`)**:
  - Embedded responsive player featuring the top 10 most viewed patient case studies from official channel [@kalyanHomoeoCare](https://www.youtube.com/@kalyanHomoeoCare).
  - Autoplays muted by default with full YouTube player controls and browser audio policy compliance.
  - Interactive direct buttons: "Watch Directly on YouTube", "Share / Copy Link", and direct channel subscription link.
  - Dual tabs switching between authentic clinic photos and clinical recovery case studies.
- **SEO & Performance**:
  - XML Sitemap (`public/sitemap.xml`) indexing all routes and service disciplines.
  - `MedicalClinic` and `Physician` JSON-LD structured data for Google Rich Results.
  - OpenGraph social cards, canonical links, and descriptive meta headers.
  - Configured `vercel.json` with SPA routing rewrites and asset caching rules.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 6
- **Language**: TypeScript (strict configuration)
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS keyframes

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` or `pnpm`

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/kalyan-homeo-care.git

# Navigate into project directory
cd kalyan-homeo-care

# Install dependencies
npm install
```

### Development Server

```bash
# Run local dev server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Typecheck and compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploying to Vercel

This repository includes a pre-configured [`vercel.json`](./vercel.json) supporting Single Page Application routing:

1. Import the repository into [Vercel](https://vercel.com/new).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

---

## 📄 License

© 2026 Kalyan Homeo Care. All rights reserved. Featuring Dr. Ch. Ravi Kumar, M.D.
