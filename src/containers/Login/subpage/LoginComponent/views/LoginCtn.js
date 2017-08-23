import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {userInfoDate} from '../actions';
import Login from './login';

class LoginCtn extends Component {

    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
        if(this.props.userId){
            this.gotoUser();
        }
    }

    updataUserInfo = (userId) => {
        this.props.userLogin({
            userId: userId
        })
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.userId){
            this.gotoUser();
        }
    }

    gotoUser = () => {
        if(this.props.router){
            hashHistory.push(this.props.router);
        }else {
            hashHistory.push('/user');
        }
    };

    render() {
        return (
            <div>
                {
                    this.props.userId
                        ? <div>加载中。。。</div>
                        : <Login loginHandle={this.updataUserInfo}/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.LoginReducer.userId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (data) => {
            dispatch(userInfoDate(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginCtn)
