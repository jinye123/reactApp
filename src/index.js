import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router'
import RouterMap from './router/routerMap';

ReactDOM.render(
    <RouterMap history={hashHistory} />,
    document.getElementById('root')
);
