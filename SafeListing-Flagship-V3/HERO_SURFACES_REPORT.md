# Ember hero surfaces

Preview: https://safelisting-flagship-v3-i0lf108qh-irtiza-aziz-s-projects.vercel.app

Base 05541d2; branch codex/ember-hero-surfaces. Only the two requested hero surfaces and their children are restyled in grainient.css. Shared rgba(18,15,23,.82) background, 18-percent cream border, 12px radius and 24/16px padding. Comparison nested white fills, borders and blue inset removed; retained single divider and comparison icon. Dark input, warm white primary text, muted cream labels, red action, gold focus ring, pale-red errors. The input border was brightened to #A18F85 to meet 3:1 against the lightest possible composite. No blur, extra grain or motion.

The HTML, reference IDs, copy, shader, rendering JS, hero headline/illustration, timeline, verification and issuer documents are unchanged. No dependency or API changes.

Static build, six-width public journeys and 68 refinement checks pass. Dedicated browser checks at 320/390/768/1440 verify computed surfaces, input text, gold focus, empty-validation aria state, reference handoff, one canvas and no overflow. Animated/fallback/error PNGs and results: hero-surfaces-evidence/public/. Before renders: hero-restore-evidence/animated-{1440,768,390}.png.

Contrast tests composite the panel over pure white, guaranteeing the bound for any SDR shader frame, rather than cherry-picking a dark screenshot: primary 10.70:1, secondary 7.78:1, input text 18.20:1, placeholder 13.23:1, input boundary 3.61:1, red button text 4.97:1, button boundary 5.84:1, focus 6.00:1 and error 9.78:1. Decorative panel borders are not control boundaries.

Post-font layout-shift sum is zero across all tested widths. Initial document startup occasionally records a small font/layout shift: a separate 1440px before/after run measured exactly 0.0024068048589677635 on both previous and new previews. No measured regression; this does not claim zero startup shift. Sampled frame medians remain 16.7ms at 1440/768/390, with the original renderer and one canvas; no GPU/battery/physical-device benchmark claimed. Mechanical design detector returned no findings. Desktop/mobile renders visually inspected.

Production unchanged; no merge/promotion. Next: user visual review. Existing third-party timeline licence-verification limitations remain unchanged.

Node22 root npm run check also passes typecheck, lint, all six tests and production build.
