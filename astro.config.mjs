// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://henriquepacheco.com',
  // Astro 7 defaults to 'jsx', which drops the spaces between inline elements (the nav links).
  compressHTML: true,
});
