import {FETCH_MAPA,SELECT_DATA,ADD_TODO_FAILURE,ADD_TODO_STARTED} from "./actionType"
import { apijsonConvoJquey } from "../api/api";

const setDataSuccess =(todo)=>{
    return ({
        type: FETCH_MAPA,
        payload:{...todo},
    })
};

const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: {
      error
    }
  });

  const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
  });

export const fetchData=(data)=>{
    return dispatch=>{
        dispatch(addTodoStarted())
        apijsonConvoJquey((res)=>{
          //  console.log(res)
            dispatch(setDataSuccess(res))
        },(err)=>{
            console.log(err)
            dispatch(addTodoFailure(err))
        });
    }
}

export const selecData=(arr,cod)=>{
    
    var arrtemp =arr.filter(
        (el)=> { 
            switch (cod) {
                case 'AF':
                    cod="Africa"
                    break;
                case 'NA':
                    cod="América del Norte"    
                        break;
                case 'AS':
                    cod="Asia"
                        break;
                case 'EU':
                    cod="Europa"
                    break;
                case 'SA':
                    cod="América del Sur"
                    break;
                case 'GL':
                    cod="Global"
                        break;
                default:
                    break;
            }
            return el.continente.toLowerCase().indexOf(cod.toLowerCase()) > -1}
        )
      //console.log(arrtemp)
    return {
        type: SELECT_DATA,
        payload: arrtemp
    }
}