// sum.test.js
import { fileURLToPath } from 'node:url'
import { describe, expect, test } from 'vitest'
// import { setup, $fetch, createPage } from '@nuxt/test-utils/e2e'
import { $fetch, fetch, isDev } from '@nuxt/test-utils'

describe('My test', async () => {
  test('my test', async () => {
    const { count, increment } = useCounter()
    await increment()
    expect(count.value).toBe(1)

    // const ctx = createClient();
    // const { data } = await $fetch('http://localhost:3000/api/health')
  })
})
