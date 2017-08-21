import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchHeader from '../../components/SearchHeader';


export default class Search extends Component {
    constructor(){
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount(){

    }

    render(){
        const params=this.props.params;
        return (
            <div>
                <SearchHeader keywold={params.keyword||''}/>
            </div>
        )
    }
}
