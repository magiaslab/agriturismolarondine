import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "astro-sitemap";
import astroI18next from "astro-i18next";
import icon from "astro-icon";
import react from "@astrojs/react";



// https://astro.build/config
export default defineConfig({
  site: 'https://agriturismolaronine.it',
  integrations: [tailwind(), robotsTxt(), sitemap(), icon(), react(), astroI18next()],
  
});