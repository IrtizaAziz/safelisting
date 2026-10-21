# SafeListing — Documentation Checkpoint 03: Sections 07–09

**Prepared:** 21 October 2026  
**Competition:** Sime Darby Property University Hackathon 2026 — PEOPLE  
**Status:** Full internal documentation. Strategic fit, impact and proposed business model have been research- and design-reviewed; actual SDP integration, market adoption, commercial viability and issuer verification remain **unvalidated**.

## Re-entry context and locked decisions

- Earlier files: `SafeListing_Documentation_Sections_01-03.md` and `SafeListing_Documentation_Sections_04-06.md` contain the complete prior sections.
- SafeListing remains a **proposed extension** of the existing SDP App, not another rental marketplace or an existing official SDP service.
- The three connected pillars are **ListingAuth** (issuer-reviewed, signed, expiring/revocable permission), **AI TermsGuard** (extract untrusted claims and compare deterministically to current authorised terms) and **HomeLedger Lite** (selected, provenance-labelled, permissioned property facts). **StopLoss997** is a future roadmap addition.
- The basic public tenant verifier is intended to be **free**, independent and account-free. It must never give a blanket `safe to pay` result or assert that missing credentials mean fraud.
- The highest unresolved production risk is **credible and up-to-date current letting-authority review**. A previous SDP property account or a cryptographic signature alone does not establish current legal ownership or authority.
- **Section 07:** SDP strategy/App fit is supported by official material; no current approved integration, data feed, branding, funding or external verifier contract.
- **Section 08:** Important Malaysian fraud figures (922 reported rental-fraud cases and ~RM2.5m losses in 2025) are police-supplied statistics quoted in news reporting; the separate 24 property-agent-related cases are NOT additive. DOSM's 19.7% rented tenure figure covers Malaysian-citizen households in 2024, not annual transactions or the addressable paying market.
- **Section 09:** Commercial priority is free tenant verification + subsidised/basic owner participation + **paid professional portfolio administration**, then possible enterprise verification APIs and HomeLedger administration. Ads and referrals are optional, separate and compliance-gated. Paid accounts cannot purchase favourable trust outcomes.
- **Section 09 economics:** All unit costs, hypothetical RM299/org/month pricing, 50-org scenario and break-even sensitivity are **assumptions for a stress test**, not verified costs, market forecasts, revenue or actual customer commitments.
- **Next:** Section 10 — MVP, Pilot & Roadmap; then create a **single master** with all ten full sections, tailored deck/video specifications once briefing-specific rules are confirmed.

## Validation status

| Section | Research / design verdict | Still unverified in the real world |
| --- | --- | --- |
| 07. SDP Integration & Strategic Fit | PASS as a bounded proposed integration and official-strategy alignment | SDP approval, live property authority data and issuer/partner responsibility |
| 08. Impact & Sustainability | PASS as a grounded theory of change and proposed measurement plan | Scam reduction, behavioural effects, environmental impacts and adoption |
| 09. Commercial Model & Value Multiplication | PASS for coherent safety-preserving revenue model and transparent economics; **CONDITIONAL** for business viability | Paying agency demand, practical costs, legally compliant fees, scaled economics |

## Critical implementation and business gates

1. Secure an accountable issuer/partner with a lawful, current property-and-lessor authority-checking process; define reversals, appeals and revalidation.
2. Obtain SDP approval for actual app integration, domain/branding, data, operator, financial and liability roles.
3. Demonstrate cross-channel copied-ad/payee manipulation detection without false `safe payment` assurance.
4. Test tenants' comprehension and owners'/agencies' willingness to issue or pay; do not infer demand from competitor price lists.
5. Measure actual staff verification, recheck, security, privacy, support, AI and customer acquisition costs before promising sustainability.
6. Obtain legal/regulatory review of any estate-agency referral or commission model; do not let ads alter the verdict or exploit tenants' messages.
7. Check and preserve the official deck/video/repository submission requirements from the hackathon briefing before packaging competition deliverables.

---
# 07. Sime Darby Property Integration & Strategic Fit

**Project:** SafeListing — AI-Powered Rental Trust & Property Passport  
**Competition:** Sime Darby Property University Hackathon 2026 — PEOPLE / Safety & Security, Digital Living  
**Prepared:** 21 October 2026  
**Status:** **Research-backed strategy and integration design: PASS with explicit deployment conditions.** This is a proposed integration, **not an approved SDP product, live integration, signed partnership, verified ownership data feed, or a claim of measurable value already delivered.**  
**Continuity:** Incorporates Sections 01–06. Core pillars remain ListingAuth, TermsGuard and HomeLedger Lite. StopLoss997 is **roadmap only**.

## 7.1 Executive strategic decision

**Proposal:** Position SafeListing as a **property-linked rental trust capability extending the existing Sime Darby Property App**, with a public, account-free verification experience for people **before** they become tenants. SafeListing is not another rental marketplace, tenant management suite, or SDP-owned land title registry.

**Verified public facts:**

- The SDP App currently promotes purchaser/owner property dashboards, progress billing/construction updates, electronic documents, vacant-possession/key collection, defect submissions and monitoring, and management of invited household members. Its official FAQ specifically lists **“Plus” as a tenant-member role with limited property access**, invited by the property account holder. [S1][S2]
- SDP's **Integrated Annual Report 2025** calls for enhanced digital touchpoints, stronger enterprise data/AI capability and cybersecurity. Its stated **2026 priority** is to **position the SDP App as a unified digital platform** to improve accessibility, usability and customer journeys. [S3]
- The hackathon's official PEOPLE theme covers healthier, safer, more connected living and explicitly includes **Safety and Security** and **Digital Living**. Judging allocates 15% to Strategic Fit, 25% to Impact, 20% to Innovation, 20% to Feasibility, and 10% to Commercial/Value Multiplication. [S4]

**Inference, not confirmed fact:** These assets make SafeListing a plausible *product extension* and *pilot candidate*, but there is no public evidence SDP has agreed to issue owner-specific listing credentials, provide an integration API, recognise third-party ownership attestations, make defect records tenant-visible, or support external unauthenticated verification.

**Design thesis:** Today an SDP owner may share certain property controls with a tenant *after an invitation*. SafeListing tackles a distinct, earlier moment: **a prospective tenant independently checking the authority and claims of an advert before deciding to trust the advertiser or spend money**. That pre-tenancy distinction is more precise than saying the SDP App currently has no rental-related features.

## 7.2 How SafeListing maps to specific existing app capabilities

| Publicly documented SDP capability | Possible SafeListing extension | Trust / delivery restriction |
| --- | --- | --- |
| PRIME property-linked dashboard and property selector [S1][S2] | Owner initiates an application for **property-specific listing-issuance rights** from a property context | Purchaser membership and property linkage do **not** constitute current legal proof of ownership or letting authority; possible resale, co-owners, companies, agents and updated rights |
| Household/property members, including **Plus** tenant invitations [S2] | After a transaction, owner may optionally hand off appropriately limited information to an authorised tenant | Existing post-invitation member access must **not** be misrepresented as the public pre-tenancy verifier or reused as proof of a tenancy agreement |
| Property e-documents [S1][S2] | With appropriate rights, eligible evidence may help an applicant prepare an authority review or populate **HomeLedger Lite** | An e-document is not automatically current, suitable for proof of title, shareable, accurate or lawful to disclose; do not ingest the whole document library |
| Key-handover / vacant possession workflows [S1][S2] | Suggested moment to explain future authorisation services and optionally set up a property-information record | Handover does not itself establish future legal letting rights or authorise rentals |
| Defect submissions, tracking and rectification [S1][S2] | Selected, appropriately verified and redacted repair *facts* may later appear in HomeLedger Lite | Defect data may include other people, contractors, disputed outcomes and personal information; **no automatic publication, no assertion of full repair/defect history** |
| Official app support / general enquiry [S2] | Possible service channel for disputed property links, correction requests and help routing | No new SDP customer-service obligations or staffing accepted; operational ownership and SLAs must be negotiated |

**Do not imply** that SDP currently supports listing issuance, independent tenancy verification, agent delegation, public property-record APIs, QR rental checks or rental payment escrow.

## 7.3 User lifecycle and the added step

1. **Existing property relationship (supported capability):** A purchaser/property holder may be linked to a specific SDP property within the App. That link is useful *context*, not sufficient current-owner authority. [S1][S2]
2. **New authority review (proposed):** A person applies for permission to issue rental authorisations for that unit. A qualified issuer reviewer evaluates up-to-date evidence of the applicant's right to let and any agent mandate. On uncertainty, issuance is **pending/denied**, not automatically approved by AI or a stored purchaser ID.
3. **ListingAuth issuance (proposed):** An approved applicant authorises exactly the property, designated agent/contact, rent/fee terms covered, validity and disclosure scope. A recognised issuer signs the immutable version and exposes a live, revocable current-status service (Sections 04–06).
4. **External discovery (proposed):** The authorised advertisement may appear on Facebook, WhatsApp or existing portals. A prospective tenant navigates **independently to an officially recognised verifier** (not an arbitrary advert-supplied shortened link), enters the reference and checks the genuine issuer, bound public claims and current status **without registering for the SDP App**.
5. **AI TermsGuard (proposed):** Screenshots/messages are processed with opt-in and data minimisation. AI extracts claims and cites their source; deterministic rules compare them to the currently signed record, separately identifying matches, contradictions and uncovered claims. An unverified bank account never becomes “safe to pay.”
6. **HomeLedger Lite (proposed):** The tenant can request/view only expressly permitted, redacted, provenance-labelled facts about the **same listing's unit**. The service describes incomplete histories and owner selection honestly.
7. **Optional later relationship (proposed):** If a real tenancy is independently concluded, existing invited-tenant services *might* complement the journey where SDP permits, without SafeListing purporting to certify or execute a tenancy.

**Key value:** the pre-tenancy outsider can independently cross-check an advert **before an account invitation**. This does not replace visiting the property, checking agent registrations, legal documentation, identity or payment safeguards.

## 7.4 Strategic alignment: what we can honestly claim

| SDP strategic priority / challenge | Public basis | SafeListing's proposed contribution | Strength / proof still needed |
| --- | --- | --- | --- |
| **PEOPLE — Safety and Security** | Hackathon official PEOPLE question and themes [S4] | More specific checks of advertiser authority and changed terms during a vulnerable rental decision | **Strong thematic fit**; no measured fraud prevention yet |
| **PEOPLE — Digital Living** | Hackathon categories [S4] | Simple independent digital verification available even when ad originated elsewhere | **Strong thematic fit**; usage/usability untested |
| **SDP App unified customer journey** | 2026 priority in IAR 2025 [S3] | Adds a proposed letting/trust step after purchase/handover; gives owners another reason to engage with the property dashboard | **Strong strategy-to-concept link**, subject to SDP priorities and feasibility |
| **Customer/community experience** | Reported strategic focus and material matters [S3][S5] | Less ambiguity and clearer expectations at the prospective-resident stage | **Plausible**; satisfaction and behaviour unmeasured |
| **Data & AI capability** | Digital transformation / data and AI priorities [S3] | AI extracts untrusted adverts while issuer data and non-AI rules determine what is actually authorised | **Good technological alignment**; must not frame AI as legal proof |
| **Cybersecurity / privacy** | IAR priority and material risk [S3][S5] | Controlled signing, evidence minimisation and consent-aware disclosure by design | **Conditional**; real assurance, threat testing, governance and cost needed |
| **Broader value creation / new income streams** | SDP's value-creation and corporate-priority framework [S5] | Possible portfolio admin subscription, external verification APIs and optional approved services | **Commercial hypothesis**, willingness to pay and liability exposure not validated |
| **Township replication** | 2026 hackathon goal of township-relevant scalable ideas [S4] | An approved authority/credential protocol could serve successive SDP communities without building a listing marketplace | **Architecturally plausible**, not proof of partner or buyer demand |

**Strategic claim for judges:** “SafeListing extends SDP's existing property relationship into a safer pre-tenancy experience. The app provides a plausible entry point for owners; a separate, recognised issuer checks current letting authority, and prospective residents independently verify an advertisement without having to move the listing into a new marketplace.”

