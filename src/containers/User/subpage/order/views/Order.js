import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {
    FETCH_STARTED_ORDER_LIST,
    FETCH_SECCESS_ORDER_LIST
} from '../actionTypes';
import {
    fetchStarted,
    fetchSuccess,
    fetchFailure,
    commentAdd,
    commentCancel,
    commentUpdata
} from '../actions';
import {fetchGetData, commentPostData} from '../../../../../fetch/actions/fetchActions';
import OrderList from './OrderList'


const FETCH_URL = '/api/orderlist/';
const POST_URL='/api/submitComment'

class Order extends Component {

    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
        if (this.props.userId) {
            this.props.getOrderListData(this.getUrl());
        } else {
            hashHistory.push('/Login')
        }
    }

    componentWillReceiveProps() {

    }

    getUrl = () => {
        return FETCH_URL + this.props.userId
    };

    render() {
        return (
            <div>
                {
                    this.props.status === FETCH_STARTED_ORDER_LIST && !this.props.data
                        ? <div>加载。。</div>
                        : this.props.status === FETCH_STARTED_ORDER_LIST
                        ? <OrderList
                            updataComment={this.props.onCommentUpdata}
                            addComment={this.props.onCommentAdd}
                            cancelComment={this.props.onCommentCancel}
                            data={this.props.data}
                        />
                        : this.props.status === FETCH_SECCESS_ORDER_LIST
                            ? <OrderList
                                updataComment={this.props.onCommentUpdata}
                                addComment={this.props.onCommentAdd}
                                cancelComment={this.props.onCommentCancel}
                                data={this.props.data}
                            />
                            : <div>加载失败</div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.orderReducer.status,
        data: state.orderReducer.data,
        userId: state.LoginReducer.userId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getOrderListData: (url) => {
            dispatch(fetchGetData(url, fetchStarted, fetchSuccess, fetchFailure))
        },
        onCommentAdd: (id) => {
            dispatch(commentAdd(id))
        },
        onCommentCancel: (id) => {
            dispatch(commentCancel(id))
        },
        onCommentUpdata: ( data, id, value) => {
            dispatch(commentPostData(POST_URL, data, commentUpdata, id, value))
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Order)
