import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import {FETCH_STARTED_HOME_LIST, FETCH_SUCCESS_HOME_LIST, FETCH_FAILURE_HOME_LIST} from '../../../actionTypes/HomeList';
import {fetchGetData} from '../../../fetch/actions/fetchActions';
import {fetchStarted, fetchSuccess, fetchFailure} from '../../../actions/HomeList';
import ListCompoent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';

import './style.scss';

let LIST_URL = '/api/homelist/';

class List extends Component {

    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            page: 1
        }
    }

    componentDidMount() {
        this.getList(this.props.userInfo, 0)
    }

    getMoreList = () => {
        this.getList(this.props.userInfo, this.state.page);
        this.setState({
            page: this.state.page + 1
        })
    };

    getList = (cityName, pageNum) => {
        let MORE_URL = this.setUrl(cityName, pageNum);
        this.props.fetchList(MORE_URL)
    };

    setUrl = (city, page) => {
        return LIST_URL + encodeURIComponent(city) + '/' + page;
    };

    render() {
        let status = this.props.listStatus;
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    status === FETCH_STARTED_HOME_LIST && !this.props.data
                        ?<div>{FETCH_STARTED_HOME_LIST}</div>
                        :status === FETCH_STARTED_HOME_LIST && this.props.data
                        ? <ListCompoent data={this.props.data}/>
                        : status === FETCH_SUCCESS_HOME_LIST
                        ? <ListCompoent data={this.props.data}/>
                        : <div>{FETCH_FAILURE_HOME_LIST}</div>
                }
                {
                    this.props.hasMore
                        ? <LoadMore listStatus={status} loadMoreFn={this.getMoreList}/>
                        : ''
                }
            </div>
        )
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
