# AGENTS.md — Start Here

This repository is intentionally small. Do not add architecture unless the active spec requires it.

## Read in this order

1. `.specify/memory/constitution.md`
2. `specs/001-camos-2027-site/spec.md`
3. `specs/001-camos-2027-site/tasks.md`
4. `HARNESS.md`
5. `model-routing.yaml`

## Project map

| Need | Location |
|---|---|
| Conference facts | `src/content.ts` |
| Pages | `src/pages/` |
| Reusable UI | `src/components/` |
| Full visual system | `src/styles.css` |
| Live design reference | `src/pages/design-system.astro` |
| Assets | `public/assets/` |
| Active product spec | `specs/001-camos-2027-site/` |

## Mandatory rules

- Work only on the active task.
- Inspect before editing.
- Do not create a new directory without a current requirement.
- Do not duplicate conference facts inside components.
- Do not invent dates, fees, names, venue details, URLs, IEEE status or publication guarantees.
- Provide a /kintech redirect to https://www.kintech-ev.de/ when the active task requires it.
- Do not add a UI framework for static content.
- Do not replace the conference-site design with dashboard, glassmorphism or startup landing-page patterns.
- `/design-system` and `src/styles.css` are canonical for visual changes.
- Avoid unrelated refactors.

## One release command

```bash
npm run check
```

If it fails, the task is not complete.
