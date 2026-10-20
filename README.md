# Urbanova — PEOPLE Hackathon Prototype

Urbanova is a portable, **concept-neutral** starter for the **Sime Darby Property University Hackathon 2026**. One GitHub repository and one codebase across **OpenDesign, Codex, and Google Antigravity**.

> **Not a final proposal:** the PEOPLE idea has not been selected. The bundled app includes a synthetic township network for testing UI and route logic, **not** authentic Elmina geography, validated wheelchair guidance, measured environmental data or a safety-rated system.

## What you get

- React 19 + TypeScript + Vite web app with desktop and mobile UI.
- A working demonstration of graph-based route selection: shortest, accessible and shaded-comfort priorities.
- Operator remediation simulator: resolve a fictional kerb barrier and watch the selected route update.
- Unit tests, strict TypeScript, ESLint/Prettier and GitHub Actions validation.
- Agent-neutral `AGENTS.md`, OpenDesign-ready `DESIGN.md`, Antigravity rules/workflows and handoff/decision logs.
- Original Gemini and ChatGPT research reports under `research/`, clearly flagged as unverified secondary inputs.
- Competition checklist, AI use disclosure, IP/dependency register and demo outline.
- No mandatory paid backend or external API keys.

## Quick start (Node 22 LTS recommended)

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. On first install, commit the generated `package-lock.json` so team members and CI use the same dependency versions.

```bash
npm run check   # strict TS, ESLint, unit tests, Vite build
npm run preview # serve production build locally
```

## Codex takeover

Read [`CODEX_HANDOVER.md`](CODEX_HANDOVER.md) first. It contains the complete audit, setup, integration and handover plan. **No GitHub remote has been created or pushed as part of this package.** The intended repo name is `urbanova` and should be private.

## Work in Codex or Antigravity

**Codex CLI:** open a shell in this repo, run `codex`, and ask it to read `AGENTS.md`, `DESIGN.md` and `docs/HANDOFF.md` first.

**Antigravity:** open **this same repository directory** in the IDE. Rules are mirrored under `.agent/rules/` and `.agent/workflows/`; the canonical task contract is `AGENTS.md`.

**OpenDesign:** install the external OpenDesign desktop app, open/import this project, and select your local Codex or Antigravity agent. When the `od` CLI is available, the official integrations are `od mcp install codex` and `od mcp install antigravity`. Export actual designs to this repo, not just an app session. See `docs/WORKFLOW.md` for complete steps.

**Safe switch:** only one agent edits the same worktree at a time; commit/push and update `docs/HANDOFF.md` before switching. For concurrent work, use separate branches and ideally separate clones/worktrees.

## Repository map

```text
src/App.tsx              Interactive screens (studio, operator, research)
src/lib/routing.ts      Synthetic routing graph + deterministic algorithm
src/lib/routing.test.ts Route behaviour tests
src/styles.css          Responsive design implementation
AGENTS.md               Shared coding-agent contract
CODEX_HANDOVER.md        Codex takeover plan and acceptance criteria
DESIGN.md               OpenDesign and UI design contract
.agent/                 Antigravity rules + session workflows
docs/                   Handoff, decisions, submission, compliance, agent workflow
research/               Full user-supplied Gemini and ChatGPT reports
.github/workflows/      Automated PR checks
```

## Immediate team decisions

1. Validate the actual briefing's submission deadline time and deliverable format.
2. Select one specific PEOPLE problem based on impact, novelty and buildability.
3. Replace the synthetic proof with an honestly-labelled pilot dataset and verifiable mechanism.
4. Record decisions and agent handoffs in `docs/DECISIONS.md` and `docs/HANDOFF.md`.
5. Review the event's IP and AI-disclosure rules before integrating third-party material.

## License

No public license is granted by default. The team must examine the hackathon T&C and ownership implications before choosing how to release source code.
