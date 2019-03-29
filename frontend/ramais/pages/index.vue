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
    <v-btn
      color="red darken-4"
      dark
      small
      absolute
      bottom
      left
      fab
      @click="geraPDF"
      :disabled="$store.state.carregando"
    >
      <v-icon>print</v-icon>
    </v-btn>
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
      textoFiltro: '',
      desabilitado: false
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
  },
  methods: {
    geraPDF() {
      console.log('GERA PDF')
      this.$store.dispatch("geraRelatorio", this.textoFiltro)
    }
  }

}
</script>


