import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://tzz.dev',
  output: 'server',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      en: 'ja',
      zh: 'ja'
    },
    domains: {
      en: 'https://en.tzz.dev',
      zh: 'https://zh.tzz.dev'
    },
  },
  experimental: {
    i18nDomains: true
  },
  integrations: [react(), sitemap(), tailwind({
    applyBaseStyles: false
  })],
});