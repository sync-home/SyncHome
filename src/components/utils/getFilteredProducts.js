/**
 * 
 * @param {Array} products The Array of products
 * @param {Object} product The product to be filtered from or check isExists in `products`
 * @param {Boolean} isExistTesting Testing mode on or off
 * @returns Filtered product
 */
export const getFilteredProducts = (products, product = {}, isExistTesting = false) => {

    if (products?.length !== undefined) {
        if (isExistTesting) {
            const filteredProducts = products.filter(theProduct => theProduct?.title === product?.title);

            /* Return true if exists other than false */
            return filteredProducts?.length ? true : false
        } else {
            const filteredProducts = products.filter(theProduct => theProduct?.title !== product?.title);

            /* Return the existing array other than the product */
            return filteredProducts
        }
    }

    console.error('Something wrong. Check your provided arguments in `getFilteredProducts`');
    // return new Error();
}