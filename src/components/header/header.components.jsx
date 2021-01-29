import React from "react";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentuser } from "../../redux/user/user.selectors";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";

const Header = ({ currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
           <Logo className="logo"></Logo>
        </LogoContainer>
        <OptionsContainer>
        <OptionLink to="/shop">
            SHOP
        </OptionLink>
        <OptionLink to="/shop">
            CONTACT
        </OptionLink>
        {
            currentUser ?
            <OptionLink onClick={()=> auth.signOut()}>SIGN OUT</OptionLink>
            :
            <OptionLink to="/signin">SIGN IN</OptionLink>
        }
        <CartIcon />
        </OptionsContainer> 
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentuser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);