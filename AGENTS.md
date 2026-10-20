# Urbanova — shared agent contract

> Canonical instructions for **Codex, Antigravity, OpenDesign, and human collaborators**. Do not fork the project into separate agent-specific copies.

## Project state
- Project/repository identity: **Urbanova** / `urbanova`. Competition: Sime Darby Property University Hackathon 2026; track: PEOPLE.
- Final solution concept, subcategory, and features: **NOT SELECTED**. Urbanova is the working project/repository identity, not the final solution title.
- Current repository is a **concept-neutral technical demonstrator**, not a proposed final entry.
- Submitted proposal target date: 23 October 2026. Verify time, format, and compulsory deliverables against the actual briefing before submitting.
- Primary design reference: `DESIGN.md`.
- Research files: `research/gemini-research.md` and `research/chatgpt-research.md`. They are secondary, draft research: cross-check important claims with original sources.

## First actions for any agent
1. Read `AGENTS.md`, `CODEX_HANDOVER.md`, `DESIGN.md`, `docs/DECISIONS.md`, and `docs/HANDOFF.md`.
2. Check `git status` and last commits. Never discard or overwrite uncommitted work from another agent.
3. Run `npm run check` after dependencies are installed; if unable, say which step could not run.
4. State the exact files you plan to touch. Restrict changes to the active scope.
5. Record notable decisions and handoff instructions at the end of your session.

## Core principles
- **Mechanism first:** build one end-to-end, observable resident-to-operator scenario rather than many disconnected app pages.
- **Ground all claims:** no invented impact stats, routes, coordinates, safety guarantees, AI precision, cost figures or partnership agreements. Any unverified fixture must be labeled `SIMULATED` / `DEMO`.
- **Do not claim an Elmina map exists:** `src/lib/routing.ts` contains synthetic, fictional nodes and illustrative attributes. No geocoding or real safe navigation until field validation.
- **Safety and accessibility:** a sample route is not a certified wheelchair or emergency route. Provide caution for unknown links; human validation for compliance.
- **Privacy/security:** no real resident PII, secrets, private certificates, or live cloud API keys in git. Public `VITE_*` env variables are visible in browser bundles.
- **Focus:** keep the product track PEOPLE and leave theme-specific decisions reversible until the team approves.
- **Maintainability:** TypeScript strict mode, small reusable React components, tested graph/data functions, accessible interactions, responsive layouts.
- **Ownership and licensing:** do not add a license, third-party dataset or model without checking `docs/IP_REGISTER.md` and competition terms. Record any material AI use.

## Workflow
- Default branch: `main`. Use short-lived branches like `codex/feature-name` or `antigravity/feature-name` for overlapping tasks; PR/review before merge.
- If both agents are local, **only one may edit the same working tree at a time**. Commit or stash and `git status` before switching.
- `npm run dev`: Vite dev server; `npm run check`: typecheck, lint, tests and build.
- Any new scenario fixtures should be unit tested and flagged as simulated.
- Use `docs/HANDOFF.md` to specify current state, changes, tests, blockers, exact next step.

## Scope contract for future agents
Until concept lock, improve common primitives: design system, reusable screens, graph, documentation, deploy pipeline. Do not train large models, add remote backends, integrate payment/authentication, or claim operational deployment without approval.
