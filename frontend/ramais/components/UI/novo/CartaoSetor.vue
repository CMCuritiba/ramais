<template>
<v-flex>
    <v-card color="cyan darken-3" class="white--text">
        <v-layout>
            <v-flex xs12>
                <v-card-title primary-title>
                    <div>
                        <span class="headline pa-3">{{ nomeSetor }}</span>
                    </div>
                </v-card-title>
                <v-divider light></v-divider>
                <v-container fluid grid-list-md>
                    <v-layout row wrap> 
                        <v-flex xs12 lg4 md4 v-for="(funcionario, index) in setor.funcionarios" :key="index">
                            <v-list>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-icon>person</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{ funcionario.pes_nome }}</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                    <v-list-tile-action>
                                        <v-icon>phone</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{ funcionario.numero }}</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-card>
</v-flex>
</template>

<script>
export default {
    props: {
        setor: {
            type: Object,
            required: true
        },
        nomeSetor: {
            type: String,
            required: true
        }
    }
}
</script>

