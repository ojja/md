import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  outDir: "./public",
  // Enable many frameworks to support all different kinds of components.
  integrations: [react(), tailwind()],
  output: "server",
  adapter: cloudflare()
});