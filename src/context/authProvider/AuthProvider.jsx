import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from '../authContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
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

    // observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setUser,
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