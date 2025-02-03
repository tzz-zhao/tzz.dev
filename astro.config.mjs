// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

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
