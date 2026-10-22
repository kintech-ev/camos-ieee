# CAMoS 2027 Website

Astro website for the International Conference on Connectivity, Automation and Mobile Systems — 2–6 August 2027, Split, Croatia.

## Start Here

1. Install: `npm install`
2. Run: `npm run dev`
3. Edit conference facts: `src/content.ts`
4. Review the live visual system locally: `/design-system` (dev only — excluded from the production build)
5. Validate everything: `npm run check`

## Public pages

- `/`
- `/call-for-papers`
- `/organization`
- `/venue-registration`

`/design-system` is an internal implementation reference. It renders under `npm run dev` and is removed from the production build output by `astro.config.mjs`, so it is not reachable on the published site and is absent from public navigation.

## Where is everything?

| Need | Location |
|---|---|
| Conference facts | `src/content.ts` |
| Routes | `src/pages/` |
| Shared UI | `src/components/` |
| Design tokens and CSS | `src/styles.css` |
| Web artwork | `public/assets/` |
| Spec Kit files | `specs/001-camos-2027-site/` |
| Agent entry point | `AGENTS.md` |
| Harness | `docs/HARNESS.md` |
| Design system notes | `docs/DESIGN_SYSTEM.md` |
| Deployment | `docs/DEPLOYMENT.md` |
| Model routing | `model-routing.yaml` |

## Design reference

Primary requested reference: `https://noms2027.ieee-noms.org/`.

The implementation uses a restrained IEEE/NOMS-style conference information architecture while keeping CAMoS identity, content and site artwork. It does not copy NOMS/IEEE event content or claim IEEE sponsorship.

## GitHub Pages deployment

The site is published to `https://kintech-ev.github.io/camos-ieee/` by `.github/workflows/pages.yml` whenever `main` is updated. GitHub Pages serves this repository as a project site, so the build runs under the base path configured in `astro.config.mjs`, and internal links resolve through `src/paths.ts`.

Validate the same gate CI runs:

```bash
npm run check
```

`CI` validates pull requests and non-`main` branch pushes. Publishing happens only through the `Deploy GitHub Pages` workflow and requires the manual checkpoints in [DEPLOYMENT.md](docs/DEPLOYMENT.md), which also covers rollback and future custom-domain procedures.
