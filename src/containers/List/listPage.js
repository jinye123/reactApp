import React,{Component} from 'react';
import {Link} from "react-router";

export default class ListPage extends Component{
    constructor(){
        super();

    }

    render(){
        return(
            <ul>
                <Link to="/detail/1" >detail1</Link>
                <Link to="/detail/2" >detail2</Link>
                <Link to="/detail/3" >detail3</Link>
            </ul>
        )
    }
}