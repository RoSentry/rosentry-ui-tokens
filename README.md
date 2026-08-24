# @rosentry/ui-tokens

Shared design tokens (color palette and font stacks) for RoSentry frontends,
exported as a single `C` object from one file, `satellite-tokens.js`.

## Install

```
npm install @rosentry/ui-tokens
```

## Usage

```js
import { C } from '@rosentry/ui-tokens'

const styles = { background: C.bg, color: C.t0, fontFamily: C.sans }
```

## What `C` contains

24 keys:

| Group | Keys |
|---|---|
| Background / surface layers | `bg`, `bgAlt`, `surface`, `surfaceUp`, `surfaceHi` |
| Text ramp | `t0`, `t1`, `t2`, `t3`, `t4` |
| Accent ramp | `accent`, `accentL`, `accentD` |
| Status / semantic | `violet`, `green`, `amber`, `red` |
| Borders | `border`, `borderS`, `borderHi` |
| Fonts | `mono`, `sans` |
| Effects | `tint`, `glow` |

## Consumers, and what they actually use

`rosentry-docs` and `rosentry-support` both depend on this package. Each one
spreads `C` and then overrides **all 24 keys** with the dashboard's neutral-gray
dark theme (`rosentry-dashboard/src/lib/theme.js`, the `DARK` map):

```js
import { C as BASE } from '@rosentry/ui-tokens'
const C = { ...BASE, /* every key re-declared */ }
```

So in practice this package supplies the canonical token **shape** plus
fallbacks, not the colors those two sites render. Adding a key here is the
change that propagates; changing a color here only reaches a consumer that has
not overridden that key.

That override-locally pattern is deliberate — a site that needs to diverge
overrides in its own `App.jsx` rather than forking this file.

`rosentry-status` is not a consumer; it defines its own operational palette
inline in `src/App.jsx`.

## Releasing

Bump `version` in `package.json` and push to `main`. `.github/workflows/publish.yml`
publishes to npm and skips a version already on the registry. It authenticates
with **Trusted Publishing (OIDC)** — there is no npm token in this repo or in
its Actions secrets. A push to `staging` only runs `npm pack --dry-run`.

Publishing requires the package's Trusted Publisher to be configured on
npmjs.com (RoSentry / this repo / workflow `publish.yml`); see the comments at
the top of the workflow.

## Repo notes

- No build step, no tests, and no lint config — the package ships
  `satellite-tokens.js` verbatim (`files` in `package.json` lists only that file).
- `package.json` declares `"license": "UNLICENSED"` while this repo ships an
  Apache-2.0 `LICENSE` file. Those contradict each other and someone with
  authority over licensing should pick one. (`rosentry-schema` has the same
  mismatch.)
