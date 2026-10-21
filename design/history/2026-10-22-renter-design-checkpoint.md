# SafeListing — Renter prototype design system

> **SUPERSEDED — 22 October 2026 MYT.** This historical checkpoint is preserved unchanged below. The user's visual restart makes `design/MASTER_DESIGN.md` the sole current design authority. Do not inherit this document's tokens, typography or layout for new work.

**Status: DRAFT — awaiting user visual approval.** Checkpoint 01, 22 October 2026 MYT. Astra / Local Codex is the sole active design writer; Argon remains on standby. Approval of the implementation plan is not approval of this rendered visual direction.

## Intent and authority

One calm, account-free rental-reference task: compare an outside message with a fictional issuer statement, identify differences, and understand unknowns. The immutable root PRD, user flows and screen contract retain functional authority. This artifact is a design-only preview and supplies no backend acceptance evidence. The existing application remains untouched.

The visual identity uses the structure of a readable record: warm paper, precise rules, a stable source column and explicit comparison rows. Evergreen belongs to controls and a narrowly scoped CURRENT record; it never signifies a safe transaction. Rust marks discrepancies, amber marks unresolved payment identity. No official logo, endorsement, invented metric or property photography.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| canvas | #F6F5EF | Warm off-white page |
| paper | #FFFEFA | Record and reference surfaces |
| ink | #202E29 | Main text |
| muted | #5C665F | Supporting text |
| line | #D5D9CF | Section separators |
| primary | #294B3E | Evergreen action and scoped current label |
| current surface | #E8EEE6 | CURRENT record label |
| contradiction | #923C2C / #F8EEE8 | Text / finding background |
| unknown | #765315 / #F3EDDC | Text / warning background |
| focus | #126553 | 3px visible focus ring, 4px offset |

Typography: Manrope 500–800 for headings/identity; DM Sans 400–700 for interface/body; system monospace only for the public reference. Existing Google Fonts families, with sans-serif fallbacks. No new font families. Headline 36px desktop / 29px phone (40px on extra-wide screens); property 26–27px; section 16–17px; body 13–15px; supporting labels and copy at least 12px. Mobile text-entry controls use 16px to avoid browser zoom. Rent uses tabular numerals. No decorative uppercase eyebrows; uppercase is reserved for semantic source/status labels.

## Composition and reusable patterns

- Max-width 1280px including 48px gutters; 1360px above 1450px. Tablet gutters 30px; phone 22px. Spacing rhythm principally 4, 8, 12, 16, 20, 24, 32 and 44px.
- Desktop workspace columns .82fr / 1.4fr, gap 44px. At 1050px reduce gap to 25px and stack comparison verdicts within rows. At 760px and below stack issuer before comparison; stack source labels below their headings and remove redundant navigation text.
- Reference bar and issuer record: 1px border, 8px radius, no shadow. Inputs/actions: 5px radius, minimum 44px targets. Payment notice: 6px radius. Avoid grids of interchangeable feature cards.
- ReferenceForm: visible label, local syntax error, explicit sample loader, disabled pending submit. Editing reference invalidates every result and cancels stale pending work.
- IssuerRecord: fictional unit, approved rent/contact/representative, reference, issuer/version, validity and explicitly simulated timestamp. CURRENT is a demo-record status, not a claim verdict.
- CandidateEditor: fictional plain text, narrow demo rules, editable rent/contact/payee candidates. No model, OCR or confidence score. Ambiguity is not guessed. Changes invalidate prior findings.
- ComparisonRows: outside value, issuer value and named verdict. Collapsed message summary after comparison keeps findings alongside the record; Edit message & details restores editing. Column labels remain accessible when visually hidden.
- PaymentNotice: persistent within the current-record workspace, non-dismissible, always NOT VERIFIED regardless of matches.
- Navigation: one workspace, no issuer link or dead controls at this checkpoint. Default entry is empty. View the worked example runs the synthetic scenario; `?preview=contradiction` opens that review state.

## Truth, accessibility and motion

Sticky DESIGN PREVIEW · SYNTHETIC DATA notice; all claims and check time visibly simulated. No server, cryptography, persistence, authentication, AI, bank-control or ownership checks. The fixture's dates are illustrative and do not imply a fresh real-world check. No actual SDP or land-registry connection.

All interactive elements use native semantics, visible focus and descriptive labels. Blank/invalid inputs have inline role=alert; polite atomic status region announces simulation and changes. Result focus transfers to meaningful headings with scroll margin below the sticky preview notice. Colour always accompanies text. No positive comparison is retained after reference/message/candidate changes. Pasted text is rendered with textContent, never HTML.

Only background/border transitions (160ms) and the labelled simulation spinner. No animated keyboard focus or entrance choreography. Reduced motion disables animations/transitions. Hover enhancements apply only to fine-pointer devices.

## Artifact and approval checkpoint

Canonical project: `safelisting`; source entry `renter/index.html`, with sibling `styles.css` and `prototype.js`. Identical formatted MCP-exported source is under `design/exports/renter/`. Consult its INSPECTION.md for executed checks and limitations.

Built: reference entry/validation/loading/unknown recovery, simulated CURRENT record, candidate extraction/editing, contradiction/match/unknown findings, payment caveat and contextual limitations. Remaining: revoked, expired, suspended, superseded, invalid, unavailable variants; issuer; HomeLedger. Stop for user visual review before expanding. Only explicit user approval can change this document's status to approved.
