import { UserRepository } from '~/apps'

export default defineEventHandler(async (event) => {
  // console.log(event.context)
  const userId = event.context.params.userId
  const user = await UserRepository.find(userId)
  if (user == null) {
    console.log('user not found')
    return { body: { user: { userId: 'not found' } } }
  }

  return {
    body: {
      user,
    },
  }
})
