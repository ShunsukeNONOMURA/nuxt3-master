<template lang="pug">
div {{ user }}
</template>

<script setup lang="ts">
  const route = useRoute()
  const userId = route.params.userId as string // パスパラメータ[id]の取得

  // const user = {
  //     userId,
  //     userName: `user ${userId}`
  // }

  const { user } = useUser(userId)
</script>
