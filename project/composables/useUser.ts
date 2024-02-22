// import type { User } from '~/apps'

export const useUser = (userId: string) => {
  const user: Ref<any> = ref({})

  const getUser = async (userId: string) => {
    const { data } = await useFetch(`/api/users/${userId}`)
    user.value = data.value.body.user
  }

  onMounted(() => getUser(userId))

  return {
    user: readonly(user),
  }
}
