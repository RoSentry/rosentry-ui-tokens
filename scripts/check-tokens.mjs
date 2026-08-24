// Guard the published token SHAPE.
//
// This package is consumed by spreading it — `{ ...BASE, ...overrides }` in
// rosentry-docs and rosentry-support. That makes REMOVING or RENAMING a key the
// dangerous edit: consumers keep compiling, the spread silently yields
// `undefined` for the missing token, and the failure surfaces as an unstyled or
// invisible element on a site in a different repo. Nothing here caught that,
// because this repo had no CI at all.
//
// So: assert the documented key set is present and every value is a non-empty
// string. Adding a key is allowed and only reported; removing or emptying one
// fails the build.

import { C } from '../satellite-tokens.js'

// The 24 keys the published shape has always carried. Consumers may override
// any of these, but they must all EXIST.
const REQUIRED = [
  'bg', 'bgAlt', 'surface', 'surfaceUp', 'surfaceHi',
  't0', 't1', 't2', 't3', 't4',
  'accent', 'accentL', 'accentD',
  'violet', 'green', 'amber', 'red',
  'mono', 'sans',
  'border', 'borderS', 'borderHi',
  'tint', 'glow',
]

const problems = []

if (C === null || typeof C !== 'object') {
  problems.push('the package must export an object named C')
} else {
  for (const key of REQUIRED) {
    if (!(key in C)) {
      problems.push(`missing required token "${key}" — consumers spread this object, so a removed key becomes undefined at the call site`)
      continue
    }
    const v = C[key]
    if (typeof v !== 'string' || v.trim() === '') {
      problems.push(`token "${key}" must be a non-empty string, got ${JSON.stringify(v)}`)
    }
  }
  const extra = Object.keys(C).filter(k => !REQUIRED.includes(k))
  if (extra.length) {
    console.log(`note: ${extra.length} token(s) beyond the documented set: ${extra.join(', ')}`)
    console.log('      adding tokens is fine — update REQUIRED here so the new key is guarded too.')
  }
}

if (problems.length === 0) {
  console.log(`OK  ${REQUIRED.length} required tokens present and non-empty`)
  process.exit(0)
}

console.error(`FAIL  ${problems.length} problem(s):\n`)
for (const p of problems) console.error(`  ${p}`)
process.exit(1)
