import { UserRepository } from '~/apps'

export default defineEventHandler(async (event) => {
  const userId = event.context.params.userId
  const user = await UserRepository.find(userId)

  return {
    data: {
      user,
    },
  }
})
