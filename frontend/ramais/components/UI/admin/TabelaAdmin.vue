<template>
  <v-data-table
    :headers="headers"
    :items="lista"
    class="elevation-1"
    :pagination.sync="pagination"
    :rows-per-page-items="pagination.rowsPerPageItems"
  >
    <template v-slot:items="props">
      <td class="text-xs-left">{{ props.item.set_nome }}</td>
      <td class="text-xs-center">{{ props.item.numero }}</td>
      <td class="text-xs-center">
        <v-chip v-if="props.item.tipo === '0'" color="grey lighten-1">Nenhum</v-chip>
        <v-chip v-if="props.item.tipo === '1'" color="blue-grey lighten-2">Geral</v-chip>
        <v-chip v-if="props.item.tipo === '2'" color="blue-grey darken-3" class="white--text">Recepção</v-chip>
        <v-chip v-if="props.item.tipo === '3'" color="red darken-4" class="white--text">Chefia</v-chip>
      </td>
      <td class="text-xs-center">
        <v-icon v-if="props.item.visivel" medium color="black">visibility</v-icon>
        <v-icon v-else medium color="grey">visibility_off</v-icon>
      </td>
      <td class="justify-center layout px-0">
        <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
        </v-btn>
        <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
        </v-btn>
      </td>
    </template>
    <template v-slot:pageText="props">
      Ramais {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
    </template>
    <template v-slot:no-data>
        <v-alert :value="true" color="error" icon="warning">
            Desculpe, nenhum ramal encontrado.
        </v-alert>
    </template>
  </v-data-table>
</template>

<script>
    export default {
      props: {
        lista: {
            type: Array,
            required: true,
            default: () => []
        },
    },
    data () {
      return {
        pagination: {
            rowsPerPage: 12,
            rowsPerPageItems: [12]
        },
        headers: [

          {
            text: 'Setor',
            align: 'left',
            sortable: true,
            value: 'set_nome'
          },
          {
            text: 'Ramal',
            align: 'center',
            sortable: false,
            value: 'numero'
          },
          {
            text: 'Tipo',
            align: 'center',
            sortable: false,
            value: 'tipo'
          },
          {
            text: 'Visível',
            align: 'center',
            sortable: false,
            value: 'visivel'
          },
          {
            text: 'Ações',
            align: 'center',
            sortable: false,
            value: ''
          }
        ],
      }
    },
    methods: {
      editItem(item) {
        const index = this.lista.indexOf(item)
        const ramalAlterado = item
        this.$emit('altera', index, ramalAlterado)
        //this.dialog = true
      },
      deleteItem(item) {
        const index = this.lista.indexOf(item)
        const ramalDeletado = item
        this.$emit('exclui', index, ramalDeletado)
        //confirm('Você tem certeza que quer excluir este ramal ?')
      }
    },
  }
</script>

<style scoped>

</style>
