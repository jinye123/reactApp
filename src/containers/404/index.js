import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class Home extends Component {
    constructor(){
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return (
            <div>
                <h3>404 not found</h3>
            </div>
        )
    }
}
