/**
 * Filter products other than product or return true if exists in the products
 * @param {Array} products The Array of saved products 
 * @param {Object} product The product to be filtered from or check isExists in `products`
 * @param {Boolean} isExistTesting Testing mode on or off
 * @returns Filtered product
 */
export const getFilteredProducts = (products, product = {}, isExistTesting = false) => {
    if (products?.length !== undefined) {
        let filteredProducts = [];

        /* check the products are in Carts/saved in LS or not */
        if (products?.[ 0 ]?._id) {
            filteredProducts = products.filter(theProduct => theProduct?._id === product?._id);
        } else {
            filteredProducts = products.filter(theProduct => theProduct?.menuId === product?._id);
        }

        /* check mode */
        if (isExistTesting) {
            /* Return true if exists other than false */
            return filteredProducts?.length ? true : false
        } else {
            /* Return the existing array other than the product */
            return filteredProducts
        }
    }

    console.error('Something wrong. Check your provided arguments in `getFilteredProducts`');
}