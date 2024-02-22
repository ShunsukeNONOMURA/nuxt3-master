export default defineNuxtRouteMiddleware((to) => {
  const { authUser } = useAuth()
  // console.log(currentUser)

  const pathLogin = '/login'
  if (!authUser.value && to.path !== pathLogin) {
    return navigateTo(pathLogin)
  }
})
