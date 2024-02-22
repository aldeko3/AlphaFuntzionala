import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://aldeko3.github.io',
  base: '/alpha-entrenamendu-funtzionala',

});