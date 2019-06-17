<template>
<div>
  <v-toolbar flat color="white">
      <v-toolbar-title>Manutenção de Ramais</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab dark small color="blue-grey darken-3" icon class="white--text" @click="novo">
        <v-icon dark>add</v-icon>
      </v-btn>
  </v-toolbar>
<v-card>
  <v-toolbar>
    <v-text-field
      label="Busca por ramal ou local"
      append-icon="search"
      v-model="textoFiltro"
    ></v-text-field>
    <div class="text-xs-center" v-if="textoFiltro">
      <v-chip v-model="filtrado" close>Pesquisando por: {{ textoFiltro }}</v-chip>
    </div>
  </v-toolbar>
  <FormRamalAdmin :dialog="dialog" :ramal="ramalAlterado" :titulo="tituloForm" @close="close" @save="save"/>
  <TabelaAdmin :lista="ramaisFiltrados" @altera="alteraRamal" @exclui="excluiRamal"/>
</v-card>
</div>
</template>

<script>
import TabelaAdmin from '~/components/UI/admin/TabelaAdmin.vue';
import FormRamalAdmin from '~/components/UI/admin/FormRamalAdmin.vue';
import replaceSpecial from '~/lib/string';

export default {
  layout: 'admin',

  components: {
      TabelaAdmin,
      FormRamalAdmin
  },

  data() {
    return {
      textoFiltro: '',
      filtrado: false,
      tituloForm: 'Inclusão de Ramal',
      dialog: false,
      indice: -1,
      lista: this.$store.getters.ramaisCrud,
      ramalAlterado: {
        id: 0,
        numero: "",
        tipo: "",
        visivel: true,
        setor_id: 0,
        set_nome: ""
      },
      ramalDeletado: {
        id: 0,
        numero: "",
        tipo: "",
        visivel: true,
        setor_id: 0
      },
      ramalDefault: {
        id: 0,
        numero: "",
        tipo: "0",
        visivel: true,
        setor_id: null
      },
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
          if ((setor.match(filter)) || (el['numero'].match(filter)))
            return true;
          else
            return false;
        })
      }
    }
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
  },

  methods: {
    alteraRamal(indice, ramal) {
      this.tituloForm = 'Alteração de Ramal'
      this.indice = Object.assign({}, indice)
      this.ramalAlterado = Object.assign({}, ramal)
      this.dialog = true
    },
    async excluiRamal(indice, ramal) {
      this.indice = Object.assign({}, indice)
      this.ramalDeletado = Object.assign({}, ramal)
      if (confirm('Você tem certeza que quer excluir este ramal ?')) {
        await this.$store.dispatch("deleteRamal", ramal)
        this.dialog = false
        await this.$store.dispatch("loadRamaisCrud")
        this.lista = this.$store.getters.ramaisCrud;
      }
    },
    close() {
      this.dialog = false
    },
    async save() {
      if (this.indice !== -1) {
        await this.$store.dispatch("editRamal", this.ramalAlterado)
        this.dialog = false
        await this.$store.dispatch("loadRamaisCrud")
        this.lista = this.$store.getters.ramaisCrud;
      }
      else {
        await this.$store.dispatch("insertRamal", this.ramalAlterado)
        this.dialog = false
        await this.$store.dispatch("loadRamaisCrud")
        this.lista = this.$store.getters.ramaisCrud;
      }
    },
    novo() {
      this.tituloForm = 'Inclusão de Ramal'
      this.indice = -1
      this.ramalAlterado = Object.assign({}, this.ramalDefault)
      this.dialog = true
    }
  },
}
</script>

