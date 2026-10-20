# Urbanova — design contract

## Intent
Urbanova is a mature, human-centred, premium urban-innovation prototype workspace for the PEOPLE track. The interface should appear credible at a corporate jury presentation and usable on a phone. Not a generic AI-chat interface.

## Visual language
- **Identity:** Urbanova (working project umbrella). Modern township planning, welcoming, accessible, measured confidence. Keep the final solution brand undecided.
- **Palette:** deep evergreen `#101E21` (navigation), verdant `#358963` (actions), pale canvas `#F8FAF6`, spring accent `#B9F18A`, informational cream `#F0F7E9`.
- **Typography:** Manrope for display, DM Sans for UI, system fallbacks. Large editorial title, small evidence labels. Respect reduced motion preferences where possible.
- **Composition:** restrained soft cards, generous whitespace, compact controls, substantive data visuals. Mobile first when prioritising residents, desktop first for operators.
- **Components:** route-comparison cards, selectable scenarios, evidence banners, operator status, graph/map, step-by-step impact loop, clear empty/error/loading states.
- **Content:** short and grounded. Prefer `Simulated 550 m on demonstration graph` over `54% safer in Elmina` without measurements.

## Interaction design
- Every visible control must work or be labeled as a future concept. No decorative dead-end buttons.
- Separate Resident vs Operator journeys; maintain consistency through shared design tokens and React components.
- Support accessible names, keyboard navigation, contrast, obvious feedback after state changes.
- Default presentation must work without external APIs. A connected-data extension can be added after approval.

## OpenDesign use
Treat this root `DESIGN.md` as the project brand contract. Open the actual repository workspace in OpenDesign; save/export design artifacts into the repository (for example `design/` or `src/components/`) instead of leaving the only copy in an OpenDesign session. Ask OpenDesign to preserve this palette, typography, accessibility rules and demo-data disclosure.

## Guardrails
Do not clone Sime Darby Property brand marks or imply a formal partnership/endorsement beyond participation in the named hackathon. Avoid copying branded product UI. Record licensed art, icons and typefaces in `docs/IP_REGISTER.md`.
