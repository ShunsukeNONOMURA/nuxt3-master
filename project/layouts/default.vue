<template lang="pug">
v-app
  v-app-bar(v-if='authUser', app)
    v-app-bar-nav-icon(@click='drawer = !drawer')
    router-link(to='/')
      v-btn title
      v-btn(variant='plain', icon='$vuetify', color='red')
    v-spacer
    v-menu(offset-y)
      template(#activator='{ props }')
        v-btn(v-bind='props', icon='mdi-account')
      v-list(nav)
        v-list-item {{ authUser.userId }} {{ authUser.userName }}
        v-divider
        v-list-item(prepend-icon='mdi-logout', title='logout', to='/logout')
        v-list-item(prepend-icon='mdi-cog', title='setting', to='/setting')
        v-divider
        v-list-item(
          prepend-icon='mdi-information',
          title='information',
          to='/information'
        )
  v-navigation-drawer(v-if='authUser', v-model='drawer')
    v-list(nav, density='compact')
      v-list-item(
        v-for='(value, key) in drawerList',
        :key='key',
        :prepend-icon='value.prependIcon',
        :title='value.title',
        :to='value.to'
      )
  v-main
    v-container
      NuxtPage
  v-footer(app)
    | VERSION {{ $config.public.env }} {{ $config.public.version }}
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const { authUser } = useAuth()
  const drawer = ref(false)

  const drawerList = [
    {
      prependIcon: 'mdi-home',
      title: 'home',
      to: '/home',
    },
    {
      prependIcon: 'mdi-cog',
      title: 'setting',
      to: '/setting',
    },
    {
      prependIcon: 'mdi-information',
      title: 'information',
      to: '/information',
    },
    {
      prependIcon: 'mdi-help-circle',
      title: 'manual',
      to: '/manual',
    },
  ]
</script>
