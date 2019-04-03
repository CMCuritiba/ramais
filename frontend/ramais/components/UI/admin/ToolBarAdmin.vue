<template>
  <v-toolbar color="red darken-4">
    <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
      <nuxt-link class="title" to="/admin">{{ VUE_APP_TITLE }}</nuxt-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/admin" icon class="white--text">
      <v-icon>refresh</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      VUE_APP_TITLE: process.env.VUE_APP_TITLE
    }
  },
}
</script>

<style scoped>
.title {
  text-decoration: none !important;
}
.title:visited{
  color: white;
}
</style>