"use client"
import { Box } from '@mui/material';
import { getSum } from '../utils/getCart';

const PurchaseButton = ({ products }) => {

    const handlePurchase = (products) => {
        console.log('Purchased');

        const subTotal = getSum(products)
    }

    return (
        <Box onClick={() => handlePurchase(products)} sx={{ px: '10px', py: '2px', border: '1px solid blue', borderRadius: '5px' }} >
            Purchase
        </Box>
    );
};

export default PurchaseButton;