<template>
<v-card>
    <v-container fluid grid-list-lg>
        <v-layout row wrap>
            <pesquisa-nome @selecionou="selecionaNome"></pesquisa-nome>
            <pesquisa-setor @selecionou="selecionaSetor"></pesquisa-setor>
            <pesquisa-ramal @selecionou="selecionaRamal"></pesquisa-ramal>
        </v-layout>
    </v-container>
    <v-container fluid grid-list-lg>
        <v-layout row wrap v-if="clicado=='NOME'">
            <cartao-pessoa v-for="(funcionario, index) in listaNomes" :funcionario="funcionario" :key="index"></cartao-pessoa>
        </v-layout>
        <v-layout v-else-if="clicado=='SETOR'">
            <cartao-setor v-for="(setor, index) in listaSetor" :setor="setor" :key="index" :nomeSetor="nomeSetor"></cartao-setor>
        </v-layout>
        <v-layout row wrap v-else-if="clicado=='RAMAL'">
            <cartao-ramal v-for="(ramal, index) in listaRamais" :ramal="ramal" :key="index"></cartao-ramal>
        </v-layout>
    </v-container>
</v-card>
</template>

<script>
import PesquisaNome from '~/components/UI/novo/PesquisaNome.vue';
import PesquisaSetor from '~/components/UI/novo/PesquisaSetor.vue';
import PesquisaRamal from '~/components/UI/novo/PesquisaRamal.vue';
import CartaoPessoa from '~/components/UI/novo/CartaoPessoa.vue';
import CartaoSetor from '~/components/UI/novo/CartaoSetor.vue';
import CartaoRamal from '~/components/UI/novo/CartaoRamal.vue';

export default {

    components: {
        PesquisaNome,
        PesquisaSetor,
        PesquisaRamal,
        CartaoPessoa,
        CartaoSetor,
        CartaoRamal,
    },

    data() {
        return {
            clicado: null,
            lista: this.$store.getters.ramais,
            listaNomes: [],
            listaRamais: [],
            listaSetor: [],
            nomeSetor: '',
        }
    },

    methods: {

        filtraListaNomes(pesquisa) {
            if (pesquisa.trim() == '')
                return this.lista
            else {
                const filter = new RegExp(pesquisa, 'i');
                return this.lista.filter(el => {
                    if ((el['pes_nome'].match(filter)))
                        return true;
                    else
                        return false;
                })
            }
        },

        filtraListaRamal(pesquisa) {
            if (pesquisa.trim() == '')
                return this.lista
            else {
                const filter = new RegExp(pesquisa, 'i');
                return this.lista.filter(el => {
                    if ((el['numero'].match(filter)))
                        return true;
                    else
                        return false;
                })
            }
        },

        filtraListaSetor(pesquisa) {
            const jsonAggregate = require('json-aggregate')
            const collection = jsonAggregate.create(JSON.stringify(this.lista))
            let result = collection.group({
                id: ['set_id'],
                funcionarios: {
                    $push: ['pes_nome', 'numero']
                }
            }).exec()
            if (pesquisa === '') {
                return []
            }
            else {
                const filter = new RegExp(pesquisa, 'i');
                return result.filter(function(i, n) {
                    if (i.id.set_id == pesquisa)
                        return true;
                    else
                        return false;
                })
            }
        },

        selecionaNome(pesquisa) {
            this.listaNomes = this.filtraListaNomes(pesquisa)
            this.clicado = 'NOME'
        },

        selecionaSetor(pesquisa, setor) {
            this.clicado = 'SETOR'
            this.nomeSetor = setor
            this.listaSetor = this.filtraListaSetor(pesquisa)
        },

        selecionaRamal(pesquisa) {
            this.listaRamais = this.filtraListaRamal(pesquisa)
            this.clicado = 'RAMAL'
        },
    }
}
</script>

