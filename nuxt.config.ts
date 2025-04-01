// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/fonts.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  icon: {
    serverBundle: {
      collections: ["heroicons"],
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: true,
      global: true,
    },
  ],
  // nitro: {
  //   preset: "node-server",
  // },
  modules: ["@nuxt/image", "@nuxt/icon", "@nuxtjs/tailwindcss"],
});
