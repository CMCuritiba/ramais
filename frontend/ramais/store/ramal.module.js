import axios from 'axios'

import { 
    READ_TOKEN, 
    SERVICE_URL, 
    GET_RAMAIS_URL, 
    SET_RAMAIS, 
    GET_RAMAIS_CRUD_URL, 
    SET_RAMAIS_CRUD,
    AXIOS_HEADER,
    PUT_RAMAL_URL,
    EDIT_RAMAL,
    POST_RAMAL_URL,
    INSERT_RAMAL,
    DELETE_RAMAL_URL,
    DELETE_RAMAL
} from "./constants.js";

const state = {
    ramais: [],
    ramaisCrud: []
};

const getters = {
    ramais(state) {
        return state.ramais;
    },
    ramaisCrud(state) {
        return state.ramaisCrud;
    },
};

const actions = {

    async loadRamais({ commit }) {
        let data = await axios.get(GET_RAMAIS_URL)
        commit(SET_RAMAIS, data.data)
    },

    async loadRamaisCrud({ commit }) {
        let data = await axios.get(GET_RAMAIS_CRUD_URL)
        commit(SET_RAMAIS_CRUD, data.data);
    },

    async editRamal({ commit }, ramal) {
        await axios.put(PUT_RAMAL_URL + ramal.id + '/', ramal, AXIOS_HEADER)
        commit(EDIT_RAMAL, ramal)
    },

    async insertRamal({ commit }, ramal) {
        await axios.post(POST_RAMAL_URL, ramal, AXIOS_HEADER)
        commit(INSERT_RAMAL, ramal)
    },

    async deleteRamal({ commit }, ramal) {
        await axios.delete(DELETE_RAMAL_URL + ramal.id + '/', ramal, AXIOS_HEADER)
        commit(DELETE_RAMAL, ramal)

    },
};

const mutations = {

    [EDIT_RAMAL](state, ramalEditado) {
        let ramalCrudIndex = state.ramaisCrud.findIndex(ramal => ramal.id === ramalEditado.id)
        let editado = { ...state.ramaisCrud[ramalCrudIndex] }
        state.ramaisCrud.splice(ramalCrudIndex, 1, ramalEditado)
    },

    [INSERT_RAMAL](state, ramal) {

    },

    [DELETE_RAMAL](state, ramal) {
        
    },

    [SET_RAMAIS](state, ramais) {
      state.ramais = ramais
    },

    [SET_RAMAIS_CRUD](state, ramaisCrud) {
      state.ramaisCrud = ramaisCrud
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};