# Agent handoff — living status

**State as of 21 Oct 2026 (Asia/Kuala_Lumpur):** working name **Urbanova** (`urbanova`); final PEOPLE solution not selected. Local verification now passes. User authorized a new private repository: `https://github.com/IrtizaAziz/urbanova`. No deployment approved or created. See the takeover verification below for current evidence; older preparation notes are retained as history.

## Currently implemented
- Workspace branded Urbanova and portable across Codex, Antigravity and OpenDesign.
- Vite + React 19 + TypeScript frontend, responsive resident/operator/research workspace.
- Small deterministic **fictional** network graph and route preferences: direct, accessible, shade-comfort.
- Simulated barrier rectification causes graph-based re-routing, with route-unit tests.
- DESIGN.md and AGENTS.md shared between Codex, Antigravity and OpenDesign.
- Both independent draft research reports are in `research/`.

## Verified / unverified
- Source files and route algorithm authored; dependency installation and runtime/CI test status must be checked on a machine with npm registry access.
- No real township geography, user interviews, actual model inference, measured outcomes or public deployment is included.
- Verify actual initial submission requirements and IP clauses against authoritative briefing and T&C.

## Rename/handover note
- User selected **Urbanova**; repository slug `urbanova`; still awaiting a GitHub URL or creation.
- OpenDesign and Codex/Antigravity support is **documented**, not yet configured on the user device.
- `CODEX_HANDOVER.md` gives Codex its takeover task and verification requirements.

## Next action
1. Review this verification audit and prioritize dependency advisory remediation before extending the demo. Re-run the full check after any dependency change.
2. Repair radio-group keyboard behavior and junction destination consistency in a short-lived branch; add meaningful regression coverage.
3. Verify OpenDesign daemon connectivity and Antigravity configuration using this same repository.
4. Obtain the actual organizer briefing; confirm deadline time, deck/file rules, and team IP review. Team chooses concept and records it in `docs/DECISIONS.md`.

## Codex takeover verification — 21 October 2026

- **Starting state:** folder was not a Git repository; `git status`, `git log -5 --oneline`, and `git remote -v` each failed with "not a git repository". Existing files were preserved. No prior branch/history existed locally.
- **Repository:** authenticated GitHub account `IrtizaAziz`; initial `gh repo view urbanova` could not resolve a repository. User replied "new repo". Created `IrtizaAziz/urbanova` with `--private`, initialized local `main`, and configured `origin`. `gh repo view ... --json nameWithOwner,isPrivate,url` confirmed private visibility. This initial bootstrap uses `main`; future changes require short-lived branches and review.
- **Commit:** this section is included in the initial foundation commit; resolve its hash with `git log -1 --oneline`. Push and CI status should be checked before another agent takes ownership.
- **Files changed:** generated `package-lock.json`; updated `docs/HANDOFF.md`, `docs/AI_USAGE.md`, `docs/IP_REGISTER.md`, `docs/SUBMISSION_CHECKLIST.md`. All other starter files are unchanged and included in the initial repository commit. Browser outputs are local `.playwright-mcp/` files excluded through `.git/info/exclude`.
- **Runtime:** machine default is Node 24.15.0 / npm 11.12.1. Verification used a temporary Node 22.23.3 and npm 10 environment via `npx --yes --package=node@22 --package=npm@10 --call "..."`; global runtime unchanged. CI already selects Node 22; package engine range remains broader.
- **Install:** wrapper command `node --version && npm install` succeeded: 211 packages installed, lockfile generated. npm reported three advisories.
- **Checks:** wrapper command `node --version && npm run check` exited 0: TypeScript, ESLint, Vitest (one file, five tests), Vite production build. Build: 256.92 kB JS / 79.29 kB gzip, 16.10 kB CSS / 4.49 kB gzip.
- **Security audit:** `npm audit --json` reports one moderate and two critical package findings in the development test chain (`@vitest/mocker`, `tinypool`, `vitest`). npm's proposed fix is a major Vitest upgrade. No forced upgrade performed during baseline audit. `npm audit --omit=dev --json` reports zero production advisories at audit time. This does not constitute a complete security review.
- **Browser:** started `npm run dev -- --host 127.0.0.1` under Node 22 at `http://127.0.0.1:5173/`. Playwright exercised the live UI: accessible 773 m; shortest 550 m; comfort 823 m / 72% illustrative shade. Operator resolve updates resident route to 550 m; reopening restores 773 m. Enter activates a focused map destination; same-origin/destination gives 0 m. Research screen and mobile menu navigation work. No horizontal overflow at 340, 390, or 1440 px. Full-page screenshots at 390 and 1440 px were visually inspected. Fictional/demo labels remain visible. Only console error observed: missing `/favicon.ico` (404).
- **UX gaps:** custom radio buttons work with Tab/Space but do not implement expected arrow-key radio navigation. Map allows junction destinations (`square`, `crossing`) that are omitted from destination select options. Identical origin/destination shows 100% shade despite no travel. Mobile hides the explicit NOT GPS badge while retaining FICTIONAL/DEMO labels. SVG focus styling and screen-reader behavior need a dedicated accessibility pass; no accessibility certification claimed.
- **Test limits:** test titled "handles identical destinations and disconnected cases" only asserts identical destinations. No disconnected graph, UI regression, clipboard or screen-reader test was performed. Barrier flow is an operator toggle affecting a resident route; there is no resident report intake, persistence, or field validation.
- **Portability:** canonical AGENTS/DESIGN and Antigravity rules exist. Installed OpenDesign package version is 0.10.0. `od --version` is unsupported; `od mcp --help` documents the integration commands. `od mcp install codex --print` and `od mcp install antigravity --print` verified command availability without altering global config. OpenDesign MCP `get_active_context` failed to reach the daemon at 127.0.0.1:7456. Antigravity runtime/configuration not verified. Do not create a second repository or assume native project linkage from MCP tool presence.
- **Compliance:** official competition page confirms 23 October 2026 proposal date; official T&C clauses 11–14 verified and linked in the working compliance registers. Actual briefing unavailable; exact time, slide count, appendices, mandatory components, upload format and naming remain unverified. Research reports remain draft evidence leads.
- **Deployment:** none. Vercel notes/config exist, but no preview approval, deployment, URL or end-to-end deployment verification.
- **Exact next task:** review the audit, then remediate development dependency advisories in `codex/feature-test-tooling`, preserving Node 22 support and running `npm run check` plus `npm audit`. After that, address the keyboard/junction UI issues with focused regression checks. Obtain actual briefing and team concept approval in parallel with human planning.

## Handoff template (update every session)
- Date/time + agent:
- Branch / commit:
- Files modified:
- What works:
- Validation performed:
- Known failures / caveats:
- Next small task:
