import { PrismaClient } from '@prisma/client'



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
    let data = {}
    const head = {
      code: '',
    }
    try {
      // 例外を throw する処理
      const createUser = await this.prisma.tUser.upsert({
        where: user,
        update: user,
        create: user,
      })
      data = createUser
      head.code = 'S'
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e.message)
      }
      head.code = 'E'
    }
    console.log(head)
    return data
  }
}

export class UserService {
  static prisma = new PrismaClient()

  static async query(where, limit, offset, orderBy) {
    const [items, total] = await Promise.all([
      this.prisma.tUser.findMany({
        where,
        take: limit,
        skip: offset,
        orderBy,
      }),
      this.prisma.tUser.count({ where }),
    ])
    return [items, total]
  }
}
