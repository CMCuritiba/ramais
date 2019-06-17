<template>
<v-flex d-flex xs12 lg4 md4>
    <v-card color="blue-grey darken-2" dark>
    <v-card-title primary-title>
        <v-icon large left>
            person
        </v-icon>
        <div>
            <div class="headline">{{ cabecalho }}</div>
        </div>
    </v-card-title>
    <v-card-text>
        <v-flex xs12 md12>
            <v-text-field box v-model="pesquisa" :label="label" @keyup.enter="clicou" color="blue-grey lighten-2"/>
        </v-flex>
    </v-card-text>
    <v-card-actions>
        <v-btn class="blue-grey darken-2" @click="clicou">{{ botao }}</v-btn>
    </v-card-actions>
    </v-card>
</v-flex>    
</template>

<script>
export default {
    data() {
        return {
            cabecalho: 'Pesquise por Nome',
            botao: 'Pesquisar',
            label: 'Digite aqui o nome a ser procurado',
            pesquisa: ''
        }
    },
    methods: {
        clicou() {
            this.$emit('selecionou', this.pesquisa)
        }
    }
}
</script>
