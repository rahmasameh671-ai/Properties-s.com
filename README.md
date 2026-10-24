# properties-s.com — Ultra-Luxurious Corporate Real Estate Landing Page

Official web architecture for **properties-s.com**, an **Independent Real Estate Consultancy** and **Strategic Marketing Partner** operating in the Arab Republic of Egypt.

---

## 🏛️ Aesthetic Architecture & Strict Guidelines

### Strict Zero Gold Policy
- **Absolute Exclusion**: Zero gold, bronze, brass, amber, or yellow tones across any part of the site (backgrounds, borders, shadows, typography, or iconography).
- **Calm Luxury Architectural Palette**:
  - **Dominant**: Crisp pure white (`#FFFFFF`), clean alabaster (`#FAFAFB`), and subtle stone grey (`#F8F9FA` / `#F1F3F5`).
  - **Accents**: Deep rich charcoal / slate (`#1A202C` / `#2D3748` / `#0F172A`) for razor-sharp typography and high contrast.
  - **Cards & Modules**: Translucent frosted white cards (`rgba(255, 255, 255, 0.92)`) with delicate 1px cool borders (`#E2E8F0`).
  - **WhatsApp Integration**: Solid vibrant WhatsApp Green (`#25D366`, hover `#20BD5A`) for all direct contact triggers.

### Typography
- **Headlines**: High-end editorial Serif headlines using **Cinzel** and **Playfair Display**.
- **Body & Data Points**: Clean, ultra-readable modern Sans-serif using **Plus Jakarta Sans** and **Inter**.

### Global UI & Branding Rules
- **Primary Branding Identifier**: `By properties-s.com`.
- **No Brokerage Terminology**: Strictly styled as `Independent Real Estate Consultancy` or `Strategic Marketing Partner`. Never uses the word *brokerage*.
- **Mobile-First Responsiveness**: 100% thumb-friendly, smoothly collapsing into a centered single-column layout on mobile devices.

---

## 📂 Project Architecture

```
Properties-s.com/
├── index.html                 # Main Landing Page (Hero, 18 Years Legacy, Value Pillars, Lead Capture)
├── city-gate.html             # Standalone /city-gate route alias for clean URL engines
├── city-gate/                 # Dedicated /city-gate Route Directory (City Gate New Cairo)
│   ├── index.html             # City Gate New Cairo Landing Page (Qatari Diar)
│   ├── privacy.html           # City Gate legal Privacy Policy
│   ├── terms.html             # City Gate legal Terms & Conditions
│   ├── css/style.css          # Architectural City Gate stylesheet
│   ├── js/main.js             # City Gate lead engine & modal handler
│   └── images/                # City Gate renders and official logos
├── sodic.html                 # Standalone /sodic route alias for clean URL engines
├── sodic/                     # Dedicated /sodic Route Directory
│   ├── index.html             # The Lakes at SODIC East & Premier Portfolio Landing Page
│   ├── privacy.html           # SODIC-specific legal Privacy Policy
│   ├── terms.html             # SODIC-specific legal Terms & Conditions
│   ├── css/styles.css         # Architectural SODIC stylesheet
│   ├── js/main.js             # SODIC lead engine, Zapier webhook & country selector
│   └── images/                # SODIC portfolio images & logos
├── Lavista.html               # Standalone /Lavista route alias for clean URL engines
├── Lavista/                   # Dedicated /Lavista Route Directory (Exclusive New Cairo & Capital)
│   ├── index.html             # La Vista Developments Landing Page
│   ├── privacy.html           # La Vista legal Privacy Policy
│   ├── terms.html             # La Vista legal Terms & Conditions
│   ├── assets/css/styles.css  # Architectural La Vista stylesheet
│   ├── assets/js/main.js      # La Vista lead engine, Zapier webhook, GA4 & country selector
│   └── assets/images/         # Official La Vista logo & property portfolio renders
├── images/                    # Public media directory (renders & official developer logos)
│   ├── citygate-official.png
│   ├── qatari-diar-official.png
│   ├── hero-masterview.jpg
│   ├── apartment-interior.jpg
│   ├── villas-exterior.jpg
│   ├── golf-championship.jpg
│   ├── sodic-logo.png
│   ├── the-lakes-architecture.jpg
│   ├── sodic-east-logo.png
│   ├── sodic-east-lakes.jpg
│   ├── ogami-logo.png
│   ├── ogami-villa.webp
│   ├── eastvale-logo.png
│   ├── eastvale-architecture.jpg
│   ├── lavista_logo.png
│   ├── hero.jpg
│   ├── patio_town_side.jpg
│   ├── patio_town.jpg
│   ├── patio_oro.jpg
│   ├── patio_vida.jpg
│   ├── patio_riva.jpg
│   ├── patio_hills.jpg
│   └── patio_jade.jpg
├── privacy.html               # Standalone Routed Privacy Policy (100% White on Solid Black)
├── privacy-policy.html        # Direct URL routing alias
├── terms.html                 # Standalone Routed Terms & Conditions (100% White on Solid Black)
├── terms-conditions.html      # Direct URL routing alias
├── css/
│   ├── style.css             # Main corporate Calm Luxury stylesheet
│   ├── styles.css            # SODIC portfolio stylesheet
│   └── city-gate.css         # City Gate portfolio stylesheet
├── js/
│   ├── main.js               # Main corporate engine
│   ├── sodic.js              # SODIC lead processing & analytics engine
│   └── city-gate.js          # City Gate lead processing & analytics engine
└── README.md                  # Complete architectural & compliance documentation
```

