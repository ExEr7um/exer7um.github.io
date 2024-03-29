/**
 * Общие модули, которые используются в любой среде.
 *
 * Сюда нужно помещать модули, которые находятся в `dependencies`
 */
const modules = [
  "@formkit/auto-animate/nuxt",
  "@nuxt/fonts",
  "@nuxt/image",
  "@nuxtjs/i18n",
  "@nuxtjs/tailwindcss",
  "@vueuse/nuxt",
  "nuxt-headlessui",
  "nuxt-icon",
]

/**
 * Объединенный массив модулей, которые будут использоваться только в `DEV` среде.
 *
 * Сюда нужно помещать модули, которые находятся в `devDependencies`, и не будут установлены при сборке проекта.
 */
const devModules = [...modules, "@nuxt/eslint", "@nuxt/test-utils/module"]

export default defineNuxtConfig({
  $development: {
    modules: devModules,
  },
  $production: {
    modules,
  },
  $test: {
    modules: devModules,
  },
  appConfig: {
    nuxtIcon: {
      size: "24px",
    },
  },
  devtools: {
    enabled: true,
  },
  experimental: {
    componentIslands: {
      selectiveClient: "deep",
    },
    cookieStore: true,
    headNext: true,
    typedPages: true,
  },
  extends: ["@nuxthub/core"],
  fonts: {
    experimental: {
      addPreloadLinks: true,
    },
    families: [
      {
        name: "Gill Sans",
        provider: "local",
        weights: [400, 700],
      },
    ],
  },
  i18n: {
    defaultLocale: "ru",
    langDir: "assets/lang/",
    lazy: true,
    locales: [
      {
        code: "ru",
        file: "ru.json",
        iso: "ru-RU",
        name: "Русский",
      },
      {
        code: "en",
        file: "en.json",
        iso: "en-US",
        name: "English",
      },
    ],
    trailingSlash: true,
  },
  postcss: {
    plugins: {
      "tailwindcss/nesting": "postcss-nesting",
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  tailwindcss: {
    viewer: false,
  },
  vite: {
    optimizeDeps: {
      exclude: ["@headlessui/vue"],
    },
  },
})
