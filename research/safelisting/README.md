# SafeListing research specifications (21 October 2026)

These are the **original full-length checkpoint files** prepared for SafeListing, imported without rewriting their research contents. Use them as the **product/design source of truth for planning**, not as proof of implementation, legal approval, official SDP integration, or observed outcomes.

| File | Scope |
| --- | --- |
| [Sections 01–03](SafeListing_Documentation_Sections_01-03.md) | Product definition, evidence, competitor analysis |
| [Sections 04–06](SafeListing_Documentation_Sections_04-06.md) | User journeys, technology and AI architecture, security/privacy |
| [Sections 07–09](SafeListing_Documentation_Sections_07-09.md) | SDP strategy/integration, impact evaluation, commercial model |
| [Section 10](SafeListing_Documentation_Section_10.md) | MVP scope, delivery stages, acceptance tests, roadmap |

## Current-state reconciliation

- **Current repo:** `IrtizaAziz/safelisting` (private); previously `urbanova`. The source checkpoint's references to an uncreated repository or unbuilt prototype describe **the state when authored**, not the latest repository state.
- **Current implementation:** SafeListing's introductory scope view and preserved fictional mobility demo. The **ListingAuth/TermsGuard/HomeLedger functional MVP has NOT been implemented**.
- **Source/document status:** Research and design reviewed internally; this is **not** external validation of market novelty, pilot impact, legal compliance, issuer rights or production reliability.
- **Current coding baseline:** React/Vite/TypeScript. The specification's suggested Next.js/Postgres stack is **an architectural option, not a mandate**. Evaluate migration against time, safety and test coverage before changing the stack.
- **SafeListing MVP order:** simulated independent issuer review → real server-controlled JWS issuance and expiry/revocation → free account-free public tenant verifier → deterministic TermsGuard comparison with optional AI extraction → small permissioned HomeLedger.
- **Non-negotiable:** synthetic property/identity inputs, real cryptographic mechanics only when built and tested, explicit unverified payee, no claim of official SDP integration, no claim of current legal letting authority or scam-proof rentals.

## Agents and handoff

Codex and Antigravity should read this index, all four source files, `AGENTS.md`, `DESIGN.md` and `docs/HANDOFF.md` before implementing the MVP. Preserve test traceability (AC-01–12, ST-01–18, INT, IV and CM controls). Record implementation choices in `docs/DECISIONS.md` and results in `docs/HANDOFF.md`.

**Deadline:** 23 October 2026 initial proposal date; source specifications explicitly mark time, format and mandatory assets **unverified** pending actual briefing/portal.
