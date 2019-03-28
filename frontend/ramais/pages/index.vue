<template>
<div>
  <v-toolbar>
          <v-text-field
            label="Digite o setor ou o nome para pesquisar"
            append-icon="search"
            v-model="textoFiltro"
          ></v-text-field>
  </v-toolbar>
  <v-card>
    <Tabela :listaFiltrada="ramaisFiltrados"/>
  </v-card>
</div>
</template>

<script>
import Tabela from '~/components/UI/Tabela.vue';

export default {
  components: {
    Tabela,
  },
  data() {
    return {
      textoFiltro: ''
    }
  },
  
  computed: {
    lista() {
      return this.$store.state.ramais;
    },
    ramaisFiltrados() {
      //return this.lista;      
      if (this.textoFiltro.trim() == '')
        return this.lista
      else {
        const filter = new RegExp(this.textoFiltro, 'i');
        return this.lista.filter(el => {
          if ((el['set_nome'].match(filter)) || (el['pes_nome'].match(filter)))
            return true;
          else
            return false;
        })
      }
    },
    informacao() {
      if (this.textoFiltro.trim() != '')
        return 'Filtrando lista por : ' + this.textoFiltro;
      else
        return 'Lista completa';
    },
    corInfo() {
      if (this.textoFiltro.trim() != '')
        return 'red darken-3';
      else
        return 'blue-grey darken-1';
    }
  },

}
</script>


