import {
    FETCH_STARTED_DETAIL_COMMENT,
    FETCH_SECCESS_DETAIL_COMMENT,
    FETCH_FAILURI_DETAIL_COMMENT,
    FETCH_INITED_DETAIL_COMMENT
} from './actionTypes'

export const fetchStarted = () => ({
    type: FETCH_STARTED_DETAIL_COMMENT
});

export const fetchSuccess = (data) => ({
    type: FETCH_SECCESS_DETAIL_COMMENT,
    data
});

export const fetchFailure = (err) => ({
    type: FETCH_FAILURI_DETAIL_COMMENT,
    err
});

export const fetchInited = () => ({
    type: FETCH_INITED_DETAIL_COMMENT
});