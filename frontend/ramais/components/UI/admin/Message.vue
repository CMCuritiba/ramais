<template>
    <v-snackbar
        v-model="snackbar"
        :color="type"
        :multi-line="multiLine"
        :timeout="timeout"
    >
        {{ text }}
    </v-snackbar>
</template>


<script>
export default {
    data() {
        return {
            timeout: 2000,
            multiLine: true,
        }
    },
    props: {
        text: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ['success', 'error', 'info', 'warning']
        },
        snackbar: {
            type: Boolean,
            required: true,
            default: false
        },
    }
}
</script>
