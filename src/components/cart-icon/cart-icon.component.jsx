import React, { useContext } from "react";

import { CartContext } from "../../providers/cart/cart.provider";

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({itemCount}) => {
    const { toggleHidden, cartItemsCount } = useContext(CartContext);
    return (
    <div className="cart-icon" onClick={toggleHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{cartItemsCount}</span>
    </div>

);
};


export default CartIcon;