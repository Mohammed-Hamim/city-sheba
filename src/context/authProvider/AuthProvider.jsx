import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from '../authContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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

    // update user 
    const updateUser = (userInfo) => {
        console.log(userInfo)
        return updateProfile(auth.currentUser, userInfo)
    }



    // function for log out
    const LogOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        setUser,
        registerUser,
        logIn,
        googleSignIn,
        LogOut,
        updateUser
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;