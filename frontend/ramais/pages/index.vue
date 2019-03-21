<template>
<v-card>
  <v-card-text>
    <v-text-field box label="Digite o funcionário ou departamento" append-icon="search" id="textoFiltro" v-model="textoFiltro"></v-text-field>
    <v-layout row wrap>
      <v-flex md12 xs12>
        <v-card :color="corInfo" class="white--text">
          <v-card-title primary-title>
            {{ informacao }}. Para baixar o PDF da lista, clique&nbsp;<b>AQUI</b>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card-text>
  <Tabela :listaFiltrada="ramaisFiltrados"/>
</v-card>
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
      return this.$store.getters.ramais;
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


