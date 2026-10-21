# SafeListing

**AI-Powered Rental Trust & Property Passport**

Private repository: [IrtizaAziz/safelisting](https://github.com/IrtizaAziz/safelisting). Sime Darby Property University Hackathon 2026 · PEOPLE · primary **Safety & Security**, secondary **Digital Living**.

SafeListing is a proposed rental-trust extension to the existing SDP App ecosystem, with a separate, free, account-free tenant verification experience. It is **not a rental marketplace** or an already approved SDP integration.

## Implementation status
The main application is a scope/status overview. ListingAuth, AI TermsGuard and HomeLedger Lite are **planned, not implemented**. A link opens the preserved fictional mobility demo as a **legacy engineering reference**, not rental verification.

| Pillar | Planned scope |
| --- | --- |
| ListingAuth | Issuer-reviewed, cryptographically signed, property-specific rental authorisations; expiry, amendment and revocation |
| AI TermsGuard | Extract claims from ads/screenshots/messages; deterministic comparison against currently authorised terms |
| HomeLedger Lite | Selected property facts with provenance labels and controlled disclosure |

**StopLoss997: future roadmap only.** No live issuer service, signing system, property registry or SDP API is present.

## Trust boundaries
- Prototype properties, identities and issuer decisions are synthetic; current legal letting authority is not actually verified.
- No production SDP API or land-registry integration exists. No approved integration, customer, partnership or measured impact is claimed.
- A signature proves integrity of an issuer's statement, not legal ownership. A valid listing record does not prove a transaction or bank payee is safe.
- AI assists with extracting untrusted claims; deterministic logic evaluates them against trusted records.
- HomeLedger Lite is not complete property-condition certification; disclose selected facts with provenance and controlled access.
- Basic tenant verification must remain independently accessible, free and account-free.

## Run locally (Node 22)
```bash
npm install
npm run dev
npm run check
npm run preview
```
`check` runs TypeScript, ESLint, Vitest and a production build. Commit lockfile changes; CI uses Node 22 and `npm ci`. No API keys required. Known development dependency advisories are recorded in handoff; a rename does not justify forced major upgrades.

## Shared development
Read `AGENTS.md`, `CODEX_HANDOVER.md`, `DESIGN.md`, decisions and handoff. Codex, Antigravity and OpenDesign use one repository and scope. See `docs/WORKFLOW.md`; one agent edits a worktree at a time. Use short-lived branches and PR checks; export designs into Git.

```text
src/App.tsx                  SafeListing overview and legacy entry
src/App.test.ts              Entry-screen scope regression
src/safelisting.css           Scoped overview styles
src/legacy/MobilityDemo.tsx   Preserved fictional mobility/operator example
src/lib/routing.ts           Legacy synthetic graph, not rental verification
src/lib/routing.test.ts      Existing route tests
AGENTS.md / DESIGN.md        Shared engineering/design contracts
.agent/                     Antigravity rules and session workflows
design/                     Design exports and OpenDesign brief
docs/                       Decisions, handoff, compliance and history
research/                   Historical draft mobility research
.github/                    PR task template and quality checks
```

## Missing evidence and next MVP slice
Detailed SafeListing Sections 01–09 research exists separately and is **not in this repository**. Obtain it before detailed requirements. Historical Gemini/ChatGPT mobility reports are preserved unchanged as secondary research, not SafeListing evidence. Exact deadline time, deck limits and upload format require the actual briefing; see the submission checklist.

Recommended first slice: a synthetic ListingAuth lifecycle and account-free tenant verification result with deterministic expiry/revocation checks and explicit unknown states. AI extraction and property facts follow a reviewed trust-record contract. This rebrand does not implement that slice.

## History and licence
Former project name: **Urbanova**. Existing private repository renamed in place; Git history and historical records preserved. No public licence granted; review competition T&C and third-party rights before publication. No deployment or production changes in the rebrand.
