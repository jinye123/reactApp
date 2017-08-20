import * as actionTypes from '../fetch/actionTypes/fetchActionTypes';

export default (state={status:actionTypes.FETCH_STARTED},action)=>{
    switch (action.type){
        case actionTypes.FETCH_STARTED:{
            return {status:actionTypes.FETCH_STARTED}
        }
        case actionTypes.FETCH_SUCCESS:{
            return {...state,status:actionTypes.FETCH_SUCCESS,...action.data}
        }
        case actionTypes.FETCH_FAILURE:{
            return {status:actionTypes.FETCH_FAILURE}
        }
        default:{
            return state
        }
    }
}