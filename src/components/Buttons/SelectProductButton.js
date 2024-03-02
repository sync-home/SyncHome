"use client"
import useAuthContext from "@/Hooks/useAuthContext";
import { Box } from "@mui/material";
import { useState } from "react";

const SelectProductButton = ({ product }) => {
    const [ isSelected, setIsSelected ] = useState(false)

    /* base styles */
    const styles = 'text-nowrap hover:bg-opacity-70 px-5 py-2 w-min cursor-pointer text-white';

    const { handleSelect } = useAuthContext()

    return (
        <Box onClick={() => { setIsSelected(!isSelected); return handleSelect(product) }} className={isSelected ? styles + ' bg-green-950' : styles + '  bg-blue-950'}>
            {isSelected ? "Selected" : "Select"}
        </Box>
    );
};

export default SelectProductButton;