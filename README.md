# Accounting App (Catalyst UI Kit)

This repository contains an accounting-focused demo app built with Next.js 15, React 19, and Tailwind CSS v4. The app lives under `glide-frontend` and showcases dashboards and flows for accounting projects, billing, and talent.

## Quick start (local)

```bash
cd glide-frontend
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel

We include a `vercel.json` at the repo root that routes to the Next.js app under `glide-frontend`.

- Via CLI
  ```bash
  npm i -g vercel
  vercel login
  vercel    # follow prompts
  vercel --prod
  ```
- Via Dashboard
  - New Project → Import this Git repo
  - Vercel will detect `vercel.json` and deploy

## Project structure

- `glide-frontend/` — Next.js app (accounting-only)
  - `src/app/(app)/accounting-dashboard/**` — primary routes
  - `src/components/**` — shared UI components
  - `public/**` — static assets
- `vercel.json` — config to deploy from repo root while serving `glide-frontend`
- `.vercelignore` — excludes `.next`, `node_modules`, and other non-deploy artifacts

## Removed for focus (cleaned)

- TypeScript demo under `demo/typescript`
- Engineer dashboard app and routes
- Glide prototype sub-app
- Test scaffolding and non-accounting demos

## Notes

- Tailwind CSS v4 and Headless UI are already configured in the demo app.
- If you add environment variables, use Vercel Project Settings → Environment Variables (none required for this demo).
