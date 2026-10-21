import { useMemo, useState } from 'react'
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  Compass,
  FileText,
  GitBranch,
  LayoutDashboard,
  Map,
  MapPin,
  Menu,
  Navigation,
  RotateCcw,
  Route,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Trees,
  Waypoints,
  X,
} from 'lucide-react'
import { edges, findRoute, nodes, type NodeId, type Preference } from '../lib/routing'

type Section = 'studio' | 'operations' | 'research'
const preferences: { id: Preference; label: string; description: string }[] = [
  { id: 'direct', label: 'Shortest', description: 'Minimum walking distance' },
  { id: 'accessible', label: 'Accessible', description: 'Avoid known barriers' },
  { id: 'cooler', label: 'Comfort', description: 'Prefer shaded links' },
]
const labels = Object.fromEntries(nodes.map((node) => [node.id, node.label])) as Record<NodeId, string>

function Brand() {
  return (
    <div className="brand">
      <div className="brand-mark"><Waypoints size={24} strokeWidth={2.3} /></div>
      <div><strong>SafeListing</strong><span>LEGACY MOBILITY EXAMPLE</span></div>
    </div>
  )
}

function NetworkMap({ routeNodes, selectedEnd, onSelectEnd, repaired }: {
  routeNodes: NodeId[]
  selectedEnd: NodeId
  onSelectEnd: (id: NodeId) => void
  repaired: boolean
}) {
  const nodeById = Object.fromEntries(nodes.map((node) => [node.id, node]))
  const path = routeNodes.map((id) => `${nodeById[id].x},${nodeById[id].y}`).join(' ')
  return (
    <div className="map-container">
      <div className="map-floating-title"><div className="pulse-indicator" /> FICTIONAL PILOT ZONE <span>·</span> INTERACTIVE DEMO</div>
      <svg className="township-map" viewBox="0 0 900 540" role="img" aria-label="Interactive demonstration network showing shortest, accessible and shaded pedestrian routes">
        <defs>
          <pattern id="grid-lines" width="35" height="35" patternUnits="userSpaceOnUse"><path d="M 35 0 L 0 0 0 35" fill="none" stroke="#dbe6df" strokeWidth="1" /></pattern>
          <linearGradient id="route-grad" x1="0" x2="1" y1="0" y2="0"><stop stopColor="#0b8174" /><stop offset="1" stopColor="#58b95a" /></linearGradient>
          <filter id="shadow"><feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0d2d29" floodOpacity=".17" /></filter>
        </defs>
        <rect x="0" y="0" width="900" height="540" fill="#eef4ed" />
        <rect x="0" y="0" width="900" height="540" fill="url(#grid-lines)" />
        <path d="M0 438 Q166 475 284 460 T580 465 T900 453 L900 540 L0 540Z" fill="#d5e8d1" />
        <path d="M366 20 Q385 92 388 165 Q405 215 394 265 L370 313 Q388 368 366 450 L536 450 Q566 370 568 305 Q586 200 540 90 L540 20Z" fill="#c3dfc3" opacity=".65" />
        <path d="M0 67 Q220 53 330 95 T900 48" stroke="#d5e1d8" strokeWidth="34" fill="none" />
        <path d="M0 67 Q220 53 330 95 T900 48" stroke="#faf9f1" strokeWidth="25" fill="none" />
        <path d="M0 470 Q340 490 900 470" stroke="#d5e1d8" strokeWidth="31" fill="none" />
        <path d="M0 470 Q340 490 900 470" stroke="#faf9f1" strokeWidth="22" fill="none" />
        {[
          [40, 137, 120, 98], [44, 270, 92, 67], [157, 144, 88, 78],
          [569, 70, 97, 81], [681, 277, 80, 74], [561, 378, 95, 81],
          [345, 223, 72, 56], [720, 170, 110, 52],
        ].map(([x,y,w,h], i) => <rect key={i} x={x} y={y} width={w} height={h} rx="11" fill="#e1e9db" stroke="#d0ddcf" strokeWidth="2" />)}
        {Array.from({ length: 26 }, (_, i) => {
          const x = (i * 167 + 61) % 890
          const y = (i * 97 + 48) % 540
          return <g key={i}><circle cx={x} cy={y} r="13" fill="#aad29f" opacity=".82"/><circle cx={x + 3} cy={y - 4} r="7" fill="#87bc82" opacity=".65"/></g>
        })}
        {edges.map((edge) => {
          const a = nodeById[edge.from], b = nodeById[edge.to]
          return <g key={edge.id}>
            <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#fafdf8" strokeWidth="23" strokeLinecap="round" />
            <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#b5c4bc" strokeWidth="2" strokeDasharray="5 8" strokeLinecap="round" />
          </g>
        })}
        <polyline key={path} points={path} fill="none" stroke="#f8fdf8" strokeWidth="22" strokeLinejoin="round" strokeLinecap="round" />
        <polyline key={`line-${path}`} className="animated-path" points={path} fill="none" stroke="url(#route-grad)" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
        {edges.filter(e => e.inaccessible && !repaired).map(edge => {
          const a = nodeById[edge.from], b = nodeById[edge.to]
          const midX = (a.x+b.x)/2, midY = (a.y+b.y)/2
          return <g key={`barrier-${edge.id}`} transform={`translate(${midX} ${midY})`}>
            <circle r="16" fill="#fff5e5" stroke="#d78554" strokeWidth="2" /><text y="6" fontSize="17" textAnchor="middle" fontWeight="bold" fill="#aa5630">!</text>
          </g>
        })}
        {nodes.map(node => {
          const isEnd = node.id === selectedEnd
          return <g key={node.id} className="map-node" role="button" tabIndex={0} onClick={() => onSelectEnd(node.id)} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onSelectEnd(node.id) } }} aria-label={`Set destination to ${node.label}`}>
            <circle cx={node.x} cy={node.y} r={isEnd ? 19 : 13} fill={isEnd ? '#0a554f' : '#fff'} stroke={isEnd ? '#0a554f' : '#638b7a'} strokeWidth="3" filter="url(#shadow)" />
            <circle cx={node.x} cy={node.y} r="5" fill={isEnd ? '#dcf9a2' : '#378c72'} />
            <g transform={`translate(${node.x} ${node.y + 28})`}>
              <rect x={-Math.max(52, node.label.length * 3.55 + 12)} y="0" width={Math.max(104, node.label.length * 7.1 + 24)} height="29" rx="9" fill={isEnd ? '#153d37' : '#fff'} opacity=".96" filter="url(#shadow)" />
              <text textAnchor="middle" y="19" fontSize="11.5" fontWeight="650" fill={isEnd ? '#f6fae4' : '#27493e'}>{node.label}</text>
            </g>
          </g>
        })}
      </svg>
      <div className="map-scale">SIMULATED NETWORK <span>•</span> NOT GPS NAVIGATION</div>
      <div className="map-legend"><span className="legend-line"/> Selected route <span className="legend-barrier">!</span> Unverified barrier</div>
    </div>
  )
}

