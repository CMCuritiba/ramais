import axios from 'axios'

import { 
    READ_TOKEN, 
    SERVICE_URL, 
    GET_SETORES_URL, 
    SET_SETORES 
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

    async loadSetores({ commit }) {
        let data = await axios.get(GET_SETORES_URL)
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