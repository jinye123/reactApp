import {FETCH_STARTED_DETAIL,FETCH_SECCESS_DETAIL,FETCH_FAILURI_DETAIL} from './actionTypes'

export const fetchStarted = () => ({
    type: FETCH_STARTED_DETAIL
});

export const fetchSuccess = (data) => ({
    type: FETCH_SECCESS_DETAIL,
    data
});

export const fetchFailure = (err) => ({
    type: FETCH_FAILURI_DETAIL,
    err
});