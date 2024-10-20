// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

import robotsTxt from "astro-robots-txt";

const { PUBLIC_WP_URL } = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");
console.log(PUBLIC_WP_URL);

// https://astro.build/config
export default defineConfig({
  site: "https://astro-wordpress-lime.vercel.app",
  image: {
    domains: [PUBLIC_WP_URL],
  },

  integrations: [tailwind({
    applyBaseStyles: false,
  }), react(), robotsTxt()],

  server: {
    host: true,
  },

  output: "hybrid",
  adapter: vercel(),
});