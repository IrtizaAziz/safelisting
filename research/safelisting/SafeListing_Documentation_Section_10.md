# SafeListing — Final Documentation Checkpoint: Section 10

**Status:** Research/design validation completed. MVP, pilot and submission instructions are plans, not working test results.  
**Previous:** `SafeListing_Master_Documentation_Sections_01-09.md` and checkpoint files 01–03, 04–06, 07–09.  
**Complete master:** `SafeListing_Master_Documentation_Sections_01-10.md`.  

---

# 10. MVP, Pilot, Delivery Plan & Roadmap

**Project:** SafeListing — AI-Powered Rental Trust & Property Passport  
**Competition:** Sime Darby Property University Hackathon 2026 — Township of Tomorrow / PEOPLE (Safety & Security; Digital Living)  
**Prepared:** 21 October 2026  
**Document status:** Design-validated delivery specification; **no implementation, partnership, security test or operational pilot is claimed complete**.  
**Inputs:** Approved Sections 01–09, official 2026 hackathon site, and standards/source links previously verified in Sections 03–09.  
**Priority:** Demonstrate one genuine, bounded trust mechanism, rather than a large collection of unrelated screens.

## 10.1 Delivery decision and scope lock

**Build one independent demonstration of rental-authorisation trust with three linked functions:**

1. **ListingAuth (indispensable):** a qualified-in-demo reviewer grants a fictional current letting-authority attestation; the approved lessor issues a signed, unit/agent/terms-specific, time-limited authorisation; guests can verify current state and the issuer can revoke or supersede it.
2. **AI TermsGuard (indispensable for product positioning):** extract candidate values and source quotations from a fictional external advertisement or message, allow correction of extraction errors, and use **deterministic** comparisons against the *current* verified record. The AI cannot authenticate ownership, authorise a listing, or decide that paying someone is safe.
3. **HomeLedger Lite (strictly bounded):** a small set of permissioned records for **the same fictional unit**, with provenance, date, scope and an explicit incomplete-history notice. It is not a property inspection service.

**StopLoss997, full HomeLedger, payment/escrow services, commercial ad screens, real agency billing, registry/SDP integration and a rental marketplace are excluded from the initial build.** Their inclusion now would raise the risk of an unfinished or unsafe core.

The user-facing claim is deliberately narrow: **“Check whether the specified issuer currently recognises this person's permission to advertise this specified property on these authorised terms, and see which external claims match or remain unverified.”** It is **not** a promise of scam-free renting, a certified condition report or authenticated bank payment.

### Delivery priorities and cuts

| Priority | Capability | Required demonstration | Cut/fallback principle |
| --- | --- | --- | --- |
| **P0 — Must function** | Reviewer-gated fictional authority, scoped listing, genuine JWS signature, public signature/status/expiry check, revoke/versioning | Demonstrably rejects non-approved issuer/applicant, tampered claim, expired/revoked record | **Do not present the project as working SafeListing if this loop fails.** |
| **P0 — Must function** | Safe tenant status semantics and verified public claims | Account-free independent guest, matching unit/agent/terms, explicit unverified bank payee, status-outage inconclusive | No blanket positive trust badge; restrict the scope rather than invent proof |
| **P1 — Core AI** | TermsGuard structured extraction + deterministic rules | Pasted-text input at minimum, source spans, field correction, match/contradict/not-covered | If vision OCR is unreliable, disable image input and demo pasted text honestly |
| **P1 — Core supporting value** | HomeLedger Lite | Three fictional, scoped facts: one source-supported limited statement, one owner-declared, one unknown; access denial test | No full upload centre; preloaded synthetic provenance is acceptable if labelled |
| **P2 — Polish** | Screenshot OCR, Malay/English UX, accessibility, reporting, animations and responsive refinements | Include only after core and negative tests work | Cut polish rather than trust checks |
| **Deferred** | Full SDP App integration; real lessor verification; paid SaaS/API; escrow; broad property passport; StopLoss997 full module | Architecture/roadmap only, not working claims | No fabricated partner/API, payments or real personal data |

**Technical baseline (from Section 05):** Next.js/React/TypeScript, server-side APIs, PostgreSQL/private object store or comparably secure managed data layer, tested JOSE/Ed25519 signed JWS, current server-side status, schema-constrained OCR/vision/text extraction. These are team architecture choices, not organiser mandates. Do not claim W3C VC 2.0 interoperability unless implemented and tested.

