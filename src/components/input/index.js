import React, {Component} from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";

export default class Input extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <input
                style={{width:"200px",height:"50px"}}
                value={this.state.value}
                onChange={this.onChangeValue}
                onKeyUp={this.onKeyUpHandler}
                type="text"
            />
        )
    }

    onChangeValue = (e) => {
        this.setState({
            value:e.target.value
        })
    };

    onKeyUpHandler=(e)=>{
        if(e.keyCode===13&&this.state.value.trim()){
            this.props.onSubmitFn(this.state.value);
            this.setState({
                value:''
            })
        }
    }
}