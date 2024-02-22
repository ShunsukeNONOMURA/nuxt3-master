export default defineNuxtRouteMiddleware((to) => {
  const { currentUser } = useAuth()
  // console.log(currentUser)

  const pathLogin = '/login'
  if (!currentUser.value && to.path !== pathLogin) {
    return navigateTo(pathLogin)
  }
})
  