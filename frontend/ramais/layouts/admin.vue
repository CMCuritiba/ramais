<template>
  <v-app>
    <ToolBarAdmin />
    <nuxt/>
  </v-app>
</template>

<script>
import ToolBarAdmin from '~/components/UI/admin/ToolBarAdmin.vue'
export default {
  components: {
    ToolBarAdmin
  }
}

</script>
