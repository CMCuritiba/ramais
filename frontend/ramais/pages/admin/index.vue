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
  <FormRamalAdmin :dialog="dialog" :ramal="ramalAlterado" :titulo="tituloForm" @close="close" @save="save"/>
  <TabelaAdmin :lista="lista" @altera="alteraRamal" @exclui="excluiRamal"/>
</v-card>
</div>
</template>

<script>
import TabelaAdmin from '~/components/UI/admin/TabelaAdmin.vue';
import FormRamalAdmin from '~/components/UI/admin/FormRamalAdmin.vue';
export default {
  layout: 'admin',

  components: {
      TabelaAdmin,
      FormRamalAdmin
  },

  data() {
    return {
      tituloForm: 'Inclusão de Ramal',
      dialog: false,
      indice: -1,
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
    lista() {
      return this.$store.state.ramaisCrud;
    },
  },
  methods: {
    alteraRamal(indice, ramal) {
      this.tituloForm = 'Alteração de Ramal'
      this.indice = Object.assign({}, indice)
      this.ramalAlterado = Object.assign({}, ramal)
      this.dialog = true
    },
    excluiRamal(indice, ramal) {
      this.indice = Object.assign({}, indice)
      this.ramalDeletado = Object.assign({}, ramal)
    },
    close() {
      this.dialog = false
    },
    save() {
      if (this.indice !== -1) {
        this.$store.dispatch("editRamal", this.ramalAlterado)
        .then(() => {
          this.dialog = false
          this.$store.dispatch("loadRamais")
          this.$store.dispatch("loadRamaisCrud")
          this.lista
        })
        .catch(e => {
          console.log(e)
        })
      }
      else {
        this.$store.dispatch("insertRamal", this.ramalAlterado)
        .then(() => {
          this.dialog = false
          this.$store.dispatch("loadRamais")
          this.$store.dispatch("loadRamaisCrud")
          this.lista
        })
        .catch(e => {
          console.log(e)
        })
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

