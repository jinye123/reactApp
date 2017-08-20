import {FETCH_STARTED_HOME_LIST, FETCH_SUCCESS_HOME_LIST, FETCH_FAILURE_HOME_LIST} from '../actionTypes/HomeList';

export const fetchStarted = () => ({
    type: FETCH_STARTED_HOME_LIST
});

export const fetchSuccess = (data) => ({
    type: FETCH_SUCCESS_HOME_LIST,
    data
});

export const fetchFailure = (err) => ({
    type: FETCH_FAILURE_HOME_LIST,
    err
});
