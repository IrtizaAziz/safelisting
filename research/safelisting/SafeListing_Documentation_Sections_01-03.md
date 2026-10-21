# SafeListing — Master Documentation: Sections 01–03

**Checkpoint 01 — 21 October 2026**  
**Project:** Sime Darby Property University Hackathon 2026 — PEOPLE  
**Scope:** Full Section 01; revalidated Section 02; researched and validated Section 03.  
**Status:** Internal working documentation, not a claim of production SDP integration.

## Checkpoint decisions and context to preserve

- SafeListing is a proposed **feature extension to the existing SDP App**, not another rental marketplace.
- **ListingAuth + AI TermsGuard + HomeLedger Lite** are the three connected core pillars. **StopLoss997** is retained as a future roadmap item, not MVP.
- Tenant verification is proposed to be independent, publicly accessible and free; issuer must establish **current letting authority**. A historical purchaser account is insufficient.
- AI compares external claims with a *trusted issuer record*; it cannot verify legal ownership or guarantee the overall transaction.
- HomeLedger provides *selected, provenance-labelled information*, not comprehensive condition certification or proof of no defects.
- Section 02 differentiates 922 broad 2025 rental-fraud cases from 24 property-agent scam cases; these are different categories, not to be added. The DOSM 19.7% statistic is for Malaysian-citizen households, not all households.
- Section 03 documents substantial prior art: **PropertyGuru** identity and developer-backed listing verification; **SPEEDHOME** verified landlords, listings and complete in-platform transaction records; **HomeLynx** evidence-graded property passports; **W3C** verifiable credentials. Do **not** claim any of these component features are new.
- Potential differentiation is the *specific integrated owner-authorisation + cross-platform independent verification + AI claims check + selected property evidence* workflow; this is a **hypothesis**, not a proven first-of-kind invention.
- No current real integration to SDP or registry/data access, paid commercial customers, validated local adoption or proven fraud prevention.
- **Next:** Section 04 Solution & User Journeys; 05 Technology & AI Architecture; 06 Security, Trust & Privacy; checkpoint after approved Sections 04–06.

---

# 01. Project Definition

**Project Name:** SafeListing  
**Working Subtitle:** AI-Powered Rental Trust & Property Passport  
**Competition:** Sime Darby Property University Hackathon 2026 — Township of Tomorrow  
**Theme:** PEOPLE  
**Primary Focus:** Safety & Security  
**Secondary Focus:** Digital Living  
**Document Status:** Section 01 reviewed and validated; carried forward from the previously agreed concept draft.

---

## 1.1 Executive Overview

SafeListing is a proposed digital trust system designed to make residential renting safer, more transparent and more accountable.

The system addresses a fundamental problem in online property transactions: prospective tenants may be unable to independently establish whether the person advertising a property is actually authorised to rent it out, whether the advertised terms are genuine, or whether important claims about the property are supported by reliable evidence.

SafeListing proposes a property-linked verification mechanism through which authorised owners or representatives can issue secure, time-limited rental listing authorisations. Prospective tenants can independently validate these authorisations before taking further steps.

AI then compares rental advertisements, screenshots and messages against the authorised information, highlighting material inconsistencies.

An integrated property-information component, HomeLedger Lite, provides selected evidence-backed records about the property, helping tenants distinguish documented facts from unsupported claims.

SafeListing is proposed as an extension to the existing Sime Darby Property App, rather than a replacement for its existing services.

**Central proposition:**

> SafeListing helps renters verify who is authorised to offer a property, what terms have been authorised, and what trustworthy information is available about that property.

## 1.2 The Core Problem

Rental transactions involve significant information asymmetry.

Prospective tenants commonly discover advertisements on property marketplaces, social media platforms or messaging services. They must often rely on information supplied by the advertiser, who may not be the property's owner or an authorised representative.

Three connected trust problems arise:

### A. Unverified authority

A legitimate-looking advertisement does not necessarily establish that the advertiser has permission to rent out the property.

Even verification of an agent's professional identity does not automatically prove that the agent has been authorised to advertise a particular unit.

### B. Unverified transaction information

The details advertised to prospective tenants can differ from those approved by the owner.

Rent, deposits, booking payments, agent contact information and other conditions may change during conversations.

Tenants may have no independent source against which to check these claims.

### C. Limited property transparency

A prospective tenant may receive incomplete or unsupported information about the unit's maintenance, renovations, equipment and previous repairs.

Useful documents may exist but remain scattered among owners, contractors, management systems and property files.

SafeListing aims to address these three problems through one coherent trust mechanism.

## 1.3 Target Users and Stakeholders

### Primary User — Prospective Tenant

A person evaluating a residential rental opportunity who wants to independently verify the listing and understand relevant property information before committing.

Key benefits:
- Check current listing authorisation.
- Identify discrepancies in advertised information.
- Access selected evidence-backed property facts.
- Understand precisely what the verification does and does not establish.

### Secondary User — Property Owner or Authorised Lessor

A person who has passed an appropriate verification process establishing their current authority to offer the property for rent.

Key benefits:
- Issue a limited authorisation to advertise the property.
- Specify permitted representatives and listing details.
- Control validity periods.
- Revoke or update authorisation.
- Selectively provide relevant property-history evidence.

### Secondary User — Authorised Rental Agent

