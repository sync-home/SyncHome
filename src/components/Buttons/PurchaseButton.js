"use client"
import Link from 'next/link';

const PurchaseButton = () => {

    return (
        <Link href={`/orders`} sx={{
            px: '10px', py: '5px', fontSize: '1rem', border: '1px solid blue', borderRadius: '5px', cursor: 'pointer', '&:hover': {
                opacity: '0.7',
            }
        }}  >
            Order Now
        </Link>
    );
};

export default PurchaseButton;