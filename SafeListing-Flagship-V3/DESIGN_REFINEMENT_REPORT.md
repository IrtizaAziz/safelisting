# SafeListing design refinement

22 October 2026 · Asia/Kuala_Lumpur

Base: `1ad652d` on `codex/deploy-flagship-v3`, including the issuer-spacing fix after `4344e9d`. Refinement branch: `codex/flagship-design-skills-refinement`.

## 1. Skills and workflows actually used

| Skill | Executed work | Application |
| --- | --- | --- |
| Impeccable 4.7.0 | Installed `context --target` command; critique, audit, polish and craft-floor references; two isolated read-only assessments; rendered browser inspection; CLI detector on decoded documents | Prioritised mobile task access, issuer focus loss, comparison recognition and contextual evidence. Final independent code review found no Critical/Important defect. |
| UI/UX Pro Max | Installed `search.py --design-system` for rental-trust/issuer work; UX search for form labels/errors/focus/keyboard/touch targets; stack search for responsive forms/navigation | Persistent field errors, labelled native phone navigation, visible task entry and 44px controls. Generated recommendations were evaluated rather than copied. |
| Hue 1.1.0 | Read installed local-codebase, component-inventory, semantic-token, icon-selection and refinement guidance plus icon-kit reference; compared source with both identical master-design copies | Preserved the master palette/font and existing geometric SVG language. Distinguished covered issuer values from unknown payment coverage. No replacement skill, design model, palette, icon package or preview system generated. |
| Emil Design Eng | Read installed interaction, timing, interruption, focus and reduced-motion guidance; reviewed actual controls and existing walkthrough implementation | Immediate focus/scroll correction, explicit short transition properties, touch-safe hover gating, reduced-motion press feedback, and preservation of the original single moving progress indicator. |

Ponytail guided small in-place changes. Execution, regression-first testing and verification skills supported implementation. No new runtime dependency was installed.

## 2. Baseline and initial problems

The static connected source is `safelisting-application.html`: three JSON-encoded documents, with the build replacing only the outer router. Historical standalone exports and root React/Vite are not the deployed source.

Before edits, Node 22.23.4 export build, root `npm run check` (typecheck/lint/six tests/build), and the existing five-width browser journey passed. Baseline screenshots were retained in TEMP without overwriting existing deployment evidence. A matching six-width baseline was subsequently captured from the preserved, unchanged pre-edit source.

Independent visual assessment: 27/40 heuristic score, moderate cognitive load. This is an expert judgment, not measured user research. Main findings:

1. **P1:** issuer selection removed the focused ledger button and opened a different view at the previous scroll position. At 390px, September's title could be 457px above the visible region.
2. **P1:** mobile record/header depth postponed the advertisement input. At 390px, the record was 1,055px tall and the textarea began at document y=1,901px.
3. **P2:** unselected finding buttons hid each claim's result.
4. **P2:** payment's missing evidence inherited an “Issuer-authorised value” label and blue covered-value border.
5. **P2:** issuer mobile framing and a five-button grid delayed the ledger; form errors were not associated with their fields.

Strengths retained: editorial hero, red/cream identity, diverging comparison lines, document-style record, authorisation ledger, separate-period history, explicit demo/payment boundaries, and the working walkthrough.

## 3. Concrete changes and verification

