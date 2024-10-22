import { execaSync } from 'execa'
import MarkdownItMagicLink from 'markdown-it-magic-link'
import { appDescription, appName } from './app/constants'
import { dependencies } from './package.json'

const gitSha = execaSync('git', ['rev-parse', 'HEAD']).stdout.trim()

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    'nuxt-compile-markdown',
    '@nuxtjs/color-mode',
  ],

  ssr: false,

  markdown: {
    markdownItSetup(md) {
      md.use(MarkdownItMagicLink, {
        linksMap: {
          QiFi: 'https://github.com/qifi-dev/qrs',
        },
        imageOverrides: [
          ['https://github.com/qifi-dev/qrs', 'https://cdn.jsdelivr.net/gh/qifi-dev/qrs/public/logo.svg'],
        ],
      })
    },
  },

  runtimeConfig: {
    public: {
      buildTime: Date.now(),
      sha: gitSha,
    },
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
    scanPageMeta: false,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    disableTransition: true,
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-cn',
      },
      title: appName,
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: 'black' },
      ],
    },
  },

  devtools: { enabled: false },

  features: {
    inlineStyles: false,
  },

  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
    transform: {
      include: [/\.vue/, /\.md/],
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  vite: {
    optimizeDeps: {
      include: [
        ...Object.keys(dependencies),
      ],
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      },
    },
  },

  i18n: {
    langDir: './locales',
    locales: [
      { code: 'zh-Hans', language: 'zh-Hans', name: '简体中文', file: 'zh-Hans.json' },
      { code: 'zh-Hant', language: 'zh-Hant', name: '繁體中文', file: 'zh-Hant.json' },
      { code: 'en', language: 'en', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'zh-Hans',
    strategy: 'no_prefix',
    vueI18n: './app/locales/i18n.config.ts',
  },

  compatibilityDate: '2024-10-22',
})