**Avoid:** “SDP already knows every current legal owner”; “SDP already verified this unit for rent”; “SDP has provided an API”; “SDP accepts liability for SafeListing”; “the SDP App contains a complete rental and repair history”; “the first property-verification app.”

## 7.5 The most important governance choice: who may issue a trusted authorisation?

A signature alone is not legal proof of title, a current mandate or a safe payment. Sections 03–06 establish this distinction. For a real SDP pilot, choose and formally approve an issuer/verification governance model:

**Option A — SDP-operated credential service with specialist authority checks.** SDP operates the customer-facing workflow and issuing service; current letting authority is verified via qualified SDP staff or approved external verification professionals/evidence sources. Benefits: close app integration and understandable branding. Costs/risks: ongoing authority review, disputes, key custody, regulator/legal work and reputational liability. **No such arrangement is confirmed.**

**Option B — Credential service operated by an approved specialist partner.** An authorised partner conducts checks and issues/sponsors credentials under clear rules; the SDP App initiates an application or directs a user to the service. Benefits: may reduce direct build burden and leverage specialist expertise. Risks: issuer-brand clarity, processor/controller boundaries, trust lists, liability, quality and outages. **No partner is secured.**

**Option C — SDP as limited attestor of developer-origin facts, with a separate current-authority issuer.** SDP contributes only facts it can actually substantiate (e.g., an original handover milestone, where lawful), while a competent issuer performs **current letting-authority** checks. Benefits: cleanest truth boundary, may be preferable for resold properties; increased coordination and claims complexity. **A design option, not an existing system.**

**Recommended initial architecture:** C as the conservative trust principle, with B or A for the actual rental authorisation depending on SDP's approved operational role. The tenant-facing result must name **who attested what**, the date/validity, the assurance scope and what is **not** verified. Never allow an automatically inherited purchaser account to self-upgrade to a legal-owner issuer.

**Production gates:** define acceptable current proof, property/address mapping, co-owner consent, corporate representation, proxy mandates, known sales/transfers, dispute/renewal handling, reviewer independence, incident suspension, and audits. If no qualified issuer/current-proof process can be agreed, SafeListing cannot honestly launch as trusted listing authorisation; the project remains a synthetic prototype.

## 7.6 Proposed integration options and dependency gradient

| Stage | Experience | Required existing SDP integration | What can truthfully be shown |
| --- | --- | --- | --- |
| **0 — Hackathon prototype** | Standalone owner screens styled as *concept screens* + independently visited demo tenant verifier | **None**; entirely synthetic owners/properties/agent/ledger claims | Working signature checks, live status/revocation, deterministic claim checking, access controls; simulated legal-owner review. Clearly **unofficial** |
| **1 — Approved companion pilot** | An officially permitted link/entry point from selected SDP experiences to a securely operated verification portal, or independently operated partner portal | SDP permission/approved domain and brand use; optionally delegated login only if negotiated | Can test demand, journey and issuer workflow without modifying all app modules; no assumption of APIs |
| **2 — Native SDP App module** | Owner creates/manages listing permissions within *My Property*; tenant still has open, outside-app independent verifier | Approved account association, identity/session integration, property mapping, audit and support APIs, security/UX review | Deeper continuity from owner property dashboard into verifiable rental permissions |
| **3 — Approved ecosystem/API expansion** | Controlled credential status/verification endpoints for agencies or platforms; richer consented HomeLedger integration | Bilateral agreements, stable API governance, current-authority refresh, legal/data controls, audit and incident processes | Potential across developments; requires partner adoption and credible economics |

**Anti-phishing design:** A public verifier must use a canonical domain that is verifiably communicated through an **official** channel once such a channel is approved. The hackathon prototype will use only a **clearly labelled demo origin** and will not imply a simedarbyproperty.com endorsement. A link/QR from a suspicious listing should never be treated as its own proof of authenticity.

**External platforms:** Ability to verify screenshots from other platforms does **not** depend on integrations into Facebook, WhatsApp or PropertyGuru, but automating publication, embedding platform-native badges or obtaining platform data would require separate permissions and agreements.

## 7.7 Minimal integration data contracts and minimisation

The original Sections 05–06 data architecture remains authoritative. The following is a **proposed** contract boundary, **not an existing SDP API**.

| Domain | Potential source / authority | Minimum data needed for SafeListing | Publication rule |
| --- | --- | --- | --- |
| Property reference | SDP property context if agreement allows; otherwise pilot registry | Opaque property ID and a tenant-checkable descriptor | Show only permitted, sufficient descriptor; no mass property enumeration |
| App member/account association | SDP identity service only with permission, or independent test account | Account reference bound to applicant; no public ID-card numbers | Private to operator/issuer; **not equivalent to current letting authority** |
| Current letting authority | Qualified issuer's independent accepted evidence | Applicant/lessor reference, property match, authority basis, reviewer/time, status/recheck | Public status states *scope/date/assurance level*, never raw personal proof |
| Rental mandate | Approved lessor and issuer workflow | Authorized representative, contact channels, terms, expiry/version, cryptographic issuer | Reveal exact approved public subset only after valid verifier query |
| Listing status | Credential operator | Active, revoked, suspended, superseded, expired, plus reason categories safe to show | Tenant-facing online check; fail closed/inconclusive on outage |
| TermsGuard content | Prospective tenant with appropriate notice/permission | Transient extracted claims and limited screenshot/message data | Never public; avoid retention/training by default; do not forward raw chat to owner/advertiser |
| HomeLedger facts | Eligible owner/provider/issuer submissions; select SDP documents only if explicitly authorised | Short fact, date, source, evidence grade, source limitation, disclosure grant | Public short summary only when permitted; private attachments remain restricted/redacted |
| Support / dispute record | Approved service operator | Ticket/reference, disputed claim, review events and correction outcome | Case-limited access; audit required; no disclosure to another tenant |

**API/access principles:** per-property authorisation; least-privilege service-to-service tokens; no database access by public verifier; explicit tenancy/record consent rather than implied consent from ownership; purpose limitation; access logs and revocation; consumer-facing labels that distinguish verified listing authorisation from unverified payment directions.

## 7.8 HomeLedger integration — the benefit and the trap

**Why it helps:** HomeLedger Lite gives a renter relevant, sourced information about the **same property** being advertised, strengthening the resident-decision value beyond an agent/price check. It could also preserve useful maintenance or warranty provenance across permitted occupancy transitions and create continuity with existing defect/e-document experiences.

**Why it's risky:** SDP defect submissions are primarily operational records created for customer service and rectification, not necessarily independent certificates about the full physical condition of the property. Automatically exposing them could leak personal data, misstate completion, prejudice disputed cases or imply omitted defects never existed. Similarly, a document about a prior occupant or provider cannot be republished just because an owner can see it.

**Safe MVP data:** (i) one deliberately fictional provider/issuer-confirmed *limited* repair fact; (ii) one fictional owner-declared improvement; (iii) one “unknown/not available” category. Demonstrate redacted viewer summaries and permission checks. Do not perform automated SDP defect ingestion or promote a property-health score. In production, every source-specific record would require legal basis, explicit release policy, provenance and a dispute/correction mechanism.

**Impact caveat:** A selective history may improve informed decision-making but can also mislead when records are withheld. Display **“Selected records only; no complete property-condition certification”** and origin/check dates prominently. This aligns with Sections 03 and 06.

## 7.9 Operations and accountability (proposed, not approved)

| Function | Accountable party to designate before pilot | Minimum requirement |
| --- | --- | --- |
| Current legal letting authority approval | Qualified issuer/reviewer | Evidence policy, independence, review expiry, contested-property escalation |
| App integration and approved branding | SDP digital product owner | Written scope, interface/security review, official domain linking |
| Signing keys and issuer trust registry | Issuer or delegated secure operator | Approved custody, rotation/compromise response, revocation availability |
| Property member lifecycle & access | App/property data steward where integrated | Remove access upon property transfer or changed delegation; role scope |
| Public verifier and tenant assistance | Named platform/service owner | Canonical-domain anti-phishing guidance, accessible UX, incident and dispute routes |
| TermsGuard data processing | Named data controller/processor arrangement | Privacy notice, consent/lawful basis, minimal retention, documented subprocessors |
| HomeLedger evidence/provenance | Each authorised submitting party plus platform review role | Claims source accuracy, permissioned disclosure, withdrawals/corrections |
| Partner fees and service advertising | Approved commercial policy owner | No pay-to-verify, no paid favourable verdict, disclosed partnerships |
| Disputes and false positives | Independent reviewer under approved policy | Temporary suspension, user recourse, secure logs and timely correction |

**Unresolved approvals:** Who would bear liability when an issuer accepted false ownership evidence, how a resold home updates the original SDP link, and who pays for review/appeals. The prototype must not invent operating commitments or service-level agreements on SDP's behalf.

## 7.10 Pilot proposal — deliberately bounded

The most credible real-world pilot is **one selected SDP residential community, only if SDP and an authorised verification partner agree**, with volunteer owners or lawfully empowered lessors and a limited set of rental listings. No claim is made that a particular township has a proven scam rate or existing rentable supply.

**Pilot selection criteria:** owner/lessor willingness; access to a legally credible authority-check workflow; a meaningful number of forthcoming rental listings; workable channels to reach tenants; privacy/technical owner; capacity for disputed claims.

**Proposed stages:**

1. **Governance readiness:** qualify issuer authority sources and procedures, determine controllers and legal permissions, ensure trademark/domain approval, close high-severity threat-model issues.
2. **Controlled issue-and-verify:** issue a small set of time-bounded credentials after real reviews; check independent verification with real consented testers, no payment processing.
3. **Adversarial scenarios:** cloned adverts, copied QR codes, mismatched agents/contacts/rent, expired/revoked status, phishing links and incomplete HomeLedger provenance.
4. **Usability and adoption:** time-to-check, ability to identify the authenticated domain, comprehension of warnings, lessor/agent willingness to issue and refresh, tenant willingness to check **before deposits**.
5. **Decision gate:** proceed only if assurance quality, safety tests, adoption and cost pass criteria negotiated by SDP; revise or discontinue if the actual issuer model fails.

**Pilot KPIs (proposed):** issue completion rate; review cost/time per listing; independent verifier usage; owner/agent renewals; correctly rejected modified terms; false-positive/inconclusive rates; revocation freshness; privacy incidents; HomeLedger evidence provenance and user comprehension. **Do not fabricate a prevented-scam count or financial return.** Section 08 will define impact measurement design.

## 7.11 Commercial and value multiplication fit — without over-selling

The main strategic case is **a repeatable verification capability tied to SDP's customer journey**, not speculative advertising revenue. Commercial potential depends on a viable operating model and outside adoption:

- **Potential direct value to SDP:** ongoing owner/resident engagement after handover; a differentiating digital trust service; possible support for future community experience. These are proposed benefits, not measured effects.
- **Potential B2B revenue:** optional paid portfolio administration for approved property managers/agencies; later verifier API licensing for consenting partners. These are **unvalidated price/product hypotheses**; costs of authority review, support, privacy and liability must be included.
- **HomeLedger opportunity:** optional premium owner/provider record organisation, subject to record rights and verified usefulness. No mandatory tenant subscription for basic public checks.
- **Advertising/referrals:** secondary and strictly segregated from verification; no paid green badge, no personal-chat/sensitive-data targeting by default, no confusing service referral as SDP endorsement.
- **Replication:** Once a high-assurance issuer model is operational, credentials could use a common schema across consenting properties/townships. Transferability requires training, partner agreements and jurisdiction-specific governance; cloning the software alone does not create trust.

**Commercial outcome:** clearly aligned with SDP's broad digital transformation/value-creation orientation, but **revenue feasibility remains conditional** until Section 09 tests unit economics, buyer, pricing, number of issuances and costs. [S3][S5]

## 7.12 Feasibility gates and red flags for the judges

