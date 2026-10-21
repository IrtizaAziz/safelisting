import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('SafeListing entry screen', () => {
  it('shows planned rental-trust capabilities without presenting the legacy map as the product', () => {
    const html = renderToStaticMarkup(createElement(App))
    expect(html).toContain('AI-Powered Rental Trust &amp; Property Passport')
    for (const pillar of ['ListingAuth', 'AI TermsGuard', 'HomeLedger Lite']) {
      expect(html).toContain(pillar)
    }
    expect(html.match(/Planned · not implemented/g)).toHaveLength(3)
    expect(html).toContain('Open legacy mobility example')
    expect(html).not.toContain('Journey settings')
    expect(html).not.toContain('Mark simulated barrier resolved')
  })
})
