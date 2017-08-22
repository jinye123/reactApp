import React from 'react'
import Star from '../../../../../components/Star'

import './detaiInfo.scss';

export default (props) => {
    const data = props.data;
    return (
        <div id="detail-info-container">
            <div className="info-container clear-fix">
                <div className="info-img-container float-left">
                    <img src={data.img}/>
                </div>
                <div className="info-content">
                    <h1>{data.title}</h1>
                    <div className="star-container">
                        <Star star={data.star}/>
                        <span className="price">￥{data.price}</span>
                    </div>
                    <p className="sub-title">{data.subTitle}</p>
                </div>
            </div>
            <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></p>
        </div>
    )
}
