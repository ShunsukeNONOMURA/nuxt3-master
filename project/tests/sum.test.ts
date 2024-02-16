// sum.test.js
import { expect, test } from 'vitest'

// import {UserId} from '~/apps'

import isEqual from 'lodash/isEqual'
import { UserId } from '../apps'

export class BookId {
  private readonly _value: string

  constructor(value: string) {
    this._value = value
  }

  equals(other: BookId): boolean {
    return isEqual(this._value, other._value)
  }

  get value(): string {
    return this._value
  }
}

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3)

  const uid1 = new UserId('1')
  const uid12 = new UserId('1')
  const uid2 = new UserId('2')

  // console.log(uid1 === uid1)
  console.log(uid1.equals(uid12))
  console.log(uid1.value)
  console.log(uid2)

  const bi1 = new BookId('9784167158057')
  const bi2 = new BookId('9784167158057')

  console.log(bi1.equals(bi2))
  console.log(bi1)
})
