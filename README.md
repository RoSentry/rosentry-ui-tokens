# @rosentry/ui-tokens

Shared design tokens (color palette and font stacks) for RoSentry frontends, exported as a single `C` object. Keeps dark-mode surfaces consistent across satellite sites like rosentry-docs and rosentry-support.

## Install

```
npm install @rosentry/ui-tokens
```

## Usage

```js
import { C } from '@rosentry/ui-tokens'

const styles = { background: C.bg, color: C.t0, fontFamily: C.sans }
```

`C` has background/surface layers (`bg`, `bgAlt`, `surface`, `surfaceUp`, `surfaceHi`), text tiers (`t0`–`t4`), accent/status colors (`accent`, `violet`, `green`, `amber`, `red`, ...), fonts (`mono`, `sans`), `border`, and effects (`tint`, `glow`).

## Notes

- Single file: `satellite-tokens.js`.
- Releasing: bump `version` in `package.json` and push to `main`. The GitHub Action publishes to npm and skips versions already on the registry.
