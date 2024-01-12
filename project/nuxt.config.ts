// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: 'aws-lambda', // lambda用のビルド指定
    serveStatic: true, // lambdaからバイナリを直接払い出す指定
    experimental: {
        openAPI : true // swagger
    },
  },
  ssr: false,
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css"
  ],
  build: {
      transpile: ["vuetify"]
  },
  vite: {
      define: {
          "process.env.DEBUG": false
      },
      // for HMR
      server: {
          watch: {
              usePolling: true
          }
      },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false, // pathによるprefixを使用するか
    },
  ],
})