An agent who has been given permission to market a specific property within defined conditions.

Key benefits:
- Demonstrate a verifiable authorisation.
- Reduce confusion over approved listing terms.
- Share a verification reference with prospective tenants.

### Institutional Stakeholder — Sime Darby Property

SDP is the proposed platform partner and potential operator or participating issuer of appropriate property-linked credentials.

The concept could extend the relationship between the property developer, owners and future occupants beyond the initial property purchase and handover process.

Actual participation, technical access and issuer responsibilities would require SDP approval and further design.

## 1.4 The Three Product Pillars

### Pillar 1 — ListingAuth

**Purpose:** Establish whether a rental listing has a valid, current authorisation from an appropriately verified party.

The proposed process is:

1. A property account is linked to an applicant.
2. The applicant's current authority to let that property is checked through an appropriate verification process.
3. The authorised party creates a listing permission covering a specified property and, where applicable, a permitted agent.
4. The permission records relevant authorised details, scope and expiration date.
5. The system issues a cryptographically signed verification record.
6. Prospective tenants independently check the record through a trusted verification interface.
7. The authorised party or issuer may revoke or update the permission.

**Important design principle:** An existing SDP purchaser account alone is not sufficient proof of current ownership or letting authority, especially after resale or changes in property rights.

A production system would require current-authority verification and appropriate revalidation.

### Pillar 2 — TermsGuard

**Purpose:** Detect inconsistencies between what tenants are told and what an authorised listing record actually states.

Residents may upload or paste information from:
- Rental advertisements.
- WhatsApp conversations.
- Social media listings.
- Screenshots of proposed rental terms.
- Payment instructions.

The AI extracts relevant claims and compares them with structured, authenticated information.

Examples include:
- Monthly rent differs from the authorised price.
- The advertised agent differs from the authorised representative.
- A contact number does not match the registered contact channel.
- A claimed deposit or booking requirement is inconsistent with the authorised record.
- The listing authorisation has expired or been revoked.

The result must distinguish between:

- **Matching information:** The relevant details agree with the authenticated record.
- **Contradictory information:** A material discrepancy has been detected.
- **Unverified information:** The claim cannot be confirmed from available records.

TermsGuard must not automatically conclude that an advertisement is fraudulent simply because information is missing or different.

**AI assists with extraction and comparison. It does not create or replace the underlying proof of authority.**

### Pillar 3 — HomeLedger Lite

**Purpose:** Provide selected, relevant property information supported by traceable evidence.

Potential information includes:
- Documented maintenance or servicing.
- Repair and rectification history.
- Selected renovation records.
- Equipment warranties.
- Relevant property features or installations.

Records are accompanied by clear evidence classifications, such as:

**Issuer-confirmed:** Supported by an authenticated record from the responsible issuer.

**Evidence-backed:** Supported by a relevant document or participating provider's record, with its verification limitations disclosed.

**Owner-declared:** Information submitted by the owner without independent confirmation.

**Unknown or unavailable:** No reliable information is available.

HomeLedger Lite does not represent a comprehensive building-condition certification.

Property-history access will be permission-controlled. Previous occupants' personal information and confidential correspondence must not become public automatically.

The initial prototype will demonstrate a small number of representative records rather than a complete property passport.

## 1.5 Unified User Journey

The three pillars work together within one rental decision.

**Step 1 — Property advertised**

An owner or authorised agent publishes a rental advertisement containing a verification reference.

**Step 2 — Tenant checks authorisation**

The prospective tenant independently opens SafeListing's trusted verification service and checks the current authorisation status and relevant permitted details.

**Step 3 — Tenant compares claims**

The tenant shares the advertisement or subsequent conversation with TermsGuard.

AI extracts information and highlights any meaningful discrepancies against the authenticated listing record.

**Step 4 — Tenant reviews property evidence**

The tenant opens the permitted HomeLedger Lite summary to inspect selected maintenance, repair and warranty information, alongside evidence labels.

**Step 5 — Tenant makes an informed decision**

The system provides clear verification results and identifies unresolved questions.

It does not approve payments, certify the property as safe, guarantee an advertisement is legitimate or replace independent due diligence.

## 1.6 Core Innovation Hypothesis

SafeListing's proposed differentiation is not simply that it uses AI or displays a verification badge.

Its central innovation hypothesis is the combination of:

**1. Property-specific authorisation**

Verification relates to permission to offer a particular property, not merely confirmation of an advertiser's identity.

**2. Cross-platform verification**

Authorisation can be checked independently of where the advertisement originally appeared, including external marketplaces and messaging channels.

**3. Evidence-grounded AI comparison**

AI evaluates advertised claims against authenticated data rather than relying exclusively on visual or linguistic scam indicators.

**4. Selectively disclosed property provenance**

The same property-linked trust framework supports access to relevant, provenance-labelled property information through HomeLedger Lite.

**5. Revocable trust**

Permissions can expire or be withdrawn, allowing tenants to check a current status rather than relying on a permanent screenshot or badge.

These elements form a proposed integrated trust model. Their combined novelty and defensibility remain subject to competitive research and technical validation.

## 1.7 Relationship with the Existing SDP App

SafeListing is designed as a proposed extension to SDP's existing property-related digital services.

Its envisioned role is to extend the residential property lifecycle from purchase and handover into verified letting and property-information continuity.

