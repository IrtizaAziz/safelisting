# Editorial hero refinement — 23 October 2026 MYT

Preview: https://safelisting-flagship-v3-h7brl7vub-irtiza-aziz-s-projects.vercel.app
Base: a8d8fc0 / codex/issuer-direct-entry. Branch: codex/hero-editorial-refinement.

Dark Editorial was selected over Red Architectural (competes with the CTA) and Warm Chromatic (less predictable text contrast). Homepage keeps the original animated ember shader, palette, stirring and lifecycle; the new dark text backing, ivory/gold type and open precision diagram give it clearer hierarchy. Issuer uses a compact charcoal header and gold emphasis. Hero copy follows the approved plan. Light navigation, reference controls, disclosures and workflows remain.

First visual review caught a headline line overlapping the D and an issuer supporting-copy colour override; both corrected. Laptop fold checks initially failed; tightening operator metadata and surrounding shell spacing puts the first record at 675.33px, leaving 44.67px visible at 1280x720 and 92.67px at 1366x768. Ledger content and scripts are unchanged.

Runtime files: safelisting-application.html and grainient.css. Added hero-qa.cjs and hero-contract.cjs; adjusted the historical timeline contract to allow issuer-header edits while the new contract protects all issuer scripts and ledger content. Verifier, home supporting sections, page scripts, router, font and Grainient JS remain unchanged.

Validation:
- Node 22.23.4 root npm run check: typecheck, lint, six tests and build pass; flagship static build passes.
- Six-width hero screenshots and overflow checks pass locally and publicly: 320/390/768/1024/1280/1440.
- All 68 local refinement checks pass; public deployment journeys and direct-entry matrix pass, including five issuer views, navigation, reference transfer, comparison edits, unknown/expired samples, refresh, history and mobile menu.
- Timeline four desktop fit cases, ten ordinary-motion cases and extended resize/reverse/short-height/reduced-motion/blocked-assets tests pass.
- Local/public Grainient lifecycle and fallback tests pass; frozen cursor control changes zero pixels and stirring changes 190136 pixels, with trail weights returning to zero.
- Contrast bound assumes even a pure white shader pixel behind the 82% dark text backing: ivory 10.65:1, gold 5.97:1. Mobile backing is stronger. Issuer ivory/gold sit on solid charcoal. This covers text areas; it is not a claim that the entire product underwent a new accessibility audit.
- Impeccable detector on grainient.css returns an empty findings array.
- Baseline screenshot capture intentionally reproduces the old failed fold criterion (824.23px); revised fold checks pass. Matching reduced-motion captures are in hero-evidence/before and hero-evidence/public; comparison.html places them side by side.

AI use: Codex implemented CSS, embedded HTML/copy edits, QA and this report, guided by Impeccable, UI/UX Pro Max, Hue's existing-system consistency principles and Emil's motion guidance. No new external assets, packages or licences. Existing React Bits/GSAP notices and unresolved competition/IP review limitations remain applicable.

Production was not promoted; no PR merged. Physical-device and screen-reader checks remain unverified. Existing renderer startup/performance limitations remain. Next task: user reviews the separate preview and comparison before authorising merge or production promotion.
