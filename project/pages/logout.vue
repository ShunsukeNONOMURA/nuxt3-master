<template lang="pug">
div logout
</template>

<script setup lang="ts">
  const { logout } = useAuth()
  logout()
</script>
