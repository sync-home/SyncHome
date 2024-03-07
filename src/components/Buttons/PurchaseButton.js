"use client"
import { Box } from '@mui/material';

const PurchaseButton = () => {

    return (
        <Box component={'a'} href={`/orders`} sx={{
            px: '10px', py: '5px', fontSize: '1rem', border: '1px solid blue', borderRadius: '5px', cursor: 'pointer', '&:hover': {
                opacity: '0.7',
            }
        }}  >
            Checkout
        </Box>
    );
};

export default PurchaseButton;