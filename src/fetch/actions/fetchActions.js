import {getData,postData} from '../data';

export const fetchGetData = (url,fetchStarted,fetchSuccess,fetchFailure) => {
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
};

export const fetchPostData = (url,data,fetchStarted,fetchSuccess,fetchFailure) => {
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