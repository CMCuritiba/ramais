<template>
    <v-autocomplete
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      :v-model=
      clearable
      item-text="set_nome"
      item-value="id"
      label="Digite o setor..."
      solo
    >
      <template v-slot:no-data>
        <v-list-tile>
          <v-list-tile-title>
            Nenhum setor encontrado pela pesquisa
          </v-list-tile-title>
        </v-list-tile>
      </template>
    </v-autocomplete>
</template>
    
<script>
export default {


    data () {
        return {
            items: [],
            search: null,
            isLoading: false
        }
    },
    watch: {
      search (val) {
        //if (this.items.length > 0) return
        this.isLoading = true
        this.items = this.$store.state.setores
        this.isLoading = false
      }
    }
}
</script>

<style>

</style>
