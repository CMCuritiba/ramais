import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: {
            listaRamais: []
        },
        mutations: {
            setListaRamais(state, lista) {
                state.listaRamais = lista;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios
                    .get("/ramal/listagem/")
                    .then(data => {
                        const listaArray = [];
                        for (const key in data) {
                            listaArray.push({...data[key], id: key });
                        }
                        vuexContext.commit("setListaRamais", listaArray);
                    })
                    .catch(e => context.error(e));
            },
            setListaRamais(vuexContext, lista) {
                vuexContext.commit("setListaRamais", lista)
            }
        },
        getters: {
            listaRamais(state) {
                return state.listaRamais;
            }
        }
    });
};

export default createStore;