import { takeLatest, put } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import { googleSignInFailure, googleSignInSuccess, emailSignInSuccess, emailSignInFailure } from "./user.actions";

import { auth, googleProvider, createUserProfileDocument } from "../../firebase/firebase.utils";
import { getAllByAltText } from "@testing-library/react";

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithGoogle(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data()}));
        console.log(userRef);
    } catch(error) {
        yield put(googleSignInFailure(error));
    }
}

export function* signInWithEmail({payload: { email, password }}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
    } catch(error) {
        yield put(emailSignInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart)]);
}