import axios from 'axios'

import { 
    GET_SETORES_URL, 
    SET_SETORES,
    AXIOS_HEADER_READ
} from "./constants.js";

const state = {
    setores: []
};

const getters = {
    setores(state) {
        return state.setores;
    }
};

const actions = {

    async nuxtServerInit({ dispatch }) {
        await dispatch('loadSetores')
    },

    async loadSetores({ commit }) {
        let data = await axios.get(GET_SETORES_URL, AXIOS_HEADER_READ)
        commit(SET_SETORES, data.data);
    }
};

const mutations = {

    [SET_SETORES](state, lista) {
        state.setores = lista;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};