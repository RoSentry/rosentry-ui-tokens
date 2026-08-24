// Shared design-token palette published as @rosentry/ui-tokens.
//
// Consumed by rosentry-docs and rosentry-support, which both import it from the
// npm package:
//   import { C as BASE } from '@rosentry/ui-tokens'
//
// rosentry-status is NOT a consumer — it defines its own operational palette
// inline (see its src/App.jsx).
//
// WHAT THIS ACTUALLY PROVIDES TODAY: the canonical token SHAPE (the 24 keys
// below) plus fallback values. Both current consumers spread this object and
// then override every one of those keys to the dashboard's neutral-gray theme
// (rosentry-dashboard/src/lib/theme.js, DARK map), so the values here are not
// what either site renders. That is the intended pattern — diverge by
// overriding locally in the consuming App.jsx, never by forking this file —
// but it does mean adding a key here is the load-bearing change, while
// changing a colour here affects only consumers that have not overridden it.

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
