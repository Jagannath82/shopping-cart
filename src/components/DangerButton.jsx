import React, { Component } from 'react';
import ShoppingCart from './shopping-cart/shoppingCart';

class DangerButton extends Component {
    render() {
        return (
            <div>
                <h2> Hello Shopping </h2>
                <ShoppingCart/>
            </div>
        );
    }
}

export default DangerButton;