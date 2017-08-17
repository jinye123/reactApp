import React,{Component} from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
// import Input from '../../components/input';
import List from '../../components/list';

export default class TodoList extends Component{
    constructor(){
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            todo:[{id:0,value:"hhhh"}]
        }
    }

    render(){
        return(
            <div>
                {/*<Input onSubmitFn={this.onSubmite()} />*/}
                <List todos={this.state.todo} deletClick={this.onDelete} />
            </div>
        )
    }

    onSubmite=(value)=>{
        var id=this.state.todo.length;
        this.setState({
            todo:this.state.todo.concat({
                id:id,
                value:value
            })
        })
    };

    onDelete=(id)=>{
        this.setState({
            todo:this.state.todo.filter(function (item) {
                return item.id!==id
            })
        })
    }
}