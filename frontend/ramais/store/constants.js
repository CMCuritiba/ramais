export const VUE_APP_SERVICE_URL = process.env.VUE_APP_SERVICE_URL;
export const AXIOS_HEADER_READ = { 
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Token ${process.env.VUE_APP_READ_TOKEN}`
    }
};
export const AXIOS_HEADER_WRITE = { 
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Token ${process.env.VUE_APP_WRITE_TOKEN}`
    }
};

export const GET_SETORES_URL = `${ VUE_APP_SERVICE_URL }/api/setor/admin/?format=json`;
export const SET_SETORES = "setSetores";

export const GET_RAMAIS_URL = `${ VUE_APP_SERVICE_URL }/api/ramal/listagem/?format=json`;
export const SET_RAMAIS = "setRamais";

export const GET_RAMAIS_CRUD_URL = `${ VUE_APP_SERVICE_URL }/api/ramal/admin/?format=json`;
export const SET_RAMAIS_CRUD = "setRamaisCrud";

export const PUT_RAMAL_URL = `${ VUE_APP_SERVICE_URL }/api/ramal/ramais/`;
export const EDIT_RAMAL = "editRamal";

export const POST_RAMAL_URL = `${ VUE_APP_SERVICE_URL }/api/ramal/ramais/`;
export const INSERT_RAMAL = "insertRamal";

export const DELETE_RAMAL_URL = `${ VUE_APP_SERVICE_URL }/api/ramal/ramais/`;
export const DELETE_RAMAL = "deleteRamal";

export const LISTA_RAMAIS_PDF_URL = `${ VUE_APP_SERVICE_URL }/api/relatorio/ramais/?parametros=`;
export const IS_LOADING = "isLoading";
export const DONE_LOADING = "doneLoading";