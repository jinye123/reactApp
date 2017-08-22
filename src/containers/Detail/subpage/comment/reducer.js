import {FETCH_STARTED_DETAIL_COMMENT, FETCH_SECCESS_DETAIL_COMMENT, FETCH_FAILURI_DETAIL_COMMENT} from './actionTypes';

export default (state = {status: FETCH_STARTED_DETAIL_COMMENT, data: {}}, action) => {
    switch (action.type) {
        case FETCH_STARTED_DETAIL_COMMENT: {
            return {status: FETCH_STARTED_DETAIL_COMMENT}
        }
        case FETCH_SECCESS_DETAIL_COMMENT: {
            return {...state, status: FETCH_SECCESS_DETAIL_COMMENT, ...action.data}
        }
        case FETCH_FAILURI_DETAIL_COMMENT: {
            return {status: FETCH_FAILURI_DETAIL_COMMENT}
        }
        default: {
            return state
        }
    }
}