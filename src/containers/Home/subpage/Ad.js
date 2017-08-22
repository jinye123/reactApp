import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import HomeAd from '../../../components/HomeAd';
import * as actionTypes from '../../../actionTypes/ad';
import {fetchGetData} from '../../../fetch/actions/fetchActions';
import {fetchStarted,fetchSuccess,fetchFailure} from '../../../actions/ad'

class Ad extends Component {
    constructor(){
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount(){
        this.props.fetchAd()
    }

    render(){
        let status=this.props.status;
        switch (status){
            case actionTypes.FETCH_STARTED_AD:{
                return(
                    <div>{status}</div>
                )
            }
            case actionTypes.FETCH_SUCCESS_AD:{
                return(
                    <HomeAd data={this.props.data} />
                )
            }
            case actionTypes.FETCH_FAILURE_AD:{
                return(
                    <div>{status}</div>
                )
            }
            default:{
                throw new Error('fetch fail')
            }
        }

    }
}

const mapStateToProps=(state)=>{
    const adData=state.adData;
    return{
        status:adData.status,
        data:adData.data
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        fetchAd:()=>{
            dispatch(fetchGetData('/api/homeAd',fetchStarted,fetchSuccess,fetchFailure))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Ad)
