import * as actionTypes from '../actionTypes/user';

let initState={};

export default (state=initState,action)=> {
    switch (action.type){
        case actionTypes.USER_INFO_UPDATE:
            return action.data;
        default :
            return state;
    }
}