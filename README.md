# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
bun install
```

## Local Development

```bash
bun run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
bun run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Cloudflare Pages Build

This project uses **Bun** for local development but **npm** for Cloudflare Pages deployment.

### Build Command (Cloudflare Pages)

```bash
npm run build:cf
```

This command runs: `npm install && docusaurus clear && docusaurus build`

### Important: Dual Package Manager Setup

**When adding new dependencies:**

1. Add with Bun (for local development):

   ```bash
   bun add <package-name>
   ```

2. Update npm lock file (for Cloudflare Pages):

   ```bash
   npm install
   ```

3. Commit both lock files:
   ```bash
   git add bun.lock package-lock.json package.json
   git commit -m "chore: add <package-name>"
   ```

**Why this is needed:** Cloudflare Pages uses `npm ci` which requires `package-lock.json` to be in sync with `package.json`.
If you only use Bun, the npm lock file becomes outdated and builds will fail.

### Cloudflare Pages Configuration

- **Build command:** `npm run build:cf`
- **Build output directory:** `build`
- **Node version:** >=20.0

## Deployment

Using SSH:

```bash
USE_SSH=true bun run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> bun run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
