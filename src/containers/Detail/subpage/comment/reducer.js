import {
    FETCH_STARTED_DETAIL_COMMENT,
    FETCH_SECCESS_DETAIL_COMMENT,
    FETCH_FAILURI_DETAIL_COMMENT,
    FETCH_INITED_DETAIL_COMMENT
} from './actionTypes';

const initData={
    status: FETCH_STARTED_DETAIL_COMMENT,
    hasMore: false,
    data: []
};

export default (state = initData, action) => {
    switch (action.type) {
        case FETCH_STARTED_DETAIL_COMMENT: {
            return {...state, status: FETCH_STARTED_DETAIL_COMMENT}
        }
        case FETCH_SECCESS_DETAIL_COMMENT: {
            let newState = {...state, status: FETCH_SECCESS_DETAIL_COMMENT, hasMore: action.data.hasMore};
            if (newState.data != null) {
                newState.data = newState.data.concat(action.data.data);
            } else {
                newState.data = (action.data.data);
            }
            return newState
        }
        case FETCH_FAILURI_DETAIL_COMMENT: {
            return {...state, status: FETCH_FAILURI_DETAIL_COMMENT}
        }
        case FETCH_INITED_DETAIL_COMMENT:{
            return initData
        }
        default: {
            return state
        }
    }
}