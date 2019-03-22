import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      ramais: [],
      ramaisCrud: ['asasa'],
    },
    mutations: {
      setRamais(state, lista) {
        state.ramais = lista;
      },
      setRamaisCrud(state, listaCrud) {
        state.ramaisCrud = listaCrud;
      },
    },
    actions: {
      async nuxtServerInit({ commit }, context) {
       await axios
        .get("http://10.0.1.16:8000/api/ramal/listagem/?format=json")
        .then(data => {
          commit("setRamais", data.data);
        })
        .catch(e => console.log(e));

       await axios
        .get("http://10.0.1.16:8000/api/ramal/ramais/?format=json")
        .then(data => {
          commit("setRamaisCrud", data.data);
        })
        .catch(e => console.log(e));
      },
    },
  });
};

export default createStore;