<template lang="pug">
v-app-bar(density="compact" color="background" border flat)
    v-container
        slot
//- v-toolbar(density="compact" color="background" border fixed)
//-   slot
  //- v-container
  //-   slot
//- v-snackbar(v-model="snackbar" timeout="-1" absolute location="top" app)
//-   slot
</template>

<script lang="ts" setup>
// const snackbar = ref(true)
</script>

<style scoped>
.sticky {
  /* Safari */
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 1;
}
</style>