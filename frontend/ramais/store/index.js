import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      ramais: [],
      ramaisCrud: [],
      setores: []
    },
    mutations: {
      setRamais(state, lista) {
        state.ramais = lista;
      },
      setRamaisCrud(state, listaCrud) {
        state.ramaisCrud = listaCrud;
      },
      setSetores(state, lista) {
        state.setores = lista;
      },
      editRamal(state, ramalEditado) {
        let ramalCrudIndex = state.ramaisCrud.findIndex(ramal => ramal.id === ramalEditado.id)
        let editado = { ...state.ramaisCrud[ramalCrudIndex] }
        state.ramaisCrud.splice(ramalCrudIndex, 1, ramalEditado)
      },
      insertRamal(state, ramalNovo) {
        console.log(state.ramaisCrud)
      },
      deleteRamal(state, ramal) {
        console.log(state.ramaisCrud)
      }
    },
    actions: {
      async nuxtServerInit({ commit }, context) {
        console.log('INIT')
       await axios
        .get("http://localhost:8000/api/ramal/listagem/?format=json")
        .then(data => {
          commit("setRamais", data.data);
        })
        .catch(e => console.log(e));

       await axios
        .get("http://localhost:8000/api/ramal/admin/?format=json")
        .then(data => {
          commit("setRamaisCrud", data.data);
        })
        .catch(e => console.log(e));

        await axios
        .get("http://localhost:8000/api/setor/admin/?format=json")
        .then(data => {
          commit("setSetores", data.data);
        })
        .catch(e => console.log(e));
      },

      loadRamais(vuexContext) {
        axios
        .get("http://localhost:8000/api/ramal/listagem/?format=json")
        .then(data => {
          vuexContext.commit("setRamais", data.data);
        })
        .catch(e => console.log(e));
      },

      loadRamaisCrud(vuexContext) {
        axios
        .get("http://localhost:8000/api/ramal/admin/?format=json")
        .then(data => {
          vuexContext.commit("setRamaisCrud", data.data);
        })
        .catch(e => console.log(e));
      },

      loadSetores(vuexContext) {
        axios
        .get("http://localhost:8000/api/setor/admin/?format=json")
        .then(data => {
          commit("setSetores", data.data);
        })
        .catch(e => console.log(e));
      },

      editRamal(vuexContext, ramal) {
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
          }
        }

        return axios.put(
          "http://localhost:8000/api/ramal/ramais/" + ramal.id + '/',
          ramal,
          axiosConfig          
        )
        .then(res => {
          vuexContext.commit("editRamal", ramal)
        })
        .catch(e => {
          console.log(e)
          throw(e)
        })
      },
      insertRamal(vuexContext, ramal) {
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
          }
        }

        return axios.post(
          "http://localhost:8000/api/ramal/ramais/",
          ramal,
          axiosConfig          
        )
        .then(res => {
          vuexContext.commit("insertRamal", ramal)
        })
        .catch(e => {
          console.log(e)
          throw(e)
        })
      },
      deleteRamal(vuexContext, ramal) {
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
          }
        }

        return axios.delete(
          "http://localhost:8000/api/ramal/ramais/" + ramal.id + '/',
          ramal,
          axiosConfig          
        )
        .then(res => {
          vuexContext.commit("deleteRamal", ramal)
        })
        .catch(e => {
          console.log(e)
          throw(e)
        })
      }
    },
  });
};

export default createStore;