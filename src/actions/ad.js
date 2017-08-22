import {FETCH_STARTED_AD, FETCH_SUCCESS_AD, FETCH_FAILURE_AD} from '../actionTypes/ad';

export const fetchStarted = () => ({
    type: FETCH_STARTED_AD
});

export const fetchSuccess = (data) => ({
    type: FETCH_SUCCESS_AD,
    data
});

export const fetchFailure = (err) => ({
    type: FETCH_FAILURE_AD,
    err
});