**Can we build the hackathon demonstration without SDP's APIs? — Yes.** Use fictional properties and a labelled simulated issuer to show actual cryptographic signing and verification, revocation, limited public projection, TermsGuard extraction/deterministic comparison, and a small permissioned HomeLedger. This proves the **software mechanism**, not legal-owner verification or actual township effectiveness.

**Can the prototype be presented as an official SDP App function? — No.** Screens can illustrate a clearly labelled **proposed UI placement**; no official badge, trademark, domain or approval without permission.

**Can SDP verify current legal letting authority merely from purchasers/members? — Not proven.** The existing app's purchaser/member relationship does not necessarily update after resale or establish mandate details. Independent current checking remains the largest **production feasibility gate**.

**Can we automatically expose defect records as a home history? — No.** Not without per-record rights, provenance review, redaction, legal purpose and appropriate consent/disclosure.

**Can we claim cross-platform protection eliminates risk? — No.** Valid credentials can be copied into fraudulent advertisements; phishing domains and unverified payees remain. Verifier UX must compare actual bound terms and warn about anything unverified.

**Can we monetise by selling verification status? — No.** A paid favourable verdict undermines safety. Paid professional administration or infrastructure must not influence record authenticity or current status.

## 7.13 Traceability to previously approved sections

- **Section 01:** Retains SafeListing as **SDP App extension** and the three connected pillars; StopLoss997 stays future-only.
- **Section 02:** Targets independently checking a specific listing and tenant financial-risk context; does not project SDP-specific rental-fraud prevalence or prevented losses.
- **Section 03:** Accepts PropertyGuru, SPEEDHOME and property passports as prior art; differentiation remains **proposed cross-platform owner-authorisation + AI claim comparison + bounded property evidence**, not a proven first-in-market invention.
- **Section 04:** Covers applicant, issuer, lessor, agent, prospective guest tenant and HomeLedger contributor. Pre-tenancy no-login tenant verifier remains mandatory (AC-07).
- **Section 05:** Preserves trusted JWS signatures, current online status, deterministic comparison, exact claims binding, minimal tenant-facing data and access-control boundaries (AC-01 to AC-12).
- **Section 06:** Preserves current letting-authority review, no-self-approval, key compromise response, privacy separation, tenant screenshot minimisation, evidence grants and `unverified` payment semantics (ST-01 to ST-18).

### Traceability / acceptance additions for Section 07

| ID | Strategic / integration acceptance gate | Proposed check |
| --- | --- | --- |
| INT-01 | New feature does not duplicate current tenant invitations | Show separate **prospective tenant** guest journey before tenancy |
| INT-02 | App account ≠ current letting authority | Applicant with SDP-like account but pending attestation **cannot issue** |
| INT-03 | Honest no-integration scope | Product and pitch label official capabilities separately from demo/mock services |
| INT-04 | Independent public verifier | Guest can check from distinct browser without official app login |
| INT-05 | Data controls before SDP record use | Defect/e-document placeholders stay private unless explicit grants and review |
| INT-06 | Authentic issuer and support responsibility | Owner of authority reviews, signing, domain and disputes explicitly designated before live pilot |
| INT-07 | Monetisation cannot change status | Subscriber and non-subscriber verifiers see identical signed status; no paid approvals |
| INT-08 | Safe future scale | Expansion blocked without issuer revalidation, trust registry, privacy approval and measured operating cost |

**Result:** The feature is **strategically well aligned** with SDP's verified digital platform direction, but **current-owner authority and data-sharing governance are launch blockers, not minor TODOs**.

## 7.14 Short, pitch-ready positioning

> **SafeListing proposes a new trust layer around the existing SDP App property relationship: owners or authorised lessors apply for a verified right to issue specific rental permissions, tenants independently check those permissions before paying or joining the app, AI identifies conflicting advertisement terms, and HomeLedger Lite reveals only selected sourced property facts. This directly supports the PEOPLE safety/digital-living challenge and SDP's stated ambition for a more unified digital customer journey. The hackathon demonstration uses a simulated issuer and synthetic property data; production integration requires SDP approval and a credible process to establish current letting authority.**

## 7.15 Independent validation and editorial audit

| Audit question | Verdict | Basis / boundary |
| --- | --- | --- |
| Current SDP app capabilities factually described | **PASS** | Checked SDP official App and detailed FAQ [S1][S2]; does not claim unsupported listing/registry tools |
| Explicit SDP strategic tie | **PASS** | IAR 2025 digital transformation objectives and 2026 unified-app priority [S3]; hackathon PEOPLE challenge [S4] |
| Distinct pre-tenancy use case despite existing Plus tenant role | **PASS** | Proposed guest verifier is before tenant invitation; direct published role distinction [S2] |
| Current legal letting-authority source established | **OPEN / HARD DEPENDENCY** | No land/mandate source, eligible issuer or partnership verified; rollout gated |
| HomeLedger legal access to SDP defect/e-documents | **OPEN / HARD DEPENDENCY** | Only selective future use is proposed; no live ingestion or implied sharing rights |
| API, staff, financial or branding commitments from SDP | **NOT CLAIMED** | No verified approval, business case or SLA; prototype clearly separate |
| Innovation/impact/commercial outcomes demonstrated | **NOT YET** | Section 03 differentiates hypothesis; impact is addressed in Section 08 and commercial economics in Section 09 |
| Internal consistency with Sections 01–06 | **PASS** | No change to three pillars, public verifier, authenticity rules, anti-phishing/payee warnings or demo scope |

**Final verdict:** **PASS as a well-supported SDP Strategic Fit document and proposed integration plan. CONDITIONAL for actual deployment and commercial viability.** The main blocker is **whether a trusted party can validate and continually maintain current property-specific letting authority**. No official SDP implementation claim should appear in the deck or video.

## Primary sources / source notes

[S1] Sime Darby Property, *Sime Darby Property App* (official app landing page). Lists owner-linked property dashboard, e-documents, progress, vacant possession, defect reports and household management.  
https://www.simedarbyproperty.com/app/

[S2] Sime Darby Property, *SDP App Frequently Asked Questions* (official). Documents PRIME Dashboard, property switching, **Plus tenant invitations with limited access**, key-handover and defect submission workflows, and General Enquiry. Important: some specific features have eligibility conditions; do not infer universal availability.  
https://www.simedarbyproperty.com/app/faq.html

[S3] Sime Darby Property, *Integrated Annual Report 2025* (Strategic Review — Our Strategy: Digital Transformation, around p.144). Describes stronger enterprise AI and data governance, improved customer digital touchpoints, SDP App achievements, and the **2026 objective to position SDP App as a unified digital platform**.  
https://www.simedarbyproperty.com/sites/default/files/2026-04/SDP%20Integrated%20Annual%20Report%20Website.pdf

[S4] Sime Darby Property, *University Hackathon 2026 — Township of Tomorrow* (official). PEOPLE themes, evaluation weights, mechanism/enabler framework and potential township piloting.  
https://simedarbyproperty.com/universityhackathon/

[S5] Sime Darby Property, *Integrated Annual Report 2025* (value-creating business model / material matters). Describes corporate priorities of broadening income streams, developing capabilities and digital transformation, and the material social issue of community experience and the governance topic of data privacy/cybersecurity.  
https://www.simedarbyproperty.com/sites/default/files/2026-04/SDP%20IAR2025%20Mobile.pdf

### Documents to revisit before actual deployment

- Sections 04–06 signed-credential and data-protection model in the existing SafeListing checkpoint. An eventual issuer agreement, local lawyer/property professional, SDP representative and public-trust design review must validate this proposal before any real personal data or real-world authorisations.
- Current SDK/API availability, property-transfer status synchronisation, audit/retention limits and data-owner rights are **not** established by public source materials.

---

**Next:** Section 08 — Impact & Sustainability (proposed metrics, counterfactual measurement, limits) and Section 09 — Commercial Model, Value Multiplication & Unit Economics. After both, make **Checkpoint 03** containing full Sections 07–09 and a consolidated cumulative master Sections 01–09.

---

# 08. Impact & Sustainability

**Project:** SafeListing — AI-Powered Rental Trust & Property Passport  
**Competition:** Sime Darby Property University Hackathon 2026 | PEOPLE: Safety & Security (primary), Digital Living (secondary)  
**Prepared:** 21 October 2026  
**Status:** **Impact logic and measurement design: PASS, conditional on future real-world validation.** No claims of measured crime reduction, adoption, environmental savings or SDP performance.  
**Continuity:** Builds on approved Sections 01–07. ListingAuth + TermsGuard + HomeLedger Lite remain the three pillars; StopLoss997 stays on the later roadmap.

## 8.1 Executive finding and judging alignment

The official hackathon allocates **25% to Impact & Sustainability Value**, defined in terms of potential measurable benefit to residents, communities and the environment. This is a concept-and-measurement assessment, **not** evidence that the intervention has already achieved those outcomes. [I1]

**Primary value proposition (social):** Help prospective renters make safer and better-informed housing decisions **before** transferring deposits, sharing sensitive personal details or relying on unauthenticated advertisements. SafeListing may reduce *specific opportunities for deception* where (a) an authorised credential exists, (b) a renter uses the genuine verifier in time, and (c) the relevant risky claim is within the credential's scope.

**Secondary value proposition (housing transparency):** HomeLedger Lite may allow a renter to evaluate a small set of accurately sourced property facts, such as a documented repair or equipment warranty, rather than relying entirely on an advertiser's unsupported description. It **does not certify whole-property condition**, establish absence of defects or guarantee habitability.

**Sustainability proposition:** Social sustainability is the principal claim (financial wellbeing, informed access to housing, accountability and long-term trust). Any environmental contribution from preserving maintenance and repair information is a **testable secondary hypothesis**, not an established carbon, waste or resource saving.

**Judging posture:** Make the claim narrow enough to be credibly measured. Do **not** promise that SafeListing will eliminate rental fraud or cite a future fraud-prevention percentage without a controlled study.

## 8.2 Verified baseline evidence — and what it does *not* prove

### 8.2.1 Malaysian rental fraud is a documented problem

A 12 January 2026 *The Star* report quoted Bukit Aman's Commercial Crime Investigation Department director: **184 rental-fraud cases in 2023, 307 in 2024 and 922 in 2025**, with losses of approximately **RM2.5 million in 2025**. The article describes fake homeowner/agent identities, unusually cheap offers, messaging-app communication, requests for advance deposits and avoided physical viewings. [I2]

This supports the **importance of the problem**, not the share of cases that SafeListing could prevent. These are police-reported statistics relayed by a journalist, not a measured causal baseline for the product.

A **different** PDRM-hosted press summary reported **24 property-agent-related scam cases** and **RM5.1 million in losses in 2025**. These categories may have different definitions or overlap; **never add the 24 to 922, add the losses, or treat one as an interchangeable proxy**. See Section 02. [I3]

### 8.2.2 Renting is relevant to a substantial resident population

DOSM's **Basic Amenities Survey 2024** reported that **19.7% of households of Malaysian citizens lived in rented living quarters**, including **23.1% in urban areas**. These are occupancy percentages, **not the annual number of new rental deals**, and cannot be multiplied by a scam rate to estimate preventable losses or SDP's addressable market. [I4]

### 8.2.3 The cross-platform attack is plausible, not yet proven frequent in SDP developments

The US Federal Trade Commission's rental-scam guidance documents copying legitimate listings and changing contact details; its 2025 analysis also records renters encountering fraudulent ads on external platforms and scams involving upfront payment and personal-information demands. These are **international mechanism analogues**, not evidence of Malaysian or SDP-specific frequency. [I5][I6]

### 8.2.4 What has not been established

- The number of rental listings, tenants, scam incidents or payments within SDP developments.
- The percentage of relevant property owners whose **current letting authority** can be verified through a lawful, scalable issuer process.
- The number of active scam attempts blocked by credentials, or how many cases contain alterations the credential actually covers.
- Willingness of renters to check the authentic verification site **before** deposits; willingness of owners/agents to issue credentials.
- Causal impact of HomeLedger on housing decisions, repair behaviour or environmental outcomes.

These gaps determine the pilot research plan. They must not be filled with speculative impact numbers.

