import { UserFactory, UserRepository } from '~/apps'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const userProps = body.user

  const userDB = await UserRepository.find(userProps.userId)

  if (userDB != null) {
    console.log('duplicated !')
    // console.log(userDB)
  }

  const user = UserFactory.create(userProps)
  const head = {}
  const data = await UserRepository.store(user)

  return {
    head,
    data,
  }
})
