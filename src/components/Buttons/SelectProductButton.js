"use client"
import { Box } from "@mui/material";
import { useState } from "react";
import { deselectProduct, selectProduct } from "../utils/getCart";
import useAuthContext from "@/Hooks/useAuthContext";

const SelectProductButton = ({ product, selected }) => {
    const [ isSelected, setIsSelected ] = useState(selected)
    const { selectedProducts, setSelectedProducts } = useAuthContext();

    /* base styles */
    const styles = 'text-nowrap hover:bg-opacity-70 px-5 py-2 w-min cursor-pointer text-white';

    const handleSelect = (product) => {

        if (selectedProducts?.length !== undefined) {
            if (!isSelected) {
                const res = selectProduct(product);

                if (res) {
                    setSelectedProducts([ ...selectedProducts, product ])
                    setIsSelected(true)
                }
                console.log('Selected ', product);

            } else {
                const res = deselectProduct(product?._id);

                if (res) {
                    const remaining = selectedProducts?.filter(theProduct => theProduct?._id !== product?._id);
                    setSelectedProducts(remaining)
                    setIsSelected(false)
                }
                console.log('De-Selected ', product);
            }
        } else {
            console.error('Something wrong in handleSelect.', selectedProducts);
        }

    }

    return (
        <Box onClick={() => handleSelect(product)} className={isSelected ? styles + ' bg-green-950' : styles + '  bg-blue-950'}>
            {isSelected ? "Selected" : "Select"}
        </Box>
    );
};

export default SelectProductButton;