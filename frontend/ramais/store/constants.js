export const READ_TOKEN = "";
export const WRITE_TOKEN = "";
export const SERVICE_URL = "http://10.0.1.16:8000";
export const AXIOS_HEADER = { 
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
    }
}

export const GET_SETORES_URL = SERVICE_URL + "/api/setor/admin/?format=json";
export const SET_SETORES = "setSetores";

export const GET_RAMAIS_URL = SERVICE_URL + "/api/ramal/listagem/?format=json";
export const SET_RAMAIS = "setRamais";

export const GET_RAMAIS_CRUD_URL = SERVICE_URL + "/api/ramal/admin/?format=json";
export const SET_RAMAIS_CRUD = "setRamaisCrud";

export const PUT_RAMAL_URL = SERVICE_URL + "/api/ramal/ramais/";
export const EDIT_RAMAL = "editRamal";

export const POST_RAMAL_URL = SERVICE_URL + "/api/ramal/ramais/";
export const INSERT_RAMAL = "insertRamal";

export const DELETE_RAMAL_URL = SERVICE_URL + "/api/ramal/ramais/";
export const DELETE_RAMAL = "deleteRamal";

export const LISTA_RAMAIS_PDF_URL = SERVICE_URL + "/api/relatorio/ramais/?parametros=";
export const IS_LOADING = "isLoading";
export const DONE_LOADING = "doneLoading";