import {FETCH_STARTED,FETCH_SUCCESS,FETCH_FAILURE} from '../actionTypes/ad';
import {getData} from '../fetch/data';

export const fetchStarted=()=>({
    type:FETCH_STARTED
});

export const fetchSuccess=(data)=>({
    type:FETCH_SUCCESS,
    data
});

export const fetchFailure=(err)=>({
    type:FETCH_FAILURE,
    err
});

export const fetchData=()=>{
    return (dispatch)=>{
        dispatch(fetchStarted());

        getData('/api/homeAd')
            .then(data=>{
                console.log(data);
                dispatch(fetchSuccess(data))
            })
            .catch(err=>{
                console.log(err);
                dispatch(fetchFailure(err))
            })
    }
};