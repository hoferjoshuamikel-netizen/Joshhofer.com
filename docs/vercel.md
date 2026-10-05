# Vercel deployment

Vercel is the deployment target selected by Joshua on 5 October 2026. GitHub remains the source of truth. The existing private Sites publication and its recorded configuration remain preserved as an earlier review environment.

Connect the existing Vercel project to `hoferjoshuamikel-netizen/Joshhofer.com`, with production branch `main` and the repository root as Root Directory. The tracked `vercel.json` declares the Vite framework, `npm ci`, `npm run build`, and output directory `dist`. Node.js 22 is declared in `package.json` and `.nvmrc`. No environment variables are required for this static homepage.

Vercel's [project configuration reference](https://vercel.com/docs/project-configuration/vercel-json) documents these overrides. Its [build configuration guide](https://vercel.com/docs/builds/configure-a-build) describes repository root and output settings.

First verify the new revision at the project's generated HTTPS deployment URL, including all three Plant Wizard images, résumé PDF, contact links, desktop scrolling, and mobile layout. The earlier desktop/mobile checks are recorded in `review/content-update-2026-09-24.md`. The current session's checks and any remaining verification limits are recorded separately.

The production domain must move only after the deployment is verified and its exact DNS instructions are available. Preserve the original Google Site and the archive described in `../archive/old-site/README.md`. Keep mail records unchanged. `migration.md` records the original website DNS and rollback procedure. This repository configuration does not change DNS or attach a custom domain.
