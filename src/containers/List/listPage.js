import React,{Component} from 'react';
import {Link} from "react-router";
import {getData,postData} from '../../fetch/data';

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
                <div onClick={this.onFetchGet}>Get</div>
                <div onClick={this.onFetchPost}>post</div>
            </ul>
        )
    }

    onFetchGet=()=>{
        getData('/api').then(res=>{
            console.log(res)
        })
    };

    onFetchPost=()=>{
        postData('/api/post',{name:"jinye",id:3})
            .then(res=>{
                console.log(res.name)
            })
    }
}