// import type { User } from '~/apps'

export const useUser = (userId: string) => {
  const user: Ref<any> = ref({})

  const fetchUser = async (userId: string) => {
    user.value = (await $fetch(`/api/users/${userId}`)).body.user
  }

  onMounted(() => fetchUser(userId))

  return {
    user: readonly(user),
    fetchUser,
  }
}