Potential integration points include:
- Property-linked owner accounts.
- Controlled authorisation and identity workflows.
- Selected property documents and permitted repair records.
- Future approved tenant-account relationships.

SafeListing does not assume that SDP already maintains every record needed, that existing purchaser data proves current ownership, or that external rental platforms and property-management systems provide integration access.

For the hackathon, all integrations will be presented through an independent prototype using clearly identified synthetic records.

## 1.8 Business Direction

The proposed service prioritises free, accessible verification for prospective tenants.

Potential commercial models include:
- Paid multi-property authorisation tools for agencies and managers.
- Verification infrastructure or API licensing to approved partners.
- Optional advanced property-document management.
- Clearly separated advertisements or referrals for relevant residential services.

Advertisers and commercial partners must not be permitted to purchase favourable verification outcomes or suppress material warnings.

Specific prices, revenue projections and unit economics are not yet established.

## 1.9 Scope of the Competition Prototype

### Core demonstration

The prototype should demonstrate:

1. An authorised owner creating a rental listing permission.
2. A cryptographically signed and time-limited verification record.
3. Independent tenant verification of that record.
4. Expiry and revocation behaviour.
5. AI comparison of external advertisement or message details against the record.
6. HomeLedger Lite displaying selected property facts with evidence labels.

### Excluded from the initial prototype

- Real ownership-registry verification.
- Production integration with the SDP App.
- Real rental payments or escrow.
- Complete tenancy agreement execution.
- Comprehensive property-history certification.
- Automatic legal advice or fraud determinations.
- Actual emergency scam-response integration.

### Future expansion

**StopLoss997:** A supporting workflow that assists people who have already experienced suspected rental fraud with organising information and accessing official reporting channels.

This remains a roadmap component, not part of the primary hackathon demonstration.

## 1.10 Expected Outcomes

If successfully implemented, SafeListing aims to:

- Improve prospective tenants' ability to check rental authorisation.
- Help identify material inconsistencies before financial commitment.
- Increase transparency about selected property conditions and records.
- Establish a repeatable verification capability across participating SDP developments.
- Create a potential platform service for agencies, property managers and external partners.

The effectiveness of these outcomes has not yet been demonstrated.

Their measurement, limitations and validation methods will be defined in the Impact and Sustainability section.

## 1.11 Product Boundaries and Non-Claims

SafeListing is **not**:
- A replacement for a property marketplace.
- Proof that every aspect of a rental transaction is safe.
- A substitute for current legal ownership verification.
- A guarantee of payment recovery.
- A structural or mechanical inspection certificate.
- A legal adjudicator of tenancy disputes.
- An officially integrated SDP service at the hackathon prototype stage.

A valid listing authorisation only establishes the specific claims that the issuing process is actually capable of supporting.

**The guiding principle is trustworthy, limited verification—not false reassurance.**

---

**Section 01 validation status:** PASS, subject to the explicit limitations above and real-world owner-authority verification still to be designed.

---

# 02. Problem & Market Evidence

**Project:** SafeListing — AI-Powered Rental Trust & Property Passport  
**Competition:** Sime Darby Property University Hackathon 2026 | PEOPLE — Safety & Security / Digital Living  
**Status:** Independently re-validated and corrected (21 October 2026). Approved for concept documentation; product assumptions remain open.  
**Scope:** Problem, target population, credible supporting evidence and limits. Competitor differentiation belongs in Section 03.

## 2.1 Problem statement

Prospective renters can encounter online residential listings from people who are not authorised to advertise the property, as well as advertisements and subsequent messages containing unsupported or conflicting terms. Fraudsters may impersonate legitimate estate agents or homeowners, misuse property photographs, create urgency and request advance payment before appropriate independent checks. The consequence can be direct financial loss and exposure of personal information. This is a documented Malaysian problem, not a hypothetical use case. [S1][S2]

**Core problem to be solved:** A prospective tenant needs a quick, independent way to determine whether a *specified person is currently authorised to offer a specified property under specified terms*, rather than relying on the advertiser's own statement, a screenshot or proof that a professional licence exists.

This is a proposed product-level trust gap, **not** a claim that no existing firm has property-specific verification. Section 03 must determine the exact competitor gap and any overlap.

## 2.2 Malaysia: evidence of problem severity

### Rental-fraud cases (broad category)

In a 12 January 2026 interview reported by *The Star*, the director of Bukit Aman's Commercial Crime Investigation Department stated the following police figures for *rental fraud*: 184 cases in 2023; 307 in 2024; and 922 in 2025. The same report gave losses of RM396,246.55 in 2023, RM835,367.71 in 2024 and approximately RM2.5 million in 2025. Reported methods included identity impersonation, suspiciously cheap rental offers, messaging-app contact, pressure to make advance deposits and avoidance of in-person viewing. [S1]

**Interpretation:** The reported increase indicates a significant and current problem. It does *not* establish the number of SDP renters affected, the fraction of rental listings that are fraudulent, or the share preventable by SafeListing. Figures are police-reported statistics conveyed by a news report; a directly accessible PDRM statistical table for this broader category was not located in this review.

### Property-agent impersonation (different category)

