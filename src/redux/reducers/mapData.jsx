import {FETCH_MAPA,SELECT_DATA,ADD_TODO_STARTED,ADD_TODO_FAILURE} from "../actionType"

const initialState = {
    }

const initialStateSelect={

    }

export const datosMapa=(state = initialState, { type, payload }) => {//action.type y action.payload
    switch (type) {
    case ADD_TODO_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_MAPA:
       // console.log("entra en el reducer",payload)
        return { ...state,loading: false,error:null, ...payload }
    case ADD_TODO_FAILURE:
            return {
              ...state,
              loading: false,
              error: payload.error
        };
    default:
        return state
    }
}

export const datosSelecionados=(state = initialStateSelect, { type, payload }) => {//action.type y action.payload
    switch (type) {

    case SELECT_DATA:
        return {  ...payload }

    default:
        return state
    }
}
