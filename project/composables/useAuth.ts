export const useAuthUser = () => {
  return useCookie<any>('authUser', {
    default: () => null,
  })
};

export const useAuth = () => {
  const snackbar = useSnackbar();
  const authUser = useAuthUser() // わけないとauthUserが更新される前にページ更新されてうまくログインできない場合がある模様。
  // 直接保持だと別箇所参照でうまく行かない
  // const authUser = useCookie<any>('authUser', {
  //   default: () => null,
  // })
  const accessToken = useCookie<any>('accessToken', {
    default: () => '',
    maxAge: 60 * 60, // 有効期限1時間
    // maxAge: 5, // デバッグ用短期
  })

  const login = (authUser: Ref<any>) => async (userInput: any) => {
    const data = await $fetch(`/api/users/${userInput.userId}`)
    const user = data.body.user
    authUser.value = user
    accessToken.value = user.userId

    console.log(authUser.value)

    // スナックバー
    snackbar.add({
      type: 'success',
      text: `Login Successful ${new Date()}`,
      // duration: 1000,
    })

    // middleware でログインページにリダイレクトした場合は redirectFrom に元のページが入っている
    let to = useRoute().redirectedFrom?.path || '/'
    if (to === '/logout') { to = '/'}
    if (authUser.value != null) {
      useRouter().push(to)
    } else {
      snackbar.add({
          // type: 'success',
          type: 'error', // success, error, warning, info
          text: `cookie update false. please retry.`,
          // duration: 0,
      })
    }
  }
  const logout = (authUser: Ref<any>) => () => {
    accessToken.value = null
    authUser.value = null

    // スナックバー
    snackbar.add({
      type: 'success',
      text: `Logout Successful ${new Date()}`,
    })

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
