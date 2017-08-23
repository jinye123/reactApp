import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {hashHistory} from 'react-router';

import './style.scss'

export default class Header extends Component {
    constructor(){
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-navigate_before"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
    clickHandle() {
        console.log(this.props.hasRouter)
        if(this.props.hasRouter){
            hashHistory.push(this.props.hasRouter);
        }else {
            window.history.back()
        }

    }
}
