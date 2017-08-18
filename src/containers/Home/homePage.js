import React,{Component} from 'react';
import {Link} from 'react-router'

class HomePage extends Component {
    render(){
        return (
            <div>
                <p>Home</p>
                <Link to="/list">To List</Link>
            </div>
        )
    }
}

export default HomePage;