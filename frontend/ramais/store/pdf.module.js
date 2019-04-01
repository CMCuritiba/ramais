import axios from 'axios'

import { 
    LISTA_RAMAIS_PDF_URL, 
    AXIOS_HEADER, 
    IS_LOADING,
    DONE_LOADING
} from "./constants.js";

const state = {
    loading: false
};

const getters = {
  loading(state) {
      return state.loading;
  }
};  

const actions = {

    async geraRelatorio({ commit }, parametros) {
      commit(IS_LOADING)
      let res = await axios.get(LISTA_RAMAIS_PDF_URL + parametros)
      var blob = new Blob([res.data], {
        type: 'application/pdf'
      });
      var url = window.URL.createObjectURL(blob)
      window.open(url, 'relatorio')
      commit(DONE_LOADING)
    }
};

const mutations = {

    [IS_LOADING](state) {
        state.loading = true
    },

    [DONE_LOADING](state) {
        state.loading = false
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};