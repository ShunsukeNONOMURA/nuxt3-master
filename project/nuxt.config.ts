// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules
  modules: [
    // test
    '@nuxt/test-utils/module',
    // nuxt-snackbar
    'nuxt-snackbar',
    // plotly
    'nuxt-plotly',
    // lodash
    'nuxt-lodash',
    // i18n
    [
      '@nuxtjs/i18n',
      {
        // デフォルト言語を除くすべてのルートにロケールプレフィックスを追加
        strategy: 'prefix_except_default',
        // 使用する言語
        locales: [
          {
            code: 'ja',
            file: 'ja.yml',
            iso: 'ja-JP',
          },
        ],
        // デフォルトの言語
        defaultLocale: 'ja',
        // 翻訳ファイルの置き場所
        langDir: 'locales/',
      },
    ],
  ],
  // sls設定
  nitro: {
    preset: 'aws-lambda', // lambda用のビルド指定
    serveStatic: true, // lambdaからバイナリを直接払い出す指定
    experimental: {
      openAPI: true, // swagger
    },
  },
  ssr: false,
  // vuetify設定
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  // nuxt-snackbar
  snackbar: {
    bottom: true,
    // right: true,
    duration: 5000
    // duration:100000000 // 約28時間
  },
  // nuxt設定
  vite: {
    // env
    define: {
      'process.env.DEBUG': false,
    },
    // Hot Module Reload
    server: {
      watch: {
        usePolling: true,
      },
    },
    optimizeDeps: {
      include: ['plotly.js-dist-min'],
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false, // pathによるprefixを使用するか
    },
  ],
  // env
  runtimeConfig: {
    public: {
      version: '',
      env: '',
    },
  },
})
