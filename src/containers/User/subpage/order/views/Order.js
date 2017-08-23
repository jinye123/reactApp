import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {FETCH_STARTED_ORDER_LIST, FETCH_SECCESS_ORDER_LIST} from '../actionTypes';
import {fetchStarted, fetchSuccess, fetchFailure} from '../actions';
import {fetchGetData} from '../../../../../fetch/actions/fetchActions';
import OrderList from './OrderList'


const FETCH_URL = '/api/orderlist/';

class Order extends Component {

    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
        if(this.props.userId){
            this.props.getOrderListData(this.getUrl());
        }else {
            hashHistory.push('/Login')
        }

    }

    componentWillReceiveProps(){

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
                        ? <OrderList data={this.props.data}/>
                        : this.props.status === FETCH_SECCESS_ORDER_LIST
                            ? <OrderList data={this.props.data}/>
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
        userId:state.LoginReducer.userId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getOrderListData: (url) => {
            dispatch(fetchGetData(url, fetchStarted, fetchSuccess, fetchFailure))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Order)
