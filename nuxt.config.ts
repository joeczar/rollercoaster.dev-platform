// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  colorMode: {
    preference: 'light',
    fallback: 'light',
    dataValue: 'theme',
    storageKey: 'color-mode',
    classSuffix: '',
  },
  imports: {
    dirs: [
      'composables',
      'utils',
      'stores'
    ],
    presets: [
      { from: 'vue', imports: ['ref', 'computed', 'reactive', 'onMounted'] }
    ]
  },
  components: {
    dirs: [
      {
        path: '~/components/ui',
        extensions: ['.vue'],
        prefix: ''
      },
      '~/components'
    ]
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true,
    config: {
      content: [
        'components/**/*.{vue,js,ts}',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'composables/**/*.{js,ts}',
        'plugins/**/*.{js,ts}',
        'App.{js,ts,vue}',
        'app.{js,ts,vue}',
        'Error.{js,ts,vue}',
        'error.{js,ts,vue}',
        'content/**/*.md'
      ]
    }
  },
  content: {
    documentDriven: false,
    highlight: {
      theme: 'github-dark'
    }
  }
})