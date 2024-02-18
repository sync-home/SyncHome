'use client'
import auth from "@/config/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext([])

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    // google sign up
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    /* Sign Out */
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    /* Update profile */
    const updateUserInfo = (displayName, photoURL) => {
        setLoading(true)
        if (photoURL)
            return updateProfile(auth.currentUser, {
                displayName, photoURL
            });

        return updateProfile(auth.currentUser, {
            displayName, photoURL: auth?.currentUser?.photoURL
        });
    }

    /* Update Email */
    const userEmailUpdate = async (email) => {
        setLoading(true)
        await sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('check your email to verify.');
            });

        if (user?.emailVerified) return updateEmail(auth.currentUser, email)
        console.log('Something wrong. Try again later.');
    }

    /* Update password */
    const userPassChange = async (newPassword) => {
        setLoading(true)
        await sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('check your email to verify.');
            });

        if (user?.emailVerified) return updatePassword(user, newPassword);
        console.log('Something wrong. Try again later.');
    }

    // on state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('on state change', currentUser)

            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        googleLogin,
        logIn,
        logOut,
        updateUserInfo,
        userEmailUpdate,
        userPassChange
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;