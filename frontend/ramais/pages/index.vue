<template>
<div>
  <v-toolbar>
          <v-text-field
            label="Busca por ramal, pessoa ou local"
            append-icon="search"
            v-model="textoFiltro"
          ></v-text-field>
          <div class="text-xs-center" v-if="textoFiltro">
            <v-chip v-model="filtrado" close>Pesquisando por: {{ textoFiltro }}</v-chip>
          </div>
          <div class="text-xs-center">
            <v-btn small round color="blue-grey darken-2" :disabled="$store.getters.loading" dark @click="listaCompletaPDF">Lista completa<v-icon right dark>print</v-icon></v-btn>
            
          </div>
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
      :disabled="$store.getters.loading"
    >
      <v-icon>print</v-icon>
    </v-btn>
  </v-card>
</div>
</template>

<script>
import Tabela from '~/components/UI/Tabela.vue';
import replaceSpecial from '~/lib/string';

export default {
  components: {
    Tabela,
  },
  data() {
    return {
      textoFiltro: '',
      desabilitado: false,
      lista: this.$store.getters.ramais,
      filtrado: false
    }
  },

  computed: {
    ramaisFiltrados() {

      if (this.textoFiltro.trim() == '')
        return this.lista
      else {
        const filter = new RegExp(replaceSpecial(this.textoFiltro), 'i');
        return this.lista.filter(el => {
          const setor = replaceSpecial(el['set_nome'])
          const nome = replaceSpecial(el['nome'])
          if ((setor.match(filter)) || (nome.match(filter)) || (el['numero'].match(filter)))
            return true;
          else
            return false;
        })
      }
    },
  },
  methods: {
    geraPDF() {
      this.$store.dispatch("geraRelatorio", this.textoFiltro)
    },

    listaCompletaPDF() {
      this.$store.dispatch("geraRelatorio", '')
    },
  },
  watch: {
    textoFiltro: function (val) {
      if (val.trim() != '') {
        this.filtrado = true
      }
    },
    filtrado: function (val) {
      if (!val) {
        this.textoFiltro = ''
      }
    }
  }
}

</script>


