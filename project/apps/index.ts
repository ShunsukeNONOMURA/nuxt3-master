import { PrismaClient } from '@prisma/client'

import { ValueObject } from './core'

export class UserId extends ValueObject<string, 'UserId'> {
  // constructor(value: string) {
  //   super(value)
  // }

  validate() {}
}

export class UserFactory {
  static create(userProps: any) {
    const user = userProps
    user.userRoleId = 'sample'
    return user
  }
}

export class UserRepository {
  static prisma = new PrismaClient()

  static async find(userId: string) {
    const user = await this.prisma.tUser.findUnique({
      where: {
        userId,
      },
    })
    return user
  }

  static async delete(userId: string) {
    const prisma = new PrismaClient()
    const deleteUser = await prisma.tUser.delete({
      where: {
        userId,
      },
    })
    return deleteUser
  }

  static async store(user) {
    const createdUser = await this.prisma.tUser.create({
      data: user,
    })
    return createdUser
  }
}

export class UserService {
  static prisma = new PrismaClient()

  static async query(where, limit, offset, orderBy) {
    const [items, total, aggs] = await Promise.all([
      this.prisma.tUser.findMany({
        where,
        take: limit,
        skip: offset,
        orderBy,
      }),
      this.prisma.tUser.count({ where }),
      this.prisma.tUser.groupBy({
        by: ['userRoleId'],
        where,
        _count: true,
      }),
    ])
    return [items, total, aggs]
  }
}
