import React from 'react'

import './style.scss'
export default (props)=>{
    const {username,city} =props;
    return(
        <div className="userinfo-container">
            <p>
                <i className="icon-user"></i>
                &nbsp;
                <span>{username}</span>
            </p>
            <p>
                <i className="icon-location"></i>
                &nbsp;
                <span>{city}</span>
            </p>
        </div>
    )
}