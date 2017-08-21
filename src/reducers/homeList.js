import * as actionTypes from '../actionTypes/HomeList';

export default (state={status:actionTypes.FETCH_STARTED_HOME_LIST,hasMore:false,data:[]},action)=>{
    switch (action.type){
        case actionTypes.FETCH_STARTED_HOME_LIST:{
            return {...state,status:actionTypes.FETCH_STARTED_HOME_LIST}
        }
        case actionTypes.FETCH_SUCCESS_HOME_LIST:{
            let newState={...state,status:actionTypes.FETCH_SUCCESS_HOME_LIST,hasMore:action.data.hasMore};
                if(newState.data!=null){
                    newState.data=newState.data.concat(action.data.data);
                }else {
                    newState.data=(action.data.data);
                }
                return newState
        }
        case actionTypes.FETCH_FAILURE_HOME_LIST:{
            return {...state,status:actionTypes.FETCH_FAILURE_HOME_LIST}
        }
        case actionTypes.FETCH_INITED_HOME_LIST:{
            return {status:actionTypes.FETCH_STARTED_HOME_LIST,hasMore:false,data:[]}
        }
        default:{
            return state
        }
    }
}