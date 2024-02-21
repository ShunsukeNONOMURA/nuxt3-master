import { UserRepository } from '~/apps'

export default defineEventHandler(async (event) => {
  const userId = event.context.params.userId
  const user = await UserRepository.find(userId)
  if (user == null) {
    console.log('user not found')
    return { data: { user: { userId: 'not found'} }}
  }

  return {
    data: {
      user,
    },
  }
})