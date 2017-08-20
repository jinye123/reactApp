import {combineReducers} from 'redux';
import userInfo from './user';
import adData from './ad';

export default combineReducers({
    userInfo: userInfo,
    adData:adData
});