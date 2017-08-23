import {combineReducers} from 'redux';
import userInfo from './user';
import adData from './ad';
import homeList from './homeList';
import searchList from './searchList';
import {infoReducer} from '../containers/Detail/subpage/Info/index';
import {commentReducer} from '../containers/Detail/subpage/comment/index';
import {LoginReducer} from '../containers/Login/subpage/LoginComponent/index';

export default combineReducers({
    userInfo: userInfo,
    adData:adData,
    homeList:homeList,
    searchList:searchList,
    infoReducer:infoReducer,
    commentReducer:commentReducer,
    LoginReducer:LoginReducer
});