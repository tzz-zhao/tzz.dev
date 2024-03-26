import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://tzz.dev',
  // output: 'server',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: false
    },
  },
  integrations: [
    react(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ]
});