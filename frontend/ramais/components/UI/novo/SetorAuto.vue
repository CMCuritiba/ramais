<template>
    <v-autocomplete
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      v-model="model"
      clearable
      item-text="set_nome"
      item-value="id"
      :label="label"
      box
      color="blue-grey lighten-2"
      @input="selecionou"
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

    props: {
      label: {
        type: String,
        required: true,
      }
    },

    data () {
        return {
            items: [],
            search: null,
            isLoading: false,
            model: null
        }
    },
    watch: {
      search (val) {
        if (this.items.length > 0) return
        this.isLoading = true
        this.items = this.$store.getters.setores
        this.isLoading = false
      }
    },
    methods: {
        selecionou() {
            this.$emit('selecionou', this.model)
        }
    }
}
</script>

<style>

</style>
