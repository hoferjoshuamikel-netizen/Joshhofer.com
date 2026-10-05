# Audit and migration record

## Observed starting state

- GitHub: hoferjoshuamikel-netizen/Joshhofer.com, public, created 11 September 2026. Empty repository; zero branches, files, commits, dependencies or deployment configuration. Default branch name was main but no branch reference existed. Repository metadata reported has_pages=false.
- Registrar: Squarespace Domains LLC, confirmed by Verisign RDAP.
- Current www site: Google Sites. HTTPS returned HTTP 200 and Google Sites markup and service headers. The bare domain redirected to https://www.joshhofer.com/.
- No deployed code exists in the new repository, so it cannot be the source serving the current live site.
- Live LinkedIn link: https://www.linkedin.com/in/joshua-hofer-11098a27a/
- Source folder: JoshHofer website source. Five graduation images were available. The 00_CURRENT_RESUME and old-site archive folders were empty before this work.

## DNS before migration

| Record | Observed value | TTL |
| --- | --- | --- |
| www CNAME | ghs.googlehosted.com. | 1800 |
| Apex A | 198.49.23.145, 198.49.23.144, 198.185.159.144, 198.185.159.145 | 14400 |
| Nameservers | ns-cloud-a1 through ns-cloud-a4.googledomains.com. | 21600 |
| MX | aspmx.l.google.com and alt1 through alt4.aspmx.l.google.com | 14400 |
| Apex AAAA | No answer returned | — |

These are observations, not replacement instructions. Preserve MX, TXT, SPF, DKIM, DMARC, nameservers and unrelated records. Change only the verified website records when all release gates pass.

## Cutover gates

1. Preserve useful old material, retain the original Google Site, and track unresolved asset downloads.
2. Synchronize source to canonical GitHub main and verify that the complete Git tree matches the deployment source.
3. Verify the separate deployment URL and valid HTTPS with no certificate bypass.
4. Verify desktop and narrow mobile layouts, image loading, and contact links.
5. Confirm access to the domain's DNS manager, record its existing configuration, and obtain the destination's exact DNS instructions.
6. Tell the owner which website records will change and the rollback values before the production mutation.
7. Move website records only, then confirm HTTPS and content on both the apex and www hostnames.
8. Leave the original Google Site and private archive intact.

## Historical GitHub blocker (resolved 24 September 2026)

GitHub originally rejected a Contents API create with HTTP 403: Resource not accessible by integration. The repository was missing from the app's selected repositories. The owner corrected this on 24 September; subsequent writes succeeded. Earlier résumé files in 99_UNSORTED were not used for publication.

## Homepage concept revision, 12 September 2026

The owner rejected the minimal temporary layout and requested scrolling animation, submarine and aircraft carrier imagery, Plant Wizard, and co-ops. The homepage now follows that direction while leaving the larger permanent website for later discovery. This change does not authorize or perform a domain cutover.

The repository remained empty and the new Contents write was again rejected by GitHub with the same integration-level 403. ChatGPT approval preferences do not grant GitHub OAuth or app repository scopes; those preferences were not changed. The separate Sites deployment mirror continues to preserve the source commits pending a successful canonical GitHub push.

The Plant Wizard, CPP, and Dynalec source folders were rechecked and contained no files. Two proposal CAD images were recovered from the private old-site archive. No old source files were removed or altered. New public Navy imagery and its reuse sources are recorded in the media inventory.

## Sources

- GitHub repository metadata and branches/contents endpoints, read through the connected GitHub account.
- HTTPS response and HTML from https://www.joshhofer.com/ and the linked pages.
- DNS responses from https://dns.google/resolve?name=joshhofer.com&type=A and corresponding NS/MX/AAAA and www CNAME queries. Raw pre-change answers are in the private archive.
- Registrar record: https://rdap.verisign.com/com/v1/domain/joshhofer.com
- Source file and folder metadata read through the connected Google Drive account.

## Rollback

Restore the recorded original www CNAME and any changed apex website records. Keep original Google Sites custom-domain configuration in place until cutover has been verified. No DNS or original-site deletion is part of this revision.


## Recheck, 24 September 2026

The www CNAME remains `ghs.googlehosted.com.` and the apex A records remain the four Squarespace forwarding addresses listed above. Both the apex and www were fetched with certificate validation enabled; the apex redirects to www, and the Google Sites page returns HTTP 200 over HTTPS. The old site remains live.

The private archive ZIP was verified in Drive at the same file ID, with a size of 21,551,932 bytes. A metadata-only attempt to correct the existing Drive folder label was denied with appNotAuthorizedToFile. The folder name remains unchanged; its ID, contents, and location were retained. Repository documentation links to the folder without repeating its misspelled label. All public-facing domain references use JoshHofer.com.

GitHub repository metadata still shows an empty public repository with no branches. Another attempt to create README.md returned HTTP 403, Resource not accessible by integration. No GitHub changes or domain changes were made. The website is ready for canonical synchronization when GitHub repository write access is restored.

The homepage places graduation photography immediately after the naval opening. Plant Wizard follows, using labeled original proposal concepts. The current Plant Wizard and current résumé folders remain empty. The earlier responsive and interaction verification is retained; the final revision preserves the same component layouts and native scroll behavior.

## Access restored and new source material, later on 24 September 2026

The owner authorized the GitHub app for Joshhofer.com. All five preserved website revisions were imported into canonical main with matching Git tree hashes, then fetched and compared. See `github-import.md`; original history was retained and no force update was used.

The owner then added the résumé, Plant Wizard, and CPP materials. Direct folder reads revealed files that were not yet returned by Drive search. The homepage now uses the final Plant Wizard CAD, assembly and physical-prototype photographs, documented electrical/systems contributions, a general foundry portrait, and co-op dates from the supplied résumé. Employee documents, detailed foundry test photographs, original project reports with contact details, and incomplete media remain private. No Drive source files were moved or deleted.

The public résumé derivative removes the private phone number and uses me@joshhofer.com. Its supplied body text remains unchanged, including Expected August 2026; that education wording still needs the owner's confirmation before production launch.

The preview remains owner-private. JoshHofer.com and www.JoshHofer.com have not been moved. Remaining cutover work is to select/confirm a public deployment that supports the custom domain, obtain its exact domain records, confirm DNS-manager access, notify the owner of the website-record changes and rollback values, and verify both hostnames after the switch. Do not point a public domain at the private review page.
