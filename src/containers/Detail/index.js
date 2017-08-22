import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header';
import {Info} from './subpage/Info/index';
import {Comment} from './subpage/comment/index';

export default class Detail extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const params = this.props.params;
        return (
            <div>
                <Header title="商品详情"/>
                <Info id={params.id}/>
                <Comment id={params.id}/>
            </div>
        )
    }
}
