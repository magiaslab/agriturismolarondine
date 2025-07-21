/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "it",
  locales: ["it", "en"],
  i18next: {
    debug: false,
    initImmediate: false,
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
  },
  i18nextPlugins: { fsBackend: "i18next-fs-backend" },
}; 