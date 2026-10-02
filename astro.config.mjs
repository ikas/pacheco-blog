// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://henriquepacheco.com',
  // Astro 7 defaults to 'jsx', which drops the spaces between inline elements (the nav links).
  compressHTML: true,
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Work Sans',
      cssVariable: '--font-work-sans',
      weights: [400, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Mukta',
      cssVariable: '--font-mukta',
      weights: [400, 700],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['sans-serif'],
    },
  ],
});
