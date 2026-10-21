# SafeListing — Codex handover

Read `AGENTS.md`, `DESIGN.md`, `README.md`, `docs/DECISIONS.md`, `docs/HANDOFF.md` and `docs/WORKFLOW.md`. Canonical private repo: https://github.com/IrtizaAziz/safelisting.

## Approved direction
**SafeListing — AI-Powered Rental Trust & Property Passport**, Sime Darby Property University Hackathon 2026, PEOPLE; primary Safety & Security, secondary Digital Living. Proposed SDP App rental-trust extension with separate, free, account-free tenant verification. Not a marketplace or an approved integration.

Planned pillars:
1. ListingAuth: issuer-reviewed, cryptographically signed, property-specific rental authorisations with expiry, amendment and revocation.
2. AI TermsGuard: AI extraction of untrusted ad/screenshot/message claims, then deterministic comparison with currently authorised terms.
3. HomeLedger Lite: selected property facts, provenance labels and controlled disclosure; not complete condition certification.
StopLoss997 is future roadmap only.

## Existing implementation
React 19, Vite and strict TypeScript; a SafeListing scope/status overview. Separate legacy mobility screen in `src/legacy/MobilityDemo.tsx`; fictional graph and five route tests under `src/lib/`. Node 22 CI and shared contracts/registers exist.

No rental record service, issuer review, signing, revocation, AI extraction, property passport, live authority verification or production integration. Do not present the mobility demo as these features.

## Boundaries and missing evidence
All future prototype properties, identities and issuer decisions must be synthetic. Current legal letting authority is not actually verified. No production SDP API or land-registry integration exists. A signature proves issuer-statement integrity, not ownership; valid records do not establish transaction/bank-payee safety. AI extracts untrusted claims; deterministic logic evaluates them against trusted records. HomeLedger Lite is not complete property-condition certification. Basic tenant verification stays independently accessible, free and account-free.

Detailed SafeListing Sections 01–09 research is a missing input. Original mobility research is historical draft material, not SafeListing validation. Obtain actual sources and the official briefing rather than reconstructing them.

## Working protocol
Check clean status, origin and latest main; use a short-lived branch. Preserve one repository across all agents. Use Node 22, `npm install`, then `npm run check`; verify desktop/phone layouts. Record actual results and limitations. Test-toolchain advisories predate this rename; do not force major upgrades solely for branding.

No deployment or production changes under the rebrand scope. Recommended first MVP slice: an agreed synthetic ListingAuth lifecycle and account-free tenant verification contract, with expiry/revocation cases and explicit unknown states, before AI. Obtain a bounded implementation brief first.

End sessions with paths, branch/commit/PR/CI, checks, blockers and exact next task in handoff, material AI use in `docs/AI_USAGE.md` and approved decisions in `docs/DECISIONS.md`.