| Source | Before | After | Why / verification |
| --- | --- | --- | --- |
| Impeccable, UI/UX Pro Max | Mobile renter must scroll through full secondary metadata | Compact essentials, secondary issuer/version/provenance disclosure and first-screen comparison shortcut | Property/unit, synthetic scope, CURRENT label, rent, contact, validity and payment/legal limitations remain visible. Six-width screenshots and focus/geometry checks. |
| UI/UX Pro Max | Five issuer view buttons form a tall phone grid | Labelled native select below 640px; existing desktop strip retained | All five destinations remain available and synchronized. Browser tests exercise each view at six widths. |
| Impeccable, Emil | Record selection loses focus and selected-period context | Destination-heading focus with header clearance; desktop ledger selection restores the selected button | Enter-key regression and bounding-box checks; independent browser review also exercised pending November authority navigation. |
| UI/UX Pro Max | Invalid field has only a remote error summary | Persistent local error text linked with `aria-describedby`, plus the summary and first-invalid-field focus | Error association and correction tested; independent review confirmed correcting Property does not clear a separate Rent error. |
| Impeccable, Hue | Finding controls expose field names only | Each control shows its named result and accessible name | Rent/contact contradictions and payment NOT VERIFIED remain recognizable before switching findings. Checked at every width. |
| Hue | Missing bank-recipient evidence looks issuer-authorised | Payment uses “Record coverage” and unknown-family styling | Payment screenshot and exact label assertion; rent/contact retain covered-value presentation. |
| Impeccable | Homepage sample shortcut becomes a separate grid item | Shortcut sits inside the reference form beside its help | Desktop/mobile renders preserve hero composition and bring sample entry to its task. |
| Hue, Emil | Small explanatory labels and uneven browser/control details | Diagram/reference labels raised to 12px; brand hit area, caret, selection, explicit transitions and reduced-motion press styling | Computed/source checks and screenshots. Existing master colours and licensed font bytes preserved. |

At 390px the record is now about **650px** tall, versus **1,055px** before. The textarea's natural document position moved from **1,901px to 1,368px**. At 320px the record moved from **1,122px to 738px**. The comparison shortcut provides direct focused access without traversing that remaining document height. These are browser layout measurements, not conversion or usability-study results.

## 4. Before/after evidence

Screenshots use Chromium at 900px viewport height. Static state captures use reduced motion to avoid intermediate animation frames; walkthrough playback is separately tested with ordinary motion.

| View | Before | After |
| --- | --- | --- |
| Desktop hero | [Before](refinement-evidence/before/home-1440.png) | [After](refinement-evidence/after/home-1440.png) |
| Phone reference entry | [Before](refinement-evidence/before/home-390.png) | [After](refinement-evidence/after/home-390.png) |
| Phone record | [Before](refinement-evidence/before/verify-record-390.png) | [After](refinement-evidence/after/verify-record-390.png) |
| Phone findings | [Before](refinement-evidence/before/verify-findings-390.png) | [After](refinement-evidence/after/verify-findings-390.png) |
| Payment coverage | [Before](refinement-evidence/before/verify-payment-390.png) | [After](refinement-evidence/after/verify-payment-390.png) |
| Issuer entry/overview | [Before](refinement-evidence/before/issuer-entry-overview-390.png) | [After](refinement-evidence/after/issuer-entry-overview-390.png) |

Both evidence directories include corresponding 320/390/768/1024/1280/1440 captures, major homepage sections, verification states and all five issuer views. Viewport screenshots show the actual iframe scroll position; they are not stitched full inner-document captures. The decoded [page diff](refinement-evidence/page-changes.diff) makes the compressed source reviewable. [Source integrity evidence](refinement-evidence/source-integrity.json) records font preservation.

## 5. Rejected changes and detector findings

- Rejected UI/UX Pro Max's generated teal palette, Lexend/Source Sans typography and testimonial structure: they conflict with the approved identity and unsupported social-proof claims.
- Retained the homepage's large editorial typography, warm canvas, kickers and comparison-line accents where they express the established design. Generic skill defaults do not override the requested refinement.
- Rejected a framework rewrite, broad stylesheet consolidation, new animation library, icon/font downloads, invented analytics and backend work.
- Kept the existing mobile menu and confirmation-dialog mechanics because their focus isolation, Escape handling and return focus already worked.

The final mechanical scan returned **25 findings: 23 warnings and 2 advisories**, down from the baseline assessment's 27. [Detector output](refinement-evidence/detector.json) is retained. It reports line 0 rather than usable source locations; findings identify decoded page documents.

Five undersized-eyebrow warnings were checked against computed styles and render at 12px. Three cramped-padding warnings overlook nested container insets. Six warnings concern the explicitly approved font and cream canvas. Accent borders, short tracked labels, authority section labels and editorial copy were retained where consistent with the master and existing identity. These exceptions do not establish accessibility conformance. A final decorative phone-only record motif adjustment and editor jump-target correction do not change those detector classifications.

