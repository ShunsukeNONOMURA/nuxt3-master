import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const query: any = getQuery(event)
  const limit = parseInt(query.limit)
  const offset = parseInt(query.offset)
  const where = {}
  const orderBy = {}

  const prisma = new PrismaClient()

  const [items, total] = await Promise.all([
    prisma.tUser.findMany({
      where,
      take: limit,
      skip: offset,
      orderBy,
    }),
    prisma.tUser.count({ where }),
  ])

  return {
    head: {
      status: 'ok',
    },
    data: {
      user: {
        total,
        items,
        // limit,
        // offset,
      },
    },
  }
})