## 8.3 Explicit theory of change

| Stage | Proposed mechanism | Evidence we could collect | Limit / failure mode |
| --- | --- | --- | --- |
| **1. Legitimate authority becomes checkable** | Qualified issuer checks current letting mandate; ListingAuth binds a unit, approved representative and specified listing terms to a live signed record | Authority-review outcomes, issued credentials, challenge tests of denied applicants | If issuer accepts false proof or stale authority, signatures only preserve a false claim |
| **2. Prospects can verify independently** | Free, account-free verifier on an authentic trusted domain shows current, precise status and scoped claims | Verification completion and timing; tests of domain identification and comprehension | People may trust copied badges or phishing sites; absence of a credential alone does not prove fraud |
| **3. Misrepresentation becomes more detectable** | TermsGuard extracts a forwarded ad/message and deterministic comparison highlights contradictory and unverified terms | Labelled adversarial test set; confusion matrix; user interpretation tests | Screenshots/OCR can fail; valid credentials may be reused in unrelated scam conversations |
| **4. Relevant property information is clearer** | HomeLedger Lite displays permitted, evidence-labelled repair/maintenance facts and prominently notes incompleteness | Provenance-accuracy tests; disclosure controls; comprehension and decision usefulness | Selective records can be misleading; provider documents may not establish current condition |
| **5. Behaviour may change** | More renters check authenticity and unresolved payment instructions before committing; owners/agents maintain credentials | Observed pre-payment verification, behaviour in controlled simulations, renewal rates | Uptake may be too low, or 'verified' status may create false reassurance |
| **6. Long-term impact (hypothesis)** | Lower avoidable exposure to specific fraud patterns; better-informed home choices; potentially more durable maintenance records | Longitudinal independent assessment only if ethically, legally and operationally feasible | Causal reductions in real monetary loss are hard to identify and must not be presumed |

**Critical conditional chain:** trustworthy issuer + current credential + legitimate verification domain + timely tenant use + covered claim + comprehensible result. Breaking any link reduces or reverses impact. **A valid credential does not confirm any unbound bank account or guarantee a transaction is safe.**

## 8.4 Primary resident-impact outcomes

### Outcome A: More reliable recognition of unauthorised or modified listings

**Problem:** an identity badge or attractive advert may be mistaken for proof of property-specific permission. ListingAuth changes the question from 'does this agent look legitimate?' to 'has a qualified issuer recorded a current permission for this unit, representative and specific claims?'

**Outcome to test:** tenants correctly distinguish an active matched credential from an expired, revoked, tampered, superseded, unmatched or authority-pending record. A known-unverified record must never be shown as authorised.

**Important fairness boundary:** a listing with **no credential** is **not automatically fraudulent**. It may be outside the pilot, owner-unwilling, newly listed or pending verification. The UI must label it *not verified by SafeListing*, without a criminal accusation.

### Outcome B: Earlier recognition of changed rental or payment claims

**Problem:** an authorised price or contact channel can differ from later social messages. TermsGuard can identify a mismatch **only for facts explicitly bound in the issuer record**.

**Outcome to test:** renter notices changed price, representative, contact or booking terms; identifies bank details as **unverified** when they were not covered; selects further independent checks rather than proceeding solely because a listing has a green badge.

A mismatch is a reason to clarify or pause, **not definitive proof of fraud**. A message that contains unsupported but non-contradictory information must remain *unverified*, not automatically 'suspicious' or 'safe'.

### Outcome C: More informed evaluation of a property's documented history

HomeLedger Lite could offer limited evidence about the property linked to the exact advertised unit: for example, a dated contractor record, an owner-declared improvement and a category for which no record is available.

**Outcome to test:** prospects can correctly differentiate source-backed, owner-reported and unavailable facts; understand record dates and exceptions; make fewer unsupported assumptions about missing defects.

**Risks to control:** omission bias, old records, disputed repair status, previous residents' privacy and pressure on less-resourced owners to disclose records they do not possess. **Do not rate homes with an invented property-health score.**

### Outcome D: Better protection for different digital-confidence groups

A public verifier without account creation and a clear three-way vocabulary may reduce friction for renters who do not use the SDP App. The product should support accessible text, high-contrast status indicators, keyboard navigation and locally appropriate language; do not rely on colour alone. These are **design commitments for testing**, not proven inclusion outcomes.

**Failure mode:** complicated credential terms, QR-only verification or marketing implying that 'no badge' means 'scam' could exclude or unfairly label legitimate non-participants. Provide manual reference entry and clear 'outside programme' explanations.

## 8.5 Community and SDP impact: avoid confusing output with outcome

| Impact layer | Possible contribution | Evidence required before stronger claim |
| --- | --- | --- |
| **Individual renter** | Better ability to verify before sharing data or paying | Observed decisions; comprehension, correct recognition and error rates |
| **Property owner/agent** | Verifiable record of exactly what they authorised, when and for whom | Measured issuance effort, renewals, correction/revocation success |
| **Community** | More consistent rental-trust practice where enough people participate | Pilot penetration by listings and tenant checks; evidence of positive behaviour changes |
| **SDP customer experience** | Extends digital services from purchase/defects to pre-tenancy trust | SDP-approved pilot data, satisfaction/reach changes, support burdens and genuine operational costs |
| **Partner ecosystem** | A reproducible trust protocol for permitted property portfolios | Qualified issuer capacity, signed partners, interoperability tests, cost per verification |

**Output:** number of issued credentials.  
**Outcome:** renters correctly identify and act on material risks.  
**Impact:** demonstrable reduction in harm relative to what would otherwise have happened.  

Do not cite issuance volume or API traffic as 'scams prevented'. Do not infer that improved user-reported confidence means improved objective safety; false confidence is a potential negative impact.

## 8.6 Measurable KPI framework — definitions and denominators

Metrics below are **proposed for a future test**; no values have been achieved. Event tracking must use minimised, consent-appropriate, de-identified/aggregated information under the security/privacy rules in Section 06.

| ID | Measure and numerator / denominator | Desired direction | Why it matters |
| --- | --- | --- | --- |
| **IMP-01** | **Correct risk recognition rate:** test participants correctly classify the scenario / participants given that scenario | Higher versus control | Human-facing security outcome, not merely model score |
| **IMP-02** | **False reassurance rate:** participants incorrectly consider a **revoked, mismatched, tampered or status-unavailable** record presently authorised / participants tested on those cases | Lower; avoid any critical test failures | The key safety hazard is believing risk is resolved |
| **IMP-03** | **Verified-before-payment decision rate:** participants explicitly check trusted status and covered payment terms **before** selecting a simulated pay/deposit action / participants exposed to the decision | Higher versus control | Measures timely behaviour; no real payments |
| **IMP-04** | **Median verification time:** elapsed time from opening authentic verifier to correct understanding of result, among completed timed tasks | Shorter, without harming accuracy | Usability/adoption barrier |
| **IMP-05** | **Authentic-domain recognition rate:** correctly navigate/select authentic verification destination / participants exposed to legitimate and phishing-link alternatives | Higher | Counteracts copied credential/QR attacks |
| **IMP-06** | **Credential integrity and status correctness:** correctly rejected tampered, expired, revoked, superseded and invalid-signed records / generated negative-condition test cases | All critical cases should reject in test suite | Deterministic mechanism reliability |
| **IMP-07** | **TermsGuard field accuracy:** correctly extracted and normalised specified terms / labelled field instances; stratify by language, screenshot quality and field type | Higher; avoid false matches | AI can create errors even with a genuine signed record |
| **IMP-08** | **TermsGuard classification matrix:** counts/precision/recall for `matches`, `contradicts`, `not specified/uncertain` against human-labelled ground truth | Reveal error trade-offs, especially false 'matches' | Don't conceal unverified claims as matches |
| **IMP-09** | **Authority approval error rate:** controlled ineligible applicants wrongly given issuer rights / seeded ineligible cases | No critical seeded false approvals | Signature validity depends on issuer governance |
| **IMP-10** | **Issuance uptake:** eligible, contacted owners who complete authorised issuance / all eligible, contacted owners offered participation | Higher, track refusals | Cold-start barrier; avoid denominator cherry-picking |
| **IMP-11** | **Listing coverage:** participating eligible rental listings with *current* credentials / all eligible rental listings in defined pilot scope | Higher, with validity caveats | Programme relevance; not citywide adoption |
| **IMP-12** | **Revocation propagation:** time from accepted revoke to all checked public results showing revoked (report maximum and outages) | Fast and testable | Stale validity is a real-world risk |
| **IMP-13** | **HomeLedger provenance comprehension:** correctly identify claim source/limits / tested displayed facts or user questions | Higher versus no labels | Evidence transparency, without alleging defect completeness |
| **IMP-14** | **HomeLedger privacy enforcement:** unauthorised record/document accesses denied / seeded unauthorised attempts | 100% in test suite | Prevent harmful personal-data exposure |
| **IMP-15** | **Adverse-event and correction rate:** incidents of mislabelling, alleged false assurance, privacy leakage, contested records and successful corrections / appropriate exposed population or records | Lower; scrutinise severity separately | Measure harm introduced, not just claimed benefits |
| **IMP-16** | **Accessibility equity:** outcome and completion gaps across consenting user groups, language/device/digital-confidence cohorts | Narrower gaps without lowering safety | Inclusion must be demonstrated, not asserted |

**Optional proxy KPI:** percentage of tenants who can repeat which facts *were not checked* after verification. This guards against false generalisation of a limited credential into a general safety guarantee.

### 8.6.1 Safety and pilot gates (targets, not results)

For a student prototype and later supervised pilot, propose the following **acceptance targets**, with sample size and applicability reported:

- **Critical technical tests:** 100% of seeded tampered, revoked, expired, superseded, wrong-unit/agent and status-unavailable cases must *not* display a currently authorised/matched result. A 100% pass on finite tests **does not establish zero production risk**.
- **Access controls:** 100% of seeded unauthorised HomeLedger document requests must be rejected; test both direct API and UI routes.
- **User comprehension:** propose **at least 80%** of consenting usability-test participants correctly understand the distinction between a verified listing authorisation and an unverified payee or property condition, with **no critical false-assurance pattern**. The 80% is a **team-proposed gate, not an official SDP requirement or observed baseline**; revise it after early testing.
- **Usability:** propose a **median under 60 seconds** for a common reference-entry verification task once users know the legitimate domain, with comprehension measured alongside speed. This is a **design target, not an achieved finding**.
- **Deployment blocker:** **zero real issuances** without an approved, lawful current-letting-authority review and named accountable operator. Synthetic issuer data may support demo only.

If critical safety or privacy failures occur, do not proceed to wider distribution based on attractive usability or apparent conversion numbers.

## 8.7 Credible evaluation design: from demo to township pilot

### Stage 0 — Student hackathon demonstration (synthetic data only)

Use at least: (a) authorised matched advert; (b) forged/modified rent; (c) wrong contact and unsupported payee; (d) copied credential placed on a misleading message; (e) expired, revoked and status-service unavailable records; (f) HomeLedger source types and blocked private attachment. The signed credential and revocation engine can work for real **over fictional data**; the issuer's legal authority is explicitly simulated.

**Output:** functional correctness results, threat-case coverage, extraction/confusion matrix on labelled synthetic examples, and a task walkthrough. **Not output:** a percentage of actual scams prevented.

### Stage 1 — Controlled prospective-tenant comprehension test

Recruit consented adults with varied rental and digital experience (small convenience sample is acceptable for discovery but **not representative**). Randomly assign or counterbalance tasks where feasible:

- **Comparator condition:** standard listing screenshot, conventional agent-verification guidance and existing due-diligence instructions.
- **Intervention condition:** same realistic scenario plus the authentic SafeListing verifier and TermsGuard.
- **Questions and observed behaviour:** which details are verified? Which are unknown? Would participant select simulated payment/continuation? Can they identify a fake verification link? What happens if no credential exists?
- **Primary outcome:** change in *correct behaviour and comprehension* relative to comparator, rather than subjective confidence alone.

