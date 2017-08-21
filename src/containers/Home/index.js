import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeHeader from '../../components/HomeHeader';
import CateGory from '../../components/CateGory';
import Ad from './subpage/Ad';
import List from './subpage/List';
import {connect} from 'react-redux';

class Home extends Component {
    constructor(){
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount(){

    }

    render(){
        return (
            <div>
                <HomeHeader userInfo={this.props.userInfo} />
                <CateGory/>
                <div style={{height:"15px"}}></div>
                <Ad/>
                <List userInfo={this.props.userInfo} />
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

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
