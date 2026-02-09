// @ts-check
// Force redeploy
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://baristosolutions.com',
  vite: {
    plugins: [tailwindcss()]
  }
});