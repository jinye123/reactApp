import * as actionTypes from '../actionTypes/ad';

export default (state={status:actionTypes.FETCH_STARTED_AD},action)=>{
    switch (action.type){
        case actionTypes.FETCH_STARTED_AD:{
            return {status:actionTypes.FETCH_STARTED_AD}
        }
        case actionTypes.FETCH_SUCCESS_AD:{
            return {...state,status:actionTypes.FETCH_SUCCESS_AD,...action.data}
        }
        case actionTypes.FETCH_FAILURE_AD:{
            return {status:actionTypes.FETCH_FAILURE_AD}
        }
        default:{
            return state
        }
    }
}