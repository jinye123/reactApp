import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './item.scss';

export default class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }

    showComment = (id) => {
        this.props.commentAdd(id)
    };

    hideComment = (id) => {
        this.props.commentCancel(id)
    };

    submitComment = (id) => {
        let value = this.state.value.trim();
        if (!value) {
            return
        }
        let data = {
            id: id,
            value: value
        };
        this.props.commentUpdata(data, id, value);
        this.setState({
            value: ''
        })
    };

    changeValue = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    render() {
        const data = this.props.data;
        return (
            <div className="order-item-container">
                <div className="clear-fix">
                    <div className="order-item-img float-left">
                        <img src={data.img}/>
                    </div>
                    <div className="order-item-comment float-right">
                        {
                            data.commentState === 0
                                ? <button onClick={() => this.showComment(data.id)} className="btn">评价</button>
                                : data.commentState === 2
                                ? <button className="btn unseleted-btn">已评价</button>
                                : ''
                        }
                    </div>
                    <div className="order-item-content">
                        <span>商户：{data.title}</span>
                        <span>数量：{data.count}</span>
                        <span>价格：￥{data.price}</span>
                    </div>
                </div>
                {
                    data.commentState === 1
                        ? <div className="comment-text-container">
                        <textarea
                            value={this.state.value}
                            onChange={this.changeValue}
                            style={{width: '100%', height: '80px'}}
                            className="comment-text"
                            ref="commentText"></textarea>
                        <button className="btn" onClick={() => {
                            this.submitComment(data.id)
                        }}>提交
                        </button>
                        &nbsp;
                        <button className="btn unseleted-btn" onClick={() => {
                            this.hideComment(data.id)
                        }}>取消
                        </button>
                    </div>
                        : data.commentState === 2
                        ? <p className="commentP">评论 : {data.value}</p>
                        : ''
                }
            </div>
        )
    }
}