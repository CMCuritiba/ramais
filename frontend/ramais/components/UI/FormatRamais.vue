<template>
    <div>
        <div v-if="ramais.tipo == '3'">
            <v-chip color="red darken-4" text-color="white" v-for="ramal in arrayRamais" :key="ramal">
                {{ramal}}
            </v-chip>
        </div>
        <div v-else>
            <v-chip color="blue-grey darken-2" text-color="white" v-for="ramal in arrayRamais" :key="ramal">
                {{ramal}}
            </v-chip>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ramais: {
            type: Object,
            required: true,
            default: () => []
        }
    },
    computed: {
        arrayRamais() {
            return this.ramais.numero.split("|");
        }
    }
}
</script>

