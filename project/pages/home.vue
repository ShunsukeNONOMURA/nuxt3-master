<template lang="pug">
div
  div {{ $t('domain.welcome') }}
  user-data-table-server(
    :items='users.items',
    :items-length='users.total',
    :loading='users.loading',
    density='compact',
    @update:options='onUpdateUser',
    @delete-user='onDeleteUser'
  )

  user-graph(:data='userAggs')

  v-text-field(v-model='tmpUser.userId', label='userId')
  v-text-field(v-model='tmpUser.userName', label='userName')
  v-select(v-model='tmpUser.userRoleId', label='userRoleId', :items='items')

  v-btn(@click='onCreateUser') create
  div {{ tmpUser }}

  v-date-picker
</template>

<script setup lang="ts">
  import type { User } from '~/apps';

  const { users, userAggs, queryUser, createUser, deleteUser } = userStore()

  // 取得
  const onUpdateUser = ({ page, itemsPerPage, sortBy }: any) => {
    const offset = (page - 1) * itemsPerPage
    console.log(sortBy)
    queryUser(itemsPerPage, offset)
  }

  // const tmpUser = {}
  const onCreateUser = () => {
    // console.log(tmpUser)
    createUser(tmpUser)
  }

  // 削除
  const onDeleteUser = (user: User) => {
    // console.log(user)
    deleteUser(user)
  }

  // import {UserRoleId} from '~/apps'
  // tmpUser.userRoleId = items[0].value
  // 作成
  const items = [
    {
      title: 'admin',
      value: '00',
    },
    {
      title: 'guest',
      value: '99',
    },
  ]
  const tmpUser = ref({
    userRoleId: items[1].value,
  })

  // const Position = {
  //   Top: 0,
  //   Right: 1,
  //   Bottom: 2,
  //   Left: 3,
  // } as const

  // type Position = (typeof Position)[keyof typeof Position]

  // console.log(Position)
</script>
