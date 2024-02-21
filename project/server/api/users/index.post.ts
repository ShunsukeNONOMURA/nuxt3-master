import { UserFactory, UserRepository } from '~/apps'

export default defineEventHandler(async (event) => {
  const eventBody = await readBody(event)
  const userProps = eventBody.user

  const userDB = await UserRepository.find(userProps.userId)

  if (userDB != null) {
    console.log('duplicated !')
    // console.log(userDB)
  }

  const user = UserFactory.create(userProps)
  const head = {}
  const body = await UserRepository.store(user)

  return {
    head,
    body,
  }
})
