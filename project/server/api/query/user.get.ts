import { UserService } from '~/apps'

export default defineEventHandler(async (event) => {
  const query: any = getQuery(event)
  const limit = parseInt(query.limit)
  const offset = parseInt(query.offset)
  const where = {}
  const orderBy = {}

  const [items, total] = await UserService.query(where, limit, offset, orderBy)

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
