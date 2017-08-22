import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchHeader from '../../components/SearchHeader';
import List from './subpage/List';
import {connect} from 'react-redux';

class Search extends Component {
    constructor(){
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount(){

    }

    componentDidUpdate(){

    }

    render(){
        const params=this.props.params;
        return (
            <div>
                <SearchHeader keywold={params.keyword||''}/>
                <List category={params.category} keywold={params.keyword||''} userInfo={this.props.userInfo} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo:state.userInfo.cityName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)
