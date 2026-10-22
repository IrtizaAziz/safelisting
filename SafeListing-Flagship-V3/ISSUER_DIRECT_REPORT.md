# Direct issuer workspace entry

Preview: https://safelisting-flagship-v3-cbcrx28i2-irtiza-aziz-s-projects.vercel.app

Base: codex/ember-timeline / 30b7959, retaining the selected dark ember hero and latest PR7 timeline. Branch: codex/issuer-direct-entry.

Previously the embedded issuer document set sampleMode from mode=sample, assigned signedout otherwise, and initialiseAccess() hid the workspace and created an entry card. The router already correctly resolved /issuer; it needed no rewrite. The mode gate, canView navigation guard, gate container/function, sign-in handler and associated CSS are now deleted. /issuer directly shows the existing Overview; mode=sample and valid view query links remain compatible, with no redirect or new parameters. Legacy access queries do not authenticate anyone and simply open the same illustrative workspace.

The banner now reads Illustrative workspace. Existing local illustrative-role operation logic, authority-review eligibility checks, synthetic records and unavailable signing/revocation feedback remain unchanged. No real authentication, authority verification, issuance or persistence is implied or introduced. Heading/composition, ledger and five views are preserved. Home and verifier embedded documents are byte-identical to 30b7959; root React/Vite files and router.js are unchanged.

Files: safelisting-application.html (issuer payload only), deployment-qa.cjs and refinement-qa.cjs (old gate assertions replaced), issuer-direct-qa.cjs (new navigation matrix), this report and task log additions.

Validation: Node22 full root quality check passes typecheck, lint, six tests and build. Static build passes. Public six-width existing journeys pass. New direct-entry matrix passes at 320/390/768/1024/1280/1440: home/verifier issuer links, direct access, refresh, sample compatibility, five views, Back/Forward, mobile menus, logo, For renters, New check, How it works, active issuer navigation and no page errors/overflow. Existing refinement suite covers form errors, local candidate/draft operations and accurate unavailable-operation feedback. Evidence: issuer-direct-evidence/.

Production was not promoted and no PR was merged. Existing timeline licence-verification gaps remain documented in THIRD_PARTY_TIMELINE.md. Physical-device and screen-reader acceptance remains open; browser tests do not establish real issuer permissions. Next: user reviews this preview before production approval.

Final refinement acceptance: all 68 checks pass on the preview.

Final copy alignment: baseline heading was Every period / Every decision; changed to the explicitly requested Every listing / Accounted for, preserving typography/layout. Removed duplicate Example workspace prefix from operator metadata. Final preview retests this exact heading.
