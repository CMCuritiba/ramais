<template>
<v-flex d-flex xs12 lg4 md4>
    <v-card color="blue-grey darken-1" dark>
    <v-card-title primary-title>
        <v-icon large left>
            domain
        </v-icon>
        <div>
            <div class="headline">{{ cabecalho }}</div>
        </div>
    </v-card-title>
    <v-card-text>
        <v-flex xs12 md12>
            <setor-auto ref="combo" @selecionou="selecionou" :label="label"></setor-auto>
        </v-flex>
    </v-card-text>
    <v-card-actions>
        <v-btn class="blue-grey darken-1" @click="clicou">{{ botao }}</v-btn>
    </v-card-actions>
    </v-card>
</v-flex>    
</template>

<script>
import SetorAuto from '~/components/UI/novo/SetorAuto.vue';

export default {
    components: {
        SetorAuto,
    },

    data() {
        return {
            cabecalho: 'Pesquise por Setor',
            botao: 'pesquisar',
            pesquisa: '',
            label: 'Digite aqui o setor a ser procurado'
        }
    },

    methods: {
        clicou() {
            this.$emit('selecionou', this.pesquisa, this.$refs.combo.search)
        },
        selecionou(valor) {
            this.pesquisa = valor
        }
    }
}
</script>
