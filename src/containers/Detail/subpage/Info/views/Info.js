import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {FETCH_STARTED_DETAIL, FETCH_SECCESS_DETAIL} from '../actionTypes';
import {fetchStarted, fetchSuccess, fetchFailure} from '../actions';
import {fetchGetData} from '../../../../../fetch/actions/fetchActions';
import DetailInfo from './detaiInfo';

const FETCH_URL = '/api/detail/';

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

    render() {
        return (
            <div>
                {
                    this.props.status === FETCH_STARTED_DETAIL
                        ? <div>加载。。</div>
                        : this.props.status === FETCH_SECCESS_DETAIL
                        ? <DetailInfo data={this.props.data}/>
                        : <div>加载失败</div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.infoReducer.status,
        data:state.infoReducer.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInfoData: (url) => {
            dispatch(fetchGetData(url, fetchStarted, fetchSuccess, fetchFailure))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Info)