function MobilityDemo() {
  const [section, setSection] = useState<Section>('studio')
  const [mobileNav, setMobileNav] = useState(false)
  const [origin, setOrigin] = useState<NodeId>('home')
  const [destination, setDestination] = useState<NodeId>('playground')
  const [preference, setPreference] = useState<Preference>('accessible')
  const [resolved, setResolved] = useState(false)
  const [notice, setNotice] = useState('')
  const result = useMemo(() => findRoute(origin, destination, preference, resolved ? new Set(['e2']) : new Set()), [origin, destination, preference, resolved])
  const direct = useMemo(() => findRoute(origin, destination, 'direct'), [origin, destination])
  const barrierNote = resolved ? 'Sample kerb barrier marked resolved' : 'Sample missing kerb ramp — unresolved'
  const sections = [
    { id: 'studio' as const, name: 'Prototype studio', icon: <Compass size={18}/> },
    { id: 'operations' as const, name: 'Operator workspace', icon: <LayoutDashboard size={18}/> },
    { id: 'research' as const, name: 'Research & handoff', icon: <FileText size={18}/> },
  ]
  function exportScenario() {
    const text = `PEOPLE prototype demo (fictional data)\n${labels[origin]} -> ${labels[destination]}\nPreference: ${preference}\nSimulated barrier: ${resolved ? 'resolved' : 'unresolved'}\nSelected path: ${result?.nodes.map(id => labels[id]).join(' > ') || 'not available'}\nDistance: ${result?.metres ?? 'N/A'} m\nNo real-world data or measured impact claimed.`
    if (navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(text).then(() => setNotice('Scenario copied to clipboard')).catch(() => setNotice('Clipboard unavailable in this browser'))
    } else setNotice('Clipboard unavailable in this browser')
  }
  return (
    <div className="app-frame">
      <aside className={`sidebar ${mobileNav ? 'visible' : ''}`}>
        <Brand />
        <div className="sidebar-label">WORKSPACE</div>
        <nav aria-label="Main navigation">
          {sections.map(item => <button className={`nav-link ${section === item.id ? 'active' : ''}`} key={item.id} onClick={() => { setSection(item.id); setMobileNav(false) }}>
            {item.icon}<span>{item.name}</span>{section === item.id && <span className="nav-active-dot" />}
          </button>)}
        </nav>
        <div className="sidebar-divider" />
        <div className="sidebar-label">FOUNDATION</div>
        <div className="sidebar-small"><GitBranch size={17}/> Shared agent context</div>
        <div className="sidebar-small"><ShieldCheck size={17}/> Evidence-first demo</div>
        <div className="sidebar-bottom">
          <div className="build-label"><span className="build-dot"/> LEGACY REFERENCE</div>
          <p>Reference only. This fictional mobility demo does not implement rental verification.</p>
          <span className="version">v0.1 · Preparation stage</span>
        </div>
      </aside>
      {mobileNav && <div className="mobile-overlay" onClick={() => setMobileNav(false)}/>}
      <main className="main-content">
        <header className="topbar">
          <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMobileNav(v => !v)}>{mobileNav ? <X size={21}/> : <Menu size={21}/>}</button>
          <div className="breadcrumb">SafeListing <span>/</span> <b>Legacy mobility example</b></div>
          <div className="top-right"><div className="top-status"><span/> LEGACY · SIMULATED</div><button className="share-button" onClick={exportScenario}>Copy scenario <ArrowUpRight size={15}/></button></div>
        </header>
        <div className="page">
          {notice && <div className="toast" role="status" onClick={() => setNotice('')}><Check size={17}/>{notice}<X size={14}/></div>}
          <div className="eyebrow"><span className="eyebrow-dot"/> SIME DARBY PROPERTY UNIVERSITY HACKATHON <span className="year-tag">2026</span></div>
          <div className="hero-grid">
            <div>
              <h1>{section === 'studio' ? <>Designing tomorrow, <em>for people.</em></> : section === 'operations' ? <>From observation <em>to action.</em></> : <>Ground the idea <em>in evidence.</em></>}</h1>
              <p className="hero-copy">{section === 'studio' ? 'Legacy mobility reference preserved for engineering continuity. This fictional routing example is separate from the planned SafeListing rental-trust product.' : section === 'operations' ? 'A sample operator decision loop: review an obstacle, change its state, and see how the demonstration route changes.' : 'Two independent research reports, one shared implementation contract, and a clear boundary between verified facts and demonstration data.'}</p>
            </div>
            <div className="hero-aside"><div className="hero-aside-icon"><Sparkles size={21}/></div><div className="hero-aside-heading">Prototype first. Prove next.</div><div className="hero-aside-text">Mechanism + technology enabler, built as a single testable story.</div><div className="hero-aside-tag"><Activity size={14}/> COMPETITION READY WORKFLOW</div></div>
          </div>
          {section === 'studio' && <>
            <div className="stat-grid">
              <div className="stat"><div className="stat-icon"><Waypoints size={18}/></div><span>Pilot dataset</span><strong>Synthetic</strong><small>Replace with validated Elmina data</small></div>
              <div className="stat"><div className="stat-icon"><MapPin size={18}/></div><span>Network nodes</span><strong>{nodes.length.toString().padStart(2, '0')}</strong><small>Interactive example locations</small></div>
              <div className="stat"><div className="stat-icon"><Route size={18}/></div><span>Routing strategies</span><strong>03</strong><small>Direct · Accessible · Comfort</small></div>
              <div className="stat"><div className="stat-icon"><ShieldCheck size={18}/></div><span>System status</span><strong>Prototype</strong><small>No production safety claims</small></div>
            </div>
            <div className="section-heading"><div><div className="section-kicker">LIVE EXPERIENCE</div><h2>Journey studio</h2></div><div className="section-sub"><SlidersHorizontal size={16}/> Configure and compare routes</div></div>
            <div className="studio-layout">
              <div className="control-card">
                <div className="control-heading"><Navigation size={18}/><span>Journey settings</span></div>
                <p>Choose two example places, then adjust how the routing engine evaluates the network.</p>
                <label className="form-label" htmlFor="origin">STARTING POINT</label><div className="select-wrapper"><select id="origin" value={origin} onChange={e => setOrigin(e.target.value as NodeId)}>{nodes.filter(n => n.type === 'place').map(n => <option key={n.id} value={n.id}>{n.label}</option>)}</select><ChevronDown size={16}/></div>
                <label className="form-label" htmlFor="destination">DESTINATION</label><div className="select-wrapper"><select id="destination" value={destination} onChange={e => setDestination(e.target.value as NodeId)}>{nodes.filter(n => n.type === 'place').map(n => <option key={n.id} value={n.id}>{n.label}</option>)}</select><ChevronDown size={16}/></div>
                <div className="form-label preference-label">ROUTE PRIORITY</div>
                <div className="priority-options" role="radiogroup" aria-label="Route priority">{preferences.map(item => <button key={item.id} className={`priority-option ${preference === item.id ? 'selected' : ''}`} role="radio" aria-checked={preference === item.id} onClick={() => setPreference(item.id)}><span className="radio-ring"/><span><strong>{item.label}</strong><small>{item.description}</small></span></button>)}</div>
                <div className="control-footnote"><CircleHelp size={16}/> All distances and shade values are illustrative fixtures, not field measurements.</div>
              </div>
              <div className="map-card">
                <div className="map-card-top"><div><span className="map-eyebrow">INTERACTIVE ROUTE PREVIEW</span><strong>{labels[origin]} <ArrowRight size={17}/> {labels[destination]}</strong></div><span className="map-feature"><Map size={15}/> Demo graph</span></div>
                <NetworkMap routeNodes={result?.nodes ?? []} selectedEnd={destination} onSelectEnd={setDestination} repaired={resolved} />
                <div className="metrics-row"><div><small>SELECTED DISTANCE</small><strong>{result ? result.metres.toLocaleString() + ' m' : 'No route'}</strong></div><div><small>ESTIMATED WALK</small><strong>{result ? result.minutes.toFixed(1) + ' min' : '—'}</strong></div><div><small>ILLUSTRATIVE SHADE</small><strong>{result ? Math.round(result.shade * 100) + '%' : '—'}</strong></div><div className="metric-emphasis"><small>VS. SHORTEST</small><strong>{result && direct ? `${result.metres - direct.metres >= 0 ? '+' : ''}${result.metres - direct.metres} m` : '—'}</strong></div></div>
              </div>
            </div>
            <div className="info-band"><div className="info-band-icon"><ClipboardCheck size={20}/></div><div><strong>A working mechanism, not a claimed field result</strong><p>Change the priority or click destinations on the map. The route is recomputed by a real graph algorithm. The map and attributes are deliberately fictional until a pilot corridor is audited.</p></div><button onClick={() => setSection('operations')}>Operator view <ArrowRight size={16}/></button></div>
          </>}
          {section === 'operations' && <>
            <div className="operator-grid">
              <div className="operator-main"><div className="section-kicker">REMEDIATION SIMULATOR</div><h2>One barrier. Connected consequences.</h2><p className="operator-subtext">This is a sample barrier on the Town Square–Central Park link. The operator status changes the graph's accessibility constraint, so the resident path updates immediately.</p>
                <div className="ticket"><div className="ticket-header"><span className="ticket-id">DEMO-001</span><span className={`ticket-status ${resolved ? 'done' : ''}`}>{resolved ? 'SIMULATED RESOLVED' : 'SIMULATED OPEN'}</span></div><div className="ticket-title">Missing kerb ramp at walkway connection</div><div className="ticket-desc">Location: Town Square → Central Park · Source: synthetic demonstration fixture</div><div className="ticket-meta"><span><MapPin size={15}/> Route edge e2</span><span><ShieldCheck size={15}/> Human validation required</span></div>
                  <button className="resolve-button" onClick={() => { setResolved(v => !v); setPreference('accessible') }}>{resolved ? <RotateCcw size={18}/> : <Check size={18}/>} {resolved ? 'Reopen simulated barrier' : 'Mark simulated barrier resolved'}</button>
                </div>
                <div className="flow-steps"><div><span>01</span><b>Observe</b><small>Document barrier</small></div><ArrowRight size={15}/><div><span>02</span><b>Validate</b><small>Human review</small></div><ArrowRight size={15}/><div><span>03</span><b>Update</b><small>Recompute graph</small></div><ArrowRight size={15}/><div><span>04</span><b>Verify</b><small>Field re-audit</small></div></div>
              </div>
              <div className="operator-side"><div className="side-icon"><Trees size={20}/></div><span className="side-eyebrow">CURRENT DEMO STATE</span><h3>{resolved ? 'Barrier removed from model.' : 'Accessibility constraint active.'}</h3><p>{barrierNote}. Select accessible priority to test how the route responds to this constraint.</p><div className="side-stat"><small>ACCESSIBLE ROUTE</small><strong>{findRoute('home', 'playground', 'accessible', resolved ? new Set(['e2']) : new Set())?.metres ?? '—'} m</strong></div><button className="ghost-button" onClick={() => setSection('studio')}>Inspect resident map <ArrowRight size={16}/></button></div>
            </div>
            <div className="info-band"><div className="info-band-icon"><ShieldCheck size={20}/></div><div><strong>Safety and accessibility validation is not automated</strong><p>Changing a sample ticket is not proof that a real walkway is accessible. Production routes require field mapping, review by affected users, and a conservative fallback for unknown links.</p></div></div>
          </>}
          {section === 'research' && <>
            <div className="research-grid"><div className="research-card"><div className="research-card-icon"><FileText size={21}/></div><span>INCLUDED RESEARCH</span><h3>Two independent reports</h3><p>Gemini and ChatGPT research files are bundled in the repository under <code>research/</code>. Treat numbers, citations, and competition rules as leads to verify against primary sources.</p><div className="file-pill">research/gemini-research.md</div><div className="file-pill">research/chatgpt-research.md</div></div><div className="research-card"><div className="research-card-icon"><GitBranch size={21}/></div><span>AGENT CONTINUITY</span><h3>Switch without restarting</h3><p>Codex and Antigravity use the same Git repository and the same <code>AGENTS.md</code> contract. Record decisions in <code>docs/DECISIONS.md</code> and handoffs in <code>docs/HANDOFF.md</code>.</p><div className="file-pill">AGENTS.md · DESIGN.md</div><div className="file-pill">.agent/rules/project.md</div></div><div className="research-card"><div className="research-card-icon"><Activity size={21}/></div><span>HACKATHON COMPLIANCE</span><h3>Evidence before claims</h3><p>AI use, dependency provenance, IP constraints, and presentation requirements have dedicated checklists. SafeListing is the approved rental-trust direction; this legacy demo is not ListingAuth, AI TermsGuard or HomeLedger Lite.</p><div className="file-pill">docs/SUBMISSION_CHECKLIST.md</div><div className="file-pill">docs/IP_REGISTER.md</div></div></div>
            <div className="info-band"><div className="info-band-icon"><CircleHelp size={20}/></div><div><strong>Next milestone</strong><p>Use the SafeListing overview for current product scope. This fictional mobility graph remains a reference example; do not repurpose it as rental verification.</p></div><button onClick={() => setSection('studio')}>Open prototype <ArrowRight size={16}/></button></div>
          </>}
          <footer className="footer"><span>SafeListing · PEOPLE TRACK</span><span>BUILD EVIDENCE, NOT JUST SCREENS. <ArrowUpRight size={13}/></span></footer>
        </div>
      </main>
    </div>
  )
}

export default MobilityDemo
