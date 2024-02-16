import type { User } from "~/apps"

export const userStore = () => {
  const user: Ref<any> = ref({})
  const users: Ref<any> = ref({
    loading: true,
    items: [],
    total: 0,
  })
  const userAggs: Ref<any> = ref([
    {
      values: [],
      labels: [],
      type: 'pie',
    },
  ])

  // query user
  const queryUser = async (limit: number, offset: number) => {
    // users.value = {
    //   loading: false,
    //   items: [{}],
    //   total: 1,
    // }
    // users.value.loading = true
    const { data } = await useFetch('/api/query/user', {
      method: 'GET',
      // body: {
      //   user
      // },
      params: {
        limit,
        offset,
      },
    })
    // console.log(users.value)
    // console.log(data.value.data.user)
    users.value = data.value.data.user

    const aggs = data.value?.data.user.aggs

    userAggs.value = [
      {
        values: aggs.map((i) => i._count.tUser),
        labels: aggs.map((i) => i.userRoleName),
        type: 'pie',
      },
    ]
  }

  // get 1 user
  const getUser = async (userId) => {
    const { data } = await useFetch(`/api/user/${userId}`)
    user.value = data.value.data.user
  }

  // create 1 user
  const createUser = async (user: User) => {
    // console.log(user)
    const { data } = await useFetch('/api/user', {
      method: 'POST',
      body: {
        user,
      },
      watch: false,
    })
    console.log(data)
  }

  // delete 1 user
  const deleteUser = async (user: User) => {
    console.log(user)
    // 削除
    const { data } = await useFetch(`/api/user/${user.userId}`, {
      method: 'delete',
      watch: false,
    })
    console.log(data)
  }

  return {
    user,
    users,
    userAggs,
    queryUser,
    getUser,
    createUser,
    deleteUser,
  }
}