Predefine the scenarios and scoring before testing. Counterbalance case order and matched difficulty; use separate training examples to prevent memorisation. Do not expose test participants to actual fraud, real transfers, real passports or sensitive screenshots. Record both false positives and false negatives. If the sample is small, publish raw counts and confidence limitations rather than sweeping population-level claims.

### Stage 2 — Consent-based owner and agent feasibility study

Ask volunteer owners/legally empowered lessors and agents to attempt a **simulated** approval/issuance workflow. Observe which evidence they can lawfully supply, completion time, confusing steps, need for help, concern about exposure, willingness to renew and false authority-claim attempts in seeded simulations.

A different, qualified reviewer should assess proposed current-authority evidence and conflicts; system operators should not accept self-approved claims. This stage must not present historic SDP account linkage as current ownership proof.

### Stage 3 — Limited SDP/issuer-authorised township pilot (only after permission)

Start with one suitable participating SDP development **only if** SDP, lawful issuer/partner and required privacy/controller agreements authorise the pilot. Collect actual review effort and cost, live verifier completion (in safe aggregated form), status and incident logs, owner renewals, and prospective renter feedback. Establish incident/appeal paths before enabling externally relied-upon credentials. Seek an evaluation design that compares to an ethically appropriate baseline; do not intentionally expose residents to fraud.

Assess potential harm from false reassurance or contested records as an explicit outcome. Strong usability without secure issuer authority **must trigger a stop or redesign**, not launch.

## 8.8 Why 'fraud prevented' must not be invented

A normal rental-fraud report cannot tell us whether a victim would have encountered SafeListing, checked it, recognised the trusted domain, had an issuer-backed record covering the misleading detail, or changed payment behaviour.

**Invalid arithmetic to avoid:** `2025 rental fraud losses × assumed percentage prevented = impact` or `rented households × assumed victim rate × average case loss`, because neither coverage nor causality is established. The 922 police cases are not a defined SDP pilot denominator, and the DOSM renting figure measures occupancy, not rental deals.

**If an exploratory financial model is shown at all**, label it explicitly as an *illustrative scenario*, not a forecast, and expose every assumption:

`Potential exposure reduction = eligible rental interactions × credential coverage × authentic-verifier usage × relevant fraud exposure rate × conditional effectiveness × loss exposure per affected interaction`

Each multiplier must have a clear definition, source, time frame, uncertainty range and independence/overlap caveat; actual prevented losses require a more rigorous longitudinal comparison. Section 09 will separately evaluate **business costs and revenue**, not confuse commercial return with resident harm prevention.

## 8.9 Sustainability in three dimensions

### Social sustainability — primary, credible goal

- Improve ability of renters (including first-time renters) to challenge undocumented authority and altered terms.
- Promote informed consent in housing decisions by clearly separating verified, contradicted and unavailable facts.
- Reduce reliance on persuasive advertisements and platform-specific branding alone; keep the core verification free and guest-accessible.
- Support accountability with credential history, revocation and narrowly scoped, lawful correction routes.

**Caveat:** meaningful impact requires both supply-side issuance and tenant-side understanding; false reassurance could create net harm.

### Economic sustainability — potential, not measured

- A reusable credential service may create efficiencies for consenting owners/agents and a longer digital property relationship for SDP.
- The trust workflow may reduce some time spent on conflicting advertisements or manual clarification, but could **increase** verification overhead and appeals.
- The programme requires a sustainable issuer-financing model; free tenant checking is not zero-cost to operate. See Section 09 for payer, authority-review expense, support, security/hosting and liability assumptions.

**Caveat:** do not promise savings, increased rent, avoided complaints or positive unit economics before comparing all costs.

### Environmental sustainability — exploratory only

- HomeLedger Lite could preserve selectively shared warranty, servicing and repair provenance; in theory this might enable timely maintenance or less redundant replacement.
- This is **not** an environmental-impact finding. A historic invoice is not evidence of a repair's lifetime, avoidance of a new product or a carbon benefit.
- Measure any later repair/replacement behaviour and account for induced data storage, AI inference, document-processing and verification workloads before making net environmental claims.

**Decision:** The deck should lead with **social impact and transparency**, give environmental benefit a restrained optional mention, and avoid unsupported tonnes-of-CO₂ or waste-saved claims.

## 8.10 Risks, inequity and negative externalities

| Risk | Possible negative impact | Mitigation and impact test |
| --- | --- | --- |
| False current-owner approval | Signed credential creates misleading legitimacy | Independent authority validation, revalidation, reviewer appeals; test seeded wrong-owner cases |
| Phishing / copied QR | Users follow a counterfeit check and misread fraud as approved | Official trusted-domain guidance, independent reference entry, anti-phishing tests |
| False 'safe to pay' interpretation | Renter transfers money to an unrelated account | No safe-payment verdict; identify unverified payees; measure comprehension and simulated actions |
| No credential = falsely labelled scam | Disadvantages legitimate non-participating owners | Show neutral *not verified by programme* state; compare user decisions by coverage status |
| Poor accessibility / digital skills | More vulnerable renters fail to benefit | Guest access, readable language, manual ID entry, WCAG-oriented tests and translation review |
| Tenant screenshot leakage | Financial/contact/personal information unintentionally stored or sent to AI provider | Opt-in, redaction, minimisation, processor controls and short retention; privacy test cases |
| HomeLedger selection bias | Omitting records falsely signals sound condition | Prominent selected-records/incomplete-history disclaimer; source/granularity labels |
| Historic repair misrepresented | Occupant assumes old repair implies present condition | Dated fact, provenance, validation level and unknown-condition notice |
| Authority disputes / outdated resale | Former owner continues issuing | Expiry, ownership-change triggers, suspend/revoke, contest channels, accountable review |
| Commercial influence on safety | Paid agency or advertiser appears more trustworthy | Strictly segregate payment from trust verdict, including in ranking and referrals |
| Extra operating footprint | Data and AI overhead could outweigh speculative environment savings | Monitor processing/storage costs and any later attributable repair behaviour |

**Harm-minimisation priority:** Critical false assurance, privacy breach and wrongful authority issuance override adoption, business growth and completion-time gains.

## 8.11 SDP-specific scaling and sustainability gates

Expansion from one test development to multiple SDP townships is not just software replication. Each new rollout needs:

1. **Issuer applicability:** a legally credible process to validate rights for current owners, co-owners, corporations, resales and delegated agents in the supported jurisdiction.
2. **Local participation:** enough eligible lessors and ads to make verification useful; neutral handling of non-participants.
3. **Resident comprehension:** test different languages, devices and accessibility needs; measure true comprehension rather than clicks.
4. **Operational capacity:** maintain real-time status, revocation, owner disputes, key security, incident response and permitted HomeLedger disclosures.
5. **Economic coverage:** fund review/appeal/support/infrastructure without charging renters to discover whether a credential is valid or selling favourable verification labels.
6. **Privacy governance:** distinguish public credential facts from sensitive ownership evidence, private HomeLedger attachments and TermsGuard uploads.
7. **Stop/scale rule:** do not scale until critical authority/status/privacy cases pass, any material user-harm patterns have mitigations, and owner/tenant participation supports a credible value case.

Scalability is therefore a **potential multi-township impact multiplier**, not evidence that all SDP communities can be enrolled immediately.

## 8.12 Suggested competition slide narrative

**Problem:** Police reported **922 Malaysian rental-fraud cases in 2025** (reported by *The Star* quoting Bukit Aman). Prospects encounter advertisements and messaging claims they cannot always independently authenticate. [I2]

**Mechanism:** SafeListing lets a properly validated lessor issue a **specific, current, revocable rental permission**; prospective tenants check it independently, AI highlights contradictions against authorised terms, and HomeLedger Lite labels selected property evidence.

**Impact ambition:** earlier detection of unauthorised or modified claims, better informed rental decisions, and ongoing provenance for useful repair information. We will measure **correct risk recognition, false reassurance, checks before simulated deposit decisions, issuer coverage, update/revocation reliability and HomeLedger comprehension**.

**Evidence honesty:** Existing police and housing data establish the need; they do **not** prove SafeListing's effectiveness or SDP-specific savings. The competition prototype validates technical and behavioural mechanisms using fictional data; a real pilot needs a qualified issuer and SDP approval.

**Pitch guardrail:** Do not call SafeListing 'scam-proof', a 'property condition guarantee', a replacement for LPPEH checks/viewings, or an environmental-saving technology without measured outcomes.

## 8.13 Traceability to earlier documentation and new checks

| Cross-reference | Impact requirement |
| --- | --- |
| **Section 01** | Impact concerns precise rental-authorisation and selected housing transparency, not broad safety guarantees; StopLoss997 deferred |
| **Section 02** | Use PDRM/The Star and DOSM figures with correct definitions and no fabricated preventable-loss denominator |
| **Section 03** | Prior art acknowledged; impact is tied to integrated cross-platform workflow, not novelty claims about crypto/AI/property passports |
| **Section 04 AC-01–AC-12** | Human impact measures rely on actual credential correctness, right status, tenant comprehension and source labels |
| **Section 05** | Signed data + online status checking; AI extraction separate from deterministic rules; no confidence-based authentication |
| **Section 06** | Authority and privacy are safety gates; consent and redaction for AI inputs, restricted HomeLedger access, no payment reassurance |
| **Section 07 INT-01–INT-08** | Impact case depends on pre-tenancy independent checking, SDP permission, limited public projections and viable operator ownership |
| **Section 09 (next)** | Keep cost-benefit/revenue models separate from social impact; model issuer review, onboarding and support costs explicitly |

**Section 08 additional impact acceptance tests (proposed):**

- **IV-01:** All presentation impact statistics cite dated sources, preserve category/denominator and are not combined incorrectly.
- **IV-02:** No real-world fraud reduction, avoided RM loss, HomeLedger environmental gain or SDP uptake is described as achieved.
- **IV-03:** In controlled cases, revoked or mismatched credentials never trigger a user-facing whole-transaction safety guarantee.
- **IV-04:** `matches / contradicts / not specified` results remain separately assessable; unknown payment recipient remains unverified.
- **IV-05:** User comparison study measures objective comprehension and simulated decisions, not just subjective confidence.
- **IV-06:** Impact KPI definitions specify denominator, test population and limitations; report negative/adverse outcomes too.
- **IV-07:** HomeLedger has evidence provenance, selection bias disclosure, and no implied complete defect history.
- **IV-08:** Environmental benefits labelled hypothesis without measured carbon/repair impact.
- **IV-09:** Before a township pilot, issuer authority, SDP permission, privacy governance and respondent safety have explicit stop gates.
- **IV-10:** Commercial advertising or subscription status cannot influence validity or tenant safety labels.

## 8.14 Independent validation and editorial audit

| Audit item | Verdict | What was checked |
| --- | --- | --- |
| Official Impact & Sustainability weighting | **PASS** | Official hackathon website lists 25% and measurable resident/community/environment benefits [I1] |
| Rental scam baseline accurately described | **PASS** | The Star quoting Bukit Aman CCID director: 922 cases and ~RM2.5m losses for 2025 [I2] |
| Rental-stat category integrity | **PASS** | Different PDRM property-agent summary explicitly separated [I3]; consistent with Section 02 |
| Renting-denominator integrity | **PASS** | DOSM rental occupation is citizen-household tenure share, not annual deal count [I4] |
| Fraud mechanics independent grounding | **PASS** | FTC published stolen-listing/contact substitution mechanism [I5][I6]; US evidence not extrapolated to Malaysia |
| Real effect demonstrated | **OPEN / NOT CLAIMED** | No verified prevention, adoption, willingness-to-pay or causal pilot findings exist |
| Measurement validity | **PASS AS STUDY DESIGN** | KPIs have explicit definitions and comparison/negative impact gates; study and targets not executed |
| Environmental impact demonstrated | **OPEN / NOT CLAIMED** | Record continuity could assist repair, but no verified avoided material/waste/emissions |
| Compatibility with Sections 01–07 | **PASS** | Maintains 3 pillars, no SDP API/registry fiction, issuer review gate, no guarantee or unverified-payment green tick |

