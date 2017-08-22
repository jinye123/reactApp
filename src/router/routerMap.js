import React, {Component} from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from '../containers';
import Home from '../containers/Home';
import City from '../containers/City';
import Detail from '../containers/Detail';
import User from '../containers/User';
import Search from '../containers/Search';
import NotFount from '../containers/404';

export default class RouterMap extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="/city" component={City}/>
                    <Route path="/user" component={User}/>
                    <Route path="/search/:category(/:keyword)" component={Search}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="*" component={NotFount}/>
                </Route>
            </Router>
        )
    }
}