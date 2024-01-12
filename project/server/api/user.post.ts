import { PrismaClient } from '@prisma/client'

class UserFactory {
    constructor() {
    }
    create(userProps: any) {
        const user = userProps
        user.userRoleId = 'sample'
        return user;
    }
}

export default defineEventHandler(async (event) => {
    const userFactory = new UserFactory()

    const body = await readBody(event)
    const userProps = body.user
    const user = userFactory.create(userProps)

    const prisma = new PrismaClient()

    let data = {}
    let head = {
        code : ''
    }
    try {
        // 例外を throw する処理
        const createUser = await prisma.tUser.upsert({
            where: user,
            update: user,
            create: user,
        })
        data = createUser
        head.code = 'S'
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error(e.message);
        }
        head.code = 'E'
    }

    console.log(head)

    return { 
        head,
        data
     }
})
  