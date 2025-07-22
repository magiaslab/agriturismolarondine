import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "astro-sitemap";
import astroI18next from "astro-i18next";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://agriturismolarondine.it',
  integrations: [
    tailwind(), 
    robotsTxt(), 
    sitemap(), 
    icon(), 
    react(), 
    astroI18next()
  ],
  image: {
    domains: ["res.cloudinary.com/magiaslabcdn"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/magiaslabcdn/**',
      },
    ],
    // Ottimizzazioni aggressive per ridurre drasticamente le dimensioni
    serviceEntryPoint: '@astrojs/image/sharp',
    quality: 70, // Ridotto da 80 a 70
    format: ['webp', 'avif'], // Aggiungiamo AVIF per formati next-gen
    widths: [400, 800, 1200, 1600], // Riduciamo le dimensioni massime
    densities: [1, 2], // Solo 1x e 2x per ridurre il numero di varianti
  },
  vite: {
    build: {
      // Ottimizzazioni per ridurre JavaScript inutilizzato
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom'],
            'ui': ['@astrojs/react', 'astro-icon'],
          }
        }
      }
    },
    ssr: {
      // Riduci il bundle size per SSR
      noExternal: ['@astrojs/react']
    }
  }
});


