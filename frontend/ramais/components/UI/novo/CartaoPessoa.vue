<template>
<v-flex xs12 lg4 md4 >
    <v-card>
        <v-layout>
            <v-flex xs12>
                <v-card-title class="cyan darken-2 white--text" primary-title>
                    <div>
                        <div class="title">{{ funcionario.pes_nome }}</div>
                    </div>
                </v-card-title>
                <v-list>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>business</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ funcionario.set_nome }}</v-list-tile-title>
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
    </v-card>
</v-flex>    
</template>

<script>
export default {
    props: {
        funcionario: {
            type: Object,
            required: true
        }
    }
}
</script>
