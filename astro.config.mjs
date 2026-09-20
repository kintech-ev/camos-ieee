import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: process.env.PUBLIC_SITE_URL || 'https://example.icamc.org',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  }
});
