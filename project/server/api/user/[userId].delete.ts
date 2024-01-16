import { UserRepository } from '~/apps'

export default defineEventHandler(async (event) => {
  const userId = event.context.params.userId
  const deleteUser = await UserRepository.delete(userId)
  // const deletedUser = await UserRepository.delete(userId)

  return {
    data: { deleteUser },
  }
})
