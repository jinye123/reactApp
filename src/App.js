import React, {Component} from 'react';
import TodoList from './containers/todoList';
import PureRenderMixin from "react-addons-pure-render-mixin";

class App extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="App">
                <TodoList/>
            </div>
        );
    }
}

export default App;
