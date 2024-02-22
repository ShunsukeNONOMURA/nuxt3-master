export const useAuth = () => {
  const authUser = useCookie<any>('authUser', {
    default: () => null,
  })
  const accessToken = useCookie<any>('accessToken', {
    default: () => '',
    maxAge: 60 * 60, // 有効期限1時間
    // maxAge: 5, // デバッグ用短期
  })

  const login = (authUser: Ref<any>) => async (userInput: any) => {
    const user = (await $fetch(`/api/users/${userInput.userId}`)).body.user
    authUser.value = user
    accessToken.value = user.userId

    // middleware でログインページにリダイレクトした場合は redirectFrom に元のページが入っている
    const to = useRoute().redirectedFrom?.path || '/'
    useRouter().push(to)
  }
  const logout = (authUser: Ref<any>) => () => {
    accessToken.value = null
    authUser.value = null

    // login画面に移動
    const to = '/login'
    useRouter().push(to)
  }

  return {
    authUser: readonly(authUser),
    accessToken,
    login: login(authUser),
    logout: logout(authUser),
  }
}
