// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import { defineSiteConfig } from "@/config/site";

// https://astro.build/config
export default defineConfig({
  site: "https://tzz.dev",
  i18n: {
    locales: ["ja", "zh-CN"],
    defaultLocale: "ja",
  },
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});

export const siteConfig = defineSiteConfig({
  siteName: "Tzz.Dev",
});
