import React from 'react';
import Item from './Item';
import './orderList.scss';

export default (props)=>{
    const data=props.data;
    console.log(props.updataComment);
    return(
        <div className="order-list-container">
            <h2>您的订单</h2>
            {
                data.map((item,index)=>{
                    return <Item
                        commentAdd={props.addComment}
                        commentCancel={props.cancelComment}
                        commentUpdata={props.updataComment}
                        key={index}
                        data={item}
                    />
                })
            }
        </div>

    )
}