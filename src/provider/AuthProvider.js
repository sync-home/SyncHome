'use client'
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import useLoadAllProducts from "@/Hooks/useLoadAllProducts";
import useLoadCart from "@/Hooks/useLoadCart";
import { getCart, getSelectedProducts } from "@/components/utils/getReadyCartLS";
import auth from "@/config/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext([])

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const axiosSecure = useAxiosSecure();
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true);
    const [ selectedProducts, setSelectedProducts ] = useState([])
    const [ products, setProducts ] = useState([])

    const { products: AllProducts, isLoading } = useLoadAllProducts();

    /* Get save products in cart */
    // const [ cart, setCart ] = useState([])
    const { cart, isLoadingCart, isPendingCart, refetchCart } = useLoadCart()

    // console.log('Product in cart: ', cart);

    /* Load all products */
    useEffect(() => {
        if (!isLoading && AllProducts?.length) {
            setProducts(AllProducts);
        }
    }, [ isLoading, AllProducts ])

    /* Set selected Products in state */
    useEffect(() => {
        if (!isLoading && AllProducts?.length) {
            const selectedProductsOnLocalStorage = getSelectedProducts(AllProducts);

            /* Update selected products in state */
            setSelectedProducts(selectedProductsOnLocalStorage)
        }
    }, [ isLoading, AllProducts ])

    /* Set cart to state */
    useEffect(() => {
        if (user?.email) {
            if (!isPendingCart && !isLoadingCart) {
                /* check updates of cart */
                // if (selectedProducts?.length !== cart?.length) refetchCart()

                const { cartProducts, unAvailableProducts, isLoading: isLoadingProducts, isPendingProducts, refetch: refetchProducts } = getProductsOfCart(cart)

                if (unAvailableProducts?.length) {
                    /* TODO: Request to remove and change color of the products in cart */
                    console.log('Unavailable products in cart: ', unAvailableProducts);
                }

                // if (!isPendingProducts && !isLoadingProducts) setSelectedProducts(cartProducts)
            }
        }
    }, [ user?.email ])

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
                        console.log('cookie setting error: ', res?.data?.error);
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
                    console.log('cookie resetting error: ', res?.data?.error);
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


    const authInfo = {
        products,
        isLoading,
        selectedProducts,
        setSelectedProducts,
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