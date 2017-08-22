import React from 'react';

import './style.scss';

export default (props) => {
    const starNum = props.star || 0;
    return (
        <div className="star-container">
            {
                [1, 2, 3, 4, 5].map((item, index) => {
                    const lightClass = starNum > item ? 'light' : '';
                    return (<i key={index} className={"icon-star-full " + lightClass}></i>)
                })
            }
        </div>
    )
}