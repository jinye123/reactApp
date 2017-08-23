import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './buy.scss';

export default class Buy extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    onBuyHandle = () => {
        this.props.buyHandle();
    };

    onStoreHandle = () => {
        this.props.changeStore()
    };

    render() {
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        this.props.isStore==='true'
                            ? <button className="selected" onClick={this.onStoreHandle}>已收藏</button>
                            : <button onClick={this.onStoreHandle}>收藏</button>
                    }

                </div>
                <div className="item-container float-right">
                    <button onClick={this.onBuyHandle}>购买</button>
                </div>
            </div>
        )
    }
}
