# @rosentry/ui-tokens

Shared design tokens (color palette and typography) for RoSentry satellite
frontends. A single canonical palette object (`C`) keeps the zero-dependency
dark-mode surfaces — such as `rosentry-docs` and `rosentry-support` — visually
consistent and prevents independent drift. 

## Install

```sh
npm install @rosentry/ui-tokens
```

## Usage

```js
import { C } from '@rosentry/ui-tokens'

const styles = {
  background: C.bg,
  color: C.t0,
  border: `1px solid ${C.border}`,
  fontFamily: C.sans,
}
```

`C` exposes background/surface layers (`bg`, `bgAlt`, `surface`, `surfaceUp`,
`surfaceHi`), text tiers (`t0`–`t4`), accent and status colors (`accent`,
`accentL`, `accentD`, `violet`, `green`, `amber`, `red`), font stacks (`mono`,
`sans`), borders, and effect tokens (`tint`, `glow`).

## Releasing

Publishing is automatic: pushing to the `main` branch triggers a GitHub Action
that publishes the package to npm. The workflow is guarded — it only publishes
when the `version` in `package.json` is new, and skips versions already on the
registry. To release an update, bump the `version` field in `package.json` and
push to `main`.
