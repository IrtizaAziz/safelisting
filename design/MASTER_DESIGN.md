# SafeListing — Master Design System

**Version:** 1.0 · **Date:** 22 October 2026 (Asia/Kuala_Lumpur)

**Status:** Finalised design specification. Selected visual system retained; rendered usability and visual implementation review remain future gates. Documentation only; no new screens or UI implementation.

**Product:** SafeListing — AI-Powered Rental Listing Trust

**Design owner:** Astra / OpenAI Codex · shared with Antigravity and Local Codex

**Repository:** IrtizaAziz/safelisting · React 19, Vite, strict TypeScript

## 1. Authority, vision and design principles

This is the sole current visual authority. It supersedes every earlier SafeListing visual direction, including `design/DESIGN.md` and both prior renter prototypes wherever they exist. Preserve those artifacts as historical evidence; do not derive new layouts, fonts or colours from them. The three immutable requirements files remain the functional authority: `01_PRD.md`, `02_USER_FLOWS.md`, `04_SCREENS_INTERACTIONS.md`. If this document conflicts with them, the functional requirements win and the design specification must be corrected.

**Vision:** a contemporary rental-trust product that makes the scope of evidence easy to understand. Express the energy of SDP's refreshed red-to-gold identity through an independent SafeListing product language. Premium quality comes from precise hierarchy, usable controls and traceable evidence. It must work for a renter on a phone, with little knowledge of cryptography, as well as an issuer reviewing a controlled operation.

1. **Show the scope before the conclusion.** Name whose record, which property/version, when checked and what each claim covers.
2. **Give every result a boundary.** CURRENT describes an issuer record; MATCH describes one compared claim. Neither is a transaction-safety assessment.
3. **Make the next useful action obvious.** One main action per task region; recovery alongside the problem.
4. **Keep evidence inspectable.** Preserve original message, editable candidates, issuer values and reasons. Never hide a discrepancy behind a score.
5. **Use brand colour with purpose.** Red identifies SafeListing actions; orange/gold add warmth outside trust decisions. Semantic states have separate tokens and named shapes.
6. **Make production truth visible.** Drive current status from authoritative results. Label demonstration data and simulations. Never imply an unavailable integration is connected.
7. **Design for ordinary reading conditions.** 16px default body, generous targets, high contrast, responsive reflow, accessible keyboard operation, fast feedback.

The core tenant and issuer workspaces are **Operate** surfaces. An eventual public introduction may persuade, but it must not delay reference entry. Do not force editorial hero compositions or dashboard scaffolding onto either task.

## 2. Research and branding evidence

Research performed on 22 October 2026 MYT. Inspected official live pages in Chromium, their computed styles and linked assets; read the official announcement. These are observed implementations at a point in time, not an authorised corporate brand manual.

