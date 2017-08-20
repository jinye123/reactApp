import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeHeader from '../../components/HomeHeader';
import CateGory from '../../components/CateGory';
import Ad from './subpage/Ad';

export default class Home extends Component {
    constructor(){
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return (
            <div>
                <HomeHeader/>
                <CateGory/>
                <div style={{height:"15px"}}></div>
                <Ad/>
            </div>
        )
    }
}
