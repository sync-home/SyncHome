'use client'
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import auth from "@/config/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext([])

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const axiosSecure = useAxiosSecure();
    const [ user, setUser ] = useState(null)
    const [ selectedProducts, setSelectedProducts ] = useState([ {
        "title": "Gift pen 2 pics",
        "price": 10,
        "specifications": "Our new brand for pen, each pan has 3ml ink and 0.02mm nip radius. You can write 1000m."
    }, {
        "title": "Gift pen 6 pics",
        "price": 12,
        "specifications": "Our new brand for pen, each pan has 3ml ink and 0.02mm nip radius. You can write 1000m."
    } ])
    const [ loading, setLoading ] = useState(true);

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
            if (currentUser) {
                const userInfo = { email: currentUser?.email };

                try {
                    axiosSecure.post("/auth/jwt", userInfo).then((res) => {
                        console.log('cookie set', res?.data?.error);
                        return !res?.data?.error && setLoading(false);
                    });
                } catch (error) {
                    return toast.error('Something wrong! Please login again to solve it.', {
                        position: 'top-center',
                        autoClose: 1500,
                    })
                }
            } else {
                // remove token
                axiosSecure.post("/auth/logout", currentUser).then((res) => {
                    console.log('cookie reset', res?.data?.error);
                    return !res?.data?.error && setLoading(false);
                });
            }
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe();
        }
    }, [])


    /* Shop */
    const handleSelect = (product) => {
        const newSelection = [ ...selectedProducts, product ]
        setSelectedProducts(newSelection)
    }

    const authInfo = {
        handleSelect,
        selectedProducts,
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