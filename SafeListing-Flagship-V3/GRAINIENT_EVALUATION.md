# Grainient A/B evaluation — 23 October 2026 MYT

**Recommendation: B (hybrid).** It preserves the dark ember hero and animated walkthrough while letting explanatory content settle on matched CSS surfaces. A is more continuous and visually dramatic, but keeps the GPU rendering even behind dense reading areas. Both have the same shader/startup architecture; B is not intrinsically faster to initialise.

| Prototype | Preview | Branch |
| --- | --- | --- |
| A — viewport backdrop | https://safelisting-flagship-v3-ilik2ne6h-irtiza-aziz-s-projects.vercel.app | codex/grainient-viewport-eval |
| B — hybrid | https://safelisting-flagship-v3-aq0s2om24-irtiza-aziz-s-projects.vercel.app | codex/grainient-hybrid-eval |

Both derive from PR #8 commit `cbc7094`. These are experimental previews, not production releases. No merge or promotion. Production remains `dpl_FDQnCoW2Z8WTmJq9BStZMdWb3a1D`.

## Startup investigation

A browser Performance trace of the original public PR #8 preview reproduced its startup problem as a **358.8 ms `boot` FunctionCall**. Instrumented WebGL API spans within that task measured **161.6 ms creating the WebGL2 context**, **177.1 ms in `getProgramParameter` waiting for field-program linking**, and **10.8 ms waiting on the composite program**. They explain roughly 350 ms of that task. The previously reported 292 ms was a different sample, not a fixed duration.

The trace also identifies a separate 99.2 ms ParseHTML task containing a 98.3 ms embedded-page EvaluateScript, including 74.6 ms layout and 20.7 ms style recalculation (nested times must not be added). Existing iframe/DOM startup therefore also costs main-thread time; it is not all the shader or JavaScript execution alone.

The prototypes yield after context creation, start both program builds together, and poll `KHR_parallel_shader_compile` completion asynchronously when supported. Shader strings/math remain unchanged. On browsers without that extension, status checks still have to synchronously complete. A's follow-up profile shows a 160 ms task dominated by 159 ms context creation, with the largest sampled program-status check down to 1.2 ms. B's profile had only a 105 ms document task and 3.8 ms context creation, illustrating substantial cache/driver variance; this is **not evidence that B's shared startup code is faster**. Async compilation still takes elapsed time; it no longer occupies one long main-thread task waiting for linking.

Chrome traces and instrumented API span JSON: `grainient-evidence/profiling/baseline`, `A`, `B` (`.trace.json` / `.json`). Reproduce with `node grainient-profile.cjs <preview-url> <label>`. Open trace JSON in Chrome Performance's load-profile facility.

## Architecture and resource bounds

One fixed, viewport-sized canvas lives in the homepage's existing iframe, with the original palette, full-strength stirring and no shader modifications. No document-height render target, new dependency or renderer is added to the verifier/issuer documents. The outer router explicitly disposes the previous renderer before replacing `srcdoc`; same-home anchor navigation reuses it. Pending asynchronous initialisation is invalidated on disposal and its context is lost, preventing a late renderer from becoming active after navigation.

A retains rendering throughout the homepage. B uses the same canvas/context, observes the hero and walkthrough, and pauses when neither is visible; other sections use opaque CSS gradients. No reparenting, second context or shader recompilation is needed to enter the walkthrough. Solid comparison/form/walkthrough surfaces and adapted text maintain readability. Verifier and issuer payloads remain byte-identical to PR #8.

Rendering is capped at 60 fps desktop / 30 fps below 1024 px, DPR at 1.25 desktop / 1 mobile, and 1.5 million pixels overall. The upstream half-resolution field pass remains. Existing draw-cost adaptation lowers quality further if sustained submission cost is high; this heuristic is not a GPU timer. Both pause when hidden, honor reduced motion with CSS, recover context loss and dispose on route exit. GPU programs/context allocation remain a platform cost.

## Measurements

Headless Chrome on this Windows workstation; local three-width tests followed by fresh public-preview contexts. The 390 px runs use touch/mobile emulation and **6× CPU throttling**. There was no accessible physical lower-end device/ADB interface. CPU throttling does not simulate a slower GPU, battery, thermal behavior or real mobile browser.

Public-preview observations (single sequential runs; not statistical benchmarks):

| Metric | A desktop / mobile | B desktop / mobile |
| --- | --- | --- |
| Long tasks, ms | 100 / 722, 234 | 105, 159 / 644, 216 |
| Input-fill round-trip, ms | 10.8 / 118.7 | 9.2 / 81.4 |
| Median actual draw interval, ms | 16.7 / 33.3 | 16.7 / 33.3 |
| p95 actual draw interval, ms | 17.2 / 46.0 | 17.3 / 37.2 |
| Draws during 400 ms in footer | 23 / 12 | 0 / 0 |

Input-fill round-trip is an automation responsiveness probe, **not INP**, and does not establish a speed improvement. Long-task timing includes document/iframe startup as well as WebGL work. The large CPU-throttled document tasks remain unresolved and are a practical limitation of extending this static embedded export.

At 1440/768/390 viewport widths (900 px height), both render at 1440×900 / 768×900 / 390×900, independent of document length. Approximate RGBA colour-buffer plus quarter-pixel-count field-target budgets are **6.48 / 3.46 / 1.76 MB**. These estimates exclude compositor copies, GPU driver allocations, shader caches and browser overhead; actual GPU VRAM was not measurable here. On higher-DPR devices the DPR/pixel caps still apply.

With explicit garbage collection around three route cycles, public-run JS heap growth was approximately 17–38 KB across A/B sizes; short-run memory stayed around 3.6–3.7 MB in that CDP measurement. This is JS heap only and does not prove absence of GPU leaks or long-session growth. B retains its framebuffer while paused, so its primary saving is draw activity, not framebuffer memory.

## Visual review and validation

Desktop/mobile screenshots cover hero, problem, walkthrough and mechanisms in `grainient-evidence/evaluation-A`, `evaluation-B`, `evaluation-A-public`, `evaluation-B-public`. Subjectively A's continuous background feels cinematic but adds motion behind every section; B's static reading passages provide clearer pacing and the walkthrough retains atmosphere without affecting its solid controls. A yellow-highlighted heading needed its dark text retained; a 4 px mobile scrim overflow was fixed before passing regression checks.

Both pass the six-width original browser journeys and 68 refinement checks, covering navigation, references, comparisons, walkthrough controls, verifier and issuer flows. Node22 root check passes typecheck, lint, six tests and build. Pixel-controlled stirring test still passes: no-stir control changes zero pixels; enabled stirring changes 188,808 pixels, peaks at .05 and decays to zero. Evaluation scripts check viewport-bounded resolution, empty canvas inventory on issuer routes, repeated navigation, reduced motion and B's zero footer draws. Public lifecycle runs additionally exercise document-hidden suspension and context loss/restoration.

No production configuration, authentication, backend or product functionality changed. Palette/shader licence and AI provenance remain as recorded in the existing register; the new work is scheduling, layering, diagnostic scripts and evaluation. Further physical-device testing, repeated cold/warm profiles and longer memory/battery sampling are needed before release. Review B first; neither preview should be merged or promoted without approval.
