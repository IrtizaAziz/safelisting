import { describe, expect, it } from 'vitest'
import { findRoute } from './routing'

describe('demonstration pedestrian routing graph', () => {
  it('finds the shortest path', () => {
    const result = findRoute('home', 'playground', 'direct')
    expect(result?.nodes).toEqual(['home', 'square', 'park', 'playground'])
    expect(result?.metres).toBe(550)
  })
  it('avoids a known accessibility barrier', () => {
    const result = findRoute('home', 'playground', 'accessible')
    expect(result?.edges.map((edge) => edge.id)).not.toContain('e2')
  })
  it('can restore a route when a barrier is resolved', () => {
    const result = findRoute('home', 'playground', 'accessible', new Set(['e2']))
    expect(result?.edges.map((edge) => edge.id)).toContain('e2')
  })
  it('uses thermal comfort as a routing preference', () => {
    const direct = findRoute('home', 'playground', 'direct')!
    const cooler = findRoute('home', 'playground', 'cooler')!
    expect(cooler.shade).toBeGreaterThan(direct.shade)
  })
  it('handles identical destinations and disconnected cases', () => {
    expect(findRoute('home', 'home', 'direct')?.metres).toBe(0)
  })
})
