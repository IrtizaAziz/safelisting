# Hyperiux timeline implementation

23 October 2026 MYT. Base 463dbb0; branch codex/flagship-hyperiux-timeline. Isolated checkout protects the original dirty working tree.

Homepage slideshow replaced with five semantic synthetic stages. Scoped vanilla JavaScript uses GSAP 3.15.0, ScrollTrigger and SplitText; original linear horizontal scrub, alternating stems/nodes, line masks, 1.4 reveal timing and .02 stagger retained. Local vendor assets are copied at build time. Reduced motion, narrow and short viewports use readable stacked content. Final CTA reuses the homepage reference focus handler. Existing verifier/issuer strings are byte-identical to baseline.

Differences: five stages instead of seven dated milestones; SafeListing brand/content and HTML/SVG-style illustration instead of stock image; moving endpoint dot; vertical mobile/reduced-motion fallback; measured track translation rather than percentage constants. No framework migration or new service.

Validation: timeline source contract; 10 viewport/preference cases (320/390/768/1280/1440); all 68 refinement checks; 12 existing motion cases. Screenshots under timeline-evidence. First browser run found a stale renderStep hook; removed and passing checks rerun. Deployment and root check results recorded in handoff after completion.

Limitations: full keyboard/screen-reader audit, physical-device/Safari acceptance, animation FPS and full performance profiling remain unverified; extended asset-failure, resize/reverse-scroll and CPU-command samples are recorded below. Desktop source timing/geometry has been adapted rather than pixel-matched across all reference sizes. Obsolete slideshow CSS remains inert in legacy embedded stylesheet rules; active markup/state/event handlers are removed.

Publication is held for the complete source licence notice and GSAP controlling terms; see THIRD_PARTY_TIMELINE.md. No public preview or production change. Review the local screenshots and private draft PR; obtain licence evidence before preview publication.

## Final local acceptance
Node 22.23.4 root check passed typecheck/lint/all six tests/build. Static build passes. Deployment QA passes six widths with clean deep links, comparison/edit/copy/unknown/expired/issuer flows and no JS or asset errors. Extended timeline checks pass breakpoint resizing, short-height fallback, forward/reverse progress, live preference changes and blocked animation assets. CPU-throttled command-latency samples are in extended.json; these do not establish frame rate or physical-device performance. Mobile normal-motion rail follows scroll; reduced motion is static. Full assistive-technology and Safari/device acceptance remains open. No remote checks are claimed because publication is held.

## Authorised preview — 23 October 2026 MYT
User instructed proceed after the documented publication hold. Preview published with licence-verification gaps retained: https://safelisting-flagship-v3-2ck7tb8m4-irtiza-aziz-s-projects.vercel.app (dpl_3CAFUT2XL9NisGYQL2BVVZD1fGzb). This instruction supersedes the publication hold above; it does not establish licence clearance. Preview target only; no production promotion. Remote timeline matrix passes 10 cases. Draft PR #7 remains unmerged.


## Timeline viewport repair — 23 October 2026 MYT
Fixed fixed-half-height layout clipping behind navigation and beyond viewport. Measure top/bottom content, reserve 92px header clearance and 28px bottom space, position rail accordingly; use one horizontal row when alternating rows cannot fit. Four desktop fit cases (1280x760/800, 1440x900/1000) pass locally and on preview. Ten viewport/preference cases and extended resize/reverse/short-height/asset-failure suite pass; protected verifier/issuer/font contract passes. Preview https://safelisting-flagship-v3-5t7c9hmf1-irtiza-aziz-s-projects.vercel.app, dpl_CBzNNrop9ycMcXKqa2GjM2sxHmxJ. Production unchanged; prior licence limitations remain. Next: user reviews viewport fit.