## 6. Responsive and interaction results

| Width | Rendered review | Core journeys | Refinement assertions | Page overflow |
| --- | --- | --- | --- | --- |
| 320 | Reviewed | Pass | Pass | None observed |
| 390 | Reviewed, including all five issuer views and dialogs | Pass | Pass | None observed |
| 768 | Reviewed | Pass | Pass | None observed |
| 1024 | Reviewed | Pass | Pass | None observed |
| 1280 | Reviewed | Pass | Pass | None observed |
| 1440 | Reviewed, including homepage sections | Pass | Pass | None observed |

Executed locally:

- Export build: pass under Node 22.23.4.
- Root `npm run check`: pass, six existing tests; root application source unchanged.
- `node deployment-qa.cjs`: six-width end-to-end journeys pass, including navigation/menu, reference handoff, comparisons/edits/copy, unknown/expired references, issuer entry/views and refresh. Ordinary-motion walkthrough play/pause/resume/completion/replay/manual navigation and the sole progress indicator pass.
- `node refinement-qa.cjs`: **68 checks pass**, covering six widths, all issuer views, selection focus, field errors, exact-target revocation/signing unavailability, authenticated-access unavailability, pending-authority eligibility, candidate/source invalidation, copy failure recovery and a 200% text-size reflow scenario.
- Both browser suites recorded no uncaught JavaScript or asset errors.
- New behavior checks first failed against the original implementation, then passed after the fixes.

Run from this directory. `SL_EVIDENCE_DIR` selects an output directory for either suite. Existing DOM-stub scripts that read historical standalone JavaScript are not the acceptance source for the connected payload; actual rendered deployment journeys are the regression gate.

## 7. Deployment and review

[Public preview](https://safelisting-flagship-v3-8rpwrxtx2-irtiza-aziz-s-projects.vercel.app) · deployment `dpl_HCRcMAEcMx6Xu65CRAmnperDwxrp` · source commit `46197be` · [draft PR #5](https://github.com/IrtizaAziz/safelisting/pull/5), targeting `codex/deploy-flagship-v3`.

The preview passed both browser suites in fresh unauthenticated contexts: six core viewport journeys and all 68 refinement checks, including ordinary-motion walkthrough playback. Public screenshots of the homepage, findings and validation feedback were visually reviewed. [Refinement results](refinement-evidence/preview/results.json), [core journey results](refinement-evidence/preview-regression/remote-results.json) and [public integrity checks](refinement-evidence/preview/public-integrity.json) are retained.

Public routes/font/licence return 200; source/configuration/report/unrelated paths return 404. The response contains the exact local build followed by Vercel's standard preview feedback script. Production HTML still hashes identically to the pre-edit baseline, and its alias still targets `dpl_hVHv4MVQFDj5QA1qko41YSijYkiR`. No production promotion, production alias change, PR #4 merge, or other-project change was performed.

The Vercel connector returned not-found for the supplied project/team; the existing authenticated CLI resolved the correct linked project. Its folder upload preserves the existing six-file deployment allowlist. Design reports and evidence are not public runtime files.

## 8. Remaining issues and assessment

No real record verification, legal-authority process, cryptographic checks, issuer authentication, signing, persistent issuance/revocation or bank-recipient checks were added. All sample operations remain truthful about their limitations.

No physical-device, screen-reader, Safari/WebKit, mobile virtual-keyboard, comprehensive contrast certification or performance-under-throttling acceptance was performed. Existing multiple CSS generations remain; a wholesale cleanup was deliberately avoided. The mobile record still contains substantive evidence and therefore requires scrolling when read in full.

The strongest gains are reduced phone task friction, clearer recognition of all findings, accurate payment framing and reliable issuer navigation context. The homepage and ledger retain their established identity. Human visual approval of the separate preview remains the release gate.

## Production release follow-up
After preview delivery, the user authorised production with 'push vercel'. The refinement is now published at https://safelisting-flagship-v3.vercel.app, deployment dpl_FDQnCoW2Z8WTmJq9BStZMdWb3a1D. Earlier production-unchanged statements describe the preview-delivery checkpoint. No PR merged.

