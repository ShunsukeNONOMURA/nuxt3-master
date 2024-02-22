<template lang="pug">
div
  user-id-text-field(v-model='userInput.userId', @keyup.enter='userLogin')
  v-text-field(
    v-model='userInput.userPassword',
    label='password',
    :type='showPassword ? "text" : "password"',
    :append-icon='showPassword ? "mdi-eye" : "mdi-eye-off"',
    @click:append='showPassword = !showPassword',
    @keyup.enter='userLogin'
  )
  v-btn(@click='userLogin') login
  | {{ authUser }}
  div {{ accessToken }}
</template>

<script setup lang="ts">
  const { login, accessToken } = useAuth()
  const { authUser } = useAuth()
  const userInput = ref({
    userId: '000',
    userPassword: '',
  })
  const showPassword = ref(false)
  const userLogin = () => {
    // console.log(userInput.value)
    // const { user, fetchUser } = useUser(userInput.value.userId)
    // console.log(user)
    login(userInput.value)
  }
</script>
