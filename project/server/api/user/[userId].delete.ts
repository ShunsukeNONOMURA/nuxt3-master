import { PrismaClient } from '@prisma/client'
export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient()

  const userId = event.context.params.userId

  const deleteUser = await prisma.tUser.delete({
    where: {
      userId
    }
  })

  return {
    data: { deleteUser }
  }
})
