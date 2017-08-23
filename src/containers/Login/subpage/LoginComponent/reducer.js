import {USER_INFO_DATA} from './actionTypes';

export default (state={},action)=>{
    switch (action.type){
        case USER_INFO_DATA:{
            return {...state,...action.data}
        }
        default:{
            return state
        }
    }
}
