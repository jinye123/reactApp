import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class City extends Component {
    constructor(){
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return (
            <div>
                <h3>City</h3>
            </div>
        )
    }
}