**Final editorial verdict:** **PASS for the Section 08 impact framework, theory of change and measurement plan.** Evidence confirms the problem and supported design objectives, **not actual impact**. Competing claims about specific preventable fraud shares, ROI or environmental savings remain **unproven and prohibited** until measured. Do not treat the study design as a substitute for pilot results.

## Sources and evidence notes

[I1] Sime Darby Property — *University Hackathon 2026: Township of Tomorrow* (official competition site). Impact & Sustainability Value 25%, definition and PEOPLE themes.  
https://simedarbyproperty.com/universityhackathon/

[I2] *The Star*, 12 January 2026 — “Rental fraud spikes 400% amid rise in identity theft.” Quotes Bukit Aman CCID director on 184, 307 and 922 cases in 2023–2025, and approximately RM2.5m losses in 2025; described fraud methods. **Police-provided statistics relayed by news outlet.**  
https://www.thestar.com.my/news/nation/2026/01/12/rental-fraud-spikes-400-amid-rise-in-identity-theft

[I3] Royal Malaysia Police — press summary, 19 January 2026, on property-agent-related scams (24 cases and RM5.1m losses in 2025). **Separate category; not additive to the broader rental-fraud report.**  
https://www.rmp.gov.my/news-detail/2026/01/19/besmartstayalert-letsfightscammertogether-keratan-akhbar-pilihan-scam-alert-a-market-for-property-scams

[I4] DOSM, *Basic Amenities Survey Report, Malaysia 2024* (released 24 December 2025). Infographic notes that 19.7% Malaysia and 23.1% urban rental-tenure shares refer to households of Malaysian citizens.  
https://www.dosm.gov.my/portal-main/release-content/basic-amenities-survey-report-malaysia-2024  
Official infographic: https://v2.dosm.gov.my/uploads/release-content/file_20251223225236.pdf

[I5] US Federal Trade Commission — “Rental Listing Scams,” consumer advice; documents copied ads with swapped contact details and upfront-deposit mechanisms. **International mechanism illustration, not Malaysian incidence estimate.**  
https://consumer.ftc.gov/articles/rental-listing-scams

[I6] US Federal Trade Commission — “Rental scams hit home with $65 million in reported losses,” December 2025; documents Facebook and cross-platform hijacked-ad patterns in US report data. **Not used for Malaysia prevalence extrapolation.**  
https://www.ftc.gov/news-events/data-visualizations/data-spotlight/2025/12/rental-scams-hit-home-65-million-reported-losses

---

**Next:** Section 09 — Commercial Model & Value Multiplication. After Section 09 is independently reviewed, create **Checkpoint 03 (Sections 07–09)** plus cumulative **Sections 01–09**. Section 10 will cover MVP, pilot and roadmap, then final consolidated master checkpoint.

---

# 09. Commercial Model & Value Multiplication

**Project:** SafeListing — AI-Powered Rental Trust & Property Passport  
**Competition:** Sime Darby Property University Hackathon 2026 — PEOPLE / Safety & Security, Digital Living  
**Prepared:** 21 October 2026  
**Status:** **CONDITIONAL PASS for a coherent proposed commercial model; commercial viability and revenue remain UNVALIDATED.**  
**Continuity:** Builds on Sections 01–08. The three pillars remain **ListingAuth, AI TermsGuard and HomeLedger Lite**. StopLoss997 stays on the future roadmap. No existing SDP implementation, market share, paid accounts, authority-verification partner or real transaction volume is claimed.

## 9.1 Executive commercial decision

**Recommended business model:** **Free tenant verification + low-friction owner access + paid agency/property-manager portfolio administration**, with a later **partner verification API** and optional evidence-management tools. Commercial terms must never determine whether an issuer approves a listing, whether a record is genuine, or what warnings a tenant receives.

**The product is a trust service, not an estate agency, property marketplace, paid badge vendor, transaction escrow, property insurer or rental payment processor.** A user paying for software access does not purchase a positive verification result. Real-world authority checking is a controlled prerequisite with documented costs and independent review.

Why this route is more defensible than launching with ads:

1. **The direct value buyer can be identified:** an agency/property manager handling multiple units could plausibly pay for mandate expiry/revocation management, team access, bulk administration, audit trails and less repetitive paperwork. Whether they *will* pay remains untested.
2. **The public benefit stays accessible:** tenants do not pay to check a listing or to see necessary discrepancy warnings; basic authorised owner participation should be sponsored or reasonably affordable to avoid undermining network growth.
3. **The SDP fit is concrete:** a property-linked trust module could increase ongoing service relevance after key handover; it might be operated internally, with an approved service partner or under a formal licensing agreement. This is a proposal, not an SDP commitment. [M1]
4. **The strongest strategic multiplier is reuse:** one governed issuer-verification process could serve more than one development and a range of channel partners, *if* each property's current authority can actually be checked and maintained. Scaling the code without scaling the issuer assurance creates risk, not value.

**Commercial verdict:** Invest first in reliable verification and professional workflow efficiency. Monetise administration/integrations, not the tenant's fear or the truth value of a credential. Treat paid integrations, advanced HomeLedger, service sponsorships and advertisements as staged hypotheses rather than assumed revenue streams.

## 9.2 What the external market evidence does and does not establish

| External observation | What can responsibly be concluded | What cannot be concluded |
| --- | --- | --- |
| PropertyGuru Malaysia sells agent subscription packages and credits for listing and promotional tools. [M2][M3] | Malaysian agents already pay for relevant property-sector software, visibility and workflow services. | Agents have agreed to pay SafeListing RM X, or its anti-fraud trust product can charge the same price. |
| SPEEDHOME publishes landlord-facing annual package and monthly platform fee tiers that include records and tenancy support. [M4] | Landlords may encounter paid digital tools alongside rental transactions. | SafeListing offers equivalent services or can use SPEEDHOME's fee level as a ready-made price benchmark. |
| A Malaysian property-operator platform, Listingo, publishes operator access and per-listing charges. [M5] | Property management/administration software can be packaged as annual and usage-based offerings. | Listingo is directly comparable in authority-assurance complexity or willingness to pay. |
| SDP's Integrated Annual Report 2025 supports digital customer journeys, data/AI maturity and broader value creation. [M1] | SafeListing has a plausible organisational strategic home if SDP wishes to test it. | SDP will fund, integrate, license, operate, promote or approve SafeListing. |
| The Malaysian Board of Valuers, Appraisers, Estate Agents and Property Managers maintains professional conduct rules, including restrictions on participation in professional profits and client conflicts. [M6] | Transaction-related estate-agency referral/commission arrangements must be legally reviewed before proposing any live revenue. | Every technology subscription or every referral arrangement is automatically unlawful. |

**Category discipline:** The police-reported 922 rental-fraud cases in 2025 and DOSM's 19.7% renter-household tenure figure support the *problem* (Section 02); they do **not** measure annual potential paying agencies, existing SDP rental stock, SafeListing revenue, total addressable market or preventable RM losses. Do not convert them into a revenue forecast.

## 9.3 Beneficiary, buyer, payer and verification role

A trust system fails if the buyer and the authority issuer are conflated. Separate roles explicitly:

| Role | Receives value | Proposed fee logic | Non-negotiable trust boundary |
| --- | --- | --- | --- |
| Prospective tenant / verifier | Checks a specific listing's current claims, TermsGuard discrepancies and permitted HomeLedger facts | **Free for essential checks**; no forced account, credit card or sponsored click | Same factual result for every tenant regardless of advertisers or paying agency |
| Individual authorised lessor / owner | Manages a small number of listing permissions, renewals, revocations and selected property facts | **Free basic/sponsored pilot** where funding covers checks; optional low-cost expanded administration later | Owner may apply for authority, but cannot approve their own current letting rights without a trusted reviewer |
| Licensed property agency / property-management organisation | Staff coordination, mandate administration, alerts, evidence gathering, audit, portfolio access | **Primary candidate for paid monthly/annual subscription**, per organisation or managed unit | Subscription grants workflows and capacity, never approval status, an unearned badge or suppressed warnings |
| External marketplace / platform / partner developer | Server-to-server status checks for qualifying records and user journeys | **Future enterprise/API licence**; negotiated integration and support fees | The public human-facing reference check remains free; no 'pay to learn if revoked' barrier |
| SDP or an appointed authorised operator | More continuous customer service, auditable trust system and pilot learnings | Choose internal investment, contracted service, revenue share where lawful or third-party licensing only after approvals | No source claims real SDP contractual commitment or authority to certify current property rights |
| Approved service providers | Optional visibility for movers, cleaning, broadband etc. | Later **labelled ads/opt-in referrals**, fixed sponsorship where appropriate | Commercial content cannot influence ListingAuth/TermsGuard; no exploitation of fraud alerts or private chat content |

**Proof-of-rights is a cost, not a purchasable outcome.** If an application fails authority checks, the paid-agency account still must not receive an ACTIVE credential. Where fees are charged for independent processing, the pricing/appeal/refund policy must not pressure reviewers to pass applications.

## 9.4 Proposed commercial products and limits

### Product A — Public SafeListing Verify (launch priority)

- Free public verification of issuer identity, applicable property/listing scope, current status, approved representative/public channels and explicitly authorised claims.
- Free TermsGuard core analysis of a relevant screenshot or pasted message, with reasonable abuse/rate limits, accessible privacy notice and the ability to check without sending unnecessary personal information.
- View selected public/permitted HomeLedger Lite statements and provenance; private supporting documents only with appropriate per-record grant.
- **Never introduce paid positive badges, faster paid truth verification, verification-result ads, mandatory sponsored offers or fee-gated fraud warnings.**

### Product B — Individual owner basic (SDP pilot; only once authority check exists)

- One or limited number of active listing permissions; mandate renewal and revocation; structured approved terms; a bounded HomeLedger Lite summary.
- **Initial proposed pricing:** free/sponsored where SDP or another pilot funder explicitly funds the verification and support workload; do not pretend a human authority check has zero cost.
- A candidate later model is a transparent, non-outcome-based **verification application processing fee** or paid add-on administration; adoption and consumer-protection consequences must be tested. Essential authenticity data remain free to check.

### Product C — Agency / manager Trust Console (primary revenue hypothesis)

Sell convenience and operational control:

- A single dashboard for multiple approved listings/units and relevant staff roles.
- Delegated agent mandates with scope, expiry alerts, transfer/suspension workflows and reviewer escalation.
- Bulk evidence-submission preparation (not automated approval) and change/audit exports.
- Usage and conversion analytics **in aggregate**, not lists of individual tenants or their private TermsGuard content.
- Optional API keys for authorised agencies to manage their own records, subject to privacy and licence.

**Pricing hypotheses to test rather than publish as facts:** RM199, RM299 and RM499 per organisation/month, with differing active-unit and team limits. These are **illustrative interview/experiment price points invented for the model**, not quoted market prices, validated willingness-to-pay or an official SDP fee schedule. A per-active-unit component might become fairer than unrestricted usage. Any required external authority verification cost must be separately budgeted or transparently bundled.

### Product D — Partner verification API (future expansion)

- Machine-readable permission status, current allowed claims and reason-code semantics, using purpose-limited partner authentication and contractually defined usage.
- Charge platform partners for operational integration, uptime/quotas, enterprise reporting and support—not for a superior authenticity verdict.
- Licensed access should not block or degrade **free human independent verification**.
- A partner using cached positive status after revocation creates material consumer risk; production API terms require fail-closed freshness guarantees and incident procedures.
- Do not claim international W3C interoperability unless actually implemented and tested; Section 05 explicitly proposes standard signed JWS without asserting full VC conformity.

### Product E — HomeLedger Plus (future, only if it creates extra value)

- Owners/managers might pay for assisted document organisation, warranty reminders, consent-based exports and structured provider evidence submission.
- **Do not charge a prospective tenant to view necessary, owner-permitted provenance or withhold material disclosed facts for subscription upgrades.**
- Do not sell previous residents' information, private defect files, property-condition scores or repair records to insurers, advertisers or others without a clear, authorised lawful basis.
- Main innovation remains rental-authorisation plus claim comparison; HomeLedger revenue is optional upside, not justification for collecting everything.

