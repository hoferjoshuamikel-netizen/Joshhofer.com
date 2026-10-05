# JoshHofer.com

A photographic, scrolling homepage for Joshua Hofer, Electromechanical Engineer. Naval imagery opens the page, followed by a prominent graduation portrait, the final Plant Wizard CAD and real build photographs, Dynalec and CPP co-ops, a public résumé, and contact links.

## Source of truth

Canonical repository: https://github.com/hoferjoshuamikel-netizen/Joshhofer.com

GitHub access was restored on 24 September 2026 after the owner added this repository to the integration's authorized repositories. The five preserved source revisions were imported with identical Git tree hashes; the original commit IDs are recorded in the corresponding GitHub commit messages. Original source history remains preserved locally and in the deployment mirror. See `docs/github-import.md` for the mapping. GitHub is the canonical source; the Sites remote is a deployment mirror. Before publishing a revision, verify that its complete file tree matches the canonical GitHub commit.

## Development

Node.js 22 or newer is recommended. Install with `npm ci`, develop with `npm run dev`, and build with `npm run build`. The public deployment consists only of `dist/`. Vite is the only development dependency; the published page has no JavaScript framework or third-party scripts. The permanent site's content system remains undecided.

## Content and media

The page uses the owner's graduation photograph, final Plant Wizard CAD, real assembly and prototype photographs, a foundry portrait, and credited public-domain naval photography. All published images are local WebP assets. The older proposal images remain preserved. Original Drive files and folder organization remain intact. See `docs/content-map.md` for source folders and `docs/media-inventory.md` for provenance.

The résumé uploaded to `00_CURRENT_RESUME` on 24 September is available at `public/documents/joshua-hofer-resume.pdf`. This public derivative removes the private phone number and replaces the header contact line with the supplied public email. The original Drive PDF is untouched. Its body text is preserved, including "Expected August 2026"; the owner should confirm the degree wording before the domain launch. No graduation or employment dates were silently invented.

Public email: me@joshhofer.com, supplied by the owner. LinkedIn was recovered from the live site's own link. GitHub is the verified connected repository owner's profile.

## Preservation

See `archive/old-site/README.md` and `docs/migration.md`. Do not delete the original Google Site. Unreviewed historical materials belong in the private archive, not this public repository or `public/`.

## Motion and content editing

Edit homepage copy and semantic sections in `index.html`, presentation in `src/style.css`, and scroll behavior in `src/main.js`. Motion uses native scrolling, IntersectionObserver, and requestAnimationFrame; there is no scroll hijacking or animation dependency. The desktop opening pins briefly, vessel images move at different rates, and the three Plant Wizard images follow the reading position. System reduced-motion preferences provide static reading with a caption for every image. The page and co-op details remain usable without JavaScript.

This is an iterative homepage concept, not the completed permanent website. It has no invented project outcomes, detailed employer designs, or placeholder download buttons. Deployment still uses a separate private review URL. The original JoshHofer.com domain has not moved.
