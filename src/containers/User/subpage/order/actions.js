import {FETCH_STARTED_ORDER_LIST,FETCH_SECCESS_ORDER_LIST,FETCH_FAILURI_ORDER_LIST} from './actionTypes'

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