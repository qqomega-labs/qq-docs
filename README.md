# QQ official docs

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build in Public](https://img.shields.io/badge/Build-in%20Public-brightgreen.svg)](https://github.com/qqomegalabs)

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

### Development with i18n

```bash
# Start in Chinese locale
bun run start --locale zh-CN
```

## Build

```bash
bun run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

**Build specific locale (faster):**

```bash
bun run build --locale en      # English only
bun run build --locale zh-CN   # Chinese only
```

## Internationalization (i18n)

The site supports multiple languages:

- **English (en)** - Default at `/docs/...`
- **Chinese (zh-CN)** - Available at `/zh-CN/docs/...`

**Generate translation files:**

```bash
bun run write-translations --locale zh-CN
```

**Translated content location:** `/i18n/zh-CN/docusaurus-plugin-content-docs/current/`

## Build

This project uses **Bun** as the single package manager for both local development and deployment.

### Build Command

```bash
bun run build:cf
```

This command runs: `bun install && docusaurus clear && docusaurus build`

The project relies on `SKIP_DEPENDENCY_INSTALL=true` so Cloudflare's own
auto-install step is skipped and `build:cf` handles installation itself via Bun.

### Adding Dependencies

```bash
bun add <package-name>
git add bun.lock package.json
git commit -m "chore: add <package-name>"
```

Only `bun.lock` needs to be committed — there is no `package-lock.json` to keep in sync anymore.

### Hosting Configuration

- **Build command:** `bun run build:cf`
- **Build output directory:** `build`
- **Node version:** >=20.0
- **Environment variable:** `SKIP_DEPENDENCY_INSTALL=true`
