// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/fonts.css", "~/assets/css/main.css"],
  ssr: true,
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
  app: {
    head: {
      title: "Hann Julia Rodler",
      htmlAttrs: {
        lang: "de",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "android-chrome",
          type: "image/png",
          sizes: "192x192",
          href: "/android-chrome-192x192.png",
        },
        {
          rel: "android-chrome",
          type: "image/png",
          sizes: "512x512",
          href: "/android-chrome-512x512.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
  site: {
    url: "https://www.hannajuliarodler.com",
    name: "Hanna Julia Rodler | Web Developer",
  },
  modules: [
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
  ],
});
