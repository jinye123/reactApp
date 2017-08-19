import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router'
import RouterMap from './router/routerMap';
import {Provider} from 'react-redux';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <RouterMap history={hashHistory} />
    </Provider>,
    document.getElementById('root')
);
