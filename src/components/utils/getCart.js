import useAxiosPublic from "@/Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { getFilteredProducts } from "./getFilteredProducts";


/* make subtotal of selected products */
export const getSum = (products) => {
    let sum = 0;
    products?.forEach(product => {
        sum += product?.price;
    });

    return sum
}

/* Get selected products info from local storage */
export const getSelectedProductsInfo = () => {
    const existingProducts = JSON.parse(localStorage.getItem('selected-products')) || [];

    return existingProducts
}

/* Get selected products */
export const getSelectedProducts = (products) => {

    const existingProductsInfo = getSelectedProductsInfo();

    const existingProducts = products?.filter(product => {
        /* Check the product on the LS */
        const isExists = getFilteredProducts(existingProductsInfo, product, true)
        // const isExists = existingProductsInfo.filter(productOnLS => productOnLS?.menuId === product?._id);

        /* If exist then the product filtered */
        if (isExists) return product
    })

    console.log('Selected Products: ', existingProducts);

    return existingProducts
}

/* Select a product */
export const selectProduct = (product) => {

    if (product?._id) {
        const productInfo = {
            menuId: product?._id,
            selectedOn: new Date().toString(),
        }

        const existingProductsInfo = getSelectedProductsInfo()

        // Add the new product to the array
        existingProductsInfo.push(productInfo);

        // Store the updated array back in localStorage
        localStorage.setItem('selected-products', JSON.stringify(existingProductsInfo));

        console.log('Product added to localStorage:', product);
        return true
    }
    return false
}

/* deselect a product of given id from local storage */
export const deselectProduct = (id) => {
    if (id) {
        const existingProductsInfo = getSelectedProductsInfo()

        console.log('Selected products', existingProductsInfo);

        // Add the new product to the array
        const newSelections = existingProductsInfo.filter(product => product?.menuId !== id);

        // Store the updated array back in localStorage
        localStorage.setItem('selected-products', JSON.stringify(newSelections));

        return true
    }

    return false
}

/* Get Cart from db */
export const getCart = (email) => {
    // const axiosSecure = useAxiosPublic();
    console.log('email on getCart: ', email);

    if (!email) return []

    // const { data: cart = [], isLoading, isPending, refetch } = useQuery({
    //     enabled: !!email,
    //     queryKey: [ 'cart', email ],
    //     queryFn: async () => {
    //         const cart = await axiosSecure.get('/cart', { email });

    //         console.log(cart);
    //         return cart?.data
    //     }
    // })

    // return { cart, isLoading, isPending, refetch }
    return []
}

/* Add product to the Cart */
export const saveToCart = ({ email, product }) => {
    const axiosSecure = useAxiosPublic();
    console.log('email and Id on addToCart: ', email, product?._id);

    if (!email || product?._id) return null

    const selectedOn = new Date().toString();

    const res = axiosSecure.post('/add-to-cart', {
        menuId: product?._id,
        selectedOn,
        orderOn: '',
        purchasedOn: ''
    })

    /* Testing purpose */
    if (res?.data?.insertedId) {
        console.log(res?.data);
    } else {
        console.log('Something error.')
    }

    return res?.data
}

/* Get products of cart */
export const getProductsOfCart = (cart) => {
    console.log('Products info in cart: ', cart);
    const unAvailableProducts = [];

    const { data: cartProducts = [], isLoading, isPending, refetch } = useQuery({
        enabled: !!email,
        queryKey: [ 'ProductsInCart', email ],
        queryFn: async () => {
            /* get all products from db */
            const { products, isLoading } = getAllProducts()

            if (!isLoading) {
                const productsInCart = [];

                /* Filter cart products from all products in db */
                cart.forEach(cartProductInfo => {
                    let searchedProduct = products.filter(product => product?._id === cartProductInfo?.menuId)

                    if (searchedProduct?.length)
                        productsInCart.push(...searchedProduct)
                    else unAvailableProducts.push(cartProductInfo)
                });

                // console.log(productsInCart);
                return productsInCart
            }
        }
    })

    return { cartProducts, unAvailableProducts, isLoading, isPending, refetch }
}