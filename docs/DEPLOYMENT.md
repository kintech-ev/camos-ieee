# CAMoS deployment

This repository deploys the existing static Astro site to GitHub Pages through one GitHub Actions workflow. GitHub is both the source repository and the hosting origin, so no third-party deployment account, token or project is required.

## Environments

| Environment | Source | URL | Purpose |
|---|---|---|---|
| Preview | Pull request | n/a — pull requests are validated only | Review an unmerged change before merge |
| Production | `main` | `https://kintech-ev.github.io/camos-ieee/` | Public release |

GitHub Pages publishes one site per repository. There is no separate preview or staging hostname: an unmerged change is reviewed with `npm run dev` locally, and only `main` is deployed. The `dev` branch, if used, is validated by CI but never published.

## Project-site base path

The repository is not named `<owner>.github.io`, so Pages serves it as a project site under `/<repository>/`. `astro.config.mjs` therefore sets:

- `site` — the Pages origin (`PUBLIC_SITE_URL`).
- `base` — the repository path (`PUBLIC_BASE_PATH`, default `/camos-ieee`).

Every internal link, asset URL, canonical link and Open Graph URL is built through `src/paths.ts`, which reads `import.meta.env.BASE_URL`. Root-absolute paths such as `/call-for-papers` are not written directly in components: they are wrapped in `withBase()` so they resolve under the base path.

Consequence: **renaming the repository breaks the deployed site until `base` follows.** Either rename the repository back, or set `PUBLIC_BASE_PATH` to the new repository name. The deploy workflow derives both values from the repository itself, so it stays correct after a rename; a local `npm run build` uses the defaults in `astro.config.mjs`.

## Manual setup checkpoints

These account actions are intentionally manual and must be completed by an authorized release owner:

1. Enable GitHub Actions for the repository.
2. Confirm the repository name is `camos-ieee` and that the local remote points at it. If the name differs, update `PUBLIC_BASE_PATH` and the defaults in `astro.config.mjs` to the real name.
3. In repository **Settings → Pages**, set **Source** to **GitHub Actions**. Do not select a branch, and do not create a second site or change the application architecture.
4. Keep the repository public, or confirm the organization plan allows Pages for private repositories.
5. Protect `main` and require the `Deploy GitHub Pages / Build site` check before merge.
6. Configure the `github-pages` environment. Restrict it to protected branches, and add required reviewers if organizational policy requires approval before publication.
7. Keep Pages write access out of any workflow other than `.github/workflows/pages.yml`.

No token, account credential, or private authorization value belongs in this repository, `.env` files, build output, or workflow logs. The deploy workflow uses the automatically provisioned `GITHUB_TOKEN` with the `pages: write` and `id-token: write` permissions only.

## Workflow behavior

- `CI` runs `npm run check`, a high-severity dependency audit, a tracked-file secret scan, and whitespace validation on pull requests and on every non-`main` branch push.
- `Deploy GitHub Pages` runs on `main` and can be started manually with `workflow_dispatch`.
- The build job runs `npm run check` and the high-severity dependency audit again before publishing, then uploads `dist` as the Pages artifact.
- The deploy job publishes that artifact to the `github-pages` environment and exposes the resulting URL.
- Pull requests from forks receive CI without any deployment, because the Pages permissions are not granted to untrusted workflows.

## Local verification

Run the same gate used by CI:

```bash
npm run check
```

To reproduce the deployed build exactly, including the base path:

```bash
PUBLIC_SITE_URL=https://kintech-ev.github.io PUBLIC_BASE_PATH=/camos-ieee npm run build
```

Preview the result locally with `npm run preview`. There is no local deploy command: publishing happens only through the workflow.

## Post-deploy verification

After a production deployment, verify `/`, `/call-for-papers`, `/organization` and `/venue-registration` on the production URL, plus the `/kintech` redirect target. `/design-system` is an internal dev-only reference and MUST return 404 in production; treat its presence as a failed deployment.

## Rollback and retry

1. Stop or revert the promotion source in GitHub so another deployment is not queued unintentionally.
2. In the repository's **Actions** tab, open the last successful `Deploy GitHub Pages` run for the known-good commit and re-run it. Re-running the deploy job republishes that artifact.
3. If the artifact is no longer retained, revert the offending commit on `main` and let the workflow deploy the reverted state.
4. Re-run the post-deploy verification list above.
5. For a transient failure, rerun the failed job after confirming the Pages source is still set to **GitHub Actions** and the `github-pages` environment is unchanged.

GitHub Pages keeps a deployment history per environment; a rollback must not edit conference facts or require a website rebuild.

## Future custom domains

When the conference domain and DNS access are approved, add the approved apex and `www` hostnames as the custom domain for this Pages site and complete the required DNS and TLS verification. Then set `PUBLIC_SITE_URL` to the approved domain, set `PUBLIC_BASE_PATH` to `/`, and redeploy. The base path is the only application configuration that changes; links, assets and canonicals follow `import.meta.env.BASE_URL` automatically.

Do not purchase or register a domain as part of repository automation, and do not remove the `kintech-ev.github.io/camos-ieee` hostname as the deployment verification URL.
