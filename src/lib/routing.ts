/** Small, deterministic example graph. Replace the fixtures before presenting real-world claims. */
export type Preference = 'direct' | 'accessible' | 'cooler'
export type NodeId = 'home' | 'square' | 'school' | 'park' | 'hub' | 'crossing' | 'mall' | 'playground'
export type NetworkNode = { id: NodeId; label: string; x: number; y: number; type: 'place' | 'junction' }
export type NetworkEdge = {
  id: string
  from: NodeId
  to: NodeId
  metres: number
  shade: number // 0-1 simulated coverage
  inaccessible?: boolean // simulated accessibility barrier, manually verified in real pilots
}
export type RouteResult = { nodes: NodeId[]; edges: NetworkEdge[]; metres: number; minutes: number; shade: number } | null

export const nodes: NetworkNode[] = [
  { id: 'home', label: 'Residential Gate', x: 116, y: 390, type: 'place' },
  { id: 'square', label: 'Town Square', x: 270, y: 315, type: 'junction' },
  { id: 'school', label: 'Community School', x: 290, y: 126, type: 'place' },
  { id: 'park', label: 'Central Park', x: 468, y: 370, type: 'place' },
  { id: 'hub', label: 'Mobility Hub', x: 475, y: 165, type: 'place' },
  { id: 'crossing', label: 'Crossing', x: 655, y: 245, type: 'junction' },
  { id: 'mall', label: 'Local Mall', x: 782, y: 107, type: 'place' },
  { id: 'playground', label: 'Inclusive Playground', x: 776, y: 390, type: 'place' },
]

export const edges: NetworkEdge[] = [
  { id: 'e1', from: 'home', to: 'square', metres: 160, shade: 0.1 },
  { id: 'e2', from: 'square', to: 'park', metres: 155, shade: 0.18, inaccessible: true },
  { id: 'e3', from: 'park', to: 'playground', metres: 235, shade: 0.29 },
  { id: 'e4', from: 'home', to: 'school', metres: 235, shade: 0.74 },
  { id: 'e5', from: 'school', to: 'hub', metres: 190, shade: 0.8 },
  { id: 'e6', from: 'hub', to: 'crossing', metres: 210, shade: 0.64 },
  { id: 'e7', from: 'crossing', to: 'playground', metres: 188, shade: 0.7 },
  { id: 'e8', from: 'square', to: 'hub', metres: 215, shade: 0.48 },
  { id: 'e9', from: 'park', to: 'crossing', metres: 182, shade: 0.53 },
  { id: 'e10', from: 'crossing', to: 'mall', metres: 170, shade: 0.13 },
  { id: 'e11', from: 'hub', to: 'mall', metres: 310, shade: 0.25 },
]

export function findRoute(
  from: NodeId,
  to: NodeId,
  preference: Preference,
  resolvedBarriers: ReadonlySet<string> = new Set(),
): RouteResult {
  if (from === to) return { nodes: [from], edges: [], metres: 0, minutes: 0, shade: 1 }
  const dist = new Map<NodeId, number>(nodes.map((n) => [n.id, Infinity]))
  const prev = new Map<NodeId, { node: NodeId; edge: NetworkEdge }>()
  const visited = new Set<NodeId>()
  dist.set(from, 0)
  while (visited.size < nodes.length) {
    const candidate = nodes
      .filter((n) => !visited.has(n.id))
      .sort((a, b) => (dist.get(a.id) ?? Infinity) - (dist.get(b.id) ?? Infinity))[0]
    if (!candidate || !Number.isFinite(dist.get(candidate.id))) break
    if (candidate.id === to) break
    visited.add(candidate.id)
    for (const e of edges) {
      const neighbour = e.from === candidate.id ? e.to : e.to === candidate.id ? e.from : null
      if (!neighbour || visited.has(neighbour)) continue
      if (preference === 'accessible' && e.inaccessible && !resolvedBarriers.has(e.id)) continue
      const cost = preference === 'cooler' ? e.metres * (1 + (1 - e.shade) * 1.65) : e.metres
      const alternative = (dist.get(candidate.id) ?? Infinity) + cost
      if (alternative < (dist.get(neighbour) ?? Infinity)) {
        dist.set(neighbour, alternative)
        prev.set(neighbour, { node: candidate.id, edge: e })
      }
    }
  }
  if (!prev.has(to)) return null
  const resultNodes: NodeId[] = [to]
  const resultEdges: NetworkEdge[] = []
  let pointer = to
  while (pointer !== from) {
    const step = prev.get(pointer)
    if (!step) return null
    resultEdges.unshift(step.edge)
    resultNodes.unshift(step.node)
    pointer = step.node
  }
  const metres = resultEdges.reduce((sum, edge) => sum + edge.metres, 0)
  return {
    nodes: resultNodes,
    edges: resultEdges,
    metres,
    minutes: Math.round((metres / 78) * 10) / 10,
    shade: metres ? resultEdges.reduce((sum, edge) => sum + edge.metres * edge.shade, 0) / metres : 1,
  }
}
