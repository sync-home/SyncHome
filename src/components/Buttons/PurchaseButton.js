"use client"
import { Box } from '@mui/material';
import { getSum } from '../utils/getCart';
import { toast } from 'react-toastify';

const PurchaseButton = ({ products }) => {

    const handlePurchase = (products) => {

        const subTotal = getSum(products)
        console.log('Purchased', subTotal);

        toast.warning(`Your are going to purchase subtotal: ${subTotal}`, {
            position: 'top-center',
            autoClose: 1300,
        })

    }

    return (
        <Box onClick={() => handlePurchase(products)} sx={{
            px: '10px', py: '2px', border: '1px solid blue', borderRadius: '5px', cursor: 'pointer', '&:hover': {
                opacity: '0.7',
            }
        }}  >
            Purchase
        </Box>
    );
};

export default PurchaseButton;