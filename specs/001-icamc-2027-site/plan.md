# Implementation Plan

## Architecture

Astro static site with no UI framework. The repository stays deliberately shallow.

```text
src/pages/       routes
src/components/  shared page shell and reusable conference patterns
src/content.ts   single source of truth for conference data
src/styles.css   complete visual system
public/assets/   ICAMC logo and web artwork
```

## Page model

### Home
Utility bar → ICAMC masthead → primary nav → Split hero → planning update → welcome/content + sidebar → themes → review/publication → scientific leadership → Split teaser → footer.

### Call for Papers
Page hero → breadcrumb → author content + sidebar → submission categories → topics → rolling review/publication.

### Organization
Page hero → scientific leadership table → operational roles table → status explanation + sidebar.

### Venue & Registration
Split hero → venue status → registration tiers → participation support → hybrid participation + sidebar.

### Design System
Live implementations of the exact tokens/components used above. This route is internal/noindex and not in public navigation.

## Technical decisions

- `output: static`
- no React/Vue/Svelte
- no CMS or database
- no icon package
- no JavaScript except mobile navigation
- CSS custom properties for all design tokens
- Cloudflare Workers Static Assets through Wrangler
- conference data centralized in TypeScript

## Validation

`npm run check` executes content guards, Astro type checking, and a production build.
