import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {FETCH_STARTED_HOME_LIST, FETCH_SUCCESS_HOME_LIST, FETCH_FAILURE_HOME_LIST} from '../../actionTypes/HomeList';

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

    getRef=(node)=>{
        this.loadBox=node
    };

    onScrollLoad = () => {
        const top=this.loadBox.getBoundingClientRect().top;
        const winHeight=window.screen.height;
        if(top<winHeight){
            this.loadMoreClick();
        }
    };

    render() {
        return (
            <div>
                {
                    this.props.listStatus === FETCH_STARTED_HOME_LIST
                        ? <div className="loadMoreIng">加载中···</div>
                        : this.props.listStatus === FETCH_SUCCESS_HOME_LIST
                        ? <div onClick={this.loadMoreClick} ref={this.getRef} className="loadMoreBtn">加载更多</div>
                        : <div onClick={this.loadMoreClick} className="loadMoreFailed">加载失败</div>
                }
            </div>
        )
    }
}
