<template lang="pug">
v-app
    base-header(
        app
    )
        v-app-bar-nav-icon(@click="drawer = !drawer")
        router-link(to="/")
            v-btn title
            v-btn(
                variant="plain"
                icon="$vuetify"
                color="red"
            )
        v-spacer
        v-menu(offset-y)
            template(#activator="{ props }")
                v-btn(v-bind="props" icon="mdi-account")
            v-list(nav)
                v-list-item hoge
                v-divider
                v-list-item(prepend-icon="mdi-logout" title="logout" to="/logout")
                v-list-item(prepend-icon="mdi-cog" title="setting" to="/setting")
                v-divider
                v-list-item(prepend-icon="mdi-information" title="information" to="/information")
    v-navigation-drawer(v-model="drawer")
        v-list(nav density="compact")
            v-list-item(prepend-icon="mdi-home" title="home" to="/home")
            v-list-item(prepend-icon="mdi-cog" title="setting" to="/setting")
            v-list-item(prepend-icon="mdi-information" title="information" to="/information")
    v-main()
        v-container
            NuxtPage
    v-footer(
        app
        absolute
        flat
        color="primary"
    )
        | ver

</template>

<script setup lang="ts">
import { ref } from 'vue'
const drawer = ref(false)
</script>
