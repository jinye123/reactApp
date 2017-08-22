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

    }

    updataUserInfo = (userId) => {
        this.props.userLogin({
            userId: userId
        })
    };

    gotoUser = () => {
        hashHistory.push('/user')
    };

    render() {
        return (
            <div>
                {
                    this.props.userId
                        ? this.gotoUser()
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
