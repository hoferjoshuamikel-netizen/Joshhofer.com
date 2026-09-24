# JoshHofer.com

A photographic, scrolling homepage concept for Joshua Hofer, Electromechanical Engineer. Naval imagery opens the page, followed by Plant Wizard, Dynalec and CPP co-ops, a graduation portrait, and contact links.

## Source of truth

Canonical repository: https://github.com/hoferjoshuamikel-netizen/Joshhofer.com

The repository was empty at audit on 11 September 2026. A new write attempt on 12 September 2026 still returned HTTP 403 (Resource not accessible by integration). These local commits are ready to push once repository write access is available. Do not describe the GitHub repository as synchronized until that push is verified. The Sites remote is a deployment mirror, not the canonical development repository.

## Development

Node.js 22 or newer is recommended. Install with `npm ci`, develop with `npm run dev`, and build with `npm run build`. The public deployment consists only of `dist/`. Vite is the only development dependency; the published page has no JavaScript framework or third-party scripts. The permanent site's content system remains undecided.

## Content and media

The page uses the owner's graduation photograph, two genuine CAD concepts recovered from the team's Plant Wizard proposal, and credited public-domain naval photography. All published images are local WebP assets. Original source materials remain intact. See `docs/content-map.md` for the Drive folders and the next content needed for each section, and `docs/media-inventory.md` for provenance.

No résumé is published because the designated current résumé folder was empty and the older linked résumé contains dated application material. A second PDF in 99_UNSORTED still describes graduation as expected and includes a private phone number.

Public email: me@joshhofer.com, supplied by the owner. LinkedIn was recovered from the live site's own link. GitHub is the verified connected repository owner's profile.

## Preservation

See `archive/old-site/README.md` and `docs/migration.md`. Do not delete the original Google Site. Unreviewed historical materials belong in the private archive, not this public repository or `public/`.

## Motion and content editing

Edit homepage copy and semantic sections in `index.html`, presentation in `src/style.css`, and scroll behavior in `src/main.js`. Motion uses native scrolling, IntersectionObserver, and requestAnimationFrame; there is no scroll hijacking or animation dependency. The desktop opening pins briefly, vessel images move at different rates, the Plant Wizard concepts crossfade with the reading position, and section text reveals once. System reduced-motion preferences provide static reading and show both concepts. The page and co-op details remain usable without JavaScript.

This is an iterative homepage concept, not the completed permanent website. It has no invented project outcomes, detailed employer designs, or placeholder download buttons. Deployment still uses a separate private review URL. The original JoshHofer.com domain has not moved.
