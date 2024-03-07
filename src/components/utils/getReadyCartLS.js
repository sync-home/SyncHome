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

/**
 *  Get selected products info from local storage 
 * @returns Array of selected products info like menuId, selected date useEffect
 */
export const getSelectedProductsInfo = () => {
    const productsInLS = localStorage.getItem('selected-products');
    const existingProducts = JSON.parse(productsInLS) || [];

    // console.log(existingProducts)
    return existingProducts
}

/**
 * Get all selected products
 * @param {Array} products All products
 * @returns selected products among all products
 */
export const getSelectedProducts = (products) => {

    const existingProductsInfo = getSelectedProductsInfo();

    if (!existingProductsInfo?.length) return [];

    const existingProducts = products?.filter(product => getFilteredProducts(existingProductsInfo, product, true))

    return existingProducts
}

/**
 * Select the `product` and save info to LS
 * @param {Object} product The product requested to select by user
 * @param {Number} quantity quantity of the product
 * @returns Boolean 
 */
export const selectProduct = ({ product, quantity = 1 }) => {

    if (product?._id) {
        /* Previous selection */
        let existingProductsInfo = getSelectedProductsInfo()

        /* Check already exists or not */
        const isExists = getFilteredProducts(existingProductsInfo, product, true)

        // console.log(isExists);
        /* is already exist */
        if (isExists && quantity === 1) return true

        /* save the product */
        const productInfo = {
            menuId: product?._id,
            quantity,
            selectedOn: new Date().toString(),
            status: 'selected'
        }

        // Store the updated array back in localStorage
        localStorage.setItem('selected-products', JSON.stringify([ ...existingProductsInfo, productInfo ]));

        return true
    }
    return false
}

/**
 * Remove the product info from LS
 * @param {String} id Deselect the product varying the id
 * @returns Boolean
 */
export const deselectProduct = (id) => {
    if (id) {
        const existingProductsInfo = getSelectedProductsInfo();
        // console.log('LS Info: ', existingProductsInfo)

        // Add the new product to the array
        const newSelections = existingProductsInfo.filter(product => product?.menuId !== id);

        // Store the updated array back in localStorage
        localStorage.setItem('selected-products', JSON.stringify(newSelections));

        return true
    }

    return false
}

/* Add product to the Cart */
export const saveToCart = ({ email, product }) => {
    const axiosSecure = useAxiosPublic();
    // console.log('email and Id on addToCart: ', email, product?._id);

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
        // console.log(res?.data);
    } else {
        // console.log('Something error.')
    }

    return res?.data
}

/* Get products of cart */
export const getProductsOfCart = (cart) => {
    // console.log('Products info in cart: ', cart);
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