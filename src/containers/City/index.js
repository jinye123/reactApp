import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header';
import {hashHistory} from 'react-router';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';
import {connect} from 'react-redux';
import * as userActions from '../../actions/user';
import {CITYNAME} from '../../config/localstoreKey';
import localStorage from '../../util/localStorage';

class City extends Component {
    constructor(){
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    onChangeCity=(cityName)=>{

        this.props.upDateUserInfo({
            cityName: cityName
        });

        localStorage.setItem(CITYNAME,cityName);

        hashHistory.push('/')
    };

    render(){
        return (
            <div>
                <Header title='选择城市'/>
                <CurrentCity cityName={this.props.userInfo}/>
                <CityList changeCity={this.onChangeCity}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo:state.userInfo.cityName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        upDateUserInfo: (data) => {
            dispatch(userActions.userUpDate(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(City)
