import * as actionTypes from '../actionTypes/ad';
import * as fetchStatus from '../fetch/status';

export default (state={status:fetchStatus.LOADING},action)=>{
    switch (action.type){
        case actionTypes.FETCH_STARTED:{
            return {status:fetchStatus.LOADING}
        }
        case actionTypes.FETCH_SUCCESS:{
            return {...state,status:fetchStatus.SUCCESS,...action.data}
        }
        case actionTypes.FETCH_FAILURE:{
            return {status:fetchStatus.FAILURE}
        }
        default:{
            return state
        }
    }
}