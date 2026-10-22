# External materials and IP register

Do not publish this repo under an open-source license until the team reviews the competition T&C (especially developed IP, background IP, third-party licenses). This register is not legal advice.

| Dependency / asset | Purpose | Provenance / licence to verify | Included? |
| --- | --- | --- | --- |
| React, React DOM | UI framework | MIT (verify pinned versions) | npm packages after install |
| Vite | Build tool | MIT (verify pinned version) | npm package after install |
| Lucide React | UI icons | ISC (verify pinned version) | npm package after install |
| DM Sans / Manrope | Web fonts loaded from Google Fonts | OFL-licensed families; CDN policy + privacy review | Runtime network request |
| Research reports | Internal ideation and evidence leads | User-provided; verify claims and embedded images/copyrights | research/ |
| Demonstration graph | Fictional self-authored fixtures | Project-generated | src/lib/routing.ts |
| OpenStreetMap / imagery / mapping APIs | Possible post-selection inputs | Check ODbL, attribution, imagery terms, access | NOT included |
| OpenDesign | Separate design app | Apache-2.0; not copied into this repo | NOT bundled |

Log additional datasets, visuals, generated assets, pretrained models, prompts and APIs here before submission.

## Primary-source check — 21 October 2026

Reviewed the [official T&C](https://www.simedarbyproperty.com/universityhackathon/terms-and-conditions/), clauses 11–14. Clause 11 provides for Developed IP vesting/assignment to SDP; clause 12 covers licences and disclosure for incorporated Background IP; clause 13 requires material AI-use disclosure and appropriate rights; clause 14 requires lawful, appropriately licensed third-party materials. These are source findings, not a team approval or a completed rights review. Team review remains required before submission or adding a project licence.

`package-lock.json` now records the installed dependency versions. Installed React/React DOM are 19.x, Vite is 6.4.4 and Vitest is 3.2.7. Installation does not establish licence compatibility with the competition terms; a complete dependency/asset rights inventory remains pending.

## SafeListing rebrand provenance — 21 October 2026

Product scope/name supplied by the user; overview, styling and documentation assisted by OpenAI Codex (see AI-use log). Uses existing Lucide icons, palette and font families; no official SDP logo, new dataset, model, image or dependency was added. No project licence was introduced. The fictional mobility graph remains unchanged under `src/lib/`, used only by the preserved legacy example.

SafeListing Sections 01–09 research is not in this repository and its contents/rights have not been audited. The product name and proposed integration do not establish trademark clearance, partnership or SDP endorsement. No real property, identity, issuer, private certificate or tenant data is included. Third-party dependency/asset rights and competition IP review remain open; original historical records are retained.


## Flagship V3 public frontend — 22 October 2026 MYT
User-supplied SafeListing-Flagship-V3 connected HTML/CSS/JS/SVG published with existing illustrative data. No external imagery, new package, dataset or model added. Plus Jakarta Sans font bytes already embedded in the export are reused unchanged; SHA256 153fc85b70298beeb1d61a5f723331649e7f23bb77302a66e61cb3e2fbdb5e79 matches the supplied WOFF2. Supplied SIL OFL 1.1 copyright/licence retained at public /flagship-v3.2/assets/OFL.txt and source OFL.txt. No blanket project licence introduced; prior competition/IP review limitations remain.


## Grainient preview - 23 October 2026 MYT
User approved actual React Bits Grainient port, native WebGL2 and one hero instance. Source e12c22192ac7b4b452c5e2feb9b586d74765d696; original shader strings preserved. MIT + Commons Clause notice shipped; background IP/competition review remains open. Codex assisted adaptation, CSS, QA and documentation; no model API or new package. Node22 quality check and flagship build pass; lifecycle/public preview evidence and measured startup long-task limitation are in SafeListing-Flagship-V3/GRAINIENT_REPORT.md. Preview https://safelisting-flagship-v3-b5mlix22l-irtiza-aziz-s-projects.vercel.app; production dpl_FDQnCoW2Z8WTmJq9BStZMdWb3a1D unchanged. Branch codex/flagship-grainient; unrelated existing work/index preserved. Exact next task: user reviews preview/motion; no merge or production promotion until approved.


## Full-hero Grainient correction - 23 October 2026 MYT
User approved moving the original React Bits effect across the entire hero with unchanged shaders and no new dependencies. Full-width outer hero/inner content container, warm palette/scrim, solid form/card; following sections untouched. Node22 check, six-width journeys and 68 refinement checks pass. Evidence and performance limitations: SafeListing-Flagship-V3/GRAINIENT_REPORT.md. Preview https://safelisting-flagship-v3-3h423x9xm-irtiza-aziz-s-projects.vercel.app; draft PR #8. AI assistance: Codex implementation, visual inspection and automated QA. Existing licence/Background IP limitations retained. Next task: user reviews full-hero preview; no production promotion or merge.


## Grainient reference/cursor correction - 23 October 2026 MYT
Restored user-supplied dark ember palette, original speed/grain/contrast/saturation and stir strength 1; removed cream overlay, adapted hero copy to light text. Same pinned shaders and licence; no new dependency. Codex assisted implementation, live uniform diagnosis and frozen-renderer pixel test. Cursor test: 190133 pixels change with stirring, zero control changes, weights settle to zero. Node22 check, six-width journeys, 68 refinement checks and public-preview lifecycle tests pass. Startup long task remains 292ms in one sample. See SafeListing-Flagship-V3/GRAINIENT_REPORT.md. Preview https://safelisting-flagship-v3-hdkfxxxe5-irtiza-aziz-s-projects.vercel.app; PR #8 draft. Production unchanged. Next task: user visual/cursor review before any merge/promotion.


## Grainient extension evaluation - 23 October 2026 MYT
User requested A/B experiments from PR #8, no production changes. A viewport preview https://safelisting-flagship-v3-ilik2ne6h-irtiza-aziz-s-projects.vercel.app (codex/grainient-viewport-eval); B hybrid https://safelisting-flagship-v3-aq0s2om24-irtiza-aziz-s-projects.vercel.app (codex/grainient-hybrid-eval). Tracing reproduced a 358ms boot task: 162ms context creation and 188ms synchronous linking/status waits. Async parallel shader completion removes the blocking link wait; context and iframe layout costs remain. Both keep original shaders/palette/stir strength, one viewport renderer with explicit iframe disposal; B pauses outside hero/walkthrough. Six-width journeys, 68 refinement checks, Node22 check and pixel interaction test pass. Public desktop/mobile lifecycle and memory/draw tests pass; 6x CPU emulation only, no physical lower-end device available. Full measurements/caveats and recommendation B: SafeListing-Flagship-V3/GRAINIENT_EVALUATION.md. No new package/asset/licence. Codex assisted diagnostics, code, visual review and report. Next task: user compares previews before any merge/promotion.


## Hero-only ember and PR7 timeline - 23 October 2026 MYT
User rejected full-homepage extensions and selected the original dark ember preview plus latest PR7 timeline. Restored cbc7094 hero renderer/CSS and merged latest alternating timeline with viewport/stage03 repairs. Existing licence-preview authorisation and gaps retained. Codex assisted integration and QA. Protected verifier/issuer contract, four desktop fit cases, ten public timeline cases, extended edge tests and Node22 root check pass. CTA tested through keyboard activation; earlier animated screenshot/mouse stability checks noted in EMBER_TIMELINE_REPORT.md. Preview https://safelisting-flagship-v3-2vz8vr8cu-irtiza-aziz-s-projects.vercel.app; branch codex/ember-timeline. Production unchanged. Next: user visual review before merge or promotion.
