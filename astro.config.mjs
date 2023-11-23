import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  preftch: {
    prefetchAll: true
  },
  integrations: [mdx(), react(), svelte()]
});