# RYAR Canvas — public frontend

Next.js static export for GitHub Pages. This repository contains the public site only. The private backend lives separately in `hsiryar/ryar-canvas-backend` and provides Neon-backed Markdown management, NextAuth, Nodemailer, and rebuild dispatch. A static GitHub Pages site cannot run the backend.

## Status and domain

The existing `main` branch and currently configured Pages domain are not changed by this branch. The website code uses **https://riarcanvas.online/** for its canonical URLs, sitemap, RSS, Open Graph and `public/CNAME`, as requested in the original brief. The current GitHub Pages settings reported **https://ryarcanvas.online/** instead. **Do not merge/deploy until the owner confirms the canonical domain** and DNS, `CNAME`, metadata and Pages settings have been aligned. Changing a Pages custom domain can interrupt the existing live site.

## Local build

Use Node.js 22.12+ and npm. `.npmrc` enables legacy peer resolution to match the private backend's NextAuth credentials-only setup.

```bash
npm ci
npm run build
cd out && python3 -m http.server 8000 --bind 0.0.0.0
```

The prebuild sync reads published posts from `DATABASE_URL` (Neon) in the shell. Without it, a local build produces an empty blog and a clear warning. A configured but unreachable database fails the build. Never add the URL to source control. The public contact form is disabled until `NEXT_PUBLIC_API_URL` is set to the separately deployed HTTPS backend.

## Production setup

1. In the backend repository, create the Neon schema, deploy the backend and configure authentication, SMTP and rebuild credentials. No account signup is exposed to visitors.
2. In this repository, set Actions secret `NEON_DATABASE_URL` (prefer read-only access to published posts) and Actions variable `NEXT_PUBLIC_API_URL` to the public backend HTTPS URL, without trailing slash. The workflow intentionally fails when the database secret is missing, to avoid silently publishing an empty blog.
3. Confirm the official domain spelling and ensure `public/CNAME`, `lib/metadata.ts`, `lib/posts.ts`, `scripts/sync-posts.mjs`, `public/robots.txt`, `public/llms.txt`, `app/layout.tsx` and homepage structured data use the same URL. Update GitHub Pages and DNS only after confirmation.
4. In GitHub Settings → Pages set source to **GitHub Actions** when ready to replace the existing site. Merge the reviewed frontend branch to `main`; check Actions, TLS, all service links, contact form, blog, metadata, and redirects. Do not switch the existing Pages source until you are ready to publish the replacement.
5. Backend rebuild dispatch uses owner `hsiryar`, repository `ryarcanvas`, workflow `pages.yml`, branch `main`, and a server-side token with Actions read/write permission. Never reuse a compromised token.

The original global brand site, its exact logo, WhatsApp links and package details are preserved. Existing package data and WhatsApp number: `content/legacy-packages.json`; original copy and CTA generation: `content/legacy-build-site.py`. After changes run `python3 scripts/refresh-legacy.py`, commit `content/legacy-pages.json`, and rebuild. New styling is `public/assets/css/theme.css`; blog data sync is `scripts/sync-posts.mjs`; article rendering is `templates/article-page.tsx`; portfolio is `public/js/portfolio.js`; coming-soon email forms are separately unconfigured in `public/js/forms.js`.

Search/AI discovery includes canonicals, metadata, sitemap, RSS, schema.org and `llms.txt`; indexing is not guaranteed. The original logo file is under `public/assets/images/`.
