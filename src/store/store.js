import {createStore,compose,applyMiddleware} from 'redux';
import Perf from 'react-addons-perf';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

let initState = {};

const win = window;
win.Perf = Perf;

let middlewares=[thunkMiddleware];

const storeEnhancers=compose(
    applyMiddleware(...middlewares),
    win.devToolsExtension ? win.devToolsExtension() : (f)=>f
);

export default createStore(rootReducer, initState,storeEnhancers)