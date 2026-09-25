import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: process.env.PUBLIC_SITE_URL || 'https://example.org',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  }
});