## 10.2 What submission stages actually require — separate confirmed from unconfirmed

**Verified from the official hackathon site [D1]:**

- Registration: 11 September–21 October 2026.
- **Proposal submission: 23 October 2026.** The publicly accessible site specifies the **date**, not a separately authenticated upload time or the briefing's exact deliverables.
- Judging: 24–28 October; Top 10 announced **28 October**.
- Mentoring: **2–6 November**.
- **Final submission: 11 November**, followed by Top 10 Pitch Day **14 November** and final presentation/award ceremony **3 December**.
- The pitch must cover **Mechanism** (what the solution does, who benefits, why it creates value) and **Enabler** (how technology enables and scales it); at least one team member must be able to code and demo a working prototype.

**Still requires confirmation from the original briefing slide(s), registration email or submission portal:** exact presentation slide maximum (the previously discussed *10-slide* format is a **planning cap**, not a reverified mandate), submission file formats, presentation/deck-plus-demo video duration and hosting, whether a Git repository and working prototype are **mandatory on 23 October or reserved for finalist submission**, permitted video aspect/size, file naming, team member declaration, whether a fourth distinct item is required, access permissions and the final upload cut-off **time/time zone**. Previous team conversation identified a diagram with four submission elements; its exact text has not been independently inspected.

**Do not** import deliverable rules from another hackathon. **The team should retrieve the actual briefing slide 22 or its official submission form.** Until then, prepare flexible artifacts with source files that can be exported and recombined quickly:

| Artifact | Preparatory specification, not claimed official requirement | When to package |
| --- | --- | --- |
| Pitch deck | **Working target:** at most 10 clear slides, editable original plus PDF export; mechanism and enabler explicit | At minimum for the 23 Oct proposal; confirm the organiser's actual limit |
| Narrated deck/demo video | Separately record pitch narration and a continuous real interaction demo, combine/cut to the organiser's verified length | Only submit in the required round/format after confirming |
| Prototype/demo link | Independently hosted browser demo using *only synthetic data* and a visibly fake issuer, or a reproducible local screen capture if hosted links are not required | Availability plan for both stages; final requirements pending |
| Source repository | Reproducible implementation, tests, README, architecture/security notes, no keys or personal data | Prepare when code development begins; **repository creation is deliberately deferred by the team's current decision** |
| Submission metadata | Team/project/track fields, links, permissions, description and AI-use disclosure if required by official form/terms | Verify on the real submission portal; do not assume a 3-item checklist is exhaustive |

**Operational rule:** The 23 October deadline is the immediate proposal milestone. Treat the November 11 final as a separate iteration with mentoring feedback; never postpone a required October proposal while building optional future production components. Earlier discussion suggested 11:59 PM MYT, but the official webpage examined for this section does not independently corroborate the hour; verify it from the organiser's message/portal.

## 10.3 Prototype roles, screens and a reproducible data story

The prototype demonstrates roles, not just UI pages:

| Role | Entry point | Realistic allowed actions | Not permitted |
| --- | --- | --- | --- |
| **Demo issuer reviewer** | Protected review screen | Approve/reject preseeded **fictional** current-authority applications, suspend disputed attestation, inspect limited review logs | Cannot approve own real property rights; does not connect to actual state register |
| **Approved demo lessor** | Owner dashboard | Draft an authorisation, select fictional agent, set explicitly covered terms, issue after server check, revoke, request amendment | Cannot change original signed claims or self-grant issuer review |
| **Delegated agent** | Optional role or read-only mandate view | Retrieve the approved share reference/contact/terms | Cannot unilaterally raise rent, change the unit/payee or reinstate revoked record |
| **Guest prospective tenant** | Separate, **no-login authentic demo verifier** | Enter an unpredictable reference, view permitted claims/live status, use TermsGuard, see allowed HomeLedger summaries | No private owner proof, unsanctioned identity search or direct document access |

**Five central user experiences:** (A) issuer approval status; (B) owner create/manage authorisation; (C) guest verify a reference; (D) TermsGuard pasted text/screenshot comparison; (E) HomeLedger limited record panel. These can use fewer or more physical pages if the journey remains clear.

