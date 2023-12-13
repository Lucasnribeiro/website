import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), sitemap()]
});