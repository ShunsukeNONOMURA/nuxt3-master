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

  v-btn(@click='addSnackbar') add
</template>

<script setup lang="ts">
  const { login, accessToken, authUser } = useAuth()

  const userInput = ref({
    userId: '000',
    userPassword: '',
  })
  const showPassword = ref(false)
  const userLogin = () => {
    login(userInput.value)
  }

  const snackbar = useSnackbar();
  const addSnackbar = () => {
    snackbar.add({
        // type: 'success',
        type: 'error', // success, error, warning, info
        text: `This is a snackbar message ${new Date()}`,
        // duration: 0,
    })
  }
</script>
