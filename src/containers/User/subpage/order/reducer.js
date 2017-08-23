import {FETCH_STARTED_ORDER_LIST,FETCH_SECCESS_ORDER_LIST,FETCH_FAILURI_ORDER_LIST} from './actionTypes';

export default (state={status:FETCH_STARTED_ORDER_LIST,data:[]},action)=>{
    switch (action.type){
        case FETCH_STARTED_ORDER_LIST:{
            return {...state,status:FETCH_STARTED_ORDER_LIST}
        }
        case FETCH_SECCESS_ORDER_LIST:{
            console.log(action.data);
            return {...state,status:FETCH_SECCESS_ORDER_LIST,...action.data}
        }
        case FETCH_FAILURI_ORDER_LIST:{
            return {status:FETCH_FAILURI_ORDER_LIST}
        }
        default:{
            return state
        }
    }
}