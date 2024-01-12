import { PrismaClient } from '@prisma/client'

class UserRepository {
    static prisma = new PrismaClient()

    static async find(userId) {
        const user = await this.prisma.tUser.findUnique({
            where: {
                userId
            },
        })
        return user;
    }
    static async delete(userId) {
        const prisma = new PrismaClient()
        const deleteUser = await prisma.tUser.delete({
            where: {
                userId,
            },
        })
        return deleteUser
    }
}

export default defineEventHandler(async (event) => {
    // const body = await readBody(event)
    const userRepository = new UserRepository()

    const userId = event.context.params.userId;
    // const user = await userRepository.find(userId)
    const user = await UserRepository.find(userId)

    return {
        data: {
            user
        }
    }
})