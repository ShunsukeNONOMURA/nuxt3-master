import { PrismaClient } from '@prisma/client'
// import cuid from 'cuid';

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
      userId: '000',
      userName: 'admin',
      userRoleId: '00',
    },
  })

  for (let i = 100; i < 120; i++) {
    // console.log(i);
    await prisma.TUser.create({
      data: {
        userId: String(i),
        userName: `guest${i}`,
        userRoleId: '99',
      },
    })
  }
  // const userTagId = cuid()
  const tUserTag = await prisma.TUserTag.create({
    data: {
      // userTagId: userTagId,
      userTagName: 'sample',
    },
  })
  await prisma.TUserUserTagMap.create({
    data: {
      userId: '000',
      userTagId: tUserTag.userTagId,
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
