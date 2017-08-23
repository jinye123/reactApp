import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link, hashHistory} from 'react-router';
import SearchInput from '../SearchInput';

import './style.scss';

export default class HomeHeader extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {

    }

    onSearchHandel = (keyCode) => {
        hashHistory.push('/search/all/' + encodeURIComponent(keyCode))
    };

    render() {
        return (
            <div className="headerBox">
                <div className="mapBox">
                    <Link to='/city'>
                        <span>{this.props.userInfo}</span>
                        <i className="icon-keyboard_arrow_down"></i>
                    </Link>
                </div>
                <div className="searchBox">
                    <i className="icon-search"></i>
                    <SearchInput value="" searchHandel={this.onSearchHandel}/>
                </div>
                <div className="userBox">
                    <Link to='/login'>
                        <i className="icon-user"></i>
                    </Link>
                </div>
            </div>
        )
    }
}
