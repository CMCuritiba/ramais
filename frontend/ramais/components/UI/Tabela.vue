<template>
  <v-data-table
    :headers="headers"
    :items="listaFiltrada"
    class="elevation-1"
    :pagination.sync="pagination"
    :rows-per-page-items="pagination.rowsPerPageItems"
  >
    <template v-slot:items="props">
      <td class="text-xs-left">{{ props.item.set_nome }}</td>
      <td class="text-xs-left">{{ props.item.pes_nome }}</td>
      <td class="text-xs-center"><FormatRamais :ramais="props.item" /></td>
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
  import FormatRamais from '~/components/UI/FormatRamais.vue';
  export default {
    components: {
      FormatRamais,
    },
    props: {
        listaFiltrada: {
            type: Array,
            required: true,
            default: () => []
        },
    },
    data () {
      return {
        pagination: {
            rowsPerPage: -1,
            rowsPerPageItems: [-1]
        },
        headers: [
          {
            text: 'Setor',
            align: 'left',
            sortable: true,
            value: 'set_nome'
          },
          {
            text: 'Funcionário',
            align: 'left',
            sortable: true,
            value: 'pes_nome'
          },
          {
            text: 'Ramal',
            align: 'center',
            sortable: false,
            value: 'numero'
          }
        ],
      }
    },
  }
</script>

<style scoped>

</style>
