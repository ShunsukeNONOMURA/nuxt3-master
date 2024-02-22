<template lang="pug">
div
  user-id-text-field(v-model="userId")
  user-id-text-field(v-model="userId")
  v-btn(@click="userLogin") login
</template>

<script setup lang="ts">
const { login } = useAuth()
const userId = ref('000')
const userLogin = async () => {
  await login({
    userId
  })
}
</script>