# （記述中）OpenAPI

## nuxt3での自動化
nitroの実験的機能でSwagger UI形式でのドキュメンテーションをサポートしている

https://nitro.unjs.io/config

nuxt.config.ts
```ts
export default defineNuxtConfig({
  nitro: {
    experimental: {
      openAPI: true, // swagger
    },
  },
})
```