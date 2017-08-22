import {FETCH_STARTED_DETAIL,FETCH_SECCESS_DETAIL,FETCH_FAILURI_DETAIL} from './actionTypes';

export default (state={status:FETCH_STARTED_DETAIL,data:{}},action)=>{
    switch (action.type){
        case FETCH_STARTED_DETAIL:{
            return {status:FETCH_STARTED_DETAIL}
        }
        case FETCH_SECCESS_DETAIL:{
            return {...state,status:FETCH_SECCESS_DETAIL,...action.data}
        }
        case FETCH_FAILURI_DETAIL:{
            return {status:FETCH_FAILURI_DETAIL}
        }
        default:{
            return state
        }
    }
}