// sum.test.js
import { expect, test } from 'vitest'
// import { render, screen } from '@testing-library/vue'

// import {UserId} from '~/apps'

// import isEqual from 'lodash/isEqual'
import { UserId } from '../apps'

// import { logout } from '../pages/logout.vue'

test('display user', () => {
  // render(logout)
  // const wrapper = mount(logout, {
  //   props: {
  //     msg: 'hello',
  //   },
  // })
})


import { useCounter } from '~/composables/useCounter'

test('useCounter', () => {
  const { count, increment } = useCounter()
  expect(count.value).toBe(0)

  increment()
  expect(count.value).toBe(1)
})