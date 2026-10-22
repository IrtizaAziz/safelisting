# SafeListing flagship deployment — 22 October 2026 MYT

Production: https://safelisting-flagship-v3.vercel.app

Tested preview: https://safelisting-flagship-v3-bewrxug3d-irtiza-aziz-s-projects.vercel.app

Project: `safelisting-flagship-v3` · `prj_vDfxs97KPdn72RHoXhUtXaddwqVa`

## Architecture and source selection

The complete export contains three static homepage editions, standalone verifier/issuer editions, navigation editions, an integrated application, historical screenshots, generator scripts, review pages and tests. Its manifest points to the earlier `flagship-v3.1/index.html`; the connected journey is `safelisting-application.html`, documented by `safelisting-integration-handoff.md`. The latter preserves the flagship v3.2 walkthrough and includes all three connected views. It is the deployment source.

No React/Vite conversion or new dependency is required. Existing inline CSS, scripts, SVG icons and embedded Plus Jakarta Sans fonts remain intact. `build.mjs` replaces only the outer hash router with `router.js`, adds a root base URL to each embedded document and emits the preloaded font from the existing embedded bytes. The original export remains unchanged. `OFL.txt` is copied from the supplied font licence.

Vercel uses Other (`framework: null`), Node 22.x, `npm run build`, output `dist`. CLI deployments run **inside `SafeListing-Flagship-V3/`**. Project root is unset because that directory is the uploaded root; this is not a repository-root deployment. Automatic Git integration is disconnected to avoid deploying the unrelated root Vite app. If Git builds are enabled later, explicitly configure repository root `SafeListing-Flagship-V3` first.

`.vercelignore` permits only six runtime/build inputs. Output contains index HTML, router JS, font and licence; no design documentation, screenshots, source package configuration, credentials or other repository files are served. Explicit rewrites cover `/verify`, `/verify/:reference` and `/issuer`; unrelated paths keep real 404s. No catch-all rewrite. No environment variables or live integrations are needed.

## Routes and functionality

- `/`: approved flagship homepage, reference entry, sample shortcut, navigation, comparison walkthrough.
- `/verify/SL-2026-PJ-1208`: illustrative sample record, blank advertisement initially, local text-rule extraction, editable candidates and deterministic field comparisons.
- `/verify/SL-2026-PJ-1208-SEP`: expired sample; no current result.
- Other references: sample-catalogue miss and unavailable live verification; never fabricated CURRENT.
- `/issuer`: issuer entry; real organisation sign-in reports unavailable.
- `/issuer?mode=sample`: five sample task views, search/filter, local draft, exact-version confirmation and honest unavailable signing/revocation responses. Not authenticated production access.

References carry from homepage without duplicate entry. History, refresh, query parameters and original `/#/...` shared links work. Original moving walkthrough indicator is retained, with no duplicate progress bar.

Live lookup, legal letting authority review, cryptographic signature validation, server-enforced issuer identity/roles, signing, persistent issuance/amendment/revocation, bank/payee checks and model-based extraction remain unimplemented. Sample names/property/authority are illustrative. Matching claims do not establish payment safety. Draft storage is browser-session-only.

## Validation

Node 22.23.4: root `npm run check` passed (typecheck, lint, six tests, Vite build). Static export build and original verifier/issuer regression scripts passed.

`deployment-qa.cjs` uses installed Playwright and Chrome on this workstation. It exercises actual rendered controls at 1440, 1280, 768, 390 and 320px: empty validation, exact reference transfer, comparisons, candidate edits, copy, unknown/expired references, sample issuer entry/views, navigation and refresh. Mobile menu opens/closes through X/Escape and restores focus. No horizontal page overflow, uncaught JS errors or failed assets. Real-time walkthrough play/pause/resume/completion/replay and single moving progress indicator pass. Malformed/script-like reference stays unverified.

Local homepage screenshot buffers matched the approved connected export exactly at all five widths. Screenshots are retained locally in `deployment-evidence/`; selected mobile/desktop renders were visually inspected. Preview and production are checked in fresh unauthenticated browser contexts. Private/configuration/unknown paths return 404. These are automated Chrome viewport checks, not physical-phone or screen-reader acceptance.

Reproduce: `npm run build`, then `node deployment-qa.cjs` (local), or `node deployment-qa.cjs https://safelisting-flagship-v3.vercel.app` (public). The QA script uses this workstation's existing Playwright/Chrome paths, not a build dependency.

## Deployment notes

Initial attempts failed because nested font files were excluded by the upload allowlist and a repository-style root setting did not fit folder-based CLI uploads. Both were resolved before the successful preview. The first Vercel CLI creation auto-connected Git; that connection was removed from this new project. No existing Vercel project was changed. The successful preview was promoted to production after browser acceptance; Vercel creates a production deployment during promotion.

Next task: team review on physical phones and with assistive technology, then separately scope real trust/issuer services. Do not represent this frontend deployment as implementation of those services.


## Issuer entry layout repair — 22 October 2026 MYT
Restored missing spacing on the issuer entry card: responsive inner padding, bounded 760px width, separate text/action/disclosure spacing, surface background and stacked mobile actions. Content and sample behaviour are unchanged. Added rendered padding/stack/overflow assertions and issuer-entry screenshots at all five QA widths. Copy QA now waits for asynchronous clipboard completion. Preview: https://safelisting-flagship-v3-fzikabxfj-irtiza-aziz-s-projects.vercel.app. Impeccable layout guidance used; detector warning for the existing warm canvas intentionally retained under the approved visual design. Root Node 22 check and local/preview Chrome journeys pass.
