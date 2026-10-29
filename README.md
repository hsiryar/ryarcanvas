# RYAR Canvas — Official Digital Agency Website

> **"Let's Work Together to Bring Your Ideas to Life."**

A complete, production-ready static website engineered for **RYAR Canvas**, a modern digital agency specializing in:
- **Website Development** (Blogging & content websites with 12 to 48 months hosting packages)
- **E-commerce Website + Custom Admin Panel** (One-time development payment — no mandatory monthly Shopify platform subscriptions)
- **Digital Marketing** (Focused paid advertising across Meta Ads [Facebook & Instagram] and TikTok Ads)
- **Upcoming Solutions** (AI Calling Agent, Automated Lead Gen Pipeline, Ryar Canvas Academy)

This website is designed for high conversion, transparent scoping, and seamless direct communication via **WhatsApp** and **Instagram**. It is fully static, requires no backend server, and is pre-configured for **GitHub Pages** deployment with the custom domain **`riarcanvas.online`**.

---

## Table of Contents
1. [Brand Assets & Configuration](#brand-assets--configuration)
2. [Project Architecture](#project-architecture)
3. [Step-by-Step GitHub Pages & Custom Domain Deployment Guide](#step-by-step-github-pages--custom-domain-deployment-guide)
4. [Testing & Quality Verification Checklist](#testing--quality-verification-checklist)
5. [Easy Future Editing Guide](#easy-future-editing-guide)
6. [Local Development](#local-development)

---

## Brand Assets & Configuration

| Property | Value | Notes |
| :--- | :--- | :--- |
| **Brand Name** | `RYAR Canvas` | Consistently branded across pages & metadata |
| **Official Tagline** | `"Let's Work Together to Bring Your Ideas to Life."` | Prominently displayed in hero & footer |
| **Custom Domain** | `riarcanvas.online` | Configured via root & public `CNAME` files |
| **WhatsApp Number** | `+92 349 7925109` | Rendered with clean label `"WhatsApp"` |
| **WhatsApp Base URL** | `https://wa.me/923497925109` | Destination URL for all quote & package buttons |
| **Instagram Profile** | `https://www.instagram.com/ryarcanvas/` | Rendered with clean label `"Instagram"` |
| **Official Logo** | `/assets/images/ryar-canvas-logo.png` | Preserves original RC monogram & gradient |
| **Live Portfolio** | `Design Bench` (`https://designbench.netlify.app`) | Only active portfolio project |

---

## Project Architecture

```
ryar-canvas/
├── CNAME                                  # Custom domain for GitHub Pages root
├── index.html                             # Main HTML entry with SEO, JSON-LD, OpenGraph & SPA router
├── metadata.json                          # Applet metadata & permissions
├── package.json                           # Build scripts and project dependencies
├── README.md                              # Comprehensive deployment and editing manual
├── tsconfig.json                          # TypeScript configuration
├── vite.config.ts                         # Vite build configuration
├── public/
│   ├── CNAME                              # Copied to dist/ on build
│   ├── robots.txt                         # Search engine crawler instructions
│   ├── sitemap.xml                        # Complete sitemap with all routes
│   ├── 404.html                           # GitHub Pages SPA deep link restoration
│   └── assets/
│       └── images/
│           ├── ryar-canvas-logo.png       # Original RYAR Canvas logo asset
│           └── designbench-thumbnail.webp # Verified Design Bench thumbnail
└── src/
    ├── App.tsx                            # Dynamic view router, popstate handler & SEO metadata sync
    ├── main.tsx                           # React DOM mount entry
    ├── index.css                          # Brand theme tokens & gradient utility classes
    ├── components/
    │   ├── Header.tsx                     # Header with logo, services dropdown, mobile navigation
    │   ├── Footer.tsx                     # Multi-column footer with strict platform labels
    │   ├── FloatingWhatsApp.tsx           # Floating quick-inquiry WhatsApp action button
    │   └── EarlyAccessForm.tsx            # Transparent email capture with WhatsApp fallback
    ├── data/
    │   ├── config.ts                      # Centralized brand constants, endpoints, & URLs
    │   ├── packages.ts                    # All website & e-commerce package data & prices
    │   ├── faqs.ts                        # 10 comprehensive business & scope FAQs
    │   └── portfolio.ts                   # Reusable portfolio data structure
    ├── utils/
    │   └── whatsapp.ts                    # Dynamic WhatsApp prefilled message generators
    └── views/
        ├── HomeView.tsx                   # Hero, trust bar, services (no prices), portfolio, FAQ, CTA
        ├── WebsiteDevelopmentView.tsx     # 6 packages ($99-$299) + custom package & scope policy
        ├── EcommerceDevelopmentView.tsx   # 3 packages ($129-$199), 18/24m selector, Shopify policy
        ├── DigitalMarketingView.tsx       # Meta Ads & TikTok Ads (strictly no Google Ads), workflow
        ├── ComingSoonView.tsx             # AI Calling Agent, Lead Gen Pipeline, Academy views
        ├── PrivacyPolicyView.tsx          # Authentic privacy policy tailored to static agency site
        ├── TermsOfServiceView.tsx         # Clear commercial terms & deliverables disclaimer
        └── NotFoundView.tsx               # Friendly 404 recovery view
```

---

## Step-by-Step GitHub Pages & Custom Domain Deployment Guide

Deploying RYAR Canvas to GitHub Pages with your custom domain **`riarcanvas.online`** takes just a few minutes.

### Step 1: Create a GitHub Repository
1. Log in to your GitHub account at [github.com](https://github.com).
2. Click the **`+`** icon in the upper-right corner and choose **New repository**.
3. Name your repository (e.g., `ryar-canvas` or `riarcanvas.online`).
4. Set the visibility to **Public** (required for free standard GitHub Pages).
5. Leave "Initialize this repository with a README" unchecked, then click **Create repository**.

### Step 2: Build & Upload the Project Files

#### Option A: Using Git CLI (Recommended)
Open your terminal in this project's directory and run:

```bash
# Build production-ready static assets
npm run build

# Initialize Git repository
git init
git add .
git commit -m "Initial RYAR Canvas website release"
git branch -M main

# Link to your newly created repository (replace USERNAME and REPOSITORY with your actual details)
git remote add origin https://github.com/USERNAME/REPOSITORY.git

# Push files to GitHub
git push -u origin main
```

> **Note:** Replace `USERNAME` with your GitHub username (e.g., `ryarcanvas`) and `REPOSITORY` with your repository name.

#### Option B: GitHub Actions Automated Build (Best for Vite SPAs)
Create `.github/workflows/deploy.yml` in your repository with the following configuration:

```yaml
name: Deploy RYAR Canvas to GitHub Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 3: Configure GitHub Pages in Repository Settings
1. On GitHub, navigate to your repository and click the **Settings** tab.
2. In the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - If using **GitHub Actions**, select **Source: GitHub Actions**.
   - If deploying static files from a branch, select **Deploy from a branch**, choose `main` branch, and select `/dist` or `/root` depending on your setup.

### Step 4: Configure the Custom Domain
1. In the same **Pages** settings screen, locate the **Custom domain** field.
2. Enter:
   ```
   riarcanvas.online
   ```
   *(Important: Use the exact domain as registered without typos).*
3. Click **Save**. GitHub will automatically check the DNS records and create or confirm your `CNAME` file.

### Step 5: Configure DNS Records at Your Domain Registrar
Log into your domain registrar (e.g. Namecheap, GoDaddy, Cloudflare, Hostinger, Google Domains) where you purchased `riarcanvas.online`, open the DNS Management panel, and add the following records:

#### Apex Domain (`@`) — A Records
Point the root domain to GitHub Pages' standard Anycast IP addresses:

| Type | Host | Points to / Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | Automatic / 3600 |
| **A** | `@` | `185.199.109.153` | Automatic / 3600 |
| **A** | `@` | `185.199.110.153` | Automatic / 3600 |
| **A** | `@` | `185.199.111.153` | Automatic / 3600 |

*(Optional: You may also add the standard IPv6 AAAA records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`).*

#### Subdomain (`www`) — CNAME Record
Point `www.riarcanvas.online` to your GitHub Pages host:

| Type | Host | Points to / Value | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `USERNAME.github.io` | Automatic / 3600 |

*(Replace `USERNAME` with your real GitHub username).*

### Step 6: Enable HTTPS
1. Allow 15–30 minutes for DNS propagation worldwide.
2. Return to the **GitHub Pages** settings tab in your repository.
3. Check the box for **Enforce HTTPS**.
4. GitHub will automatically provision and renew a free Let's Encrypt SSL/TLS certificate for `riarcanvas.online`.

---

## Testing & Quality Verification Checklist

Before publishing, verify all key touchpoints:

- [x] **Branding & Logo**: Official RYAR Canvas logo loaded with perfect proportions and transparent background.
- [x] **Tagline**: *"Let's Work Together to Bring Your Ideas to Life."* displayed prominently.
- [x] **Homepage Pricing Rule**: Strictly NO package prices shown on homepage cards.
- [x] **Website Development (6 Packages)**:
  - 12 Mo + 1 Website ($99 USD)
  - 12 Mo + 2 Websites ($139 USD)
  - 24 Mo + 1 Website ($129 USD)
  - 24 Mo + 3 Websites ($189 USD)
  - 48 Mo + 5 Websites ($239 USD)
  - 48 Mo + 10 Websites ($299 USD)
  - Custom Package
- [x] **E-commerce (3 Packages)**:
  - 12 Mo ($129 USD)
  - 18 Mo / 24 Mo ($189 USD) with duration confirmation prompt
  - 48 Mo ($199 USD)
  - Custom Solution
  - Transparent message: *"One-Time Website Development Payment — No Mandatory Monthly Shopify Platform Subscription."*
- [x] **Digital Marketing**: Focuses strictly on Meta Ads (Facebook & Instagram) and TikTok Ads. No Google Ads offered.
- [x] **WhatsApp Destination**: All quote and package CTA buttons open `https://wa.me/923497925109` with dynamic, prefilled message strings.
- [x] **Strict Social Platform Labeling**: Only `"WhatsApp"` and `"Instagram"` appear as visible text (no raw phone numbers or `@` handles exposed in text labels).
- [x] **Portfolio**: Active project `Design Bench` links to `https://designbench.netlify.app` with `target="_blank"` and `rel="noopener noreferrer"`. No fake or broken cards.
- [x] **Coming Soon Pages**: Dedicated pages for AI Calling Agent, Automated Lead Gen, and Academy, each equipped with functional email capture and instant WhatsApp fallback.
- [x] **SEO & Social Cards**: Rich OpenGraph tags, Twitter cards, and Schema.org JSON-LD structured data included.
- [x] **Responsive Layout**: Tested across mobile (320px–375px), tablet (768px), desktop (1024px–1440px).

---

## Easy Future Editing Guide

All key business parameters are centralized in clean, maintainable files so you can make updates without touching complex code:

### 1. Update WhatsApp Number or Social Links
Edit `/src/data/config.ts`:
```ts
export const BRAND = {
  name: "RYAR Canvas",
  whatsappNumber: "923497925109",
  whatsappBaseUrl: "https://wa.me/923497925109",
  instagramUrl: "https://www.instagram.com/ryarcanvas/",
  ...
};
```

### 2. Update Package Prices or Inclusions
Edit `/src/data/packages.ts`:
```ts
// Update price or features directly:
{
  id: "web-pkg-a",
  name: "12 Months Hosting + 1 Website",
  price: 99, // change price here
  ...
}
```

### 3. Add New Portfolio Projects
Edit `/src/data/portfolio.ts`:
```ts
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "design-bench",
    name: "Design Bench",
    url: "https://designbench.netlify.app",
    image: "/assets/images/designbench-thumbnail.webp",
    description: "Explore the Design Bench project.",
    category: "Web Application & Tools",
    tags: ["Web Application", "Client-Side Tools"],
    active: true,
  },
  // Add new real projects here when launched:
  // { id: "new-project", name: "...", url: "...", active: true }
];
```

### 4. Connect Early Access Form to an External Service
Edit `formEndpoint` in `/src/data/config.ts`:
```ts
// Example: Formspree, Basin, Getform, or Google Apps Script
formEndpoint: "https://formspree.io/f/your_form_id",
```
*When empty, the website automatically displays an honest status notice and provides a direct WhatsApp connection button so you never lose interested prospects!*

### 5. Replace or Update the Brand Logo
Place your new image file in `/public/assets/images/ryar-canvas-logo.png` and it will automatically update across the header, footer, favicon, and OpenGraph metadata.

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server (runs on port 3000)
npm run dev

# Compile TypeScript and build production static bundle
npm run build

# Preview production build locally
npm run preview
```

---

*© RYAR Canvas. All rights reserved. Let's Work Together to Bring Your Ideas to Life.*
