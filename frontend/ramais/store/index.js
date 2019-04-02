import Vue from "vue";
import Vuex from "vuex";

import setor from "./setor.module";
import ramal from "./ramal.module";
import pdf from "./pdf.module";

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({

    modules: {
      setor,
      ramal,
      pdf
    },
  })
}

export default createStore
