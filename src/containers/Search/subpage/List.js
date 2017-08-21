import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import {FETCH_STARTED_SEARCH_LIST, FETCH_SUCCESS_SEARCH_LIST, FETCH_FAILURE_SEARCH_LIST} from '../../../actionTypes/searchList';
import {fetchGetData} from '../../../fetch/actions/fetchActions';
import {fetchStarted, fetchSuccess, fetchFailure,initedData} from '../../../actions/searchList';
import ListCompoent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';

import './style.scss';

let LIST_URL = '/api/search/';

class List extends Component {

    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            page: 1
        }
    }

    componentDidMount() {
        if(this.props.data.length>0){

        }
        this.props.initedData();
        this.getList(0, this.props.userInfo,this.props.category,this.props.keywold)
    }

    getMoreList = () => {
        this.getList( this.state.page,this.props.userInfo,this.props.category,this.props.keywold);
        this.setState({
            page: this.state.page + 1
        })
    };

    getList = ( pageNum,cityName,category,keyword) => {
        let MORE_URL = this.setUrl( pageNum,cityName,category,keyword);
        this.props.fetchList(MORE_URL)
    };

    setUrl = ( page,city,category,keyword) => {

        return LIST_URL + page + '/' + encodeURIComponent(city) + '/' + category+'/'+keyword;
    };

    render() {
        let status = this.props.listStatus;
        return (
            <div>
                {
                    status === FETCH_STARTED_SEARCH_LIST && !this.props.data
                        ? <div>{FETCH_STARTED_SEARCH_LIST}</div>
                        : status === FETCH_STARTED_SEARCH_LIST && this.props.data
                        ? <ListCompoent data={this.props.data}/>
                        : status === FETCH_SUCCESS_SEARCH_LIST
                            ? <ListCompoent data={this.props.data}/>
                            : <div>{FETCH_FAILURE_SEARCH_LIST}</div>
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
        listStatus: state.searchList.status,
        hasMore: state.searchList.hasMore,
        data: state.searchList.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchList: (url) => {
            dispatch(fetchGetData(url, fetchStarted, fetchSuccess, fetchFailure))
        },
        initedData:()=>{
            dispatch(initedData())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List)
