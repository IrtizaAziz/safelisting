# SafeListing — switch between OpenDesign, Codex and Antigravity

All three tools should use the **same project directory** and Git history.

## One-time local setup (Windows PowerShell)
```powershell
# Clone the existing renamed private repository
git clone https://github.com/IrtizaAziz/safelisting.git
cd safelisting
npm install
npm run check
npm run dev
```
Open the Vite URL printed in the terminal. The SafeListing overview and separate legacy mobility reference require no API keys. Rental verification features are planned, not implemented.

## Codex
1. Install Codex CLI if not already installed: `npm install -g @openai/codex`.
2. Run `codex` in the repository root and sign in with your ChatGPT Plus account.
3. Prompt: `Read AGENTS.md, CODEX_HANDOVER.md, DESIGN.md, docs/DECISIONS.md and docs/HANDOFF.md. Check git status. Follow approved SafeListing scope; distinguish planned rental features from legacy mobility.`

## Antigravity
1. Open this exact repository folder in the Antigravity IDE.
2. Ask it to read `AGENTS.md`, `DESIGN.md`, `.agent/rules/project.md`, and `docs/HANDOFF.md`.
3. If using the integrated coding agent, keep it on a separate branch when working concurrently with Codex.

## OpenDesign
1. Install the official Windows desktop app from https://open-design.ai/ or its verified GitHub release.
2. Install/link your chosen local coding agent and select it in OpenDesign.
3. Official CLI integration when `od` is available: `od mcp install codex` or `od mcp install antigravity` (agent-wide MCP configuration, not required to run Vite).
4. Open or import this repository in OpenDesign. Ask it to respect root `DESIGN.md` and create reusable designs that can be copied/exported into this repo.
5. Keep rendered design deliverables inside `design/` or the React source. OpenDesign is a separate app; this starter does **not** bundle its desktop runtime.

## Safe switching protocol
```powershell
git status
git add .
git commit -m "wip: session handoff"   # only if reviewed changes exist
git push
```
Then open the **same** directory in the other agent. Don't allow both agents to write to the same files at once. Preferred team workflow: `codex/...` and `antigravity/...` branches, pull requests to `main`, record next action in `docs/HANDOFF.md`.

## If tool integrations aren't detected
Use OpenDesign Settings > MCP server for the native snippet. Verify `codex --version`, your PATH and your OpenDesign/Antigravity version; don't paste secrets into prompts. Using the apps separately with the same Git repo is a functional fallback and avoids agent-specific lock-in.

## Scope and local folder identity

All agents follow full product-truth boundaries in `AGENTS.md`. SafeListing is the approved rental-trust direction, without an approved production integration. Detailed Sections 01–09 research is missing. No global agent configuration changes are needed. The local directory may retain the former folder name for continuity; Git origin and package identity are `safelisting`. Do not move an active shared workspace solely to rename its folder. Original audit records are retained in `docs/history/`.