---

## 📄 Key Sections

1. **Hero Section (The Legacy of Excellence)**:
   - Centered letter-spaced branding: `BY PROPERTIES-S.COM`
   - Badge: `INDEPENDENT REAL ESTATE CONSULTANCY`
   - Headline: *A Vision of Extraordinary Living*
   - Core Highlight: *"Backed by 18 Years of Real Estate Excellence and Market Leadership."*
   - Frosted Glass Lead Capture Form:
     - Title: `REGISTER YOUR INTEREST`
     - Fields: `Full Name` and `Phone Number` (with international country code dropdown, NO placeholder text)
     - Submit Button: Solid dark charcoal button reading `SUBMIT`
     - Legal Disclaimer: *"By submitting, you agree to receive communications from properties-s.com. This platform is operated by properties-s.com, an independent real estate consultancy."*

2. **Our Expertise & Company Details**:
   - Headline: *18 Years of Unmatched Expertise*
   - Narrative: *"For nearly two decades, properties-s.com has been the strategic partner of choice for elite real estate investments. With 18 years of market insight, we provide 100% unbiased consultations, ensuring our clients secure prime units that perfectly align with their investment goals."*
   - Value Pillars:
     1. **18 Years of Experience**: Decades of trusted market leadership.
     2. **100% Unbiased Consultation**: Independent, client-first advisory.
     3. **Strategic Partnerships**: Direct access to Egypt's premier developers.
   - CTA: Solid Green WhatsApp button reading `Consult an Expert Today`.

3. **Technical Footer & Compliance**:
   - Centered branding: `By properties-s.com`
   - Mandatory Disclaimer: *"This landing page is operated by properties-s.com, an independent real estate consultancy, and is not the official website of any specific developer. Prices and availability are subject to change."*
   - Clickable Standalone Legal Links: `Privacy Policy` and `Terms & Conditions`.
   - Signature: `© 2026 properties-s.com — Independent Real Estate Consultancy`.

4. **Standalone Legal Pages (Routed Pages)**:
   - Designed with 100% pure white text on solid black background (`#000000`) for maximum formal clarity.
   - Comprehensive legal clauses governed under the laws of the Arab Republic of Egypt.

---

## 🚀 Deployment

The project is pure static HTML5/CSS3/JavaScript (Zero build dependencies). It can be served instantly via:
- GitHub Pages
- Cloudflare Pages / Vercel / Netlify
- Any standard web server or CDN

© 2026 properties-s.com — Independent Real Estate Consultancy.
