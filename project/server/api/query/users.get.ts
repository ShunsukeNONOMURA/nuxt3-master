import { UserService } from '~/apps'

export default defineEventHandler(async (event) => {
  const query: any = getQuery(event)
  const queryText: string = query.query
  // console.log(queryText)
  const limit = parseInt(query.limit)
  const offset = parseInt(query.offset)
  const where = {
    userName: {
      contains: queryText
    }
  }
  console.log(where)
  const orderBy = {}

  const [items, total, aggs] = await UserService.query(
    where,
    limit,
    offset,
    orderBy
  )

  return {
    head: {
      status: 'ok',
    },
    body: {
      user: {
        total,
        items,
        // limit,
        // offset,
        aggs,
      },
    },
  }
})
