# Issuer hero: editorial record spine

## Source and delivery

Base: `5251e35`, `codex/transparent-reference`. All three embedded page payloads were compared with the supplied preview and matched exactly. New branch: `codex/issuer-editorial-hero`.

Final preview: https://safelisting-flagship-v3-iq3v1rjaf-irtiza-aziz-s-projects.vercel.app/issuer
Deployment: `dpl_G35Us3xCyqrZ8num2GXZStD3JX4g` (preview target).
Production was inspected and still points to `dpl_FDQnCoW2Z8WTmJq9BStZMdWb3a1D`. No merge or promotion.

## Concept and implementation

The selected direction pairs open warm canvas and large charcoal typography with one folded document silhouette. Its gold spine holds the selected record's actual sample lifecycle. A red punctuation mark and ledger rule connect the editorial introduction to the working interface. The alternative dark spread was too close to the existing banner; the architectural line-only option lacked the selected direction's contrast.

The hero is inside Overview, below persistent workspace navigation. Desktop height is 360px; tablet uses a tighter split; phone uses a compact horizontal lifecycle strip. At 1440x900 the ledger controls and selected record remain visible. No fixed height clips enlarged content.

Prepare authorisation reuses the existing Create view and role restrictions. View ledger focuses its heading and scrolls it into view. Task views hide the hero and show a compact workspace heading. Record selection, filters and drafts use existing state. Pending November has two lifecycle events and no public reference; September and October retain independent periods, not invented versions.

Native SVG/CSS/JavaScript only. Desktop spine entrance lasts 560ms once; pointer-driven record updates fade from .65 opacity over 160ms. Keyboard updates are immediate. Motion is cancelled on hidden document, view exit, reduced-motion changes and page disposal. Mobile has a static horizontal connector. No idle loop, additional canvas, dependency or remote asset.

Only the issuer payload changed in `safelisting-application.html`; homepage and verifier payloads remain byte-identical to base. `router.js`, Grainient, timeline and root React source are untouched. QA additions: `issuer-hero-qa.cjs`; direct-issuer QA now selects the visible h1 because task and Overview headings are mutually exclusive.

## Design review and refinements

| Before | After | Reason |
| --- | --- | --- |
| Shallow dark banner; mobile words run together | Two explicit headline lines on warm canvas | Clear editorial hierarchy and readable phone composition |
| Illustration independent of working records | Artwork reads `selected` and `lifecycleEvents()` | One consistent record model |
| Scaled SVG connector drifts from nodes on tablet | Explicit connector anchored to lifecycle layout | Stable geometry at all widths and a complete static state |
| Full illustration on phones would delay ledger | Horizontal event strip | Preserve identity without excessive height |

Impeccable informed rendered critique and operational restraint; UI/UX Pro Max searches informed task access and focus; Hue local-codebase guidance preserved existing tokens; Emil guidance informed immediate keyboard navigation and short interruptible animation. The generated UI/UX glassmorphism recommendation was rejected against the approved brief. The mechanical detector reported 11 findings across the decoded issuer document, including existing accent borders/kickers and the approved Plus Jakarta Sans; unrelated working views were preserved.

Original authored geometry, AI-assisted implementation and QA. No new third-party artwork or licence. Existing font and historical dependency/licence limitations remain documented in the IP register.

## Validation

Executed: Node 22 root check (typecheck, lint, six tests and build), flagship build, six-width deployment journeys and timeline checks, all 68 refinement checks, public direct-issuer navigation/refresh/history compatibility checks, and custom hero checks at 320/390/768/1024/1280/1440px. No new JavaScript errors were observed.

Custom checks cover hero actions, heading focus, selection across three fixtures, pending event count, search, all five views, reduced motion, animation completion, zero issuer canvases, one illustrative label and overflow. Existing refinement checks cover validation and keyboard interactions. Root-font 200% reflow was exercised; this is not certification of every browser zoom mode. A body zoom stress test at 390px (effective 195px layout) overflowed an existing span; 320px remains the minimum supported width in this brief.

Contrast from final solid colours: charcoal headline 15.18:1; supporting copy 7.68:1; white artwork text 15.18:1; muted artwork text 11.03:1; gold connector 8.51:1; white/red CTA 5.19:1. Manual keyboard and automated focus checks supplement these calculations; no physical device or screen-reader certification is claimed.

Evidence: `issuer-hero-evidence/final/` includes six before/after screenshots, ordinary-motion screenshots, results and a desktop video. Earlier local/public runs are preserved separately. Test performance uses desktop Chrome on this workstation with 1440px and 390px viewport emulation, three fresh pages per version/width. No CPU throttle or physical lower-end device. Heap figures are approximate Chromium measurements; input timings include Playwright/browser round trip and are not field INP.

Performance summary is generated below from the final public-preview run. Resource timings inside the srcdoc iframe report zero; transferred size must be measured on the outer navigation instead. Preliminary public comparison measured compressed HTML growth of 1,422 bytes (85,866 to 87,288); the final explicit connector adds only a small markup change. These are compressed HTML body sizes, not total network usage.

## Next task

User visual review of the preview and draft PR. No merge or production promotion until approved.

## Final public performance samples

| Version / width | Long tasks >50ms | CLS range | Input round trip | p95 frame interval | Approx. JS heap |
| --- | --- | --- | --- | --- | --- |
| baseline / 1440 | [88] | 0.0030–0.0030 | 16–17 ms | 17.2 ms | 5.96–5.97 MB |
| baseline / 390 | None observed | 0.0250–0.0250 | 17–18 ms | 17.2 ms | 5.96–5.97 MB |
| enhanced / 1440 | None observed | 0.0023–0.0023 | 15–21 ms | 17.2 ms | 6.03–6.05 MB |
| enhanced / 390 | None observed | 0.0015–0.0015 | 17–18 ms | 17.2 ms | 6.03–6.03 MB |

Small sample sizes do not establish a universal performance improvement. No new startup long task appeared in the enhanced samples. No continuous animation remains after the brief entrance.