In a 19 January 2026 police-website post summarising press reporting, figures attributed to the CCID director described *property-agent-related scams*: 10 cases/RM240,287 losses in 2023; 18 cases/RM1.14 million in 2024; and 24 cases/RM5.1 million in 2025. The alert identified Facebook Marketplace as a common venue for bogus agent impersonation. [S2]

**Important interpretation guardrail:** These 24 property-agent-scam cases are a **different reported category** from the 922 rental-fraud cases. Do not add the totals, compare their average loss per case as if definitions match, or imply either figure covers all Malaysian property scams. The unusually higher loss figure in the smaller category suggests different case composition/reporting definitions. We have not resolved their overlap.

## 2.3 Scale and affected residents

The Department of Statistics Malaysia (DOSM) reported that **19.7% of households of Malaysian citizens occupied rented living quarters in 2024**, rising to **23.1% among urban households in that survey**. At national level, 78.0% occupied owned living quarters and 2.4% occupied quarters; percentages are rounded. These are **housing-tenure proportions, not annual rental transaction rates**. [S3]

This supports the statement that renting concerns a substantial share of Malaysian-citizen households, especially in urban areas. It does **not** estimate the number of rental *transactions per year*, the total market addressable by SafeListing, how many renters use digital listing platforms, or the share living in SDP developments. Any numerical total addressable market estimate must use separate appropriate evidence and explicit assumptions.

## 2.4 At-risk transaction stages

The following is a *workflow analysis grounded in described police methods*; it is not a measured sequence occurring in every case:

1. **Discovery:** A prospect sees a listing on social media, a marketplace or a messaging channel.
2. **Representation:** The advertiser asserts they are an owner or authorised agent, possibly using convincing photos or borrowed identities.
3. **Terms negotiation:** Rent, fees, contact channels or instructions are discussed; the prospect may have no issuer-controlled source to check against.
4. **Payment pressure:** A reservation deposit or other advance payment is requested before verification, sometimes accompanied by urgency.
5. **Potential harm:** Money may be lost and sensitive personal information may be disclosed.

The police recommend measures such as viewings, verifying documentation/registered agents and avoiding payment under pressure. Existing precautions remain necessary even after any SafeListing result. [S1][S4]

## 2.5 Present-day verification and its limits

PropertyGuru's published safety guidance recommends checking registered estate firms and agents through LPPEH's official search service, verifying agent contact details, and using appropriate verified agency payment channels instead of sending money to individuals. [S4]

This is an existing, useful layer of protection. **A valid registered-agent identity alone logically does not prove that the particular agent has the current property owner's authorisation for that particular unit, that advertised price, or specified payment instructions.** The precise degree to which existing providers already offer property-specific verification is reserved for Section 03.

Do not suggest that SafeListing replaces LPPEH checks, a property viewing, tenancy documentation, independent payment verification or professional due diligence.

## 2.6 Why the SDP App is a plausible starting point

SDP publicly describes its existing app as including property-specific dashboards, e-documents, key-handover support, defect records and property-member invitations. Its official FAQ explicitly describes limited tenant account access alongside owners and family members. [S5]

These functions provide a **potential starting point** for property-linked permissions and selectively disclosed evidence. However, SDP app data are not confirmed as a live legal ownership register, and the app's coverage of secondary-market transactions, resale ownership changes, delegated authority and rental agents is not established by these sources. **Current letting authority requires its own validated verification process.**

That process may be the product's greatest deployment dependency. SDP participation, data access and real owner/agent integrations have not been secured.

## 2.7 Three problems addressed and evidence strength

| Problem | Existing evidence | Current strength | Unresolved assumption |
| --- | --- | --- | --- |
| Rental fraud / impersonated agents cause financial harm | Police figures reported by *The Star*; PDRM Jan 19 alert [S1][S2] | **Strong** evidence the problem exists | Rate affecting SDP developments; losses potentially avoidable by this product |
| Advertised details and later payment requests can be hard to authenticate independently | Police-described fraud methods; LPPEH/PropertyGuru verification guidance [S1][S4] | **Moderate** evidence of workflow vulnerability | Actual frequency of material price/contact/payment discrepancies and ability to prevent them |
| Tenants value selected evidence-linked property condition history | Logical consumer-value hypothesis; SDP already has some defect/document workflows [S5] | **Preliminary hypothesis** | Which facts renters want; owners' willingness and right to disclose; factual accuracy and availability |

**Design implication:** Lead the proposal with documented rental fraud and independent listing authority. Present HomeLedger Lite as a complementary, testable housing-transparency benefit; do not treat its impact as already proven.

## 2.8 Whom to interview / validate rapidly

- **Prospective/recent renters (5–8 rapid interviews):** Ask about *actual past steps* in verifying landlords and agents, situations when they were asked for deposits, use of external listings, and which current processes were difficult. Avoid leading questions about whether they “like SafeListing.”
- **Owners/authorised agents (3–5):** Can they prove current authority, would they issue and revoke listing-specific credentials, and what terms could they authorise reliably?
- **SDP/property-management representative (if accessible):** What ownership/occupancy data are maintained, what verification authority exists, and what information may legally be shared?
- **HomeLedger-specific test:** Ask tenants to rank the value of five example fact types; ask owners which records exist and what can be disclosed without third-party personal data.

These interview counts are practical *proposal-stage discovery targets*, not scientifically representative sampling.

## 2.9 Proposed outcome measures — not achieved results