### Product F — Disclosed service sponsorships/advertising (last, not first)

- Possible *after* the verification result, in a separated section: moving companies, internet installation, household cleaning, maintenance providers.
- Display **Sponsored** labels and manage conflicts. Do not call a paid service provider *verified*, *recommended* or *SDP-approved* without a separate supported qualification process and explicit permission.
- Never use a tenant's uploaded private chats, guessed distress, 'scam risk' labels, or protected HomeLedger evidence as an ad-targeting source by default.
- No advertising on critical contradictory/revoked/payee-unverified warnings. Test whether ads reduce trust; switch them off if they do.
- Independent revenue from sponsorships is **not included** in base-case financial forecasts.

## 9.5 Three revenue paths ranked by strategic quality

| Rank | Revenue path | Fit with SafeListing | Stage / validation needed | Recommendation |
| ---: | --- | --- | --- | --- |
| **1** | Agency/manager Trust Console subscriptions | Directly monetises workflow capability without charging vulnerable tenants | Validate unit counts, burden, price tolerance, reviewer costs and employer procurement | **Primary** |
| **2** | Partner verification API licensing / enterprise SaaS | Could multiply the value of the same trusted permission across channels | Obtain credible issuer, partner contracts, stable status semantics and uptime controls | **Secondary expansion** |
| **3** | Optional HomeLedger Plus administration | Complements a known property link and increases record continuity | Test owners' willingness to contribute/pay and legal rights to share each document | **Conditional add-on** |
| **4** | Fixed-fee, clearly labelled non-transaction service sponsorship | Could support free public use at scale | Validate user acceptance, advertising rules and advertiser relevance | **Carefully controlled experiment** |
| **5** | Commission on completed rentals / estate-agent commission sharing | Strong conflict of interest; may amount to regulated estate-agency work/fee sharing | Specialist Malaysian legal/regulatory review under applicable law and professional standards [M6] | **Do not include in initial model** |

**No blanket legality assertion:** Whether a particular SaaS charge, advertising fee or introduction payment is regulated depends on its contractual structure and actual activity. The licensed-estate-agent professional code is enough reason to avoid unreviewed revenue sharing. [M6]

## 9.6 Unit-economics logic — the hidden cost most pitches omit

### Expense categories

**Variable / volume-sensitive** (model separately):

1. **Current-authority verification:** identity and right-to-let proof collection, independent review, rejection/escalation, checking co-owners/corporate mandates, outsourced evidence verification where lawful. This is the key cost driver.
2. **Periodic revalidation:** authority may change after resale, revocation, agent replacement or emerging contradictory evidence. Signing a record once is not enough.
3. **Usage:** status/API queries, data transfer, screenshot AI extraction, storage and retention policies, abuse mitigation, provider invoices/document checks.
4. **Support:** mistaken matches, identity disputes, owner appeals, agent changes, suspicious listing reports and privacy requests.

**Fixed / step-costs:**

- Security oversight, issuer training and separation of duties, fraud monitoring and incident response.
- Infrastructure and key custody, resilient signing/verification services, QA/audit and documentation.
- Privacy/contract compliance, complaint escalation, data-subject requests and insurance/legal reserve where applicable.
- Onboarding and customer acquisition, partner integration, support personnel and periodic verification policy reviews.

**Important:** Human reviewer time, dispute management and security/liability exposure may dwarf raw API/AI inference fees. Do not sell a price point derived only from cheap cloud hosting.

### Basic unit economics formulas

Let:

- `A` = number of paying organisations; `P` = monthly fee per organisation; `U` = properties requiring authority review during the year; `V` = units requiring periodic revalidation; `Q` = annual chargeable AI comparisons; `K` = verified API-partner licensing revenues; `H` = optional HomeLedger administration revenue.
- `c_a`, `c_v`, `c_q` = cost per authority review, revalidation and AI comparison (including usage-related charges where covered); `F` = fixed annual security/issuer/support/platform operations; `C_other` = additional per-unit hosting, dispute costs, acquisition, billing, legal or other excluded charges.

`Annual recurring subscription revenue = 12 × A × P`  
`Illustrative annual gross revenue = 12 × A × P + K + H`  
`Illustrative annual operating contribution = revenue − (U × c_a + V × c_v + Q × c_q + F + C_other)`

**Be explicit:** This is not an accounting forecast, not net profit and not a startup valuation. Revenue recognition, income taxes, SST, depreciation, customer acquisition, legal reserves and the operating model require fuller assumptions. If actual verification costs rise substantially, subscriptions may never finance the free user service at the tested price.

### Fully hypothetical scenario — sensitivity, not a claim about SDP or Malaysia

Assume the following **illustrative annual scale only**:

| Assumption | Model input | Basis |
| --- | ---: | --- |
| Paying agency/manager organisations | **50** | Hypothetical; no customers recruited |
| Subscription fee | **RM299 / organisation / month** | Model input only; untested |
| Unit authorisations initially reviewed during year | **1,000** | Hypothetical unit volume; not actual SDP rental stock |
| Human authority-review cost | **RM40 / unit** | Placeholder; **not** a vendor quote or verified feasibility cost |
| Annual recheck volume and unit cost | **1,000 × RM20** | Placeholder; may underestimate ownership-change complexity |
| AI comparisons and unit cost | **12,000 × RM0.50** | Illustrative marginal usage assumption; not a tested model quote |
| Annual baseline platform/cloud | **RM30,000** | Illustrative operating placeholder |
| Annual assurance/support/security staff allocation | **RM90,000** | Illustrative operating placeholder; excludes substantial management overhead |
| API / HomeLedger / ad revenue | **RM0** | Conservatively not assumed |

| Illustrative calculation | Annual RM |
| --- | ---: |
| Subscriptions: `50 × 299 × 12` | **179,400** |
| Initial authority checks: `1,000 × 40` | (40,000) |
| Revalidation: `1,000 × 20` | (20,000) |
| AI comparison: `12,000 × 0.50` | (6,000) |
| Infrastructure/platform | (30,000) |
| Assurance, support and security allocation | (90,000) |
| **Illustrative operating contribution before excluded costs** | **−6,600** |

Under **these exact assumptions only**, the model needs `RM186,000 / (RM299 × 12)` ≈ **52 paying organisations** to cover *the listed* annual expenses; this is **not** a credible real-world break-even point, because acquisition, legal, accounting, tax, unexpected incidents and real verified-cost quotes are not included. A RM40 increase in *each* of 1,000 initial authority checks would raise listed costs by **RM40,000**, pushing the equivalent threshold to approximately **63 organisations** at the same subscription price, assuming all other volumes stayed identical.

**Interpretation:** The numbers show why the business model is constrained by issuer assurance, not by app development. Even a seemingly reasonable subscription price can fail to subsidise high-integrity checks at low adoption. Do not present this scenario as projected SDP income, likely profit or market sizing. The initial pilot may justifiably be subsidy-funded for learning, subject to explicit sponsor approval.

### Sensitivity considerations to test before claiming 8–9/10 Commercial

- How many properties does a *typical* subscribed organisation actually administer through the platform? Agencies with one unit are poor fits for a flat enterprise fee; a manager of 100 units may overload a cheap tier.
- What proportion of reviewed applicants are rejected or require additional evidence? Rework can dominate `c_a`.
- Do reviewers need independent registry/legal checks, and what are the lawful/available providers and turnaround times?
- What is the frequency of authority changes and the cost of secure revalidation?
- How many guest verifications and AI screenshots are triggered per listing? What abuse limits prevent runaway expense?
- What is realistic churn, onboarding friction, customer-acquisition cost, paid conversion and support burden?
- Which party pays for unaffiliated owners and non-member SDP properties?

## 9.7 Path to commercially useful data without speculative market sizing

Do **not** estimate total addressable market by multiplying Malaysia's rental-household percentage by guessed subscription fees. Do **not** use national police scam losses as a proxy for willingness to pay.

**Bottom-up opportunity calculation (once authenticated data exist):**

1. Count eligible participating SDP units with current authority-checkable rights, not all units ever sold.
2. Determine the percentage genuinely offered for rent during a measured period and the number of distinct relevant owners/agencies.
3. Observe credential issue/renew/revoke rate, tenant verification requests, HomeLedger access grants and support escalation per live listing.
4. Identify agency/manager customers with sufficient concurrent managed inventory and their procurement/budget process.
5. Run pricing interviews/letters of intent or a limited paid pilot with a controlled, independent authority process.
6. Estimate **SAM** only from actually serviceable portfolio stock, permissible partners and verified operational capacity; estimate realistic near-term penetration (**SOM**) only after onboarding conversion data.

Potential expansion to additional townships or partner marketplaces is a **replication hypothesis**, not automatically additive units/revenue: each new unit still needs credible authority review, privacy and service governance.

## 9.8 Value multiplication for SDP: what counts besides cash revenue

**A multiplier is not just more advertising impressions.** The commercial criterion should describe the possibility of one trusted asset benefiting several stakeholder groups while preserving user safety.

| Value layer | Potential multiplier | Evidence / operating proof required |
| --- | --- | --- |
| **Residents and prospective tenants** | One property-specific permission can be checked in multiple ad channels; better information may travel with the property listing | Guest checks, pre-payment behaviour, discrepancy comprehension; Section 08 evaluation |
| **Owners / lessors** | Repeated manual mandate explanations replaced by structured, expiring credentials | Actual owner effort/time saved, completeness of authority checks, issuance renewals |
| **Agents / managers** | Multiple listing permissions managed in one professional workspace | Real portfolio sizes, operating time saved, willingness to pay |
| **SDP customer lifecycle** | Proposed property trust/record experience after handover extends App's usefulness into pre-tenancy and tenancy transitions | SDP participation, owner engagement, support/retention metrics; Section 07 |
| **Approved external partners** | Verification protocol integrated into marketplaces/services without replicating full property identity review | Signed partner agreements, API usage, fresh status assurance and operating cost |
| **Long-term property information** | Bounded evidence records can reduce repeated requests to reconstruct repairs/warranty history | Consented document continuity, actual data quality, usefulness testing; no carbon claim without measures |

**Non-financial value must not be monetised twice:** user trust, hypothetical scam losses avoided, existing client retention and API revenue cannot all be counted as one realised RM benefit without separate attribution and observed causal evidence. Business-case calculations should not assume all people experiencing a rental advertisement are direct paying users.

## 9.9 SDP operating options — no implied partnership

| Operating form | Who would operate and pay? | Pros | Major unresolved dependency |
| --- | --- | --- | --- |
| **SDP-sponsored internal module** | SDP funds/oversees a verified service, potentially contracting some functions | High strategic fit with app/unified journey; tenant service can remain free | SDP business approval; lawful current-authority evidence and governance; no verified cost estimates |
| **Approved independent service provider** | Qualified partner administers review/credentials under SDP-approved link/experience | Could isolate specialist operational responsibilities | Partner assurance, contracts, supervision, trusted issuer branding and correct consumer liability terms |
| **Third-party SaaS licensed to SDP/agencies** | Software operator licenses technology; qualified issuer independent | Revenue may scale outside one developer | Verified customer willingness, enterprise procurement, secure integration and IP/licence terms |

The operation model changes legal roles, support costs and customer trust. A demo cannot decide whether SDP should be the issuer, technical operator, data controller or merely a property-channel partner; those require agreements. **The trusted issuer function must exist no matter who is charging.**

## 9.10 Commercial and ethics guardrails

