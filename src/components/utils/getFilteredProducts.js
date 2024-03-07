/**
 * Filter products other than product or return true if exists in the products
 * @param {Array} products The Array of saved products 
 * @param {Object} product The product to be filtered from or check isExists in `products`
 * @param {Boolean} isExistTesting Testing mode on or off if false [default] will return the remaining products, if true return boolean [is the product exist in the products or not]
 * @returns Filtered product
 */
export const getFilteredProducts = (products, product = {}, isExistTesting = false) => {
    if (products?.length !== undefined) {
        let filteredProducts = [];

        /* check the products are in Carts/saved in LS or not */


        /* check mode */
        if (isExistTesting) {
            if (products?.[ 0 ]?._id) {
                filteredProducts = products.filter(theProduct => theProduct?._id === product?._id);
            } else {
                filteredProducts = products.filter(theProduct => theProduct?.menuId === product?._id);
            }
            /* Return true if exists other than false */
            return filteredProducts?.length ? true : false
        } else {
            if (products?.[ 0 ]?._id) {
                filteredProducts = products.filter(theProduct => theProduct?._id !== product?._id);
            } else {
                filteredProducts = products.filter(theProduct => theProduct?.menuId !== product?._id);
            }
            /* Return the existing array other than the product */
            return filteredProducts
        }
    }

    console.error('Something wrong. Check your provided arguments in `getFilteredProducts`');
}