// Shared design-token palette for rosentry-docs and rosentry-support.
// Both apps are zero-dep dark-mode surfaces — one canonical object here
// prevents independent drift. rosentry-status uses a distinct operational
// palette (see its App.jsx) and does NOT import this file.
//
// Import via the @satellite Vite alias defined in each app's vite.config.js:
//   import { C } from '@satellite/satellite-tokens.js'
//
// If a colour needs to diverge between apps, promote that key to a local
// override in the consuming App.jsx rather than forking this file.

export const C = {
  bg:        '#070b12',
  bgAlt:     '#0b1119',
  surface:   '#0f1722',
  surfaceUp: '#141d2c',
  surfaceHi: '#1b2638',
  t0:        '#f0f4f8',
  t1:        '#a3b1c2',
  t2:        '#6b7c91',
  t3:        '#48576b',
  t4:        '#2f3c4f',
  accent:    '#3b82f6',
  accentL:   '#60a5fa',
  accentD:   '#1d4ed8',
  violet:    '#a78bfa',
  green:     '#34d399',
  amber:     '#fbbf24',
  red:       '#f87171',
  mono:      "'JetBrains Mono','DM Mono',ui-monospace,monospace",
  sans:      "'Inter','Instrument Sans',system-ui,-apple-system,sans-serif",
  border:    'rgba(255,255,255,0.06)',
  borderS:   'rgba(255,255,255,0.12)',
  borderHi:  'rgba(96,165,250,0.32)',
  tint:      'rgba(59,130,246,0.08)',
  glow:      'radial-gradient(60% 50% at 50% 0%, rgba(59,130,246,0.16) 0%, rgba(59,130,246,0) 60%)',
}