**Fictional demo fixture:** “Fictional Residence, Block A, Unit 12-03”, agent “Agent A”, `RM1,850/month`, one explicitly approved contact channel, issuer `DEMO_SIMULATED_AUTHORITY_CHECK`, no verified bank/payee. Misleading external copy states `RM1,700/month`, Contact B and a booking transfer to an unknown account. The issuer and properties must be prominently labelled **synthetic demo data / not verified by SDP**. Never use a real property deed, Malaysian IC, unredacted real WhatsApp messages, live bank details or official SDP credentials.

A three-record HomeLedger example should show: (1) *issuer/provider-confirmed within a precisely stated limited scope*, (2) *owner-declared renovation* and (3) *unknown current repair/equipment state*. Even the first record must not imply the property's current physical condition is certified. Private attachments require separate grants and object-level checks.

## 10.4 Flagship end-to-end demonstration and negative controls

**Single sequential story for the pitch and demo; the entire experience must use one persistent property and credential, not unrelated screens.**

1. **Reviewer:** Show a fictional applicant initially `PENDING`; attempt to issue an authorisation and demonstrate rejection; have separate demo reviewer approve the synthetic dossier. Label this as *simulated authority review*.
2. **Owner:** Issue an actual signed ListingAuth version for fictional Unit A / Agent A / RM1,850 with expiry and a deliberately unverified payee field; obtain an unpredictable reference.
3. **Tenant:** In a new, logged-out browser session, open the authentic demo verifier independently, enter the reference and read the current issuer, specific public authorised claims and limitations. Explain that a valid signature alone does not prove legal title or bank account ownership.
4. **TermsGuard:** Paste the copied/misleading WhatsApp-style ad (`RM1,700`, different phone, unfamiliar bank instruction). Show extracted quotes, optional field correction, and **contradictory rent**, **contradictory approved phone**, **unverified payment recipient**. Do not produce an AI 'scam certainty' percentage.
5. **HomeLedger:** View the same unit's three narrow provenance-labelled facts, disclosure limits and the selected-records-only warning; attempt access to a private attachment as a guest and show denial.
6. **Revoke:** Owner revokes the original agent/listing; refresh the *same* tenant reference. The service shows **not currently authorised**. Demonstrate that a copied screenshot/reference cannot restore the old active result.
7. **Integrity/outage checks:** Alter a signed rent field; signature check fails. In a seeded simulation of status-service outage, the verifier displays **temporarily unable to verify**, not an old affirmative result.

**What the demo proves:** signing and current-status behaviour over fictional data, structured AI-assisted comparison, bounded provenance and enforced access. **What it does not prove:** current Malaysian legal ownership verification, actual SDP App connectivity, prevention of any real scam, validated payee, real agency adoption, live tenant-data processing or production cybersecurity certification.

**Video production:** Record screen capture as a single reproducible run once the flow stabilises. Record pitch audio separately if necessary and preserve separately editable segments. The exact video time allocation is **TBD until organiser instructions are inspected**. Any earlier four-minute breakdown is only a rehearsal suggestion, not a competition rule. Prefer readable mobile/desktop text and actual live status changes over cinematic animations. Never pre-render a static animation and pass it off as live functionality.

## 10.5 Executable acceptance and security gates

**This section is a delivery plan, not evidence that any test was executed.** The test IDs in earlier approved sections remain normative within our team. The summary below prioritises the most competition-critical negative behaviours.

| Release gate | Scenario | Required result | Traceability |
| --- | --- | --- | --- |
| **G-01 Issuer trust** | Pending/rejected/suspended synthetic authority requests issuance; applicant tampers client role | Server refuses; no active credential | AC-01; ST-01; ST-18; INT-02 |
| **G-02 Scope/integrity** | Substitute unit, representative, public contact or signed rent; untrusted issuer/key | Correctly reject altered signature/scope; no wildcard mandate | AC-02/03; ST-02/03 |
| **G-03 Current status** | Revoke, expire, supersede, lose live status/issuer trust; race issue/revoke | Never show current authorisation on non-current/inconclusive result | AC-04/05/06; ST-04/05/06/13 |
| **G-04 Guest** | Verify without login, malformed reference, enumeration attempt | Independent limited verified fields; no private information; abuse throttling | AC-07; ST-07; INT-04 |
| **G-05 AI correctness** | Matching field, changed rent, unmentioned booking fee, blurry/injected screenshot | Source quotes + user correction; MATCH/CONTRADICT/NOT COVERED; no elevated tools | AC-08/09; ST-08/09; IV-04 |
| **G-06 Payment boundary** | Genuine copied credential attached to new payee/bank account | Payee remains **unverified**; no safe-to-pay or scam-free verdict | AC-10/12; ST-10/12; IV-02/03 |
| **G-07 Evidence/privacy** | Self-upgrade owner record; fetch private other-unit HomeLedger file; revoke grant | Correct provenance labels; access denied; incomplete-history disclosure | AC-11; ST-11/15/17; IV-07 |
| **G-08 Consistency/ethics** | Paying agency versus free owner; sponsorship display | Same truth/status for every visitor; ads not placed in warnings | INT-07; CM-01/02/03/05 |
| **G-09 Disclosure honesty** | Inspect screens, video, README, deck | Explicit **synthetic issuer**, **no actual SDP integration**, no proven fraud savings or actual partnership claims | INT-03; IV-01/02; CM-07 |

