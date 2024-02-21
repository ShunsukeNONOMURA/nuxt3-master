// sum.test.js
import { describe, expect, test } from 'vitest'

test('useCounter', async () => {
  // sample
  const { count, increment } = useCounter()
  expect(count.value).toBe(0)
  increment()
  expect(count.value).toBe(1)
})