Impact and sustainability must be measured after a pilot; no “fraud prevented” claims should be invented.

**Trust and harm reduction proxies**
- Percentage of test listings correctly marked active, expired, revoked or unmatched.
- Precision/recall of AI extraction of price, contact channel, fee and agent details against labeled test messages.
- False acceptance rate for modified advertisements and borrowed credentials in a defined adversarial test set.
- Time required for a tenant to check a listing through the authentic domain.
- User comprehension: whether tenants understand exactly what was *verified*, *unverified* and *outside system scope*.

**Adoption and property transparency**
- Percentage of eligible, verified owners willing to issue an authorisation.
- Fraction of participating listings with currently valid credentials.
- Frequency of tenants verifying *before* payment discussions or deposits.
- Percentage of displayed HomeLedger Lite facts with traceable provenance and correct disclosure permissions.

Actual reduction in scam losses would require longer-term evaluation and would be difficult to attribute causally without appropriate comparison data.

## 2.10 Bounded statement for the pitch

> **Malaysia's rental-fraud problem is documented, including 922 police-reported cases in 2025. SafeListing proposes to reduce a specific verification gap: giving tenants an independent, current check of who is authorised to advertise a specified home and what claims have been authenticated. It does not certify a transaction as safe or replace existing legal and financial checks.**

This wording is intentionally limited to what the evidence and product mechanism can support.

## 2.11 Open questions for later sections

- **Section 03:** Which Malaysian portals or developers already issue *owner-authorised, listing-specific, independently verifiable* rental credentials? Compare on exact capabilities, not marketing terminology.
- **Section 05/06:** Who validates a person's current authority to let, including resales, co-owners, corporate owners and delegated agents? What are the response semantics if authority cannot be checked?
- **Section 07:** Which existing SDP App data and interfaces are actually available under an approved integration?
- **Section 08:** What baseline and study design could credibly measure behaviour change and reduced risk?
- **Section 09:** Will agencies or owners pay for credential administration? Who bears verification costs?

## Sources and evidence notes

[S1] *The Star*, 12 Jan 2026, “Rental fraud spikes 400% amid rise in identity theft.” Quotes Bukit Aman CCID director on 184/307/922 rental fraud cases and approximately RM2.5m 2025 losses.  
https://www.thestar.com.my/news/nation/2026/01/12/rental-fraud-spikes-400-amid-rise-in-identity-theft

[S2] Royal Malaysia Police (PDRM) website, 19 Jan 2026, “Scam alert: A market for property scams.” Reposts/summarises a press report quoting the CCID director; includes property-agent-related scam statistics and a Facebook Marketplace modus operandi. This is an official police-hosted republication, not a separate raw statistical database.  
https://www.rmp.gov.my/news-detail/2026/01/19/besmartstayalert-letsfightscammertogether-keratan-akhbar-pilihan-scam-alert-a-market-for-property-scams

[S3] Department of Statistics Malaysia, *Basic Amenities Survey Report Malaysia, 2024*, released 24 Dec 2025. Reports 19.7% household rental occupancy in 2024.  
https://www.dosm.gov.my/portal-main/release-content/basic-amenities-survey-report-malaysia-2024
Official DOSM infographic/press-release PDF (also records urban 23.1%, and notes citizen-household base): https://www.dosm.gov.my/site/downloadrelease?id=basic-amenities-survey-report-malaysia-2024&lang=English

[S4] PropertyGuru Malaysia, “Advisory: Precautionary Tips for Renting or Buying Property,” updated Nov 28 2024. LPPEH firm and agent checks and payment warnings.  
https://www.propertyguru.com.my/property-guides/advisory-precautionary-tips-for-renting-or-buying-property-75964

[S5] Sime Darby Property, *SDP App* official information and FAQ. Lists owner property dashboard, e-documents, defect handling and invited tenant access.  
https://www.simedarbyproperty.com/app/faq.html

## Independent validation / editorial audit

- **Verified (factual):** 922 cases in 2025 as police statistic quoted by *The Star*; 24 property-agent-related cases in 2025 reported in an official police-hosted press summary; DOSM 19.7% rented citizen-household living quarters nationally (23.1% urban) in 2024; PropertyGuru LPPEH verification guidance; SDP App property dashboard and invited-tenant functionality.
- **Careful category separation:** Rental fraud case counts and property-agent-related case counts are not combined. No claim of known population-wide fraud risk or SDP-specific prevalence.
- **Design hypotheses:** Exact listing-level information gap, owner adoption, tenants' demand for HomeLedger facts, reduction in fraud, willingness to pay and SDP current ownership verification are explicitly unproven.
- **Trust boundary:** A cryptographic credential can establish integrity of a trusted issuer's statement, not that the issuer's underlying ownership evidence is correct or that a transfer recipient is legitimate.
- **Re-validation changes:** Clarified the citizen-household sampling denominator and urban comparison; revised PDRM source description to reflect its press-summary provenance; strengthened the description of the 19.7% statistic as a housing-tenure measure, not an annual transaction rate.
- **Result:** PASS for Section 02 problem/evidence accuracy after these precision corrections, with open assumptions carried to Sections 03, 06, 07 and 08. Draft may be re-evaluated if new evidence changes claims.

---

# 03. Existing Solutions, Competitive Landscape & Differentiation

