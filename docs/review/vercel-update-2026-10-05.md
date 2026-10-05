# Vercel preparation and motion checks

Recovered the complete uncommitted 24 September content revision from the preserved checkout. No source media had to be recreated. The final CAD, assembly photograph, physical prototype, foundry portrait, and public résumé are included in the content commit.

The follow-up revision adds Vercel configuration and Node.js 22 metadata. Motion retains the previously reviewed layouts and adds a thin project progress line. JavaScript groups geometry reads before visual writes, uses the actual header height, and leaves every image accessible when IntersectionObserver is unavailable or reduced motion is enabled.

Checks completed on 5 October 2026:

- Vite production build passed; JavaScript syntax and Git whitespace checks passed.
- Executed the scroll controller against desktop-sized DOM fixtures: all three project chapters, scrolling backward, one scheduled animation frame per burst of scroll events, reduced-motion changes, missing IntersectionObserver, and bounded progress passed.
- All 18 local asset references in the production HTML resolve, including responsive image variants and the résumé PDF.
- All 13 WebP images decode and contain no EXIF metadata.
- The public résumé contains the supplied public email and no phone number or school email.
- The existing desktop, 320px/390px mobile, 820px tablet, and no-script browser review is recorded in `content-update-2026-09-24.md`. Layout is unchanged by this follow-up. A fresh visual browser review was not performed in this session because the managed preview's required browser skill was unavailable. The behavior checks above do not replace a final visual check of the Vercel deployment.

At preparation time, the Vercel browser showed a login page, and GitHub exposed no deployment status for the earlier commit. The project's connection and deployment must be verified after the canonical source is synced. No DNS changes or old-site deletions are part of these commits.
