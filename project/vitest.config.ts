// vitest.config.ts
// import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    // environment: 'nuxt',
    globals: true,
    // environmentOptions: {
    //     nuxt: {
    //       mock: {
    //         intersectionObserver: true,
    //         indexedDb: true,
    //       }
    //     }
    // }
    coverage: {
      exclude: ['**/.nuxt/', '**/prisma/', '**/node_modules/', '**/tests/'],
    },
  },
})
