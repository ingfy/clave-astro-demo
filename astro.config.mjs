import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  base: "/clave-astro-demo",
  preftch: {
    prefetchAll: true
  },
  integrations: [mdx(), react(), svelte()],
  site: "https://ingfy.github.io"
});