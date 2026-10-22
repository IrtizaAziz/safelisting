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


## Signature motion — 22 October 2026 MYT
First-party CSS/JS/geometric SVG only; original font bytes/licence preserved. No new external asset, dataset or licence.

## Hyperiux homepage timeline — 23 October 2026 MYT
Branch codex/flagship-hyperiux-timeline from 463dbb0 in isolated safelisting-timeline checkout. Replaced homepage slideshow with source-based GSAP timeline; preserved verifier/issuer/font bytes. Node22 root check, static build, six-width deployment QA, 68 refinement checks, 12 motion cases and focused/extended timeline QA pass. Material code/design/test assistance: OpenAI Codex. GSAP 3.15.0 pinned; source and runtime provenance plus publication hold in SafeListing-Flagship-V3/THIRD_PARTY_TIMELINE.md. No preview/production deployment: complete component notice and controlling GSAP terms remain unverified. Exact next task: obtain rights evidence, review local screenshots/private draft, then perform public preview acceptance. See TIMELINE_REPORT.md for limitations.
