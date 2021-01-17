import React from "react";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import cartItem from "../cart-item/cart-item.component";

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(carItem => (
                <cartItem key={cartItem.id} key={cartItem} />
            )              
        )}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    
    </div>
);

const mapStateToProps = ({cart: { cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);