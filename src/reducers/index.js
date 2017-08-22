import {combineReducers} from 'redux';
import userInfo from './user';
import adData from './ad';
import homeList from './homeList';
import searchList from './searchList';

export default combineReducers({
    userInfo: userInfo,
    adData:adData,
    homeList:homeList,
    searchList:searchList
});