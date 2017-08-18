import React, {Component} from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";


class App extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="App">
                <div>Header</div>
                {this.props.children}
                <div>Footer</div>
            </div>
        );
    }
}

export default App;
