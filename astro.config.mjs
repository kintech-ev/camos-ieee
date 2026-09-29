import { defineConfig } from 'astro/config';
import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Routes that must exist for local review but never ship.
// `/design-system` stays routable under `npm run dev` because it is the canonical
// rendered design reference; its built output is removed from the artifact so the
// published site does not expose it.
const INTERNAL_ROUTES = ['design-system'];

const excludeInternalRoutes = () => ({
  name: 'exclude-internal-routes',
  hooks: {
    'astro:build:done': async ({ dir, logger }) => {
      const outDir = fileURLToPath(dir);
      for (const route of INTERNAL_ROUTES) {
        await rm(join(outDir, route), { recursive: true, force: true });
        logger.info(`Excluded internal route from build output: /${route}`);
      }
    },
  },
});

export default defineConfig({
  output: 'static',
  site: process.env.PUBLIC_SITE_URL || 'https://ieee-icamc.org',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  },
  integrations: [excludeInternalRoutes()]
});
