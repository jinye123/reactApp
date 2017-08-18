import {createStore} from 'redux';
import rootReducer from '../reducers'

let initState={};

export default createStore(rootReducer,initState)