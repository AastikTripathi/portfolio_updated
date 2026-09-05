import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import markdoc from '@astrojs/markdoc';

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  site: 'https://aastiktripathi.pages.dev',
  output: 'static',
  adapter: isDev ? undefined : cloudflare({ imageService: 'passthrough' }),
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/keystatic'),
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date()
    }),
    markdoc({ extension: ['.mdoc', '.md'] })
  ],

  vite: {
    envPrefix: ['PUBLIC_', 'KEYSTATIC_'],
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['lodash/debounce', 'lodash', 'superstruct'],
    },
    ssr: {
      noExternal: ['@keystatic/core', '@keystatic/astro', 'superstruct'],
    },
  },
});
