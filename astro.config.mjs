import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["v5.airtableusercontent.com"]
  },
  integrations: [tailwind(), markdoc({allowHTML: true})]
});