# 袁泉 / Yuan Quan — Portfolio

Responsive portfolio implementation from the approved Figma “作品集” page. Built with React, Vite, TypeScript, React Router, CSS Modules, and local optimized Figma assets.

## Commands

```bash
npm install
npm run dev
npm run validate:figma
npm run typecheck
npm run lint
npm run build
npm run test:e2e
```

## Figma import guardrail

`npm run build` runs `validate:figma` before TypeScript and Vite. The validator decodes every local image referenced by the Figma asset manifest, rejects unresolved or temporary Figma asset URLs, and verifies the required layer IDs and image dimensions recorded in `scripts/figma-layer-contracts.json`.

When importing or replacing a Figma frame:

1. Download its assets into `public/assets/figma` and regenerate `src/data/assetManifest.ts` with `node scripts/generate-asset-module.mjs`.
2. Record every required visible layer ID in `scripts/figma-layer-contracts.json`.
3. Preserve those IDs as `data-node-id` attributes (or in a generated node-data array). Native Figma shapes and connectors that the converter omits must be implemented as DOM or SVG nodes instead of being silently dropped.
4. Run `npm run validate:figma` and the route tests before deployment.

## Cloudflare Pages

- Production branch: `main`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none

All routes are client-side routes. Cloudflare Pages automatically applies SPA fallback when the output does not contain a top-level `404.html`.

## Content

The site contains one home page and nine project routes. Seven long-form case studies use hash-addressable directory axes with active scroll tracking, keyboard navigation, and sticky mobile behavior; the AIGC and art showcase routes intentionally remain uninterrupted.
