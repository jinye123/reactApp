import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './login.scss'

export default class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            username: ''
        }
    }
    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-phone"></i>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        onChange={this.changeHandle}
                        value={this.state.username}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <input type="text" placeholder="输入验证码"/>
                    <button>发送验证码</button>
                </div>
                <button className="btn-login" onClick={this.clickHandle}>登录</button>
            </div>
        )
    }
    changeHandle=(e)=>{
        this.setState({
            username: e.target.value
        })
    };
    clickHandle=()=> {
        const username = this.state.username;
        this.props.loginHandle(username);
    }
}