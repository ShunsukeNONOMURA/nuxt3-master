import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.MUserRole.create({
    data: {
      userRoleId: '00',
      userRoleName: 'admin',
    },
  })
  await prisma.MUserRole.create({
    data: {
      userRoleId: '99',
      userRoleName: 'guest',
    },
  })
  await prisma.TUser.create({
    data: {
      userId: '00',
      userName: 'admin',
      userRoleId: '00',
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
