import React, {Component} from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import LocalStore from '../util/localStorage';
import {CITYNAME} from '../config/localstoreKey';
import {connect} from 'react-redux';
import * as userActions from '../actions/user';

class App extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false,
            showLog: 'jinye'
        }
    }

    componentDidMount() {

        let cityName = LocalStore.getItem(CITYNAME);

        if (cityName == null) {
            cityName = "北京"
        }

        this.props.upDateUserInfo({
            cityName: cityName
        });

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
}

const mapDispatchToProps = (dispatch) => {
    return {
        upDateUserInfo: (data) => {
            dispatch(userActions.userUpDate(data))
        }
    }
};

export default connect(null, mapDispatchToProps)(App)
