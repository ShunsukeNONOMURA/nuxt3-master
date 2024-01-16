// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules
  modules: [
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
