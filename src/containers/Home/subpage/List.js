import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import {FETCH_STARTED_HOME_LIST, FETCH_SUCCESS_HOME_LIST, FETCH_FAILURE_HOME_LIST} from '../../../actionTypes/HomeList';
import {fetchGetData} from '../../../fetch/actions/fetchActions';
import {fetchStarted, fetchSuccess, fetchFailure} from '../../../actions/HomeList';
import ListCompoent from '../../../components/List'

import './style.scss';

let LIST_URL = '/api/homelist/';

class List extends Component {

    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
        this.getList(this.props.userInfo, 0)
    }

    getList = (cityName, pageNum) => {
        let MORE_URL = this.setUrl(cityName, pageNum);
        this.props.fetchList(MORE_URL)
    };

    setUrl = (city, page) => {
        return LIST_URL + encodeURIComponent(city) + '/' + page;
    };

    render() {
        let status = this.props.listStatus;
        switch (status) {
            case FETCH_STARTED_HOME_LIST: {
                return (
                    <div>
                        <h2 className="home-list-title">猜你喜欢</h2>
                        <h3>{status}</h3>
                    </div>
                )
            }
            case FETCH_SUCCESS_HOME_LIST: {
                return (
                    <div>
                        <h2 className="home-list-title">猜你喜欢</h2>
                        <ListCompoent data={this.props.data}/>
                        {

                        }
                    </div>
                )
            }
            case FETCH_FAILURE_HOME_LIST: {
                return (
                    <div>
                        <h2 className="home-list-title">猜你喜欢</h2>
                        <h3>{status}</h3>
                    </div>
                )
            }
            default: {
                throw new Error('fetch fail')
            }
        }

    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo.cityName,
        listStatus: state.homeList.status,
        hasMore: state.homeList.hasMore,
        data: state.homeList.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchList: (url) => {
            dispatch(fetchGetData(url, fetchStarted, fetchSuccess, fetchFailure))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List)
