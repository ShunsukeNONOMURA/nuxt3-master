export const useAuth = () => {
  // const currentUser = useState<boolean>('currentUser', () => false)
  const currentUser = useCookie<any>('currentUser', {
    default: () => null,
  })
  // currentUser.value = currentUser.value || null

  const login = (currentUser: Ref<any>) => (user: any) => {
    currentUser.value = user
    // middleware でログインページにリダイレクトした場合は redirectFrom に元のページが入っている
    const to = useRoute().redirectedFrom?.path || '/'
    useRouter().push(to)
  }
  const logout = (currentUser: Ref<any>) => () => {
    currentUser.value = null
    const to = '/login'
    useRouter().push(to)
  }

  return {
    currentUser: readonly(currentUser),
    login: login(currentUser),
    logout: logout(currentUser),
  }
}
