export const userStore = () => {
    const user: Ref<any> = ref({})
    const users: Ref<any> = ref({})

    // query user
    const queryUser = async (limit, offset) => {
      const { data } = await useFetch(
        '/api/query/user',
        {
            method: 'GET',
            // body: {
            //   user
            // },
            params: {
                limit,
                offset,
            },
        }
      )
      users.value = data.value.data.user
    }

    // get 1 user
    const getUser = async (userId) => {
      const { data } = await useFetch(
        `/api/user/${userId}`,
      )
      user.value = data.value.data.user
    }

    // create 1 user
    const createUser = async (user) => {
      const { data } = useFetch(
        `/api/user`,
        {
          method: 'POST',
          body: {
            user
          },
        }
      )
      console.log(data)
    }


    // delete 1 user
    const deleteUser = async (user) => {
      console.log(user)
      // 削除
      const { data } = await useFetch(
        `/api/user/${user.userId}`,
        {
          method: 'delete',
        }
      )
    }

    
  
    return {
      user,
      users,
      queryUser,
      getUser,
      createUser,
      deleteUser,
    }
  }