import {createStore,compose,applyMiddleware} from 'redux';
import Perf from 'react-addons-perf';
import rootReducer from '../reducers'

let initState = {};

const win = window;
win.Perf = Perf;

const middlewares=[];

const storeEnhancers=compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : (f)=>f
);

export default createStore(rootReducer, initState,storeEnhancers)