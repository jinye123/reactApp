import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {FETCH_STARTED_DETAIL_COMMENT, FETCH_SECCESS_DETAIL_COMMENT} from '../actionTypes';
import {fetchStarted, fetchSuccess, fetchFailure} from '../actions';
import {fetchGetData} from '../../../../../fetch/actions/fetchActions';
import CommentList from './ComeentList';

const FETCH_URL = '/api/detail/comment/';

class Info extends Component {

    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            page: 1
        }
    }

    componentDidMount() {
        this.props.getInfoData(this.getUrl(0, this.props.id));

    }

    getMoreList = () => {
        const pageNum = this.state.page;
        this.props.getInfoData(this.getUrl(pageNum, this.props.id));
        this.setState({
            page: pageNum + 1
        })
    };

    getUrl = (page, id) => {
        return FETCH_URL + page + '/' + id
    };

    render() {
        return (
            <div>
                {
                    this.props.status === FETCH_STARTED_DETAIL_COMMENT
                        ? <div>加载。。</div>
                        : this.props.status === FETCH_SECCESS_DETAIL_COMMENT
                        ? <CommentList data={this.props.data}/>
                        : <div>加载失败</div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.commentReducer.status,
        data: state.commentReducer.data,
        hasMore:state.commentReducer.hasMore
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
