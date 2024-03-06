"use client"
import { Box } from "@mui/material";
import { useState } from "react";
import { deselectProduct, selectProduct } from "../utils/getReadyCartLS";
import useAuthContext from "@/Hooks/useAuthContext";

const SelectProductButton = ({ product, selected }) => {
    const [ isSelected, setIsSelected ] = useState(selected)
    const { selectedProducts, setSelectedProducts } = useAuthContext();

    /* base styles */
    const styles = 'text-nowrap hover:bg-opacity-70 px-5 py-2 w-min cursor-pointer text-white';

    const handleSelect = () => {

        if (selectedProducts?.length !== undefined) {
            if (!isSelected) {
                /* Add to LS */
                const res = selectProduct({ product });

                /* Update in state */
                if (res) {
                    setSelectedProducts([ ...selectedProducts, product ])
                    setIsSelected(true)
                } else {
                    console.error('Something wrong');
                }

            } else {
                /* Remove from LS */
                const res = deselectProduct(product?._id);

                /* Update in state */
                if (res) {
                    const remaining = selectedProducts?.filter(theProduct => theProduct?._id !== product?._id);
                    setSelectedProducts(remaining)
                    setIsSelected(false)
                } else {
                    console.error('Something wrong');
                }
            }
        } else {
            console.error('Something wrong in handleSelect.', selectedProducts);
        }

    }

    return (
        <Box onClick={handleSelect} className={isSelected ? styles + ' bg-green-950' : styles + '  bg-blue-950'}>
            {isSelected ? "Selected" : "Select"}
        </Box>
    );
};

export default SelectProductButton;