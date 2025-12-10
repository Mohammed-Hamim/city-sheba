import React, { Children } from 'react';
import { AuthContext } from '../authContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    // sign up in with email and password 
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // log in with email and password 
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google sign in 
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }
    const authInfo = {
        registerUser,
        logIn,
        googleSignIn
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;