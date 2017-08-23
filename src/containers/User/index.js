import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header';
import UserInfo from '../../components/userInfo';
import {Order} from './subpage/order/index'
import {connect} from 'react-redux';

class User extends Component {
    constructor(){
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return (
            <div>
                <Header title="用户中心" hasRouter='/'/>
                <UserInfo city={this.props.cityName} username={this.props.userId} />
                <Order username={this.props.userId} />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
  return{
      cityName:state.userInfo.cityName,
      userId:state.LoginReducer.userId
  }
};

const mapDispatchToProps=()=>{
  return{

  }
};

export default connect(mapStateToProps,mapDispatchToProps)(User)