**Project:** SafeListing — AI-Powered Rental Trust & Property Passport  
**Scope:** Competitive capabilities, validated prior art, proposed distinctive mechanism, vulnerabilities and claim boundaries.  
**Research date:** 21 October 2026  
**Status:** Research-validated with important innovation caveats. Suitable for master documentation, not proof of first-in-market uniqueness.

## 3.1 Summary decision

**Verdict: CONDITIONAL PASS for differentiation; no claim of market-first originality.** SafeListing competes in a mature field. Malaysian property platforms already verify agent identities, listing and landlord records, and support digital tenancy workflows. International digital property passports already store provenance-labelled maintenance histories. Cryptographically verifiable credentials and revocation are established standards, not newly invented technologies. [C1][C2][C3][C4][C5]

The potential competition-worthy gap is more specific: **an issuer-authorised, unit-and-representative-specific rental permission that a prospective tenant can independently verify even when the listing was encountered on an external platform; AI then compares claims in a forwarded advertisement or chat with that authoritative permission, and a small property-history panel attaches clearly labelled evidence.** This is the **proposed integrated workflow**, not yet proven unique globally or commercially viable.

We must avoid positioning the product as a generic "verified listings marketplace", an "AI scam detector", or a novel property passport. Its value depends on real issuer authority, accurate claim binding, usability across channels, and resistant verification against copied or modified messages.

## 3.2 Competitive categories and validated examples

### Competitor A: PropertyGuru Malaysia — verified agents

PropertyGuru's published **Verified Agent** service checks identity through eKYC, agent/negotiator registration (REN/REA/PEA) with LPPEH, and phone number matching or OTP. Buyers/renters may filter for verified agents. This is more thorough than a simple user-uploaded badge. [C1]

**What it demonstrates:** agent identity and professional registration verification is commercially established. A "verified agent" is not a SafeListing differentiator.

**What remains a question:** public product materials reviewed here do not establish that an agent-verification badge alone proves the agent has the **current owner's permission** to advertise **each specific rental unit under exact terms**, particularly if the ad is forwarded on a different platform. This is an evidence limitation, not proof that PropertyGuru lacks a private or future capability.

### Competitor B: PropertyGuru Malaysia — Official Listings

PropertyGuru's **Official Listings Badge** confirms selected **developer-backed listing information** including developer-confirmed data, prices, unit-type availability and periodic review. The publicly described badge relates to trusted developer/project listings; it is not accurate to assert that PropertyGuru verifies only an agent's identity. [C2]

**Overlap:** verified listing details, authenticated issuer-provided facts and freshness. SafeListing must therefore avoid claiming to be the first to verify price or unit information.

**Differentiation hypothesis:** a **resale/privately let, owner-authorised rental record**, open for direct tenant verification across advertising and messaging channels, is a different intended scope than developer-backed project-listing badges. This difference must be verified against live competing rental services.

### Competitor C: SPEEDHOME Malaysia — verified landlords and end-to-end records

SPEEDHOME publicly offers **verified listings and verified landlord identity**, with tenant screening, digital tenancy agreements, payments and documented repair/move-out records. Its own consumer security guidance emphasises staying inside its **official platform flow** and warns that logos, forwarded screenshots or outside WhatsApp/payment instructions are insufficient. [C3][C4]

This is the **closest competitive challenge to SafeListing's trust proposition**, not a weak competitor to dismiss. A tenant who rents wholly within SPEEDHOME can already receive more protection than a verification badge alone: platform-managed communication and agreement/payment evidence.

**Possible distinction:** SafeListing does **not** aim to replace SPEEDHOME's marketplace or payments. It proposes an independently accessible, property-level authorisation and terms-check mechanism usable when the advertisement is seen on social media or another portal, without forcing tenants to move the full transaction into SafeListing. However, cross-platform checking can never match all the guarantees of a fully controlled end-to-end transaction, and has its own phishing weaknesses.

### Competitor D: Digital home/property passports — existing functionality

Tradelynx's **HomeLynx Passport** documents maintenance and property improvements, uses evidence grades, lets owners control sharing and can issue dated/verifiable information. Other property-passport products offer property-linked document records and selective owner-authorised sharing. [C5][C6]

**Implication:** HomeLedger Lite does **not** represent an original category, nor does grading owner statements against documents by itself establish novelty. Its value inside SafeListing is contextual: the verified prospective tenant can check *selected* documented facts about the **same rental unit** in the same decision flow.

**Known limitation:** a selective history cannot prove the absence of past defects; owner withholding or missing documents can bias the presentation. Every history card must say what evidence is present, its source, and where information is unavailable. Do not make "verified condition" or "certified safe home" claims.

### Technology prior art: W3C Verifiable Credentials

The World Wide Web Consortium's **Verifiable Credentials Data Model 2.0** already specifies issuer/holder/verifier relationships, tamper-evident credential data, evidence references and credential status/revocation. Importantly, the standard explicitly says verification of a credential **does not itself validate the truth of the underlying claims**. [C7]

**Implication:** digital signatures, QR links and revocation are not the invention. They are well-established technological enablers. Differentiation would have to be an accountable, usable **property-specific issuing and verification workflow**.

### Existing SDP App — integration rather than replacement

The official SDP App already supports property-linked purchaser/owner dashboards, e-documents, defect submission and monitoring, key-handover appointments, and invited tenant accounts with limited property access. [C8]

