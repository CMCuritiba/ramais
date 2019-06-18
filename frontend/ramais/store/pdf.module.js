import axios from 'axios'

import {
  LISTA_RAMAIS_PDF_URL,
  AXIOS_HEADER,
  IS_LOADING,
  DONE_LOADING
} from './constants.js'

const state = {
  loading: false
}

const getters = {
  loading (state) {
    return state.loading
  }
}

const actions = {

  async geraRelatorio ({ commit }, parametros) {
    commit(IS_LOADING)
    let res = await axios.get(LISTA_RAMAIS_PDF_URL + parametros)
    var blob = new Blob([res.data], {
      type: 'application/pdf'
    })
    var url = window.URL.createObjectURL(blob)
    var a = document.createElement('a')
    document.body.appendChild(a)
    a.style = 'display: none'
    a.href = url
    a.download = 'lista_de_ramais.pdf'
    a.target = '_relatorio'
    // window.open(url, 'relatorio')
    // window.URL.revokeObjectURL(url)
    a.click()
    commit(DONE_LOADING)
  }
}

const mutations = {

  [IS_LOADING] (state) {
    state.loading = true
  },

  [DONE_LOADING] (state) {
    state.loading = false
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
