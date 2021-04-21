import React, { Suspense, useEffect, lazy } from "react";
import { Route } from 'react-router-dom';
import { Switch, Redirect } from "react-router-dom";
import './App.css';

import Header from "./components/header/header.components";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentuser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

//const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
import HomePage from './pages/homepage/homepage.component';
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUpPage = lazy(() => import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

    return (
      <div>
        <Header />
        <Switch>
        <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HomePage} />     
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={()=> currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
          <Route exact path='/checkout' component={CheckoutPage} />
          </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
