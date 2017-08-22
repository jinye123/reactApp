import React from 'react';
import Star from '../../../../../components/Star';
import './item.scss';

export default (props) => {
    const item=props.data;
    return(
        <div className="comment-item">
            <h3>
                <i className="icon-user"></i>
                &nbsp;
                {item.username}
            </h3>
            <Star star={item.star}/>
            <p>{item.comment}</p>
        </div>
    )
}