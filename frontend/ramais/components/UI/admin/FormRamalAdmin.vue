<template>
<div>
    <v-dialog v-model="dialog" max-width="800px">
        <v-card>
            <v-card-title>
            <span class="headline">{{ titulo }}</span>
            </v-card-title>
            <v-card-text> 
            <v-container grid-list-md>
                <v-layout wrap>
                <v-flex xs12 sm6 md6>
                    <v-autocomplete
                    :items="items"
                    :loading="isLoading"
                    :search-input.sync="search"
                    v-model="ramal.setor_id"
                    v-validate="'required'"
                    data-vv-name="setor"
                    :error-messages="errors.collect('setor')"
                    clearable
                    item-text="set_nome"
                    item-value="id"
                    label="Digite o setor..."
                    solo
                    required
                    >
                        <template v-slot:no-data>
                            <v-list-tile>
                                <v-list-tile-title>
                                    Nenhum setor encontrado pela pesquisa
                                </v-list-tile-title>
                            </v-list-tile>
                        </template>
                    </v-autocomplete>
                </v-flex>
                <v-flex xs12 sm6 md6>
                    <v-text-field 
                        v-validate="'required|min:4|ramal'" 
                        data-vv-name="numero"
                        :error-messages="errors.collect('numero')"
                        v-model="ramal.numero" 
                        :mask="mascaraRamal" 
                        label="Número" 
                        required
                        :counter="4"
                    >
                    </v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                    <v-select
                    :items="tipoRamal"
                    v-model="ramal.tipo"
                    item-text="descricao"
                    item-value="tipo"
                    >
                    </v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                    <v-switch 
                    v-model="ramal.visivel" 
                    label="Visível"
                    color="primary"
                    >
                    </v-switch>
                </v-flex>
                </v-layout>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancela</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Salva</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>  
</div>
</template>


<script>
import Vue from 'vue'
import VeeValidate,{ Validator } from 'vee-validate'

let _this;
let ramal;

Vue.use(VeeValidate)

export default {
    $_veeValidate: {
      validator: 'new'
    },

    props: {
        ramal: {
            type: Object,
            required: true,
            default: {}
        },
        titulo: {
            type: String,
            required: true
        },
        dialog: {
            type: Boolean,
            required: true
        }

    },

    async beforeCreate() {
        await this.$store.dispatch("loadSetores")
        this.items = this.$store.getters.setores
        _this = this
    },

    data() {
        return {
            mascaraRamal: '####',
            items: [],
            search: null,
            isLoading: false,
            numero: '',
            tipoRamal: [
                {tipo: "0", descricao: 'Nenhum'},
                {tipo: "1", descricao: 'Geral'},
                {tipo: "2", descricao: 'Recepção'},
                {tipo: "3", descricao: 'Chefia'}
            ],
            items: this.$store.state.setores, 
        }
    },

    methods: {
        close() {
            this.$emit('close')
        },
        save() {
            this.$validator.validateAll()
            if (!this.errors.any())
                this.$emit('save')
        }
    },

    mounted () {
      this.$validator.localize('pt_BR', this.dictionary)

      const ramalUnico = {
          getMessage(field, args) {
              return `Este ramal já está cadastrado.`
          },
          validate(value, args) {
              let retorno = true;
              const ramais = _this.$store.getters.ramaisCrud
              ramais.forEach(element => {
                  if (element.numero === value) {
                    if (ramal.id != element.id)
                        retorno = false
                  }
              });
              return retorno
          }
      };

      Validator.extend('ramal', ramalUnico);

    },

    watch: {
        ramal: function (val) {
            ramal = Object.assign({}, val)
        },
    }
    
}
</script>


<style scoped>

</style>
