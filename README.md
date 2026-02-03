# MEVONE Software (Monorepo)

Monorepo for MEVONE apps and shared packages.

## Structure

- **`apps/`** — Applications (web, API, CLI, etc.)
- **`packages/`** — Shared libraries and packages

## Setup

```bash
npm install
```

## Adding a package

1. **New app:** Create a folder under `apps/` with its own `package.json` (e.g. `apps/web/package.json`).
2. **New shared package:** Create a folder under `packages/` with its own `package.json` (e.g. `packages/ui/package.json`).

Use the `name` field in each `package.json`; other workspaces can depend on it via that name.

## Scripts (from repo root)

- `npm run build` — Build all workspaces that define a `build` script
- `npm run test` — Run tests in all workspaces
- `npm run lint` — Lint all workspaces
- `npm run clean` — Run `clean` in all workspaces (if defined)

## Using pnpm

To use pnpm instead of npm, add a root `pnpm-workspace.yaml`:

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

Then use `pnpm install` and `pnpm -r <script>` for workspace-wide scripts.
