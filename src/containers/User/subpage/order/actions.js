import {
    FETCH_STARTED_ORDER_LIST,
    FETCH_SECCESS_ORDER_LIST,
    FETCH_FAILURI_ORDER_LIST,
    COMMENT_ADD,
    COMMENT_CANCEL,
    COMMENT_UPDATA
} from './actionTypes'

export const fetchStarted = () => ({
    type: FETCH_STARTED_ORDER_LIST
});

export const fetchSuccess = (data) => ({
    type: FETCH_SECCESS_ORDER_LIST,
    data
});

export const fetchFailure = (err) => ({
    type: FETCH_FAILURI_ORDER_LIST,
    err
});

export const commentAdd = (id) => ({
    type: COMMENT_ADD,
    id: id
});

export const commentCancel = (id) => ({
    type: COMMENT_CANCEL,
    id: id
});

export const commentUpdata = (id, value) => ({
    type: COMMENT_UPDATA,
    id: id,
    value: value
});
