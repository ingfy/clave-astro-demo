import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  base: "/clave-astro-demo",
  preftch: {
    prefetchAll: true
  },
  integrations: [mdx(), react(), svelte()],
  site: "https://ingfy.github.io",
  adapter: node({
    mode: "standalone"
  })
});