# Playground

A personal lab for AI prompts, frontend experiments, and design explorations.

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Geist** font
- **MDX** content (file-based)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding an Experiment

1. Create a new `.mdx` file in `content/experiments/`
2. Add frontmatter:

```mdx
---
title: "Your Experiment Title"
description: "A short description."
category: "AI Prompts"
date: "2026-06-01"
featured: false
---

Your content here...
```

3. Categories: `AI Prompts`, `Components`, `Workflows`, `UI Experiments`, `Design Concepts`

That's it. The experiment appears automatically on the site.

## Project Structure

```
content/experiments/     # MDX experiment files
src/
  app/                 # Single-page site (page.tsx)
  components/
    experiments/       # Cards and detail sections
    layout/            # Footer
    mdx/               # MDX rendering components
    ui/                # shadcn/ui components
  lib/
    experiments.ts     # Content loading utilities
    utils.ts           # Shared utilities
```

The site is a single scrollable page. Experiment cards link to anchored detail sections below.

## Deploy

### Cloudflare Pages

This site is a static export. Use these build settings in the Cloudflare dashboard:

| Setting | Value |
|---------|-------|
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | 20 |

### Vercel

Deploy to [Vercel](https://vercel.com) — also works with zero extra config.
