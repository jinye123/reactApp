import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss';

export default class HomeHeader extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount(){

    }

    render() {
        return (
            <div className="headerBox">
                <div className="mapBox">
                    <span>{this.props.userInfo}</span>
                    <i className="icon-keyboard_arrow_down"></i>
                </div>
                <div className="searchBox">
                    <i className="icon-search"></i>
                    <input className="searchInput" type="text" placeholder="请输入关键字"/>
                </div>
                <div className="userBox">
                    <i className="icon-user"></i>
                </div>
            </div>
        )
    }
}
