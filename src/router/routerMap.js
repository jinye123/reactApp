import React, {Component} from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from '../containers/App';
import HomePage from '../containers/Home/homePage';
import ListPage from '../containers/List/listPage';
import DetailPage from '../containers/Detail/detailPage';
import Notfount from '../containers/NotFound/notPage';

export default class RouterMap extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={HomePage} />
                    <Route path="list" component={ListPage}/>
                    <Route path="detail/:id" component={DetailPage}/>
                    <Route path="*" component={Notfount}/>
                </Route>
            </Router>
        )
    }
}