**Release blockers:** wrongful issuer approval, forged/tampered token accepted, revoked record shown as current, payment recipient implied verified without separately reviewed basis, unauthorised private evidence disclosure or an LLM able to alter issuer authority. These are **hard stops**, even if visually attractive.

**Proposed usability gates from Section 08** (targets, not achieved): finite seed tests reject all known critical unsafe states; in a small consented task test target ≥80% correct comprehension of what remains unverified, with no critical false reassurance; median reference-entry check under 60 seconds where feasible. State actual sample size, raw observations and caveats if later tested. A 100% pass on finite examples is not a production security guarantee.

Keep a minimal reproducible test record: test ID, fixture, expected/actual result, run date, environment/commit and screenshots or logs; never report 12/12 or 18/18 as completed before execution.

## 10.6 Implementation sequence and realistic fallbacks

**Order matters more than visual completeness.**

**Build increment 1 — Trust kernel (P0):** type and validate immutable authorised claims; reviewer permission; signed JWS key custody; issuer allowlist; current authority/status/expiry; guest verifier; atomic revoke/version update; non-current and outage tests. **Exit only when negative tests pass.**

**Build increment 2 — Human-readable safety (P0):** limited public projection; clear issuer/assurance scope; guest entry without account; no payee endorsement; copied credential/domain warnings; responsive readable statuses. Protect private fields.

**Build increment 3 — TermsGuard (P1):** typed or pasted text; structured claim extraction with quotes; user correction; normalisation; deterministic comparator; correct three-way outcomes and injectable-prompt rejection. **Fallback:** if external AI or screenshot service is unavailable, preserve actual comparison code with pasted text/explicit correction; do not represent hardcoded mock examples as live AI inference.

**Build increment 4 — HomeLedger Lite (P1):** three curated fictional records with source/date/limitations, permission grants and a blocked private-document request. **Fallback:** readonly seeded facts with real access policy; do not build a comprehensive upload workflow.

**Build increment 5 — Evidence and packaging:** preserve working test results, concise system diagram, README/startup procedure, limitations, screen-recorded demonstration and deck. Check safe secret handling and no real user data.

**Dependency order:** `qualified-in-demo reviewer → property-specific authorisation → signed immutable version → current status check → guest interpretation → AI field comparison → optional limited history`. A visually polished guest screen without a trustworthy status backend does not satisfy the core mechanism.

## 10.7 Competition calendar and two separate deliverable passes

| Date / stage | Practical action | Decision rule |
| --- | --- | --- |
| **21 Oct 2026 — concept/documentation freeze** | Complete Sections 01–10, evidence and realistic trust boundaries; confirm 23 Oct upload instructions; outline slide narrative | Avoid adding new feature modules |
| **22 Oct — proposal preparation** | Produce the proposal deck/story with one concrete interaction walkthrough, bounded SDP integration and evidence; begin/continue P0 verification work only if required and team resources permit | Proposal must remain independently understandable even if prototype is incomplete |
| **23 Oct — initial proposal submission** | Submit **exactly** the artifacts and metadata confirmed by the real portal/briefing before its verified cutoff; test links and permissions | Hard deadline. **Do not assume** a Git repo/video/prototype is or is not mandatory without checking briefing |
| **24–28 Oct — evaluation** | Preserve submitted version; perform safe technical improvements and user/competitor validation if allowed | No retroactive replacement of submitted claims without permission |
| **28 Oct — Top 10 result** | If shortlisted, reprioritise mentor feedback and final demo depth | Do not assume selection |
| **2–6 Nov — mentor sprint** | Seek input on qualified issuer operations, SDP App entry point, public verification UX, privacy and business economics | Record partner feedback as feedback, not approval or contracts |
| **7–10 Nov — finalist build and rehearsal** | Run technical negative tests, test user comprehension, refine HomeLedger and AI comparison, capture reliable demo | Freeze features before video/repository packaging |
| **11 Nov — final submission** | Upload organiser-specified final source, deck, demo/links and declarations | Exact file/link/visibility rules to be checked |
| **14 Nov — Top 10 pitch day** | Present mechanism + enabler with live or recorded tested flow per instructions | Separate pitch claims from simulated controls |
| **3 Dec — final award/presentation** | Present if required/selected; incorporate permitted feedback | No invented product deployment or results |

