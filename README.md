# ICAMC 2027 Website

Astro website for the International Conference on Automation, Mobility and Connectivity — 2–6 August 2027, Split, Croatia.

## Start Here

1. Install: `npm install`
2. Run: `npm run dev`
3. Edit conference facts: `src/content.ts`
4. Review the live visual system: `/design-system`
5. Validate everything: `npm run check`

## Public pages

- `/`
- `/call-for-papers`
- `/organization`
- `/venue-registration`

`/design-system` is an internal `noindex` implementation reference and is intentionally absent from public navigation.

## Where is everything?

| Need | Location |
|---|---|
| Conference facts | `src/content.ts` |
| Routes | `src/pages/` |
| Shared UI | `src/components/` |
| Design tokens and CSS | `src/styles.css` |
| Web artwork | `public/assets/` |
| Spec Kit files | `specs/001-icamc-2027-site/` |
| Agent entry point | `AGENTS.md` |
| Harness | `HARNESS.md` |
| Model routing | `model-routing.yaml` |

## Design reference

Primary requested reference: `https://noms2027.ieee-noms.org/`.

The implementation uses a restrained IEEE/NOMS-style conference information architecture while keeping original ICAMC identity, content and artwork. It does not copy NOMS/IEEE event content or claim IEEE sponsorship.

## Cloudflare deployment

Build:

```bash
npm run build
```

Deploy static output through Wrangler:

```bash
npm run deploy
```

The production domain can be registered elsewhere. Point/delegate DNS to Cloudflare and attach the custom domain to the Worker after the preview deployment is verified.
