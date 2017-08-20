import * as actionTypes from '../actionTypes/HomeList';

export default (state={status:actionTypes.FETCH_STARTED_HOME_LIST},action)=>{
    switch (action.type){
        case actionTypes.FETCH_STARTED_HOME_LIST:{
            return {status:actionTypes.FETCH_STARTED_HOME_LIST}
        }
        case actionTypes.FETCH_SUCCESS_HOME_LIST:{
            return {...state,status:actionTypes.FETCH_SUCCESS_HOME_LIST,...action.data}
        }
        case actionTypes.FETCH_FAILURE_HOME_LIST:{
            return {status:actionTypes.FETCH_FAILURE_HOME_LIST}
        }
        default:{
            return state
        }
    }
}