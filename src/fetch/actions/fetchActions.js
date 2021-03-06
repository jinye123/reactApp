import {getData,postData} from '../data';

export const fetchGetData = (url,fetchStarted,fetchSuccess,fetchFailure) => {
    return (dispatch) => {

        dispatch(fetchStarted());

        getData(url)
            .then(data => {
                dispatch(fetchSuccess(data))
            })
            .catch(err => {
                dispatch(fetchFailure(err))
            })
    }
};

export const fetchPostData = (url,data,fetchStarted,fetchSuccess,fetchFailure) => {
    return (dispatch) => {

        dispatch(fetchStarted());

        postData(url,data)
            .then(data => {
                dispatch(fetchSuccess(data))
            })
            .catch(err => {
                dispatch(fetchFailure(err))
            })
    }
};

export const commentPostData = (url,data,fetchSuccess,id,value) => {
    return (dispatch) => {

        postData(url,data)
            .then(data => {
                dispatch(fetchSuccess(id,value))
            })
            .catch(err => {
                console.log(err)
            })
    }
};