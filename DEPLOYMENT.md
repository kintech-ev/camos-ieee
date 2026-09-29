# CAMoS deployment

This repository deploys the existing static Astro site to one Cloudflare Pages project. GitHub is the source repository and GitHub Actions provides validation and controlled deployments.

## Environments

| Environment | Source | URL pattern | Purpose |
|---|---|---|---|
| Preview | Development branch or pull request | `https://<branch>.<project>.pages.dev` | Review an unmerged change |
| Staging | `dev` | `https://dev.<project>.pages.dev` | Persistent development review |
| Production | `main` | `https://<project>.pages.dev` | Public release |

The project name and exact pages.dev hostname are selected during the manual Cloudflare setup. A custom conference domain is not required for the first deployment.

## Manual setup checkpoints

These account actions are intentionally manual and must be completed by an authorized release owner:

1. Authorize GitHub Actions for the repository and enable Actions for the repository.
2. Authorize Cloudflare access for the release owner.
3. Create one new Cloudflare Pages project for this repository's static output. Do not create a second website or change the application architecture.
4. Record the Pages project name and account ID.
5. Create a scoped Cloudflare API token that can deploy Pages projects in this account. Store it only as the GitHub Actions secret `CLOUDFLARE_API_TOKEN`.
6. Store the Cloudflare account ID as the GitHub Actions secret `CLOUDFLARE_ACCOUNT_ID`.
7. Store the Pages project name as the repository or environment variable `CLOUDFLARE_PAGES_PROJECT`.
8. Create or confirm the `dev` branch. Keep `main` as the production branch.
9. Protect `dev` and `main`. Require the `CI / Validate application` check, require review for `main`, and disallow direct pushes to `main` except for authorized emergency administrators.
10. Configure the `preview`, `staging`, and `production` GitHub environments. Keep production approval restricted to release owners if organizational policy requires it.

No token, account credential, or private authorization value belongs in this repository, `.env` files, build output, or workflow logs.

## Workflow behavior

- `CI` runs `npm run check`, a high-severity dependency audit, a tracked-file secret scan, and whitespace validation on pull requests and every branch push.
- `Deploy Cloudflare Pages` runs the application gate and dependency audit again before deployment.
- Pull requests from this repository deploy previews after validation. Fork pull requests still receive CI, but do not receive a Cloudflare deployment because secrets are unavailable to untrusted workflows.
- Merges to `dev` deploy staging automatically.
- Merges to `main` deploy production automatically after the required checks and branch protection rules pass.
- Feature branch pushes are validated. A preview is deployed when the branch is used in an eligible pull request; direct feature branch pushes do not promote staging or production.

## Local deployment

Set the project variable in the shell, then run the same gate used by CI:

```bash
export CLOUDFLARE_PAGES_PROJECT=<project-name>
npm run deploy
```

Wrangler authentication is a manual prerequisite. Use a local Cloudflare login or an appropriately scoped `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`; never add either value to tracked files.

## Rollback and retry

1. Stop or revert the promotion source in GitHub so another deployment is not queued unintentionally.
2. In Cloudflare Pages, open the project deployment history and identify the last known-good production deployment by commit SHA.
3. Use Cloudflare Pages' rollback action to make that deployment production again, or redeploy the known-good commit through the protected release process.
4. Verify `/`, `/call-for-papers`, `/organization`, and `/venue-registration` on the production pages.dev URL. `/design-system` is an internal dev-only reference and MUST return 404 in production; treat its presence as a failed deployment.
5. For a transient failure, rerun the failed GitHub Actions job after confirming the project, account, and secret configuration. Do not create a second Pages project.

A rollback must not edit conference facts or require a website rebuild. Record the incident, commit SHA, deployment URL, and recovery result in the repository's normal release record.

## Future custom domains

When the conference domain and DNS access are approved, attach the approved apex and www hostnames to the existing production Pages project in Cloudflare. Complete the required DNS and TLS verification there. Do not purchase or register a domain as part of repository automation, and do not remove the pages.dev hostname; it remains the fallback and deployment verification URL.
