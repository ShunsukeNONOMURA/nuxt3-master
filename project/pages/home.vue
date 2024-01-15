<template lang="pug">
div
  div {{ $t('domain.welcome') }}
  v-data-table-server(
      :headers="userHeaders"
      :items="users.items"
      :items-length="users.total"
      @update:options="onUserUpdate"
  )
      template(#[`item.userName`]="{ item }")
          router-link(:to="`user/${item.userId}`") {{ item.userName }}
      template(#[`item.actions`]="{ item }")
          v-btn(
            @click="onDeleteUser(item)"
          ) delete

  v-text-field(v-model="tmpUser.userId" label="userId")
  v-text-field(v-model="tmpUser.userName" label="userName")
  //- v-text-field(v-model="tmpUser")
  v-btn(@click="onCreateUser") create
</template>

<script setup lang="ts">
const { users, queryUser, createUser, deleteUser } = userStore()

const userHeaders = [
  {
    title: 'ユーザID',
    sortable: false,
    key: 'userId'
  },
  {
    title: 'ユーザ名',
    sortable: false,
    key: 'userName'
  },
  {
    // title: t('case.action'),
    title: '操作',
    sortable: false,
    key: 'actions'
  }
]
// 取得
const onUserUpdate = ({ page, itemsPerPage, sortBy }) => {
  const offset = (page - 1) * itemsPerPage
  console.log(sortBy)
  queryUser(
    itemsPerPage,
    offset
  )
}

// 作成
const tmpUser = ref({})
const onCreateUser = () => {
  createUser(tmpUser)
}

// 削除
const onDeleteUser = (user) => {
  deleteUser(user)
}
</script>
