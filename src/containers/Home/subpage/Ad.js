import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionTypes from '../../../fetch/actionTypes/fetchActionTypes';

class Ad extends Component {
    constructor(){
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount(){

    }

    render(){
        let status=this.props.status;
        switch (status){
            case actionTypes.FETCH_STARTED:{
                return(
                    <div>{status}</div>
                )
            }
            case actionTypes.FETCH_SUCCESS:{
                return(
                    <div>{status}</div>
                )
            }
            case actionTypes.FETCH_FAILURE:{
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
        status:adData.status
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Ad)
