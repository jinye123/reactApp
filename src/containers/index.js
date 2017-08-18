import React, {Component} from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import LocalStore from '../util/localStorage';
import {CITYNAME} from '../config/localstoreKey';

export default class App extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }

    componentDidMount() {
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName == null) {
            cityName = "北京"
        }

        this.setState({
            initDone: true
        })

    }

    render() {
        return (
            <div className="App">
                {
                    this.state.initDone
                        ? this.props.children
                        : <div>加载中。。。</div>
                }
            </div>
        );
    }
};
