import { PrismaClient } from '@prisma/client'

import { ValueObject } from './core'

// export type UserId = string
export type User = any

const UserRoleId = {
  admin: '00',
  guest: '99',
}
export type UserRoleId = (typeof UserRoleId)[keyof typeof UserRoleId]

export class UserId extends ValueObject<string, 'UserId'> {
  // constructor(value: string) {
  //   super(value)
  // }

  validate() {}
}

export class UserFactory {
  static create(userProps: any) {
    const user = userProps
    // user.userRoleId = '99'
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

  static async store(user: User) {
    const createdUser = await this.prisma.tUser.create({
      data: user,
    })
    return createdUser
  }
}

export class UserService {
  static prisma = new PrismaClient()

  static async query(where: any, limit: number, offset: number, orderBy: any) {
    const [items, total, aggs] = await Promise.all([
      this.prisma.tUser.findMany({
        where,
        include: { 
          mUserRole: {
            select:{
              userRoleName:true
            }
          },
        },
        take: limit,
        skip: offset,
        orderBy,
      }),
      this.prisma.tUser.count({ where }),

      // user 集計 ////////////////////////////////////
      // this.prisma.tUser.groupBy({
      //   by: ['userRoleId'],
      //   where,
      //   _count: true,
      //   orderBy: {
      //     _count: {
      //       userRoleId: 'desc',
      //       // select: {
      //       //   userRoleName: true,
      //       // }
      //     }
      //   },
      //   // skip: 1,
      //   // take: 1,
      // }),
      this.prisma.mUserRole.findMany({
        include: {
          // _count: true
          _count: { select: { tUser: true} }
        },
        orderBy: {
          tUser: {
            _count: 'desc'
          },
        },
      })
    ])
    return [items, total, aggs]
  }
}
