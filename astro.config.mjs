// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server', // o 'hybrid'
  adapter: netlify(),
  integrations: [react(), tailwind()],
  site: 'https://portafolio-paulo-melendez.com', // Reemplaza con la URL de tu sitio
  outDir: './dist',
});