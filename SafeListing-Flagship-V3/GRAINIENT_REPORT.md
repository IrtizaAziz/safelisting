# Grainient integration — 23 October 2026 MYT

Current ember preview: https://safelisting-flagship-v3-hdkfxxxe5-irtiza-aziz-s-projects.vercel.app

Earlier measurements/configuration below describe the initial accent version; the revision entry supersedes placement and palette.

Branch: `codex/flagship-grainient`, based on `e53bea4`. Production remains deployment `dpl_FDQnCoW2Z8WTmJq9BStZMdWb3a1D`, confirmed with Vercel inspect after preview creation. No promotion or merge.

## Source and integration

React Bits / David Haz, repository snapshot `e12c22192ac7b4b452c5e2feb9b586d74765d696`, `src/content/Backgrounds/Grainient/Grainient.jsx`. Upstream JSX SHA256: `54e16ec1ea2beae8d50c5774626bc3d113293321095673017aea5a1960555905`.

The supplied source and this snapshot use native WebGL2. The user selected this renderer instead of OGL. No new package or runtime dependency. Three shader strings are byte-identical to the supplied implementation: vertex 175, field 4,351, composite 1,010 bytes; total 5,536 bytes. Runtime module 22,838 bytes and CSS 941 bytes, uncompressed at validation time.

Preserved upstream OKLab palette interpolation, noise, warp, silk shading, grain composite and smoothed stirring/trail calculations. React hooks became an explicit `mountGrainient(host, settings)` / `dispose()` lifecycle. Added lazy idle startup, dynamic reduced-motion fallback, bounded/adaptive DPR, context loss/restoration handling and partial shader-allocation cleanup. Retained half-resolution field rendering.

The hero's right-side atmospheric field uses a radial mask and a translucent cream illustration surface. Below 1024px the illustration remains hidden and the independent decorative field becomes quieter. Heading and form layout remain intact. Verifier and issuer payloads are byte-identical to baseline. No Hyperiux-named integration was present; the existing walkthrough and its progress rail remain intact.

## Final configuration

Palette: `#1F2326`, `#D71920`, `#F15A22`, `#FCAF17`, `#FFF9F6`. Linear, 55°, one band, speed .35, flow .8, scale 1, softness 1, silk .35, grain .06, grain size 1.2, contrast 1.03, saturation .8, variation 0, stir .35. Animated grain enabled; click swirl and intro disabled. Desktop DPR cap 1.5, below 1024px cap 1; sustained expensive draw submissions reduce it in .25 increments to .75. This heuristic measures CPU submission cost, not direct GPU timing.

Fallback: layered CSS radial/linear gradient with the same mask. Visit `/?background=static` to view it. Reduced motion and unavailable WebGL also select it automatically.

## Evidence and performance

`grainient-evidence/` contains animated-state and fallback PNGs at 1440/768/390px, recorded browser video, performance JSON and browser regression evidence. `grainient-qa.cjs` reproduces capture and lifecycle checks; `grainient-performance.cjs` compares the original homepage against the enhanced page locally.

Node 22.23.4 root quality check passes typecheck, lint, six tests and build. Flagship build passes. Local refinement suite passes 68 checks across six widths. Dedicated public-preview tests pass: no page errors or overflow, reduced-motion changes, forced unavailable WebGL, offscreen pause, simulated document-hidden pause, context restoration and repeated navigation with a single canvas.

Preview median frame intervals: 16.7ms at all three requested widths. Chrome reported renderer `WebKit WebGL`; these samples are animation scheduling observations, not proof of GPU headroom or physical-phone performance.

One local desktop sample: baseline/enhanced input fill round-trip 20.5/15.1ms; CLS 0/0; decoded response bytes 421,609/436,221. Baseline long tasks: 99ms; enhanced: 97ms and 253ms. The additional startup long task is a real limitation; the input sample does not establish a speed improvement. No p95, hardware GPU profiling or physical-device/screen-reader acceptance claimed. Concurrent full-suite runs exhausted workstation resources; final suites must be run sequentially.

