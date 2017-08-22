import * as actionTypes from '../actionTypes/user';

export const userUpDate = (data) => ({
    type: actionTypes.USER_INFO_UPDATE,
    data: data
});