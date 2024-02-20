// vitest.config.ts
import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    // environmentOptions: {
    //     nuxt: {
    //       mock: {
    //         intersectionObserver: true,
    //         indexedDb: true,
    //       }
    //     }
    // }
  }
})