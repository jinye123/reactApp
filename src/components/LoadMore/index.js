import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {FETCH_STARTED_HOME_LIST, FETCH_SUCCESS_HOME_LIST} from '../../actionTypes/HomeList';
import {FETCH_STARTED_SEARCH_LIST, FETCH_SUCCESS_SEARCH_LIST} from '../../actionTypes/searchList';
import {
    FETCH_STARTED_DETAIL_COMMENT,
    FETCH_SECCESS_DETAIL_COMMENT,
    FETCH_FAILURI_DETAIL_COMMENT
} from '../../containers/Detail/subpage/comment/actionTypes';

import './style.scss';

export default class LoadMore extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    loadMoreClick = () => {
        this.props.loadMoreFn();
    };

    componentDidMount() {
        let timeOutId;

        window.addEventListener('scroll', function () {

            if (this.props.listStatus === FETCH_STARTED_HOME_LIST) {
                return false;
            }

            if (timeOutId) {
                clearTimeout(timeOutId);
            }

            timeOutId = setTimeout(this.onScrollLoad, 50);

        }.bind(this), false)
    }

    getRef = (node) => {
        this.loadBox = node
    };

    onScrollLoad = () => {
        // const top=this.loadBox.getBoundingClientRect().top;
        // const winHeight=window.screen.height;
        // if(top<winHeight){
        //     this.loadMoreClick();
        // }
    };

    render() {
        const status = this.props.listStatus;
        return (
            <div>
                {
                    status === FETCH_STARTED_HOME_LIST || status === FETCH_STARTED_SEARCH_LIST || status === FETCH_STARTED_DETAIL_COMMENT
                        ? <div className="loadMoreIng">加载中···</div>
                        : status === FETCH_SUCCESS_HOME_LIST || status === FETCH_SUCCESS_SEARCH_LIST || status === FETCH_SECCESS_DETAIL_COMMENT
                        ? <div onClick={this.loadMoreClick} ref={this.getRef} className="loadMoreBtn">加载更多</div>
                        : <div onClick={this.loadMoreClick} className="loadMoreFailed">加载失败</div>
                }
            </div>
        )
    }
}