This supports the possibility of an adjacent rental-trust feature. However, the public FAQ does not prove SDP maintains live ownership/tenancy authority data for resold units or can give external public verifiers access. The competition prototype must not claim production SDP integration.

## 3.3 Claim-by-claim comparison (published capabilities only)

Legend: **Published** = specifically described on the cited public product page; **Not established** = not demonstrated by those pages, **not** a claim that the provider lacks it. **Proposed** = SafeListing design, not an existing implementation.

| Capability | PropertyGuru | SPEEDHOME | HomeLynx / property passports | SafeListing proposal |
| --- | --- | --- | --- | --- |
| Verified professional agent identity | **Published** [C1] | Not established in reviewed sources | Not central | Complementary, not replacement |
| Developer-confirmed listing prices/details | **Published**, selected official listings [C2] | Verified listing records published [C3] | Not central | Bind agreed rental claims to issuer record |
| Verified landlord/owner in controlled rental flow | Not established in cited public pages | **Published** [C3][C4] | Property/control validation varies by provider [C6] | Require current letting-authority verification |
| Tenant checks listing in provider-controlled experience | **Published** [C1][C2] | **Published** [C4] | Property-record sharing [C5] | Public, authentic, independent verification page |
| Owner-issued permission tied to particular rental unit and agent, checkable across external adverts | **Not established** | **Not established** | Not central in cited materials | **Proposed core**; differentiate and validate |
| AI checks forwarded screenshot/message claims against credential-bound terms | **Not established** | **Not established** | Not central in cited materials | **Proposed TermsGuard** |
| Provenance-labelled maintenance/repair records | Not established in cited sources | Platform repair history published [C3] | **Published** [C5][C6] | **Proposed HomeLedger Lite** |
| Expiry/revocation of listing-specific permissions | Not established for this exact use in cited sources | Provider listing control exists; external record protocol not established | Property-share revocation published [C5] | **Proposed ListingAuth control** |

**Do not convert a "Not established" cell into a red cross when making slides.** Doing so would falsely present an absence of evidence as a verified product limitation.

## 3.4 What the defensible innovation statement should be

> **SafeListing proposes a portable rental-authorisation check, backed by an issuer that has verified current letting authority. A tenant can verify the specific unit, approved representative, current permitted terms and credential status from an authentic source, even if the advertisement was discovered on Facebook, WhatsApp or another platform. AI compares third-party advertising claims with the current record, while HomeLedger Lite supplies clearly provenance-labelled property facts.**

This is a **design hypothesis**. We have not proven it is the first or only system of its kind. Nor have we secured an issuer capable of validating current letting authority. The intended differentiation is the **workflow, governance and combined use**, not a new AI algorithm or cryptographic primitive.

## 3.5 Why this fits SDP better than a new marketplace

1. **Property relationship:** The SDP App already links purchaser accounts to properties and controls household/tenant access; that could be a starting point for an *additional*, independent authority-checking process. [C8]
2. **Life-cycle extension:** The proposed feature would continue resident engagement after handover and repair-related use, without replacing the existing sales/property-management app.
3. **Issuer/partner role:** SDP could potentially operate or sponsor a credential-issuing trust service for eligible properties in cooperation with parties able to validate current letting authority. This is proposed, not a stated SDP commitment.
4. **Platform neutrality:** An authenticated verification page could serve ads posted elsewhere, rather than requiring SDP to compete with established rental marketplaces for search traffic.
5. **Scale:** A repeatable issuer schema could theoretically extend to more developments and licensed integration partners, subject to legal authority and commercial agreements.

The **key dependency** remains that SDP's historical purchaser database is not an authoritative registry of current rental rights. An owner account should never automatically receive unrestricted issuance rights merely because the property appears in the SDP App.

## 3.6 Adversarial differentiation stress test

| Attack or market weakness | Risk to SafeListing | Required response |
| --- | --- | --- |
| Agent is verified but not mandated by current lessor | Fake legitimacy | Verify *current* property-specific authority; check scope and representative |
| Scammer copies legitimate listing screenshot/QR | Tenant trusts copied badge | Show current status on authentic domain; teach users to navigate there independently; show bound agent/contact/terms |
| Valid unit and agent, but scammer supplies different bank details | Valid credential misused | Explicitly indicate whether payment recipient/account is verified; warn that otherwise payment is unverified; avoid blanket green 'safe' outcome |
| Listing is modified after issuance | Outdated approval | Version records; expire/revoke older credentials; require refreshed consent for material changes |
| Resale, co-ownership, corporate/representative authority | Wrong issuer | Formal proof/revalidation and escalation to human checker, not AI guessing |
| Credential is cryptographically valid but based on false evidence | False confidence | Separate signature validity from issuer assurance level; no claim of ownership based solely on signed record |
| HomeLedger omits an important defect | Selectively misleading information | Include source provenance, record dates and explicit incompleteness/owner-selection notices |
| AI OCR misreads advertisement terms | False warning or false reassurance | Show extracted source text; require confirmation; route ambiguous cases to 'unable to verify' |
| No owner/adoption, or user refuses to verify | Cold start | Tenant verification should be free, fast and account-free; issuing should fit existing owner workflows |
| Competitor adds portable verification | Easy feature replication | Build credibility around trusted issuers, integrations, auditability and cross-platform usability; no claim of absolute moat |

