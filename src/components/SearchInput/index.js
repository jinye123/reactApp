import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss'

export default class SearchInput extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            keyWorld: ''
        }
    }

    componentDidMount() {
        this.setState({
            keyWorld: this.props.value
        })
    }

    onChangeHandle = (e) => {
        this.setState({
            keyWorld: e.target.value
        })
    };

    onKeyUpHandle = (e) => {
        e.preventDefault();
        const inputValue = this.state.keyWorld;

        if (e.keyCode !== 13 || !inputValue.trim()) {
            return
        }

        this.props.searchHandel(inputValue);
    };

    render() {
        return (
            <input
                className="searchInput"
                type="text"
                placeholder="请输入关键字"
                value={this.state.keyWorld}
                onChange={this.onChangeHandle}
                onKeyUp={this.onKeyUpHandle}
            />
        )
    }
}
