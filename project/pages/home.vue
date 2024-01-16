<template lang="pug">
div
  div {{ $t('domain.welcome') }}
  user-data-table-server(
    :items='users.items',
    :items-length='users.total',
    density,
    @update:options='onUpdateUser',
    @delete-user='onDeleteUser'
  )

  v-text-field(v-model='tmpUser.userId', label='userId')
  v-text-field(v-model='tmpUser.userName', label='userName')
  //- v-text-field(v-model="tmpUser")
  v-btn(@click='onCreateUser') create

  v-date-picker
</template>

<script setup lang="ts">
  const { users, queryUser, createUser, deleteUser } = userStore()

  // 取得
  const onUpdateUser = ({ page, itemsPerPage, sortBy }) => {
    const offset = (page - 1) * itemsPerPage
    console.log(sortBy)
    queryUser(itemsPerPage, offset)
  }

  // 作成
  const tmpUser = ref({})
  // const tmpUser = {}
  const onCreateUser = () => {
    // console.log(tmpUser)
    createUser(tmpUser)
  }

  // 削除
  const onDeleteUser = (user) => {
    // console.log(user)
    deleteUser(user)
  }
</script>
