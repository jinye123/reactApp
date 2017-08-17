import React, {Component} from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";

export default class List extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <ul>
                {
                    this.props.todos.map((item, index) => {
                        return <li
                            key={index}
                            onClick={({item.id}) => {this.handleClick(ev)}}
                            // onClick={()=>{this.clickHandle()}}
                        >{item.value}</li>
                    })
                }
            </ul>
        )
    }

    handleClick = (id) => {
        this.props.deletClick(id)
    }
}