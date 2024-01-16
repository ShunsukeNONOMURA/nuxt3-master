import { UserFactory, UserRepository } from '~/apps'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const userProps = body.user
  const user = UserFactory.create(userProps)

  const head = {}
  const data = await UserRepository.store(user)

  return {
    head,
    data,
  }
})
