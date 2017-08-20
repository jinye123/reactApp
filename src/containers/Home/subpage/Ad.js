import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as fetchStatus from '../../../fetch/status';

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
            case fetchStatus.LOADING:{
                return(
                    <div>{status}</div>
                )
            }
            case fetchStatus.SUCCESS:{
                return(
                    <div>{status}</div>
                )
            }
            case fetchStatus.FAILURE:{
                return(
                    <div>{status}</div>
                )
            }
            default:{
                throw new Error('fetch fail')
            }
        }

    }
};

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
