import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

const SignIn = ( {emailSignInStart, googleSignInStart} ) => {
    const [userCredential, setCredential] = useState({ email: '', password: ""});
    const {email, password} = userCredential;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setCredential({ ...userCredential, [name]: value})
    }

        return (
            <div className="sign-in">
                <h2> I already have an account
                </h2>
                <span>Sign in with you email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput name="email" type="email" handleChange={handleChange} value={email} label="email" required />
                    <FormInput name="password" type="password" handleChange={handleChange} value={password} label="password" required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);