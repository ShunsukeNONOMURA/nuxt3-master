/**
 *  @openapi
 *  /api/health:
 *      get:
 *          summary: return health
 *          description: return health
 *      responses:
 *          200:
 *              description: !!
*/

export default defineEventHandler(() => {
  return {
    head: {
      status: 'ok',
    },
    body: {},
  }
})