## 3.7 Recommended MVP proof, to strengthen originality

1. **Issue:** A fictional test owner is marked as verified by a clearly simulated authority-check process; they authorise *a specific unit and agent* and bind rent, public contact channels and any explicitly approved payment-related instructions.
2. **Publish:** The credential is signed, has a verifiable issuer identity, expiry/version and current status. Generate a shareable verification identifier.
3. **Verify:** A tenant navigates to the authentic verification service and checks a sample Facebook/WhatsApp listing without requiring platform membership.
4. **Attack:** Demonstrate a forged/altered rent or phone number; TermsGuard extracts fields and flags contradictory or unverified values with evidence links.
5. **Revoke:** Change authorisation to revoked and show the same link no longer represents a currently authorised listing.
6. **History:** Present three carefully labelled HomeLedger facts, including one independent document, one owner-declared fact and one unknown field. Do not imply completeness.

The demo must distinguish **simulated issuer verification** from **genuine cryptographic validity**. We can genuinely implement signing, status checks and comparison over synthetic property data, even though SDP-specific legal-owner authentication remains unresolved.

## 3.8 Unresolved competitor and product-validation questions

- Do any Malaysian platforms offer **independent, reusable owner-issued authority credentials** for listings advertised outside their own marketplaces? Public pages reviewed here did not establish an equivalent, but the search is not exhaustive; direct product inquiries would improve confidence.
- Does verifying a specific agent mandate involve legal/regulatory requirements beyond identity and proof supplied by an owner? Obtain qualified Malaysia-specific review before production.
- Who qualifies as an issuer for jointly owned, recently sold, corporate or tenanted properties? Do not assume SDP may certify these without formal checks.
- Would owners/agents issue credentials if a competing marketplace already offers verified rentals?
- Would tenants independently verify after encountering an unsolicited rental message, rather than trusting screenshots?
- How does HomeLedger Lite add decision value without creating an overstated 'property health score'?

## 3.9 Pitch-ready competitive positioning

**Avoid:** “The first app that verifies rental ads,” “only rental app with AI,” “Malaysia's first digital property passport,” “one green tick means a scam-free rental,” and “PropertyGuru verifies only agent badges.”

**Use:** “Existing platforms provide important identity and listing controls. SafeListing proposes an independent verification layer for *a specific owner's authorised rental listing across channels*, with AI-assisted claim checking and selective property evidence, complementing rather than replacing established portals.”

**Competitive outcome:** This is a credible and relatively focused **innovation hypothesis**, not yet a defensible monopoly or a guaranteed original invention. The strongest next work is solving issuer governance and demonstrating the exact cross-platform attack cases.

## 3.10 Independent validation log

**Validated directly from provider/standards pages:** PropertyGuru agent checks and Official Listings, SPEEDHOME landlord/listing verification and its controlled transaction approach, HomeLynx/Property Passport prior art, W3C credential standards, SDP App owner/tenant functions. [C1]–[C8]

**Corrections made in research:** (i) increased prior-art overlap attributed to SPEEDHOME; (ii) eliminated claims that property passports or evidence grades are new; (iii) classified crypto signing as established technology; (iv) distinguished external cross-channel claim checking from full payment safety; (v) changed unknown competitor features to “not established”, not “unavailable.”

**Open validation:** Issuer authority, live SDP access, adoption and commercial willingness, performance against realistic adversarial test cases and the complete global prior-art landscape.

**Verdict:** **PASS for an honest, bounded competitor analysis. CONDITIONAL PASS for product differentiation**, pending proof of a responsible issuer and a demonstrable cross-platform mechanism. No quantified innovation score should be asserted as earned.

## Sources

[C1] PropertyGuru Malaysia — "Introducing the Agent Verification Badge" (official); includes LPPEH and identity checks. https://www.propertyguru.com.my/property-guides/introducing-verified-agents-76540

[C2] PropertyGuru Malaysia — "Introducing the Official Listings Badge" (last updated 5 January 2026); describes developer-confirmed listing data, pricing and availability. https://www.propertyguru.com.my/property-guides/introducing-official-listing-badge-77465

[C3] SPEEDHOME — Tenant product page (official); verified listings/landlords, digital tenancy and documented repairs. https://speedhome.com/more/tenant

[C4] SPEEDHOME — "Is SPEEDHOME Legit?" (20 April 2026; updated 2 May 2026); tenant verification guidance and limits of outside-platform protection. https://speedhome.com/blog/is-speedhome-legit/

[C5] Tradelynx — HomeLynx Passport (28 August 2026); property work-history evidence grades, owner-controlled sharing and transferable record. https://www.tradelynx.co.uk/homelynx-passport

[C6] Property Passport UK — "For Owners"; digital property logbook, official register records, owner sharing. https://www.propertypassport.uk/for-owners

[C7] World Wide Web Consortium — Verifiable Credentials Data Model v2.0, W3C Recommendation, 15 May 2025; status, issuer model, evidence and interpretation limits. https://www.w3.org/TR/vc-data-model-2.0/

[C8] Sime Darby Property — SDP App official FAQ; property dashboard, e-documents, defect records and invited tenants. https://www.simedarbyproperty.com/app/faq.html