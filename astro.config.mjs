import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), sitemap(), tailwind(), mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    extendDefaultPlugins: true,
    globalCustomProperties: {
      'a': {
        style: 'text-decoration: underline;'
      }
    }
  }
});