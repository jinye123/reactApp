import * as actionTypes from '../actionTypes/searchList';

export default (state={status:actionTypes.FETCH_STARTED_SEARCH_LIST,hasMore:false,data:[]},action)=>{
    switch (action.type){
        case actionTypes.FETCH_STARTED_SEARCH_LIST:{
            return {...state,status:actionTypes.FETCH_STARTED_SEARCH_LIST}
        }
        case actionTypes.FETCH_SUCCESS_SEARCH_LIST:{
            let newState={...state,status:actionTypes.FETCH_SUCCESS_SEARCH_LIST,hasMore:action.data.hasMore};
            if(newState.data!=null){
                newState.data=newState.data.concat(action.data.data);
            }else {
                newState.data=(action.data.data);
            }
            return newState
        }
        case actionTypes.FETCH_FAILURE_SEARCH_LIST:{
            return {...state,status:actionTypes.FETCH_FAILURE_SEARCH_LIST}
        }
        case actionTypes.FETCH_INITED_SEARCH_LIST:{
            return {status:actionTypes.FETCH_INITED_SEARCH_LIST,hasMore:false,data:[]}
        }
        default:{
            return state
        }
    }
}