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

    clickHandle() {
        hashHistory.push('/')
    }

    onSearchHandel = (keyCode) => {
        hashHistory.push('/search/all/' + encodeURIComponent(keyCode))
    };

    render() {
        return (
            <div className="searchHeaderBox">
                <div onClick={this.clickHandle} className="mapBoxSearch">
                    <i className="icon-navigate_before"></i>
                </div>
                <div className="searchBoxSearch">
                    <i className="icon-search"></i>
                    <SearchInput searchHandel={this.onSearchHandel} value={this.props.keywold}/>
                </div>
            </div>
        )
    }
}
