import { useState } from 'react'
import { ArrowLeft, ArrowRight, FileCheck2, ScanText, ShieldCheck } from 'lucide-react'
import MobilityDemo from './legacy/MobilityDemo'
import './safelisting.css'

const pillars = [
  { name: 'ListingAuth', icon: ShieldCheck, description: 'Issuer-reviewed, cryptographically signed, property-specific rental authorisations with expiry, amendment and revocation.' },
  { name: 'AI TermsGuard', icon: ScanText, description: 'Extract untrusted claims from advertisements, screenshots and messages. Compare them with currently authorised terms using deterministic logic.' },
  { name: 'HomeLedger Lite', icon: FileCheck2, description: 'Selected property facts with provenance labels and controlled disclosure. A focused property passport, not a complete condition certification.' },
]

export default function App() {
  const [legacy, setLegacy] = useState(false)

  function changeView(showLegacy: boolean) {
    setLegacy(showLegacy)
    window.scrollTo(0, 0)
    requestAnimationFrame(() => document.getElementById(showLegacy ? 'legacy-heading' : 'product-heading')?.focus())
  }

  if (legacy) return <>
    <div className="sl-legacy-banner">
      <div><strong id="legacy-heading" tabIndex={-1}>Legacy mobility example · SIMULATED</strong><span>This reference demo does not implement SafeListing rental verification.</span></div>
      <button onClick={() => changeView(false)}><ArrowLeft size={16} aria-hidden="true" /> Back to SafeListing</button>
    </div>
    <MobilityDemo />
  </>

  return <div className="sl-shell">
    <a className="sl-skip" href="#main">Skip to content</a>
    <header className="sl-header">
      <a className="sl-brand" href="#main" aria-label="SafeListing home"><ShieldCheck size={25} aria-hidden="true" /> SafeListing</a>
      <span className="sl-status">Prototype in progress</span>
    </header>
    <main id="main" className="sl-main">
      <div className="sl-eyebrow">PEOPLE / SAFETY &amp; SECURITY / DIGITAL LIVING</div>
      <section className="sl-intro" aria-labelledby="product-heading">
        <div className="sl-intro-copy">
          <p className="sl-overline">SafeListing</p>
          <h1 id="product-heading" tabIndex={-1}>AI-Powered Rental Trust &amp; Property Passport</h1>
          <p className="sl-summary">A proposed rental-trust extension to the SDP App ecosystem, with a separate, free, account-free tenant verification experience.</p>
          <p className="sl-context">Not a rental marketplace. No approved SDP integration.</p>
        </div>
        <aside className="sl-note" aria-label="Implementation status">
          <span className="sl-note-label">BUILD STATUS / 01</span>
          <h2>Direction approved.<br />Verification still to build.</h2>
          <p>This screen documents the product scope. Rental authorisation, claim checking and property passports are planned, not operational.</p>
          <span className="sl-note-foot">SYNTHETIC PROTOTYPE ONLY</span>
        </aside>
      </section>
      <section className="sl-pillars" aria-labelledby="pillars-heading">
        <div className="sl-section-heading"><h2 id="pillars-heading">Three pillars. One trust record.</h2><span>PROPOSED CAPABILITIES</span></div>
        <div className="sl-pillar-grid">{pillars.map(({ name, icon: Icon, description }, index) => <article className="sl-pillar" key={name}>
          <div className="sl-pillar-top"><Icon size={24} aria-hidden="true" /><span>0{index + 1}</span></div>
          <h3>{name}</h3><p>{description}</p><span className="sl-planned">Planned · not implemented</span>
        </article>)}</div>
      </section>
      <section className="sl-boundaries" aria-labelledby="boundaries-heading">
        <div><span className="sl-overline">TRUST HAS LIMITS</span><h2 id="boundaries-heading">What verification must never imply.</h2></div>
        <ul>
          <li>Properties, identities and issuer decisions in any prototype are synthetic. Current legal letting authority is not actually verified.</li>
          <li>A signature proves the integrity of an issuer’s statement, not legal ownership. A valid listing record does not prove that a transaction or bank payee is safe.</li>
          <li>AI assists with extracting untrusted claims; deterministic logic evaluates them against trusted records.</li>
          <li>HomeLedger Lite is not a complete property-condition certification. No production SDP API or land-registry integration exists.</li>
          <li>Basic tenant verification must remain independently accessible and free. StopLoss997 is future roadmap only.</li>
        </ul>
      </section>
      <section className="sl-reference" aria-labelledby="reference-heading">
        <div><span className="sl-overline">ENGINEERING REFERENCE</span><h2 id="reference-heading">The original mobility demo</h2><p>The fictional routing and operator simulator is preserved as a legacy example. It is separate from SafeListing’s planned features.</p></div>
        <button onClick={() => changeView(true)}>Open legacy mobility example <ArrowRight size={17} aria-hidden="true" /></button>
      </section>
    </main>
    <footer className="sl-footer"><span>SafeListing · Sime Darby Property University Hackathon 2026</span><span>Proposed product · no endorsement claimed</span></footer>
  </div>
}
