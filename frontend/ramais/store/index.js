import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      ramais: []
    },
    mutations: {
      setRamais(state, lista) {
        state.ramais = lista;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
            .get("http://10.0.1.16:8000/api/ramal/listagem/?format=json")
            .then(data => {
                vuexContext.commit("setRamais", data.data);
            })
            .catch(e => context.error(e));
      },
      setRamais(vuexContext, lista) {
        vuexContext.commit("setRamais", lista)
      }
    },
    getters: {
      ramais(state) {
          return state.ramais;
      }
    }
  });
}

export default createStore