## Licence

Full upstream copyright and MIT + Commons Clause v1.0 terms are retained in `REACT-BITS-LICENSE.txt`, shipped with the site. Application/website incorporation is permitted under those terms; standalone component/ported-component redistribution is restricted. This is not plain MIT. No blanket SafeListing licence or completed hackathon Background IP rights review is asserted.

Public preview also passes all 68 refinement checks and the complete six-width journey/walkthrough suite. Local test servers now serve external CSS with the correct MIME type; previously these fixtures served only JavaScript, fonts and HTML. Homepage export parity compares critical content and geometry, excluding the decorative animation rather than comparing changing screenshot buffers. Initial failed fixture runs are retained in local logs.

Next task: user reviews the preview and captured motion; production promotion and merge require separate approval.


## Full-hero correction - 23 October 2026 MYT
User rejected the small illustration accent and approved full hero coverage. Moved the layer to the outer full-width hero with an inner content container. Removed the radial mask, partial width and mobile opacity restriction. Canvas covers the full hero from beneath navigation through comparison card, stops before the problem section, and keeps the form/card solid. Broad warm scrim preserves headline readability. Palette now #FFF9F6, #F9E4D8, #F58220, #F15A22, #D71920; other shader settings unchanged. No shader/API/dependency changes.

Canvas CSS dimensions at 1440/768/390 widths: 1440x1162, 768x1152, 390x1170. All frame interval medians 16.7ms. Repeated local input sample baseline/enhanced 18.1/15.0ms; CLS 0/0; long tasks 110ms baseline and 92/253ms enhanced. These are individual scheduling samples, not GPU benchmarks or speed improvement claims.

Node22 full quality check, flagship build, six-width local journeys and 68 refinement checks pass. New QA asserts hero width equals viewport, layer height matches section and next section starts after it. Evidence: grainient-evidence/full-hero-preview (whole-hero PNGs, animated and fallback captures at three widths, video and results). Preview deployment dpl_A7Sz3gx8s2M5bVUCvjZd8L2rWJQ4. Production not promoted; PR #8 remains draft.


## Reference palette and visible cursor correction - 23 October 2026 MYT
Supersedes earlier light treatments. Restored original palette #120f17, #2a0f0a, #9a3412, #f97316, #fed7aa; speed 1, grain .08, contrast/saturation 1 and stir 1. Removed the cream overlay entirely. Exposed headline/copy is warm white with a restrained local dark scrim beneath body copy; navigation and solid form/comparison surfaces remain intact. No shader mathematics, API or dependency change.

A live probe established that the earlier cursor path reached the shader but its strength was reduced to .35. The original QA merely moved a pointer and did not verify deformation. New grainient-interaction-qa.cjs isolates the renderer with speed 0 and static grain: disabled stirring changes zero pixels; restored stirring changes 190,133 of 480,000 pixels (channel delta sum greater than 3), mean channel difference 2.416, peak uniform .05, and decays to zero after 1.8s. Before/stir PNGs, recorded cursor video and results are in grainient-evidence/ember-interaction. This verifies pixel changes independent of ambient animation.

Node22 full check (six tests), flagship build, six-width journeys, 68 refinement checks and public-preview lifecycle checks pass. Median frame interval 16.7ms at 1440/768/390; no overflow. Measured baseline/enhanced input fill 28.9/15.9ms, CLS 0/0; long tasks 186ms baseline, 116/292ms enhanced. These individual samples do not establish speed improvements or physical-device GPU performance. Current screenshots/fallback/video: grainient-evidence/ember-preview. Manual desktop/mobile rendered inspection confirms the dark-to-ember range and visible film grain; no comprehensive time-varying WCAG contrast certification claimed.

Preview https://safelisting-flagship-v3-hdkfxxxe5-irtiza-aziz-s-projects.vercel.app (dpl_Cj6ZGQrvLDDa3VZ1TLK7zWRQpjWk). Production not promoted; PR #8 remains draft. Next: user reviews this reference-matching preview and cursor recording.