1. **Truth cannot be purchased:** subscription, sponsorship, ads, agency popularity or referral commissions must never affect approval, revocation, evidence labels, warning severity or public results.
2. **No paid validity check:** tenant can verify independently and free of charge; service can throttle abuse without selectively hiding critical results.
3. **No false branding:** never style SafeListing as an officially approved SDP product or licensed government title checker unless written authority exists.
4. **No real-estate commission sharing without legal clearance:** Malaysian professional rules restrict participating in a professional agent's profit and impose conflict-of-interest duties; fee design involving deal referrals, rent percentage or acting as intermediary must receive local advice. [M6]
5. **Privacy by default:** uploaded screenshots, chat participants, applicant identity and sensitive repair evidence are never advertiser inventory. Any consent-based commercial use needs a separate specific purpose and clear disclosure under applicable privacy law. [M7]
6. **No stealth fees or dark patterns:** sponsored service cards are labelled; no mandatory upsell or bait-and-switch after a warning.
7. **No liability-free guarantees:** no claim that a certified badge proves habitability, legal title, bank account ownership or scam immunity. Malicious reuse of a legitimate credential remains a residual risk (Sections 06 and 08).
8. **Controversial reports are privately reviewed:** paying agencies cannot suppress safety reports or demand unreviewed public accusations against competitors.
9. **Marketing is evidence-based:** only pilot-observed facts may be converted into 'X% safer', '$ avoided', ROI or ESG claims.

### Regulatory and compliance notes

The Malaysian Board of Valuers, Appraisers, Estate Agents and Property Managers' official code addresses client fidelity, fraud prevention and limits on profit participation in professional work. It raises questions for any scheme framed as sharing a rental agent's commission; the product should charge for technology/admin where permitted and seek qualified review of exact contracts. [M6]

The Personal Data Protection Commissioner publishes the Personal Data Protection Act and the 2024 Amendment. Operator/controller roles, notices, retention, consent or other lawful processing bases, vendor sharing, data breaches, relevant DPO obligations and international transfers need scope-specific professional review. Section 06 has the detailed threat/privacy model. [M7] Malaysian advertising self-regulatory guidance calls for legal, decent, honest and truthful advertisements; sponsorship should never disguise impartial verification. [M8]

## 9.11 Realistic commercialisation roadmap and gates

| Stage | Revenue posture | Deliverable and gate | Disqualifying failure |
| --- | --- | --- | --- |
| **Hackathon demo (Oct 2026)** | **No charging or real customers** | Synthetic property/issuer, real signed credential mechanics, free verifier, AI discrepancy tests, 3 HomeLedger examples | Claims of legally verified title, SDP-approved integration, invented customers/earnings |
| **Limited approved pilot** | Subsidised/funded study; optional controlled service cost recovery only if legally sound | Current-authority review policy/partner, real privacy agreements, enrolled owner and tenant consent, service-cost logs | Unable to establish rights reliably, security failures or unacceptable comprehension/false assurance |
| **One-development operating trial** | Test opt-in B2B agency/manager plans; free tenant checks | Measure actual issue-review cost, revalidation, agency conversion, disputes, trust usability, operating coverage | Low willingness to pay or costs exceed customer value without credible funding |
| **Cross-township growth** | B2B subscriptions and separately negotiated partner API | Standardised, accountable issuer and assured status integration across participating units | Expired/invalid authority presented as valid or weak auditability |
| **Mature ecosystem (optional)** | Consent-aware HomeLedger add-on and labelled non-transaction service sponsorships | Privacy, consumer trust and commercial evidence; audited separation from trust labels | Sponsored bias, unauthorised evidence sharing, hidden fee/commission arrangements |

**Stage discipline:** A demonstration of software is not evidence that SDP, an agent association, state registry, property manager or marketplace has agreed to operate the service. Do not imply rollout dates have been approved by SDP. The proposed pilot timeline and build plan belong in Section 10.

## 9.12 Commercial experiments and evidence needed

| Question | Cheapest useful test | Decision signal |
| --- | --- | --- |
| Will owners issue/revoke permissions? | 3–5 interviews and realistic issued-credential prototype | Actual steps willing to take and evidence they can provide |
| Will agencies pay for portfolio admin? | 5–10 target manager/agency buyer conversations and priced concept sheet | Specific budget owner and credible paid-pilot/LOI interest; not merely 'nice idea' |
| How expensive are current-rights checks? | Trained reviewer dry run of 10 diverse, consented **synthetic or properly authorised** scenarios; vendor quotes | Median + tail duration/cost, false approval/rejection policy and escalations |
| Do tenants understand verification limits? | 5–8 observed task tests with genuine-domain and copied-badge scenarios | No unsafe inference that green listing implies bank payee is safe |
| Does HomeLedger affect informed decisions? | Show evidenced vs owner-declared vs unknown examples | Participants correctly distinguish sources, dates and incomplete history |
| Are ads safe for trust? | Off by default; user-test separately after free verification | Commercial sponsorship does not worsen perceived impartiality or warning comprehension |
| Does partner API have buyers? | Workshop with interested portal/operator on caching, status and assurance | Written integration needs, technical/compliance willingness and accountable payer |

**Research ethics:** Participation must be voluntary. Do not request or upload private deeds, passports, bank statements, real WhatsApp chats, live ownership data or private building defect logs into a public hackathon demo.

## 9.13 Judge-facing 20-second commercial summary

> **“SafeListing keeps core verification free for renters. Its commercial opportunity is a paid Trust Console for agencies and property managers, with future partner API licences and optional document-management services. That allows one carefully governed listing authorisation to serve multiple advertising channels and communities, rather than building another rental marketplace. We would first pilot and measure the actual cost of verifying letting authority; neither revenue nor SDP adoption is assumed.”**

A slide should display **tenant-free / owner pilot-sponsored / B2B admin subscription / future partner API** and one small, explicitly hypothetical economics example. Avoid ads as the headline, unsupported TAM claims, speculative profit and misleading verified-badge subscription logic.

## 9.14 Traceability to the approved master and new commercial gates

| Earlier section | Commercial rule preserved |
| --- | --- |
| 01 Project Definition | Three pillars; prospective tenant is primary user; free basic independent verification; StopLoss997 later |
| 02 Evidence | No extrapolation from 922 reported fraud cases or 19.7% citizen-household tenure into paying customers/TAM |
| 03 Competition | Existing paid property platforms and property passports are prior art; do not assume SafeListing's unique moat or willingness to pay |
| 04 User Journeys | Owners/agents have structured permissions; tenants may verify free without creating a managed account |
| 05 Architecture | Server-side approved issuer controls, current status, deterministic comparison and private signing secrets; usage throttling must not bias results |
| 06 Security / Privacy | No pay-to-pass, no paid green badge; private TermsGuard contents, HomeLedger permissions, payee-unverified state, independent issuer review |
| 07 SDP Strategic Fit | SDP support/API, legal-owner registry, partnership and funding are **proposed**, not secured; full issuer/partner governance needed |
| 08 Impact / Sustainability | No claimed fraud-prevention rate, avoided loss, proven repair savings or SDP-specific population count; measure user understanding |

**Commercial acceptance criteria (proposed, not yet executed):**

- **CM-01:** Every authenticated tenant and guest receives exactly the same verified/unverified/revoked result for the same credential regardless of provider subscription tier.
- **CM-02:** A customer can buy portfolio seats/limits but cannot pay to skip the independent current-authority review, alter issuance policy or suppress safety warnings.
- **CM-03:** The basic public verifier and relevant adverse status information remain free and accessible without account creation.
- **CM-04:** All costs of review/recheck, fraud support, privacy, security and third-party evidence are visible in the business case; no claim that AI hosting is the main operating expense without data.
- **CM-05:** Every disclosed partnership, referral or ad is prominently labelled and separated from listing verification; no use of personal message/evidence content for targeting by default.
- **CM-06:** No payment/referral contract operates as regulated estate agency, illegal fee-sharing or misleading endorsement without qualified Malaysian review.
- **CM-07:** Forecast scenarios label every unverified input and exclude unsupported TAM/revenue multipliers.
- **CM-08:** HomeLedger commercial features never reveal private files by default or equate a paid record with independent certification.
- **CM-09:** Tenant-facing verification outcome remains fail-closed when issuer/status infrastructure is down, even if there is commercial pressure for availability.
- **CM-10:** Growth beyond a pilot requires measured adoption, cost of authority checks, partner trust arrangements, and privacy/security sign-off.

## 9.15 Independent validation / adversarial audit

| Audit item | Outcome | Basis / action |
| --- | --- | --- |
| A real paying property-software market exists | **PASS for broader precedent** | Official published PropertyGuru agent packages and SPEEDHOME landlord fees [M2][M4] |
| Buyers already pay specifically for cross-platform rental authority credentials | **UNPROVEN** | No SafeListing interviews, LOIs or competitor equivalent-price evidence |
| Business model preserves public safety access | **PASS for design** | Tenant-free, no paid approvals, issuer-review invariants; no production tests yet |
| Revenue numbers trace to verified demand | **FAIL if asserted as real** | Pricing and scenario are purposefully hypothetical and must remain labelled |
| Cost and break-even analysis includes meaningful verification expense | **PASS for design logic / rough placeholder** | Reviewer/recheck, support, AI, infrastructure included; legal/acquisition/insurance not all costed |
| Possible real-estate commission conflicts identified | **PASS for compliance warning** | Board professional rules [M6]; contracts require legal review |
| Advertising conflicts and sensitive-data use restricted | **PASS for design** | No pay-to-verify, message targeting, unsafe warning placements; applicable privacy review remains [M7][M8] |
| SDP value multiplication supported as plausible strategic hypothesis | **PASS for conceptual fit** | SDP 2025 report and Section 07; no operational contract [M1] |
| Compliance and issuer assurance proven | **OPEN, HARD LAUNCH GATE** | No live rights registry, legal review or approved verification partner |
| Financial sustainability, market size or profit demonstrated | **NOT YET** | Scenario is a stress test, not a forecast or guarantee |

**Final decision:** **PASS for a commercially coherent, safety-preserving design and transparent economics. CONDITIONAL / UNVALIDATED for market willingness to pay, sustainable unit economics, licensing availability and production legal/issuer readiness.** A high Commercial & Value Multiplication judging score can be *targeted* once real buyers, verified issuer costs and credible multi-township replication are shown; it is not earned just by naming subscriptions, APIs and ads.

## 9.16 Primary sources and evidence notes

[M1] Sime Darby Property, *Integrated Annual Report 2025*, Digital Transformation strategy, 2026 priorities (approx. page 144): unified SDP App, operational data/AI, digital customer journeys and security, broader value creation.  
https://www.simedarbyproperty.com/sites/default/files/2026-04/SDP%20Integrated%20Annual%20Report%20Website.pdf

[M2] PropertyGuru Group Malaysia, *Agent Packages* (official) — paid Malaysian agent packages, annual billing and recurring tools. The seller's subscription price is **not** a comparable verified willingness-to-pay for SafeListing.  
https://myagentofferings.propertygurugroup.com/packages/

[M3] PropertyGuru Group Malaysia, *All About Universal Credits*, updated 15 June 2026 — paid agents can spend credits to post, repost and boost listings. This is an adjacent professional-software/advertising market, not evidence of rental-authorisation purchases.  
https://myagentofferings.propertygurugroup.com/help-centre/welcome-to-agentnet/all-about-all-access-packages/all-about-universal-credits/

[M4] SPEEDHOME, *Landlord* official page — published package types, tenancy records and recurring platform fees. This is a broader rental-management service with capabilities SafeListing does not claim to match.  
https://speedhome.com/more/landlord/speedhome

[M5] Listingo Malaysia, *Transparent Pricing* — operator portal access and usage-based listing fee examples. Self-reported vendor material, not proof of SafeListing revenue demand.  
https://listingo.com.my/pricing/

[M6] Board of Valuers, Appraisers, Estate Agents and Property Managers (Malaysia), *Code of Conduct* — professional duties including protection against fraud, conflicts and restrictions on participation in estate-agent professional profits. Local counsel should assess individual contracts.  
https://lpeph.gov.my/code-of-conduct

[M7] Personal Data Protection Commissioner, Malaysia, *Personal Data Protection (Amendment) Act 2024* and official related materials. Actual controller/processor duties depend on deployment arrangements and data types.  
https://www.pdp.gov.my/ppdpv1/en/akta/personal-data-protection-amendment-act-2024/

[M8] Advertising Standards Authority Malaysia, *List of Code* — principles of legal, honest and truthful advertising; investigate applicable electronic advertising and consumer requirements before commercial operation.  
https://asa.org.my/the-code/list-of-code/