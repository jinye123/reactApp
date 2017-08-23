import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {FETCH_STARTED_DETAIL, FETCH_SECCESS_DETAIL} from '../actionTypes';
import {fetchStarted, fetchSuccess, fetchFailure} from '../actions';
import {fetchGetData, fetchPostData} from '../../../../../fetch/actions/fetchActions';
import DetailInfo from './detaiInfo';
import Buy from './buy';

const FETCH_URL = '/api/detail/';
const POST_URL = '/api/post/detail/';

class Info extends Component {

    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
        this.props.getInfoData(this.getUrl());
    }

    getUrl = () => {
        return FETCH_URL + this.props.id
    };

    posturl = () => {
        return POST_URL + this.props.id
    };

    onChangeStore = () => {
        let flagStore = 'false';
        if (this.props.isStore === 'false') {
            flagStore = 'true'
        } else {
            flagStore = 'false'
        }
        this.props.postInfoData(this.posturl(), {
            isStore: flagStore
        })
    };

    onBuyClick = () => {
        if (this.props.userId != null) {
            hashHistory.push('/user')
        } else {
            hashHistory.push('/login/' + encodeURIComponent('/detail/' + this.props.id))
        }
    };

    render() {
        return (
            <div>
                {
                    this.props.status === FETCH_STARTED_DETAIL && !this.props.data
                        ? <div>加载。。</div>
                        : this.props.status === FETCH_STARTED_DETAIL
                        ? <DetailInfo data={this.props.data}/>
                        : this.props.status === FETCH_SECCESS_DETAIL
                            ? <DetailInfo data={this.props.data}/>
                            : <div>加载失败</div>
                }
                {
                    <Buy changeStore={this.onChangeStore} buyHandle={this.onBuyClick} isStore={this.props.isStore}/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.infoReducer.status,
        data: state.infoReducer.data,
        isStore: state.infoReducer.isStore,
        isBuy: state.infoReducer.isBuy,
        userId: state.LoginReducer.userId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInfoData: (url) => {
            dispatch(fetchGetData(url, fetchStarted, fetchSuccess, fetchFailure))
        },
        postInfoData: (url, data) => {
            dispatch(fetchPostData(url, data, fetchStarted, fetchSuccess, fetchFailure))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Info)
