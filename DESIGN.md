---
name: Yuan Quan Portfolio
description: An editorial evidence ledger for AI product, AIGC, research, and interaction-design work.
colors:
  near-black: "#050505"
  paper-white: "#ffffff"
  quiet-gray: "#a4a4a4"
  scent-brown: "#754b2c"
  scent-green: "#bdf4b6"
  pals-violet: "#7e59ff"
  odor-teal: "#00aeba"
  archive-green: "#627f56"
  lab-acid: "#baf848"
  forest-green: "#35734a"
  stitch-red: "#b72443"
  gallery-beige: "#d9c7ae"
typography:
  display:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "clamp(44px, 6.3vw, 92px)"
    fontWeight: 760
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "clamp(32px, 4.4vw, 68px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "clamp(15px, 1.3vw, 19px)"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  tight: "8px"
  small: "14px"
  medium: "24px"
  large: "46px"
  section: "80px"
components:
  directory-item:
    backgroundColor: "transparent"
    textColor: "{colors.quiet-gray}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 25px"
    height: "58px"
  directory-item-active:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 25px"
    height: "58px"
---

# Design System: Yuan Quan Portfolio

## Overview

**Creative North Star: "The Evidence Ledger"**

The portfolio behaves like a carefully edited record of practice: restrained shared chrome frames dense, authored project evidence. The home establishes one near-black editorial world, while each case study is allowed to keep the palette, imagery, and material character inherited from its Figma source.

Hierarchy comes from scale, spacing, hairline rules, and the work itself. Motion is limited to navigation state, focus, image reveal, and modest hover enlargement so it never competes with long-form reading.

**Key Characteristics:**

- Near-black editorial index with high-contrast bilingual type.
- Project-specific color worlds connected by one quiet navigation language.
- Twelve-column evidence mosaics on desktop and single-column reading order on mobile.
- Sharp, flat interface chrome; the authored imagery supplies texture and depth.

## Colors

The base system is monochrome and restrained; saturated hues appear only where an individual project owns them.

### Primary

- **Near Black:** The home, gallery work, loading surface, and default project field.
- **Paper White:** Primary type, focus contrast, and high-contrast rules on dark surfaces.

### Secondary

- **Scent Brown and Scent Green:** Alternating grounds for the perfume archive case study.
- **Pals Violet:** Active navigation and identity cue for the sports-social product.
- **Odor Teal and Archive Green:** Functional accents for scent visualization and paper-led archive work.
- **Lab Acid, Forest Green, Stitch Red, Gallery Beige:** Reserved accents that keep each project visually authored.

### Neutral

- **Quiet Gray:** Secondary copy, metadata, captions, inactive navigation, and evidence labels.

### Named Rules

**The Project Owns the Accent Rule.** Shared chrome inherits the current project's variables; it does not impose a global brand accent.

**The Evidence Before Decoration Rule.** Saturated color must clarify a project's authored world or state, never decorate an otherwise neutral page.

## Typography

**Display Font:** Noto Sans SC with PingFang SC, Microsoft YaHei, and system sans fallbacks  
**Body Font:** Noto Sans SC with the same CJK-safe system stack  
**Label Font:** The same sans family in compact uppercase Latin metadata

**Character:** Heavy, tightly tracked display type gives the portfolio an editorial cover-like presence. Body copy stays neutral and highly readable across Chinese and English, while small labels act as quiet indexing marks.

### Hierarchy

- **Display** (weight 760, fluid 44–92px, line-height 0.96): project titles and the most important identity statements.
- **Headline** (weight 700, fluid 32–68px, line-height 1.08): chapter titles and major home sections.
- **Body** (weight 400, fluid 15–19px, line-height 1.75): summaries and chapter context, generally limited to 64 characters per line.
- **Label** (weight 650, 11px, 0.08em tracking): metadata, navigation, roles, dates, and structural cues.

### Named Rules

**The Two-Scale Rule.** Every first viewport needs one unmistakable display voice and one quiet evidence layer; avoid filling the middle with competing title sizes.

## Layout

The shared maximum canvas is 1440px. Desktop project pages use a split hero and twelve-column evidence galleries; section padding scales from 76px to 150px and gutters from 24px to roughly 86px. At 880px the hero becomes a vertical stack, and at 760px evidence collapses into one intentional reading column. The directory remains sticky at the viewport top and becomes horizontally scrollable on narrow screens. No route may create document-level horizontal overflow.

## Elevation & Depth

The system is flat by default and uses no box shadows. Depth comes from authored photography, tonal section changes, image scale, and translucent sticky navigation with a restrained backdrop blur.

### Named Rules

**The Flat Chrome Rule.** Navigation, buttons, and containers use rules and tonal contrast rather than ambient shadows.

## Shapes

Shared interface elements use sharp corners and hairline borders. Image plates preserve their source proportions inside rectilinear editorial grids; any rounded silhouette must come from the authored project asset, not from a global card radius.

## Components

### Site Header

- **Shape:** Full-width sharp strip with one hairline divider.
- **Typography:** Compact identity at left, spaced label navigation at right.
- **Responsive behavior:** Secondary identity and current-project text collapse on mobile; contact remains available.

### Directory Axis

- **Shape:** Sharp, sticky horizontal track with a two-pixel active underline.
- **State:** Inactive items use quiet gray; active and focused items inherit the current project ink and accent.
- **Responsive behavior:** The track scrolls horizontally, keeps the active item centered, supports arrow-key focus movement, and exposes a true back-to-top action.

### Evidence Gallery

- **Structure:** Feature, grid, editorial, and mosaic arrangements share a twelve-column desktop system.
- **Material:** Exact Figma-derived raster assets; no decorative replacement plates.
- **Responsive behavior:** One column below 760px, preserving source order and intrinsic proportions.

### Project Pager

- **Shape:** Three-part sharp layout for previous project, work index, and next project.
- **State:** Links use typography and alignment rather than filled buttons; focus uses the shared two-pixel outline.

## Do's and Don'ts

### Do:

- **Do** let exact project evidence occupy most of each case-study page.
- **Do** inherit shared chrome colors from the current project's surface, ink, muted, and accent variables.
- **Do** preserve hash-addressable chapters, browser history, visible focus, and reduced-motion behavior.
- **Do** reflow long research boards into a readable single column on mobile.

### Don't:

- **Don't** replace project-specific worlds with one generic portfolio card style.
- **Don't** add drop shadows, ornamental gradients, rounded global cards, or decorative glyph icons to shared chrome.
- **Don't** crop diagrams or research boards in a way that removes authored evidence.
- **Don't** publish temporary Figma URLs, phone numbers, or unlabeled synthetic project claims.
