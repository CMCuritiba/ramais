<template>
  <v-app>
    <ToolBar />
    <nuxt/>
  </v-app>
</template>

<script>
import ToolBar from '~/components/UI/ToolBar.vue';
export default {
  components: {
    ToolBar
  }
}

</script>
