import {combineReducers} from 'redux';
import userInfo from './user';
import adData from './ad';
import homeList from './homeList';

export default combineReducers({
    userInfo: userInfo,
    adData:adData,
    homeList:homeList
});