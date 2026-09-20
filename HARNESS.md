# ICAMC Development Harness

The harness exists to reduce decisions, not create more process.

## Workflow

```text
active spec
   ↓
select one unchecked task
   ↓
route to the smallest capable model
   ↓
inspect only relevant files
   ↓
implement smallest complete change
   ↓
npm run check
   ↓
review visual/content risk when required
   ↓
mark task complete
```

## Quality gates

### Every change
- source is scoped to the requested task
- conference facts still come from `src/content.ts`
- no stale dates or KINTECH route introduced

### UI change
- compare with `/design-system`
- test desktop and mobile behavior
- check keyboard focus, heading order, overflow and text wrapping

### Content change
- distinguish confirmed, planned, pending and open information
- never turn provisional wording into a guarantee

### Pre-release
- run `npm run check`
- review all four public routes
- verify external links before enabling them
- deploy preview before production domain attachment

## Agent roles

- **fast**: wording, metadata, small content edits
- **coding**: Astro/CSS implementation and contained refactors
- **reasoning**: information architecture, cross-page design, difficult debugging
- **reviewer**: read-only adversarial review before release or after major visual changes

The reviewer does not edit. It returns concrete evidence and a bounded correction list.
