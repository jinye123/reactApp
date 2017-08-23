import React from 'react';
import Item from './Item';
import './orderList.scss';

export default (props)=>{
    const data=props.data;
    return(
        <div className="order-list-container">
            <h2>您的订单</h2>
            {
                data.map((item,index)=>{
                    return <Item key={index} data={item}/>
                })
            }
        </div>

    )
}