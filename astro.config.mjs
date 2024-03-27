import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://tzz.dev',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'zh'],
    fallback: {
      en: 'ja',
      zh: 'ja'
    },
  },
  integrations: [react(), sitemap(), tailwind({
    applyBaseStyles: false
  })],
});