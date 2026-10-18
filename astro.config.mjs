import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Change `site` to your real domain (needed for canonical URLs and the sitemap).
export default defineConfig({ site: 'https://example.com', integrations: [sitemap()], trailingSlash: 'always' });
