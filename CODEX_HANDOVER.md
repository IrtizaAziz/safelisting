# Urbanova — Codex takeover brief

## Role and current decision
You are taking over **Urbanova**, the working project/repository identity for the **Sime Darby Property University Hackathon 2026**, under the **PEOPLE** track. The team has NOT selected its final problem, solution, PEOPLE subcategory or pilot area. Do not rename the competition and do not lock a product concept without explicit team approval. This repository is a deliberately concept-neutral prototype foundation, not a finished application or submission.

**Primary objective:** transform the existing starter into a credible, polished, working hackathon prototype while keeping it easy to switch development between **OpenAI Codex**, **Google Antigravity** and **OpenDesign**, using one Git repository and one shared source of truth.

## Read in this order
1. `AGENTS.md` — canonical agent instructions.
2. `DESIGN.md` and `design/OPEN_DESIGN_BRIEF.md` — visual direction and design tool prompt.
3. `docs/DECISIONS.md` and `docs/HANDOFF.md` — approved choices and state.
4. `docs/WORKFLOW.md` and `.agent/rules/project.md` — agent-switching and Antigravity conventions.
5. `docs/SUBMISSION_CHECKLIST.md`, `docs/AI_USAGE.md`, `docs/IP_REGISTER.md` — compliance and intellectual property tracking.
6. `research/chatgpt-research.md` and `research/gemini-research.md` — independent research, not verified ground truth.

## What already exists (check; do not assume it was built/deployed)
- Frontend: React 19, Vite, TypeScript, responsive resident prototype studio, operator remediation simulator, research/handoff screen.
- Algorithm: deterministic fictional pedestrian graph in `src/lib/routing.ts`, route preferences (shortest, accessible, comfort), tests in `src/lib/routing.test.ts`.
- Design: `DESIGN.md`, OpenDesign brief, shared typography/colors; working app now branded **Urbanova**.
- Workflows: `.agent/` rules and session instructions, `AGENTS.md`, quality-check GitHub Action, Vercel deployment notes, PowerShell publish helper.
- Research: both original reports in `research/`; they differ in ranking. Neither has selected the team's concept.
- **No authentic Elmina network, measured thermal data, accessibility certification, validated model inference, API backend, production deployment, or private GitHub repository exists in the provided package.**
- Dependencies and the complete React build have **not been verified** in this session. Run all checks yourself.

## Phase 1 — bootstrap and verify before feature work
1. Inspect `git status` and repository content. Do not delete or overwrite uncommitted work.
2. Confirm the remote private repository `urbanova` exists, and its owner. If missing, ask for its GitHub URL or create it only with authorized access; **never initialize an unrelated public repository**.
3. Use **Node 22 LTS**. Run `npm install`, commit the generated `package-lock.json`, then `npm run check` (typecheck, ESLint, Vitest, build). Fix real failures; report the exact commands and outcomes.
4. Run `npm run dev`; manually test routes, the resident-to-operator barrier toggle, keyboard navigation, and responsive phone/desktop layouts. Verify that all demo/simulation labels remain clear.
5. Set up a preview deployment only after GitHub access and deploy approval are confirmed. Never claim a deployment without opening and testing its URL.

## Phase 2 — preserve agent portability and design continuity
- Keep **one** Git repo and `AGENTS.md` as the canonical contract. Antigravity reads `AGENTS.md` and `.agent/rules/`; OpenDesign reads `DESIGN.md`.
- Install/connect OpenDesign according to its currently installed version. Where its CLI exists, check documented `od mcp install codex` / `od mcp install antigravity` commands; verify commands before running them, do not assume a desktop integration was automatically configured by this ZIP.
- Use short-lived `codex/feature-*` or `antigravity/feature-*` branches. Never have both agents edit the same working tree simultaneously. Commit + push and update `docs/HANDOFF.md` before switching agents.
- Keep reusable UI components and design artifacts inside Git, not only in chat history or OpenDesign's local state.
- No API keys committed or pasted into project prompts. Avoid third-party assets or models without licensing review.

## Phase 3 — await the concept decision
Both research reports cover inclusion and thermal mobility, but rankings differ. Create a short **decision matrix** for the team, if asked, distinguishing evidence from subjective scores. The team will select the final PEOPLE idea. Until then, improve shared primitives and demo quality only. Keep the existing fictional graph prominently labelled `SIMULATED`; do not present it as field-validated Elmina geometry, a safe route, a certified accessible path or empirical impact.

## Submission and research safeguards
- Confirm official October 23 submission rules, slide count, file formats, exact deadline time and AI/IP requirements from the actual briefing and T&C before treating secondary research as authoritative. The original reports conflict on certain details.
- Explain the **mechanism** (what real resident/operator process changes) and **enabler** (technology that makes it work) in any pitch materials.
- Do not invent KPI improvements, accuracy scores, pilot agreements, measured heat reductions, official partnerships or safe route guarantees.
- Track material AI usage, third-party dependencies, and rights in `docs/AI_USAGE.md` and `docs/IP_REGISTER.md`.

## End-of-session checklist
Update `docs/HANDOFF.md`: branch/commit, files changed, tests and browser checks performed, deployment state, blockers, and the exact next task. Add irreversible choices to `docs/DECISIONS.md`. If any work remains unverifiable, state that clearly.

## First response requested from Codex
After reading the repository, reply with: (a) brief repository audit, (b) actual checks run and results, (c) portability/integration gaps, (d) first prioritized safe improvements, and (e) blockers requiring my approval. Start with verification; don't rewrite the UI from scratch until reviewed.
