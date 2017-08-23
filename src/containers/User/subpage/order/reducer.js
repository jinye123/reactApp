import {
    FETCH_STARTED_ORDER_LIST,
    FETCH_SECCESS_ORDER_LIST,
    FETCH_FAILURI_ORDER_LIST,
    COMMENT_ADD,
    COMMENT_CANCEL,
    COMMENT_UPDATA
} from './actionTypes';

const initData = {
    status: FETCH_STARTED_ORDER_LIST
};

export default (state = initData, action) => {
    switch (action.type) {
        case FETCH_STARTED_ORDER_LIST: {
            return {...state, status: FETCH_STARTED_ORDER_LIST}
        }
        case FETCH_SECCESS_ORDER_LIST: {
            return {...state, status: FETCH_SECCESS_ORDER_LIST, ...action.data}
        }
        case FETCH_FAILURI_ORDER_LIST: {
            return {status: FETCH_FAILURI_ORDER_LIST}
        }
        case COMMENT_ADD:{
            let newData=Object.assign({},state);
            console.log(newData);
            newData.data=newData.data.map((item,index)=>{
                if(action.id===item.id){
                    return {...item,commentState:1}
                }else {
                    return item
                }
            });
            return newData;
        }
        case COMMENT_CANCEL:{
            let newData=Object.assign({},state);
            newData.data=newData.data.map((item,index)=>{
                if(action.id===item.id){
                    return {...item,commentState:0}
                }else {
                    return item
                }
            });
            return newData;
        }
        case COMMENT_UPDATA:{
            let newData=Object.assign({},state);
            newData.data=newData.data.map((item,index)=>{
                if(action.id===item.id){
                    return {...item,commentState:2,value:action.value}
                }else {
                    return item
                }
            });
            return newData;
        }
        default: {
            return state
        }
    }
}