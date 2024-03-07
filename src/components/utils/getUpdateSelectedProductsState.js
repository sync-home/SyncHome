import { getFilteredProducts } from "./getFilteredProducts";

const getUpdateSelectedProductsState = ({ selectedProducts, setSelectedProducts, setIsSelected, product, add = true }) => {
    if (!product?.hasOwnProperty?.length) return false

    if (add) {
        setSelectedProducts && setSelectedProducts([ ...selectedProducts, product ])
        setIsSelected && setIsSelected(true)
        return !!setSelectedProducts
    } else {
        const remaining = getFilteredProducts(selectedProducts, product);
        setSelectedProducts && setSelectedProducts(remaining)
        setIsSelected && setIsSelected(false)
        return !!setSelectedProducts
    }
};

export default getUpdateSelectedProductsState;