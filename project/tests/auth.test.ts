// sum.test.js
import { fileURLToPath } from 'node:url'
import { describe, expect, test } from 'vitest'
// import { setup, $fetch, createPage } from '@nuxt/test-utils/e2e'
import { $fetch, fetch, isDev } from '@nuxt/test-utils'
import { mountSuspended, registerEndpoint } from '@nuxt/test-utils/runtime'

registerEndpoint('/api/users/000', () => ({
  body: {
    user: {
      userId: '000',
      userName: 'admin',
      userRoleId: '00',
      userCreatedAt: '2024-02-22T06:42:27.996Z',
      userUpdatedAt: '2024-02-22T06:42:27.996Z',
    },
  },
}))

describe('auth', () => {
  test('ログインログアウトできる', async () => {
    const { authUser, login, logout } = useAuth()
    const userInput = {
      userId: '000',
    }
    expect(authUser.value).toBe(null)
    await login(userInput)
    expect(authUser.value.userId).toBe(userInput.userId)
    await logout()
    expect(authUser.value).toBe(null)
  })
})
