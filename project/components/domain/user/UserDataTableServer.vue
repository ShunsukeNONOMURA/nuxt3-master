<template lang="pug">
v-data-table-server(:headers='userHeaders')
  template(#[`item.userName`]='{ item }')
    router-link(:to='`user/${item.userId}`') {{ item.userName }}
  template(#[`item.actions`]='{ item }')
    delete-icon-button(size='small', @click='deleteUser(item)') delete
</template>

<script setup lang="ts">
  import type { User } from '~/apps'
  const { t } = useI18n()
  const userHeaders = [
    {
      title: t('domain.user.userId'),
      sortable: false,
      key: 'userId',
    },
    {
      title: t('domain.user.userName'),
      sortable: false,
      key: 'userName',
    },
    {
      title: t('domain.user.userRoleId'),
      sortable: false,
      key: 'userRoleId',
    },
    {
      title: t('domain.user.userRoleName'),
      sortable: false,
      key: 'mUserRole.userRoleName',
    },
    {
      title: t('domain.user.userCreatedAt'),
      sortable: false,
      key: 'userCreatedAt',
    },
    {
      // title: t('case.action'),
      title: '操作',
      sortable: false,
      key: 'actions',
    },
  ]
  // 削除
  interface Emits {
    // 関数名, 引数の型, 返り値の型
    (e: 'deleteUser', v: null): void
  }
  const emits = defineEmits<Emits>()
  const deleteUser = (user: User) => {
    // console.log(user)
    // this.$emit('deleteUser', user)
    emits('deleteUser', user)
  }
</script>
