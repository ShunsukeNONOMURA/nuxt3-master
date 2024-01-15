<template lang="pug">
div
  base-sub-header
    v-tabs(dense)
      v-tab(dense, to='/setting') ユーザ管理
      v-tab(dense, to='/setting/tmp') 空き
  NuxtPage
</template>

<script setup lang="ts"></script>