| ID | Source and method | Verified finding / design implication |
| --- | --- | --- |
| R1 | [SDP brand-refresh announcement](https://www.simedarbyproperty.com/press-releases/sime-darby-property-launches-refreshed-brand-identity-anchored-purpose-and-legacy) | Announcement dated 18 September 2025; name, shield and heritage red retained. Updated identity uses an outward-moving form with red/yellow shades. This supports a warm spectrum reference, not use of its shield as SafeListing's logo. |
| R2 | [Current SDP homepage](https://www.simedarbyproperty.com/home/) · rendered visual/computed styles | Large place-based photography, assertive sans headings, branded warm accents. Metropolis font names observed. These are communication cues; no corporate page composition is adopted. |
| R3 | [Official hackathon page](https://www.simedarbyproperty.com/universityhackathon/) · computed CTA/CSS | Red calls to action, rounded navigation, geometric sans, warm highlights; actual CTA background `rgb(215,25,32)`. No verification-state components were established by this site inspection. |
| R4 | [Hackathon stylesheet](https://www.simedarbyproperty.com/universityhackathon/_next/static/css/a7866baf423b0098.css) · fetched in the same-origin browser | `--brand: #d71920`, `--brand-strong: #b5151c`, `--brand-2: #f15a22`, `--brand-3: #f58220`, `--gold: #fcaf17`. Stylesheet URL contains a build hash and may change. These are web implementation values. |
| R5 | [Official page's logo PNG](https://www.simedarbyproperty.com/universityhackathon/sdp.png) · original-size 1097×842 canvas pixel count, fully opaque pixels only | Largest relevant flat-colour counts: #D71921 (390,257), #F15922 (72,101), #F5821F (58,872), #FCAF17 (48,359). Pixel values differ slightly from CSS. No logo was copied into the project. |
| R6 | [Google Fonts Plus Jakarta Sans licence](https://raw.githubusercontent.com/google/fonts/main/ofl/plusjakartasans/OFL.txt) | Project authors identified; SIL OFL 1.1 confirmed. Font is independently selected; no claim that SDP uses it. No font binary added by this task. |

**Evidence classification:** A = formally documented corporate colour specification; B = sampled/measured official web implementation or asset; C = independent SafeListing adaptation. No A-class HEX specification was found in the three supplied sources. The announcement establishes colour families and identity history, not exact HEX values. Never relabel B or C as official corporate specifications.

Sampling is reproducible: open R3; inspect the Register Now CTA; fetch its linked CSS and read the named variables. Draw R5 at natural size on a same-origin canvas, tally RGB triplets only for alpha=255, and sort by frequency. JPEG/PNG processing, antialiasing and source encoding can produce near-values; use CSS red #D71920 consistently rather than mixing #D71920 and #D71921.

SDP is a content-rich reference: identity lives strongly in places, photography, typography and its shield. SafeListing is a task-oriented product; it borrows a measured warm colour family and confident sans direction, while deriving its own controls, status vocabulary and comparison behaviour. The homepage's photography, shield layers, carousel and red-to-orange search treatment are not product components to reproduce.

## 3. Final palette and provenance

| Colour | HEX | Class | Role / restriction |
| --- | --- | --- | --- |
| Signal red | #D71920 | B, R3/R4 | Light-theme primary action and restrained identity accent; never a record-status default |
| Red hover | #B5151C | B, R4 | Light primary hover; underlined links |
| Red pressed | #99121A | C | Active light action |
| Ember orange | #F15A22 | B, R4 | Small expressive brand accents; charcoal text only |
| Warm orange | #F58220 | B, R4 | Occasional non-semantic companion accent, no additional state meaning |
| Sun gold | #FCAF17 | B, R4/R5 | Small illustration/brand accents; charcoal text only |
| Charcoal | #1F2326 | C | Primary light text, independent neutral |
| Warm canvas | #FFF9F6 | C | Light page ground, independent adaptation |
| White | #FFFFFF | C for its product role | Content surface, inverse action text |
| Soft neutral | #F4F5F7 | C | Secondary containers, editors, quiet separators |
| Slate text | #535D68 | C | Supporting copy; no low-opacity text |
| Control border | #7A828E | C | Meaningful input/control boundaries |
| Structural border | #D9DEE5 | C | Decorative dividers only; not sufficient to identify a control |
| Record blue | #175CD3 | C | Current issuer-record scope, light focus |
| Match green | #067647 | C | Individual covered field agrees |
| Difference violet | #6941C6 | C | Claim contradiction, with explicit values/reason |
| Evidence ochre | #854D0E | C | Unknown, not verified, expired or suspended with different labels/icons |
| Critical crimson | #9F1239 | C | Revoked/invalid, form errors, destructive confirmation; always explicit action/status context |
| Information teal | #175569 | C | Service unavailable/informational context, never proof of verification |

The user's starting #D71920 is corroborated as a web value. Starting #F36B21 and #FFB52B are replaced with the observed #F15A22 and #FCAF17. #1F2326 and #FFF9F6 are retained as independent choices, with no corporate claim.

**Exact four SDP-inspired brand accents:** Signal red **#D71920**, Ember orange **#F15A22**, Warm orange **#F58220**, Sun gold **#FCAF17**. All four are **class B: measured official-web values**, using R4's named CSS variables; gold is also corroborated in R5's logo pixels. They are not class A corporate specifications. Hover/pressed colours, neutrals, semantic colours and dark-theme adaptations remain separate roles as classified above.

Keep the working canvas predominantly neutral. As a review heuristic, expressive red/orange/gold should occupy roughly 5–10% of the visible task area, excluding semantic content when a real state requires attention. Never force an area quota over legibility. No red-to-gold gradients behind record states, comparisons, inputs or warnings. A future non-task brand surface may use a controlled red-to-orange treatment only if text contrast is checked at its weakest point.

### 3.1 Semantic families

Every family has foreground, background and border tokens; border equals foreground unless explicitly revised and tested. Foreground is also the icon colour. Sharing a family does not merge statuses: exact text, icon and next action must remain distinct.

| Family | Light foreground / background / border | Dark foreground / background / border |
| --- | --- | --- |
| current | #175CD3 / #EFF5FF / #175CD3 | #8DB4FF / #18294A / #8DB4FF |
| match | #067647 / #ECFDF3 / #067647 | #75D9A5 / #133528 / #75D9A5 |
| contradiction | #6941C6 / #F4F0FF / #6941C6 | #C8B5FF / #2E2246 / #C8B5FF |
| unknown | #854D0E / #FFFAEB / #854D0E | #F0CA77 / #382B15 / #F0CA77 |
| critical | #9F1239 / #FFF1F3 / #9F1239 | #FFA4BA / #421E2A / #FFA4BA |
| neutral | #475467 / #F2F4F7 / #475467 | #CAD0D8 / #292E36 / #CAD0D8 |
| info | #175569 / #EEF8FC / #175569 | #9BD9EA / #17313C / #9BD9EA |


General interaction tokens cover default, hover, pressed, focus, selected, disabled, loading and error. Selected uses `action-soft` plus a visible outline/indicator and `aria-current` or `aria-selected` as appropriate; tint alone is insufficient. Loading uses neutral presentation plus a pending label; no success colour. Error uses critical tokens and linked explanatory text. No opacity is applied to semantic text.

## 4. Themes and contrast contract

**Ship light first.** Dark is fully specified below as an optional later theme, not required for the hackathon core. Do not invert screenshots or automatically activate a partial dark theme. Expose a theme preference only after every component/state has passed rendered review in both themes; then follow explicit preference, otherwise the OS preference. Do not change a theme midway through a task without user action or an actual system preference change.

| Role | Light | Optional dark |
| --- | --- | --- |
| canvas | #FFF9F6 | #15181D |
| surface | #FFFFFF | #1E232A |
| surface-subtle | #F4F5F7 | #272D35 |
| surface-raised | #FFFFFF | #303741 |
| text | #1F2326 | #F4F5F7 |
| text-muted | #535D68 | #BBC2CC |
| text-inverse | #FFFFFF | #1F2326 |
| border | #D9DEE5 | #454D59 |
| border-control | #7A828E | #8A929D |
| action | #D71920 | #F97076 |
| action-hover | #B5151C | #FF9296 |
| action-active | #99121A | #FFB0B3 |
| on-action | #FFFFFF | #341014 |
| action-soft | #FFF0EE | #3D2327 |
| link | #B5151C | #FFB0B3 |
| focus | #175CD3 | #A7C7FF |
| disabled-bg | #EAECF0 | #303741 |
| disabled-text | #475467 | #BBC2CC |
| selection-bg | #FFE0DA | #5E3039 |
| selection-text | #1F2326 | #FFFFFF |
| overlay | #1F2326 | #000000 |


All general roles are C except measured light action/hover values identified above. All semantic and dark values are C. Dark primary controls use a lighter coral with dark text; this is an accessibility adaptation, not an alteration of a corporate logo. The independent SafeListing wordmark can use theme text colour with a small brand-red accent.

| Intended pair | Light ratio | Dark ratio | Minimum |
| --- | --- | --- | --- |
| Body / canvas | 15.18:1 | 16.31:1 | 4.5:1 |
| Muted / surface | 6.70:1 | 8.80:1 | 4.5:1 |
| Primary label / action | 5.19:1 | 6.18:1 | 4.5:1 |
| Primary label / hover | 6.80:1 | 7.97:1 | 4.5:1 |
| Control border / surface | 3.88:1 | 5.03:1 | 3:1 |
| Focus / canvas | 5.74:1 | 10.38:1 | 3:1 |
| current text / tint | 5.47:1 | 6.95:1 | 4.5:1 |
| match text / tint | 5.40:1 | 7.80:1 | 4.5:1 |
| contradiction text / tint | 5.91:1 | 8.03:1 | 4.5:1 |
| unknown text / tint | 6.57:1 | 8.80:1 | 4.5:1 |
| critical text / tint | 7.30:1 | 7.77:1 | 4.5:1 |
| neutral text / tint | 6.98:1 | 8.79:1 | 4.5:1 |
| info text / tint | 7.67:1 | 8.77:1 | 4.5:1 |
| Charcoal / #F15A22 | 4.69:1 | Same solid pair | 4.5:1 |
| Charcoal / #F58220 | 6.10:1 | Same solid pair | 4.5:1 |
| Charcoal / #FCAF17 | 8.51:1 | Same solid pair | 4.5:1 |


Computed using WCAG relative sRGB luminance, compared against thresholds before rounding. Validation checked **114 foreground/background or meaningful-boundary pairs; all passed**. Text targets: 4.5:1 for normal text, 3:1 for qualifying large text; this system's normal UI pairs use 4.5:1. Meaningful control boundaries and state outlines: 3:1 against adjacent approved surfaces. Surface tints alone do not have 3:1 separation: pair them with labelled content and the specified state outline/icon. The pale structural divider is exempt only when decorative.

The list covers the approved solid pairs, including foreground against semantic background and border against its tint, canvas and surface. It does not certify arbitrary combinations, opacity, gradients, imagery, browser rendering or a complete application. White text on orange/gold is prohibited. Dark-mode accent borders must be recalculated if composited over a different surface. Focus rings sit outside a 2px surface-coloured separation gap; use the active local surface for that gap so rings remain visible beside filled controls.

References: [W3C text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Text colours and meaningful boundaries must be checked in the actual rendered application before a conformance claim.

## 5. Typography

**One family: Plus Jakarta Sans**, variable weights 400–700. Geometric construction gives SafeListing a confident identity; open counters, sentence case and a restrained weight range keep the task approachable. It is a fresh choice after evaluating UI/UX Pro Max's typography results; it does not inherit Manrope/DM Sans or copy SDP's Metropolis files. Use `system-ui, -apple-system, "Segoe UI", sans-serif` fallback. Use system monospace only for references and key IDs, never for whole record panels.

| Role | Size / line height | Weight | Use |
| --- | --- | --- | --- |
| Display | 40 / 48px wide; 32 / 40px narrow | 700 | Optional short introduction only; not a mandatory hero |
| Page title | 32 / 40px wide; 28 / 36px narrow | 700 | Current task |
| Section title | 24 / 32px | 600 | Record/comparison/issuer groups |
| Component title | 20 / 28px | 600 | Panel or dialog |
| Emphasis / key value | 24 / 32px | 700 | Rent or primary record value; retain units |
| Body / inputs | 16 / 24px | 400 / 500 | Explanations and all text entry |
| Labels / buttons | 14 / 20px | 600 | Controls; button may use 16px on phone |
| Metadata | 14 / 20px | 400 / 500 | Issuer, time, source and validity |
| Caption minimum | 12 / 18px | 500 | Non-critical secondary detail only |

Express sizes in rem, assuming the browser's usual 16px root; never override user font size. Titles: -0.02em tracking at 28px+, never below -0.03em. Labels/body: normal tracking. Semantic badges use 12px/18px, 600, no letterspacing above .02em; allow wrapping. Warnings and essential caveats use at least 14px/20px. Avoid all-caps paragraphs; reserved all-caps state terms remain readable.

Prose measure 60–72ch. Left align. Use tabular numerals for compared amounts, dates and versions; currency `RM1,850/month` with unit present and no separate unexplained number. No truncation of rent, contact, reference, verdict or validity. Break long references visually without altering copied bytes. Public copy actions copy only the opaque public reference. Show dates with timezone and unambiguous month names, e.g. `22 Oct 2026, 10:30 MYT` when supplied by the service. Never turn the browser clock into a server-freshness assertion.

Font delivery in a later implementation: self-host a licensed WOFF2 variable font and retain its OFL; `font-display: swap`. No dependency or font asset added in this documentation task. Font loading must not block lookup. Check Latin characters, Malay text, currency, numerals and fallback layout before release; do not claim measured readability benefits without user evidence.

## 6. Spacing, grid and responsive foundations

Spacing primitives in px: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64. Use rem equivalents in implementation. Bind roles: icon gap 8; label-to-control 8; related controls 12; field gap 20; panel padding 24 desktop / 16 phone; section gap 32; page gap 48 desktop / 32 phone. Prefer local grouping to evenly distributing unrelated content.

Page max-width 1200px for core workspaces, centred. Gutters 16px below 640, 24px from 640–1023, 32px from 1024. Single-column public forms max 640px. A two-panel task region requires at least 320px usable width for each panel plus its gap; collapse before squeezing text. A 12-column desktop / 8-column tablet / 4-column phone planning grid is optional alignment scaffolding, not a requirement to make cards. Gap 24px desktop, 16px phone.

Radii: 4px small status markers, 8px form controls/buttons, 12px content panels/dialogs. Pill radius only for short non-interactive state chips, not every container. Use a 1px border for surface grouping or one soft elevation for an overlay; do not pile shadows and borders onto every section. Floating overlays may use `0 12px 32px rgb(31 35 38 / 0.16)`; ordinary task surfaces have no shadow. Dark overlays use `0 12px 32px rgb(0 0 0 / 0.35)` plus an appropriate visible boundary.

## 7. Composition and information hierarchy

These are content and behaviour constraints, not final wireframes. Do not copy a prior renter composition. Evaluate page compositions with users once screens are authorised.

- **Public entry:** product/task identity, independent reference input and immediate action, brief assurance boundary. Avoid property browsing, account funnels or a mandatory explanatory carousel.
- **Record:** scoped status and check time first; unit and approved terms next; representative/contact and validity visible nearby; integrity and authority limitations readable in context. Compact provenance can expand into explanation, but a payee warning cannot be hidden there.
- **Compare:** outside message → editable candidates → comparison. On wider viewports a stable record summary may sit alongside the active task; on phone place a compact source summary above the comparison. Neither approach fixes exact column ratios or decorative treatments.
- **Findings:** field name, outside claim, authorised value, text verdict and reason; repeat these labels when stacked. Do not reduce the whole comparison to a red/green score. Make both values readable together.
- **Issuer:** approved/pending fixture scope and access state precede issuance. Reference lifecycle and protected action are grouped; revocation requires deliberate confirmation of the targeted version.
- **HomeLedger:** optional three-fact disclosure inside the tenant task. Provenance, dates and incompleteness caveat travel with facts. No separate property-management area.

Trust content outranks decorative introductions, brand artwork, unrelated account actions and aggregate statistics. A screenshot must retain source and scope, plus a design-preview or fictional-data disclosure when applicable; production results do not acquire simulation labels merely because they are shown in a screenshot. Never use a cropped green badge as proof.

## 8. Navigation

Two named workspaces: **Check a listing** (public default) and **Demo issuer** (operator context). The route implementation is deliberately open; navigation must preserve direct account-free entry and browser Back semantics. Operator links confer no privilege; actual access is enforced server-side. On small screens use a compact header/menu only if needed; a two-item navigation does not justify a permanent sidebar or bottom tab bar.

Return to a public reference through a fresh lookup; do not reuse earlier CURRENT state after switching contexts. Keep a new-reference action accessible from every result, and Retry in recoverable failures. No legacy mobility entry in primary judge navigation. Deep links to public opaque references are acceptable only after privacy and current-status behaviour are verified. Do not put admin secrets in URLs. Use anchors for navigation, buttons for actions, and `aria-current="page"` for the current destination.

## 9. Core component specifications

Implement as small reusable React components when UI work is authorised; the names below express component roles, not a new public API or backend schema. Use semantic variants rather than raw status-to-colour mapping scattered across screens.

| Component | Variants / structure | Interaction and constraints |
| --- | --- | --- |
| Button | Primary red, secondary outlined neutral, tertiary underlined/text, destructive critical | 44px minimum height; 48px main phone action; horizontal padding 16–20; 8px radius; label 14px/600. Icon 20px, gap 8. Secondary boundary uses control-border. Never apply red brand fill to an unknown/error status block. |
| IconButton | Neutral, critical | 44×44 minimum hit area, 20px glyph, accessible name, optional tooltip on hover AND focus. Never icon-only for essential issue/revoke/compare. |
| TextField / TextArea | Default, focus, populated, invalid, readonly, disabled, busy | Persistent visible label, help/error IDs, 16px input, minimum 48px height, 12px horizontal padding; textarea minimum 144px. Border-control identifies the field; placeholder is an example, not a label. |
| Select / checkbox | Native first, checked/selected/invalid/disabled | Label entire hit region; 44px minimum target; arrow/space behaviour native; no custom listbox unless keyboard/focus/portal behaviour is fully supported. |
| Surface / divider | Plain group, bounded record, subtle editor | 12px panel radius, 24/16px padding. Use actual content hierarchy before adding a container. Dividers are structural; inputs need their own stronger boundary. |
| RecordStatus | Icon + exact state + scope line | Pill/compact block, 12px/600 label, 8px horizontal padding, 4px vertical padding; no fixed height or ellipsis. Detail/status summary nearby is at least 14px. Never clickable unless an explicit disclosure control exists. |
| ClaimFinding | Field, two labelled values, verdict, reason | Stable semantic family by finding; desktop comparison row / stacked phone row. Only signed covered values can yield MATCH or CONTRADICTION. |
| InlineNotice | Info, unknown/payment, critical, demonstration | Icon 20px; heading 14px/600, body 14px/20px; 16px padding, 12px gap; thin semantic outline where colour boundary matters. Essential warning cannot be dismissed. |
| Disclosure | Native details/summary or button with aria-expanded | 44px summary target; preserve expanded state within task. Do not put payment or outage implications exclusively inside it. |
| PublicReference | Visible text + Copy reference | Exact copy only after available; wrap text, no clipped substring. Confirm success through polite status. On clipboard failure keep selectable text and inline recovery; no false success toast. |
| Dialog | Confirm specific revocation | Native dialog or equivalent focus trap/return; max width 480px, viewport gutters 16, max height fits dynamic viewport; no nested modal. Default focus on Cancel. Close/escape cancels before submission. |
| Feedback | Inline pending/result/error, optional toast | Inline feedback owns operation truth. Toast is supplementary, never the only location for a failure or revocation outcome. |

Common state behaviour: hover changes colour/border without layout shift; keyboard focus gets a 3px focus ring and 2px local-surface gap; active feedback changes fill/border immediately. Disabled retains readable label and a nearby reason when the action matters. Readonly remains focusable/selectable. Loading preserves button width, disables duplicate mutation, sets aria-busy on the operation region and announces the pending action. No fabricated time delay and no optimistic success for issuer mutations. Error has inline explanation and a useful recovery action.

## 10. Forms, tables and comparison mechanics

Reference input must accept the opaque reference contract supplied by engineering. Do not invent a production format regex from a demo fixture. Validate blank/malformed/excessive input according to the actual contract; give a correction prompt. On submit, clear current-positive presentation while fetching fresh status. If the input changes mid-request, discard that request's eventual UI result. Preserve user text during a recoverable failure.

External message text is untrusted data. Keep it as text, with no executable HTML, followed links or embedded instructions. Text extraction provides candidates, not trusted facts. Name the actual mechanism: rules, an actual integrated model, or a simulation. Permit edits, show source excerpts only when genuine, preserve missing values as missing. Do not use zero as an empty amount or quietly fill unknown contact fields. Changing message text invalidates candidates/findings; changing a candidate invalidates findings until comparison is repeated. Use original message values and corrected candidates distinctly if both are displayed.

Before a comparison, obtain an authoritative current-record decision according to the backend contract. If status changes or a required source is unavailable, suppress current-positive findings or clearly mark any retained history inconclusive. Do not infer trust from HTTP 200, a QR, a copied screenshot, a well-formed reference or an old client cache. The UI must consume domain status, not calculate legal authority from displayed profile fields.

For semantic tables use a caption, column headers and row headers. Compare columns: **Claim**, **Outside message**, **Issuer-authorised value**, **Finding**, **Reason**. Align amounts and units consistently; keep descriptions left aligned. Use restrained row separators, not zebra striping as the status signal. In narrow views reflow each row to a labelled field group; preserve reading order. Avoid horizontal scrolling for the core three-field comparison. Issuer metadata tables may scroll within a labelled region if truly two-dimensional, while essential controls and row text still reflow.

Required example: RM1,700/month versus RM1,850/month = CONTRADICTION; Contact B versus Contact A = CONTRADICTION; Account X versus no verified payee = NOT VERIFIED. Corrected covered fields may match. Phone formatting normalisation belongs to the documented engineering contract and must not collapse distinct numbers. No fake confidence scores, ownership percentages or transaction summaries.

## 11. Verification and trust-state semantics

Keep three concepts separate: **credential integrity**, **current issuer authorisation status**, and **legal letting authority evidence**. A cryptographic signature proves the integrity/origin of the statement under a trusted-key policy; it does not establish ownership or present legal power to let. A separate issuer review must establish its lawful scope. Current demonstration authority decisions are synthetic. Availability of an actual check, its provenance and its date must be visible.

| Domain / state | Family; icon (Lucide) | Required content and behaviour |
| --- | --- | --- |
| CURRENT record | current; FileCheck2 | Production: “CURRENT — issuer record” only after the implemented checks establish that status. Fictional test record: “CURRENT — demo issuer record” plus synthetic authority scope. Design preview: identify the result as simulated. Show issuer/version, approved scope, validity and genuine server checked-at time when available; a simulated time is labelled separately. Blue document treatment, no whole-page green success banner. |
| MATCH claim | match; Check | “MATCH” beside one covered field and both values. Does not authenticate the sender or payee. |
| CONTRADICTION claim | contradiction; GitCompareArrows | “CONTRADICTION”, both values and why they disagree. Violet difference treatment, no criminal accusation. |
| NOT VERIFIED / insufficient evidence | unknown; CircleHelp | Name what is missing or not covered. Missing/ambiguous rent is not assumed. Payment recipient always remains here in the MVP, including after other fields match. |
| REVOKED | critical; CircleX | “Authorisation revoked. This reference is no longer current.” Remove current-positive treatment; show timestamp only if authoritative. Ask for a new checked reference. |
| EXPIRED | unknown; Clock | “Authorisation expired. Request an updated record.” Display validity end. No CURRENT comparison. |
| SUSPENDED | unknown; PauseCircle | “Authorisation under review. Not currently confirmed.” Recheck or seek issuer clarification; no positive comparison. |
| SUPERSEDED | neutral; Replace | “A new version replaced this record. Do not rely on the older reference.” Obtain the replacement reference; never silently redirect trust to an unvalidated version. |
| INVALID / unauthenticated record | critical; FileX2 | “Record could not be authenticated.” No signature-integrity assertion. Distinguish from a form-format error. |
| UNKNOWN reference | neutral; SearchX | “Reference not established. This alone does not prove fraud.” Correct input or request a valid reference. |
| UNAVAILABLE | info; CloudOff | “Current verification unavailable. Do not use an earlier positive screenshot as proof.” Retry/new reference; no cached positive badge. |
| Empty | neutral; optional Search | Prompt for reference/message; offer a clearly fictional sample when it exists. No result badge. |
| Loading | neutral; LoaderCircle or static skeleton | Explain the real operation. Suppress prior CURRENT status, announce pending, prevent duplicates. Reduced motion uses a static indicator and text. |

Icons above describe the intended 24px-grid roles; resolve exact exported names against the existing Lucide version at implementation time without adding a package solely for a glyph. A semantically equivalent icon from that same kit is acceptable. Text is authoritative. Never use the SDP shield or a generic shield-check as “verified legal owner”.

**Brand-red ambiguity control:** primary buttons are compact, solid, action-labelled and in the task's action area. Critical states use deep crimson text/icon on a pale critical surface with an explicit failure heading, next step and optional outline. Contradictions use violet and a comparison icon. No red state dot alone, no critical banner styled like a CTA, and no adjacent “Revoke” and “Issue” red primary buttons. Use secondary treatment for revocation entry; reserve solid critical fill for the final confirmed operation. Test these distinctions in grayscale and with colour-vision simulation.

Provenance labels for HomeLedger: **Demo issuer checked** with named fact and date; **Owner declared** with no independent-certification implication; **Unknown / not disclosed** without a clean-condition implication. Always include “Selected facts only — not a complete property history or condition certification.”

## 12. Motion, interaction and feedback

| Interaction | Timing / easing | Rules |
| --- | --- | --- |
| Hover/pressed fill, border | 120ms / cubic-bezier(.23,1,.32,1) | Pointer-only enhancement; never move surrounding content |
| Non-keyboard popover/disclosure | 160ms / same ease-out | Optional opacity or <=4px translation; origin at trigger; interaction available immediately |
| Confirmation dialog | 200ms entry / 120ms exit | Optional opacity; no spring bounce; focus moves immediately |
| Updated finding | Immediate content / optional 120ms background | No congratulatory motion or delayed trust label |
| Pending operation | Actual operation duration | Indeterminate indicator after 200ms if needed to avoid flicker; no invented progress percentage or minimum success delay |

No animated keyboard focus, delayed keyboard transitions, page-load stagger, confetti, pulsing CURRENT badge or looping decorative background. Motion must explain state/feedback. Animate specific properties; never `transition: all`. Let in-flight transitions retarget without stacking. Prefer CSS for predetermined motion; do not add an animation library for this system.

Respect `prefers-reduced-motion`: remove transforms, looping indicators and nonessential animation; show static pending text/skeleton. Immediate state messages and keyboard response remain. No smooth auto-scroll while a user is editing. Interrupted requests must not announce stale success.

Issuer issue/revoke succeeds only after the protected server confirms. If an operation's outcome is uncertain, show it as unresolved and provide refresh; a local animation does not change the authoritative record. Confirm the exact reference/version before revocation. Copy feedback is announced only after the clipboard actually reports success. Retry must not quietly repeat a potentially completed mutation without the engineering operation contract.

## 13. Accessibility and keyboard contract

Target WCAG 2.2 AA in the implemented product; this document specifies requirements, not certification. Use landmarks, one task h1, ordered headings, native controls, programmatic labels, link/button semantics and a skip link. No keyboard traps beyond an active accessible modal; Escape cancels a pre-submit dialog and focus returns to its trigger. Tab order follows reading order; do not use positive tabindex. Native radio/select arrow and space interactions must remain.

Touch targets: product minimum 44×44px, 48px high for the main phone action, minimum 8px between neighbouring targets. This deliberately exceeds the [WCAG AA 24px minimum with exceptions](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html); do not describe 44px as the AA normative threshold. Inline prose links are the natural exception and must remain easy to select.

Focus is 3px, offset beyond a 2px surface gap. Ensure focused items are fully visible as a product rule; WCAG AA requires they are not entirely obscured. Account for sticky headers, banners and footers using scroll padding/margins. Preserve browser high-contrast/forced-colour outlines; use system colours in forced-colours mode and never rely on box-shadow alone.

Use `role="status"` / a polite atomic live region for pending/completion; inline errors associate through aria-describedby and aria-invalid. Use alert only for important immediate failure, not every keystroke. After explicit lookup, focus the result heading or error summary; after inline candidate editing retain focus. Announce domain-specific outcomes, not repeated full tables. Async completion must not steal focus if the user has already moved to a different task.

Support 200% text resize and reflow at 320 CSS px / 400% zoom without lost content or controls. Test user text spacing, font fallback, long references/contact values and landscape keyboards. Warn using text and shape in addition to hue. Payment and legal-authority limitations remain readable at 14px minimum and cannot be hover-only. See [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) and [focus not obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html).

## 14. Device behaviour

| Range | Layout behaviour | Content and control requirements |
| --- | --- | --- |
| 320–639px phone | One task column, 16px page gutters, 16px panel padding | Reference, record scope, candidates and findings remain in a coherent reading order; full-width main action; comparison rows become labelled groups; no horizontal page overflow |
| 640–1023px tablet | 24px gutters; stack by default, optional two panels only if each has >=320px usable content width | Candidate fields can form two columns only when each control remains readable; labels wrap rather than shrink |
| >=1024px desktop | 32px gutters, max-width 1200px; optional context-and-task or full comparison width | Keep source context visible without making every panel sticky; preserve prose measure and readable data density |

Review 320 (accessibility floor), 340, 390, 768, 1024 and 1440px. Breakpoints adjust structure, not font legibility. Check short viewports and a mobile virtual keyboard; do not pin essential controls behind it. Sticky source summaries may be used only when they do not cover focus or duplicate accessible content. Do not lock document scrolling to imitate a desktop app. Component height grows with translation, wrapping and text zoom.

## 15. Iconography, imagery and independent identity

Use existing **Lucide React** throughout product controls: 24px source grid, 20px default display, 16px dense metadata, consistent 2px source stroke, rounded terminals, no mixed filled/outline kits. The hackathon reference showed 1.5px outline arrows/down/audio/people glyphs with soft caps and geometric forms. Hue's kit criteria were consulted: Lucide fits the geometric minimal grammar and existing dependency; Tabler is closer in thin stroke but would add a kit and reduce consistency. This is SafeListing's kit choice, not a claim that SDP uses Lucide. Do not copy proprietary icon paths.

SafeListing identity is a distinct wordmark in Plus Jakarta Sans 700, with controlled red accent. A future symbol may express a record and its compared claims, but its drawing is a later task. Do not use, trace, rearrange or crop SDP's shield layers as a SafeListing mark. Never use an official logo as an authentication seal. Mention competition context in ordinary attribution text; an official-logo placement needs an actual permitted usage context and cannot imply partnership.

Core verification screens need no property photo to explain the trust mechanism. If imagery is later justified, use licensed imagery with provenance and explicit synthetic/illustrative labels wherever it might be mistaken for the checked unit. Do not use real development photography as a fictional record's evidence, fabricate property documents, or put decorative artwork behind critical fields. No AI illustration or asset is created in this task. Marketing imagery is a separate future decision.

## 16. Tone and UX writing

Calm, specific, direct. Name the evidence, limit and next step. Use “issuer-authorised value”, “outside message”, “candidate detail”, “current record” and “payment recipient not verified”. Explain cryptographic terms once in plain language; keep raw token/key data out of ordinary renter decisions. No accusation, endorsement, pressure, certainty score or sales claim.

| Situation | Preferred wording | Avoid |
| --- | --- | --- |
| Current production record | “CURRENT — issuer record” + actual issuer, scope, validity and server checked-at time | Adding “simulated” to a real implemented check; implying legal ownership or payment safety |
| Current fictional test record | “CURRENT — demo issuer record” + explicit synthetic property/identity/authority scope | Implying the fictional authority decision was independently legally verified |
| Difference | “The message says RM1,700/month; this record authorises RM1,850/month.” | “Scammer detected” |
| Matching values | “These covered details match the issuer record.” | “Safe to pay” |
| Unknown payee | “Payment recipient: NOT VERIFIED.” + no bank-control check | “Payment approved” |
| Unavailable status | “Current verification unavailable. Try again.” + earlier-positive warning | “Looks valid” from a cached result |
| Rules-only extraction | “Extracted using text rules. Review the candidate details.” | “AI verified your message” |
| Design preview | “Design preview — simulated results.” | “Live server check complete” |
| Fictional live demo | “DEMO — synthetic records and simulated issuer authority.” | Calling real cryptographic operations simulated if they have actually been integrated and verified |

### Copy by evidence context

These are three independent copy decisions: whether an operation actually ran, whether its input/authority data is fictional, and what its evidence establishes. Apply disclosures to the relevant fact or operation rather than labelling every capability simulated.

| Context | Disclosure and truthful copy | Authority boundary |
| --- | --- | --- |
| Design preview with simulated operations | “Design preview — simulated results.” Label illustrative status/time; do not say “signature checked” or “server confirmed” unless those operations actually ran. | No legal authority check is established by the visual preview. |
| Functioning implementation using fictional test data | “DEMO — fictional property, identities and issuer authority decision.” Real operations may say “Signature integrity checked” or “Revocation recorded” when their actual results support that wording. Only mocked operations are called simulated. | A real signature over a fictional record does not turn its synthetic authority fixture into an independently verified legal mandate. |
| Production using actual data and implemented checks | Describe the completed operation precisely: “Signature integrity checked”, “Current issuer status checked”, “Reference revoked”, with actual source/time as appropriate. Show unavailable checks as unavailable; do not add demo/simulation wording to real features. | Describe any legal-authority review only to its evidenced scope, reviewer, date and limits. Record integrity/current status alone never establishes legal ownership, sender control, bank identity or payment safety. |

Mixed implementations follow the same rule per operation: real cryptographic integrity may coexist with a simulated authority decision or an unavailable status service. The positive CURRENT gate still requires every mandatory check in the functional contract. An unavailable mandatory service therefore yields an inconclusive result even when signature integrity genuinely passed. Deployment, legal authority process and operational approvals remain separate engineering work.

## 17. Anti-patterns and prohibited treatments

- No whole-transaction safety badge, verification percentage, bank-payee implication, scam-free seal or “SDP certified” claim.
- No CURRENT derived from a copied QR, issuer profile, local role flag, valid signature alone or unavailable current-status source.
- No green wash over a current record/comparison; no red brand page treating a contradiction as decorative content.
- No tiny all-caps warnings, colour-only distinctions, hidden assurance caveats, clipped amounts or disappearing error messages.
- No ornamental “AI” sparkles, skeletons containing fake passed checks, invented metrics, automatic trust scores or confidence rings.
- No property-marketplace search/navigation, compulsory renter registration, payment CTA, owner-document upload product or separate HomeLedger portal.
- No inherited evergreen theme, old font pairing, copied renter layouts, official corporate header or shield-derived SafeListing identity.
- No page-level illustration or motion that competes with source status, mismatch values and recovery actions.
- No elaborate animation/stylesheet dependency or stack migration solely to achieve these tokens.

## 18. Implementation-facing tokens

The following is a documentation example only. No stylesheet or UI file is created. Implement roles as CSS custom properties in a later task; map them to typed component variants and keep the raw palette in one source. Separate record status from claim finding in TypeScript; do not collapse both into `success | error`. Map any unexpected server status to an inconclusive presentation until the domain contract provides a recognised state. This does not invent a backend response schema.

```css
:root {
  color-scheme: light;
  --sl-brand-red: #D71920; /* B: measured web CSS; not a corporate manual */
  --sl-brand-orange: #F15A22;
  --sl-brand-orange-warm: #F58220;
  --sl-brand-gold: #FCAF17;
  --sl-canvas: #FFF9F6;
  --sl-surface: #FFFFFF;
  --sl-surface-subtle: #F4F5F7;
  --sl-surface-raised: #FFFFFF;
  --sl-text: #1F2326;
  --sl-text-muted: #535D68;
  --sl-text-inverse: #FFFFFF;
  --sl-border: #D9DEE5;
  --sl-border-control: #7A828E;
  --sl-action: #D71920;
  --sl-action-hover: #B5151C;
  --sl-action-active: #99121A;
  --sl-on-action: #FFFFFF;
  --sl-action-soft: #FFF0EE;
  --sl-link: #B5151C;
  --sl-focus: #175CD3;
  --sl-disabled-bg: #EAECF0;
  --sl-disabled-text: #475467;
  --sl-selection-bg: #FFE0DA;
  --sl-selection-text: #1F2326;
  --sl-overlay: #1F2326;
  --sl-current-fg: #175CD3;
  --sl-current-bg: #EFF5FF;
  --sl-current-border: #175CD3;
  --sl-match-fg: #067647;
  --sl-match-bg: #ECFDF3;
  --sl-match-border: #067647;
  --sl-contradiction-fg: #6941C6;
  --sl-contradiction-bg: #F4F0FF;
  --sl-contradiction-border: #6941C6;
  --sl-unknown-fg: #854D0E;
  --sl-unknown-bg: #FFFAEB;
  --sl-unknown-border: #854D0E;
  --sl-critical-fg: #9F1239;
  --sl-critical-bg: #FFF1F3;
  --sl-critical-border: #9F1239;
  --sl-neutral-fg: #475467;
  --sl-neutral-bg: #F2F4F7;
  --sl-neutral-border: #475467;
  --sl-info-fg: #175569;
  --sl-info-bg: #EEF8FC;
  --sl-info-border: #175569;
  --sl-font-ui: "Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
  --sl-font-reference: ui-monospace, "SFMono-Regular", Consolas, monospace;
  --sl-text-body: 1rem;
  --sl-text-label: .875rem;
  --sl-text-caption: .75rem;
  --sl-text-component: 1.25rem;
  --sl-text-section: 1.5rem;
  --sl-text-page: 2rem;
  --sl-text-display: 2.5rem;
  --sl-space-0: 0;
  --sl-space-1: .25rem;
  --sl-space-2: .5rem;
  --sl-space-3: .75rem;
  --sl-space-4: 1rem;
  --sl-space-5: 1.25rem;
  --sl-space-6: 1.5rem;
  --sl-space-8: 2rem;
  --sl-space-10: 2.5rem;
  --sl-space-12: 3rem;
  --sl-space-16: 4rem;
  --sl-radius-marker: .25rem;
  --sl-radius-control: .5rem;
  --sl-radius-panel: .75rem;
  --sl-radius-badge: 999px;
  --sl-duration-fast: 120ms;
  --sl-duration-standard: 160ms;
  --sl-duration-dialog: 200ms;
  --sl-ease-out: cubic-bezier(.23, 1, .32, 1);
  --sl-control-min: 2.75rem;
  --sl-action-phone: 3rem;
  --sl-overlay-opacity: .48;
}
[data-theme="dark"] {
  color-scheme: dark;
  --sl-canvas: #15181D;
  --sl-surface: #1E232A;
  --sl-surface-subtle: #272D35;
  --sl-surface-raised: #303741;
  --sl-text: #F4F5F7;
  --sl-text-muted: #BBC2CC;
  --sl-text-inverse: #1F2326;
  --sl-border: #454D59;
  --sl-border-control: #8A929D;
  --sl-action: #F97076;
  --sl-action-hover: #FF9296;
  --sl-action-active: #FFB0B3;
  --sl-on-action: #341014;
  --sl-action-soft: #3D2327;
  --sl-link: #FFB0B3;
  --sl-focus: #A7C7FF;
  --sl-disabled-bg: #303741;
  --sl-disabled-text: #BBC2CC;
  --sl-selection-bg: #5E3039;
  --sl-selection-text: #FFFFFF;
  --sl-overlay: #000000;
  --sl-current-fg: #8DB4FF;
  --sl-current-bg: #18294A;
  --sl-current-border: #8DB4FF;
  --sl-match-fg: #75D9A5;
  --sl-match-bg: #133528;
  --sl-match-border: #75D9A5;
  --sl-contradiction-fg: #C8B5FF;
  --sl-contradiction-bg: #2E2246;
  --sl-contradiction-border: #C8B5FF;
  --sl-unknown-fg: #F0CA77;
  --sl-unknown-bg: #382B15;
  --sl-unknown-border: #F0CA77;
  --sl-critical-fg: #FFA4BA;
  --sl-critical-bg: #421E2A;
  --sl-critical-border: #FFA4BA;
  --sl-neutral-fg: #CAD0D8;
  --sl-neutral-bg: #292E36;
  --sl-neutral-border: #CAD0D8;
  --sl-info-fg: #9BD9EA;
  --sl-info-bg: #17313C;
  --sl-info-border: #9BD9EA;
  --sl-overlay-opacity: .64;
}
@media (max-width: 639px) {
  :root { --sl-text-page: 1.75rem; --sl-text-display: 2rem; }
}
@media (prefers-reduced-motion: reduce) {
  :root {
    --sl-duration-fast: 0ms;
    --sl-duration-standard: 0ms;
    --sl-duration-dialog: 0ms;
  }
  /* Components must also remove looping motion and nonessential transforms. */
}
```


Semantic aliases: record-current → current; claim-match → match; claim-contradiction → contradiction; payee/not-verified/expired/suspended → unknown; revoked/invalid/form-error/destructive → critical; superseded/unknown-reference/loading/empty → neutral; unavailable → info. Exact state strings and copy remain distinct. For the final destructive button use critical foreground as fill and critical background as its text; this is the same checked contrast pair reversed. With a focus ring, use the local surface gap described above.

Shared non-colour conventions: minimum control 2.75rem / phone main action 3rem; icon gap .5rem; row padding 1rem; line width 1px; semantic outline 1px; focus width 3px plus 2px separation; overlay levels: base 0, sticky 10, popover 20, dialog 30, supplementary toast 40. Use native top-layer modal/popover behaviour or portals; do not clip overlays inside scrolling record panels. In forced colours preserve system backgrounds, borders and outlines rather than forcing brand fills.

No new backend, authentication, payments, infrastructure or font/package installation is authorised by this design system. Current source remains React 19/Vite/strict TypeScript. Production result rendering must use actual service results and protect issuer operations server-side; an inactive menu or tab is not access control. Uploaded text never becomes instructions. Resolve engineering work under its own bounded brief.

## 19. Quality gates and critical review

**Executed in this documentation task:** official-source inspection; original-size logo sampling; measured CSS/computed styles; skill searches and reference review; 114 contrast calculations; documentation consistency/coverage and immutable-file/source/export integrity checks. No screen was generated or changed, so responsive rendering, visual appeal, assistive-technology behaviour and usability are future acceptance gates, not passed tests.

Machine-readable evidence: [MASTER_DESIGN_VALIDATION.json](MASTER_DESIGN_VALIDATION.json) records the exact contrast pairs, thresholds, master digest and protected-file hashes. All 21 required sections are present; the CSS example defines 77 role names with no undefined references. Twenty-six protected files (the immutable requirements, application source, dependency manifests and prior exports) retain their pre-task hashes. The preceding documentation task's `npm run check` passed on Node 22.23.3: typecheck, lint, six existing tests and production build. This regression check validates the existing application baseline; it does not validate an implementation of the new design system. Finalisation changes only copy, authority clarification and evidence metadata; the selected colours, type, layout guidance, component specifications and CSS token example are retained. Version-controlled documentation scope on `codex/safelisting-master-design`: master, root pointer, validation report and isolated finalisation log entries; unrelated staged prototype/setup work is excluded.

| Skeptical review issue | Resolution in this specification | Remaining verification |
| --- | --- | --- |
| Are these “official HEX codes”? | No manual found; class B web values and C adaptations labelled; CSS/pixel differences recorded | Obtain corporate guidance only if future formal co-branding requires it |
| Red brand may look like a failure | Compact red actions; violet differences; crimson critical panels; precise icons/copy | Test unaided recognition and grayscale on actual components |
| Orange/gold fails white text | Charcoal-only text on these accents; normal text never uses bright accent as ink on white | Check composite/hover states in rendered UI |
| Old green system may leak into new work | This master overrides all historic visual documents; root points here | Audit later screens for stale tokens/fonts/layout copies |
| “Current” may imply legal authority | Three assurance concepts, labelled source/time/scope and required warnings | Test renter comprehension; reject safety interpretations |
| Dark colours may be inverted blindly | Explicit theme pairs; optional dark remains gated on complete rendered review | Both-theme full component gallery once screen work is authorised |
| Premium may become a luxury landing page | One readable sans; task hierarchy and evidence-led components; no fixed hero/wireframe | Observe task completion on low-end phones and normal renters |

### Future implementation and visual-review checklist

- [ ] All required states rendered with fixture-backed data and exact copy; no status inferred from a successful HTTP transport alone.
- [ ] Brand red, critical crimson, violet contradiction, blue current and green match identifiable by text/icon in grayscale.
- [ ] Payment remains NOT VERIFIED for current and fully matching examples.
- [ ] New lookup and record-status failures remove current-positive presentation; candidate/message edits clear stale findings; late responses do not overwrite newer inputs.
- [ ] Every control has default/hover/focus/pressed/disabled/pending/error treatment as applicable; no dead UI controls.
- [ ] Keyboard-only lookup, candidate correction, comparison, copy, dialog cancel/confirm and error recovery work; focus/announcements checked with a screen reader.
- [ ] Actual type, font fallback, contrast and 44px targets reviewed at 320/340/390/768/1024/1440px, 200% text and 400% zoom.
- [ ] Essential text wraps; comparisons preserve paired values and labels; mobile keyboard/sticky elements do not cover focus.
- [ ] Reduced motion, forced colours, long inputs and unsupported/missing fields remain usable.
- [ ] Issuer access, pending-fixture rejection, signature tampering, expiry, revocation, outage and shared-state consistency tested at actual application boundaries.
- [ ] No private identities, signing secrets, real bank details or private certificates exposed; no hidden integration or endorsement claim.
- [ ] Optional HomeLedger limited to three provenance-labelled facts with incompleteness caveat.
- [ ] Preview screenshots never counted as functional submission evidence; actual executed build/commit used for real demo claims.

## 20. Requirement traceability

| Requirement | Design response | Location |
| --- | --- | --- |
| PR-01; F-01; S-01; Q-01 | Account-free entry and independently entered public reference | §§7–10 |
| PR-02; S-02; Q-02 | Credential integrity distinguished from authority; invalid status blocks reassurance | §11 |
| PR-03; F-04; S-05; Q-03/04 | Protected issuer context, pending-fixture denial and explicit permission states; no UI privilege claim | §§8–9,12,18 |
| PR-04; F-02/05; S-04; Q-05/06/07/13 | Non-current state mapping, fresh recheck, no optimistic mutation or stale positive | §§10–12 |
| PR-05; F-07; Q-08 | Unavailable/inconclusive treatment, persistent recovery, no reused positive screenshot | §§10–11,16 |
| PR-06; F-03; S-03; Q-09/11/12 | Editable candidates, paired RM/contact values, per-field contradiction/match/unknown | §§7,9–11 |
| PR-07; Q-10/15 | Payment remains NOT VERIFIED; no global success or fraud inference | §§11,16–17 |
| PR-08; S-07; Q-14/18 | Synthetic fixtures and unavailable-integration disclosures; no secret data/endorsement | §§1,11,15–18 |
| PR-09; Q-16 | Readable type, keyboard/focus/target/reflow rules and review widths | §§5–6,12–14 |
| PR-10; Q-18 | Versioned evidence and actual-build claims; documentation checks not functional test passes | §19 |
| P2; F-06; S-06; Q-17 | Optional embedded three-fact provenance component; no standalone management product | §§7,11,19 |

S-01–S-07, F-01–F-07 and PR-01–PR-10 remain unchanged. This document provides presentation rules, not certification that the requirements have been implemented. Cryptography, actual authority review and production readiness still require engineering and independent evidence.

## 21. Skill use, conflicts and open decisions

All four named skills were accessible at their installed SKILL.md paths. They were consulted directly; they were not passed as unexplained names to a generator. This task generated no application screen, preview page or reusable skill package.

| Skill / local evidence | Specific use | Recommendation rejected or bounded |
| --- | --- | --- |
| UI/UX Pro Max · `C:/Users/IRTIZA/.codex/skills/ui-ux-pro-max/SKILL.md`, `scripts/search.py` | Ran design-system query `rental trust verification property consumer red accessible premium product forms comparison`; typography query `readable professional geometric humanist`; UX query `error feedback keyboard form comparison`. Adopted explicit feedback/recovery, visible errors, keyboard/error announcements and readable comparison structure. | Broad real-estate match suggested Cinzel/Josefin Sans, teal and promotional certificates/metrics. Rejected as unsuitable for an ordinary renter task and incompatible with truthful trust boundaries. Typography alternatives included Outfit/Work Sans and Lexend/Source Sans 3; selected one independent family to reduce visual fragmentation. |
| Hue · `C:/Users/IRTIZA/.codex/skills/hue/SKILL.md`, `references/icon-kits.md` | Applied observed-vs-derived evidence, source component inventory, surface temperature, primitive-to-semantic role mapping and icon criteria. Recorded CSS and logo differences rather than “correcting” them into fictional corporate values. | Hue is a design-language skill generator, not a colour-authority database. Used its analysis methodology only; did not create its full skill/bento/hero previews because the user explicitly requested one master document and no pages. |
| Emil Design Eng · `C:/Users/IRTIZA/.codex/skills/emil-design-eng/SKILL.md` | Applied frequency/purpose motion decisions, fast ease-out, interruptible feedback, reduced motion, pointer-only hover and no animated keyboard delay; defined exact timing/feedback in §12. | No gratuitous spring/celebration or animation package. No UI-code review was run, so its Before/After code-review format is not presented as an executed audit. |
| Impeccable · `C:/Users/IRTIZA/.codex/skills/impeccable/SKILL.md`, `reference/operate.md`, `reference/critique.md` | Applied Operate mode, one-family UI typography, restrained task colour, complete component states, structural responsive behaviour and skeptical review in §19. | The earlier session already ran context; it was not rerun. Old visual context is expressly superseded by this brief. No page detector or rendered-screen critique is claimed for this documentation-only task; no skill-created mockups or concept pages were produced. |

Product requirements and explicit user constraints resolve conflicts first, verified source facts second, accessibility/usability third, and stylistic preferences last. Do not accept a skill's self-reported “AAA” label as measured application compliance. Do not reproduce protected corporate assets or blindly inherit a generated template.

### Decisions complete for later implementation

Palette/provenance, light default and optional dark map, type family/scale, shared component roles, trust-state semantics, interaction timings, accessibility floor and responsive constraints are specified. No implementer should invent extra safety semantics, fonts or theme colours to fill a gap. Use content-driven compositions within these constraints; exact page layouts remain a later usability/design task.

### Unresolved decisions and limits

1. Rendered visual and usability acceptance when screens are later authorised. This master specification is finalised; no screen creation is part of this task.
2. Final SafeListing symbol artwork; text wordmark is the default until separately designed. No corporate-logo permission or brand-manual HEX specification is established.
3. Exact public/operator page compositions and whether optional dark mode merits delivery; default is light, no theme switch initially.
4. Actual authority-review process, trusted key policy, status freshness contract and production protection/deployment are engineering/legal-operational work. No new integration is assumed.
5. Real renter usability, multilingual copy review and screen-reader/device evidence remain to be gathered after implementation. The selected typography has no project-specific user validation yet.

**Exact next task:** a later explicitly authorised design task may create new screens against this finalised master, then gather visual/usability evidence. Preserve old artifacts as superseded historical work. Do not implement pages from this documentation task.
