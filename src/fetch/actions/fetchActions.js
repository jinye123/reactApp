import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from '../actionTypes/fetchActionTypes';
import {getData,postData} from '../data';

export const fetchStarted = () => ({
    type: FETCH_STARTED
});

export const fetchSuccess = (data) => ({
    type: FETCH_SUCCESS,
    data
});

export const fetchFailure = (err) => ({
    type: FETCH_FAILURE,
    err
});

export const fetchGetData = (url) => {
    return (dispatch) => {

        dispatch(fetchStarted());

        getData(url)
            .then(data => {
                console.log(data);
                dispatch(fetchSuccess(data))
            })
            .catch(err => {
                console.log(err);
                dispatch(fetchFailure(err))
            })
    }
}

export const fetchPostData = (url,data) => {
    return (dispatch) => {

        dispatch(fetchStarted());

        postData(url,data)
            .then(data => {
                console.log(data);
                dispatch(fetchSuccess(data))
            })
            .catch(err => {
                console.log(err);
                dispatch(fetchFailure(err))
            })
    }
};