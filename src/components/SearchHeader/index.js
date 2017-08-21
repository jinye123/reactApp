import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchInput from '../SearchInput';
import {hashHistory} from 'react-router'

import './style.scss'

export default class SearchHeader extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    onSearchHandel = (keyCode) => {
        hashHistory.push('/search/all/' + encodeURIComponent(keyCode))
    };

    render() {
        return (
            <div className="headerBox">
                <div className="mapBox">
                    <i className="icon-navigate_before"></i>
                </div>
                <div className="searchBox">
                    <i className="icon-search"></i>
                    <SearchInput searchHandel={this.onSearchHandel} value={this.props.keywold}/>
                </div>
            </div>
        )
    }
}