**Short-horizon fallback:** If only the initial proposal is required on 23 October, prioritise a clear, credible deck and a **honest** prototype plan. If the official briefing mandates a working demo/video/repo in that initial submission, divert team capacity to G-01–G-06 first, cut polish/HomeLedger breadth and package the smallest functional trusted loop. The repository remains **not yet created by agreement**; this documentation does not create or assume code.

## 10.8 Team workstreams and evidence handoffs

The official event describes **3–5-person** teams [D1]. Specific member assignments have not been supplied here; allocate roles by actual skills, not fictional team biographies.

1. **Product/evidence & submission owner:** problem sources, accurate competition rules, competitor caveats, people/theme scoring, deck/video script, single source of truth and final upload quality assurance.
2. **Frontend & tenant experience owner:** owner/issuer/guest page flow, authentic-domain guidance, error language, responsive accessibility, HomeLedger display, screen capture.
3. **Backend/security owner:** reviewer/issuer authority model, typed claims/JWS keys, key allowlist, status/revocation, data access and acceptance tests.
4. **AI/data owner (if team capacity):** TermsGuard extractor and schema, labelled adversarial examples, correction UX, deterministic matching integration, model failure fallback.
5. **Integration/QA owner (if team capacity):** build/run reproducibility, end-to-end negative cases, recording, release checklist, unresolved-risk log.

Cross-review is essential: the backend owner does not self-certify every reviewer/authorisation test; the presentation owner cannot make an impact claim absent a documented source; everyone rehearses the difference between a **synthetic legal attestation** and **actual cryptographic verification**.

## 10.9 Feasibility estimate and critical dependencies

**Feasible as a student technical demonstration:** signed credential, issuer/status checks, tenant verifier, deterministic comparisons and curated HomeLedger data can be implemented with mature libraries and a small fictional dataset. **Not proven feasible as a live real-estate assurance service:** a qualified issuer must independently establish current power to let the property, handle resales, co-ownership/company mandates, disputes, periodic rechecks, payment scope and secure disclosure. The software does not eliminate these legal/operational costs.

| Dependency | Hackathon workaround (honest) | Production launch gate |
| --- | --- | --- |
| Current legal letting-authority source | Explicit fictional authority dossier reviewed by separate test issuer | Lawful, qualified, ongoing verification process with accountable issuer and appeals |
| SDP App API / branding / property data | Independent clearly **unofficial** demonstration; conceptual SDP App extension mock-up only | Written SDP approval, defined integration scope, data and brand permissions |
| Agent professional/current mandate | Seed agent and owner permission; distinguish assumed registration versus checked mandate | Applicable licensing/mandate verification and local legal guidance |
| Payment recipient authentication | **Unverified** by default; no real bank lookup or transfer | Separate authorised payee process if payment claim is ever offered |
| Data privacy and HomeLedger | Fictional redacted data, minimal scoped summaries and object policy | Malaysian PDPA/controller/processor assessment, privacy notices, document rights and audit |
| Commercial customer/partner demand | Section 09 labelled cost sensitivity, not forecast | Actual interviews/LOIs, checked staff workload/cost and lawful fees |
| External-channel adoption | Manually paste/forward an ad and enter reference on genuine site | User education and partner distribution without misleading badges/QR links |

**Most severe risk:** cryptographically impeccable credentials issued from incorrect or stale letting-authority evidence would create *stronger false reassurance*. This is a reason to gate issuer policy, not a justification for an AI guess. If no trustworthy issuer or partner can be found, **do not proceed to real issuance**; revise product scope and communications.

