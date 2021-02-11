import React, { useContext, useState } from "react";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";

import CurrentUserContext from "../../contexts/current-user/current-user.context";
import CartContext from "../../contexts/cart/cart.context";

const Header = () => {
    const currentUser = useContext(CurrentUserContext);
    const [hidden, setHidden] = useState(true);
    const toggleHidden = () => setHidden(!hidden);

    return (
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
        <CartContext.Provider
            value = {{hidden, toggleHidden}}
        >
        <CartIcon />
        </CartContext.Provider>
        </OptionsContainer> 
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);