# 袁泉 / Yuan Quan — Portfolio

Responsive portfolio implementation from the approved Figma “作品集” page. Built with React, Vite, TypeScript, React Router, CSS Modules, and local optimized Figma assets.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm run test:e2e
```

## Cloudflare Pages

- Production branch: `main`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none

All routes are client-side routes. Cloudflare Pages automatically applies SPA fallback when the output does not contain a top-level `404.html`.

## Content

The site contains one home page and nine project routes. Project directory axes use hash-addressable chapter links, active scroll tracking, keyboard navigation, and sticky mobile behavior.