## 10.10 SDP pilot: staged, accountable and conditional

**Pilot objective:** Test whether consenting lessors can obtain credible, current listing permissions and prospective tenants can verify the right claims before acting on adverts, without creating false payment reassurance or releasing private history.

**Proposed pilot setting:** One suitable SDP residential development **only if SDP authorises the study** and a qualified legal/property-verification partner or approved issuer can take responsibility for authority checks. No specific town is promised; choice depends on available renting stock, owner participation, approved data channels and support capacity. This is a proposal, not an announced pilot programme.

### Pilot phases and gates

**Stage 0 — Student lab / hackathon:** Fictional issuer, fictional properties and adversarial data; working crypto/status/claim checks; source-cited synthetic demonstration; no real residents or fees.

**Stage 1 — Partnership/governance discovery:** With SDP and qualified reviewers, determine who legally may review and attest letting rights, authoritative current evidence, property mapping after resale, co-owner mandates, issuer trust name/domain, consent, personal-data ownership, dispute paths and staffing/cost. No live credentials until approvals.

**Stage 2 — Controlled consented pilot:** Small defined group of eligible lessors/agents with actual qualified review; fresh status/revocation and public authentic-domain checking; privacy and incident handling; no payments or comprehensive condition certification. Stop on false approval, stale-positive status, sensitive-data breach or serious user misunderstanding.

**Stage 3 — Decision evaluation:** Compare actual comprehension and simulated pre-deposit behaviour against existing due diligence; measure issuance costs, renewals, delays, false positives, disputes, security incidents, HomeLedger disclosure accuracy and tenant/owner willingness to adopt. Scale to further participating units only if issuer reliability, user safety and operating economics pass agreed gates.

**Later stages:** SDP App native property screen if authorised; separate verifier remains guest accessible. Multi-township extension and partner APIs only after governance, current status, agreements and compliance work scale responsibly.

No physical township deployment timeframe or quoted cost is established by the material reviewed; do not assign a firm 30/60/90-day launch promise without operational input.

## 10.11 Impact, sustainability and commercial go/no-go measurements

Link directly to the planned KPIs in Section 08: **IMP-01** correct risk recognition; **IMP-02** false reassurance; **IMP-03** verification before simulated payment; **IMP-05** genuine-domain recognition; **IMP-06** tampered/revoked status rejection; **IMP-07/08** AI field quality; **IMP-09** issuer approval errors; **IMP-10/11** owner adoption/listing coverage; **IMP-12** revocation freshness; **IMP-13/14** HomeLedger provenance and privacy; **IMP-15/16** adverse events and accessibility.

**Proposed decision hierarchy:**

- **Safety first:** no unapproved issued credential, stale affirmative revoked state, unauthorised document disclosure or unverified payee portrayed as cleared; any such incident requires a hold and remediation.
- **Then comprehension:** actual renters must understand scope/limits and know how to find the real verifier; a high click-through rate cannot compensate for false reassurance.
- **Then operating feasibility:** qualified authority checks, support/renewal cost, partner consent and time-to-issue must be measured. Section 09's RM199/RM299/RM499 pricing and 50-organisational subscriber example are **illustrative assumptions only**, not quoted market demand or a reliable break-even.
- **Then expansion:** repeatable process across participating properties with ethical free tenant verification; ads and paid features must be technically and visually segregated from truth/status and fraud warnings.

**Impact claim ceiling at launch:** safer decision support is a credible *hypothesis*, not a proven reduction in rental scams, actual RM losses, defective homes or carbon emissions. HomeLedger may make service records easier to understand; environmental savings cannot be claimed without observed repair/replacement outcomes.

## 10.12 Repository and release evidence — documentation now, code later

The team has explicitly chosen to **complete documentation before creating the repository**. This section defines future evidence, without creating GitHub resources or claiming existing tests.

When implementation begins, the eventual repository should support:

- A small `README.md`: 1-paragraph problem, trust scope/non-claims, required environment, safe install/run commands, how to seed fiction, role/demo credentials with **no real secret**, test commands, disclosure of AI/provider dependencies and a working walkthrough.
- `docs/architecture.md`, `docs/trust-and-security.md` (data/signatures/issuer current authority), `docs/sdp-integration-proposal.md`, and an explicit `docs/demo-limitations.md`.
- Synthetic datasets and example advertisements, minimal evidence fixtures and an adversarial test matrix mapped to AC/ST/INT/IV/CM IDs.
- `.env.example` without secrets, standard ignore rules and an automated check that actual API keys/signing secrets/real identity proofs are not committed.
- A test report **only after tests run**, with date and commit/build identifier, distinct planned-versus-passed outcomes, and documented unresolved findings.
- Deck/video/prototype links with permissions appropriate to actual organiser requirements; source files can be handed off separately if required.

