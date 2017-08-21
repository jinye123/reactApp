import {FETCH_STARTED_SEARCH_LIST, FETCH_SUCCESS_SEARCH_LIST, FETCH_FAILURE_SEARCH_LIST,FETCH_INITED_SEARCH_LIST} from '../actionTypes/searchList';

export const fetchStarted = () => ({
    type: FETCH_STARTED_SEARCH_LIST
});

export const fetchSuccess = (data) => ({
    type: FETCH_SUCCESS_SEARCH_LIST,
    data
});

export const fetchFailure = (err) => ({
    type: FETCH_FAILURE_SEARCH_LIST,
    err
});

export const initedData = () => ({
    type: FETCH_INITED_SEARCH_LIST
});
