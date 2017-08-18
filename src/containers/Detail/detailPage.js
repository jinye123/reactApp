import React,{Component} from 'react';

class DetailPage extends Component{
    render(){
        return(
            <div>{this.props.params.id}</div>
        )
    }
}

export default DetailPage;