**Release checklist before any public demonstration:** known trusted demo domain or correct local URL; visible *not official SDP integration* disclaimer; working separate guest session; no real property/tenant data; no persistent raw private chats without disclosed opt-in; signature and current state checks; no false safe-to-pay status; HomeLedger private resource refusal; captured demo playback; readable content; actual organiser file and link constraints verified.

A screenshot gallery is not proof of executable cryptography. A working API is not proof of verified legal title. Preserve that distinction in every artifact.

## 10.13 Future feature roadmap with explicit criteria

| Later feature | Value hypothesis | Entry requirement / reason to defer |
| --- | --- | --- |
| **HomeLedger Plus** | Authorised contractor submissions, validated warranties, property record continuity | Record ownership, privacy, accuracy/disputes, current-authority transfer model; not a complete property health guarantee |
| **StopLoss997** | Help a person organise evidence after a suspected rental scam and find official bank/NSRC 997/police instructions | Separate safety-tested guidance; no bank freezing or recovery promises; current public NSRC instructions [D3] |
| **Professional Trust Console** | Paid bulk mandate and portfolio management | Qualified issuer, measured reviewer costs, buyer need, non-pay-to-pass controls |
| **Partner verification API** | Portable verification across approved marketplaces | Authenticated partner agreements, online status freshness and customer data boundaries |
| **SDP native property-area integration** | Stronger ongoing owner/resident journey | Explicit SDP approval, secure property mapping, currently valid rights review, permissions |
| **Multilingual/accessibility improvements** | More inclusive pre-tenancy safety checks | Native-language reviewed warnings, WCAG-aware testing and measured comprehension by cohort |
| **Optional labelled service advertising** | Help subsidise operations | Consent/compliance and explicit separation from all trust outcomes and sensitive uploads; never lead product strategy |

Any future change to the three-pillared product must be evaluated against whether it improves *listing authority, claim consistency or transparent property evidence* rather than making SafeListing a generic property super-app.

## 10.14 Judge-facing story and anticipated questions

**Short positioning:** “SafeListing is a proposed trust extension for the existing SDP property journey. A genuinely reviewed lessor authorises a particular rental listing, an independent visitor checks that authorisation's current signed status, AI flags conflicting terms in forwarded ads or messages, and HomeLedger Lite shows selected facts with their provenance. Our hackathon software demonstrates the technology using fictional data; real legal-owner checks and SDP integration require named partners and approval.”

**Five answers judges are likely to require:**

1. **Why SDP, not PropertyGuru/SPEEDHOME?** SDP's existing property lifecycle/app gives a potential trusted property-linked starting point; SafeListing is not another marketplace. Existing portals already do verification, so our differentiation is a **proposed cross-platform, specific-authorisation + claim-comparison + selected evidence** workflow, not a claim to invent verified rentals. Sections 03/07.
2. **Does SDP already know who legally owns the property today?** Not established. An historical purchaser account is insufficient. Production requires independent, current authority review, revalidation, appeals and accountable issuer governance. Sections 06/07.
3. **What prevents a criminal from copying a real QR/reference?** Nothing prevents copying a public reference. The tenant must open a genuine domain independently and inspect the signed *bound* property/contact/terms and current status. Unchecked payment channels remain unverified. Sections 04/06.
4. **What exactly does AI do?** Extracts external claims with evidence spans; ordinary code compares them with current issuer facts. AI never creates legal rights, verifies bank payees or signs/revokes authorisations. Sections 04/05.
5. **Where is the money and measurable value?** Free basic tenant verification; possible paid agency portfolio tools/partner APIs, subject to validated costs and demand. We would measure objective risk recognition, false reassurance and actual issuer operations; no fraud savings or forecasted revenue are yet proven. Sections 08/09.

**What not to say:** first-ever rental-verification platform, official SDP pilot, live land-title API, AI-verified ownership, verified bank payment, scam-free rental, complete defect history, signed standard equals factual truth, 100% prevented fraud, carbon savings, secure/pentest-certified product, paying commercial customers, validated profit.

