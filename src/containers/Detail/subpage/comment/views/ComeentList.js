import React from 'react';
import Item from './Item';
import './commentList.scss';

export default (props) => {
    const data=props.data;
    return(
        <div className="comment-list">
            {
                data.map((item,index)=>{
                    return <Item key={index} data={item} />
                })
            }
        </div>
    )
}