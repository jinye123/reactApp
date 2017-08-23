import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header';
import {LoginCtn} from './subpage/LoginComponent/index';

export default class Login extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const params = this.props.params;
        return (
            <div>
                <Header title="登录"/>
                <LoginCtn router={params.router}/>
            </div>
        )
    }
}
