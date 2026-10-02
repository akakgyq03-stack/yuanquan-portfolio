# Design QA

## Scope

- Source of truth: Figma page “作品集” and the mapped frames listed in `PRODUCT.md`.
- Implemented routes: home plus all nine project routes.
- Review viewports: 1440px desktop, 1024px and 768px intermediate, 390px mobile.
- Visual evidence was captured locally in `.design-reference/` and is intentionally excluded from deployment.

## Comparison evidence

| Area | Source reference | Current implementation | Result |
| --- | --- | --- | --- |
| Home | `home-21-2.png` | `current-home-2.png` / `compare-home.png` | Matched |
| AIGC | `aigc-535-942.png` | `current-aigc.png` | Matched |
| Perfume Lab | `perfume-58-2.png` | `current-perfume.png` | Matched |
| Pals Go | `pals-290-251.png` | `current-pals.png` / `pals-mbti-current.png` | Matched |
| Idea Tree | `idea-398-1612.png` | `current-idea.png` | Matched |
| Odor Land | `odor-487-408.png` | `current-odor-2.png` / `compare-odor-2.png` | Matched |
| Textual Scent Lab | `textual-537-1385.png` | `current-textual.png` | Matched |
| Forest Wardrobe | Figma frames 537:1840, 537:13134, 537:13294, 537:13321 | `current-forest.png` | Matched |
| Stitch Revival | `stitch-537-2189.png` plus mapped source frames | `current-stitch-2.png` / `stitch-interface-current.png` | Matched |
| Art Exhibitions | `art-563-48071.png` | `current-art.png` | Matched |

## Findings

| Priority | Finding | Resolution |
| --- | --- | --- |
| P0 | None | — |
| P1 | None | — |
| P2 | None | — |
| P3 | SF Pro and several display fonts in the source are not redistributed. | Kept the Figma sizing and hierarchy while using system SF/serif fallbacks and self-hosted Noto Sans SC. |
| P3 | Project navigation chrome is not part of the original static artboards. | Retained because the approved interaction plan explicitly requires return, directory-axis, previous/next, and back-to-top navigation. |

## Automated verification

- ESLint: passed.
- TypeScript: passed.
- Vite production build: passed.
- Playwright: 34/34 passed across desktop and mobile projects.
- Verified every route, direct/deep navigation, refresh/back, directory anchors, previous/next controls, 404, local images, reduced motion, and no document-level horizontal overflow.
- Verified no implementation source contains temporary Figma asset URLs.

final result: passed