## 10.15 Final validation and readiness result

| Review item | Result | Explanation |
| --- | --- | --- |
| Alignment with Sections 01–09 | **PASS — documentation** | Same three pillars, Safety/Security + Digital Living fit, no marketplace or scope drift; StopLoss997 deferred |
| Core functional spec | **PASS — testable proposal** | End-to-end issuer→signed credential→guest current status→AI field comparison→bounded history→revocation |
| Security, privacy and current-issuer safety | **PASS as test requirements; operationally conditional** | Carry AC-01–12, ST-01–18, and INT/IV/CM boundaries; no code/security audit asserted |
| Feasible demo sequence and fallback | **PASS as engineering plan** | Synthetic issuer and real crypto/status possible; fallback keeps P0 trust kernel even if OCR/provider fails |
| Competition date and judging framework | **PASS where official site explicit** | Official site confirms 23 Oct and 11 Nov dates, PEOPLE themes, mechanism/enabler; see [D1] |
| Exact deliverables, maximum slides, video time and round-specific Git requirements | **OPEN — DO NOT ASSUME** | Public official site does not expose the briefing-specific submission table; official slide 22/form/email required |
| Real current legal letting-authority issuer | **OPEN — production blocker** | No SDP/registry/qualified partner or operational mandate evidence established |
| Tested prototype, deployment, interviews, measured impact and paid demand | **NOT YET** | This document is a plan and not evidence of work executed |
| Readiness to produce deck, engineering backlog and demo script | **PASS** | All ten sections now supply consistent source material and falsifiable requirements |

**Section 10 verdict: PASS as a bounded, executable development and pilot roadmap; CONDITIONAL for live deployment and exact competition submission compliance.** The highest-priority remaining external task is to verify the real submission requirements, especially whether a video, GitHub repository and working prototype are mandatory on **23 October** or only during finalist submission. The highest-priority product task is to implement and actually test the **P0 trusted issuance-and-verification kernel** before polishing other features.

## 10.16 Sources, cross-references and non-claims

**[D1] Official SDP University Hackathon 2026 — Township of Tomorrow:** official timetable (proposal 23 Oct; final submission 11 Nov; pitch 14 Nov), team requirement, PEOPLE, judging and mechanism/enabler. **The site does not state exact 10-slide, video or repository format.**  
https://simedarbyproperty.com/universityhackathon/

**[D2] SDP App official FAQ:** property-linked dashboards, invited tenant role, documents, handover and defect features. These do not prove real current ownership/letting rights or real SafeListing integration.  
https://www.simedarbyproperty.com/app/faq.html

**[D3] Malaysia government NSRC 997 public guidance:** official scam response point for later StopLoss997.  
https://www.malaysia.gov.my/en/topics/hotline-nsrc-997

**[D4] W3C Verifiable Credentials Data Model 2.0:** issuer/verifier/status concepts and distinction between credential verification and underlying truth; **do not assume W3C VC implementation**.  
https://www.w3.org/TR/vc-data-model-2.0/

**[D5] IETF JSON Web Signature (JWS), RFC 7515; EdDSA/JOSE, RFC 8037:** security standards selected in Section 05, not novel product inventions.  
https://www.rfc-editor.org/rfc/rfc7515  
https://www.rfc-editor.org/rfc/rfc8037

**[D6] OWASP ASVS / API Security and GenAI prompt-injection references:** supporting security design/testing, **not a certification**.  
https://asvs.owasp.org/  
https://api-security.owasp.org/editions/2023/en/0xa1-broken-object-level-authorization/  
https://genai.owasp.org/llmrisk/llm01-prompt-injection/

**Cross-reference index:** Section 01 = boundaries and primary user; 02 = fraud and rental market statistics; 03 = competitor prior art; 04 = user journeys/AC; 05 = technical trust architecture; 06 = threat/privacy/ST; 07 = SDP strategy/INT; 08 = impact measurement/IV; 09 = commercial model/CM; 10 = delivery gates, stages, pilot and roadmap. Future documents, deck and video should use these exact source boundaries.

---

**Post-Section 10 handoff:** Use the cumulative *SafeListing Master Documentation — Sections 01–10* as the definitive internal source. Before producing the final submission package, verify the organiser briefing and the round-specific portal checklist. Do **not** create a source repository until the team requests implementation.