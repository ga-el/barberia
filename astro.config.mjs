// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server', // importante si usas SSR, si no, omite esta línea
  adapter: netlify(),
});
